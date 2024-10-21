import styles from "./PostComponent.module.css";
export default function PostComponent({title, content}){
    return (
        <div>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.content}>{content}</p>
        </div>
    );
}