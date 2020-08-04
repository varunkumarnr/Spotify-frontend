import React from 'react'
import './Sidebaroption.css'
function Sidebaroption({title,Icon}) {
    return (
        <div className="Sidebaroptions">
            {Icon && <Icon className="sidebarOption-icon" />}
            {Icon ? <h4>{title}</h4> :<p> {title}</p>}
        </div>
    )
}

export default Sidebaroption
