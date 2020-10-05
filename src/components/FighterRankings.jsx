import React, { useEffect } from "react";
import { connect } from "react-redux";
import {fighterRankingsData} from "../actions/getdata.jsx";
import BoxingRankingTable from "./BoxingRankingTable.jsx"

const FighterRankings = (props) => {

const {rankings, fighterRankingsData} = props
    

    useEffect(()=>{
        console.log(rankings)
        fighterRankingsData()
    },[])

    return(
        <div>
            <h1>P4P standings</h1>
            <BoxingRankingTable
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

