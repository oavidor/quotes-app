import React, { useReducer, useCallback } from 'react';
import { Box, Typography } from '@mui/material';
import useQuotesData from '@app/hooks/useQuotesData';
import QuoteList from '@app/components/features/QuoteList/QuoteList';
import ControlPanel from '@app/components/features/ControlPanel/ControlPanel';
import ErrorComponent from '@app/components/ui/ErrorComponent/ErrorComponent';
import LoaderComponent from '@app/components/ui/LoaderComponent/LoaderComponent';
import { quotesReducer, initialState, ActionType } from './quotesReducer';

const MAX_COUNT = 25;
const MIN_COUNT = 0;

const QuotesView: React.FC = () => {
  const [state, dispatch] = useReducer(quotesReducer, initialState);
  const { quotes, loading, error } = state;
  const { fetchQuotes } = useQuotesData();

  const validateInput = useCallback((count: number) => {
    if (count <= MIN_COUNT || count > MAX_COUNT) {
      dispatch({
        type: ActionType.SET_STATE,
        payload: { error: `Number must be greater than ${MIN_COUNT} and smaller than ${MAX_COUNT}` },
      });
      return false;
    }
    return true;
  }, [dispatch]);

  const handleFetchQuotes = useCallback(
    async (count: number, filter: string) => {
     
      if (!validateInput(count)) {
        return;
      }

      dispatch({ type: ActionType.INITIATE_FETCH_REQUEST });
      
      try {
        const fetchedQuotes = await fetchQuotes(count, filter);
        dispatch({ type: ActionType.SET_STATE, payload: { quotes: fetchedQuotes, loading: false } });
      } catch (err) {
        dispatch({
          type: ActionType.SET_STATE,
          payload: { error: `${err ?? 'Error fetching quotes'}`, loading: false },
        });
      }
    },
    [fetchQuotes, validateInput]
  );

  return (
    <Box sx={{ marginTop: 4, px: '2em' }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ marginBottom: '1em' }}>
        Quotes of the Day
      </Typography>
      <ControlPanel
        onSubmit={handleFetchQuotes}
        submitDisabled={loading}
      />
      <ErrorComponent error={error} />
      {loading ? <LoaderComponent /> : <QuoteList quotes={quotes} />}
    </Box>
  );
};

export default QuotesView;