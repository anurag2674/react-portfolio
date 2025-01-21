import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const MainContentRoutes = () => {
  const routerConfig = [
    {
      index: true, // This will render for the empty path (`/`)
      component: lazy(() => import('./Home')),
    },
    {
      path: 'projects',
      component: lazy(() => import('./Projects')),
    },
    {
      path: 'experience',
      component: lazy(() => import('./Experience')),
    },
    {
      path: 'contact',
      component: lazy(() => import('./Contact')),
    },
    { path: '*', component: lazy(() => import('./NotFound')) },
  ];

  const renderRoutes = (routes) => {
    return routes.map(({ path, component: Component, index }) => (
      <Route
        key={path || 'index'}
        path={path}
        index={index}
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Component />
          </Suspense>
        }
      />
    ));
  };

  return <Routes>{renderRoutes(routerConfig)}</Routes>;
};

export default MainContentRoutes;
