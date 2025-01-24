import Message from "./Messages/Message";
import AppRouter from "./Routes/AppRouter";
import "./Dashboard/style/style.css";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <div className="App">
      <SnackbarProvider
        style={{ fontSize: "1.3rem" }}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        autoHideDuration={4000}
        maxSnack={3}
      >
        <AppRouter />
        <Message />
      </SnackbarProvider>
    </div>
  );
}

export default App;
