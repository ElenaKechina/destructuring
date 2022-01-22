import specialAttackСorrectDescription from '../app';

describe('orderByProps function:', () => {
  test('should return array sort', () => {
    const character = {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
      special: [
        {
          id: 8,
          name: 'Двойной выстрел',
          icon: 'http://...',
          description: 'Двойной выстрел наносит двойной урон',
        },
        {
          id: 9,
          name: 'Нокаутирующий удар',
          icon: 'http://...',
          // <- обратите внимание, описание "засекречено"
        },
      ],
    };

    let result = [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        description: 'Описание недоступно',
      },
    ];

    expect(specialAttackСorrectDescription(character)).toEqual(result);
    character.special = [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        // <- обратите внимание, описание "засекречено"
      },
      {
        id: 10,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        // <- обратите внимание, описание "засекречено"
      },
      {
        id: 11,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        // <- обратите внимание, описание "засекречено"
      },
      {
        id: 12,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
    ];

    result = [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        description: 'Описание недоступно',
      },
      {
        id: 10,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        description: 'Описание недоступно',
      },
      {
        id: 11,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        description: 'Описание недоступно',
      },
      {
        id: 12,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
    ];
  });
});
