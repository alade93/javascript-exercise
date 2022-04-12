//tempature converter
function CelsiusToFahrenheit(NNoC) {
    NNoF= ((9/5)*NNoC +32);
 return NNoF
 }
 console.log(CelsiusToFahrenheit(100))
 
 
 
 
 function FahrenheitToCelcius(NNof) {
    NNoc= ((5/9)*(NNof -32));
 
 return NNoc
 }
 console.log(FahrenheitToCelcius(212))


 //palindrome
 function palindrome(str) {
    let re = /[\W_]/g;
    let lowRegStr = str.toLowerCase().replace(re, '');
    let reverseStr = lowRegStr.split('').reverse().join(''); 
    console.log( reverseStr === lowRegStr)
    return  reverseStr === lowRegStr
  }
  palindrome("0_0 (: /-\ :) 0-0");  

  //object
  const programming = {
    languages: ["JavaScript", "Python", "Java"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
 }
 
 console.log(typeof(programming))
 
 language = programming['languages']
 language.push('Ruby')
 console.log(language)
 
 programming['difficulty']= 7
 
 console.log(programming['difficulty'])
 
 
 programming['isFun']= true
 
 
 
 console.log(programming)