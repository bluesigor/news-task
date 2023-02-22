import { BrowserRouter, Outlet } from "react-router-dom";

import Layout from "./assets/routes/Layout";
import Routing from "./assets/routes/Routing";

function App() {
  return (
    <div className="App" style={{
      backgroundColor: '#b6d5e1'
    }}>
      <BrowserRouter>
        <Layout>
          <Routing />
          <Outlet />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
