import React from 'react'

function CompletenessDot({ color }) {
    return (
        <>
            <svg style={{ margin: '5px' }} width="8" height="8" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="3.5" cy="3.5" r="3.5" fill={color} />
            </svg>
        </>
    )
}

export default CompletenessDot
