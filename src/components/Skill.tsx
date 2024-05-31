import Image, { StaticImageData } from "next/image";
import Title from "./Title";
import UnderLineText from "./UnderLineText";
function Skills({ skill }: {
    skill: {
        title: string,
         skills: {
            name: string,
             img: StaticImageData,
            alt: string,
            description: string
        }[],
        skillKnowledge: { name: string, percent: number }[]
    },

}) {
    return (<section className="mt-6">
     <Title title={skill.title}/>
        <div className="px-8 md:px-20 md:grid grid-cols-2 gap-4 mt-6">
            <div className="mb-14 md:mb-0">
                <UnderLineText text="Co dělám ?"/>
                {
                    skill.skills.map((skill) =>
                        <li key={skill.name} className="md:flex items-start gap-4 mt-8 mb-12">
                            <Image src={skill.img} alt={skill.alt} width={62} height={59} className="mb-3" />
                            <div>
                                <p className="text-[#fff] font-[600] mb-2">{skill.name}</p>
                                <p className="text-[#fff] opacity-30">{skill.description}</p>
                            </div>
                        </li>
                    )
                }
            </div>
            <div className=" w-full md:w-10/12 justify-self-end">             
                <UnderLineText text="Coding Skills" />
                {
                    skill.skillKnowledge.map((skill) =>
                        <li key={skill.name} className="mb-3">
                            <div className="flex items-center justify-between">
                                <p className="text-[#fff] font-[600] text-md">{skill.name}</p>
                                <p className="text-sm text-[#fff] opacity-30">{skill.percent}%</p>
                            </div>
                           
                            <label >
                                <progress max="100" value={skill.percent} className="w-full"></progress>
                            </label>
                        </li>
                    )
                }
            </div>
        </div>
    </section>);
}

export default Skills;