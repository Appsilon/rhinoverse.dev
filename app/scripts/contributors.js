const avatar = (imgUrl, profileUrl, credit) => {
  return '<div class="tooltip">' +
           `<span class="tooltiptext">${credit}</span>` +
           `<a href="https://github.com/${profileUrl}" target="_blank"><img src="https://avatars.githubusercontent.com/u/${imgUrl}" /></a>` +
         '</div>'
}

export const addContributors = () => {

  const credits = {
    'shiny.semantic': [
      {'img': '4673386', 'profile': 'filipstachura', 'credit': 'Creator'},
      {'img': '4547289', 'profile': 'dokato', 'credit': 'Contributor'},
      {'img': '20457043', 'profile': 'krystian8207', 'credit': 'Contributor'},
      {'img': '4321346', 'profile': 'olgamie', 'credit': 'Contributor'},
      {'img': '8420419', 'profile': 'ashbaldry', 'credit': 'Contributor'},
      {'img': '47003650', 'profile': 'jchojna', 'credit': 'Contributor'},
      {'img': '24652240', 'profile': 'Appsilon/shiny.semantic/graphs/contributors', 'credit': 'More Contributors'}
    ],
    'semantic.dashboard': [
      {'img': '4673386', 'profile': 'filipstachura', 'credit': 'Creator'},
      {'img': '4547289', 'profile': 'dokato', 'credit': 'Contributor'},
      {'img': '26330688', 'profile': 'drzamich', 'credit': 'Contributor'},
      {'img': '20457043', 'profile': 'krystian8207', 'credit': 'Contributor'},
      {'img': '11685462', 'profile': 'maju116', 'credit': 'Contributor'},
      {'img': '4296390', 'profile': 'galachad', 'credit': 'Contributor'},
      {'img': '24652240', 'profile': 'Appsilon/semantic.dashboard/graphs/contributors', 'credit': 'More Contributors'}
    ],
    'shiny.worker': [
      {'img': '4669074', 'profile': 'przytu1', 'credit': 'Creator'},
      {'img': '4547289', 'profile': 'dokato', 'credit': 'Creator'}
    ],
    'shiny.info': [
      {'img': '7279715', 'profile': 'jakubnowicki', 'credit': 'Creator & Maintainer'},
      {'img': '4669074', 'profile': 'przytu1', 'credit': 'Creator'},
      {'img': '4547289', 'profile': 'dokato', 'credit': 'Contributor'},
      {'img': '19154385', 'profile': 'mdubel', 'credit': 'Contributor'},
      {'img': '15175871', 'profile': 'rabiibouhestine', 'credit': 'Contributor'},
      {'img': '43342554', 'profile': 'FractalPolarity', 'credit': 'Contributor'}
    ],
    'shiny.router': [
      {'img': '4673386', 'profile': 'filipstachura', 'credit': 'Creator'},
      {'img': '4547289', 'profile': 'dokato', 'credit': 'Contributor'},
      {'img': '20457043', 'profile': 'krystian8207', 'credit': 'Contributor'},
      {'img': '3685123', 'profile': 'rstammer', 'credit': 'Contributor'},
      {'img': '4090570', 'profile': 'KrzysztofWrobel', 'credit': 'Contributor'},
      {'img': '265127', 'profile': 'agwells', 'credit': 'Contributor'},
      {'img': '24652240', 'profile': 'Appsilon/shiny.router/graphs/contributors', 'credit': 'More Contributors'}
    ],
    'shiny.i18n': [
      {'img': '4547289', 'profile': 'dokato', 'credit': 'Creator'},
      {'img': '37193264', 'profile': 'jakubsob', 'credit': 'Maintainer'},
      {'img': '20457043', 'profile': 'krystian8207', 'credit': 'Contributor'},
      {'img': '13157213', 'profile': 'krzyslom', 'credit': 'Contributor'},
      {'img': '24652240', 'profile': 'Appsilon/shiny.i18n/graphs/contributors', 'credit': 'More Contributors'}
    ],
    'shiny.react': [
      {'img': '10000651', 'profile': 'kamilzyla', 'credit': 'Creator & Maintainer'},
      {'img': '1421503', 'profile': 'marekrogala', 'credit': 'Creator'},
      {'img': '37193264', 'profile': 'jakubsob', 'credit': 'Maintainer'},
      {'img': '4547289', 'profile': 'dokato', 'credit': 'Contributor'}
    ],
    'shiny.fluent': [
      {'img': '10000651', 'profile': 'kamilzyla', 'credit': 'Creator & Maintainer'},
      {'img': '1421503', 'profile': 'marekrogala', 'credit': 'Creator'},
      {'img': '37193264', 'profile': 'jakubsob', 'credit': 'Maintainer'},
      {'img': '4673386', 'profile': 'filipstachura', 'credit': 'Contributor'},
      {'img': '4547289', 'profile': 'dokato', 'credit': 'Contributor'},
      {'img': '32652297', 'profile': 'jimbrig', 'credit': 'Contributor'}
    ],
    'data.validator': [
      {'img': '20457043', 'profile': 'krystian8207', 'credit': 'Creator'},
      {'img': '19154385', 'profile': 'mdubel', 'credit': 'Creator & Maintainer'},
      {'img': '11685462', 'profile': 'maju116', 'credit': 'Contributor'},
      {'img': '4547289', 'profile': 'dokato', 'credit': 'Contributor'},
      {'img': '4669074', 'profile': 'przytu1', 'credit': 'Contributor'},
      {'img': '4244169', 'profile': 'FrieseWoudloper', 'credit': 'Contributor'}
    ],
    'rhino': [
      {'img': '10000651', 'profile': 'kamilzyla', 'credit': 'Creator & Maintainer'},
      {'img': '7279715', 'profile': 'jakubnowicki', 'credit': 'Contributor'},
      {'img': '38053499', 'profile': 'TymekDev', 'credit': 'Contributor'},
      {'img': '1421503', 'profile': 'marekrogala', 'credit': 'Contributor'}
    ],
    'shiny.benchmark': [
      {'img': '13513569', 'profile': 'DouglasMesquita', 'credit': 'Creator & Maintainer'},
      {'img': '7279715', 'profile': 'jakubnowicki', 'credit': 'Contributor'},
      {'img': '211358', 'profile': 'averissimo', 'credit': 'Contributor'},
      {'img': '1421503', 'profile': 'marekrogala', 'credit': 'Contributor'}
    ],
    'shiny.blueprint': [
      {'img': '10000651', 'profile': 'kamilzyla', 'credit': 'Creator & Maintainer'},
      {'img': '54677165', 'profile': 'filipakkad', 'credit': 'Contributor'},
      {'img': '4673386', 'profile': 'filipstachura', 'credit': 'Contributor'},
      {'img': '81753658', 'profile': 'pawelchabros', 'credit': 'Contributor'}
    ],
    'shiny.telemetry': [
      {'img': '10000651', 'profile': 'kamilzyla', 'credit': 'Creator & Maintainer'},
      {'img': '211358', 'profile': 'averissimo', 'credit': 'Contributor'},
      {'img': '20457043', 'profile': 'krystian8207', 'credit': 'Contributor'},
      {'img': '110383037', 'profile': 'vibalre', 'credit': 'Contributor'}
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
