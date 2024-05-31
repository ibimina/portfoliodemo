'use client'
import Header from "@/components/Header";
import Title from "@/components/Title";
import map from '@/assets/map.png'
import loctaion from '@/assets/location.png'
import phone from '@/assets/phone.png'
import message from '@/assets/message.png'
import Image from "next/image";
import UnderLineText from "@/components/UnderLineText";
import Footer from "@/components/Footer";
function Kontakt() {
    return (
        <main>
            <Header />
            <Title title="Kontakt" />
            <section className="px-8 md:px-20 my-6">
                <Image src={map} width={900} height={200} alt="map" className="w-full mb-6" />
                <div className="md:grid grid-cols-3 gap-2">
                    <div>
                        <li className="md:flex items-start gap-4 mt-2 mb-4">
                            <Image src={phone} alt={'phone'} width={62} height={59} className="mb-2" />
                            <div>
                                <p className="text-[#fff] font-[600] mb-2">720 244 551 -2</p>
                                <p className="text-[#fff] opacity-30">Fahradit klasický smysluplný text vhodnou bezvýznamovo</p>
                            </div>
                        </li>
                        <li className="md:flex items-start gap-4 mt-6 mb-4">
                            <Image src={loctaion} alt={'location'} width={62} height={59} className="mb-2" />
                            <div>
                                <p className="text-[#fff] font-[600] mb-2">Česká Republika</p>
                                <p className="text-[#fff] opacity-30">Fahradit klasický smysluplný text vhodnou bezvýznamovo</p>
                            </div>
                        </li>
                        <li className="md:flex items-start gap-4 mt-6 mb-4">
                            <Image src={message} alt={'message'} width={62} height={59} className="mb-2" />
                            <div>
                                <p className="text-[#fff] font-[600] mb-2">fiktivni@gmail.com</p>
                                <p className="text-[#fff] opacity-30">Fahradit klasický smysluplný text vhodnou bezvýznamovo</p>
                            </div>
                        </li>
                    </div>
                    <form className="w-full col-span-2">
                        <UnderLineText text="Kontaktuj mě !" />
                        <div className="md:grid grid-cols-2 gap-4">
                            <div>
                                <label className="mb-6 block w-full">
                                    <input type="text" placeholder="Jméno a přijmení" className="bg-inherit border-2 border-[#555555] block rounded-lg p-2  w-full" />
                                </label>
                                <label className="mb-6 block">
                                    <input type="email" placeholder="Email" className="bg-inherit border-2 border-[#555555] block rounded-lg p-2  w-full" />
                                </label>
                                <label className="mb-6 block">
                                    <input type="text" placeholder="Spolupráce" className="bg-inherit border-2 border-[#555555] block rounded-lg p-2  w-full" />
                                </label>
                            </div>

                            <textarea placeholder="Zpráva..." cols={30} rows={10} className="bg-inherit border-2 border-[#555555]  block rounded-xl p-2  w-full"></textarea>

                        </div>
                        <input type="submit" value="Odeslat" className="mt-4 py-2 px-6 md:mt-0 rounded-[50px] bg-[#333333] text-[#fff] border-2 border-[#007CED]" />
                    </form>
                </div>

            </section>
            <Footer/>
        </main>
    );
}

export default Kontakt;