import Home from "./pages/Home/Home";
import RootLayout from "./Component/CommonConponent/RootLayout/RootLayout";

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Shop from "./pages/Shop/Shop";
import ProductInside from "./pages/ProuductInside/ProductInside";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product-inside/:productId" element={<ProductInside />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
