'use client';

import React from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

// Constants
import { TIME_STATUS } from '@/constants';

export function QueryProvider({ children }: React.PropsWithChildren) {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: TIME_STATUS.STALE_TIME,
        refetchOnWindowFocus: false
      }
    }
  });

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
