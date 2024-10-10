import { api_text } from "../../constants/api";
import React from "react"
import { motion } from "framer-motion"
import styles from "../../constants/style"
function Type() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className={`text-center basis-full mb-5 ${styles.title}`}>Types</div>
            <div className="my-5">
                <ul>
                    <li className="mb-1 text-left"><strong>Web APIs</strong>
                        <ul className="ml-5">
                            <li className="mb-1">{api_text.Types.Web.description}</li>
                        </ul>
                    </li>
                    <li className="mb-1 text-left"><strong>Library</strong>
                        <ul className="ml-5">
                            <li className="mb-1 text-left">{api_text.Types.Library.description}</li>
                        </ul>
                    </li>
                </ul>
            </div> 
                   
        </motion.div>
    )
}


export default Type