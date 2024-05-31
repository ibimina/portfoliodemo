'use client'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Skills from "@/components/Skill";
import { BackendSkill } from "@/constants/backendSkill";

function Backend() {

    return (<main>
        <Header />
        <Skills skill={BackendSkill} />
        <Footer/>
    </main>);
}

export default Backend;