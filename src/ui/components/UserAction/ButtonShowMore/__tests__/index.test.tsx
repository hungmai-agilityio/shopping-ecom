import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@testing-library/jest-dom';

// Libs
import { getProductLimit } from '@/libs';

// Components
import { ButtonShowMore } from '@/ui/components';

// Mocks
import { mockUser } from '@/mock';

jest.mock('@/libs');
jest.mock('next/navigation');

describe('ButtonShowMore Component', () => {
  const productData = [
    {
      id: '1',
      name: 'Product 1',
      image: '',
      price: 100,
      ratings: 4,
      colors: [],
      isNew: false
    },
    {
      id: '2',
      name: 'Product 2',
      image: '',
      price: 200,
      ratings: 5,
      colors: [],
      isNew: true
    }
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderWithQueryClient = (ui: React.ReactElement) => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false
        }
      }
    });
    return render(
      <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
    );
  };

  test('Should renders initial state with no products', () => {
    renderWithQueryClient(
      <ButtonShowMore queryKey="test" user={mockUser} startQuery={0} />
    );
    expect(
      screen.getByRole('button', { name: /show more/i })
    ).toBeInTheDocument();

    expect(screen.queryByText('Product 1')).not.toBeInTheDocument();
  });

  test('Should fetches and displays products when clicking "Show More"', async () => {
    (getProductLimit as jest.Mock).mockResolvedValueOnce({
      data: productData
    });

    renderWithQueryClient(
      <ButtonShowMore queryKey="test" user={mockUser} startQuery={0} />
    );
    const button = screen.getByRole('button', { name: /show more/i });

    fireEvent.click(button);

    await waitFor(() => expect(getProductLimit).toHaveBeenCalledTimes(1));
  });

  test('disables the button and shows "No More Data" when no more products', async () => {
    (getProductLimit as jest.Mock).mockResolvedValueOnce({ data: [] });

    renderWithQueryClient(
      <ButtonShowMore queryKey="test" user={mockUser} startQuery={0} />
    );
    const button = screen.getByRole('button', { name: /show more/i });

    fireEvent.click(button);

    await waitFor(() => expect(getProductLimit).toHaveBeenCalledTimes(1));

    expect(button).toHaveTextContent('No More Data');
    expect(button).toBeDisabled();
  });

  test('button shows "Loading..." when fetching data', async () => {
    (getProductLimit as jest.Mock).mockImplementation(
      () =>
        new Promise((resolve) =>
          setTimeout(() => resolve({ data: productData }), 1000)
        )
    );

    renderWithQueryClient(
      <ButtonShowMore queryKey="test" user={mockUser} startQuery={0} />
    );
    const button = screen.getByRole('button', { name: /show more/i });

    fireEvent.click(button);

    expect(button).toHaveTextContent('Loading...');
    expect(button).toBeDisabled();
  });
});
