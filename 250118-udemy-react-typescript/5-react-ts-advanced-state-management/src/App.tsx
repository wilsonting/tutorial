import AddTimer from "./components/AddTimer";
import Header from "./components/Header";
import Timers from "./components/Timers";
import TimersContextProvider from "./store/timers-context";

function App() {
  return (
    /**
     * wrap component with context provider such that it's able to access
     *  all the states defined in TimerContextProvider
     */
    <TimersContextProvider>
      <Header />
      <main>
        <AddTimer />
        <Timers />
      </main>
    </TimersContextProvider>
  );
}

export default App;
