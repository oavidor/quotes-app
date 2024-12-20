import React, { useState, ChangeEvent, useCallback } from 'react';
import { TextField, Button, Box } from '@mui/material';
import styled from '@emotion/styled';


const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const FieldsContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const SubmitButton = styled(Button)`
  width: 80%;
  max-width: 200px;
`;

interface ControlPanelProps {
  onSubmit: (count: number, filter: string) => void;
  submitDisabled: boolean;
}


const ControlPanel: React.FC<ControlPanelProps> = ({ onSubmit, submitDisabled }) => {
  const [count, setCount] = useState<number>(0);
  const [filter, setFilter] = useState<string>('');

  const handleCountChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setCount(Number(event.target.value) )
    },
    []
  )

  const handleFilterChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setFilter(event.target.value)
    },
    []
  );

  const handleSubmit = useCallback(() => {
    onSubmit(count, filter);
  }, [onSubmit, count, filter]);

  return (
    <Container>
      <FieldsContainer>
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
      </FieldsContainer>

      <SubmitButton
        variant="contained"
        onClick={handleSubmit}
        disabled={submitDisabled}
      >
        Fetch Quotes
      </SubmitButton>
    </Container>
  );
};

export default ControlPanel;
