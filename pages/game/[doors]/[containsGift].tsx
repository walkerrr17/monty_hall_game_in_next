import styles from "../../../styles/Game.module.css";
import Door from '../../../components/Door';
import { useEffect, useState } from 'react';
import { createDoorsArray, updateDoors } from '../../../functions/doors';
import Link from "next/link";
import { useRouter } from "next/router";

export default function GamePage() {
  const router = useRouter();
  const [doorsArray, setDoorsArray] = useState([]);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const quantityOfDoors = +router.query.doors;
    const doorThatContainsGift = +router.query.containsGift;

    const validQuantityOfDoors = quantityOfDoors >= 3 && quantityOfDoors <= 100;
    const validGiftedDoor = doorThatContainsGift >= 1 && doorThatContainsGift <= quantityOfDoors;

    setIsValid(validQuantityOfDoors && validGiftedDoor)

  }, [doorsArray])

  useEffect(() => {
    const quantityOfDoors = +router.query.doors;
    const doorThatContainsGift = +router.query.containsGift;

    setDoorsArray(createDoorsArray(quantityOfDoors, doorThatContainsGift));
  }, [router?.query])

  const renderDoorsArray = () => {
    return doorsArray.map(door => {
      return <Door key={door.number} value={door} 
      onChange={newDoor => setDoorsArray(updateDoors(doorsArray, newDoor))} />
    });
  }

  return (
    <div id={styles.game}>
      <div className={styles.doors}>
        {
          isValid ? 
          renderDoorsArray() :
          <h1>Invalid Values</h1>
        }
      </div>
      <div className={styles.buttons}>
        <Link href="/"><button>Restart Game</button></Link>
      </div>
    </div>
  );
}