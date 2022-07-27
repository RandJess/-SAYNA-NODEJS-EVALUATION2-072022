
module.exports = (sequelize, {DataTypes}) => {
  return sequelize.define('Avis', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      fname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Name ne peut être empty" },
          notNull: { msg: "Name ne peut être null" },
        },
      },
      lname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Name ne peut être empty" },
          notNull: { msg: "Name ne peut être null" },
        },
      },
      avis: {
        type: DataTypes.STRING,
      },
      note: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: { msg: "Utilisez que des nombres entiers pour le note" },
          min: {
            args: [0],
            msg: "Le note doit être superieur ou égale à 0",
          },
          max: {
            args: [10],
            msg: "Le note ne doit pas surpasser 999",
          },
        },
      },
      formation: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Name ne peut être empty" },
          notNull: { msg: "Name ne peut être null" }
        }
      },
    },
    {
      timestamps: true,
      createdAt: "created",
      updatedAt: false,
    }
  );
};
