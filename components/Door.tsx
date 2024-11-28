import DoorModel from '../model/door';
import styles from '../styles/Door.module.css';

interface DoorProps {
  value: DoorModel
}

export default function Door(props: DoorProps) {
  const door = props.value;
  const isDoorSelected = door.isSelected ? styles.selectedDoor : '';

  return (
    <div className={styles.doorArea}>
      <div className={`${styles.doorFrame} ${isDoorSelected}`}>
        <div className={styles.door}>
          <div className={styles.doorNumber}>{door.number}</div>
          <div className={styles.doorKnob}></div>
        </div>
      </div>
      <div className={styles.doorFloor}></div>
    </div>
  );
}
