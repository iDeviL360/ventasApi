"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.registrarUsuario=registrarUsuario;exports.loggearUsuario=loggearUsuario;var _Usuario=_interopRequireDefault(require("../models/Usuario"));var _jsonwebtoken=_interopRequireDefault(require("jsonwebtoken"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}function registrarUsuario(_x,_x2){return _registrarUsuario.apply(this,arguments);}function _registrarUsuario(){_registrarUsuario=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(req,res){var _req$body,username,email,password,usuario,nuevoUsuario,token;return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_req$body=req.body,username=_req$body.username,email=_req$body.email,password=_req$body.password;_context.next=3;return _Usuario["default"].findOne({where:{email:email}});case 3:usuario=_context.sent;if(!usuario){_context.next=6;break;}return _context.abrupt("return",res.status(403).json({auth:false,message:'El email que intenta registrar ya existe'}));case 6:nuevoUsuario=_Usuario["default"].build({username:username,email:email,password:password});_context.next=9;return nuevoUsuario.encriptarPassword(password);case 9:nuevoUsuario.password=_context.sent;_context.next=12;return nuevoUsuario.save({fields:['username','email','password']});case 12:nuevoUsuario=_context.sent;//Generamos el token con jwt, recibe tres paramatros, el primer parametro que recibe es un payload el cual es un identificador del usuario, el segundo parametro que recibe es nuestra llave maestra para que pueda generar los tokens y el tercer parametro son opciones de configuracion del token como caducidad, etc.
token=_jsonwebtoken["default"].sign({usuarioid:nuevoUsuario.usuarioid},process.env.SECRET_KEY,{expiresIn:60*120});res.json({auth:true,token:token});case 15:case"end":return _context.stop();}}},_callee);}));return _registrarUsuario.apply(this,arguments);};function loggearUsuario(_x3,_x4){return _loggearUsuario.apply(this,arguments);}function _loggearUsuario(){_loggearUsuario=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee2(req,res){var _req$body2,email,password,usuario,esValido,token;return regeneratorRuntime.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_req$body2=req.body,email=_req$body2.email,password=_req$body2.password;_context2.next=3;return _Usuario["default"].findOne({where:{email:email}});case 3:usuario=_context2.sent;if(usuario){_context2.next=6;break;}return _context2.abrupt("return",res.status(404).json({message:'No se ha encontrado ningun usuario con los datos ingresados'}));case 6:_context2.next=8;return usuario.validarPassword(password);case 8:esValido=_context2.sent;if(esValido){_context2.next=11;break;}return _context2.abrupt("return",res.status(401).json({message:'Los datos ingresados no coinciden'}));case 11://Generar el token
token=_jsonwebtoken["default"].sign({usuarioid:usuario.usuarioid},process.env.SECRET_KEY,{expiresIn:60*120});res.json({auth:true,token:token});case 13:case"end":return _context2.stop();}}},_callee2);}));return _loggearUsuario.apply(this,arguments);};