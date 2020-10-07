import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {fighterRankingsData, fighterDivisionalRankingsData} from "../actions/getdata.jsx";
import BoxingRankingTable from "./BoxingRankingTable.jsx"

const FighterRankings = (props) => {

const {rankings} = props
   

    useEffect(()=>{
        props.fighterDivisionalRankingsData()
        props.fighterRankingsData()
    },[])

    console.log(rankings)
    let p4p = [];
    rankings.data.forEach((ranking)=>{
        if(!ranking.division){
            p4p.push(ranking)
            console.log(p4p, 'oi')
        }
    })

    console.log(p4p, "cuck")
    return(
        <div>
            <h1>P4P standings</h1>
            {/* {rankings.data &&
                  <BoxingRankingTable
                  rankings={rankings}     
              />
            } */}
 
        </div>
    )
}

const mapStateToProps = ({rankings}) => {
    return { rankings }
}

const mapDispatchToProps = (dispatch) => ({
    fighterRankingsData: (data) => dispatch(fighterRankingsData(data)),
    fighterDivisionalRankingsData: (data) => dispatch(fighterDivisionalRankingsData(data)),
});


export default connect(mapStateToProps, mapDispatchToProps)(FighterRankings);

