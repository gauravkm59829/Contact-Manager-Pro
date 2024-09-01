import React from 'react';
import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <div className="absolute top-0 z-40 grid place-items-center h-screen w-screen backdrop-blur">
          <div className="relative z-50 m-auto p-4 min-h-[200px] min-w-[40%] max-w-[80%] bg-gradient-to-r from-blue-500 to-blue-700 text-gray-200 rounded-lg shadow-xl">
            <div className="flex justify-end">
              <AiOutlineClose
                className="self-end text-2xl text-gray-200 hover:text-red-400 cursor-pointer"
                onClick={onClose}
              />
            </div>
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
