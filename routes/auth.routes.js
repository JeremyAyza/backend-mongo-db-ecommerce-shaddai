const { Router } = require('express');
const jwt = require('jsonwebtoken');
// Para encriptar la contraseña
const bcrypt = require('bcryptjs');
const { JWT_SECRET } = require('../config');
// Check validation for req
const { check, validationResult } = require('express-validator');
const gravatar = require('gravatar');
// requiero mi middleware de autenticación
const { auth, adminAuth } = require('../middleware');
// requerimos el modelo de Usuario
const User = require('../models/User');
const transporter = require('../helpers/transporterEmail');
const getRegisterEmail = require('../data/getRegisterEmail');


const authRouter = Router();


// @route POST api/user
// @desc User Information
// @access Private
authRouter.get('/',
   auth,
   async (req, res, next) => {

      if (req.error) return next();

      try {
         const user = await User.findById(req.user.id).select('-password')
         res.json(user);

      } catch (err) {
         console.log(err);
         req.error = {};
         next();
      }
   }
)


// @route POST api/user/all
// @desc Get all users information
// @access Private admin
authRouter.get('/all',
   auth, adminAuth,
   async (req, res, next) => {

      if (req.error) return next();

      try {
         const users = await User.find({}).select('-password')
         res.json(users);

      } catch (err) {
         console.log(err);
         req.error = {};
         next();
      }
   }
)

// @route PUT api/user/block/:userId
// @desc Bloquear un usuario
// @access Private admin
authRouter.put('/block/:userId',
   auth, adminAuth,
   async (req, res, next) => {

      if (req.error) return next();

      try {
         let user = await User.findById(req.params.userId);
         if (!user) {
            req.error = { status: 404, message: "User not found" };
            return next();
         }
         user.role = 3;

         try {
            await user.save();
            res.end();
         } catch (err) {
            console.log(err);

            req.error = {};
            next();
         }

      } catch (err) {
         console.log(err);
         req.error = {};
         next();
      }
   }
)


// @route PUT api/user/unlock/:userId
// @desc Desbloquear un usuario
// @access Private admin
authRouter.put('/unlock/:userId',
   auth, adminAuth,
   async (req, res, next) => {

      if (req.error) return next();

      try {
         const user = await User.findById(req.params.userId);
         if (!user) {
            req.error = { status: 404, message: "User not found" };
            return next();
         }

         user.role = 0;

         try {
            await user.save();
            res.end();
         } catch (err) {
            console.log(err);

            req.error = {};
            next();
         }
      } catch (err) {
         console.log(err);
         req.error = {};
         next();
      }
   }
)


// @route POST api/user/register
// @desc Register user
// @access Public
authRouter.post('/register', [
   // validaciones
   check('name', 'El nombre es requerido').not().isEmpty(),
   check('lastname', 'El apellido es requerido').not().isEmpty(),
   check('address', 'La dirección es requerida').not().isEmpty(),
   check('email', 'Por favor incluya un email válido').isEmail(),
   check('password', 'Por favor incluya una contraseña con una longuitud mayor o igual a 10 caracteres y menor a 30').isLength({
      min: 10,
      max: 30
   })
], async (req, res, next) => {
   const errors = validationResult(req);

   // si hay errores le envío una respuesta de error
   if (!errors.isEmpty()) {
      req.error = { status: 400, errors };
      return next();
   }

   // si todo está bien, extraigo el nombre, apellido e email...
   const { name, lastname, email, password, address } = req.body;

   try {
      let user = await User.findOne({ email });

      // si el correo ya está registrado:
      if (user) {
         req.error = {
            status: 400,
            message: 'User already exists'
         };
         return next();
      }

      // Si no existe, obtenemos la imágen de gravatar para su perfil
      const avatar = gravatar.url(email, {
         s: '200', //size
         r: 'pg', //rate
         d: 'mm'
      })

      // creamos el usuario
      user = new User({
         name, lastname, email, avatar, password, address
      })

      // encriptamos la contraseña
      user.password = await bcrypt.hash(password, 10);

      // guardamos el usuario en la base de datos
      await user.save();

      // generamos el payload/body para generar el token guardando por dentro el id del usuario
      const payload = {
         user: {
            id: user.id
         }
      }

      // 
      jwt.sign(
         payload,
         JWT_SECRET, {
         expiresIn: "5d" //for development 36000
      }, async (err, token) => {
         if (err) throw err;

         try {
            // Finalmente le envío un email de bienvenida
            user = user.toJSON();
            // console.log(user);

            // send mail with defined transport object
            await transporter.sendMail({
               from: '"Bienvenidx a Minimarket Yerick" <vivicalvat007@gmail.com>',     // emisor
               to: email,                                      // destinatario/os
               subject: "BIENVENIDX A NUESTRO ECOMMERCE",      // Asunto
               html: getRegisterEmail(name + " " + lastname),   //html body
            });

         } catch (err) {
            console.log(err);
            console.log("No se ha podido enviar el correo de registro");
         } finally {
            res.status(201).json({ token });
         }

      }
      );
   } catch (err) {
      console.log(err);

      req.error = {};
      next();
   }
})

// @route POST api/user/login
// @desc Login user
// @access Public
authRouter.post('/login', [
   check('email', 'please include a valid email').isEmail().exists(),
   check('password', 'password is required').exists()
], async (req, res, next) => {

   const errors = validationResult(req);

   // cuando hay errores de validación le envío una respuesta de error
   if (!errors.isEmpty()) {
      req.error = { status: 400, errors };
      return next();
   }

   // si está correcto
   const { email, password } = req.body;

   try {
      let user = await User.findOne({ email });

      // significa que el correo no es válido
      if (!user) {
         req.error = {
            status: 400,
            message: 'Invalid credentials'
         };
         return next()
      };
      // No dejamos entrar a usuarios bloqueados
      if (user.role === 3) {
         req.error = { status: 403, message: "Usuario bloqueado" };
         return next();
      }

      // Teniedo el usuario, determinamos si la contraseña enviada es correcta
      const isMatch = await bcrypt.compare(password, user.password);

      // si la contraseña es incorreta
      if (!isMatch) {
         req.error = {
            status: 400,
            message: 'Invalid credentials'
         };
         return next();
      }

      // si la contraseña y email son validos
      const payload = {
         user: { id: user.id }
      }

      jwt.sign(
         payload,
         JWT_SECRET, {
         expiresIn: "5d"
      }, (err, token) => {
         if (err) throw err;
         return res.json({ token })
      })

   } catch (err) {
      console.log(err);

      req.error = {};
      next();
   }
})

module.exports = authRouter;