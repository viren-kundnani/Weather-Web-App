import React from "react"
import { motion } from "framer-motion"
import {http_rq_text} from "../../../constants/http-req"
import styles from "../../../constants/style"
import { http_rs_text } from "../../../constants/http-rsp"
function Response() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className={`text-center basis-full mb-5 ${styles.title}`}>Response Body</div>
            <div>
                <ul>
                    <li className="mb-1 text-left">{http_rs_text.Response_body.description}</li>
                </ul>
            </div>
                    
        </motion.div>
    )
}

export default Response