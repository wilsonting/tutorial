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
};

type SessionsContextValue = SessionsState & {
  addSession: (sessionData: Session) => void;
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
  type: "ADD_SESSIONS";
  payload: Session;
};

type Action = AddSessionAction;

//initialState
const initialState: SessionsState = {
  sessions: SESSIONSMOCKDATA,
};

//reducer
function sessionsReducer(state: SessionsState, action: Action): SessionsState {
  if (action.type == "ADD_SESSIONS") {
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
    addSession(sessionData) {
      dispatch({ type: "ADD_SESSIONS", payload: sessionData });
    },
  };

  return (
    <SessionsContext.Provider value={ctx}>{children}</SessionsContext.Provider>
  );
}
