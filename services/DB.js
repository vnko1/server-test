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
    return await User.findOne({
      include: Profile,
      where: { ProfileId: id },
    });
  }

  static async getProfile(id) {
    return await Profile.findByPk(id, { include: User });
  }

  static async editUser(data, ProfileId) {
    const user = await User.update(data, {
      where: { ProfileId },
      returning: true,
    });

    const profile = await Profile.update(data, {
      where: { id: ProfileId },
      returning: true,
    });

    return { user: user[1], profile: profile[1] };
  }

  static async deleteUser(id) {
    return await User.destroy({
      where: { id },
    });
  }

  static async deleteProfile(id) {
    return await Profile.destroy({
      where: { id },
    });
  }
}

module.exports = DB;
