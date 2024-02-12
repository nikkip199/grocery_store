const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/database");

const product = sequelize.define("product", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  brand: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.FLOAT,
  },
  discount_price: {
    type: DataTypes.FLOAT,
  },
  discount_percentage: {
    type: DataTypes.FLOAT,
  },
  tag: {
    type: DataTypes.STRING,
  },
  stock: {
    type: DataTypes.INTEGER,
  },
  thumbnail: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.ENUM("active", "inactive", "deleted", "out of stock"),
    defaultValue: "active",
  },
});

product.sync({ alter: false });

module.exports = product;
