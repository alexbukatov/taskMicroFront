import { App } from '../components/App/App';
import { createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { LazyAdmin } from '@/pages/admin/Admin.lazy';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/admin',
        element: (
          <Suspense fallback={'Loading...'}>
            <LazyAdmin />
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
export default routes;
