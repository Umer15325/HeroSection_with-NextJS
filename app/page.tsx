import Image from "next/image";

import govn from "./govn.png"


export default function Home() {
  return (
    <div className="bg-white text-black  flex gap-36">
    <section className="bg-white h-screen ml-32 inline-block">
      <br /> <br /> <br />
      <h1 className="text-blue-900 font-extrabold text-4xl">Governer Sindh</h1>
      <h2 className="text-blue-900 text-2xl">Kamran Khan Tessori</h2>
      <br />
      <h3 className="text-blue-500 font-extrabold text-2xl">Certified Cloud <br /> Applied Generative AI <br />Engineer(GenEng)</h3>
      <br />
      <p className="text-blue-900 font-extrabold">Earn up to $5,000 / month</p>
      <br />
      <p className="text-blue-900 font-extrabold">New admissions are open in <br />Hyderabad</p>
      <br />

      <div className="flex">
      <button className="bg-blue-900 text-white w-40 h-10 text-sm rounded-sm mr-20 font-bold">APPLY NOW</button>
      
      <button className="text-blue-900 font-extrabold text-xl leading-4">562,143 <br /><span className="text-sm font-normal "> Accepted Applications </span></button>
      </div>
      </section>

      <section> 
        <br /><br />
        <Image src={govn} alt="picture" width={600} className=""/>
      </section>
    </div>

  );
}
