import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import AuthProvider from '@/components/AuthProvider/AuthProvider';

const inter = Inter({ subsets: ['latin'] });
// const poppins = Poppins({
//   weight: ['200', '400', '600', '800'],
//   subsets: ['latin'],
// });

export const metadata = {
  title: 'Bienvenue chez Sarah',
  description: 'Mon site portefolio(graphiste, designer)',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className} suppressHydrationWarning={true}>
        <ThemeProvider>
          <AuthProvider>
            <div className='big-container'>
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
