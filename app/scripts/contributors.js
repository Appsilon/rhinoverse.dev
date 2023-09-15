const avatar = (imgUrl, profileUrl, credit) => {
  return '<div class="tooltip">' +
           `<span class="tooltiptext">${credit}</span>` +
           `<a href="https://github.com/${profileUrl}" target="_blank"><img src="https://avatars.githubusercontent.com/u/${imgUrl}" /></a>` +
         '</div>'
}

export const addContributors = () => {

  const credits = {
    'shiny.semantic': [
      {'img': '4673386', 'profile': 'filipstachura', 'credit': 'Author'},
      {'img': '4669074', 'profile': 'przytu1', 'credit': 'Author'},
      {'img': '47003650', 'profile': 'jchojna', 'credit': 'Author'},
      {'img': '4321346', 'profile': 'olgamie', 'credit': 'Author'},
      {'img': '4547289', 'profile': 'dokato', 'credit': 'Author'},
      {'img': '20457043', 'profile': 'krystian8207', 'credit': 'Author'},
      {'img': '24652240', 'profile': 'Appsilon/shiny.semantic/graphs/contributors', 'credit': 'More Contributors'}
    ],
    'semantic.dashboard': [
      {'img': '4673386', 'profile': 'filipstachura', 'credit': 'Author'},
      {'img': '4547289', 'profile': 'dokato', 'credit': 'Author'},
      {'img': '20457043', 'profile': 'krystian8207', 'credit': 'Author'},
      {'img': '24652240', 'profile': 'Appsilon/semantic.dashboard/graphs/contributors', 'credit': 'More Contributors'}
    ],
    'shiny.worker': [
      {'img': '4669074', 'profile': 'przytu1', 'credit': 'Author'},
      {'img': '24652240', 'profile': 'Appsilon/shiny.worker/graphs/contributors', 'credit': 'More Contributors'}
    ],
    'shiny.info': [
      {'img': '7279715', 'profile': 'jakubnowicki', 'credit': 'Author & Maintainer'},
      {'img': '4669074', 'profile': 'przytu1', 'credit': 'Author'},
      {'img': '4547289', 'profile': 'dokato', 'credit': 'Author'}
    ],
    'shiny.router': [
      {'img': '83692505', 'profile': 'rszymanski', 'credit': 'Author & Maintainer'},
      {'img': '7279715', 'profile': 'jakubnowicki', 'credit': 'Author'},
      {'img': '4673386', 'profile': 'filipstachura', 'credit': 'Author'},
      {'img': '4547289', 'profile': 'dokato', 'credit': 'Author'},
      {'img': '20457043', 'profile': 'krystian8207', 'credit': 'Author'},
      {'img': '24652240', 'profile': 'Appsilon/shiny.router/graphs/contributors', 'credit': 'More Contributors'}
    ],
    'shiny.i18n': [
      {'img': '7279715', 'profile': 'jakubnowicki', 'credit': 'Author & Maintainer'},
      {'img': '37193264', 'profile': 'jakubsob', 'credit': 'Author'},
      {'img': '4547289', 'profile': 'dokato', 'credit': 'Author'},
      {'img': '20457043', 'profile': 'krystian8207', 'credit': 'Author'}
    ],
    'shiny.react': [
      {'img': '10000651', 'profile': 'kamilzyla', 'credit': 'Author & Maintainer'},
      {'img': '37193264', 'profile': 'jakubsob', 'credit': 'Author'},
      {'img': '1421503', 'profile': 'marekrogala', 'credit': 'Author'}
    ],
    'shiny.fluent': [
      {'img': '10000651', 'profile': 'kamilzyla', 'credit': 'Author & Maintainer'},
      {'img': '37193264', 'profile': 'jakubsob', 'credit': 'Author'},
      {'img': '1421503', 'profile': 'marekrogala', 'credit': 'Author'}
    ],
    'data.validator': [
      {'img': '19154385', 'profile': 'mdubel', 'credit': 'Author & Maintainer'},
      {'img': '4669074', 'profile': 'przytu1', 'credit': 'Author'},
      {'img': '7279715', 'profile': 'jakubnowicki', 'credit': 'Author'},
      {'img': '20457043', 'profile': 'krystian8207', 'credit': 'Author'},
      {'img': '24652240', 'profile': 'Appsilon/data.validator/graphs/contributors', 'credit': 'More Contributors'}
    ],
    'rhino': [
      {'img': '10000651', 'profile': 'kamilzyla', 'credit': 'Author & Maintainer'},
      {'img': '7279715', 'profile': 'jakubnowicki', 'credit': 'Author'},
      {'img': '32634801', 'profile': 'Leszek-Sieminski', 'credit': 'Author'},
      {'img': '1421503', 'profile': 'marekrogala', 'credit': 'Author'},
      {'img': '110383037', 'profile': 'vibalre', 'credit': 'Author'},
      {'img': '103684742', 'profile': 'tmakowski', 'credit': 'Author'},
      {'img': '24652240', 'profile': 'Appsilon/rhino/graphs/contributors', 'credit': 'More Contributors'}
    ],
    'shiny.benchmark': [
      {'img': '13513569', 'profile': 'DouglasMesquita', 'credit': 'Author & Maintainer'}
    ],
    'shiny.blueprint': [
      {'img': '10000651', 'profile': 'kamilzyla', 'credit': 'Author & Maintainer'},
      {'img': '54677165', 'profile': 'filipakkad', 'credit': 'Author'},
      {'img': '4673386', 'profile': 'filipstachura', 'credit': 'Author'},
      {'img': '81753658', 'profile': 'pawelchabros', 'credit': 'Author'}
    ],
    'shiny.telemetry': [
      {'img': '211358', 'profile': 'averissimo', 'credit': 'Author & Maintainer'},
      {'img': '10000651', 'profile': 'kamilzyla', 'credit': 'Author'},
      {'img': '20457043', 'profile': 'krystian8207', 'credit': 'Author'},
      {'img': '110383037', 'profile': 'vibalre', 'credit': 'Author'}
    ],
    'shiny.emptystate': [
      {'img': '83692505', 'profile': 'rszymanski', 'credit': 'Author & Maintainer'},
      {'img': '110383037', 'profile': 'vibalre', 'credit': 'Author'},
      {'img': '24652240', 'profile': 'Appsilon/shiny.emptystate/graphs/contributors', 'credit': 'More Contributors'}
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
