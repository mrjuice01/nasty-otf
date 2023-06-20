exports.run = {
   usage: ['owner'],
   category: 'special',
   async: async (m, {
      client
   }) => {
      client.sendContact(m.chat, [{
         name: global.owner_name,
         number: global.owner,
         about: 'BayMax AI Developer'
      }], m, {
         org: 'Mr Juice OFC',
         website: 'https://mrjuiceofc1.blogspot.com/?m=1',
         email: 'mrjuice017@gmail.com'
      })
   },
   error: false,
   cache: true,
   location: __filename
}