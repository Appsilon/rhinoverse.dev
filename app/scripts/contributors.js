const avatar = (imgUrl, profileUrl, credit) => {
  return '<div class="tooltip">' +
           `<span class="tooltiptext">${credit}</span>` +
           `<a href="${profileUrl}" target="_blank"><img src="https://avatars.githubusercontent.com/u/${imgUrl}" /></a>` +
         '</div>'
}

export const addContributors = () => {

  const credits = {
    'shiny.semantic': [
      {'img': '4673386', 'profile': 'https://github.com/filipstachura', 'credit': 'Author'},
      {'img': '4669074', 'profile': 'https://github.com/przytu1', 'credit': 'Author'},
      {'img': '47003650', 'profile': 'https://github.com/jchojna', 'credit': 'Author'},
      {'img': '4321346', 'profile': 'https://github.com/olgamie', 'credit': 'Author'},
      {'img': '4547289', 'profile': 'https://github.com/dokato', 'credit': 'Author'},
      {'img': '20457043', 'profile': 'https://github.com/krystian8207', 'credit': 'Author'},
      {'img': '24652240', 'profile': 'https://appsilon.github.io/shiny.semantic/authors.html', 'credit': 'More Contributors'}
    ],
    'semantic.dashboard': [
      {'img': '4673386', 'profile': 'https://github.com/filipstachura', 'credit': 'Author'},
      {'img': '4547289', 'profile': 'https://github.com/dokato', 'credit': 'Author'},
      {'img': '20457043', 'profile': 'https://github.com/krystian8207', 'credit': 'Author'},
      {'img': '24652240', 'profile': 'https://appsilon.github.io/semantic.dashboard/authors.html', 'credit': 'More Contributors'}
    ],
    'shiny.worker': [
      {'img': '4669074', 'profile': 'https://github.com/przytu1', 'credit': 'Author'},
      {'img': '24652240', 'profile': 'https://appsilon.github.io/shiny.worker/authors.html', 'credit': 'More Contributors'}
    ],
    'shiny.info': [
      {'img': '7279715', 'profile': 'https://github.com/jakubnowicki', 'credit': 'Author & Maintainer'},
      {'img': '4669074', 'profile': 'https://github.com/przytu1', 'credit': 'Author'},
      {'img': '4547289', 'profile': 'https://github.com/dokato', 'credit': 'Author'}
    ],
    'shiny.router': [
      {'img': '83692505', 'profile': 'rhttps://github.com/szymanski', 'credit': 'Author & Maintainer'},
      {'img': '7279715', 'profile': 'https://github.com/jakubnowicki', 'credit': 'Author'},
      {'img': '4673386', 'profile': 'https://github.com/filipstachura', 'credit': 'Author'},
      {'img': '4547289', 'profile': 'https://github.com/dokato', 'credit': 'Author'},
      {'img': '20457043', 'profile': 'https://github.com/krystian8207', 'credit': 'Author'},
      {'img': '24652240', 'profile': 'https://appsilon.github.io/shiny.router/authors.html', 'credit': 'More Contributors'}
    ],
    'shiny.i18n': [
      {'img': '7279715', 'profile': 'https://github.com/jakubnowicki', 'credit': 'Author & Maintainer'},
      {'img': '37193264', 'profile': 'https://github.com/jakubsob', 'credit': 'Author'},
      {'img': '4547289', 'profile': 'https://github.com/dokato', 'credit': 'Author'},
      {'img': '20457043', 'profile': 'https://github.com/krystian8207', 'credit': 'Author'}
    ],
    'shiny.react': [
      {'img': '10000651', 'profile': 'https://github.com/kamilzyla', 'credit': 'Author & Maintainer'},
      {'img': '37193264', 'profile': 'https://github.com/jakubsob', 'credit': 'Author'},
      {'img': '1421503', 'profile': 'https://github.com/marekrogala', 'credit': 'Author'}
    ],
    'shiny.fluent': [
      {'img': '10000651', 'profile': 'https://github.com/kamilzyla', 'credit': 'Author & Maintainer'},
      {'img': '37193264', 'profile': 'https://github.com/jakubsob', 'credit': 'Author'},
      {'img': '1421503', 'profile': 'https://github.com/marekrogala', 'credit': 'Author'}
    ],
    'data.validator': [
      {'img': '19154385', 'profile': 'https://github.com/mdubel', 'credit': 'Author & Maintainer'},
      {'img': '4669074', 'profile': 'https://github.com/przytu1', 'credit': 'Author'},
      {'img': '7279715', 'profile': 'https://github.com/jakubnowicki', 'credit': 'Author'},
      {'img': '20457043', 'profile': 'https://github.com/krystian8207', 'credit': 'Author'},
      {'img': '24652240', 'profile': 'https://appsilon.github.io/data.validator/authors.html', 'credit': 'More Contributors'}
    ],
    'rhino': [
      {'img': '10000651', 'profile': 'https://github.com/kamilzyla', 'credit': 'Author & Maintainer'},
      {'img': '7279715', 'profile': 'https://github.com/jakubnowicki', 'credit': 'Author'},
      {'img': '32634801', 'profile': 'https://github.com/Leszek-Sieminski', 'credit': 'Author'},
      {'img': '1421503', 'profile': 'https://github.com/marekrogala', 'credit': 'Author'},
      {'img': '110383037', 'profile': 'https://github.com/vibalre', 'credit': 'Author'},
      {'img': '38053499', 'profile': 'https://github.com/TymekDev', 'credit': 'Author'},
      {'img': '24652240', 'profile': 'https://appsilon.github.io/rhino/authors.html', 'credit': 'More Contributors'}
    ],
    'shiny.benchmark': [
      {'img': '13513569', 'profile': 'https://github.com/DouglasMesquita', 'credit': 'Author & Maintainer'}
    ],
    'shiny.blueprint': [
      {'img': '10000651', 'profile': 'https://github.com/kamilzyla', 'credit': 'Author & Maintainer'},
      {'img': '4673386', 'profile': 'https://github.com/filipstachura', 'credit': 'Author'},
      {'img': '54677165', 'profile': 'https://github.com/filipakkad', 'credit': 'Author'},
      {'img': '81753658', 'profile': 'https://github.com/pawelchabros', 'credit': 'Author'}
    ],
    'shiny.telemetry': [
      {'img': '211358', 'profile': 'https://github.com/averissimo', 'credit': 'Author & Maintainer'},
      {'img': '10000651', 'profile': 'https://github.com/kamilzyla', 'credit': 'Author'},
      {'img': '110383037', 'profile': 'https://github.com/vibalre', 'credit': 'Author'},
      {'img': '20457043', 'profile': 'https://github.com/krystian8207', 'credit': 'Author'}
    ],
    'shiny.emptystate': [
      {'img': '83692505', 'profile': 'https://github.com/rszymanski', 'credit': 'Author & Maintainer'},
      {'img': '110383037', 'profile': 'https://github.com/vibalre', 'credit': 'Author'},
      {'img': '24652240', 'profile': 'https://appsilon.github.io/shiny.emptystate/authors.html', 'credit': 'More Contributors'}
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
