import { useState } from 'react';
import { searchGithub } from '../api/API';

type Candidate = {
  name: string;
  username: string;
  location: string;
  avatar_url: string;
  email: string;
  html_url: string;
  company: string;
};

const CandidateSearch = () => {
  const [users, setUsers] = useState<Candidate[]>([]);
  const [currentIndex, setCurrentIndex] =useState(0);
  const [SavedCandidates, setSavedCandidates] = useState<Candidate[]>([]); 
  const [search, setSearch] = useState<string>('');

  const handleSearch = async () => {
    if (!search) {
      alert('Please enter a search term');
      return;
    }

    try {
      const response = await searchGithub(search);
      setUsers(response);
      setCurrentIndex(0); // Reset the current index
    } catch (error) {
      console.error('Error fetching candidates:', error);
    }
  };

  const handleSave = () => {
    const candidate = users[currentIndex];
    setSavedCandidates([...SavedCandidates, candidate]);
    setCurrentIndex((prev) => (prev +1) % users.length);
  };

  const handleDismiss = () => {
    setCurrentIndex((prev) => (prev +1) % users.length);
  };
  
  const currentCandidate = users[currentIndex];

  return (
    <div>
      <h1>CandidateSearch</h1>
      <div>
        <input
          type="text"
          placeholder="Search for candidates"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {currentCandidate ? (
        <div className="candidate-card">
          <img src={currentCandidate.avatar_url} alt={`${currentCandidate.name}'s avatar`} />
          <h2>Current Candidate</h2>
          <h3>{currentCandidate.name || 'No Name Provided'}</h3>
          <p>Username: {currentCandidate.username}</p>
          <p>Location: {currentCandidate.location || 'Unkown'}</p>
          <p>Email: {currentCandidate.email || 'No email provided'}</p>
          <p>Company: {currentCandidate.company || 'Not Available'}</p>
          <a href={currentCandidate.html_url} target="_blank" rel="noreferrer">
            View Profile
          </a>
          <div>
            <button onClick={handleSave}>+</button>
            <button onClick={handleDismiss}>-</button>
          </div>
        </div>
      ) : (
        <p>No more candidates to display. Try a new search.</p>
      )}
      </div>
    );
  };
  
export default CandidateSearch;
