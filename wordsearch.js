//Contributors @matt-james-morgan, @philteigne, @Fatbobot
//

const reverseStr = (str) => {
    const strArr = str.split('');
    const reverseStrArr = strArr.reverse();

    return reverseStrArr.join('');
};

const transpose = (matrix) => {
    const result = [];
  
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (i === 0) {
          result.push([matrix[i][j]]);
        } else {
          result[j].push(matrix[i][j]);
        }
      }
    }
    return result;
  };

const transposeDiagonal = (matrix) => {
    let diagonalMatrix = matrix;
    let frontCount = matrix[0].length - 1;
    

    for (let i of diagonalMatrix) {
        for (let j = 0; j < frontCount; j++) {
            i.unshift(0);
        }
        frontCount--;
    }

    diagonalMatrix = transpose(diagonalMatrix);
    
    return diagonalMatrix;
}
  
const wordSearch = (letters, word) => {

    if(letters.length === 0) {
        return false;
    }

  const reverseWord = reverseStr(word);
  const horizontalJoin = letters.map(ls => ls.join(''));

  for (let l of horizontalJoin) {
    if (l.includes(word) || l.includes(reverseWord)) return true;
  }

  const letters2 = transpose(letters);

  const horizontalJoin2 = letters2.map(ls => ls.join(''));
  for (let l of horizontalJoin2) {
    if (l.includes(word) || l.includes(reverseWord)) return true;
  }

  const letters3 = transposeDiagonal(letters);

  const horizontalJoin3 = letters3.map(ls => ls.join(''));
  for (let l of horizontalJoin3) {
    if (l.includes(word) || l.includes(reverseWord)) return true;
  }

  
  return false;
};


module.exports = wordSearch;

