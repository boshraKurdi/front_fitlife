import Message from "./Messages/Message";
import AppRouter from "./Routes/AppRouter";
import "./Dashboard/style/style.css";
import { SnackbarProvider } from "notistack";
import { useSelector } from "react-redux";

function App() {
  const { language } = useSelector((state) => state.mode)
  return (
    <div style={{direction: language === 'ar'  ? "rtl" : 'ltr'}} className="App">
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
