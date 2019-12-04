const Validator = require('../lib/validator.js');
//const Types = require('../lib/types.js').CastError;

const dog = {
  name: 'spot',
  age: 5,
  weight: '20 lbs'
};
const dogWithAgeString = {
  name: 'spot',
  age: '5',
  weight: '20 lbs'
};
const missingWeightDog = {
  name: 'spot',
  age: 5,
  weight: undefined
};
const ageAsArrayDog = {
  name: 'spot',
  age: [1, 2],
  weight: '20 lbs'
};

describe('validator module', () => {
  describe('validate fields', () => {

    const nameValidator = new Validator('name', { type: String, required: true });

    it('validates dog name', () => {
      expect(nameValidator.validate(dog)).toEqual('spot');
    });

    const ageValidator = new Validator('age', { type: Number, required: true });

    it('validates dog age', () => {
      expect(ageValidator.validate(dog)).toEqual(5);
    });
    it('validates dog age as string', () => {
      expect(ageValidator.validate(dogWithAgeString)).toEqual(5);
    });
    // it('validates unable to cast array to number', () => {
    //   expect(ageValidator.validate(ageAsArrayDog)).toThrowError(Types);
    // });

    const missingWeightValidator = new Validator('weight', { type: String, required: true });

    it('required field missing', () => {
      expect(missingWeightValidator.validate(missingWeightDog)).toMatchSnapshot;
    });

    const missingWeightNotRequiredValidator = new Validator('weight', { type: String, required: false });

    it('required field missing', () => {
      expect(missingWeightNotRequiredValidator.validate(missingWeightDog)).toMatchSnapshot;
    });

  });
});
