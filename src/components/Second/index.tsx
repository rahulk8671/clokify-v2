import { useClockContext } from '../../provider/ClockProvider'

const Second = ({ custom }) => {
    const { time: { secondsDegrees } } = useClockContext()

    return (
        <div 
            className='h-1/2 absolute flex items-end' 
            style={{
                transformOrigin: 'bottom center 2px',
                transform: `translate(0, -50%) rotate(${secondsDegrees}deg)`,
            }}
        >
            {custom ? custom : <div className='bg-red-200 w-1 h-5/6 rounded-sm' /> }
        </div>
    )
}

export { Second }