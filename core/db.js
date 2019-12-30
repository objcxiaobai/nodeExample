const Sequelize = require('sequelize');
const {
  dbName,
  host,
  port,
  user,
  password
} = require('../config/config').database;
/**
 * 数据库名
 * 用户
 * 密码
 * 对象
 */
const sequelize = new Sequelize(dbName, user, password, {
  dialect: 'mysql',
  host,
  port,
  //Sql语句运行日志
  logging: true,
  // 数据库时间
  timezone: '+08:00',
  define: {
    // 创建时间和更新时间默认值和删除时间
    // 当timestamps为true时，默认会为模型添加createAt和updateAt两个字段，
    //数据类型为Sequelize.DATE，这里我们自己定义为Sequelize.BIGINT用于存储时间戳。
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    underscored: true,
    freezeTableName: true
  }
});

// 表生后==false，不能动态添加字段,也不会清空数据库
sequelize.sync({
  force: false
});

module.exports = { db: sequelize };
