import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AppRouter from "./routes/AppRouter";

const App = () => {
  return (
    <div className="min-h-screen bg-zinc-800 text-zinc-100">
      <Navbar />

      <AppRouter />

      <Footer />
    </div>
  );
};

export default App;
