"use client";
import './globals.css';
import { StoreProvider } from '@/redux/provider';
import NavBar from '@/components/navBar';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
      <html lang="en">
        <head>
          <title>24Siete</title>
        </head>
        <body>
            <StoreProvider>
              <NavBar />          
              {children}
            </StoreProvider>
        </body>
      </html>
	);
}
