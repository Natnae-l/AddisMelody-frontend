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
import AddMusic from "./components/home/AddMusic.tsx";
import Favourite from "./components/home/Favourite.tsx";
import Statistics from "./components/home/Statistics.tsx";
import UpdateSong from "./components/home/UpdateSong.tsx";

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
          <Route path="favourite" element={<Favourite />} />
          <Route path="add" element={<AddMusic />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="update" element={<UpdateSong />} />
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
