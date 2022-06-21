

class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }
    addClock(time, callback, id) {
        if (isNaN(id)) {
            throw new Error('error text');
        } else {
            if (this.alarmCollection.find(item => item.id == id) !== undefined) {
                return console.error('будильник на это время существует');
            } else {
                return this.alarmCollection.push({time, callback, id});
            }
        }
    }
    removeClock(id) {
        let arrLength = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(item => item.id !== id);
        return (arrLength > this.alarmCollection.length);
    }
    getCurrentFormattedTime() {
        let checkTime = (i) => {
            if (i < 10) {
               i = "0" + i;
            }
        return i;
        }
        const today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        return checkTime(h) + ':' + checkTime(m);
    }
    start() {
        let checkClock = function(alarm) {
            let checkTime = (i) => {
                if (i < 10) {
                   i = "0" + i;
                }
            return i;
            }
            const today = new Date();
            let h = today.getHours();
            let m = today.getMinutes();
            let alarmTime = checkTime(h) + ':' + checkTime(m);
            if (alarm.time === alarmTime) {
                return alarm.callback();
            }
        }
        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(alarm => checkClock(alarm));
            }, 60);
        }
        return;
    }
    stop() {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }
    printAlarms() {
        this.alarmCollection.forEach(item => console.log(item.id + ': ' + item.time));
    }
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}