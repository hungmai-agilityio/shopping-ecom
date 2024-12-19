import { checkPassword, checkUserByEmail } from '@/libs';

(global.fetch as jest.Mock) = jest.fn();

describe('checkUserByEmail', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should return false if there is an error', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      data: null,
      error: true
    });

    const result = await checkUserByEmail('test@example.com');

    expect(result).toBe(false);
  });

  test('should return false if user does not exist', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      data: [],
      error: null
    });

    const result = await checkUserByEmail('test@example.com');

    expect(result).toBe(false);
  });

  test('should return true if user exists', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => ({
        data: [{ id: 1, email: 'test@example.com' }],
        error: null
      })
    });

    const result = await checkUserByEmail('test@example.com');

    expect(result).toBe(true);
  });
});

describe('checkPassword', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('should return false if password does not match', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce(false);

    const result = await checkPassword('wrong_password', 'hashed_password');

    expect(result).toBe(false);
  });
});
