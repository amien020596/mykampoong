/* 
how to use interpolation
{t("key",{param1:"interpolation word"})}

in json file we use
{
  "key":"words {{param1}}"
}

*/
const path = require('path');
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'id'],
  },
  localePath: path.resolve('./public/static/locales'),
  debug: false,
  react: { useSuspense: false }
};
