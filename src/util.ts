const util = {
    convertTimeToTimestamp: ({ hours, minutes, seconds }: { hours: number, minutes: number, seconds: number }) => {
        // return in seconds
        return hours * 3600 + minutes * 60 + seconds;
    },

    getTimeStameFormat: (seconds: number) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
      
        return {
          hours: hours,
          minutes: minutes,
          seconds: remainingSeconds
        };
    },

    getTimeInDegrees: ({ hours, minutes, seconds }: { hours: number, minutes: number, seconds: number }) => {
        const secondsDegrees = seconds * 6;
        const minutesDegrees = (minutes + seconds / 60) * 6;
        const hoursDegrees = (hours % 12) * 30 + minutes / 2;

        return { hoursDegrees, minutesDegrees, secondsDegrees };
    },

    convertTimeStameToDegrees: (timeStamp: number) => {
        const { hours, minutes, seconds } = util.getTimeStameFormat(timeStamp)

        return util.getTimeInDegrees({ hours, minutes, seconds })
    },

    getCurrentTimeStame: () => {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        return util.convertTimeToTimestamp({ hours, minutes, seconds })
    }
}

export default util;