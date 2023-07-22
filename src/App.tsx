import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import DustPage from './pages/DustPage';
import Root from './pages/Root';

const App: React.FC = () => {
  const queryClient = new QueryClient();
  const router = createBrowserRouter([
    {
      path: '/react',
      element: <Root />,
      errorElement: <p>Not Found 😢</p>,
      children: [{ path: 'kids', element: <DustPage /> }],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
