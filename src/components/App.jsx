import { lazy } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
const Home = lazy(() => import("pages/Home"));
const MovieDetails = lazy(() => import("pages/MovieDetails"));
const Movies = lazy(() => import("pages/Movies"));
const Cast = lazy(() => import("./Cast"));
const Reviews = lazy(() => import("./Reviews"));


export const App = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route index path='movies' element={<Movies />} />
          <Route path='movies/:id' element={<MovieDetails />} >
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
