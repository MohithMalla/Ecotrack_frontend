import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [newList, setNewList] = useState([
      { id: '1', username: 'Alice', location: 'Kailasagiri' },
      { id: '2', username: 'Bob', location: 'Rushikonda Beach' },
      { id: '3', username: 'Charlie', location: 'Yarada Beach' },
      { id: '4', username: 'Diana', location: 'Ramakrishna Beach' },
      { id: '5', username: 'Eve', location: 'Borra Caves' },
      { id: '6', username: 'Frank', location: 'Simhachalam Temple' },
      { id: '7', username: 'Grace', location: 'Submarine Museum' },
      { id: '8', username: 'Hank', location: 'INS Kurusura Submarine Museum' },
      { id: '9', username: 'Ivy', location: "Dolphin's Nose" },
      { id: '10', username: 'Jack', location: 'Araku Valley' }

  ]);
  const [ongoingList, setOngoingList] = useState([]);
  return (
    <DataContext.Provider value={{ newList, setNewList, ongoingList, setOngoingList }}>
      {children}
    </DataContext.Provider>
  );
};
