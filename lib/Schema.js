const Property = require('./validator');

class Schema{
  constructor(schema){
    //Object.entries(obj)
    this.schema = schema;
    this.properties = Object.entries(schema).map(([field, options]) => new Property(field, options));
  }

  validate(){
    const errors = [];
    const validated = {};
    try {
      ;
    }
    catch(err) {
      ;
    }

  }
}
