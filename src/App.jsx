import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import Signup from './Components/Signup'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import Signin from './Components/Signin'
import HomePage from './Components/HomePage'
import ForgetPassword from './Components/ForgetPassword'
import ResetPassword from './Components/ResetPassword'
import EmailForm from './Components/EmailForm'
import {loader as userLoader} from './Components/Header'
import Content from './Components/Content'
import Plan from './Components/Plan'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />
  },
  {
    path: "/signin",
    element: <Signin />
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />
  },
  {
    path: "/resetpassword/:token",
    element: <ResetPassword />
  },
  {
    path: "/home",
    element: <HomePage />,
    loader: userLoader,
  },
  {
    path: "/send-emails",
    element: <EmailForm />,
    loader: userLoader,
  },
  {
    path: "/features",
    element: <Content/>,
    loader: userLoader,
  },
  {
    path:"/plans",
    element:<Plan/>,
    loader: userLoader,
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;
