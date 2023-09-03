const profiles = `
CREATE TABLE IF NOT EXISTS profiles (
	    id SERIAL,
      firstName VARCHAR(100) NOT NULL,
      lastName VARCHAR(100) NOT NULL,
	    state VARCHAR(100),
      PRIMARY KEY ("id")
    );
`;

const users = `CREATE TABLE IF NOT EXISTS users (
	    id SERIAL,
      username VARCHAR(100) NOT NULL,
      email VARCHAR(100) NOT NULL,
	    role VARCHAR(100),
      profileId INT NOT NULL,
      dateCreate TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
       PRIMARY KEY ("id")
    );`;

module.exports = { tables: profiles + users };
