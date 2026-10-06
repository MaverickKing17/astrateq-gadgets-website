import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Technology from '@/components/Technology';
import Problem from '@/components/Problem';
import Dashboard from '@/components/Dashboard';
import Validation from '@/components/Validation';
import PreLaunch from '@/components/PreLaunch';
import Audience from '@/components/Audience';
import EarlyAccess from '@/components/EarlyAccess';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-ink-900 text-white selection:bg-cyan-400/20 selection:text-cyan-200">
      <Navbar />
      <main>
        <Hero />
        <Technology />
        <Problem />
        <Dashboard />
        <Validation />
        <PreLaunch />
        <Audience />
        <EarlyAccess />
      </main>
      <Footer />
    </div>
  );
}
