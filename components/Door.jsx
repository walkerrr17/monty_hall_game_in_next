import styles from '../styles/Door.module.css';

export default function Door(props) {
  const isDoorSelected = props.selected ? styles.selectedDoor : '';

  return (
    <div className={styles.doorArea}>
      <div className={`${styles.doorFrame} ${isDoorSelected}`}>
        <div className={styles.door}>
          <div className={styles.doorNumber}>3</div>
          <div className={styles.doorKnob}></div>
        </div>
      </div>
      <div className={styles.doorFloor}></div>
    </div>
  );
}
