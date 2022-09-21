import { Routes, Route, NavLink, Navigate } from "react";
import { lazy, Suspense } from 'react';
//import { Route, Routes, NavLink, Navigate } from 'react';
import s from './App.module.css';


//import шлях
const HomePage = lazy(() => import('./HomePage/HomePage'));
const MoviePage = lazy(() => import('./MoviePage/MoviePage'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));


//Арр. Ретьорн з роутами
 export const App = () => {
  return (
    <div className={s.container}>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? s.active : s.link)}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? s.active : s.link)}
          to="/movies"
        >
          Movies
        </NavLink>
        <hr />
      </nav>
      <Suspense fallback="loading">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviePage />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
};

