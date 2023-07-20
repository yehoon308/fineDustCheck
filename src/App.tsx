import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Care from './pages/Care';
import KidsPage from './pages/KidsPage';
import Root from './pages/Root';
import Todo from './pages/Todo';
import Login from './pages/Login';
import CheckPage from './pages/CheckPage';

const App: React.FC = () => {
  const queryClient = new QueryClient();
  const [loggedIn, setLoggedIn] = useState(false);
  const router = createBrowserRouter([
    {
      path: '/react',
      element: <Root />,
      errorElement: <p>Not Found 😢</p>,
      children: [
        { index: true, element: <Login /> },
        { path: 'todo', element: <Todo /> },
        { path: 'care', element: <Care /> },
        { path: 'kids', element: <KidsPage /> },
        { path: 'checkPage', element: <CheckPage /> },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
