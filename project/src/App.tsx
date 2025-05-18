import { ThemeProvider } from "@/components/ui/theme-provider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { DashboardLayout } from "./components/layout/dashboard-layout";
import { ErrorPage } from "./pages/error-page";
import './App.css';

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <Router>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="*" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;