import { Tilt } from "react-tilt";
import { motion, spring } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, card, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 54,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className="w-full h-full object-cover"/>

        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div onClick={()=>{
            window.open(source_code_link,"_blank")
          }} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
            <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
          </div>
        </div>
        </div>
<div className="mt-5 ">
  <h3 className="text-white text-[24px] font-bold">{name}</h3>
  <p className="mt-2 text-secondary text-[14px]">{description}</p>
</div>
<div className="mt-4 flex flex-wrap gap-4">
  {tags.map((tag)=>(
    <p key={tag.name} className={`text-[14px] ${tag.color}`}>
      #{tag.name}
    </p>
  ))}

</div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p

          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[20px] max-w-3xl leading-[30px]"
        >
          In crafting these websites, I've embraced technologies like HTML5, CSS3, JavaScript, and incorporated responsive design principles. The projects represent not just digital entities but a reflection of my commitment to delivering engaging, functional, and meaningful online experiences. Dive into the digital landscapes I've created and witness the convergence of design and innovation.
        </motion.p>

      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`}
            index={index}
            {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "")