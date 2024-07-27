import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Welcome from "./components/welcome/Welcome.tsx";
import Login from "./components/welcome/Login.tsx";
import Register from "./components/welcome/Register.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import Nav from "./components/navigation/Nav.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Welcome />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="dashboard" element={<ProtectedRoute />}>
        <Route index path="" element={<Nav />} />
      </Route>
      <Route path="*" element={<div>Requested page unknown</div>} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
