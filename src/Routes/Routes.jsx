import {createBrowserRouter} from 'react-router-dom'
import App from '../App';
import Error from '../pages/Error';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <Error/>,
        children:[
            {index: true, element: <Home/>},
            {path: '/login', element: <Login/>},
            {path: '/register', element: <Register/>}
        ]
    }
]);
export default router;