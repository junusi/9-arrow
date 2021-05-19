// function declaration (iprasta funkcija).
function sumavimas(a,b){
return a + b ;
}
console.log('suma: 8 + 5 =', sumavimas(8, 5));

// konstantai priskirta anonimine funkcija
// parasom const iriskeliam funkcijos pavadinima ir priskiriam likusia  
// funkcijos dali.
const skirtumas = function (a, b) {
    return a - b;
}
console.log('skirtumas: 8 - 5 =', skirtumas(8, 5));

 // arrow function (rodikline funkcija).
 // istrinom function termina ir tarp () {} skliaustu irasome => 
const sandauga =  (a, b) => {
    return a * b;
}
console.log('sandauga: 8 * 5 =', sandauga(8, 5));  

 // arrow function (rodikline funkcija).
 // jeigu logikos bloke yra tik viena procedura,tai galim ne rasyti {} ir return
 const dalyba =  (a, b) =>  a / b;
console.log('dalyba: 8 / 5 =', dalyba(8, 5));  

 // arrow function (rodikline funkcija).
 // jeigu parametru bloke () yra tik ir tik vienas parametras,tai galim nerasyti ()
 // bet jeigu parametru nera ar daugiau negu vienas skliaustai privalomi.
 const kvadratu =  a =>  a * a;
console.log('kelimas kvadratu: 8 * 8 =', kvadratu(8));  



