const ramlParser = require('raml-1-parser');

ramlParser.loadApi('./api.raml', [], { rejectOnErrors: true })
  .then(() => {
    console.log('success');
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

