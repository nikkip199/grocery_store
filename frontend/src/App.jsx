import { Footer } from "./components/common/Footer";
import { Box, createStyles } from "@mantine/core";
import { Navigation } from "./components/common/Navigation";
import BottomBanner from "./lastBottomBanner/BottomBanner";
import BottomCards from "./pages/Product/BottomCards/BottomCards";
import Routing from "./routes/Routing";
import { useState, useEffect } from "react";
import StartingPopup from "./components/popup/StartingPopup";
import loadingPng from "./assets/loadingPng.gif";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { useLocation } from "react-router-dom";

const useStyles = createStyles(() => ({
  loadContainer: {
    margin: "20% 50%",
    height: "80px",
    width: "80px",
    display: "flex",
    justifyContent: "center",
  },
}));

function App() {
  const { classes } = useStyles();
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" }, [pathname]);
  });
  // show pop after pages finish loading..
  const [showPopup, setShowPopup] = useState(true);

  const closePopup = () => {
    localStorage.setItem("seenPopup", true);
    setShowPopup(false);
  };

  useEffect(() => {
    let returningUser = localStorage.getItem("seenPopup");
    setShowPopup(!returningUser);
  }, []);

  // page loading gif
  const [pageLoading, setPageLoading] = useState(false);

  useEffect(() => {
    setPageLoading(true);
    setTimeout(() => {
      setPageLoading(false);
    }, 1000);
  }, []);

  return (
    <>
     <ToastContainer
              // position="bottom-left"
              // autoClose={5000}
              // limit={1}
              // hideProgressBar={false}
              // newestOnTop={false}
              // closeOnClick
              // rtl={false}
              // pauseOnFocusLoss={false}
              // draggable={false}
              // pauseOnHover={false}
              // theme="light"
            />
      <div>
        {pageLoading ? (
          <>
            <div className={classes.loadContainer}>
              <img src={loadingPng} alt="png" />
            </div>
            {/* {showPopup && <StartingPopup onClose={closePopup} />} */}
          </>
        ) : (
          <div>
            {/* Popup using custom component*/}
            <div>{showPopup && <StartingPopup onClose={closePopup} />}</div>
            {/* end here... */}
            {/* main content */}
            <div
              className="preNav"
              style={{
                borderRadius: "15px",
                // margin: "20px",
              }}
            >
              <Navigation />
            </div>
            {/* {/ Homepage /} */}
            <div
              style={{
                borderRadius: "15px",
                margin: "20px",
              }}
            >
              <Routing />
            </div>
            {/* {/ Homepage end /} */}
            <Box
              style={{
                borderRadius: "15px",
                margin: "20px",
              }}
            >
              <BottomBanner />
            </Box>
            <div
              style={{
                borderRadius: "15px",
                margin: "20px",
              }}
            >
              <BottomCards />
            </div>
            <div
              style={{
                borderRadius: "15px",
                // margin: "20px",
              }}
            >
              <Footer />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default App;
