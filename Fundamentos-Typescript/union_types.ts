let total2: string | number = 200;
total2 = '4000';

function isNumber(value: string | number): boolean{
  if (typeof value === 'string')
    return true;

  return false;
}

console.log(isNumber(200));

const button = document.querySelector('button');

button?.click();

function toNumber(value: number | string): number {
  if (typeof value === 'number') return value;
  else if (typeof value === 'string') {
    const parsedValue = Number(value);
    return isNaN(parsedValue) ? 0 : parsedValue;
  }

  throw new Error('Value must be a number or a string');
}

console.log(toNumber(50));
console.log(toNumber('500'));
console.log(toNumber('ABc'));

type NumberOrString = number | string;
let totalNumberOrString: NumberOrString = 200;
totalNumberOrString = '4000';