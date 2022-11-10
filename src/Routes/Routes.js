import AddServices from '../Components/AddServices/AddServices';
import Blog from '../Components/Blog/Blog';
import Home from '../Components/Home/Home';
import Login from '../Components/Login/Login';
import EditReview from '../Components/MyReview/EditReview/EditReview';
import MyReview from '../Components/MyReview/MyReview';
import Register from '../Components/Register/Register';
import ServiceDetails from '../Components/ServiceDetails/ServiceDetails';
import Services from '../Components/Services/Services';
import Main from '../Layout/Main';
import PrivateRoute from '../Routes/PrivateRoute';


const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`https://your-medico-server.vercel.app/home`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/addservices',
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
            },

            {
                path: '/myreview/user/:email',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>,
                // loader: ({params}) => fetch(`https://your-medico-server.vercel.app/myreview/user/${params.email}`)
            },
            {
                path:'/editreview/:id',
                element: <PrivateRoute><EditReview></EditReview></PrivateRoute>,
                loader: ({params}) => fetch(`https://your-medico-server.vercel.app/review/${params.id}`)
            },

            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch(`https://your-medico-server.vercel.app/services`)
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params}) => fetch(`https://your-medico-server.vercel.app/services/${params.id}`)
            },
        ]
    }
]);

export default router;