import Marquee from "../marquee";
import { cn } from "@/lib/utils/classes";

const reviews = [
  {
    name: "Alysa",
    username: "",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/images/alysa-lambert.png",
  },
  {
    name: "Kevin",
    username: "",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "/images/kevin-lynch.png",
  },
  // {
  //   name: "Shelly",
  //   username: "",
  //   body: "I'm at a loss for words. This is amazing. I love it.",
  //   img: "/images/shelly.png",
  // },
  {
    name: "Caryle",
    username: "",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/images/caryle.jpg",
  },
  // {
  //   name: "Jenny",
  //   username: "@jenny",
  //   body: "I'm at a loss for words. This is amazing. I love it.",
  //   img: "https://avatar.vercel.sh/jenny",
  // },
  // {
  //   name: "James",
  //   username: "@james",
  //   body: "I'm at a loss for words. This is amazing. I love it.",
  //   img: "https://avatar.vercel.sh/james",
  // },
];
const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);


const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15] ",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        {/* <img className="rounded-full" width="32" height="32" alt="" src={img} /> */}
        <img
      src={img}
      width={32}
      height={32}
      className="rounded-full"
      alt=""
    />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default async function Testimonials() {

  return (
    <section id="testimonials" className="container py-10">
      <h2 className="mb-4 text-center text-5xl font-bold leading-[1.2] tracking-tighter text-foreground">
        What People Are Saying
      </h2>
      <h3 className="mx-auto mb-8 max-w-lg text-balance text-center text-lg font-medium tracking-tight text-foreground/80">
        Don&apos;t just take our word for it. Here&apos;s what{" "}
        <span className="bg-gradient bg-clip-text text-transparent">real people</span> are saying about <span className="text-purple-600 from-fg-onAccent">Building Better Worlds of Work</span>.
      </h3>
      <div className="relative flex flex-col">
        <Marquee className="max-w-screen [--duration:10s]" pauseOnHover>
          {firstRow.map((review,idx) => (
            <>
            <ReviewCard key={idx} {...review} />
            </>
          ))}
        </Marquee>
        <Marquee
          className="max-w-screen [--duration:10s]"
          reverse
          pauseOnHover
        >
          {secondRow.map((review,idx) => (
            <ReviewCard key={idx} {...review} />
            // <TweetCard id={} className="max-h-32 w-72 min-w-72" key={idx} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 h-full  w-1/3 bg-gradient-to-l from-background"></div>
      </div>
    </section>
  );
}
