"use client"
import React from 'react';
import { Button } from '../../atoms/Button/Button';
import { Text } from '../../atoms/Text/Text';

export interface HeaderProps {
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

export const Header: React.FC<HeaderProps> = ({
  title,
  onLoginClick,
  onSignupClick,
}) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Text variant="h1" className="text-xl">{title}</Text>
          <div className="flex gap-4">
            <Button variant="outline" onClick={onLoginClick}>
              Login
            </Button>
            <Button variant="primary" onClick={onSignupClick}>
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}; 