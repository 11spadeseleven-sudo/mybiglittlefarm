import ComingSoonPage from "./pages/ComingSoonPage";
import SiteApp from "./SiteApp";

export default function App() {
  const isLocalPreview = ["localhost", "127.0.0.1"].includes(window.location.hostname);

  return isLocalPreview ? <SiteApp /> : <ComingSoonPage />;
}
