import React from 'react';
import './Styles.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

function Profile(){
    return (
        <div>
            <h1>Aca va tu perfil</h1>
            <Link to="/Profile/Settings">
                <h2>Configura tu perfil</h2>
            </Link>
        </div>
    )
}
export default Profile;