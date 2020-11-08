export const isAuthenticated = localStorage.getItem('authenticate') === 'true' ? true : false;

export const isAdmin = localStorage.getItem('role') === 'admin' ? true : false;

export const logout = () => {console.log(isAuthenticated);localStorage.removeItem('role'); localStorage.removeItem('name'); localStorage.removeItem('email'); localStorage.setItem('authenticate', false); window.location.reload()}