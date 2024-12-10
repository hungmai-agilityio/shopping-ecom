import bcrypt from 'bcryptjs';

// Libs
import { getUserEmail } from '@/libs';

/**
 * Check user by email
 * @param {string} email
 * @returns {boolean}
 */
export const checkUserByEmail = async (email: string): Promise<boolean> => {
  const { data, error } = await getUserEmail(email);

  if (error || !data || data.length === 0) {
    return false;
  }

  return true;
};

/**
 * Check the password matches the data
 * @param {string} inputPassword
 * @param {string} hashedPassword
 * @returns {object}
 */
export const checkPassword = async (
  inputPassword: string,
  hashedPassword: string
): Promise<boolean> => {
  return await bcrypt.compare(inputPassword, hashedPassword);
};
