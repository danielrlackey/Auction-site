import React from 'react';
import Modal from '@material-ui/core/Modal';
import {styles} from "./Modal.styles.js";
import { withStyles } from '@material-ui/core/styles';



const SimpleModal = (props) => {

    const {
        modalOpen,
        setModalOpen,
        classes
    } = props


  const body = (
    <div className={classes.simpleModal}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
    </div>
  );

  
  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

export default withStyles(styles)(SimpleModal);