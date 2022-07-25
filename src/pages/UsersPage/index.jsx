import { useEffect } from "react";
import { fetchUsers } from "../../store/userSlice";
import { useDispatch } from "react-redux";

import AllUsersSection from "./components/AllUsersSection";
import Header from "../../components/Header";
import StatisticSection from "../../components/StatisticSection";
import Tasks from "./components/Tasks";
import Tickets from "./components/Tickets";

import styles from './users.module.scss';

function UsersPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <div className={styles.users}>
        <Header />
        <StatisticSection />
        <AllUsersSection />
        <div className={styles.users_footer}>
            <Tickets />
            <Tasks />
        </div>
    </div>
  );
}

export default UsersPage;