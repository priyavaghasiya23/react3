import React from 'react';
import {Link} from 'react-router-dom'

export default function Nav() {
    return (
        <div>
            <ul>
                 <li><Link to="/">Home</Link></li>
                 <li><Link to="/Counter">Counter</Link></li>
                 <li><Link to="/TodoApp">TodoApp</Link></li>
                 <li><Link to="/Electronic">Electronic</Link></li>
                 <li><Link to="/ProductDetail">ProductDetail</Link></li>

                 

                

                 

            </ul>
        </div>
    );
}

