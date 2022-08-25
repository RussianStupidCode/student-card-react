const MAX_AGE = 90;
const MIN_AGE = 16;

const birthDateToString = (birthDate) => {
  const age = new Date().getFullYear() - birthDate;
  const stringNumber = String(age);

  let number = age;
  if (stringNumber.length > 2) {
    number = Number(stringNumber.split("").slice(-2).join(""));
  }

  const remainder = number % 10;

  if (remainder === 1 && number !== 11) {
    return `${birthDate} (${age} год)`;
  }

  if (remainder > 1 && remainder < 5 && (number < 11 || number > 14)) {
    return `${birthDate} (${age} года)`;
  }

  return `${birthDate} (${age} лет)`;
};

export { MAX_AGE, MIN_AGE, birthDateToString };
