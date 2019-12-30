const { db } = require('../core/db');
const { Sequelize, Model } = require('sequelize');

class Books extends Model {
  static async addBooks({ titlename, author, countries, img }) {
    await Books.create({
      titlename,
      author,
      countries,
      img
    });
  }
}

Books.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    titlename: Sequelize.STRING,
    author: Sequelize.STRING,
    countries: Sequelize.STRING,
    img: Sequelize.STRING
  },
  { sequelize: db }
);

module.exports = {
  Books
};
