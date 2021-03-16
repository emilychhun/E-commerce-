// import important parts of sequelize library
let { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
let sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
  // define an id column
    id: {
  // use the special Sequelize DataTypes object provide what type of data it is
      type: DataTypes.INTEGER,
  // instruct that this is the Primary Key
      primaryKey: true,
  // this is the equivalent of SQL's `NOT NULL` option
      allowNull: false,
  // turn on auto increment
      autoIncrement: true
    },
  // define a name column
    product_name: {
  // use the special Sequelize DataTypes object provide what type of data it is
      type: DataTypes.STRING,
  // this is the equivalent of SQL's `NOT NULL` option
      allowNull: false,
    },
  // define a price column
    price: {
  // use the special Sequelize DataTypes object provide what type of data it is
      type: DataTypes.DECIMAL,
  // this is the equivalent of SQL's `NOT NULL` option
      allowNull: false,
  // if allowNull is set to false, we can run our data through validators before creating the table data
      validate: {
        isDecimal: true
      }
    },
  // define a stock column
    stock: {
  // use the special Sequelize DataTypes object provide what type of data it is
      type: DataTypes.INTEGER,
  // this is the equivalent of SQL's `NOT NULL` option
      allowNull: false,
      defaultValue: 10,
  // if allowNull is set to false, we can run our data through validators before creating the table data
      validate: {
        isNumeric: true
      }
    },
  // define a category_id column
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
