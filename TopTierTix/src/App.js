import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Scanner  from "./components/scanner";

function App() {
  return (
    <>
      <div className="Nav">
        <ResponsiveAppBar />
      </div>
      <div>
          <Scanner />
      </div>
    </>
  );
}

export default App;