import React, { ReactNode } from "react";

type ScreenProps = {
    custom: ReactNode | boolean;
    background?: string;
};

const Screen = ({ custom = false, background = 'bg-gray-500' }: ScreenProps) => {
    if (custom) {
        return custom
    }

    return (
        <div className={`w-full h-full rounded-full ${background} absolute`}>
        </div>
    );
};

export { Screen };
