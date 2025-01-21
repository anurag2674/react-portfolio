import React, { Suspense } from 'react';
import MainContentRoutes from './MainContentRoutes';
const MainContentLayout = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MainContentRoutes />
    </Suspense>
  );
};

export default MainContentLayout;
