import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.tsx';
import CandidateSearch from './pages/CandidateSearch.tsx';
import SavedCandidates from './pages/SavedCandidates.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import { useState } from 'react';

type Candidate = {
  name: string;
  username: string;
  location: string;
  avatar_url: string;
  email: string;
  html_url: string;
  company: string;
};

const Main = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // Default path
        element: (
          <CandidateSearch
            savedCandidates={savedCandidates}
            setSavedCandidates={setSavedCandidates}
          />
        ),
      },
      {
        path: '/SavedCandidates',
        element: (
          <SavedCandidates
            savedCandidates={savedCandidates}
            setSavedCandidates={setSavedCandidates}
          />
        ),
      },
    ],
  },
]);

return <RouterProvider router={router} />;
};

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<Main />);
}
