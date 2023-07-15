import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import PageLoading from 'components/page-loading/PageLoading';
import Page from 'components/page/Page';
import Navbar from 'components/navbar/Navbar'

import paths from 'routes/paths';

const Home = lazy(() => import('pages/home/Home'));
const PageNotFound = lazy(() => import('pages/not-found/NotFound'));
const Projects = lazy(() => import('pages/projects/Projects'));
const Resume = lazy(() => import('pages/resume/Resume'));

interface Routes {
   path: string;
   element: React.ReactNode;
}

const getRouteElement = (Component: React.ElementType): React.ReactNode => (
   <Suspense fallback={<PageLoading />}>
      <Page>
         <Navbar />
         <Component />
      </Page>
   </Suspense>
);

const routes: Routes[] = [
   { path: paths.HOME, element: getRouteElement(Home) },
   { path: paths.NOT_FOUND, element: getRouteElement(PageNotFound) },
   { path: paths.PROJECTS, element: getRouteElement(Projects) },
   { path: paths.RESUME, element: getRouteElement(Resume) },
];

export default createBrowserRouter(routes);