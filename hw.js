let weekDays =[
    'Sunday',
    'Monday',
    'Tuesday',
    'Wedmesday',
    'Thursday',
    'Friday',
    'Saturday']

    let weekLetters =[, , , , , , , ,]

    for (i=0; i <weekDays.length; i++){
       weekLetters[i] = weekDays[i].charAt(0);
    }
    console.log(weekLetters);