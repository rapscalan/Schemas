const getCaster = require('./types');

class Validate{
  constructor(field, { type, required }){
    this.field = field;
    this.type = type;
    this.required = required;
    this.caster = getCaster(this.type);
  }
  validate(object){
    const val = object[this.field];
    if(!val && this.required){
      return new Error(`${this.field} is required`);
    }
    if(!val && !this.required){
      return null;
    }
    return this.caster(val);
  }
}
