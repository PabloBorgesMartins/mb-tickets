import React, {
    createContext, useState, useContext, ReactNode,
} from 'react';

interface ModalContextData {
    isModalSignInOpen: boolean;
    setIsModalSignInOpen(val: boolean): void;
    isModalSignUpOpen: boolean;
    setIsModalSignUpOpen(val: boolean): void;
}

interface ModalProviderProps {
    children: ReactNode;
}


const ModalContext = createContext<ModalContextData>({} as ModalContextData);

const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
    const [isModalSignInOpen, setIsModalSignInOpen] = useState(false);
    const [isModalSignUpOpen, setIsModalSignUpOpen] = useState(false);

    return (
        <ModalContext.Provider value={{
            isModalSignInOpen,
            setIsModalSignInOpen,
            isModalSignUpOpen,
            setIsModalSignUpOpen
        }}
        >
            {children}
        </ModalContext.Provider>
    );
};

function useModal(): ModalContextData {
    const context = useContext(ModalContext);

    if (!context) {
        throw new Error('useModal must be used within an ModalProvider');
    }
    return context;
}

export { ModalProvider, useModal };
