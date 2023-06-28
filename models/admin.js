const Sequelize = require('sequelize');
const sequelize= require('../util/database')

const Admin = sequelize.define('details',
{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      selling: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      product: {
        type: Sequelize.STRING,
        allowNull: false,
      
      },
      category: {
        type: Sequelize.STRING,
        allowNull: false,
      
      }
      
     
},
{
    timestamps:false
}
);
module.exports = Admin;