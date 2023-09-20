import { Container } from '@mui/material';
import {QrScanner} from '@yudiel/react-qr-scanner';

import Grid from '@mui/material/Grid';


const Scanner = () => {
  return (
    <Grid
    maxWidth="sm"
    maxHeight="sm"
  >     
        <QrScanner
            delay={300}
            maxWidth="sm"
            onDecode = {(result) => {
                alert(result)
            }}
            onError = {(error) => 
                alert(error?.message)}
        />
    </Grid>
    );
}


export default Scanner;