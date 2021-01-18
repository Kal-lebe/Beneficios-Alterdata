import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import MapContainer from "../MapContainer";

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

function CustomDialog(props) {
  const { open, handleClose, selectedData } = props;
  const classes = useStyles();

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="dialog-title"
      open={open}
      fullWidth={true}
      maxWidth={"lg"}
    >
      <DialogTitle id="dialog-title">
        {selectedData?.estabelecimento}

        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent style={{ minHeight: "72px" }}>
        <Typography>Endereço: {selectedData?.endereco}</Typography>
        <Typography>Contato: {selectedData?.contato}</Typography>
      </DialogContent>
      <div style={{ minHeight: "600px" }}>
        <div style={{ height: "400px" }}>
          <MapContainer selectedData={selectedData} />
        </div>
      </div>
    </Dialog>
  );
}

export default CustomDialog;
