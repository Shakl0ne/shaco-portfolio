import React, { useState} from 'react'

import './style.scss'
import {Icon} from "./Icon";
import americanFlag from "../../../../../assets/icons/american-flag";
import israeliFlag from "../../../../../assets/icons/israeli-flag";
import chineseFlag from "../../../../../assets/icons/chinese-flag";

type GreetingPropType = {
    text: string
}


export const Greeting: React.FC<GreetingPropType> = ({text}) => {

    const icons = [
        {
            id: 'cn',
            callback: chineseFlag,
            name: 'Linghao Zhang 张凌皓'
        },
        {
            id: 'us',
            callback: americanFlag,
            name: 'Shaco Zhang',
        },
        {
            id: 'il',
            callback: israeliFlag,
            name: 'David Sidgiyayev דוד סידיאייב'
        },
    ]

    const findById = (_id: string) => {
        return icons.find((icon:any) => icon.id === _id)?.name
    }

    const [display, setDisplay] = useState(findById('cn'))


    const handleClick = (e: any) => {

        const icon_id = e.currentTarget.children[0].id
        setDisplay(findById(icon_id))
    }

    return (
        <div className='greeting'>
            <h3>{text}&nbsp;<span className="highlight">{display}</span></h3>
            <div className='greeting__icon-container'>
                {icons.map(
                    (icon: any) =>

                        <Icon
                            id={icon.id}
                            name={icon.name}
                            icon={icon.callback}
                            onClick={handleClick}
                            {...icons}
                        />
                )}
            </div>
        </div>
    )

}
