// Import necessary components and functions from libraries/modules
import { QrScanner } from '@yudiel/react-qr-scanner'; // Import the QrScanner component from a library
import Grid from '@mui/material/Grid'; // Import the Grid component from the Material-UI library
import checkTicket from './dbConnection'; // Import the checkTicket function from a local module 

// Define a delay function to prevent multiple scans
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// Define a functional component named Scanner
const Scanner = () => {
  // Declare a variable to control stopping the camera preview
  let stopPreview = false;

  return (
    // Create a grid container with specified maxWidth and maxHeight
    <Grid
      maxWidth="sm"
      maxHeight="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      margin={20}
    >
      {/* Render the QrScanner component */}
      <QrScanner
        // Handle the result of QR code decoding
        onDecode={(result) => {
          if (!stopPreview) {
            // Set stopPreview to true to prevent further scanning
            stopPreview = true;
            // Call the checkTicket function with the scanned result
            checkTicket(result);
            // Add a delay of 5 seconds before re-enabling scanning and hiding elements
            delay(5000).then(() => {
              stopPreview = false;
              // Hide elements with IDs 's' and 'e' (success and error boxes)
              document.getElementById('s').style.display = 'none';
              document.getElementById('e').style.display = 'none';
            });
            // Reset stopPreview for future scans
          }
        }}
        // Handle errors during scanning
        onError={(error) =>
          // Display the error message in an alert dialog
          alert(error?.message) 
        }
      />
    </Grid>
  );
}

// Export the Scanner component as the default export of this module
export default Scanner;
