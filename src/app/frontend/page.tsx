'use client'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Skills from "@/components/Skill";
import { FrontendSkill } from "@/constants/frontendSkill";

function Frontend() {

    return (<main>
        <Header />
        <Skills skill={FrontendSkill} />
        <Footer />
    </main>);
}

export default Frontend;