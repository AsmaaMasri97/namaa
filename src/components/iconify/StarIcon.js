import { display } from '@mui/system'
import React from 'react'

export default function StarIcon({ value }) {

    const valueStyle = {
        fontWeight: 700,
        fontSize: '15px',
        margin: '0px 10px'
    }

    return (
        <span style={{
            display: 'flex',
            padding: '0px 10px',
            alignItems: 'center',
            justifyContent: 'center'
        }}
        >
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.74653 1.7822L10.1382 4.301C10.3289 4.64674 10.812 4.97267 11.2112 5.01395L13.587 5.29024C15.1083 5.46388 15.492 6.53096 14.4462 7.66068L12.6646 9.57463C12.3672 9.89536 12.2091 10.5039 12.3241 10.9196L12.9239 13.1505C13.3956 14.9118 12.4641 15.6513 10.8453 14.7977L8.58378 13.605C8.17191 13.387 7.51449 13.4247 7.12372 13.6766L4.94957 15.0808C3.39318 16.0846 2.41358 15.4405 2.76837 13.6403L3.22245 11.3619C3.30723 10.936 3.11751 10.3443 2.7986 10.055L0.89562 8.32231C-0.221034 7.30148 0.090887 6.20097 1.59303 5.8772L3.93851 5.37333C4.33438 5.28504 4.79531 4.92248 4.95915 4.55614L6.18092 1.90471C6.83807 0.473385 7.99521 0.418949 8.74653 1.7822Z" fill="#FFA600" />
            </svg>
            <span style={valueStyle}>5</span>
        </span>
    )
}
