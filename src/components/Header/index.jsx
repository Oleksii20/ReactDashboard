import React from "react";

import styles from './header.module.scss';

const userAvatar = 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80';

function Header() {
  return (
    <div className={styles.header}>
        <h1 className={styles.header_title}>
          Users
        </h1>
        <div className={styles.header_actions}>
          <div className={styles.left}>
            <button>
              <i className="icon-search"></i>
            </button>
            <div className={styles.notification_box}>
              <a href="/">
                  <i className="icon-notifications"></i>
              </a>
              <span></span>
            </div>
          </div>
          <div className={styles.right}>
            <span>Jones Ferdinand</span>
            <div className={styles.avatar}>
              <a href="/">
                <img src={userAvatar} alt="" />
              </a>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Header;