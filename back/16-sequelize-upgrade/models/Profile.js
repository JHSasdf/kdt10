const ProfileModel = function (sequelize, DataTypes) {
    const Profile = sequelize.define(
      "Profile",
      {
        profile_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        position: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
        salary: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        freezeTableName: true,
      }
    );
    return Profile;
  };
  
  module.exports = ProfileModel;
  