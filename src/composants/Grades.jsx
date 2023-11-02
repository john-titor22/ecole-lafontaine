import { fournitures } from '../composants/Pdfs';

export const Grades = () => {
  return (
    <section className="bg-white max-container max-sm:mt-12 rounded-xl shadow-2xl ring-2 ring-slate-900/5 ">
      <div className="w-full bg-red-800  rounded-t-lg ">
        <h2 className="font-Title text-3xl font-bold text-slate-50 p-2 text-center">
          Fourniture Scolaire 2023-2024
        </h2>
      </div>  
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols2 grid-cols-1 sm:gap-4 gap-14 m-4 ">
        {fournitures.map((a) => (
          <div className=" relative overflow-hidden justify-between flex flex-1 flex-col w-full max-sm:w-full ring-2 ring-red-200">
            <img src={a.imgURL} alt="test" />
            <div className="absolute h-full w-full bg-red-400/20 flex flex-col justify-center m-auto -bottom-10 hover:bottom-0 opacity-0 hover:opacity-100 transition-all duration-500">
              {a.grade.map((sub) => (
                <a
                  href={sub.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-red-800 hover:bg-red-400 text-white font-Nav py-2 px-4 border-b-4 border-white hover:border-white text-center "
                >
                  {sub.niveau}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols2 grid-cols-1 sm:gap-4 m-4">
        {fournitures.map((a) => (
          <div>
            <h3 className="bg-red-800 p-2 flex text-xl justify-center font-Nav text-white mb-2">
              {a.name}
            </h3>
          </div>
        ))}
      </div> */}
    </section>
  );
};
