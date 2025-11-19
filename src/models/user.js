'use strict';

const bcrypt = require('bcrypt')
const {salt} = require('../config/serverConfig')

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      User.hasMany(models.Order, {
        foreignKey: 'userId',
        as: 'orders'
      });

      User.hasMany(models.OTP, {
        foreignKey: 'userId',
        as: 'otps'
      });

    }
  }
  User.init({
   email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
          isEmail: true,
        },
      },

    username: {
          type: DataTypes.STRING,
      },

    password: {
          type: DataTypes.STRING,
          allowNull: false,  
      },

      role: {
          allowNull: false,

          type: DataTypes.ENUM("CUSTOMER", "ADMIN"),
          defaultValue:"CUSTOMER"
      
      },

  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate((user) => {
    const hash = bcrypt.hashSync(user.password, salt);
    user.password = hash;
  });

  return User;
};