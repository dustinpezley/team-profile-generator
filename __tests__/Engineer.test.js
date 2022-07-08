const Engineer = require('../lib/Engineer');

test('Creates Engineer object and returns Employee info',() => {
  const engineer = new Engineer('John Smith', 1, 'jsmith@mail.com', 'jsmith');

  expect(engineer.name).toBeUndefined();
  expect(engineer.id).toBeUndefined();
  expect(engineer.email).toBeUndefined();
  expect(engineer.getName()).toBe('John Smith');
  expect(engineer.getID()).toEqual(1);
  expect(engineer.getEmail()).toBe('jsmith@mail.com');
  expect(engineer.github).toBeUndefined();
})

test('Returns github username on method getGithub call', () => {
  const engineer = new Engineer('John Smith', 1, 'jsmith@mail.com', 'jsmith');

  expect(engineer.getGithub()).toBe('jsmith');
})

test('Returns role Engineer on method getRole call',() => {
  const engineer = new Engineer('John Smith', 1, 'jsmith@mail.com', 'jsmith');

  expect(engineer.getRole()).toBe('Engineer');
})