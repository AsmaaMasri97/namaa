import React, { useState } from 'react'

export default function ReplayAll() {

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
            <svg width="26" height="15" viewBox="0 0 26 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26 14.219C23.308 10.919 19.522 9.386 14.086 9.386V13.274L6.5 6.637L14.083 0V3.793C17.2315 4.07038 20.1929 5.40756 22.483 7.586C24.2625 9.41696 25.4826 11.7177 26 14.218V14.219ZM7.583 13.274L0 6.637L7.583 0V2.845L3.25 6.637L7.583 10.43V13.275V13.274Z"
                    fill={isActiveBtn ? "#FFCC63" : "rgba(160, 170, 190, 0.6)"} fill-opacity="0.6" />
            </svg>
        </span>
    )
}

