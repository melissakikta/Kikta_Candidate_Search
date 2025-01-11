import { useState } from 'react';
import CandidateSearch from "../pages/CandidateSearch";
import SavedCandidates from '../pages/SavedCandidates';

type NavTabsProps = {
  currentPage: string;
  handlePageChange: (page: string) => void;
};

function NavTabs({ currentPage, handlePageChange }: NavTabsProps) {
  return (
    <nav>
      <a
        href="#CandidateSearch"
        className={currentPage === 'CandidateSearch' ? 'active' : ''}
        onClick={(e) => {
          e.preventDefault(); // Prevent default navigation
          handlePageChange('CandidateSearch');
        }}
      >
        Candidate Search
      </a>
      <a
        href="#SavedCandidates"
        className={currentPage === 'SavedCandidates' ? 'active' : ''}
        onClick={(e) => {
          e.preventDefault();
          handlePageChange('SavedCandidates');
        }}
      >
        Saved Candidates
      </a>
    </nav>
  );
}


//Function to create navigation bar
const Nav = () => {
  const [currentPage, setCurrentPage] = useState('CandidateSearch');
  
  const renderPage = () => {
    if (currentPage === 'CandidateSearch') {
      return <CandidateSearch />;
    } else 
      return <SavedCandidates />;
    };
  
  const handlePageChange = (page: string) => setCurrentPage(page);
  
    return (
    <div>
       {/* We are passing the currentPage from state and the function to update it */}
       <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      <main className="mx-3">{renderPage()}
        
      </main>
    </div>
  )
};

export default Nav;
