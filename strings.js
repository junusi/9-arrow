/*
Reikia grazinti pirma ir paskutine raides
*/


const zodis ='Labas rytas';

const pirmaPaskutineRaides = text => text[0]  + text[text.length - 1];
console.log(pirmaPaskutineRaides(zodis));

/*
Duoto saraso zodziu pirmos raides
*/
const zodynas = ['labas','rytas','sakau','tau'];

const zodynoSujungimas = dictionary => {
    let answer ='';
//    for (let i = 0; i < dictionary.length; i++) {
 //   const word = dictionary[i];}

    for (const word of dictionary) {
        answer = answer + word[0];  
    }
    return answer;
};

// Sutrumpintas to paties uzrasimas

const dictionaryMap = dictionary => dictionary.map(word => word[0]).join('');
console.log(zodynoSujungimas(zodynas));
console.log(dictionaryMap(zodynas));





