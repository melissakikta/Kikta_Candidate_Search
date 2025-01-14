import { Link } from 'react-router-dom';


function NavTabs() {
    return (
      <ul className ="nav nav-tabs">
        <li className="nav-item">
          <Link to = '/'><h2>Candidate Search</h2></Link>
        </li>

        <li className="nav-item">
          <Link to = '/SavedCandidates'><h2>Saved Candidates</h2></Link>  
        </li>
      </ul>
    );
  }

  export default NavTabs;
