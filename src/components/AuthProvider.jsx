// Importa funções e objetos necessários da biblioteca 'react'.
import { useState, createContext, useContext } from 'react';

// Cria um contexto de autenticação inicializado com 'null'.
const AuthContext = createContext(null);

// Cria um hook customizado 'useAuth' que usa o contexto de autenticação.
export const useAuth = () => useContext(AuthContext);

// Define um componente 'AuthProvider' que fornecerá o contexto de autenticação para seus filhos.
export const AuthProvider = ({ children }) => {
    // Cria um estado 'autenticado' e uma função 'setAutenticado' para manipulá-lo, inicializando 'autenticado' com 'true'.
    const [autenticado, setAutenticado] = useState(true);

    // Define uma função 'login' que define 'autenticado' como 'true'.
    const login = () => {
        setAutenticado(true);
    };

    // Define uma função 'logout' que define 'autenticado' como 'false'.
    const logout = () => {
        setAutenticado(false);
    };

    // Retorna o provedor do contexto 'AuthContext' que encapsula os filhos passados como propriedade 'children'.
    // O valor do contexto inclui o estado 'autenticado' e as funções 'login' e 'logout'.
    return (
        <AuthContext.Provider value={{ autenticado, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
