import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './all-users.module.scss';

const userAvatar = 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80';


function AllUsersSection() {

    const users = useSelector(state => state.users.users);
    const {status, error} = useSelector(state => state.users);

    return (
        <div className={`${styles.users} grid-item`}>
            <div className={styles.users_header}>
                <h3>All users</h3>
                <div className={styles.sort_box}>
                    <button>
                        <i className="icon-sort"></i>
                    </button>
                    <span>Sort</span>
                </div>
            </div>
            {error && <h2>{error}</h2>}
            <div className={styles.users_table}>
                <table>
                    <thead>
                        <tr>
                            <th>User details</th>
                            <th>Company name</th>
                            <th>Email</th>
                            <th>Distance</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {status === 'loading' && <tr><td colSpan={5}>Loading...</td></tr> }
                        {users.map((user) => (
                        <tr key={user.id}>
                            <td>
                                <Link to={`/users/${user.id}`}>
                                    <div className={styles.user_info}>
                                        <img src={userAvatar} alt="user" />
                                        <div>
                                            <p>{user.name}</p>
                                            <p className={styles.sub_text}>{user.address.city}</p>
                                        </div>
                                    </div>
                                </Link>
                            </td>
                            <td>
                                <p>{user.company.name}</p>
                                <p className={styles.sub_text}>{user.company.bs}</p>
                            </td>
                            <td>
                                <p>{user.email}</p>
                                <p className={styles.sub_text}>{user.website}</p>
                            </td>
                            <td>
                                <div className={`${styles.distance} ${styles.normal}`}>
                                    Normal
                                </div>
                            </td>
                            <td>
                                <button>
                                    <i className="icon-dot-menu"></i>
                                </button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AllUsersSection;