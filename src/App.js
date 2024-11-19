import AllRoutes from "./Routers/AllRoutes";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className='min-h-full flex flex-col'>
        <div className='flex-1'>
          <AllRoutes />
        </div>
        <Footer />
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
