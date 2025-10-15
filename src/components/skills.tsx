import { Tab, Tabs } from '@heroui/react'
import { BackEndSkills, ExtraSKills, FrontEndSkills } from '@/data/skils/skills'

export default function SkillsCard() {
    return (
        <div className="col-span-1 bg-[#0000009a] text-white flex p-4 rounded-xl gap-2 flex-col items-center justify-center">
            <p className="font-bold text-2xl">Habilidades</p>
            <Tabs fullWidth aria-label="Tecnologias" className="w-full h-full" variant="underlined" color="success">
                <Tab key="frontend" title="Frontend">
                    <div className="w-full h-full grid grid-cols-3 gap-4">

                        {
                            FrontEndSkills.map((skill, index) => (
                                <div key={index}>
                                    {skill.icon}
                                    <p className="text-center text-sm">{skill.name}</p>
                                </div>
                            ))
                        }
                    </div>
                </Tab>
                <Tab key="backend" title="Backend">
                    <div className="w-full h-full grid grid-cols-3 gap-4">
                        {
                            BackEndSkills.map((skill, index) => (
                                <div key={index}>
                                    {skill.icon}
                                    <p className="text-center text-sm">{skill.name}</p>
                                </div>
                            ))
                        }
                    </div>
                </Tab>
                <Tab key="otras" title="Otras">
                    <div className="w-full h-full grid grid-cols-3 gap-4">
                        {
                            ExtraSKills.map((skill, index) => (
                                <div key={index}>
                                    {skill.icon}
                                    <p className="text-center text-sm">{skill.name}</p>
                                </div>
                            ))
                        }
                    </div>
                </Tab>
            </Tabs>
        </div>
    )
}
