"use client"
import React, { createContext, useContext, useState } from 'react';

const GlobalStateContext = createContext<{ inputValue: string; setInputValue: React.Dispatch<React.SetStateAction<string>> } | null>(null);

export const useGlobalState = () => {
    return useContext(GlobalStateContext);
};

export const GlobalStateProvider = ({ children }: { children: React.ReactNode }) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <GlobalStateContext.Provider value={{ inputValue, setInputValue }}>
            {children}
        </GlobalStateContext.Provider>
    );
};