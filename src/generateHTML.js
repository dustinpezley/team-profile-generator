const generateTeam = team => {
  const generateManager = manager => {
    return `
      <div class="card employee-card col-3 m-4 p-0 shadow">
        <div class="card-header bg-primary text-white">
          <h2 class="card-title">${manager.getName()}</h2>
          <h3 class="card-title"><i class="fa-solid fa-mug-hot"></i> ${manager.getRole()}</h3>
        </div>
        <div class="card-body mt-4 mb-4">
          <ul class="list-group">
            <li class="list-group-item">ID: ${manager.getID()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office number: ${manager.officeNumber}</li>
          </ul>
        </div>
      </div>
    `;
  };
  
  const generateEngineer = engineer => {
    return`
      <div class="card employee-card col-3 m-4 p-0 shadow">
        <div class="card-header bg-primary text-white">
          <h2 class="card-title">${engineer.getName()}</h2>
          <h3 class="card-title"><i class="fa-solid fa-glasses"></i> ${engineer.getRole()}</h3>
        </div>
        <div class="card-body mt-4 mb-4">
          <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getID()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
          </ul>
        </div>
      </div>
    `;
  };
  
  const generateIntern = intern => {
    return`
      <div class="card employee-card col-3 m-4 p-0 shadow">
        <div class="card-header bg-primary text-white">
          <h2 class="card-title">${intern.getName()}</h2>
          <h3 class="card-title"><i class="fa-solid fa-user-graduate"></i> ${intern.getRole()}</h3>
        </div>
        <div class="card-body mt-4 mb-4">
          <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getID()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
          </ul>
        </div>
      </div>
    `;
  };
  
  page =[];

  page.push(team
    .filter(employee => employee.getRole() === 'Manager')
    .map(manager => generateManager(manager))
  );
  page.push(team
    .filter(employee => employee.getRole() === 'Engineer')
    .map(engineer => generateEngineer(engineer))
    .join('')
  );
  page.push(team
    .filter(employee => employee.getRole() === 'Intern')
    .map(intern => generateIntern(intern))
    .join('')  
  );

  return page.join('');
}


generateHTML = team => {
  return`
  <!DOCTYPE html>
  <html>

    <head>
      <meta charset='utf-8'>
      <meta http-equiv='X-UA-Compatible' content='IE=edge'>
      <title>Team Profile</title>
      <meta name='viewport' content='width=device-width, initial-scale=1'>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <link rel='stylesheet' type='text/css' media='screen' href='style.css'>
    </head>

    <body>
      <header class="container-fluid">
        <div class="row">
          <div class="col-12 jumbotron bg-danger" id="jumbotron">
            <h1 class="text-center text-white mt-5 mb-5">My Team</h1>
          </div>
        </div>
      </header>
      <main class="container">
        <div class="team row col-12 justify-content-center">
          ${generateTeam(team)}
        </div>
      </main>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </body>

  </html>
  `;
};

module.exports = generateHTML;