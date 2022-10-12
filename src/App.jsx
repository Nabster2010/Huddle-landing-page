import React from "react";
import "./App.css";
import Card from "./components/Card";
import CTA from "./components/CTA";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const data = [
  {
    src: "/images/illustration-grow-together.svg",
    heading: "Grow Together",
    text: "Generate meaningful discussions with your audience and build strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.",
  },
  {
    src: "/images/illustration-flowing-conversation.svg",
    heading: "Flowing Conversations",
    text: "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
  },
  {
    src: "/images/illustration-your-users.svg",
    heading: "Your Users",
    text: "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
  },
];

function App() {
  return (
    <div className="min-h-screen w-full ">
      <div className="bg-VeryPaleCyan bg-[url('/images/bg-hero-mobile.svg')] md:bg-[url('../public/images/bg-hero-desktop.svg')] bg-no-repeat bg-contain ">
        <Header />
        <Hero />
      </div>
      <main className="pt-24 bg-gray-50 ">
        <section className="space-y-32 md:space-y-6 px-4 md:p-8 lg:px-16">
          {data.map((item) => (
            <Card key={item.src} item={item} />
          ))}
        </section>
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
