module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    'users',
    {
      id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: DataTypes.STRING(64),
        unique: true,
      },
      username: {
        type: DataTypes.STRING(64),
      },
      password: {
        type: DataTypes.STRING(64),
      },
    },
    {
      timestamps: false,
    }
  );

  return users;
};
