import Image from "next/image";
import Ellipse from '@/assets/Ellipse.png'
function Section() {
    return (
        <section className="my-4 mt-12 px-6 pb-8 lg:flex lg:flex-row flex-col items-center justify-center gap-12 lg:w-[950px] mx-auto lg:min-h-[70vh] lg:my-0">
        {/* <div className=" mx-auto"> */}
                <Image src={Ellipse} alt="elispis" width={300} height={491} className="mb-6 mx-auto" />
        {/* </div> */}
        
        <div>
            <h2 className="mb-2 text-[#fff] opacity-25">Full Stack Developer</h2>
            <p className="text-[#fff] font-[900] text-3xl mb-3">DevRos</p>
            <p className="text-[#fff] opacity-30 mb-4">Potřebujete vytvořit webové stránky ? Při tvorbě webových stránek zajišťuji celkový design od návrhu až po realizaci. Perfektní technickou stránku zajistišťuji též, aby všechno běželo přesně jak má. Kdyby by Vás mé portofilo přípradně zkušenosti zaujaly - napište mi !
            </p>
            <div className="flex items-center gap-3 mt-3">
                <button className="border-2 border-[#ffff] text-[#fff] py-2 px-6 rounded-3xl">Portfolio</button>
                <button className="border-2 border-[#ffff] text-[#fff] py-2 px-6 rounded-3xl">Kontakt</button>
            </div>
        </div>
    </section>);
}

export default Section;