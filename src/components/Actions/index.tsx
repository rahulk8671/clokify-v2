import { useClockContext } from '../../provider/ClockProvider'

const Actions = () => {
    const { startTime, pauseTime } = useClockContext()

    return (
        <div className="flex justify-center space-x-4">
            <button 
                onClick={() => startTime()}
                className="bg-gray-500 text-white px-4 py-2 rounded-md">
                    Start
            </button>
            <button 
                onClick={() => pauseTime()}
                className="bg-gray-500 text-white px-4 py-2 rounded-md"
            >
                Pause
            </button>
        </div>
    )
}

export default Actions