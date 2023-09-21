import {QrScanner} from '@yudiel/react-qr-scanner';
import Grid from '@mui/material/Grid';
import checkTicket  from './dbConnection';



const Scanner = () => {
  let stopPreview = false; 
  return (
    <Grid
      maxWidth="sm"
      maxHeight="sm"
    >     
      <QrScanner
        scanDelay={ 5000 }
        maxWidth="sm"
        onDecode = {(result) => {
          if(!stopPreview) {
            stopPreview = true;         
            checkTicket(result)
            stopPreview = false;
          }
        }}
        onError = {(error) => 
          alert(error?.message)}
      />

    </Grid>
  );
}


export default Scanner;