export const filterDuplicates = (values: unknown[]): unknown[] => {
  const filteredValues = values.filter(value => value !== undefined && value !== null && value !== false && value !== "" && value !== 0);
  return filteredValues;
};

export const replaceVowelsAndSpecialChars = (value: string): string => {
  const vowels = ["a", "e", "i", "o", "u"];
  const specialChars = ["!", "?", ".", ",", "_"];
  const valueArr = value.split("");
  const result = valueArr.map (char =>{
    if (vowels.includes(char.toLowerCase())) {
      return char.charCodeAt(0);
    } else if (specialChars.includes(char)) {
      return char.charCodeAt(0);
    } else {
      return char;
    }
  })
  return result.join("");
};

export const isPalindrom = (value: string): boolean => {
  const valueArr = value.split("");
  const reversedValueArr = valueArr.reverse();
  const reversedValue = reversedValueArr.join("");
  return value.toLowerCase() === reversedValue.toLowerCase();
};
