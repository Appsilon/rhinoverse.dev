const getStarsTotal = (repos, library) => {
  
  const libs = [
    'shiny.semantic',
    'semantic.dashboard',
    'shiny.info',
    'shiny.router',
    'shiny.i18n'
  ];

  const opensourceRepos = libs.map(lib => repos.find(repo => repo.name === lib));

  opensourceRepos.forEach(repo => {
    if (repo) {
      const repoId = repo.name.replace('.', '-');
      const starsOutput = document.querySelector(`.info__stars--${repoId}`);
      starsOutput.innerHTML = repo.stargazers_count;
      
    } else {

    }
  });
}

// fetch github api
const test = fetch('https://api.github.com/orgs/Appsilon/repos')
  .then(resp => resp.json())
  .then(resp => getStarsTotal(resp));