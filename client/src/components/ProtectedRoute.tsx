import React from 'react';
import { Navigate } from 'react-router-dom';
import AuthService from '../utils/auth'; // Assuming AuthService handles token checks

interface ProtectedRouteProps {
  element: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const token = AuthService.getToken(); // Check if there's a valid token

  if (!token) {
    // If no token, redirect to login
    return <Navigate to="/login" replace />;
  }

  return element; // If authenticated, render the passed element
};

export default ProtectedRoute;