"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _sequelize=_interopRequireDefault(require("sequelize"));var _database=require("../database/database");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}var Producto=_database.sequelize.define('producto',{productoid:{type:_sequelize["default"].INTEGER,primaryKey:true},descripcion:{type:_sequelize["default"].TEXT},precio:{type:_sequelize["default"].INTEGER},codigoproducto:{type:_sequelize["default"].TEXT}},{tableName:'producto',timestamps:false});var _default=Producto;exports["default"]=_default;