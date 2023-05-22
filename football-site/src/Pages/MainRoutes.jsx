import { Route, Routes } from "react-router-dom";
import {Login} from './Login'
import {WatchListPage} from "./WatchListPage"
import {Homepage} from "./Homepage"
import { PrivateRoute } from "../Components/PrivateRoute";
export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/watch-List" element={<PrivateRoute><WatchListPage/></PrivateRoute>} />
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </Routes>
  );
};
