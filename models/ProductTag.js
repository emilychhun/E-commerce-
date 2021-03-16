let { Model, DataTypes } = require('sequelize');

let sequelize = require('../config/connection');
// Initialize Product model (table) by extending off Sequelize's Model class
class ProductTag extends Model {}

ProductTag.init(
  {
      // define an id column
    id: {
      // use the special Sequelize DataTypes object provide what type of data it is
      type: DataTypes.INTEGER,
      // instruct that this is the Primary Key
      primaryKey: true,
      // this is the equivalent of SQL's `NOT NULL` option
      allowNull: false,
      autoIncrement: true
    },
      // define an product_id column
    product_id: {
      // use the special Sequelize DataTypes object provide what type of data it is
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id'
      }
    },
      // define an tag_id column
    tag_id: {
      // use the special Sequelize DataTypes object provide what type of data it is
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
