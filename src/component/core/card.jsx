import React from 'react'

export default function card({ img }) {
    return (
        <div>
            <div className="w-[341px] h-[227px] bg-cover" style={{ backgroundImage: `url(${img})` }}></div>
        </div>
    )
}
