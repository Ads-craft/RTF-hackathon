import { sendMsgToAI } from "@/utils/openai";

import Image from "next/image";
import React, { useEffect, useState } from "react";

export const OpenAiModal = () => {
  const modalRef = React.useRef(null);
  const [msg, setMsg] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiContetnt, setAiContent] = useState("");
  const generateAds = async () => {
    setIsGenerating(true);
    let response = await sendMsgToAI(
      msg || "generate a post for my tiktok account about anything"
    );
    if (response) {
      console.log(response);
      setAiContent(response);
    }
    setIsGenerating(false);
  };
  useEffect(() => {
    modalRef.current.showModal();
  });
  return (
    <>
      <button
        className="btn tw-p-3"
        onClick={() => modalRef.current.showModal()}
      >
        Generate Ads
      </button>
      <dialog
        ref={modalRef}
        onClick={() => modalRef.current.close()}
        id="my_modal_2"
        className="modal tw-p-0  tw-border tw-rounded"
      >
        <div
          className="modal-box tw-max-w-[800px] tw-flex tw-min-h-[300px] "
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="tw-p-3">
            <p className="py-4">
              Type in the context of your ads in the field and let the AI
              generate it for you
            </p>
            <input
              type="text"
              placeholder="Type here"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              className="tw-input tw-input-bordered tw-w-full tw-max-w-xs"
            />
            <button
              className="tw-cursor-pointer tw-mt-6 tw-p-3"
              onClick={generateAds}
            >
              Generate
            </button>
          </div>
          <div className="tw-pt-4 tw-flex tw-flex-col ">
            <div className=" tw-w-full tw-self-center">
              <Image src="/svg/bot.svg" width={20} height={20} />
            </div>
            <div className="">
              Content lorem10asndksnlk iasnlka sanas asnikcla askmnk;a askmnaks
              aksmca
            </div>
            <button className="tw-cursor-pointer tw-mt-6 tw-p-3 tw-justify-self-end">
              post
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};
