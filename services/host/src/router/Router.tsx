import { App } from '../components/App/App';
import { createBrowserRouter } from 'react-router-dom';
//@ts-ignore
import shopRoutes from 'shop/Router';
//@ts-ignore
import adminRoutes from 'admin/Router';
//@ts-ignore
import aboutRoutes from 'about/Router';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [...shopRoutes, ...adminRoutes, ...aboutRoutes],
  },
]);
