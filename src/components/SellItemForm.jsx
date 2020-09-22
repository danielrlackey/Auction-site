import React, { useState } from "react";
import ImageLoader from "./ImageUploader.jsx";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const SellItemForm = (props) => {

    const [itemDescription, setItemDescription] = useState("")
    const [askingPrice, setAskingPrice] = useState()
    const [itemDetails, setItemDetails] = useState("")

    return (
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
                <Button >Submit</Button>
            </div>
        </form>
    )
}

export default SellItemForm;