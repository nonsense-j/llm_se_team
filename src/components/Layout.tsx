import React from 'react';
import { Navigation } from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,<svg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22><g fill=%22none%22 fill-rule=%22evenodd%22><g fill=%22%23ffffff%22 fill-opacity=%220.1%22><circle cx=%227%22 cy=%227%22 r=%221%22/><circle cx=%2220%22 cy=%2220%22 r=%221%22/><circle cx=%2235%22 cy=%2235%22 r=%221%22/><circle cx=%2250%22 cy=%2250%22 r=%221%22/><circle cx=%2225%22 cy=%227%22 r=%220.5%22/><circle cx=%2240%22 cy=%2215%22 r=%220.5%22/><circle cx=%2215%22 cy=%2240%22 r=%220.5%22/><circle cx=%2245%22 cy=%2225%22 r=%220.5%22/></g></g></svg>')] opacity-20"></div>
      <Navigation />
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
};