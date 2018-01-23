
# Circular JSON schema files example

- api.raml contains a type with reference to schemas/one.json
- one.json contains reference to two.json
- two.json contains reference to one.json
- the schema itself is not circular, only the referencing files are circular

# To run

```
npm install
npm run test
```

**Expected result:** Should successfully parse RAML & schema

**Actual result:** Throws error CIRCULAR_REFS_IN_JSON_SCHEMA
