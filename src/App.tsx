import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Technology from '@/components/Technology';
import Dashboard from '@/components/Dashboard';
import Validation from '@/components/Validation';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-ink-900 text-white selection:bg-teal-400/20 selection:text-teal-200">
      <Navbar />
      <main>
        <Hero />
        <Technology />
        <Dashboard />
        <Validation />
      </main>
      <Footer />
    </div>
  );
}
