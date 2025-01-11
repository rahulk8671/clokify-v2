import { useClockContext } from "../../provider/ClockProvider";

const Analogue = () => {
    const { timeFormat } = useClockContext();

    return (
        <div className="">
            <span>h:{timeFormat.hours} </span>
            <span>m:{timeFormat.minutes} </span>
            <span>s:{timeFormat.seconds} </span>
        </div>
    )
}

export default Analogue;