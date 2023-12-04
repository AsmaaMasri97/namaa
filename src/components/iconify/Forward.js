import React, { useState } from 'react'

export default function Forward() {

    const [isActiveBtn, setIsActiveBtn] = useState(true)


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
                <path d="M11.611 3.793V0L19 6.637L11.611 13.274V9.387C6.333 9.387 2.639 10.904 0 14.223C1.056 9.482 4.222 4.742 11.611 3.793Z"
                    fill={isActiveBtn ? "#FFCC63" : "rgba(160, 170, 190, 0.6)"} />
            </svg>
        </span>
    )
}


