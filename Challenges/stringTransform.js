const stringTransform = str => {
    let characters = [...(str.replaceAll(' ', ''))];
    if (str.length % 15 === 0) { 
      return characters.reverse().map(char => char.charCodeAt(0).toString()).join(' ');
    } else if (str.length % 3 === 0) { 
      return characters.reverse().join('');
    } else if (str.length % 5 === 0) { 
      return characters.map(char => char.charCodeAt(0).toString()).join(' ');
    }
    return str;
};
