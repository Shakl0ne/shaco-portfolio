import React, {MouseEvent} from "react";
import './style.scss'

type IconPropType = {
    id: string,
    name: string,
    icon: Function
    onClick?: (
        event: React.MouseEvent<HTMLInputElement, MouseEvent>,
    ) => void

}


export const Icon: React.FC<IconPropType> = ({
                                                 id,
                                                 name,
                                                 icon,
                                                 onClick,
                                             }) => {

    const handleClick = (e: any) => {
        if (onClick) {
            onClick(e)
        }
    }

    const Icon = icon

    return (
        <div className="icon-item">
            <div className="icon-wrap" onClick={handleClick}  title="click me!">
                <Icon />
            </div>
        </div>

    )
}



