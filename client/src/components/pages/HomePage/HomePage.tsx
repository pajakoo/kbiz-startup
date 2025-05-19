"use client"
import React from 'react';
import { MainLayout } from '../../templates/MainLayout/MainLayout';
import { Card } from '../../molecules/Card/Card';
import { Text } from '../../atoms/Text/Text';
import { UsersTable } from '../../organisms/UsersTable/UsersTable';

export const HomePage: React.FC = () => {
  const handleLogin = () => {
    console.log('Login clicked');
  };

  const handleSignup = () => {
    console.log('Signup clicked');
  };

  return (
    <MainLayout
      title="My App"
      onLoginClick={handleLogin}
      onSignupClick={handleSignup}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          title="Welcome"
          buttonText="Learn More"
          onButtonClick={() => console.log('Learn more clicked')}
        >
          <Text>
            Welcome to our application! This is a sample card component using atomic design principles.
          </Text>
        </Card>
        
        <Card
          title="Features"
          buttonText="View Features"
          onButtonClick={() => console.log('View features clicked')}
        >
          <Text>
            Discover all the amazing features our application has to offer.
          </Text>
        </Card>
        
        <Card
          title="Get Started"
          buttonText="Start Now"
          onButtonClick={() => console.log('Start now clicked')}
        >
          <Text>
            Ready to begin? Click the button below to get started with our application.
          </Text>
        </Card>
      </div>
      <br />
      <UsersTable />

    </MainLayout>
  );
}; 