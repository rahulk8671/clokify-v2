import React from "react";

const Center = ({ custom = false }) => {
    return (
        <React.Fragment>
            <div 
                style={{ 
                    zIndex: '1', 
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%,-50%)' 
                }}>
                {custom ? custom : <div className="rounded-full w-2 h-2 bg-red-300" />}
            </div>
        </React.Fragment>
    )
}

export { Center }