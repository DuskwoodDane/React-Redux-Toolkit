import React from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';

const Home = React.lazy(() => import('../views/Home'))
const Immer = React.lazy(() => import('../views/Immer'))

const GetRoutes = () => {
  const router = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/home',
      element: <Home />
    },
    {
      path: '/immer',
      element: <Immer />
    }
  ])
  return router
}

const ConstantRoute = () => {
  return (
    <Router>
      <GetRoutes />
    </Router>
  )
}

export default ConstantRoute;