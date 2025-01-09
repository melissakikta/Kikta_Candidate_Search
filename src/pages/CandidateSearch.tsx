import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';

const CandidateSearch = () => {
  const [users, setUsers] = useState<Candidate>({
    name: '',
    username: '',
    location: '',
    avatar_url: '',
    email: '',
    html_url: '',
    company: '',
  });

  const [search, setSearch] = useState<string>('');

  
  
  return <h1>CandidateSearch</h1>;
};

export default CandidateSearch;
