import Bowman from '../src/Bowman';
import Character from '../src/Character';

test('Character for Bowman', () => {
  const result = new Bowman('bob', 'Bowman');
  expect(result).toEqual({
    name: 'bob',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('Character for Bowman without type', () => {
  const result2 = new Bowman('bob');
  expect(result2).toEqual({
    name: 'bob',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('Character without type', () => {
  expect(() => {
    Character('ken');
    Error('в конструктор передано некорректное значение');
  }).toThrow();
});

test('Character with wrong name', () => {
  expect(() => {
    Character(123, 'Bowman');
    Error('в конструктор передано некорректное значение');
  }).toThrow();
});

test('levelup for bowman', () => {
  const result3 = new Bowman('buba', 'Bowman');
  result3.levelUp();
  expect(result3).toEqual({
    type: 'Bowman',
    name: 'buba',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  });
});

test('wrong levelup for bowman', () => {
  expect(() => {
    const result4 = new Bowman('buba', 'Bowman');
    result4.health = 0;
    result4.levelUp();
    Error('нельзя повысить левел умершего');
  }).toThrow();
});

test('damage test for Bowman', () => {
  const result5 = new Bowman('buba', 'Bowman');
  result5.damage(50);
  expect(result5).toEqual({
    type: 'Bowman',
    name: 'buba',
    health: 62.5,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('wrong damage test for Bowman', () => {
  expect(() => {
    const result6 = new Bowman('buba', 'Bowman');
    result6.health = 0;
    result6.damage(20);
    Error('персонаж уже умер');
  }).toThrow();
});
