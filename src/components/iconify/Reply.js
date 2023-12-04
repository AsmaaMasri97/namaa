import React, { useState } from 'react'

export default function Reply() {

    const [isActiveBtn, setIsActiveBtn] = useState(false)


    const activeHandler = () => {
        setIsActiveBtn(isActiveBtn => !isActiveBtn)
    }

    return (
        <span
            style={{
                display: 'inline-block',
                width: '28px',
                height: '28px'
            }}
            onClick={activeHandler}
        >
            <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.389 3.793V0L0 6.637L7.389 13.274V9.387C12.667 9.387 16.361 10.904 19 14.223C17.944 9.481 14.778 4.741 7.389 3.793Z"
                    fill={isActiveBtn ? "#FFCC63" : "rgba(160, 170, 190, 0.6)"} fill-opacity="0.6" />
            </svg>
        </span>
    )
}

