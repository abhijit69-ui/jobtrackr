import Features from '@/components/sections/Features';
import Hero from '@/components/sections/Hero';
import HeroImages from '@/components/sections/HeroImages';

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col bg-white'>
      <main className='flex-1'>
        {/* Hero Section */}
        <Hero />
        {/* Hero Images */}
        <HeroImages />
        {/* Features Section */}
        <Features />
      </main>
    </div>
  );
}
