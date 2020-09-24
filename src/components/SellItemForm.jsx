import React, { useState } from "react";
import { connect } from "react-redux";
// import {bindActionCreators} from "redux";
import ImageLoader from "./ImageUploader.jsx";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { postItem } from "../actions/posts.jsx";
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import {styles} from "./SellItemForm.styles.js"
// import { compose } from "redux";

const SellItemForm = (props) => {

    const useStyles = makeStyles(theme => ({
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: "white",
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
          },
    }));
    const classes = useStyles();

    const [itemDescription, setItemDescription] = useState("")
    const [askingPrice, setAskingPrice] = useState()
    const [itemDetails, setItemDetails] = useState("")
    // modal hook below
    const [open, setOpen] = useState(false)
    

    const postItemForSale = () => {
       if (itemDescription !== "" && askingPrice !== "" && itemDetails !== "") {
        const item = {
            itemDescription: itemDescription,
            askingPrice: askingPrice,
            itemDetails: itemDetails
        }
        props.postItem(item);
        setItemDescription("")
        setAskingPrice("")
        setItemDetails("")
       }else {
           setOpen(true)
       };
    };


    // modal code below
    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      }

      const body = (
        <div className={classes.paper}>
          <h2 id="simple-modal-title">Text in a modal</h2>
          <p id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
        </div>
      );


    return (
        <div>
            <form>
            <label>
                Item Description:
                <input 
                    type="text"
                    value={itemDescription} 
                    onChange={(e) => setItemDescription(e.target.value)}
                    placeholder="Item description" 
                />
            </label>
            
            <input 
                input="text"
                value={askingPrice}
                onChange={(e) => setAskingPrice(e.target.value)}
                placeholder="Asking price" 
            />
            <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
            variant="outlined"
            value={itemDetails}
            onChange={(e) => setItemDetails(e.target.value)}
            />
            <ImageLoader />
            <div>
                <Button onClick={postItemForSale}>Submit</Button>
            </div>
        </form>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            >
                <div>
                {body}
                </div>
            
        </Modal>
        </div>
        
    )
};


const mapDispatchToProps = (dispatch) => ({
    postItem: (data) => dispatch(postItem(data))
});
  
export default connect(null, mapDispatchToProps)(withStyles(styles, {withTheme: false})(SellItemForm))

