import { connectMetaMask } from "@/utils/metamaskConnect";
import Image from "next/image";
import metaMaskIcon from "@/assets/icons/metamask.svg";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { metamaskBoxCloseHandlar } from "@/features/MetamaskBox/metaMaskBoxSlice";

export default function MetamaskBox() {
  const dispatch = useDispatch();
  return (
    <section className="fixed z-30 bg-[#F5F7FB] top-0 left-0 h-screen w-screen flex justify-center items-center">
      <span
        onClick={() => {
          dispatch(metamaskBoxCloseHandlar());
        }}
        className="sm:text-4xl text-2xl cursor-pointer absolute right-5 top-5"
      >
        <IoClose></IoClose>
      </span>
      <div className="bg-white shadow-sm shadow-black/10 w-4/5 rounded-lg p-5 items-start flex flex-col gap-y-2">
        <div className="mb-2">
          <h1 className="font-bold text-lg">Connect Wallet</h1>
          <p>Choose how you want to connect wallet</p>
        </div>

        <h3 className="text-sm text-slate-400">Popular</h3>
        <div
          onClick={() => {
            connectMetaMask().then((account) => {
              dispatch(metamaskBoxCloseHandlar());
              alert('connection successfull' + account)
            });
          }}
          className={`flex gap-x-2 flex-grow border-2 w-full p-3 bg-[#F5F7FB]  border-black/10 items-center justify-between cursor-pointer hover:bg-slate-200 rounded-md duration-150`}
        >
          <Image
            src={metaMaskIcon}
            alt="Metamask-icon"
            className="w-7 h-7 cursor-pointer object-cover"
          ></Image>

          <h1 className={`text-lg font-bold `}>Connect</h1>
        </div>
      </div>
    </section>
  );
}
