import React from 'react';
import { Navigate, Outlet } from 'react-router';

const Home = () => {
    return <Navigate to={'/category/0'} />
};

export default Home;