import DoorModel from "../model/door";

export function createDoorsArray(quantity: number, giftedDoor: number): DoorModel[] {
  return Array.from({ length: quantity }, (_, index) => {
    const doorNumber = index + 1;
    const containsGift = doorNumber === giftedDoor;

    return new DoorModel(doorNumber, containsGift);
  })
}

export function updateDoors(doorsArray: DoorModel[], modifiedDoor: DoorModel): DoorModel[] {
  return doorsArray.map(currentDoor => {
    const sameAsModifiedDoor = currentDoor.number === modifiedDoor.number;

    if(sameAsModifiedDoor) {
      return modifiedDoor;
    } else {
      return modifiedDoor.isOpened ? currentDoor : currentDoor.deselectDoor();
    }
  })
}