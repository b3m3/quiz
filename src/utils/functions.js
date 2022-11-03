export const stringToLink = arr =>
  arr.length
    ? arr.map(el => 
        el
          .toLowerCase()
          .replace("&", 'and')
          .split(' ')
          .join('_')
      )
        .join(',')
    : null;

export const removeSymbolInLink = str => 
  str[41] === '&' ? str.slice(0, 41) + str.slice(42) : str;