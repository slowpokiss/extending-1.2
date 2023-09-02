import Character from './Character';

export default class Zombie extends Character {
  constructor(name, type, attack = 40, defence = 10) {
    super(name, type);
    this.attack = attack;
    this.defence = defence;
  }
}
