function NavTabs({currentPage, handlePageChange }) {
  return (
    <nav>
      <button onClick={() => handlePageChange('CandidateSearch')}>
        Candidate Search
      </button>
      <button onClick={() => handlePageChange('SavedCandidates')}>
        Saved Candidates
      </button>
    </nav>
  );
}

export default NavTabs;