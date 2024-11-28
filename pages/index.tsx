import DoorModel from '../model/door';
import Door from '../components/Door';
import { useState } from 'react';

export default function Home() {
  const [doorOne, setDoorOne] = useState(new DoorModel(1));

  return (
    <div style={{ display: 'flex' }}>
      <Door value={doorOne} />
    </div>
  );
}
