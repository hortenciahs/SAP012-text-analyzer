const analyzer = {  
  getWordCount: (text) => {
    const words = text.trim().split(/\s+/).filter(Boolean);
    return words.length;
    
  },
  getCharacterCount: (text) => {
    return text.length;

  },
  getCharacterCountExcludingSpaces: (text) => {
    const cleantext = text.replace(/[^\w\s]/g, "").replace (/\s+/g, '');
    let nospacecount = 0;
    for (let i = 0; i < cleantext.length; i++) {
      if (cleantext[i] !== '') {
        nospacecount++;
      } 
    }
    return cleantext.length;


  },
  getAverageWordLength: (text) => {    
    const words = text.trim().split(/\s+/).filter(Boolean);
    if(words.length === 0){
      return 0;
    }
    const totalwordlength = words.reduce(( acc,words) => acc + words.length, 0);
    return totalwordlength / words.length 
    

  },
  getNumberCount: (text) => {
    const numbers = text.match(/\d+/g);
    return numbers ? numbers.length : 0;
  },
  getNumberSum: (text) => {
    const numbers = text.match(/\d+/g);
    numbers ? numbers.reduce((acc,num) => acc + parseInt(num), 0) : 0;
  },
};

export default analyzer;
