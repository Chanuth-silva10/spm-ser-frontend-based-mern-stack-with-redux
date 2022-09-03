import AdminHome from "./pages/AdminHome/Dashboard/AdminHome";
import User from "./pages/AdminHome/User/ViewUser";
import Product from "./pages/AdminHome/Products/ViewProduct";
import Home from "./pages/Home/Home";
import Login from "./pages/Home/Authentication/LoginSignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
        <Route path="/">
            <Route index element={<Home />} />
            <Route path="login">
              <Route index element={<Login />} />
            </Route>
          </Route>
          <Route path="/adminHome">
            <Route index element={<AdminHome />} />
            <Route path="users">
              <Route index element={<User />} />
              <Route path=":userId" />
            </Route>
            <Route path="products">
              <Route index element={<Product />} />
              <Route path=":productId" />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
