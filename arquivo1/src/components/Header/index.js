import styles from "./Header.module.css"

function Header() {
    return (
        <header className={styles.header}>
            <span>João Henrique</span>
            <nav>
                <a href="#home">Home</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    )
}

export default Header;