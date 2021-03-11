import { Slider } from "../components/Slider";

export default function Home() {
  return (
    <div>
      <h1>Hello Swiper!</h1>
      <Slider>
        {Array(6)
          .fill(null)
          .map((_, i) => (
            <div key={i} className={"box"}>
              Slide {i}
            </div>
          ))}
      </Slider>
    </div>
  );
}
