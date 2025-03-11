import Header from './components/Header';
import './globals.css';

export const metadata = {
  title: 'VAI - Interactive 3D Website',
  description: 'A website with interactive 3D elements using Three.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
} 