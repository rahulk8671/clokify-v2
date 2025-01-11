import React, { FC } from 'react';
import { Screen } from '../Screen';
import { Dial } from '../Dial';
import { Center } from '../Center';
import { Hour } from '../Hour';
import { Minute } from '../Minute';
import { Second } from '../Second';
import { ClockProvider } from '../../provider/ClockProvider';
// import Actions from '../Actions';
import Analogue from '../Analogue';

const Clock: FC = ({ width = '240px', height = '240px', ...props }) => {
    return (
        <ClockProvider {...props}>
            {/*<Actions />*/}
            <div style={{ width, height }} className={`flex items-center justify-center relative`}>
                <Screen custom={props.customScreen} background={props.background} />  
                <Dial custom={props.customDial} type={props.dialType} customerBorder={props.customerBorder} />
                <Hour custom={props.hourHand} />
                <Minute custom={props.minuteHand}/> 
                <Second custom={props.secondHand} />
                <Center custom={props.customCenter} />
            </div>
            {/* <Analogue /> */}
        </ClockProvider>
    )
}

export { Clock }
