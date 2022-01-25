const title = document.getElementById("title");
const starSign = document.getElementById("star-sign");
const horoscope = document.getElementById("horoscope");

function getUrlData() {
  const dataObject = {};
  const parts = window.location.href.replace(
    /[?&]+([^=&]+)=([^&]*)/gi,
    function (m, key, value) {
      dataObject[key] = value;
    }
  );
  return dataObject;
}
const data = getUrlData();
const { firstName, lastName, star } = data;
console.log(star);
title.innerText = `Horoscope for ${firstName} ${lastName}`;
starSign.innerText = star;

switch (star) {
  case "Aquarius":
    horoscope.innerText = `There's travel in your future ${firstName}, when your tongue freezes to the back of a speeding bus! 
    Fill that void in your pathetic life, by playing whack-a-mole 17 hours a day.`;
    break;
  case "Pisces":
    horoscope.innerText = `Try to avoid any Virgos or Leos with the ebola virus. 
    You're the true Lord of the dance, ${firstName}, no matter what those idiots at work say.`;
    break;
  case "Aries":
    horoscope.innerText = `The look on ${firstName}'s face will be priceless when you find that 40 pound watermelon in your colon. 
    Trade toothbrushes with an albino dwarf, then give a hickey to Meryl Streep.`;
    break;
  case "Taurus":
    horoscope.innerText = `You will never find true happiness. What you gonna do ${firstName}, cry about it? 
    The stars predict tomorrow you'll wake up, do a bunch of stuff and then go back to sleep.`;
    break;
  case "Gemini":
    horoscope.innerText = `Your birthday party will be ruined once again by ${firstName}'s explosive flatulence. 
    Your love life will run into trouble when your fiancé hurls a javelin through your chest.`;
    break;
  case "Cancer":
    horoscope.innerText = `${firstName}... Try not to shove a roll of duct tape up your nose while taking your driver's test.`;
    break;
  case "Leo":
    horoscope.innerText = `Now is not a good time to photocopy your butt and staple it to your bosses face, ${firstName}. 
    Eat a bucket of tuna-flavored pudding, then wash it down with a gallon of strawberry quik.`;
    break;
  case "Virgo":
    horoscope.innerText = `All virgos are extremely friendly and intelligent, ${firstName}... except for you. 
    Expect a big surprise today when you wind up with your head impaled upon a stick.`;
    break;
  case "Libra":
    horoscope.innerText = `A big promotion is just around the corner, ${firstName}... for someone much more talented than you. 
    Laughter is the very best medicine. Remember that when your appendix bursts next week.`;
    break;
  case "Scorpio":
    horoscope.innerText = `${firstName}, get ready for an unexpected trip when you fall screaming from an open window.
    Work a little bit harder on improving your low self-esteem, you stupid freak.`;
    break;
  case "Sagittarius":
    horoscope.innerText = `${firstName}! All your friends are laughing behind your back (kill them). 
    Take down all those naked pictures of Ernest Borgnine, you've got hanging in your den.`;
    break;
  case "Capricorn":
    horoscope.innerText = `The stars say that you're an exciting and wonderful person, ${firstName}. But, you know they're lying.
    If I were you, I'd lock my doors and windows and never, never, never, never, never leave my house again!`;
    break;
}
