import { FC, memo } from 'react';
import { Box } from '@mui/material';
import { Quote } from '@app/models';
import QuoteCard from '../QuoteCard/QuoteCard';
import './QuoteList.css';

interface QuoteListProps {
    quotes: Quote[];
}

let QuoteList: FC<QuoteListProps> = ({ quotes = []}) => {
    return (
      <Box className='quotes-container'>
        <Box className="quote-card-container">
          {quotes.map((quote) => (
              <QuoteCard quote={quote}  key={quote.id}/>
          ))}
        </Box>
      </Box>
    );
};

QuoteList = memo(QuoteList)

export default QuoteList;
