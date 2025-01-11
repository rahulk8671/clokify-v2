import { useClockContext } from '../../provider/ClockProvider'

const Hour = ({ custom }) => {
    const { time: { hoursDegrees } } = useClockContext()

    return (
        <div 
            className='h-1/2 absolute flex items-end'
            style={{
                transformOrigin: 'bottom center 4px',
                transform: `translate(0, -50%) rotate(${hoursDegrees}deg)`,
            }}
        >
            {custom ? custom : <div className='bg-red-200 w-1 h-3/6 rounded-sm'/>}
        </div>
    )
}

export { Hour }