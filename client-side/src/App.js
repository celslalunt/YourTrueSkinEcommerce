import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./pages/error";
import { HomePage } from "./pages/home";
import { LoginForm } from "./pages/login";
import { RegistrationForm } from "./pages/register";
import { ProfilePage } from "./pages/profilePage";
import { AddProduct } from "./pages/addProduct";
import { AdminForm } from "./pages/adminForm";
import { RegisterMerchant } from "./pages/merchant";
import { ProductID } from "./pages/productID";
import Admin from "./pages/admin";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
    },
    { path: "/login", element: <LoginForm /> },
    { path: "/register", element: <RegistrationForm /> },
    { path: "/profile", element: <ProfilePage /> },
    { path: "/admin", element: <Admin /> },
    { path: "/addProduct", element: <AddProduct /> },
    { path: "/adminForm", element: <AdminForm /> },
    { path: "/registerMerchant", element: <RegisterMerchant /> },
    { path: "/product/:id", element: <ProductID /> },
]);

function App() {
    return (
        <main>
            <RouterProvider router={router} />
        </main>
    );
}

export default App;
