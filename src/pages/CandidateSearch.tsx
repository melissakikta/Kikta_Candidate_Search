import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [users, setUsers] = useState<string []>([]);
  const [currentIndex, setCurrentIndex] =useState(0);
  const [currentCandidate, setCurrentCandidate] = useState<Candidate | null>(null);
  

  // Fetch the initial set of candidates when the component mounts
  const fetchInitialCandidates = async () => {
    try {
      const response = await searchGithub(); // Fetch random users
      if (response && response.length > 0) {
        // console.log(response);
        setUsers(response.map((user: any) => user.login));
        const firstCandidate = await searchGithubUser(response[0].login);
        setCurrentCandidate(firstCandidate);
        setCurrentIndex(0);
      } else {
        console.warn('No candidates found during initial fetch.');
      }
    } catch (error) {
      console.error('Error fetching initial candidates:', error);
    }
  };

  useEffect(() => {

    fetchInitialCandidates();
  }, []);

  useEffect(() => {
    const fetchCandidate = async () => {
      try {
        const response = await searchGithubUser(users[currentIndex]);
        console.log(response);

        if (response) {
          // setUsers(response.map((user: any) => user.login));
          setCurrentCandidate(response);
          // setCurrentIndex(0);
        } else {
          console.warn('No candidates found during initial fetch.');
        }
      } catch (error) {
        console.error('Error fetching initial candidates:', error);
      }
    };
    currentIndex > 0 && fetchCandidate();
  }, [currentIndex]);

  const handleSave = () => {
    if (currentCandidate) {
      console.log('Save button clicked');
      const existingCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
      const updatedCandidates = [...existingCandidates, currentCandidate];
      localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates));
      setCurrentIndex(currentIndex + 1);
    } else {
      console.warn('No candidate to save.');
    }
  };

  const handleDismiss = () => {
    console.log('Dismiss button clicked');
    setCurrentIndex(currentIndex + 1);
  };
  
  // const currentCandidate = users[currentIndex];

  return (
    <div>
      <h1>Candidate Search</h1>
      {currentCandidate ? (
        <div className="candidate-card">
          <img src={currentCandidate.avatar_url} alt={`${currentCandidate.name}'s avatar`} />
          <h2>Current Candidate</h2>
          <h3>{currentCandidate.name || 'No Name Provided'}</h3>
          <p>Username: {currentCandidate.login}</p>
          <p>Location: {currentCandidate.location || 'Unknown'}</p>
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
