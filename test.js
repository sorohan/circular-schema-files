const ramlParser = require('raml-1-parser');

ramlParser.load('./api.raml')
  .then((test) => {
    if (test.errors) {
      console.log(test.errors);
    } else {
      console.log('success parsing raml');
    }
  })
  .catch((error) => {
    console.log(error);
  });

/*
const $RefParser = require('json-schema-ref-parser');
$RefParser.dereference('./schemas/one.json', (err, schema) => {
  if (err) {
    console.error(err);
  }
  else {
    console.log('success dereferencing json');
    console.log(JSON.stringify(schema, null, 2));
  }
});
*/

