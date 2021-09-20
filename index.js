
let ride = 2001;
function scuberGreetingForFeet(ride){
 if (ride <= 400)
 return 'This one is on me!'
 if ( ride > 2000 && ride <= 2500)
 return 'I will gladly take your thirty bucks.'
 if (ride > 2500 )
 return 'No can do.'

}



let city = 'Pitssburg';
function ternaryCheckCity(city){
  if ( city === 'NYC') return 'Ok, sounds good.'
  if ( city != 'NYC') return 'No go.'
}

let tip = 'generous';
function switchOnCharmFromTip(tip){
  switch(tip){
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    case 'thanks for everything':
      return 'Bye.';
  
  }
}


 

