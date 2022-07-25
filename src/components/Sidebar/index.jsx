import Logo from '../../assets/images/logo.svg';
import MenuItem from "../MenuItem";
import styles from './sidebar.module.scss';

const menuItems =[
  {
    icon: 'icon-overview',
    name: 'Overview',
    path: '/overview',
    id: '1'
  },
  {
    icon: 'icon-users',
    name: 'Users',
    path: '/users',
    id: '2'
  },
  {
    icon: 'icon-ideas',
    name: 'Ideas',
    path: '/ideas',
    id: '3'
  },
  {
    icon: 'icon-contacts',
    name: 'Contacts',
    path: '/contacts',
    id: '4'
  },
  {
    icon: 'icon-agents',
    name: 'Agents',
    path: '/agents',
    id: '5'
  },
  {
    icon: 'icon-articles',
    name: 'Articles',
    path: '/articles',
    id: '6'
  },
];

const subMenu = [
  {
    icon: 'icon-settings',
    name: 'Settings',
    path: '/settings',
    id: '1'
  },
  {
    icon: 'icon-subscription',
    name: 'Subscription',
    path: '/subscription',
    id: '2'
  },
];

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_logo}>
        <img src={Logo} alt="Logo" />
        <span>Dashboard</span>
      </div>
      <div className={styles.sidebar_nav}>
          <nav>
            <ul className={styles.nav_menu}>
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <MenuItem {...item} />
                  </li>
                ))}
            </ul>
          </nav>
          <div className={styles.sub_menu}>
            <ul>
                {subMenu.map((item) => (
                  <li key={item.id}>
                    <MenuItem {...item} />
                  </li>
                ))}
            </ul>
          </div>
      </div>
    </div>
  );
}

export default Sidebar;