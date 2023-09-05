const { User, Profile } = require("../database");

class DB {
  static async createUser(data) {
    const user = await User.create(data);
    const profile = await user.createProfile(data);

    return { profile, user };
  }

  static async getAllUsers(query) {
    return await User.findAll({ include: Profile, where: query });
  }

  static async getUser(id) {
    return await User.findByPk(id, { include: Profile });
  }

  static async getProfile(id) {
    return await Profile.findByPk(id);
  }

  static async editUser(data, id) {
    const findUser = await User.findByPk(id);
    if (!findUser?.ProfileId) return null;
    const user = await User.update(data, {
      where: { id },
      returning: true,
    });

    const profile = await Profile.update(data, {
      where: { id: findUser.ProfileId },
      returning: true,
    });

    return { user: user[1], profile: profile[1] };
  }

  static async deleteUser(id) {
    const findUser = await User.findByPk(id);
    if (!findUser) return null;
    return await Profile.destroy({
      where: { id: findUser.ProfileId },
    });
  }

  static async deleteProfile(id) {
    return await Profile.destroy({
      where: { id },
    });
  }
}

module.exports = DB;
