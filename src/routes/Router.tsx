import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import PageLoading from 'components/page-loading/PageLoading';
import paths from 'routes/paths';;
import Layout from 'components/layout/Layout';

const Home = lazy(() => import('pages/home/Home'));
const PageNotFound = lazy(() => import('pages/not-found/NotFound'));
const Projects = lazy(() => import('pages/projects/Projects'));
const Resume = lazy(() => import('pages/resume/Resume'));
const Sharity = lazy(() => import('pages/projects/Sharity/Sharity'));
const Renew = lazy(() => import('pages/projects/Renew/Renew'));
const Moko = lazy(() => import('pages/projects/Moko/Moko'));
const CareerCue = lazy(() => import('pages/projects/CareerCue/CareerCue'));
const PatientViz = lazy(() => import('pages/projects/PatientViz/PatientViz'));
const ChessMate = lazy(() => import('pages/projects/ChessMate/ChessMate'));
const Alacrity = lazy(() => import('pages/projects/Alacrity/Alacrity'));

interface Routes {
   path: string;
   element: React.ReactNode;
}

const getRouteElement = (Component: React.ElementType): React.ReactNode => (
   <Suspense fallback={<PageLoading />}>
      <Layout>
         <Component />
      </Layout>
   </Suspense>
);

const routes: Routes[] = [
   { path: paths.HOME, element: getRouteElement(Home) },
   { path: paths.NOT_FOUND, element: getRouteElement(PageNotFound) },
   { path: paths.PROJECTS, element: getRouteElement(Projects) },
   { path: paths.RESUME, element: getRouteElement(Resume) },
   { path: paths.SHARITY, element: getRouteElement(Sharity)},
   { path: paths.RENEW, element: getRouteElement(Renew) },
   { path: paths.MOKO, element: getRouteElement(Moko) },
   { path: paths.CAREERCUE, element: getRouteElement(CareerCue) },
   { path: paths.PATIENTVIZ, element: getRouteElement(PatientViz) },
   { path: paths.CHESSMATE, element: getRouteElement(ChessMate) },
   { path: paths.ALACRITY, element: getRouteElement(Alacrity) },
];

const Router: React.FC = () => (
     <Routes>
       {routes.map((route) => (
         <Route key={route.path} {...route} />
       ))}
     </Routes>
 );
 
 export default Router;