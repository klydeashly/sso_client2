import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import accountservice from '../apis/accountservice';
import ModalComponent from '../components/ModalComponent';

const Login = ({ setToken }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [userToConfirm, setUserToConfirm] = useState(null);
    const navigate = useNavigate();

    const confirmationToken = localStorage.getItem("confirmationToken");

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await accountservice.login({ username, password });
        console.log(response);
        if (response?.data?.token) {
            setToken(response.data.token);
            localStorage.setItem('token', response.data.token);
            navigate('/');
        } else {
            alert('Invalid username or password');
        }
    };

    const handleLoginConfirmation = async () => {
        if (!confirmationToken) return;
        const { data: user } = await accountservice.confirmationGetUserData({ uniqueToken: confirmationToken });
        setUserToConfirm(user);
        setModalMessage(`You are logging in as ${user.username}. Do you want to continue?`);
        setIsModalOpen(true);
    };

    const confirmLogin = async () => {
        const { data } = await accountservice.confirmLogin({ uniqueToken: confirmationToken });
        console.log(data);
        setToken(data.token);
        localStorage.setItem('token', data.token);
        setIsModalOpen(false);
    };

    const cancelLogin = () => {
        setIsModalOpen(false);
        setUserToConfirm(null);
    };

    useEffect(() => {
        handleLoginConfirmation();
    }, []);

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px' }}>
                <h1>Login</h1>
                <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{ marginBottom: '10px', padding: '10px' }}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ marginBottom: '10px', padding: '10px' }}
                    />
                    <button type="submit" style={{ padding: '10px', backgroundColor: '#007BFF', color: 'white', border: 'none' }}>
                        Login
                    </button>
                </form>
            </div>
            <ModalComponent
                isOpen={isModalOpen}
                title="Login Confirmation"
                message={modalMessage}
                onConfirm={confirmLogin}
                onCancel={cancelLogin}
            />
        </>
    );
};

export default Login;
