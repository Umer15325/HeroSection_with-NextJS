import mail from "./gmail.png"
import Image from "next/image"
import fb from "./fb.png"
import yt from "./yt.png"
import insta from "./insta.png"
import tiktok from "./tiktok.png"
import twitter from "./twitter.png"

function Footer() {
  return (
    <div className="flex bg-white h-52 text-black justify-evenly">
        <section className=" text-sm">
            <ul>
                <li className="font-bold">Core Courses</li>  <br /> 
                <li>Programming Fundamentals</li>
                <li>Web2 Using NextJS</li>
                <li>Earn As You Learn</li>
            </ul>
        </section>

        <section className=" text-sm">
            <ul>
                <li className="font-bold">Advanced Courses</li>   <br />
                <li>Web 3 and Metaverse</li>
                <li>Cloud Native-Computing</li>
                <li>Artificial Intelligence (AI) and Deep Learning</li>
                <li>Ambient Computing and IoT</li>
                <li>Genomics and Bioinformatics</li>
                <li>Network Programmability and Automation</li>
            </ul>
        </section>

        <section className="text-sm">
            <ul>
                <li className="font-bold">Social Links</li> <br />

                <li className="flex">
                  <Image src={fb} alt="fb" width={30}/>
                  <Image src={yt} alt="yt" width={30}/>
                  <Image src={twitter} alt="twitter" width={30}/>
                  <Image src={insta} alt="insta" width={30}/>
                  <Image src={tiktok} alt="tiktok" width={30}/>
                </li> <br />

                <li className="flex">
                  <Image src={mail} alt="mail" width={20} />
                  education@governersindh.com
                </li>
            </ul>
        </section>
    </div>
  )
}

export default Footer