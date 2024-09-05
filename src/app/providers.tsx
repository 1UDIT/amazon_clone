// app/providers.jsx
'use client'

 
import React, { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';

interface ProvidersProps {
    children: ReactNode;
  }

export default function Providers({ children }:ProvidersProps) {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
