import { Quote } from '@app/models';

export enum ActionType {
  SET_STATE = 'SET_STATE',
  INITIATE_FETCH_REQUEST = 'INITIATE_FETCH_REQUEST',
}

interface State {
  quotes: Quote[];
  loading: boolean;
  error: string | null;
}

interface Action {
  type: ActionType;
  payload?: Partial<State>;
}

export const initialState: State = {
  quotes: [],
  loading: false,
  error: null,
};

export const quotesReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.SET_STATE:
      return { ...state, ...action.payload };
    case ActionType.INITIATE_FETCH_REQUEST:
      return { ...state, loading: true, error: null };
    default:
      return state;
  }
};
