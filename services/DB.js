const { User, Profile } = require("../database");

class DB {
  static async createUser(data) {
    const profile = await Profile.create(data);

    const user = await User.create({
      ...data,
      ProfileId: profile.id,
    });
    return { profile, user };
  }

  static async getAllUsers(query) {
    return await User.findAll({ include: Profile, where: query });
  }

  static async getUser(id) {
    return await User.findByPk(id, { include: Profile });
  }

  static async getProfileById(id) {
    return await Profile.findByPk(id);
  }

  static async editUser(data, id) {
    const updatedProfile = await Profile.update(data, {
      where: { id },
      returning: true,
    });

    const updatedUser = await User.update(data, {
      where: { id },
      returning: true,
    });

    return {
      updatedProfile: updatedProfile[1],
      updatedUser: updatedUser[1],
    };
  }

  static async deleteUser(id) {
    return await User.destroy({ where: { id } });
  }

  static async deleteProfile(id) {
    return await Profile.destroy({ where: { id } });
  }
}

module.exports = DB;
