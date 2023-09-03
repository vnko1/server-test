const { User, Profile } = require("../database");

class DataBase {
  static async createUser(data) {
    const profile = Profile.create(data);
    // const user = await User.create({
    //   ...data,
    //   profileId: profile.id,
    // });

    // return { user, profile };
    return profile;
  }
}

module.exports = { DataBase };
