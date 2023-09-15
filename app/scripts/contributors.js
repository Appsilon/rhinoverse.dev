const avatar = (imgUrl, profileUrl, credit) => {
  return '<div class="tooltip">' +
           `<span class="tooltiptext">${credit}</span>` +
           `<a href="https://${profileUrl}" target="_blank"><img src="https://avatars.githubusercontent.com/u/${imgUrl}" /></a>` +
         '</div>'
}

export const addContributors = () => {

  const credits = {
    'shiny.semantic': [
      {'img': '4673386', 'profile': 'github.com/filipstachura', 'credit': 'Author'},
      {'img': '4669074', 'profile': 'github.com/przytu1', 'credit': 'Author'},
      {'img': '47003650', 'profile': 'github.com/jchojna', 'credit': 'Author'},
      {'img': '4321346', 'profile': 'github.com/olgamie', 'credit': 'Author'},
      {'img': '4547289', 'profile': 'github.com/dokato', 'credit': 'Author'},
      {'img': '20457043', 'profile': 'github.com/krystian8207', 'credit': 'Author'},
      {'img': '24652240', 'profile': 'appsilon.github.io/shiny.semantic/authors.html', 'credit': 'More Contributors'}
    ],
    'semantic.dashboard': [
      {'img': '4673386', 'profile': 'github.com/filipstachura', 'credit': 'Author'},
      {'img': '4547289', 'profile': 'github.com/dokato', 'credit': 'Author'},
      {'img': '20457043', 'profile': 'github.com/krystian8207', 'credit': 'Author'},
      {'img': '24652240', 'profile': 'appsilon.github.io/semantic.dashboard/authors.html', 'credit': 'More Contributors'}
    ],
    'shiny.worker': [
      {'img': '4669074', 'profile': 'github.com/przytu1', 'credit': 'Author'},
      {'img': '24652240', 'profile': 'appsilon.github.io/shiny.worker/authors.html', 'credit': 'More Contributors'}
    ],
    'shiny.info': [
      {'img': '7279715', 'profile': 'github.com/jakubnowicki', 'credit': 'Author & Maintainer'},
      {'img': '4669074', 'profile': 'github.com/przytu1', 'credit': 'Author'},
      {'img': '4547289', 'profile': 'github.com/dokato', 'credit': 'Author'}
    ],
    'shiny.router': [
      {'img': '83692505', 'profile': 'rgithub.com/szymanski', 'credit': 'Author & Maintainer'},
      {'img': '7279715', 'profile': 'github.com/jakubnowicki', 'credit': 'Author'},
      {'img': '4673386', 'profile': 'github.com/filipstachura', 'credit': 'Author'},
      {'img': '4547289', 'profile': 'github.com/dokato', 'credit': 'Author'},
      {'img': '20457043', 'profile': 'github.com/krystian8207', 'credit': 'Author'},
      {'img': '24652240', 'profile': 'appsilon.github.io/shiny.router/authors.html', 'credit': 'More Contributors'}
    ],
    'shiny.i18n': [
      {'img': '7279715', 'profile': 'github.com/jakubnowicki', 'credit': 'Author & Maintainer'},
      {'img': '37193264', 'profile': 'github.com/jakubsob', 'credit': 'Author'},
      {'img': '4547289', 'profile': 'github.com/dokato', 'credit': 'Author'},
      {'img': '20457043', 'profile': 'github.com/krystian8207', 'credit': 'Author'}
    ],
    'shiny.react': [
      {'img': '10000651', 'profile': 'github.com/kamilzyla', 'credit': 'Author & Maintainer'},
      {'img': '37193264', 'profile': 'github.com/jakubsob', 'credit': 'Author'},
      {'img': '1421503', 'profile': 'github.com/marekrogala', 'credit': 'Author'}
    ],
    'shiny.fluent': [
      {'img': '10000651', 'profile': 'github.com/kamilzyla', 'credit': 'Author & Maintainer'},
      {'img': '37193264', 'profile': 'github.com/jakubsob', 'credit': 'Author'},
      {'img': '1421503', 'profile': 'github.com/marekrogala', 'credit': 'Author'}
    ],
    'data.validator': [
      {'img': '19154385', 'profile': 'github.com/mdubel', 'credit': 'Author & Maintainer'},
      {'img': '4669074', 'profile': 'github.com/przytu1', 'credit': 'Author'},
      {'img': '7279715', 'profile': 'github.com/jakubnowicki', 'credit': 'Author'},
      {'img': '20457043', 'profile': 'github.com/krystian8207', 'credit': 'Author'},
      {'img': '24652240', 'profile': 'appsilon.github.io/data.validator/authors.html', 'credit': 'More Contributors'}
    ],
    'rhino': [
      {'img': '10000651', 'profile': 'github.com/kamilzyla', 'credit': 'Author & Maintainer'},
      {'img': '7279715', 'profile': 'github.com/jakubnowicki', 'credit': 'Author'},
      {'img': '32634801', 'profile': 'github.com/Leszek-Sieminski', 'credit': 'Author'},
      {'img': '1421503', 'profile': 'github.com/marekrogala', 'credit': 'Author'},
      {'img': '110383037', 'profile': 'github.com/vibalre', 'credit': 'Author'},
      {'img': '38053499', 'profile': 'github.com/TymekDev', 'credit': 'Author'},
      {'img': '24652240', 'profile': 'appsilon.github.io/rhino/authors.html', 'credit': 'More Contributors'}
    ],
    'shiny.benchmark': [
      {'img': '13513569', 'profile': 'github.com/DouglasMesquita', 'credit': 'Author & Maintainer'}
    ],
    'shiny.blueprint': [
      {'img': '10000651', 'profile': 'github.com/kamilzyla', 'credit': 'Author & Maintainer'},
      {'img': '4673386', 'profile': 'github.com/filipstachura', 'credit': 'Author'},
      {'img': '54677165', 'profile': 'github.com/filipakkad', 'credit': 'Author'},
      {'img': '81753658', 'profile': 'github.com/pawelchabros', 'credit': 'Author'}
    ],
    'shiny.telemetry': [
      {'img': '211358', 'profile': 'github.com/averissimo', 'credit': 'Author & Maintainer'},
      {'img': '10000651', 'profile': 'github.com/kamilzyla', 'credit': 'Author'},
      {'img': '110383037', 'profile': 'github.com/vibalre', 'credit': 'Author'},
      {'img': '20457043', 'profile': 'github.com/krystian8207', 'credit': 'Author'}
    ],
    'shiny.emptystate': [
      {'img': '83692505', 'profile': 'github.com/rszymanski', 'credit': 'Author & Maintainer'},
      {'img': '110383037', 'profile': 'github.com/vibalre', 'credit': 'Author'},
      {'img': '24652240', 'profile': 'appsilon.github.io/shiny.emptystate/authors.html', 'credit': 'More Contributors'}
    ]
  };

  Object.keys(credits).forEach(tool => {
    const repoId = tool.replace('.', '-');
    const contributorsDiv = document.querySelector(`.contributors--${repoId}`);
    credits[tool].forEach(credit => {
      contributorsDiv.innerHTML += avatar(credit['img'], credit['profile'], credit['credit'])
    })
  });
}
