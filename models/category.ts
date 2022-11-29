'use strict';
import {Model} from 'sequelize';

type CategoryAttributes = {
  id: number;
  user_id:number;
  name: string;
  
};
module.exports = (sequelize :any, DataTypes:any) => {
  class Category extends Model<CategoryAttributes> 
  implements CategoryAttributes {

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

     id!: number;
     user_id!:number;
     name!: string;

    static associate(models:any) {
      Category.hasMany(models.User)
      // define association here
    }
  };


  Category.init({

id:{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
},

name:{

  type:DataTypes.STRING,
  allowNull: false
},

user_id:{

  type:DataTypes.INTEGER,
  allowNull: false
},

  }, 
  
  
  {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};