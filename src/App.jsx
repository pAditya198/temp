import { useState } from "react";
import "./App.css";

const App = () => {
  const [burnedAxioms, setBurnedAxioms] = useState(100000000);
  return (
    <div className="font-sans antialiased h-screen bg-white">
      <header className="sticky top-0 z-30 h-[83px] backdrop-blur backdrop-filter  firefox:bg-opacity-90">
        <div className="mx-auto max-w-8xl xl:px-8">
          <div className="flex items-center justify-between border-b border-gray-800 px-4 py-5 sm:px-6 lg:px-8 xl:px-0">
            <button className="ml-auto block px-10 py-2  border border-white border-opacity-20 bg-[#55A8FD]  backdrop-blur backdrop-filter transition text-[#fff] rounded">
              Wallet
            </button>
          </div>
        </div>
      </header>

      <section
        style={{ minHeight: "calc(100vh - 83px)" }}
        className="bg-gray-900 py-10"
      >
        <div className="w-max mx-auto">
          <div className="space-y-8 mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
            <div className="flex gap-4 justify-center flex-col md:flex-row items-center border-2 border-gray-700 bg-[#F2F7FE] border-opacity-25 rounded-xl">
              <div className="text-blaxk p-8 rounded-md space-y-8">
                <p className="text-xl font-semibold">Market Cap</p>
                <div className="flex gap-8">
                  <div className="p-4 space-y-4 text-[#1f1f1f]">
                    <p>Next Rebase</p>
                    <p>13h:26m:35s</p>
                  </div>
                  <div className="p-4 space-y-4 text-[#1f1f1f]">
                    <p>Oracle Rate</p>
                    <p>$0.84</p>
                  </div>
                </div>
              </div>
              <div className="p-8 rounded-md space-y-8 text-black">
                <p className="text-xl font-semibold">Circulating supply</p>
                <div className="flex gap-8">
                  <div className="p-4 text-[#1f1f1f] space-y-4">
                    <p>Price Target</p>
                    <p>$1.184</p>
                  </div>
                  <div className="p-4 space-y-4 text-[#1f1f1f]">
                    <p>Price Target</p>
                    <p>$1.184</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mx-auto gap-4 justify-between flex-col md:flex-row ">
              <div className="space-y-4">
                <div className="p-4 border-2  border-gray-700 border-opacity-25 rounded-lg space-y-4 bg-[#F2F7FE] text-black">
                  <p className="text-xl font-semibold">My Axioms</p>
                  <p className="text-[#1f1f1f]">1.184</p>
                </div>
                <div className="p-4 border-2 border-gray-700 border-opacity-25 rounded-lg space-y-4 bg-[#F2F7FE] text-black">
                  <p className="text-xl font-semibold">My Axioms Value</p>
                  <p className="text-[#1f1f1f]">$1.184</p>
                </div>
              </div>
              <div className="border-2 rounded-lg  border-gray-700 border-opacity-25 p-4 bg-[#F2F7FE]">
                <div>
                  <p className="text-black text-xl font-semibold">
                    Circulating Supply
                  </p>
                  <h2 className="text-center">{burnedAxioms}</h2>
                </div>
                <div className="pt-10">
                  <p>Token in LP</p>
                  <p>{100000000 - burnedAxioms}</p>
                </div>
                <div className="w-[30px] h-[60px] overflow-hidden ml-auto">
                  <div
                    style={{ background: "url('/icons/fire/fire.png') no-repeat no-repeat", backgroundSize:"100%" }}
                    className="w-[180px] h-[180px] animation "
                  ></div>
                </div>
              </div>
              <div className="rounded-lg items-center flex gap-8 flex-col border-2 border-gray-700 border-opacity-25 p-4 justify-between text-white bg-[#F2F7FE]">
                <button className="w-max border-2 border-gray-700 border-opacity-25 px-6 py-4 rounded-lg rounded-tr-none rounded-bl-none bg-[#55A8FD]">
                  Get Axioms
                </button>
                <button className="w-max border-2 border-gray-700 border-opacity-25 px-6 py-4 rounded-lg rounded-tr-none rounded-bl-none bg-[#55A8FD]">
                  View Chart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-6 gap-4 w-4/5 mx-auto">
          <div className="p-2 w-10 border border-[#ABABAB] rounded-full">
            <img src="/icons/icon-twitter.svg" width={"100%"} height={"100%"} />
          </div>
          <div className="p-2 w-10 border border-[#ABABAB] rounded-full">
            <img
              src="/icons/icon-telegram.svg"
              width={"100%"}
              height={"100%"}
            />
          </div>
          <div className="p-2 w-10 border border-[#ABABAB] rounded-full">
            <img src="/icons/icon-discord.svg" width={"100%"} height={"100%"} />
          </div>
        </div>
      </section>
      <div className="fixed bottom-0 z-10">
        <div className="w-screen text-center bg-slate-200">
          Disclaimer : AXIOMS by CODETICS PRODUCTIONS SAPI de CV
        </div>
      </div>
    </div>
  );
};

export default App;
