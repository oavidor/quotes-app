import { Quote } from '@app/models';

interface State {
  count: number;
  filter: string;
  quotes: Quote[];
  loading: boolean;
  error: string | null;
}

type Action =
  | { type: 'SET_COUNT'; payload: number }
  | { type: 'SET_FILTER'; payload: string }
  | { type: 'SET_QUOTES'; payload: Quote[] }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'INITIATE_FETCH_REQUEST' };

const initialState: State = {
  count: 0,
  filter: '',
  quotes: [],
  loading: false,
  error: null,
};

const quotesReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_COUNT':
      return { ...state, count: action.payload };
    case 'SET_FILTER':
      return { ...state, filter: action.payload };
    case 'SET_QUOTES':
      return { ...state, quotes: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'INITIATE_FETCH_REQUEST':
      return { ...state, loading: true, error: null };
    default:
      return state;
  }
};

export { quotesReducer, initialState };
