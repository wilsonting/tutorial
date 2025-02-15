import { createContext, ReactNode, useContext, useReducer } from "react";
import { SESSIONS as SESSIONSMOCKDATA } from "../dummy-sessions";

export type Session = {
  id: string;
  title: string;
  summary: string;
  description: string;
  duration: number;
  date: string;
  image: string;
};

type SessionsState = {
  sessions: Session[];
  bookedSessions: Session[];
};

type SessionsContextValue = SessionsState & {
  addSession: (sessionData: Session) => void;
  bookSession: (sessionData: Session) => void;
  cancelBookedSession: (sessionId: string) => void;
};

const SessionsContext = createContext<SessionsContextValue | null>(null);

export function useSessionsContext() {
  const sessionsCtx = useContext(SessionsContext);
  if (!sessionsCtx) {
    throw Error("sessionCtx does not exist");
  }

  return sessionsCtx;
}

//list of actions
type AddSessionAction = {
  type: "ADD_SESSION";
  payload: Session;
};

type BookSessionAction = {
  type: "BOOK_SESSION";
  payload: Session;
};

type CancelBookSessionAction = {
  type: "CANCEL_BOOK_SESSION";
  id: string;
};

type Action = AddSessionAction | BookSessionAction | CancelBookSessionAction;

//initialState
const initialState: SessionsState = {
  sessions: SESSIONSMOCKDATA,
  bookedSessions: [],
};

//reducer
function sessionsReducer(state: SessionsState, action: Action): SessionsState {
  if (action.type == "ADD_SESSION") {
    const { id, title, summary, description, duration, date, image } =
      action.payload;
    return {
      ...state,
      sessions: [
        ...state.sessions,
        {
          id: id,
          title: title,
          summary: summary,
          description: description,
          duration: duration,
          date: date,
          image: image,
        },
      ],
    };
  }
  if (action.type === "BOOK_SESSION") {
    if (
      state.bookedSessions.some((session) => session.id === action.payload.id)
    ) {
      return state;
    } else {
      return {
        ...state,
        bookedSessions: state.bookedSessions.concat(action.payload),
      };
    }
  }
  if (action.type === "CANCEL_BOOK_SESSION") {
    if (!state.bookedSessions.some((session) => session.id === action.id)) {
      return state;
    } else {
      return {
        ...state,
        bookedSessions: state.bookedSessions.filter(
          (session) => session.id !== action.id
        ),
      };
    }
  }

  return state;
}

export type SessionsContextProviderProps = {
  children: ReactNode;
};

//context provider
export default function SessionsContextProvider({
  children,
}: SessionsContextProviderProps) {
  const [sessionsState, dispatch] = useReducer(sessionsReducer, initialState);

  const ctx: SessionsContextValue = {
    sessions: sessionsState.sessions,
    bookedSessions: sessionsState.bookedSessions,
    addSession(sessionData) {
      dispatch({ type: "ADD_SESSION", payload: sessionData });
    },
    bookSession(sessionData) {
      dispatch({ type: "BOOK_SESSION", payload: sessionData });
    },
    cancelBookedSession(sessionId) {
      dispatch({ type: "CANCEL_BOOK_SESSION", id: sessionId });
    },
  };

  return (
    <SessionsContext.Provider value={ctx}>{children}</SessionsContext.Provider>
  );
}
