import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "../components/shared/container/Footer";
import Header from "../components/shared/container/Header";
const HomePage = lazy(() => import("../components/home/container/HomePage"));
const ServicesPage = lazy(
  () => import("../components/services/container/ServicesPage"),
);
const AboutPage = lazy(() => import("../components/about/container/AboutPage"));
const ContactPage = lazy(
  () => import("../components/contact/container/ContactPage"),
);

function PageLoader() {
  return (
    <div className="page-loader" role="status" aria-label="Loading page">
      <span />
      <span />
      <span />
    </div>
  );
}

function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  return (
    <>
      <Header />

      <div key={location.pathname} className="route-page">
        <Suspense fallback={<PageLoader />}>
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </div>

      <Footer />
    </>
  );
}

export default AppRoutes;
