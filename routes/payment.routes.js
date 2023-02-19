const { Router } = require('express');
const Order = require("../models/Order");
const User = require("../models/User");
const Product = require("../models/Product");
const { check, validationResult } = require('express-validator');
const Stripe = require("stripe");
const { CLAVE_PRIVADA_STRIPE } = process.env;
const { NOMBRE_ECOMMERCE } = process.env;
const stripe = new Stripe(CLAVE_PRIVADA_STRIPE);
const transporter = require("../helpers/transporterEmail");
// Requerimos los middlewares de autenticación
const { auth } = require('../middleware');
const getConfirmacionPagoEmail = require('../data/getConfirmacionPagoEmail');


const paymentRouter = Router();


// @route POST payment/
// @desc Realizar el pago de un pedido
// @access Private
paymentRouter.post('/', [
    check('orderId', 'El campo orderId es requerido').trim().not().isEmpty(),
    check('orderId', 'OrderId debe ser un id válido').isMongoId(),
    check('processId', 'El campo processId es requerido').isString().trim().not().isEmpty()
], auth, async (req, res, next) => {
    if (req.error) return next();

    // Validaciones de express-validator
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        req.error = { errors };
        return next();
    }

    let pedido;

    try {
        // Destructuramos los atributos que recibimos por body
        const { processId, orderId } = req.body;
        // console.log(processId)
        // console.log(orderId)
        // Traemos el pedido para generar una descripción y obtener el precio de la transacción
        pedido = await Order.findById(orderId);

        if (!pedido) return next({ status: 400, message: "El id del pedido no es válido" });
        // Si hay un id lo pasamos a json
        pedido = pedido.toJSON();

        // Valido que el pedido no esté pagado
        if (pedido.paid === true) {
            req.error = { status: 400, message: "El pedido ya está pagado" };
            return next()
        };

        // Generamos una descripción
        let description = `Deducción por compra id ${orderId} realizada en ${NOMBRE_ECOMMERCE}.`;

        // Creamos un nuevo pago
        await stripe.paymentIntents.create({
            amount: Math.round(pedido.totalAmount * 100),
            currency: "USD",
            description,
            payment_method: processId,
            confirm: true, //confirmamos el pago
        });

        // Actualizo el pedido para que conste como pagado
        await Order.findByIdAndUpdate(
            orderId,
            {
                $set: { paid: true },
            },
            { new: true }
        );

    } catch (error) {
        req.error = { status: 400, message: error.raw.message };
        console.log(error);
        return next();
    }

    try {
        // Finalmente le envío un email confirmando el pago
        let user = await User.findById(pedido.userId);
        if (!user) throw new Error("Usuario no válido");
        user = user.toJSON();
        // console.log(pedido.products);

        let productos = await Promise.all(pedido.products.map(async (prod) => {
            let producto = await Product.findById(prod.productId);
            producto = producto.toJSON();

            return `<tr>
		            <td style="font-family: 'Roboto', Arial, Helvetica,sans-serif;font-size: 14px; line-height: 26px; font-weight: normal; font-style: normal;color: #000; text-decoration: none; letter-spacing: 0px;" valign="middle">${producto.name}</td>
                    <td style="font-family: 'Roboto', Arial, Helvetica,sans-serif;font-size: 14px; line-height: 26px; font-weight: normal; font-style: normal;color: #000; text-decoration: none; letter-spacing: 0px;" valign="middle">${prod.quantity}</td>
                    <td style="font-family: 'Roboto', Arial, Helvetica,sans-serif;font-size: 14px; line-height: 26px; font-weight: normal; font-style: normal;color: #000; text-decoration: none; letter-spacing: 0px;" valign="middle">${producto.price}$</td>
	            </tr>`;
        }));

        // console.log(productos);
        // send mail with defined transport object
        await transporter.sendMail({
            from: '"Confirmación de pago" <vivicalvat007@gmail.com>',     // emisor
            to: user.email,                                              // destinatario/os
            subject: `Confirmación de pago por compra en ${NOMBRE_ECOMMERCE}`, // Asunto
            html: getConfirmacionPagoEmail(user.name + " " + user.lastname, NOMBRE_ECOMMERCE, pedido, productos),                                                              // html body
        });

    } catch (err) {
        console.log(err);
        console.log("No se ha podido enviar el correo de confirmacion del pago");
    } finally {
        res.json("Pago exitoso");
    }
}
);

module.exports = paymentRouter;