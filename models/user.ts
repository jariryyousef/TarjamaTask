'use strict';
import {Model} from 'sequelize';

type UserAttributes = {
  id: number;
  name: string;
  email: string;
  password: string;
  last_login:Date;
  
};

module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttributes>  
    implements UserAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     id!: number;
     name!: string;
     email!: string;
     password!: string;
     last_login!:Date;

    static associate(models: any) {
      // define association here

    }
  };


  User.init({
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type:DataTypes.STRING,
      allowNull: false
    },

    email: {
      type:DataTypes.STRING,
      allowNull: false
    },

    password: {
      type:DataTypes.STRING,
      allowNull: false
    },
    last_login: {
      type:DataTypes.Date,
      allowNull: false
    },
    
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};