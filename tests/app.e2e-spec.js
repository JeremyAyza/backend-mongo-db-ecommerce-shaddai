jest.setTimeout(40000);

const {
  default: mongoose,
  Types: { ObjectId },
} = require("mongoose");
const app = require("../app");
const request = require("supertest");
const cleanDb = require("./helpers/cleanDb");
const createUsersAndGetTheirJwts = require("./helpers/createUsersAndGetTheirJwts");
const Category = require("../models/Category");

const Product = require("../models/Product");

const Provider = require("../models/Provider");
const getProductStub = require("./stubs/getProduct.stub");
const toJson = require("./helpers/toJson");
const populateDb = require("./helpers/populateDb");
describe("E2E Testing", () => {
  let server;
  let jwts = { admin: "", normal: "", bloqued: "", no_exists: "" };
  let categoryIdInDb = "";
  let providerIdInDb = "";
  beforeAll(async () => {
    server = app.listen(3000);
    await cleanDb();
    jwts = await createUsersAndGetTheirJwts();
    categoryIdInDb = (await Category.create({ name: "Categoria para prueba" }))
      ._id;
    providerIdInDb = (
      await Provider.create({
        name: "Proveedor para la prueba",
        email: "emailprov.gmail.com",
        phone: "143443322",
        address: "deafeafea",
        ruc: "12312312323",
      })
    )._id;
  });
  afterAll(async () => {
    await cleanDb();
    await server.close();
    await mongoose.connection.close();
  });
  describe("/PRODUCT", () => {
    const createProductRequest = async ({ product, jwt }) => {
      return await request(server)
        .post("/api/product")
        .set("x-auth-token", jwt)
        .send(product);
    };
    describe("/ (POST)", () => {
      beforeAll(async () => {
        await cleanDb();
        jwts = await createUsersAndGetTheirJwts();
        categoryIdInDb = (
          await Category.create({ name: "Categoria para prueba" })
        )._id;
        providerIdInDb = (
          await Provider.create({
            name: "Proveedor para la prueba",
            email: "emailprov.gmail.com",
            phone: "143443322",
            address: "deafeafea",
            ruc: "12312312323",
          })
        )._id;
      });
      describe("Datos válidos y un jwt admin", () => {
        it("deberia devolver un status 201, el mensaje, 'Product Created Successfully' y el producto debe guardarse", async () => {
          const validProduct = getProductStub({
            category: categoryIdInDb,
            provider: providerIdInDb,
          });
          const { status, body } = await createProductRequest({
            product: validProduct,
            jwt: jwts.admin,
          });
          const productExistsAfter = Boolean(
            await Product.findOne({ name: validProduct.name })
          );
          expect(status).toBe(201);
          expect(body).toBe("Product Created Successfully");
          expect(productExistsAfter).toBeTruthy();
        });
      });
      describe("Datos no válidos (FK validos) y un jwt admin", () => {
        it("deberia devolver un status 400 y el producto no debe guardarse", async () => {
          const invalidProduct = getProductStub({
            category: categoryIdInDb,
            provider: providerIdInDb,
          });
          invalidProduct.name = undefined;
          invalidProduct.quantity = "DEBE SER NUMERO";
          invalidProduct.price = "debe ser numero";
          const { status } = await createProductRequest({
            product: invalidProduct,
            jwt: jwts.admin,
          });
          const productExistsAfter = Boolean(
            await Product.findOne({ name: invalidProduct.name })
          );
          expect(status).toBe(400);
          expect(productExistsAfter).toBeFalsy();
        });
      });
      describe("Datos válidos (FK no validos) y un jwt admin", () => {
        it("deberia devolver un status 400 y el producto no debe guardarse", async () => {
          const validProductWithInvalidFK = getProductStub({
            category: new ObjectId(),
            provider: new ObjectId(),
          });
          const { status } = await createProductRequest({
            product: validProductWithInvalidFK,
            jwt: jwts.admin,
          });
          const productExistsAfter = Boolean(
            await Product.findOne({ name: validProductWithInvalidFK.name })
          );
          expect(status).toBe(401);
          expect(productExistsAfter).toBeFalsy();
        });
      });
      describe("Datos válidos y un jwt normal", () => {
        it("deberia devolver un status 403 y el producto no debe guardarse", async () => {
          const validProduct = getProductStub({
            category: categoryIdInDb,
            provider: providerIdInDb,
          });
          const { status } = await createProductRequest({
            product: validProduct,
            jwt: jwts.normal,
          });
          const productExistsAfter = Boolean(
            await Product.findOne({ name: validProduct.name })
          );
          expect(status).toBe(403);
          expect(productExistsAfter).toBeFalsy();
        });
      });
      describe("Datos válidos y un jwt bloqueado", () => {
        it("deberia devolver un status 403 y el producto no debe guardarse", async () => {
          const validProduct = getProductStub({
            category: categoryIdInDb,
            provider: providerIdInDb,
          });
          const { status } = await createProductRequest({
            product: validProduct,
            jwt: jwts.bloqued,
          });
          const productExistsAfter = Boolean(
            await Product.findOne({ name: validProduct.name })
          );
          expect(status).toBe(403);
          expect(productExistsAfter).toBeFalsy();
        });
      });
      describe("Datos válidos y sin enviar un jwt", () => {
        it("deberia devolver un status 401 y el producto no debe guardarse", async () => {
          const validProduct = getProductStub({
            category: categoryIdInDb,
            provider: providerIdInDb,
          });
          const { status } = await createProductRequest({
            product: validProduct,
            jwt: "",
          });
          const productExistsAfter = Boolean(
            await Product.findOne({ name: validProduct.name })
          );
          expect(status).toBe(401);
          expect(productExistsAfter).toBeFalsy();
        });
      });
      describe("Datos válidos y con un jwt de un usuario que no existe", () => {
        it("deberia devolver un status 401 y el producto no debe guardarse", async () => {
          const validProduct = getProductStub({
            category: categoryIdInDb,
            provider: providerIdInDb,
          });
          const { status } = await createProductRequest({
            product: validProduct,
            jwt: jwts.no_exists,
          });
          const productExistsAfter = Boolean(
            await Product.findOne({ name: validProduct.name })
          );
          expect(status).toBe(401);
          expect(productExistsAfter).toBeFalsy();
        });
      });
    });
    describe("/all (GET)", () => {
      beforeAll(async () => {
        await cleanDb();
        await populateDb({ n_categories: 3, n_products: 10 });
      });
      const requestGetAllProducts = async () => {
        return await request(server).get("/api/product/all");
      };
      describe("Obtener todos los productos", () => {
        it("deberia devolver un status 200 y una lista de productos con sus subobjetos respectivos", async () => {
          const productsInDb = await Product.find({})
            .populate("category")
            .populate("provider", "name");
          const { status, body } = await requestGetAllProducts();
					console.log({body});
          expect(status).toBe(200);
          expect(body).toStrictEqual(toJson(productsInDb));
        });
      });
    });
    describe("/:id (GET)", () => {
      beforeAll(async () => {
        await cleanDb();
        await populateDb();
      });
      const requestFindById = async ({ productId }) => {
        return await request(server).get(`/api/product/${productId}`);
      };
      describe("Enviando un uuid valido y de un producto existente", () => {
        it("deberia devolver un status 200 y el producto", async () => {
          const productDefault = await Product.findOne({
            name: "DEFAULT PRODUCT",
          })
            .populate("category")
            .populate("provider", "name");
          const { status, body } = await requestFindById({
            productId: productDefault._id,
          });
          expect(status).toBe(200);
          expect(body).toMatchObject(toJson(productDefault));
        });
      });
      describe("Enviando un uuid valido y de un producto no existente", () => {
        it("deberia devolver un status 404", async () => {
          const inexisting_id = new ObjectId();
          const { status } = await requestFindById({
            productId: inexisting_id,
          });
          expect(status).toBe(404);
        });
      });
      describe("Enviando un uuid invalido", () => {
        it("deberia devolver un status 400", async () => {
          const invalid_id = "invalid Id";
          const { status } = await requestFindById({
            productId: invalid_id,
          });
          expect(status).toBe(400);
        });
      });
    });
    describe("/:id (DELETE)", () => {
      beforeAll(async () => {
        await cleanDb();
        jwts = await createUsersAndGetTheirJwts();
        categoryIdInDb = (
          await Category.create({ name: "Categoria para prueba" })
        )._id;
        providerIdInDb = (
          await Provider.create({
            name: "Proveedor para la prueba",
            email: "emailprov.gmail.com",
            phone: "143443322",
            address: "deafeafea",
            ruc: "12312312323",
          })
        )._id;
      });
      const requestDeleteProductById = async ({ productId, jwt }) => {
        return await request(server)
          .delete(`/api/product/${productId}`)
          .set("x-auth-token", jwt);
      };
      describe("Enviando un uuid valido, de un producto existente y con un jwt admin", () => {
        it("deberia devolver un status 200 y el mensaje `{productName} deleted successfully`", async () => {
          const productInDB = await Product.create(
            getProductStub({
              category: categoryIdInDb,
              provider: providerIdInDb,
            })
          );
          const { status, body } = await requestDeleteProductById({
            productId: productInDB._id,
            jwt: jwts.admin
          });
          const existsAfter = Boolean(await Product.findById(productInDB._id));
          expect(status).toBe(200);
          expect(existsAfter).toBeFalsy();
          expect(body).toMatchObject({message: `${productInDB.name} deleted successfully`});
        });
      });
      describe("Enviando un uuid valido y de un producto no existente, con un jwt admin", () => {
        it("deberia devolver un status 404", async () => {
          const inexisting_id = new ObjectId();
          const { status } = await requestDeleteProductById({
            productId: inexisting_id,
            jwt: jwts.admin
          });
          expect(status).toBe(404);
        });
      });
      describe("Enviando un uuid invalido y un jwt admin", () => {
        it("deberia devolver un status 400", async () => {
          const invalid_id = "invalid Id";
          const { status } = await requestDeleteProductById({
            productId: invalid_id,
            jwt: jwts.admin
          });
          expect(status).toBe(400);
        });
      });
      describe("UUID valido y de un producto existente, con un jwt de un usuario normal", () => {
        it("deberia devolver un status 403 y el producto no se debe eliminar", async () => {
          const productInDB = await Product.create(
            getProductStub({
              category: categoryIdInDb,
              provider: providerIdInDb,
            })
          );
          const { status } = await requestDeleteProductById({
            productId: productInDB._id,
            jwt: jwts.normal
          });
          const existsAfter = Boolean(await Product.findById(productInDB._id));
          expect(status).toBe(403);
          expect(existsAfter).toBeTruthy();
        });
      });
      describe("UUID valido y de un producto existente, con un jwt de un usuario bloqueado", () => {
        it("deberia devolver un status 403 y el producto no se debe eliminar", async () => {
          const productInDB = await Product.create(
            getProductStub({
              category: categoryIdInDb,
              provider: providerIdInDb,
            })
          );
          const { status } = await requestDeleteProductById({
            productId: productInDB._id,
            jwt: jwts.bloqued
          });
          const existsAfter = Boolean(await Product.findById(productInDB._id));
          expect(status).toBe(403);
          expect(existsAfter).toBeTruthy();
        });
      });
      describe("UUID valido y de un producto existente, con un jwt de un usuario que no existe", () => {
        it("deberia devolver un status 401 y el producto no se debe eliminar", async () => {
          const productInDB = await Product.create(
            getProductStub({
              category: categoryIdInDb,
              provider: providerIdInDb,
            })
          );
          const { status } = await requestDeleteProductById({
            productId: productInDB._id,
            jwt: jwts.no_exists
          });
          const existsAfter = Boolean(await Product.findById(productInDB._id));
          expect(status).toBe(401);
          expect(existsAfter).toBeTruthy();
        });
      });
    });
  });
});
