let { Model, DataTypes } = require('sequelize');

let sequelize = require('../config/connection.js');

//creat our User model
class Category extends Model {}
//define an ID columns 

Category.init(
  {
    // use the special Sequelize DataTypes object provide what type of data it is
    id: {
      type: DataTypes.INTEGER,
    // this is the equivalent of SQL's `NOT NULL` option
      allowNull: false,
    // instruct that this is the Primary Key
      primaryKey: true,
    // turn on auto increment
      autoIncrement: true
    },
    // define a name column
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
