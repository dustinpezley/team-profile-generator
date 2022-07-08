const Intern = require('../lib/Intern');

test('Creates Intern object and returns Employee info', () => {
  const intern = new Intern('John Smith', 1, 'jsmith@mail.com', 'Test University');

  expect(intern.name).toBeUndefined();
  expect(intern.id).toBeUndefined();
  expect(intern.email).toBeUndefined();
  expect(intern.getName()).toBe('John Smith');
  expect(intern.getID()).toEqual(1);
  expect(intern.getEmail()).toBe('jsmith@mail.com');
  expect(intern.school).toBeUndefined();
})

test('Returns school name on method getSchool call',() => {
  const intern = new Intern('John Smith', 1, 'jsmith@mail.com', 'Test University');

  expect(intern.getSchool()).toBe('Test University');
})

test('Returns "Intern" on method getRole call',() => {
  const intern = new Intern('John Smith', 1, 'jsmith@mail.com', 'Test University');

  expect(intern.getRole()).toBe('Intern');
})