import { ref } from 'vue';

const TOKEN_TTL = 36000000; // Tiempo de vida del token en milisegundos (ejemplo: 1 hora)

const getInitialAuthToken = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const token = localStorage.getItem('authToken');
        const tokenTimestamp = localStorage.getItem('authTokenTimestamp');
        if (token && tokenTimestamp) {
            const now = Date.now();
            if (now - parseInt(tokenTimestamp, 10) < TOKEN_TTL) {
                return token;
            }
        }
    }
    return null;
};

const authToken = ref(getInitialAuthToken());

const setAuthToken = (token) => {
    authToken.value = token;
    if (typeof window !== 'undefined' && window.localStorage) {
        const now = Date.now();
        localStorage.setItem('authToken', token);
        localStorage.setItem('authTokenTimestamp', now.toString());
    }
};

const clearAuthToken = () => {
    authToken.value = null;
    if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.removeItem('authToken');
        localStorage.removeItem('authTokenTimestamp');
    }
};

const checkAuthTokenExpiry = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const tokenTimestamp = localStorage.getItem('authTokenTimestamp');
        if (tokenTimestamp) {
            const now = Date.now();
            if (now - parseInt(tokenTimestamp, 10) >= TOKEN_TTL) {
                clearAuthToken();
            }
        }
    }
};

export { authToken, setAuthToken, clearAuthToken, checkAuthTokenExpiry };
