import {NavLink} from "react-router-dom";

import styles from './item.module.scss';

const setActive = ({isActive}) => isActive ? `${styles.active}` : '';

function MenuItem({icon, name, path}) {
    return (
        <div className={styles.item_box}>
            <NavLink to={path} className={setActive}>
                <div className={styles.item}>
                    <div className={styles.item_icon}>
                    <i className={icon}></i>
                    </div>
                    <div className={styles.item_name}>
                        {name}
                    </div>
                </div>
            </NavLink>
        </div>
    );
}

export default MenuItem;