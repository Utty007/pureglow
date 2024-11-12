/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

type testimonial = { testimony: string, author: string}

export default function Home() {
  const Testimonies: testimonial[] = [
  {
    testimony: "I’ve struggled with acne for years, and this guide was a game-changer! The natural remedies were so simple yet effective. I started seeing results within weeks.",
    author: "Sophie L."
  },
  {
    testimony: "I love how this guide breaks down natural skincare in an easy-to-follow way. My skin feels smoother, and I’m more confident without makeup now!",
    author: "Raj P."
  },
  {
    testimony: "I was skeptical at first, but the guide really delivered! My breakouts have reduced, and my skin tone looks more even. Highly recommend it for anyone looking for a gentler approach!",
    author: "Carmen M."
  },
  {
    testimony: "Finally, a guide that actually worked for my sensitive skin. No more redness or harsh chemicals, just clear, glowing skin. Thank you!",
    author: "Jordan T."
  },
  {
    testimony: "This guide taught me so much about taking care of my skin naturally. The tips on reducing acne scars were especially helpful!",
    author: "Aisha K."
  },
  {
    testimony: "I’ve tried so many products, but nothing compares to the simplicity and effectiveness of this guide. My skin feels healthier, and I’m thrilled with the results!",
    author: "Michael R."
  }
];

  return (
    <main>
      <div className="h-[80vh]">
        <div className="flex items-center justify-center h-full flex-col p-8">
          <h3>Discover Natural Acne Solutions.</h3>
          <p className="mt-2 mb-10">Learn Proven, Science-Backed Remedies to Treat Acne Without Harsh Chemicals!</p>
          <Link href="#Contact" className="bg-black text-white px-4 py-1">Signup To Get The Guide!</Link>
        </div>
      </div>
      <div className="bg-black text-white p-5">
        <h2>What's Inside the Guide?!</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-5">
          <div className="bg-white flex flex-col justify-between text-black min-h-[100px] rounded-md py-2 pr-2 pl-3">
            <h4 className="mb-2 text-xl font-bold">Natural Remedies</h4>
            <p>Discover natural remedies for clearer skin focus on gentle, holistic approaches that aim to improve skin health without harsh chemicals.</p>
          </div>
          <div className="bg-white flex flex-col justify-between text-black min-h-[100px] rounded-md py-2 pr-2 pl-3">
            <h4 className="mb-2 text-xl font-bold">Simple, Affordable routine!</h4>
            <p>Focus on achieving healthy skin without high costs, using accessible products and simple steps.</p>
          </div>
          <div className="bg-white flex flex-col justify-between text-black min-h-[100px] rounded-md py-2 pr-2 pl-3">
            <h4 className="mb-2 text-xl font-bold">Common Mistakes</h4>
            <p>Avoiding common skincare mistakes can make a significant difference in achieving healthy, clear skin.</p>
          </div>
        </div>

        <Link href="#Contact" className="bg-white text-black p-3 block w-[300px] underline mx-auto mt-10 text-center">Get Instant Access to Clear Skin Tips!</Link>
      </div>
       {/* <div className="klaviyo-form-UzQDTD" id="Contact"></div> */}
      <div className="p-5">
        <h2>Testimonials</h2>
        <p>Here's what people have to say about the guide!</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 mt-7">
           {Testimonies.map((testimony, index) => {
            return (<div className="bg-black p-2 text-white rounded-md flex flex-col justify-between" key={index}>              
              <p>{testimony.testimony}</p>
              <div className="flex items-center justify-between mt-3"><span>★ ★ ★ ★ ★</span> <span>— {testimony.author}</span></div>
            </div>)
          })}
       </div>
      </div>
    </main>
  );
}
