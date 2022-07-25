import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchUserId } from "../../store/userSlice";
import { useDispatch, useSelector } from "react-redux";

import Header from "../../components/Header";
import StatisticSection from "../../components/StatisticSection";

import styles from './user.module.scss';

const userAvatar = 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80';
const bg = 'https://t4.ftcdn.net/jpg/04/04/40/49/360_F_404404954_WGYZtTwswIrXnJl6qVeEFK5UWPFflVB8.jpg'

function UserPage() {
    const dispatch = useDispatch();
    const {id} = useParams();
    const user = useSelector(state => state.users.user);
    
    useEffect(() => {
        dispatch(fetchUserId(id));
    }, [dispatch, id])

    return (
        <div className={styles.user}>
            <Header />
            <StatisticSection />
            {user && <div className={styles.user_info}>
                <div className={styles.header} style={{backgroundImage: `url(${bg})`}}>
                    <img src={userAvatar} alt="user" />
                </div>
                <div className={styles.body}>
                    <div className={styles.title}>
                        <p className={styles.name}>{user.name}</p>
                        <p className={styles.company}>{user.company.catchPhrase}</p>
                    </div>
                    <div className={styles.info}>
                        <div>
                            <p className={styles.info_title}>Address</p>
                            <p>{user.address.street}, {user.address.suite},</p>
                            <p>{user.address.city}, {user.address.zipcode}</p>
                        </div>
                        <div>
                            <p className={styles.info_title}>Phone</p>
                            <p>{user.phone}</p>
                        </div>
                        <div>
                            <p className={styles.info_title}>Website</p>
                            <a href={user.website}>{user.website}</a>
                        </div>
                    </div>
                </div>
            </div>}
            
        </div>
    );
}

export default UserPage;