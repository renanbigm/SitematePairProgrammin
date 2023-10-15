// expecting time to be a string in the format like '8:15' or '12:30'
function numberToText(number) {
  const numberText = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
    'quarter', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twentye one', 'twenty two', 'twenty three', 'twenty four', 'twenty five',
    'twenty six', 'twenty sever', 'twenty eigth', 'twenty nine'];

  return numberText[+number - 1];
}

function textDescription(number) {
  if (+number === 0) {
    return "o'clock";
  }

  if (+number === 30) {
    return 'half past';
  }

  if (+number < 30) {
    return 'past';
  }

  return 'to';
}

function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === '0:00') {
    return 'midnight';
  }

  const [hour, minute] = time.split(':');

  const hourDescription = +minute > 30 ? numberToText(+hour + 1)
    : numberToText(+hour);

  const minutesDescription = +minute > 30 ? numberToText(60 - +minute)
    : numberToText(+minute);

  const connectors = textDescription(+minute);

  return minutesDescription ? `${minutesDescription} ${connectors} ${hourDescription}` : `${connectors} ${hourDescription}`;
}

module.exports = { convertTimeToWords };
