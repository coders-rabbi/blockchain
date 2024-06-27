import React from "react";
import "../../imgSource/Image.css";
import phnImg from "../../assets/images/phone.png";

const Statistics = () => {
  return (
    <div className="max-w-screen-2xl mx-auto grid grid-cols-2 items-center">
      <div>
        <h4 className="text-xl text-[#ffba00] mb-16">Top-5 Cryptocurrencies</h4>
        <h2 className="text-5xl mb-4 text-[#c3c9d4]">
          Statistics of currencies
        </h2>
        <h2 className="text-5xl font-semibold mb-10 text-[#c3c9d4]">
          On all your Devies <span className="text-[#ffba00]">.</span>
        </h2>
        <p className="text-[25px] text-[#c3c9d4] mb-8">
          Investigationes demonstraverunt lectores legere elementum <br />{" "}
          pulvinar etiam non quam lacus suspendisse risus nec feugiat in <br />{" "}
          fermentum laoreet sit amet cursus quam adipiscing vitae proin <br />{" "}
          sagittis.
        </p>
        <p className="text-[#c3c9d4] text-[18px] mb-14">
          Investigationes demonstraverunt lectores legere me lius quod ii legunt
          saepius. <br /> Claritas est etiam processus dynamicus, qui sequitur
          mutationem consuetudium <br /> lectorum. Mirum est notare quam littera
          gothica, quam nunc putamus parum claram, <br /> anteposuerit
          litterarum formas humanitatis per laoreet sit amet cursus seacula qui{" "}
          <br /> mutationem consuetudium claritas est etiam processus dynamicus.
        </p>
        <button className=" bg-transparent outline outline-white px-6 py-2 rounded-full text-white text-2xl font-semibold hover:bg-[#FF9A00] hover:outline-none">
          Download
        </button>
      </div>
      <div>
        <img className="h-[75vh]" src={phnImg} alt="" />
      </div>
    </div>
  );
};

export default Statistics;
