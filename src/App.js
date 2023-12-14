
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstSlider from './compenants/firstslider/FirstSlider';
import NowShowing from './compenants/nowshowing/nowShowingMovies';
import ComingSoon from './compenants/commingSoon/comingSoon';
import DetailMovie from './compenants/detailMovie/DetailMovie';
import Footer from './compenants/Footer/Footer';
import NotFound from './compenants/404';
import Header from './compenants/Header/Header';
import SignUp from './compenants/SignUp';
import SignIn from './compenants/SignIn';
import Movie from './compenants/movie/movie';
import BuyTicket from './compenants/BuyTicket';
import PurchaseHistory from './compenants/PurchaseHistory';


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <FirstSlider />
              <div id="nowshowing">
                <NowShowing />
              </div>
              <ComingSoon />
              <Footer />
            </>
          }
        />
        <Route path="/movies" element={<Movie />} />
        <Route path="/buy-ticket/:id" element={<BuyTicket />} />
        <Route path="/purchase-history" element={<PurchaseHistory />} />
        <Route path="/movie/:id" element={<DetailMovie />} />
        <Route path="/nowshowing" element={<NowShowing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
