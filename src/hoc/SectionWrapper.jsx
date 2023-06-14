import React from 'react'
import {motion } from 'framer-motion'
import { styles } from '../styles'
import { staggerContainer } from '../utils/motion'
const SectionWrapper = (Component,idName) => function HOC ()
{
    return(
        <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{once:true, amount:0.25}}
            className={`${styles.padding} max-w-[90rem] mx-auto relative z-0`}>
            <Component/>
        </motion.section>
    )
}



export default SectionWrapper