import { useState } from 'react';
import CandidateSearch from './pages/CandidateSearch';
import SavedCandidates from './pages/SavedCandidates';

type Candidate = {
  name: string;
  username: string;
  location: string;
  avatar_url: string;
  email: string;
  html_url: string;
  company: string;
};

const App = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  return (
    <div>
      <CandidateSearch
        savedCandidates={savedCandidates}
        setSavedCandidates={setSavedCandidates}
      />
      <SavedCandidates
        savedCandidates={savedCandidates}
        setSavedCandidates={setSavedCandidates}
      />
    </div>
  );
};

export default App;
