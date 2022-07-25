import { Outlet } from "react-router-dom";

import Sidebar from '../Sidebar';

import styles from './layout.module.scss';

function Layout() {
    return (
        <div className={styles.page}>
            <Sidebar />
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;