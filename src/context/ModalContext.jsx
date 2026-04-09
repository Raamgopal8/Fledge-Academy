import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');

  const openModal = (courseName = '') => {
    setSelectedCourse(courseName);
    setIsEnrollModalOpen(true);
  };

  const closeModal = () => {
    setIsEnrollModalOpen(false);
    setSelectedCourse('');
  };

  return (
    <ModalContext.Provider value={{ isEnrollModalOpen, selectedCourse, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
