export default class DoorModel {
  #number: number
  #containsGift: boolean
  #isSelected: boolean
  #isOpened: boolean

  constructor(number: number, containsGift = false, isSelected = false, isOpened = false) {
    this.#number = number;
    this.#containsGift = containsGift;
    this.#isSelected = isSelected;
    this.#isOpened = isOpened;
  }

  get number() {
    return this.#number;
  }

  get containsGift() {
    return this.#containsGift;
  }

  get isSelected() {
    return this.#isSelected;
  }

  get isOpened() {
    return this.#isOpened;
  }

  get isClosed() {
    return !this.#isOpened;
  }

  deselectDoor() {
    const selection = false;
    return new DoorModel(this.number, this.containsGift, selection, this.isOpened);
  }

  switchDoorSelection() {
    const selection = !this.isSelected;
    return new DoorModel(this.number, this.containsGift, selection, this.isOpened);
  }

  openTheDoor() {
    const open = true;
    return new DoorModel(this.number, this.containsGift, this.isSelected, open);
  }
}