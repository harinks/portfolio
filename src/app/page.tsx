import { getProfileData } from '@/lib/data';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Blog from '@/components/sections/Blog';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

export default function Home() {
  const data = getProfileData();

  return (
    <main className="min-h-screen">
      <Header />
      <Hero personal={data.personal} />
      <About personal={data.personal} skills={data.skills} />
      <Experience experience={data.experience} education={data.education} />
      <Projects projects={data.projects} />
      <Blog blogPosts={data.blog} />
      <Contact personal={data.personal} />
      <Footer personal={data.personal} />
    </main>
  );
}
