// Import necessary components and libraries
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Scanner from "./components/scanner";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

// Define the main App component
function App() {
  return (
    <>
      {/* Render the ResponsiveAppBar component for navigation */}
      <div className="Nav">
        <ResponsiveAppBar />
      </div>

      {/* Render the Scanner component for QR code scanning */}
      <div className="Scanner">
        <Scanner />
      </div>

      {/* Render success and error alerts */}
      <div className="response">
        {/* Success alert */}
        <Alert severity="success" id="s" variant="filled"
          style={{
            display: "none"
          }}>
          <AlertTitle>Success</AlertTitle>
          <b>QR code scanned successfully.</b>
        </Alert>

        {/* Error alert */}
        <Alert severity="error" id="e" variant="filled"
          style={{
            display: "none"
          }}>
          <AlertTitle>Error</AlertTitle>
          <b>QR code already used!</b>
        </Alert>
      </div>
    </>
  );
}

// Export the App component as the default export of this module
export default App;
