import React from "react";
import Grid from '@material-ui/core/Grid';
import {styles} from "./HomePageImageDisplay.styles.js";
import { withStyles } from '@material-ui/core/styles';

//Local stuff
import boxingpic1 from '../images/boxingpic1.jpg'
import boxingpic2 from '../images/boxingpic2.jpg'
import boxingpic3 from '../images/boxingpic3.jpg'
import boxingpic4 from '../images/boxingpic4.jpeg'


class HomePageImageDisplay extends React.Component {
    constructor(props){
    super(props)
    this.state= {
        imageUrl: "",
        imageUrlArray: [
            boxingpic1,
            boxingpic2,
            boxingpic3,
            boxingpic4,

        ],
        showModal: false,
        popImageUrl: ""
        }
    }

    render(){
        const {classes} = this.props
        let imageUrlArray = this.state.imageUrlArray;
        const images = imageUrlArray.map((url, index)=> {
            return (
                    <img
                    className={classes.imgSize}
                    src={url}
                    key={index}
                    alt={"boxing"}
                    />
            )
        })
        return (
            <div className="images">
                <Grid  container spacing={1}>
                    <Grid container item>
                        {images}
                    </Grid>
                </Grid>
            </div>
        )
    };
}

export default withStyles(styles)(HomePageImageDisplay);