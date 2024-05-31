'use client'
import Header from "@/components/Header";
import Title from "@/components/Title";
import UnderLineText from "@/components/UnderLineText";
import Image from "next/image";
import mock from '@/assets/mock.png'
import Footer from "@/components/Footer";

function Portfolio() {
    return (
        <main>
            <Header />
            <Title title="Portfolio" />
            <section className="px-8 md:px-20 my-4">
                <UnderLineText text="Klienti" />
                <ul className="flex flex-col items-end md:flex-row md:items-center justify-end md:justify-center gap-4 text-[#fff]">
                    <li>DevRos</li>
                    <li>Cukrárna Merkur</li>
                    <li>Pekárna Merkur</li>
                    <li>Místo pro tvoji firmu</li>
                </ul>
                <div className="mt-4">
                    <UnderLineText text="Galerie" />
                    <ul className="flex flex-col  md:flex-row md:items-center gap-4 text-[#fff] opacity-25 mb-3 md:mb-6">
                        <li>All</li>
                        <li>Web</li>
                        <li>Komponenty</li>
                        <li>Animace</li>
                        <li>Mockups</li>
                    </ul>
                    <Image src={mock} width={500} height={400} alt="mock"/>
                </div>

            </section>
            <Footer/>
        </main>);
}

export default Portfolio;