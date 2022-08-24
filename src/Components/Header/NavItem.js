import styles from './NavItem.module.css';

const NavItem = (props) => {
    return (
        <div className={styles.navItem}>{props.text}</div>
    );
};

export default NavItem;