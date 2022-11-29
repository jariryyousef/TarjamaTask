'use strict';
import {Model} from 'sequelize';

type ExpensesAttributes = {
  id: number;
  user_id:number;
  category_id:number;
  spending_date:Date;
  amount:number;

  
};

module.exports = (sequelize:any, DataTypes:any) => {
  class Expenses extends Model <ExpensesAttributes>
  implements ExpensesAttributes
  {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

     id!: number;
     user_id!:number;
     category_id!: number;
     spending_date!:Date;
    amount!:number;
    static associate(models:any) {
      // define association here
      Expenses.hasMany(models.User),
      Expenses.hasMany(models.Category)
    }
  };

  Expenses.init({
    
    id:{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  user_id:{

    type:DataTypes.INTEGER,
    allowNull: false

  },
  category_id:{
    type:DataTypes.INTEGER,
    allowNull: false
  },
  spending_date:{

    type:DataTypes.Date,
    allowNull: false
  },

  amount:{
  type:DataTypes.number,
  allowNull:false

  },

  },
  
  {
    sequelize,
    modelName: 'Expenses',
  });
  return Expenses;
};