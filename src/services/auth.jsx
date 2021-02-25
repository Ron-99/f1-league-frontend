export const TOKEN_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYjNiZDM1ZmZiZjgxNjViYTI0NzQwMSIsImVtYWlsIjoicm9uYWxkb3NnMTk5OUBvdXRsb29rLmNvbSIsIm5hbWUiOiJSb25hbGRvIEdvbWVzIiwiaWF0IjoxNTg5MTgzOTgyLCJleHAiOjE1ODkyNzAzODJ9.daQJ13WSXI9o1irZy5xMrfaiulKlVtHiKQPL2lmaeJ0";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getEmail = () => localStorage.getItem('email');
export const getId = () => localStorage.getItem('id');
export const login = data => {
    localStorage.setItem(TOKEN_KEY, data.token);
    localStorage.setItem('email', data.data.email);
    localStorage.setItem('id', data.data.id);
};
export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    window.location.reload();
};