import Home from "./pages/Home/Home";
import RootLayout from "./Component/CommonConponent/RootLayout/RootLayout";

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Shop from "./pages/Shop/Shop";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Registration from "./pages/Registration/Registration";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Chekout from "./pages/Checkout/Chekout";
import MyAcount from "./pages/Myaccount/MyAcount";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/product-details/:productId"
          element={<ProductDetails />}
        />
        <Route path="/cart" element={<Cart />} />,
        <Route path="/registration" element={<Registration />}></Route>,
        <Route path="/login" element={<Login />}></Route>
        <Route path="/chekout" element={<Chekout />}></Route>
        <Route path="/account" element={<MyAcount />}></Route>
        <Route
          path="/*"
          element={<h1 className="text-red-500"> error is here</h1>}
        ></Route>
      </Route>
    </Route>,
  ),
);

function App() {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
