"use client";
import './globals.css';
import { StoreProvider } from '@/redux/provider';

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
              {children}
            </StoreProvider>
        </body>
      </html>
	);
}
