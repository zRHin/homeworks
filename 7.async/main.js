

let phoneAlarm = new AlarmClock();

phoneAlarm.addClock("19:03", () => console.log("Wake up and sing!"), 1);

phoneAlarm.addClock("19:03", () => {console.log("Wake up and sing, mr. Friman!"); phoneAlarm.clearAlarms(2)}, 2);

phoneAlarm.addClock("19:04", () => {
    console.log("Great things are waiting for you again");
    phoneAlarm.clearAlarms();
    phoneAlarm.printAlarms();
}, 3);
phoneAlarm.addClock("10:05", () => console.log("Wake up and sing!"), 1);

phoneAlarm.printAlarms();
phoneAlarm.start();