"use client"
import React from 'react';
import { Text } from '../../atoms/Text/Text';
import { Button } from '../../atoms/Button/Button';

export interface CardProps {
  /**
   * The title of the card
   */
  title: string;
  /**
   * The content of the card
   */
  children: React.ReactNode;
  /**
   * Optional button text
   */
  buttonText?: string;
  /**
   * Optional button click handler
   */
  onButtonClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  title,
  children,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <Text variant="h2" className="mb-4">{title}</Text>
      <div className="mb-4">{children}</div>
      {buttonText && (
        <Button onClick={onButtonClick} variant="primary">
          {buttonText}
        </Button>
      )}
    </div>
  );
}; 