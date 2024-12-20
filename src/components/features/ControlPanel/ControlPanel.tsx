import React, { ChangeEvent } from 'react';
import { TextField, Button, Box } from '@mui/material';

interface ControlPanelProps {
  count: number;
  filter: string;
  loading: boolean;
  handleCountChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFilterChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFetchQuotes: () => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  count,
  filter,
  loading,
  handleCountChange,
  handleFilterChange,
  handleFetchQuotes,
}) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2rem' }}>      
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <TextField
          label="Size of Quotes"
          type="number"
          value={count}
          onChange={handleCountChange}
          fullWidth
          sx={{ marginRight: '1em' }}
        />
        <TextField
          label="Filter by Tag"
          value={filter}
          onChange={handleFilterChange}
          fullWidth
        />
      </Box>

      <Button
        variant="contained"
        onClick={handleFetchQuotes}
        disabled={loading}
        sx={{ width: '80%', maxWidth: '200px' }}
      >
        Fetch Quotes
      </Button>
    </Box>
  );
};

export default ControlPanel;
