const Manager = require('../lib/Manager');

test('Creates a manager object and returns employee info',() => {
  const manager = new Manager('John Smith', 1, 'jsmith@mail.com', 100);

  expect(manager.name).toBeUndefined();
  expect(manager.id).toBeUndefined();
  expect(manager.email).toBeUndefined();
  expect(manager.getName()).toBe('John Smith');
  expect(manager.getID()).toEqual(1);
  expect(manager.getEmail()).toBe('jsmith@mail.com');
  expect(manager.officeNumber).toEqual(100);
})

test("Updates manager role to 'Manager'",() => {
  const manager = new Manager('John Smith', 1, 'jsmith@mail.com', 100);

  expect(manager.getRole()).toBe('Manager');
})