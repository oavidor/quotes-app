
import React from 'react';
import { CircularProgress, Container } from '@mui/material';

const LoaderComponent: React.FC = () => {
  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
      <CircularProgress />
    </Container>
  );
};

export default LoaderComponent;