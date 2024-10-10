import styles from "../constants/style";

import { useState, useEffect } from "react";
import Head from "./Http/Res_topics/Headers";
import Redirects from "./Http/Res_topics/Redirects";
import Response from "./Http/Res_topics/Response";
import Status from "./Http/Res_topics/Status";
import Structure from "./Http/Res_topics/Structure";
import { http_rs_text } from "../constants/http-rsp";
function Res() {
  const [topic, setTopic] = useState(0);
  return (
    <div className="py-6  flex justify-center text-offWhite  text-xl text-left">
      <div className="flex  flex-wrap w-[100%] md:w-[60%]">
        <div className={`text-center basis-full ${styles.title}`}>Response</div>

        <div className="basis-full flex justify-center">
          <div
            className={`flex justify-center flex-wrap ${styles.btn_grp}`}
            id="button-grp"
          >
            <button
              onClick={() => setTopic(1)}
              className={`${
                topic == 1
                  ? "bg-black text-[#e9d8fd]"
                  : "bg-[#e9d8fd]  text-black"
              } ${styles.mob} ${styles.button_start}`}
            >
              Headers
            </button>
            <button
              onClick={() => setTopic(2)}
              className={`${
                topic == 2
                  ? "bg-black text-[#e9d8fd]"
                  : "bg-[#e9d8fd]  text-black"
              } ${styles.mob} ${styles.button}`}
            >
              Redirects
            </button>
            <button
              onClick={() => setTopic(3)}
              className={`${
                topic == 3
                  ? "bg-black text-[#e9d8fd]"
                  : "bg-[#e9d8fd]  text-black"
              } ${styles.mob} ${styles.button}`}
            >
              Response
            </button>
            <button
              onClick={() => setTopic(4)}
              className={`${
                topic == 4
                  ? "bg-black text-[#e9d8fd]"
                  : "bg-[#e9d8fd]  text-black"
              } ${styles.mob} ${styles.button}`}
            >
              Status
            </button>
            <button
              onClick={() => setTopic(5)}
              className={`${
                topic == 5
                  ? "bg-black text-[#e9d8fd]"
                  : "bg-[#e9d8fd]  text-black"
              } ${styles.mob} ${styles.button_end}`}
            >
              Structure
            </button>
          </div>
        </div>
        <div className="w-full h-[5px] rounded-3xl bg-pink-300 my-3"></div>

        <div>
          <ul className={`ml-5 ${topic != 0 ? "hidden" : "inline"} md:inline`}>
            <li className="mb-1 text-left">{http_rs_text.para1}</li>
            <li className="mb-1 text-left">{http_rs_text.para3}</li>
          </ul>
        </div>
        <div className="my-10 w-full">
          {topic == 1 && <Head />}
          {topic == 2 && <Redirects />}
          {topic == 3 && <Response />}
          {topic == 4 && <Status />}
          {topic == 5 && <Structure />}
        </div>
      </div>
    </div>
  );
}

export default Res;
