import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <main style={{ padding: '50px', textAlign: 'center' }}>
        <h1>PredictPro - Professional Prediction Platform</h1>
        <p>Get accurate predictions for Apple, Aviator, Gems, Crash, and Sure Odds</p>
      </main>
      <Footer />
    </div>
  );
}
