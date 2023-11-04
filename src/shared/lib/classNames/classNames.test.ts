import { classNames } from './classNames';

describe('classNames', () => {
  test('with first parameter', () => {
    expect(classNames('someClass')).toBe('someClass');
  });
  test('with first and mods parameters', () => {
    expect(classNames('someClass', { hovered: true })).toBe('someClass hovered');
  });
  test('with all', () => {
    expect(classNames('someClass', { hovered: true }, ['class1', 'class2'])).toBe(
      'someClass class1 class2 hovered'
    );
  });
  test('with mods undefined', () => {
    expect(
      classNames('someClass', { hovered: true, scrolable: undefined }, ['class1', 'class2'])
    ).toBe('someClass class1 class2 hovered');
  });
  test('with one of mods false ', () => {
    expect(classNames('someClass', { hovered: true, scrolable: false }, ['class1', 'class2'])).toBe(
      'someClass class1 class2 hovered'
    );
  });
});
