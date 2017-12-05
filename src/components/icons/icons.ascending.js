import React from 'react'
import { svgStyles } from './style'

export const Ascending = ( iconOn ) => {
    if(iconOn){
        return(
            <svg style={svgStyles()} className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <path d="M78,36.2l2.7-2.7a6.2,6.2,0,0,0,0-8.8,6,6,0,0,0-8.5,0l-2.8,2.8a37.3,37.3,0,0,0-16.8-6.7V15.4h3.4a5,5,0,0,0,0-9.9H38.9a4.9,4.9,0,0,0,0,9.9h3.6v5.5a37.2,37.2,0,0,0-16.8,6.7L23,24.9a6.2,6.2,0,0,0-8.8,0,6,6,0,0,0,0,8.5L17,36.2A37.5,37.5,0,1,0,78,36.2ZM21,31.5h0ZM47.5,89.4a31.4,31.4,0,0,1,0-62.8h0A31.4,31.4,0,0,1,47.5,89.4Z"/>
                <path d="M47.8,31.6V57.9H47.6l0.2,0.3L25.1,71.2A26.2,26.2,0,1,0,47.8,31.6Z"/>
            </svg>
        )
    }

    return (
        <svg style={svgStyles()} className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path d="M78,36.2l2.7-2.7a6.2,6.2,0,0,0,0-8.8,6,6,0,0,0-8.5,0l-2.8,2.8a37.3,37.3,0,0,0-16.8-6.7V15.4h3.4a5,5,0,0,0,0-9.9H38.9a4.9,4.9,0,0,0,0,9.9h3.6v5.5a37.2,37.2,0,0,0-16.8,6.7L23,24.9a6.2,6.2,0,0,0-8.8,0,6,6,0,0,0,0,8.5L17,36.2A37.5,37.5,0,1,0,78,36.2ZM21,31.5h0ZM47.5,89.4a31.4,31.4,0,0,1,0-62.8h0A31.4,31.4,0,0,1,47.5,89.4Z"/>
            <path d="M70.9,45.4A26.2,26.2,0,0,0,47.8,31.6V57.8Z"/>
        </svg>
    )

}
