import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./contexts/AuthContext";
import { Routes } from "./routes";
import "react-toastify/dist/ReactToastify.css";
import { CaseProvider } from "./contexts/CaseContext";

export function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CaseProvider>
          <Routes />
          <ToastContainer autoClose={3000} theme="colored" />
        </CaseProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
