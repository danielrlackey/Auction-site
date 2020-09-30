import React from "react";
import { connect } from "react-redux";
import {fighterRankingsData} from "../actions/getdata.jsx";

const FighterRankings = (props) => {

const {rankings} = props

    return(
        <div>
            <button onClick={()=>fighterRankingsData()}>api</button>
           {console.log(rankings && rankings.data)}
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

