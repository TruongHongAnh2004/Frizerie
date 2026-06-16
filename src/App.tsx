import "./App.css";
import intro from "./assets/intro.png";
import about from "./assets/about.png";
import team1 from "./assets/team1.png";
import team2 from "./assets/team2.png";
import team3 from "./assets/team3.png";
import team4 from "./assets/team4.png";

function App() {
  return (
    <>
      <div
        className="flex justify-center bg-[linear-gradient(rgba(90,106,140,0.9),rgba(90,106,140,0.9)),url(https://ngetemplates.com/frizerie/img/bg-intro.png)] bg-center
    bg-cover py-30"
      >
        <div className="w-330">
          <div className="w-full px-3 mx-auto">
            <div className="flex items-center space-y-12 box-border">
              <div className="px-6 ">
                <img src={intro} alt="intro" />
              </div>

              <div className="px-6">
                <div className="">
                  <h1 className="mb-7.5 font-serif text-5xl text-gray-50 font-bold leading-16 -left-1 box-border">
                    Professional And Experienced Barbershop
                  </h1>
                  <p className="font-sans text-lg my-1.5 text-gray-200 tracking-wider leading-7 mr-[35%] ">
                    Lorem ipsum, dolor sit amet consectetur, adipisicing elit.
                    Assumenda, provident ratione quidem iste consequuntur,
                    error, nam saepe unde odit molestiae repellat.
                  </p>
                  <button className="mt-7.5 py-3 px-7.5 text-sm border text-white bg-slate-600 font-bold">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* *****2*** */}
      <div className="flex justify-center bg-black h-176">
        <div className="flex w-330">
          <div className="px-6 mt-12 w-160">
            <p className="text-slate-600 font-serif font-bold text-3xl pb-4">
              We are certified barbers who have been established ten years ago
            </p>

            <div className="pt-4 pl-25">
              <p className="font-sans my-1.5 text-gray-200 tracking-wider leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                eius autem illum aliquam repellendus voluptatibus officia id
                magni corporis neque repellat, beatae.
              </p>

              <p className="font-sans my-1.5 text-gray-200 tracking-wider leading-7">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quaerat iusto, et officia commodi minus nobis illum, similique
                quas officiis, at provident voluptate nisi libero, repudiandae
              </p>

              <button className="mt-7.5 py-3 px-7.5 text-sm border text-white bg-slate-600 font-bold">
                Contact us
              </button>
            </div>
          </div>

          <div className="mt-12 px-6 ">
            <div className="relative px-15">
              <img src={about} alt="about" />
              <div className="bg-slate-600 p-6 w-75 rounded-sm absolute -mt-41 -left-5.5">
                <p className="text-gray-50 my-1 leading-7 tracking-wider">
                  Lore dolor sit amet consectetur adipisicing elit. Corporis
                  corrupti dignissimos neque tempore
                </p>
                <span className="text-gray-50 mt-3 border-t-3 border-white font-bold  pt-2.5 inline-block">
                  John Doe | CEO
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ****3***** */}
      <div className="flex justify-center bg-black">
        <div className="flex items-center justify-center w-300">
          <div>
            <p className="font-sans text-gray-200 text-xl text-center">
              Our Team
            </p>
            <p className="text-slate-600 font-serif font-bold text-4xl pb-10 text-center">
              Our Professional Team
            </p>

            <div className="flex">
              <div className="mt-12 px-6">
                <div className="pb-6">
                  <img src={team1} alt="team 1" />
                  <div className="bg-slate-600 pb-4 rounded-b-sm">
                    <h5 className="text-xl font-sans font-bold text-gray-200 text-center">
                      John Doe
                    </h5>
                  </div>
                </div>
              </div>

              <div className="mt-12 px-6">
                <div className="pb-6">
                  <img src={team2} alt="team 2" />
                  <div className="bg-slate-600 pb-4 rounded-b-sm">
                    <h5 className="text-xl font-sans font-bold text-gray-200 text-center">
                      Jeff Reine
                    </h5>
                  </div>
                </div>
              </div>

              <div className="mt-12 px-6">
                <div className="pb-6">
                  <img src={team3} alt="team 3" />
                  <div className="bg-slate-600 pb-4 rounded-b-sm">
                    <h5 className="text-xl font-sans font-bold text-gray-200 text-center">
                      Jude B.
                    </h5>
                  </div>
                </div>
              </div>

              <div className="mt-12 px-6">
                <div className="pb-6">
                  <img src={team4} alt="team 4" />
                  <div className="bg-slate-600 pb-4 rounded-b-sm">
                    <h5 className="text-xl font-sans font-bold text-gray-200 text-center">
                      Kimpembe
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ***4**** */}
      <div className="flex justify-center bg-black">
        <div className="flex justify-center w-300">
          <div className="mt-12 px-6 w-140">
            <p className="text-slate-600 font-serif font-bold text-4xl pb-10 text-left">
              Our Pricing Plans
            </p>

            <p className="font-sans my-1.5 text-gray-200 tracking-wider leading-7">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
              dicta, corporis culpa numquam iste voluptatem corrupti unde
              necessitatibus labore aliquam, aspernatur et quibusdam
            </p>

            <button className="mt-7.5 py-3 px-7.5 text-sm border text-white bg-slate-600 font-bold">
              Get Started
            </button>
          </div>

          <div className="flex flex-col justify-center text-gray-200 bg-slate-600 rounded-sm px-6 mt-12 mx-6 w-98">
            <div className="p-6 text-center">
              <p className="font-bold text-xl">Haircut</p>
              <p className="font-bold text-4xl pb-4">$10</p>
              <p className="text-lg py-2">Choose Models</p>
              <p className="text-lg py-2">Free Shampoo</p>
              <p className="text-lg py-2">Wifi</p>
              <p className="text-lg py-2">Free Drink</p>
              <p className="text-lg py-2">And more</p>
            </div>
          </div>

          <div className="flex flex-col justify-center text-gray-200  bg-slate-600 p-6 rounded-sm px-6 mt-12 mx-6 w-98">
            <div className="p-6 text-center">
              <p className="font-bold text-xl">Haircut + Message</p>
              <p className="font-bold text-4xl pb-4">$15</p>
              <p className="text-lg py-2">Choose Models</p>
              <p className="text-lg py-2">Free Shampoo</p>
              <p className="text-lg py-2">Wifi</p>
              <p className="text-lg py-2">Free Drink</p>
              <p className="text-lg py-2">And more</p>
            </div>
          </div>
        </div>
      </div>
      {/* ***5*** */}
      <div className="flex justify-center bg-black">
        <div className="flex items-center justify-center w-300">
          <div>
            <p className="font-sans text-gray-200 text-xl text-center">
              Gallery
            </p>
            <p className="text-slate-600 font-serif font-bold text-4xl pb-10 text-center">
              Our Gallery Latest Work
            </p>
          </div>

          <div>IMAGE</div>
        </div>
      </div>
      {/* ***6*** */}
      <div className="flex justify-center bg-black">
        <div className="flex items-center justify-center w-300">
          <div className="w-157">
            <p className="font-sans my-1.5 text-gray-200 tracking-wider leading-7">
              Lorem ipsum, dolor sit amet consectetur, adipisicing elit.
              Voluptas quis vel asperiores incidunt illum placeat ab, ex iste
              reprehenderit ipsa commodi reicien ipsum, dolor sit amet
              consectetur, adipisicing elit. Voluptas quis vel asperiores
              incidunt illum Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Sequi quod culpa placeat accusamus nemo soluta minima
              assumenda voluptatem nisi architecto tempore facilis aut inventore
              sunt dolorum aperiam voluptatum, quae! Aliquid.
            </p>
            <p className="text-xl font-bold text-gray-200 leading-8">
              John Doe
            </p>
            <span className="text-sm font-bold text-gray-400">Directur</span>
          </div>
          <p></p>
        </div>
      </div>
      {/* ***END**** */}
      <div></div>
    </>
  );
}

export default App;
