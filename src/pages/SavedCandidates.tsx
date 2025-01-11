type Candidate = {
  name: string;
  username: string;
  location: string;
  avatar_url: string;
  email: string;
  html_url: string;
  company: string;
};

type SavedCandidatesProps = {
  savedCandidates: Candidate[];
  setSavedCandidates: React.Dispatch<React.SetStateAction<Candidate[]>>;
};


const SavedCandidates = ({ savedCandidates, setSavedCandidates }: SavedCandidatesProps) => {
  const handleRemove = (username: string) => {
    setSavedCandidates(savedCandidates.filter((candidate) => candidate.username !== username));
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
              <tr key={candidate.username}>
                <td>
                  <img src={candidate.avatar_url} alt={`${candidate.name}'s avatar`} width="50" />
                </td>
                <td>{candidate.name || 'No Name Provided'}</td>
                <td>{candidate.username}</td>
                <td>{candidate.location || 'Unknown'}</td>
                <td>{candidate.email || 'No Email Provided'}</td>
                <td>
                  <a href={candidate.html_url} target="_blank" rel="noreferrer">
                    View Profile
                  </a>
                </td>
                <td>{candidate.company || 'Not Available'}</td>
                <td> {/* add button to remove saved candidate */}
                  <button onClick={() => handleRemove(candidate.username)}>Remove</button>
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

