import { createBrowserRouter } from 'react-router';
import MainContent from './components/MainContent';
import App from './App';
import AppLayout from './AppLayout';
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
            element: <MainContent />,
          },
        ],
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
