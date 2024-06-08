const stringTransform = inputString => {
    let characters = [...(inputString.replaceAll(' ', ''))];
    if (inputString.length % 15 === 0) { 
      return characters.reverse().map(char => char.charCodeAt(0).toString()).join(' ');
    } else if (inputString.length % 3 === 0) { 
      return characters.reverse().join('');
    } else if (inputString.length % 5 === 0) { 
      return characters.map(char => char.charCodeAt(0).toString()).join(' ');
    }
    return inputString;
};
