import React from 'react';
import { Typography, Container } from '@mui/material';

interface ErrorComponentProps {
  error: string | null;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ error }) => {
  if (!error) return null;

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h6" color="error" align="center">
        {error}
      </Typography>
    </Container>
  );
};

export default ErrorComponent;
