import fs from 'fs';
import bcrypt from 'bcrypt';
import Users from '../models/user';
/**
 * Encrypts passwords for all users in the provided data array.
 * @param userData - Array of user objects containing plaintext passwords.
 * @returns A promise that resolves to the user data array with encrypted passwords.
 */
async function encryptPasswords(userData: any[]) {
  return Promise.all(
    userData.map(async (user) => {
      if (user.password) {
        // Hash the password using bcrypt
        user.password = await bcrypt.hash(user.password, 10);
      }
      return user;
    })
  );
}

/**
 * Loads initial user data into the database if no users exist.
 * Reads user data from JSON files, encrypts passwords, and inserts data into the database.
 */
async function loadInitialData() {
  // Read user data from JSON files
  const userData = JSON.parse(fs.readFileSync('../../data/users.json', 'utf8'));
  
  if ((await Users.countDocuments()) === 0) {
    const encryptedUserData = await encryptPasswords(userData);
    await Users.insertMany(encryptedUserData);
    console.log('Initial Users have been added to the database.');
  } else {
    console.log('Users already exist in the database.');
  }
}

export default loadInitialData;
