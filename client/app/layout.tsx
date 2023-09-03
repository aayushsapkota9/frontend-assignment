'use client'
import './globals.css'
import NavBar from './components/NavBar'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { Providers } from './redux/provider'
const queryClient = new QueryClient()
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body><Providers>{children}</Providers></body>
        </html>
    </QueryClientProvider>
  )
}
