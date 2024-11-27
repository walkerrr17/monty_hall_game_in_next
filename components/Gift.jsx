import styles from '../styles/Gift.module.css';

export default function Gift() {
  return (
    <div className={styles.gift}>
      <div className={styles.giftTopHalf}></div>
      <div className={styles.giftBody}></div>
      <div className={styles.giftFirstRibbon}></div>
      <div className={styles.giftSecondRibbon}></div>
    </div>
  );
}
