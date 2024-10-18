import Head from 'next/head';
import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='bg-primary text-secondary min-h-screen max-h-screen flex flex-col'>
      <Head>
        <title>App Paddle | Web Development & Design Agency</title>
        <meta
          name='description'
          content='Bring your ideas to digital reality with App Paddle, a full-service web development and design agency.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* Main Content */}
      <main className='flex-grow max-h-screen flex flex-col overflow-hidden'>{children}</main>

      {/* Footer */}
      <footer className='bg-secondary text-primary py-4'>
        <div className='text-center text-sm'>
          &copy; {new Date().getFullYear()} App Paddle. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
