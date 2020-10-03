import React, { useEffect } from "react";
import { connect } from "react-redux";
import {fighterRankingsData} from "../actions/getdata.jsx";

const FighterRankings = (props) => {

const {rankings, fighterRankingsData} = props
    console.log(rankings)

    useEffect(()=>{
        fighterRankingsData()
    },[])

    return(
        <div>
            <h1>P4P standings</h1>
            {rankings && rankings.data.map((ranking) => {
                return (
                    ranking && ranking.data
                )
            })}
        </div>
    )
}

const mapStateToProps = ({rankings}) => {
    return { rankings }
}

const mapDispatchToProps = (dispatch) => ({
    fighterRankingsData: (data) => dispatch(fighterRankingsData(data))
});


export default connect(mapStateToProps, mapDispatchToProps)(FighterRankings);

