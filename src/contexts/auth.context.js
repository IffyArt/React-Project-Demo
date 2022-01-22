import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    console.log(userInfo);
    login(userInfo);
  }, []);

  const login = (data) => {
    setUser(data);
    localStorage.setItem('userInfo', JSON.stringify(data)); // 若有打 API 取得 token 可存在 localStorage
  };

  const editUserInfo = (data) => {
    setUser(data);
  };
  const logout = () => {
    setUser(null);
    navigate('/login');
    localStorage.removeItem('userInfo');
  };

  return (
    <AuthContext.Provider
      value={{
        isLogin: !!user,
        user,
        login,
        editUserInfo,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
