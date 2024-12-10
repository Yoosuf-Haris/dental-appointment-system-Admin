// Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-black">
                    <i className="fa fa-times"></i>
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
