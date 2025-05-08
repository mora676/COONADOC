// src/auth.js

export function login(email, password) {
    if (email === 'admin@cconadoc.com' && password === '123456') {
      localStorage.setItem('auth', 'true');
      return true;
    }
    return false;
  }
  
  export function logout() {
    localStorage.removeItem('auth');
  }
  
  export function checkAuth() {
    return localStorage.getItem('auth') === 'true';
  }
  
