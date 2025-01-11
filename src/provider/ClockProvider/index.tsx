import useClock from "../../hooks/useClock";
import { createContext, useContext, ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const Context = createContext();

const ClockProvider = ({ children, ...props }: Props) => {
    const { time, startTime, pauseTime, timeFormat } = useClock({ ...props })

    return (
        <Context.Provider value={{ time, startTime, pauseTime, timeFormat }}>
            {children}
        </Context.Provider>
    )
}

const useClockContext = () => {
    const context = useContext(Context)

    if (context === undefined) {
        throw new Error('useClockContext must be used within a ClockProvider')
    }

    return context
}

export { ClockProvider, useClockContext }
