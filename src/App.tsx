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
import Home from "./components/home/Home.tsx";
import Browse from "./components/home/Browse.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Welcome />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="dashboard" element={<ProtectedRoute />}>
        <Route path="" element={<Home />}>
          <Route index path="" element={<Browse />} />
        </Route>
      </Route>
      <Route path="*" element={<div>Requested page unknown</div>} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
