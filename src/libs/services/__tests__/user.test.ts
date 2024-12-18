
import { getUserId, getUserCart, getUserWishList, getUserEmail } from '@/libs';

import { END_POINT, KEY } from "@/constants";
import { addUser, getUserCookie, setCookieUser, updateUser } from "@/libs/services/user";
import { mockUser, mockUserAddress } from "@/mock";

(global.fetch as jest.Mock) = jest.fn();

describe('API Service Tests', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });
  const mockResponse = {
    data: {
      mockUser
    },
    error: null
  };

  test('Should fetch user by ID', async () => {
    const mockUserData = { id: '34639f802f-43fh56021flu-3314656j', name: 'Test User' };
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockUserData
    });

    const result = await getUserId('34639f802f-43fh56021flu-3314656j');

    expect(fetch).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_URL}${END_POINT.USERS}/34639f802f-43fh56021flu-3314656j`
    );
    expect(result).toEqual(mockUserData);
  });

  test('Should fetch user cart by ID', async () => {
    const mockCartData = {
      userId: '34639f802f-43fh56021flu-3314656j',
      items: [{ id: 'item1', quantity: 2 }]
    };
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockCartData
    });

    const result = await getUserCart('34639f802f-43fh56021flu-3314656j');

    expect(fetch).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_URL}${END_POINT.CART}?userId=34639f802f-43fh56021flu-3314656j`
    );
    expect(result).toEqual(mockCartData);
  });

  test('Should fetch user wishlist by ID', async () => {
    const mockWishListData = {
      userId: '34639f802f-43fh56021flu-3314656j',
      items: [{ id: 'item2', addedDate: '2024-12-18' }]
    };
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockWishListData
    });

    const result = await getUserWishList('34639f802f-43fh56021flu-3314656j');

    expect(fetch).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_URL}${END_POINT.WISHLIST}?userId=34639f802f-43fh56021flu-3314656j`
    );
    expect(result).toEqual(mockWishListData);
  });

  test('Should fetch user by email', async () => {
    const mockUserEmailData = [{ id: '34639f802f-43fh56021flu-3314656j', email: 'test@example.com' }];
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockUserEmailData
    });

    const result = await getUserEmail('test@example.com');

    expect(fetch).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_URL}${END_POINT.USERS}?email=test@example.com`
    );
    expect(result).toEqual(
      { data: [{ email: 'test@example.com', id: '34639f802f-43fh56021flu-3314656j' }], error: null }
    );
  });

  test('Should set user cookie', async () => {

    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse
    });

    await setCookieUser(mockUser);

    expect(fetch).toHaveBeenCalledWith('/api/set-cookie', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user: mockUser })
    });
  });

  test('Should retrieve user cookie', () => {
    const cookiesMock = {
      get: jest.fn(() => ({ value: JSON.stringify(mockUser) }))
    };

    jest.mock('next/headers', () => ({
      cookies: jest.fn(() => cookiesMock)
    }));

    const result = getUserCookie();

    expect(cookiesMock.get).toHaveBeenCalledWith(KEY.USER);
    expect(result).toEqual(mockUser);
  });
});

