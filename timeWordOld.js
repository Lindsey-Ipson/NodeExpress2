const  ones = `one two three four five six seven eight nine`.split(' ');
const  teens = `ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen`.split(' ');
const tens = `twenty thirty forty fifty sixty seventy eighty ninety`.split(' ');

function timeWord (mmhh) {
  const [mm, hh] = mmhh.split(':');
  const hour = parseInt(hh);
  const minute = parseInt(mm);
  const ampm = hour < 12 ? 'am' : 'pm';

  if (hour < 0 || hour > 23 || minute < 0 || minute > 59) {
    throw new Error('Invalid time');
  }

  if (hour === 0 && minute === 0) {
    return 'midnight';
  }

  if (hour === 12 && minute === 0) {
    return 'noon';
  }

  if (hour[0] === 0) {
    hourWord = ones[hour[1] - 1];
  }

  if (hour <= 12 && hour[0] === 1) {
    hourWord = teens[hour - 10];
  }

  if (hour >= 13 && hour <= 19) {
    hourWord = teens[hour - 10];
  }

  




  const hourWord = hour % 12 === 0 ? 'twelve' : ones[hour % 12];
  const minuteWord = minute === 0 ? 'o’clock' : minute < 10 ? `oh ${ones[minute]}` : minute < 20 ? teens[minute - 10] : `${tens[Math.floor(minute / 10)]} ${ones[minute % 10]}`;
  const timeWord = hour === 0 && minute === 0 ? 'midnight' : hour === 12 && minute === 0 ? 'noon' : `${hourWord} ${minuteWord} ${ampm}`;
  return timeWord;
}

// Test cases
console.log(timeWord("00:00"));  // "midnight"
console.log(timeWord("00:12"));  // "twelve twelve am"
console.log(timeWord("01:00"));  // "one o’clock am"
console.log(timeWord("06:01"));  // "six oh one am"
console.log(timeWord("06:10"));  // "six ten am"
console.log(timeWord("06:18"));  // "six eighteen am"
console.log(timeWord("06:30"));  // "six thirty am"
console.log(timeWord("10:34"));  // "ten thirty four am"
console.log(timeWord("12:00"));  // "noon"
console.log(timeWord("12:09"));  // "twelve oh nine pm"
console.log(timeWord("23:23"));  // "eleven twenty three pm"
