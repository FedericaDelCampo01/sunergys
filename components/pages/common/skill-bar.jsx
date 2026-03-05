import { useState } from "react";
import CountUp from 'react-countup';
import ScrollTrigger from "react-scroll-trigger";
import ReactSkillBar from 'react-skillbars';

const SkillBarItem = ({countUp}) => {
    const [skillBar, setSkillBar] = useState(false);
    const skillLevel = [
        { type: 'one', level: countUp }
    ];
    const colors = {
        bar: '#F95E19', // Naranja de la marca
        title: {
            text: '#FFFFFF',
            background: 'transparent'
        }
    };
    return (
        <>
            <ScrollTrigger onEnter={()=> setSkillBar(true)} onExit={()=> setSkillBar(false)}>
                <div className="skill__area-item-inner">
                    {skillBar && <ReactSkillBar skills={skillLevel} height={6} colors={colors} animationDuration={2000} />}
                    <span className="skill__area-item-count">
                        <span>{skillBar && <CountUp start={0} end={countUp} duration={4} delay={1}></CountUp>}</span>%
                    </span>
                </div>
            </ScrollTrigger>
        </>
    );
};

export default SkillBarItem;