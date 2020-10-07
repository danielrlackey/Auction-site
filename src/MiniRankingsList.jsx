import React from "react";

const MiniRankingsList = (props) => {
   
    const {rankings, title} = props
    console.log(rankings, "hello")
    return(
        <div>
            <h1>{title}</h1>
            {rankings && rankings.map((ranking) => {
                return(
                    <ul>
                        <li>
                            {ranking.name}
                        </li>
                    </ul>
                )
                
            })}
        </div>
    )
}

export default MiniRankingsList;