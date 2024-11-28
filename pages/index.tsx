import styles from "../styles/Form.module.css";
import Card from "../components/Card";
import Link from "next/link";
import NumberInput from "../components/NumberInput";
import { useState } from "react";

export default function FormPage() {
  const [doorQuantity, setDoorQuantity] = useState(3);
  const [doorThatContainsGift, setDoorThatContainsGift] = useState(1);

  return (
    <div className={styles.form}>
      <div>
        <Card backgroundColor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <NumberInput text="Door Quantity?" value={doorQuantity} 
          onChange={newQuantityOfDoors => setDoorQuantity(newQuantityOfDoors)} />
        </Card>
      </div>
      <div>
      <Card>
        <NumberInput text="Door that has gift?" value={doorThatContainsGift} 
        onChange={newDoorThatContainsGift => setDoorThatContainsGift(newDoorThatContainsGift)} />
      </Card>
      <Card backgroundColor="#28a085">
        <Link href={`/game/${doorQuantity}/${doorThatContainsGift}`} className={styles.link}>
          <h2>Start</h2>
        </Link>
      </Card>
      </div>
    </div>
  );
}
