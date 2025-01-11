import { useState, useEffect } from "react";
import util from "../../util";

const TICK = 1000;

const useClock = ({ tickSpeed = TICK, customTime = false, isPaused = false, reverse = false }) => {
    const [time, setTime] = useState(() => {
        const commonValues = {
            isPaused,
            reverse,
        }
        if (!customTime) {
            return { 
                seconds: util.getCurrentTimeStame(), 
                ...commonValues
            }
        } else {
            return {
                seconds: util.convertTimeToTimestamp(customTime),
                ...commonValues
            }
        }
    });

    useEffect(() => {
        setTime(time => ({ ...time, isPaused, reverse }));
    }, [isPaused, reverse])

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(time => {
                if (!time.isPaused) {
                    if (time.reverse) {
                        return { ...time, seconds: time.seconds - 1 }
                    } else {
                        return { ...time, seconds: time.seconds + 1 }
                    }
                }
                return time;
            });
        }, tickSpeed);
        return () => clearInterval(interval);
    }, [tickSpeed]);

    const pauseTime = () => {
        setTime(time => ({ ...time, isPaused: true }));
    }

    const startTime = () => {
        setTime(time => ({ ...time, isPaused: false }));
    }

    return {
        timeFormat: util.getTimeStameFormat(time.seconds),
        time: util.convertTimeStameToDegrees(time.seconds),
        pauseTime,
        startTime
    };
};


export default useClock;