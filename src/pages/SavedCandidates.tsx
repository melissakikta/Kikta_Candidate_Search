import { useState, useEffect } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';


const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

    useEffect(() => {
      const storedCandidates = localStorage.getItem('savedCandidates');
      console.log(storedCandidates);
      if (storedCandidates) {
        setSavedCandidates(JSON.parse(storedCandidates));
      }
    }, []);

  const handleRemove = (username: string) => {
    const updatedCandidates = savedCandidates.filter((candidate) => candidate.login !== username);
    setSavedCandidates(updatedCandidates);
    localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates));
  };

  return (
    <div>
      <h1>Saved Candidates</h1>
      {savedCandidates.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Name</th>
              <th>Username</th>
              <th>Location</th>
              <th>Email</th>
              <th>Profile</th>
              <th>Company</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {savedCandidates.map((candidate) => (
              <tr key={candidate.login}>
                <td>
                  <img src={candidate.avatar_url} alt={`${candidate.name}'s avatar`} width="50" />
                </td>
                <td>{candidate.name || 'No Name Provided'}</td>
                <td>{candidate.login}</td>
                <td>{candidate.location || 'Unknown'}</td>
                <td>{candidate.email || 'No Email Provided'}</td>
                <td>
                  <a href={candidate.html_url} target="_blank" rel="noreferrer">
                    View Profile
                  </a>
                </td>
                <td>{candidate.company || 'Not Available'}</td>
                <td> 
                  <button onClick={() => handleRemove(candidate.login)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No saved candidates.</p>
      )}
    </div>
  );
};

export default SavedCandidates;

