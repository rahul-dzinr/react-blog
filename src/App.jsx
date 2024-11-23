import AllRoutes from "./routes/AllRoutes";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <AllRoutes />
    </ThemeProvider>
  )
}