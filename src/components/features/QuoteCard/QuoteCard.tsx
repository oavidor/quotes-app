import { FC, memo } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Quote } from '@app/models';
import './QuoteCard.css'
import styled from '@emotion/styled';

const Container = styled(Card)`
 border-radius: 8px;
 background-color: #F4F7F9
`;

interface QuoteCardProps {
    quote: Quote
}

let QuoteCard: FC<QuoteCardProps> = ({ quote }) => {
  return (
    <Container className='card'>
      <CardContent>
        <Typography variant="h6" component="div">
          {`"${quote.body}"`}
        </Typography>
        <Typography className='author' color="text.secondary">
          {quote.author}
        </Typography>
        <Typography className="tags" variant="body2">
          Tags: {quote.tags.join(', ')}
        </Typography>
      </CardContent>
    </Container>
  );
};

QuoteCard = memo(QuoteCard)

export default QuoteCard;
