import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({setToken}) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        setToken("");
        localStorage.clear();
        navigate('/');
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px' }}>
            <h1>Welcome to the Home Page! CLIENT 2</h1>
            <button
                onClick={handleLogout}
                style={{ padding: '10px', backgroundColor: '#FF5733', color: 'white', border: 'none', marginTop: '20px' }}
            >
                Logout
            </button>
        </div>
    );
};

export default Home;
