import { FC, memo } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Quote } from '@app/models';
import './QuoteCard.css'

interface QuoteCardProps {
    quote: Quote
}

let QuoteCard: FC<QuoteCardProps> = ({ quote }) => {
  return (
    <Card className='card' sx={{ borderRadius: '8px', backgroundColor: '#F4F7F9'}}>
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
    </Card>
  );
};

QuoteCard = memo(QuoteCard)

export default QuoteCard;
