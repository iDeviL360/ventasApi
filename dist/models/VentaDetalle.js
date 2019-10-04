"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _sequelize=_interopRequireDefault(require("sequelize"));var _database=require("../database/database");var _Venta=_interopRequireDefault(require("./Venta"));var _Producto=_interopRequireDefault(require("./Producto"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}var VentaDetalle=_database.sequelize.define('ventadetalle',{ventadetalleid:{type:_sequelize["default"].INTEGER,primaryKey:true},ventaid:{type:_sequelize["default"].INTEGER},productoid:{type:_sequelize["default"].INTEGER},precio:{type:_sequelize["default"].INTEGER}},{tableName:'ventadetalle',timestamps:false});VentaDetalle.hasMany(_Producto["default"],{sourceKey:'productoid',foreignKey:'productoid'});VentaDetalle.belongsTo(_Venta["default"],{sourceKey:'ventaid',foreignKey:'ventaid'});var _default=VentaDetalle;exports["default"]=_default;