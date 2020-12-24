export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fe3da01a3b5c82f267dfc06',
                  title: 'Sanity Studio',
                  name: 'sanity-portfolio-studio-15qtme8r',
                  apiId: '8c757051-2d07-4657-9aac-9e9d770b86fa'
                },
                {
                  buildHookId: '5fe3da01a33d90313de2147e',
                  title: 'Portfolio Website',
                  name: 'sanity-portfolio-web-hmf4wqvv',
                  apiId: 'e5c1efbc-063d-4d7f-9991-91baf575ca9a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/selkasse/sanity-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-portfolio-web-hmf4wqvv.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
