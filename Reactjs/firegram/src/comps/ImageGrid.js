import React from 'react'
import useFirestore from '../hooks/useFirestore'
import {motion} from 'framer-motion'
const ImageGrid = ({setSelectedImage}) =>{
    const {docs} = useFirestore('images');
    return (
        <div className="img-grid">
            {docs && docs.map(doc => {
                return (<motion.div className="img-wrap" key={doc.id}
                        layout
                        whileHover={{opacity:1}}>
                    <motion.img initial={{opacity:0}} animate={{opacity: 1}} transition={{delay:1}} onClick={()=> setSelectedImage(doc.url)}
                    src={doc.url} alt="uploaded pic"/>
                </motion.div>)
            })}
        </div>
    )
}

export default ImageGrid