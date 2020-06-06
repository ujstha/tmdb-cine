import React from 'react';

export const UserAuthenticationAlert = ({ alertType, message }) => (
  <div className={`alert alert-${alertType} text-center`}>{message}</div>
);
