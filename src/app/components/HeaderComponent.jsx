import Link from "next/link";
import styles from "./HeaderComponent.module.css";

export default function HeaderComponent(){
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Blog</h1>
            <div className={styles.container}>
                <Link href="/" className={styles.redirects}>Home</Link>
                <Link href="/about" className={styles.redirects}>About</Link>
                <Link href="/contact" className={styles.redirects}>Contact</Link>
            </div>
        </header>
    );    
}