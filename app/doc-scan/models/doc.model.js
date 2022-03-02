module.exports = (sequelize, DataTypes) => {
  const docs = sequelize.define(
    'docs',
    {
      id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.INTEGER(11),
      },
      doc: {
        type: DataTypes.STRING(255),
      },
    },
    {
      timestamps: false,
    }
  );

  return docs;
};
