import React from 'react'

function ResumeBox(props){
    return (
        <div className='resume-box'>
            <h3>{props.subdescript}</h3>
            <ul>
                {
                    props.items.map((listitem, index) => {
                        return <ul key={index}>{listitem}</ul>
                    })
                }
            </ul>
        </div>
    )
}

export default ResumeBox