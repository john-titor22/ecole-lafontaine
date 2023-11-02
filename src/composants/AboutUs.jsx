import { performance } from "./Performances";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import backgroundImage from "../Assets/performances.png";

export const AboutUs = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    minHeight: "100vh", // Ensure the background covers the entire viewport height
  };
  return (
  <section>
    <section className="bg-white max-container max-sm:mt-12 rounded-xl shadow-2xl ring-2 ring-slate-900/5 ">
      <div className="w-full bg-red-800  rounded-t-lg">
        <h2 className="font-Title text-3xl font-bold text-slate-50 p-2 text-center">
          Nos Performances (2022-2023)
        </h2>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols2 grid-cols-1 sm:gap-4 gap-14 m-4 h-[200px]">
        {performance.map((a) => (
          <div className="relative overflow-hidden justify-between flex flex-1 flex-col w-full max-sm:w-full ">
            <CircularProgressbar className="font-Nav"
              value={a.value}
              text={a.text}
              styles={buildStyles({
                textColor: "red",
                pathColor: "red",
                textSize: "14px",
                trailColor: "pink",
              })}
            />
          </div>
        ))}
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols2 grid-cols-1 sm:gap-4 m-4">
        {performance.map((a) => (
          <div>
            <h3 className="bg-white p-2 flex text-2xl justify-center font-semibold font-Title text-black mb-2">
              {a.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
    </section>
  );
};
