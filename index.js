const name = 'Claudiney Junior' // Preencha com seu nome

console.log(`Olá ${name}`);

function sub(x, y) {
  return x - y;
}

const add = (x, y) => {
  return x + y;
};


const multiplicate = (x, y) => {
  return x * y;
};

const calculate = (operation, x, y) => {
  return operation(x, y);
};

console.log(calculate(sub, x, y));