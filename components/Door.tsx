import DoorModel from '../model/door';
import Gift from './Gift';
import styles from '../styles/Door.module.css';

interface DoorProps {
  value: DoorModel
  onChange: (newDoor: DoorModel) => void
}

export default function Door(props: DoorProps) {
  const door = props.value;
  const isDoorSelected = door.isSelected && !door.isOpened ? styles.selectedDoor : '';

  const switchingDoorSelection = event => props.onChange(door.switchDoorSelection());
  const openingTheDoor = event => {
    event.stopPropagation();
    props.onChange(door.openTheDoor())
  }

  const renderDoor = () => {
    return (
      <div className={styles.door}>
        <div className={styles.doorNumber}>{door.number}</div>
        <div className={styles.doorKnob} onClick={openingTheDoor}></div>
      </div>
    );
  }

  return (
    <div className={styles.doorArea} onClick={switchingDoorSelection}>
      <div className={`${styles.doorFrame} ${isDoorSelected}`}>
        {
          door.isClosed ? renderDoor() : 
          door.containsGift ? <Gift /> : false
        }
      </div>
      <div className={styles.doorFloor}></div>
    </div>
  );
}
