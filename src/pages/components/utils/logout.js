import React from 'react';
import { useNavigate } from 'react-router-dom';

const userId = localStorage.getItem('userId');

export function Logout() {
    const navigate = useNavigate();
    function logout (){
        localStorage.removeItem('userId');
        localStorage.removeItem('invId');
        navigate('/login');
        console.log(userId);   
    }
    return (
      <div>
        <button className='buttonLogout' onClick={logout}>Sair</button>
      </div>
    )
}

export default Logout;