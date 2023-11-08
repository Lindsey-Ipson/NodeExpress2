function toColoquialString(timeString) {
	const time = timeString.split(':');
	const hour = parseInt(time[0]);
	const minutes = parseInt(time[1]);

	if (hour == 0 && minutes == 0) {
		return 'midnight';
	} else if (hour == 12 && minutes == 0) {
		return 'noon';
	}

	const hourPart = toColoquialHour(hour);
  const minutesPart = toColoqialMinutes(minutes);
	const meridiemPart = toMeridiem(hour);

	return hourPart + ' ' + minutesPart + ' ' + meridiemPart;
}

function toColoquialHour(hour) {
	const hoursWords = [
		'twelve',
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
		'ten',
		'eleven',
		'twelve',
	];

	if (hour > 12) {
		hour -= 12;
	}

	return hoursWords[hour];
}

function toColoqialMinutes(minutes) {
  const LessThan10MinutesWords = [
    'o’clock', 'oh one', 'oh two', 'oh three', 'oh four', 'oh five', 'oh six', 'oh seven', 'oh eight', 'oh nine'
  ];

  const ones = ` one two three four five six seven eight nine`.split(' ');
  const teens = `ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen`.split(' ');
  const tens = `twenty thirty forty fifty sixty seventy eighty ninety`.split(' '); 

  if (minutes < 10) {
    return LessThan10MinutesWords[minutes];
  }

  if (minutes >= 10 && minutes <= 19) {
    return teens[minutes - 10];
  }

  if (minutes >= 20) {
    const firstDigit = Math.floor(minutes / 10)
    const firstDigitWord = tens[firstDigit - 2];

    let secondDigitWord;

    const secondDigit = minutes % 10;

    if (secondDigit === 0) {
      secondDigitWord = '';
    }
    else {
    secondDigitWord = ones[secondDigit];
    }

    if (secondDigitWord === '') {
      return firstDigitWord;
    }
    else return firstDigitWord + ' ' + secondDigitWord;
  }
}

function toMeridiem(hour) {
	if (hour < 12) {
		return 'am';
	} else {
		return 'pm';
	}
}

module.exports = toColoquialString;