import styles from "./App.module.css";
import Decoder from "./components/decoder/Decoder";
import ErrorBoundary from "./shared/components/errorBoundary/ErrorBoundary";
import { ErrorFallback } from "./shared/components/errorBoundary/ErrorFallback";

function App() {
  return (
    <div className={styles.container}>
      <ErrorBoundary fallback={<ErrorFallback></ErrorFallback>}>
        <Decoder></Decoder>
      </ErrorBoundary>
    </div>
  );
}

export default App;
