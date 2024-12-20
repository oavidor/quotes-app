import React, { useReducer, useCallback } from 'react';
import { Box, Typography } from '@mui/material';
import useQuotesData from '@app/hooks/useQuotesData';
import QuoteList from '@app/components/features/QuoteList/QuoteList';
import ControlPanel from '../../components/features/ControlPanel/ControlPanel';
import ErrorComponent from '@app/components/ui/ErrorComponent/ErrorComponent';
import LoaderComponent from '@app/components/ui/LoaderComponent/LoaderComponent';
import { quotesReducer, initialState } from './quotesReducer';

const QuotesView: React.FC = () => {
  const [state, dispatch] = useReducer(quotesReducer, initialState);
  const { quotes, loading, error, count, filter } = state;
  const { fetchQuotes } = useQuotesData();

  const handleCountChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: 'SET_COUNT', payload: Number(event.target.value) });
    },
    []
  );

  const handleFilterChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: 'SET_FILTER', payload: event.target.value });
    },
    []
  );

  const handleFetchQuotes = useCallback(async () => {
    if (count <= 0 || count > 25) {
      dispatch({ type: 'SET_ERROR', payload: 'Number must be greater than 0 and smaller than 25' });
      return;
    }
    dispatch({ type: 'INITIATE_FETCH_REQUEST' });

    try {
      const fetchedQuotes = await fetchQuotes(count, filter);
      dispatch({ type: 'SET_QUOTES', payload: fetchedQuotes });
    } catch (err) {
      dispatch({ type: 'SET_ERROR', payload: `${err ?? 'Error fetching quotes'}`});
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, [fetchQuotes, filter, count]);

  return (
    <Box sx={{ marginTop: 4, px: '2em' }}>
      <Typography variant="h4" align="center" gutterBottom sx={{marginBottom: '1em'}}>
        Quotes of the Day
      </Typography>
      <ControlPanel
        count={count}
        filter={filter}
        loading={loading}
        handleCountChange={handleCountChange}
        handleFilterChange={handleFilterChange}
        handleFetchQuotes={handleFetchQuotes}
      />
      <ErrorComponent error={error} />
      {loading ? <LoaderComponent /> : <QuoteList quotes={quotes} />}
    </Box>
  );
};

export default QuotesView;
