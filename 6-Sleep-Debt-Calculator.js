/*
Sleep Debt Calculator
Did you know that giraffes sleep 4.6 hours a day? We humans need more than that. If we don’t sleep enough, we accumulate sleep debt. In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator.

The program will determine the actual and ideal hours of sleep for each night of the last week.

Finally, it will calculate, in hours, how far you are from your weekly sleep goal.

If you get stuck during this project or would like to see an experienced developer work through it, click “Get Unstuck“ to see a project walkthrough video.
*/

const getSleepHours = day => {
  day = day.toLowerCase();
  if (day === 'monday') {
    return 8;
  } else if(day === 'tuesday'){
    return 6.5;
  } else if(day === 'wednesday'){
    return 7.5;
  } else if(day === 'thursday'){
    return 4.5;
  } else if(day === 'friday'){
    return 9;
  } else if(day === 'saturday'){
    return 8;
  } else if(day === 'sunday'){
    return 6;
  } else  {
    return 'Invalid day input';
  }
}

const getActualSleepHours = () => 
  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

const getIdealSleepHours = () => 7.5*7;

const calculateSleepDebt = () => {
  actualSleepHours = getActualSleepHours();
  idealSleepHours = getIdealSleepHours();

  if(actualSleepHours === idealSleepHours)  {
    console.log('You hit the perfect sleeping hours.');
  } else if(actualSleepHours > idealSleepHours) {
    console.log('Slow down there buddy. You can sleep ' + (actualSleepHours - idealSleepHours) + ' less and work more you lazy scum.' );
  } else  {
    console.log('Sleep more, your health is going to suffer in the long-term if you keep it like this.. You need to sleep ' + (idealSleepHours - actualSleepHours) + ' more!');
  }
}

calculateSleepDebt();