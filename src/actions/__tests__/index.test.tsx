import { createUser, handleSignIn } from '@/actions';
import { checkPassword, checkUserByEmail, getUserEmail } from '@/libs';
import { MESSAGE_VALID } from '@/constants';
import { mockUserAddress } from '@/mock';

jest.mock('next/headers', () => ({
  cookies: jest.fn(() => ({
    set: jest.fn()
  }))
}));

jest.mock('@/libs');
jest.mock('bcryptjs');

describe('User server action test', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Should fail if email already exists', async () => {
    (checkUserByEmail as jest.Mock).mockResolvedValue(true);

    const result = await createUser(mockUserAddress);

    expect(result).toEqual({
      success: false,
      message: MESSAGE_VALID.EMAIL_EXIST
    });
  });

  test('Should fail sign in with incorrect password', async () => {
    (getUserEmail as jest.Mock).mockResolvedValue({
      data: [mockUserAddress],
      error: null
    });
    (checkPassword as jest.Mock).mockResolvedValue(false);

    const result = await handleSignIn(mockUserAddress.email, 'wrongpassword');

    expect(result).toEqual({ success: false, message: 'Invalid password' });
  });

  test('Should fail sign in if user not found', async () => {
    (getUserEmail as jest.Mock).mockResolvedValue({
      data: null,
      error: 'User not found'
    });

    const result = await handleSignIn('unknown@example.com', 'pass123456');

    expect(result).toEqual({ success: false, message: 'User not found' });
  });
});
