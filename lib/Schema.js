const Property = require('./validator');

module.exports = class Schema{
  constructor(schema){
    this.schema = schema;
    this.properties = Object.entries(schema).map(([field, options]) => new Property(field, options));
  }

  validate(object){
    const errors = [];
    const validated = {};
    try {
      this.properties.forEach(validator => {
        validated[validator.field] = validator.validate(object);
      });
    }
    catch(err) {
      errors.push(err);
    }
    if(errors.length > 0){
      console.log('About to throw an error');
      return new Error(`invalid schema ${errors}`);
    }
    return validated;
  }
};
