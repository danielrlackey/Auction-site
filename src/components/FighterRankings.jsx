import React, { useEffect } from "react";
import { connect } from "react-redux";
import {fighterRankingsData} from "../actions/getdata.jsx";
import RankingTable from "./RankingTable.jsx"

const FighterRankings = (props) => {

const {rankings, fighterRankingsData} = props
    

    useEffect(()=>{
        console.log(rankings)
        fighterRankingsData()
    },[])

    return(
        <div>
            <h1>P4P standings</h1>
            {/* {rankings && rankings.data && rankings.data && rankings.data.map((ranking) => {
                return (
                    
                )
            })} */}
            <RankingTable
                rankings={rankings}     
            />
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

