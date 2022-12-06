import { createElement } from './utils';

const shinyFluentLink = createElement(
  'info__link info__link--shiny-fluent',
  'a',
  'Shiny application projects'
);
shinyFluentLink.href = 'https://demo.appsilon.com/';

export const libraries = [
  {
    'id': 'shiny-fluent',
    'heading': 'shiny.fluent',
    'paragraphs': [
      `We believe that a great UI plays a huge role in the success of ${shinyFluentLink.outerHTML}. shiny.fluent gives your apps a beautiful and professional look, rich set of easy-to-use components in Shiny, and fast speed of development that Shiny is famous for.`,
      'As Fluent UI is built in React, shiny.fluent is based on another package called shiny.react, which allows for using React libraries in Shiny.'
    ],
    'repoLink': 'https://github.com/Appsilon/shiny.fluent',
    'demoLink': 'https://connect.appsilon.com/fluentui/',
    'docsLink': 'https://appsilon.github.io/shiny.fluent/'
  },
  {
    'id': 'shiny-semantic',
    'heading': 'shiny.semantic',
    'paragraphs': [
      'Fomantic (Semantic) UI wrapper for Shiny',
      'With this library it is easy to wrap Shiny with Fomantic (previously Semantic). Add a few simple lines of code to give your UI a fresh, modern and highly interactive look.'
    ],
    'repoLink': 'https://github.com/Appsilon/shiny.semantic',
    'demoLink': 'https://connect.appsilon.com/polluter-alert/',
    'docsLink': 'https://appsilon.github.io/shiny.semantic/'
  },
  {
    'id': 'semantic-dashboard',
    'heading': 'semantic.dashboard',
    'paragraphs': [
      'Dashboard with Semantic UI Support for Shiny',
      'Are you fed up with ordinary shinydashboard look? Give your app a new life with Semantic UI support. It cannot be any easier! Just install semantic.dashboard and load it instead to your app. Thanks to the compatibility with classical dashboard you don\'t have to start from scratch.'
    ],
    'repoLink': 'https://github.com/Appsilon/semantic.dashboard',
    'demoLink': 'https://connect.appsilon.com/Deer-Observations-Explorer/',
    'docsLink': 'https://appsilon.github.io/semantic.dashboard/'
  },
  {
    'id': 'shiny-worker',
    'heading': 'shiny.worker',
    'paragraphs': [
      '',
      'Shiny.worker allows you to delegate heavy computation tasks to a separate process, such that it does not freeze your Shiny app.'
    ],
    'repoLink': 'https://github.com/Appsilon/shiny.worker',
    'demoLink': 'https://connect.appsilon.com/shiny-worker/',
    'docsLink': 'https://appsilon.github.io/shiny.worker/'
  },
  {
    'id': 'shiny-info',
    'heading': 'shiny.info',
    'paragraphs': [
      '',
      'Display simple information of the shiny project in the user interface of the app.'
    ],
    'repoLink': 'https://github.com/Appsilon/shiny.info',
    'demoLink': 'https://connect.appsilon.com/shiny_info_demo/',
    'docsLink': 'https://appsilon.github.io/shiny.info/'
  },
  {
    'id': 'shiny-router',
    'heading': 'shiny.router',
    'paragraphs': [
      '',
      'A minimalistic router for your Shiny apps.'
    ],
    'repoLink': 'https://github.com/Appsilon/shiny.router',
    'demoLink': 'https://connect.appsilon.com/appsidex/',
    'docsLink': 'https://appsilon.github.io/shiny.router/'
  },
  {
    'id': 'shiny-i18n',
    'heading': 'shiny.i18n',
    'paragraphs': [
      'Shiny applications internationalisation made easy!',
      'Using it is very simple: just prepare your translation files in one of the supported formats, read them into your app using user-friendly shiny.i18n interface and surround your expressions to translate by a translator tag. Thanks to that your app will remain neat and readible.'
    ],
    'repoLink': 'https://github.com/Appsilon/shiny.i18n',
    'demoLink': 'https://connect.appsilon.com/i18n/',
    'docsLink': 'https://appsilon.github.io/shiny.i18n/'
  },
  {
    'id': 'shiny-react',
    'heading': 'shiny.react',
    'paragraphs': [
      '',
      'This R package enables using React in Shiny apps and is used by the shiny.fluent package. It contains R and JS code which is independent from the React library (e.g. Fluent UI) that is being wrapped.'
    ],
    'repoLink': 'https://github.com/Appsilon/shiny.react',
    'demoLink': 'https://connect.appsilon.com/fluentui/',
    'docsLink': 'https://appsilon.github.io/shiny.react/'
  },
  {
    'id': 'data-validator',
    'heading': 'data.validator',
    'paragraphs': [
      'This is a package for scalable and reproducible data validation.',
      'It provides functions for validating datasets in %>% pipelines (validate_if, validate_cols and validate_rows), predicate functions from assertr package (like in_set, within_bounds, etc.) and functions for creating user-friendly reports that you can send to email, store in logs folder, or generate automatically with RStudio Connect.'
    ],
    'repoLink': 'https://github.com/Appsilon/data.validator',
    'demoLink': 'https://connect.prod.aws.appsilon.com/connect_validation_workflow/connect_workflow.html',
    'docsLink': 'https://appsilon.github.io/data.validator/'
  },
  {
    'id': 'rhino',
    'heading': 'Rhino',
    'paragraphs': [
      'Build high quality, enterprise-grade Shiny apps at speed.',
      'Rhino allows you to create Shiny apps The Appsilon Way - like a fullstack software engineer. Apply best software engineering practices, modularize your code, test it well, make UI beautiful, and think about user adoption from the very beginning. Rhino is an opinionated framework with a focus on software engineering practices and development tools.'
    ],
    'repoLink': 'https://github.com/Appsilon/rhino/',
    'demoLink': 'https://connect.appsilon.com/source_electricity/',
    'docsLink': 'https://appsilon.github.io/rhino/'
  }
]
