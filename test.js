const ramlParser = require('raml-1-parser');

let err = false;

ramlParser.loadApi('./api.raml', [], { rejectOnErrors: true })
  .then(() => {
    console.log('success parsing raml');
  })
  .catch((err) => {
    console.log(err);
    err = true;
  });

/*
const $RefParser = require('json-schema-ref-parser');
$RefParser.dereference('./schemas/one.json', (err, schema) => {
  if (err) {
    console.error(err);
    err = true;
  }
  else {
    console.log('success dereferencing json');
    console.log(JSON.stringify(schema, null, 2));
  }
});
*/

if (err) {
  process.exit(1);
}

