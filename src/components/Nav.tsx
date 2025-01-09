import { useState } from 'react';
import NavTabs from './NavTabs';
import CandidateSearch from "../pages/CandidateSearch";
import SavedCandidates from '../pages/SavedCandidates';


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
