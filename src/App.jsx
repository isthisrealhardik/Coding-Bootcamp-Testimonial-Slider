import { useState } from "react"

function App() {
  let testimonials = [
    {
      image: '/public/images/image-tanya.jpg',
      name: 'Tanya Sinclair',
      position: 'UX Engineer',
      testimonial: "I've been interested in coding for a while but never taken the jump, untill now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future",
    },
    {
      image: '/public/images/image-john.jpg',
      name: 'John Tarkpor',
      position: 'Jr Front-end Developer',
      testimonial: "If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting as a professional developer",
    },
    {
      image: "/images/one.jpg",
      name: 'Kapoor Vastav',
      position: 'Backend Engineer',
      testimonial: 'I could not have made it this far without this bootcamp. I came into the is bootcamp with some basic front end skills and emerged fully equipped to market myself as a Full Stack Developer.',
    },
    {
      image: '/images/two.jpg',
      name: 'Birdi Rastav',
      position: 'Full Stack Developer',
      testimonial: "I chose to attend the program to open career opportunities that were otherwise unavailable to me. It was the quickest and most economical way to shift my career trajectory.",
    },
    {
      image: '/images/third.jpg',
      name: 'More Pontiwala',
      position: 'DevOps Dev',
      testimonial: 'loved the enviroment they presented, it challenged us and made us think to the core. i wish i could redo the program but i am extremely grateful about it.',
    }
  ]

  let [Change, setChange] = useState(0);
  let length = testimonials.length - 1;
  // console.log(Change;
  // console.log(length);

  let nextOne = () => {
    setChange(Change == length ? 0 : Change + 1);
  }

  let prevOne = () => {
    setChange(Change == 0 ? length : Change - 1);
  }

  return (
    <div className="py-6 px-6 font-Inter text-main bg-white w-screen h-screen flex flex-col justify-center items-center text-dark-blue">
      <img className="absolute top-12 left-5 w-[90%]" src="/public/images/pattern-bg.svg" alt="Background Pattrn" />
      <img className="absolute object-cover rounded-lg shadow-xl w-72 h-72 top-20 left-[60px]" src={testimonials[Change].image} alt={testimonials[Change].name} />
      <div className="flex absolute top-[350px]">
        <button onClick={prevOne} className="p-4 shadow-lg bg-white rounded-tl-full rounded-bl-full hover:bg-dark-blue transition">
          <img src="/images/icon-prev.svg" alt="Icon Prev" />
        </button>
        <button onClick={nextOne} className="p-4 shadow-lg bg-white hover:bg-dark-blue transition rounded-tr-full rounded-br-full">
          <img src="/images/icon-next.svg" alt="Icon Next" />
        </button>
      </div>
      <img className="absolute top-[450px] w-[15%]" src="/images/pattern-quotes.svg" alt="Pattern Quotes" />
      <div className="flex flex-col justify-center items-center absolute top-[460px]">
        <p className="text-2xl px-6 text-center font-light">{`"${testimonials[Change].testimonial}"`}</p>
        <h2 className="font-bold text-2xl mt-6 z-30">{testimonials[Change].name}</h2>
        <h3 className="font-medium text-grayish-blue text-xl z-30 mt-1">{testimonials[Change].position}</h3>
      </div>
      <img className="absolute top-[95%] left-0 z-0 w-52" src="/images/pattern-curve.svg" alt="Curve" />
    </div>
  )
}

export default App
