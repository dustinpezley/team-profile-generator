const Employee = require('../lib/Employee');

test('Create an employee object and return name',() => {
  const employee = new Employee('John Smith', 1, 'jsmith@mail.com');

  expect(employee.name).toBeUndefined();
  expect(employee.id).toBeUndefined();
  expect(employee.email).toBeUndefined();
  expect(employee.getName()).toBe('John Smith');
})

test('Create an employee object and return id',() => {
  const employee = new Employee('John Smith', 1, 'jsmith@mail.com');

  expect(employee.name).toBeUndefined();
  expect(employee.id).toBeUndefined();
  expect(employee.email).toBeUndefined();
  expect(employee.getID()).toEqual(1);
})

test('Create an employee object and return id',() => {
  const employee = new Employee('John Smith', 1, 'jsmith@mail.com');

  expect(employee.name).toBeUndefined();
  expect(employee.id).toBeUndefined();
  expect(employee.email).toBeUndefined();
  expect(employee.getEmail()).toBe('jsmith@mail.com');
})

test('Create an employee object and return id',() => {
  const employee = new Employee('John Smith', 1, 'jsmith@mail.com');

  expect(employee.name).toBeUndefined();
  expect(employee.id).toBeUndefined();
  expect(employee.email).toBeUndefined();
  expect(employee.getRole()).toBe('Employee');
})