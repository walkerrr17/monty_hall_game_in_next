import styles from "../styles/Card.module.css";

interface CardProps {
  backgroundColor?: string
  children?: any
}

export default function Card(props: CardProps) {
  return (
    <div className={styles.card} style={{
      backgroundColor: props.backgroundColor ?? "#fff"
    }}>
      {props.children}
    </div>
  )
}