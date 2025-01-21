import { createBrowserRouter } from 'react-router-dom';
import MainContentLayout from './components/MainContentLayout';
import App from './App';
import AppLayout from './AppLayout';
import MainContentRoutes from './components/MainContentRoutes';
const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <AppLayout />,
        children: [
          {
            path: '/',
            element: <MainContentLayout />,
            children: [{ path: '*', element: <MainContentRoutes /> }],
          },
        ],
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
