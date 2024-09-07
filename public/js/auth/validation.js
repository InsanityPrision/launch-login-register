export const isValidUsername = (username) => {
  const isValid = username.length > 5;

  return isValid;
};

export const isValidPassword = (password) => {
  const number = /[0-9]/;
  const numberSearch = password.search(number);
  const letterCase = /[A-Z][Á,À,É,È,Í,Ì,Ó,Ò,Ú,Ù]/;
  const letterCaseSearch = password.search(letterCase);
  const isNumberLetterCase = numberSearch === letterCaseSearch;
  const isCorrectLength = password >= 8;
  const isAllTrue = isNumberLetterCase === isCorrectLength;
  const isValid = isAllTrue;

  return isValid;
};

export const isSamePassword = (password1, password2) => {
  const isSame = password1 === password2;

  return isSame;
};

export const isAdultAge = (age) => {
  const isAdult = age >= 18;

  return isAdult;
};
