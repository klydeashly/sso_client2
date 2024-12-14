import React from 'react';

const ModalComponent = ({ isOpen, title, message, onConfirm, onCancel }) => {
    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div style={{
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '5px',
                width: '400px',
                textAlign: 'center'
            }}>
                <h2>{title}</h2>
                <p>{message}</p>
                <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-around' }}>
                    <button onClick={onConfirm} style={{
                        padding: '10px 20px',
                        backgroundColor: '#007BFF',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}>Confirm</button>
                    <button onClick={onCancel} style={{
                        padding: '10px 20px',
                        backgroundColor: '#6c757d',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default ModalComponent;
