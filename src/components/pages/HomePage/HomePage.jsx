import React from 'react';
import './HomePage.scss';
import Directory from '../../directory/Directory'


const HomePage = ({ history }) =>{
    
   return (
    <div className="homepage">
        <div className="directory-menu">
            <Directory/>
        </div>
    </div>
    )
}

export default HomePage