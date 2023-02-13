import { Model, DataTypes } from 'sequelize';

import sequelize from '../config/SequelizeConfig';

export default class Users extends Model {
  declare id:number;
  declare username:string;
  declare role:string;
  declare email:string;
  declare password:string;
}

Users.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  categoria: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  curso: {
    allowNull: false,
    type: DataTypes.STRING,
  },
}, {
  sequelize,
  tableName: 'users',
  timestamps: false,
});
