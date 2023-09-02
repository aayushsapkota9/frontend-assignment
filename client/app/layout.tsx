'use client'
import './globals.css'
import NavBar from './components/NavBar'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
const queryClient = new QueryClient()
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body>{children}</body>
        </html>
    </QueryClientProvider>
  )
}
