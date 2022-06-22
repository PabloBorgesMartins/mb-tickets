import React from "react";

import { useAuth } from '../hooks/auth'
import AppRoutes from './AppRoutes';
import AuthRoutes from "./AuthRoutes";

const Routes: React.FC = () => {
    const { user } = useAuth();

    return user ? <AppRoutes /> : <AuthRoutes />
}

export default Routes;