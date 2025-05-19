"use client"
import React from 'react';
import { Header } from '../../organisms/Header/Header';

export interface MainLayoutProps {
  /**
   * The content of the layout
   */
  children: React.ReactNode;
  /**
   * The title of the header
   */
  title: string;
  /**
   * Optional login button click handler
   */
  onLoginClick?: () => void;
  /**
   * Optional signup button click handler
   */
  onSignupClick?: () => void;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title,
  onLoginClick,
  onSignupClick,
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        title={title}
        onLoginClick={onLoginClick}
        onSignupClick={onSignupClick}
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}; 