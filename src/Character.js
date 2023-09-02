export default class Character {
  constructor(name, type) {
    if (typeof type === 'string') {
      this.type = type;
    } else {
      throw new Error('в конструктор передано некорректное значение');
    }
    if ((typeof name === 'string') && ((name.length >= 2) && (name.length <= 10))) {
      this.name = name;
    } else {
      throw new Error('в конструктор передано некорректное значение');
    }
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health > 0) {
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.level += 1;
      this.health = 100;
    } else {
      throw new Error('нельзя повысить левел умершего');
    }
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('персонаж уже умер');
    }
  }
}
