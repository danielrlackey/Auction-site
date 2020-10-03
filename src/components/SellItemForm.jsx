import React, { useState } from "react";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
// import {bindActionCreators} from "redux";
import ImageLoader from "./ImageUploader.jsx";
import { postItem } from "../actions/posts.jsx";
import SimpleModal from "./Modal.jsx";
import {styles} from "./SellItemForm.styles.js"
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
// import { compose } from "redux";



const SellItemForm = (props) => {

    const [itemDescription, setItemDescription] = useState("")
    const [askingPrice, setAskingPrice] = useState()
    const [itemDetails, setItemDetails] = useState("")
    const [pictures, setPictures] = useState()
    // modal hook below
    const [modalOpen, setModalOpen] = useState(false)
    

    const postItemForSale = () => {
       if (itemDescription !== "" && askingPrice !== "" && itemDetails !== "" && pictures !== []) {
        const item = {
            itemDescription: itemDescription,
            askingPrice: askingPrice,
            itemDetails: itemDetails,
            pictures: pictures
        }
        props.postItem(item);
        setItemDescription("")
        setAskingPrice("")
        setItemDetails("")
        setPictures()
       }else {
           setModalOpen(true)
       };
    };


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
            <ImageLoader
            value={pictures}
            onchange={(e) => setPictures(e.target.file)}
            />
            <div>
                <Button onClick={postItemForSale}>Submit</Button>
            </div>
        </form>
        <SimpleModal
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            >
        </SimpleModal>
        </div>
        
    )
};


const mapDispatchToProps = (dispatch) => ({
    postItem: (data) => dispatch(postItem(data))
});
  
export default connect(null, mapDispatchToProps)(withStyles(styles, {withTheme: false})(SellItemForm))

