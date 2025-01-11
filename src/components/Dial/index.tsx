import { ReactNode } from 'react';

interface DialProps {
    custom: ReactNode | boolean;
    type: string;
    customerBorder: string;
}

const DIAL_COUNT = 12;

const Dial = ({ custom = false, type = 'number', customerBorder = 'border-red-400' }: DialProps) => {
    if (custom) {
        return custom
    }

    return (
        <div className={`w-full h-full rounded-full justify-center flex relative border-8 ${customerBorder}`}>
            {new Array(DIAL_COUNT).fill(0).map((_, index) => (
                <div key={index} className='absolute flex h-full w-1  justify-between' style={{ transform: `rotate(${index * 30}deg)`, flexDirection: 'column' }}>
                    {type === 'normal' ?
                        <>
                            <div className='w-full h-4 bg-black'></div>
                            <div className='w-full h-4 bg-black'></div>
                        </>
                        :
                        <>
                            <div className='' style={{ color: 'black', transform: `rotate(${index * -30}deg) translateX(-50%)` }}>{index == 0 ? 12 : index}</div>
                            <div className=''></div>
                        </>
                    }
                </div>
            ))}
        </div>
    )

    // return (
    //     <div className="flex items-center justify-center w-full h-full rounded-full p-10 border-8  absolute">
    //     </div>
    // );
};

export { Dial };
