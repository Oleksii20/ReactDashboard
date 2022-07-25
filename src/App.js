import { Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store"

import Layout from "./components/Layout";
import UserPage from './pages/UserPage';
import UsersPage from './pages/UsersPage';
import TestPage from './pages/TestPage';

import './App.scss';

function App() {
  return (
    <>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Navigate to="/overview" replace/>} />
          <Route path="users" element={<UsersPage />} />
          <Route path="users/:id" element={<UserPage />} />
          <Route path="*" element={<TestPage />} />
        </Route>
      </Routes>
    </Provider>
      
    </>
  );
}

export default App;
