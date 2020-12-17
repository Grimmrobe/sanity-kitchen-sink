export default {
  widgets: [
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
                  buildHookId: '5fdb836cd56bd00a2c02a00f',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-9jinu1ow',
                  apiId: 'fa79f361-09d7-43ce-ae0d-53904845999d'
                },
                {
                  buildHookId: '5fdb836c3c6c350c0a4d1557',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-b9iz2vxj',
                  apiId: 'f66363ca-a455-4b90-9755-3566583a02b7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Grimmrobe/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-b9iz2vxj.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
