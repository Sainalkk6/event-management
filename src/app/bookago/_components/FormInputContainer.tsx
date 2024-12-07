import { FormInputContainerPropType } from "@/types/types";
import React from "react";
import { BiShowAlt } from "react-icons/bi";
import { BiHide } from "react-icons/bi";

const FormInputContainer = ({ label, hide, setHide, type, handleBlur, needHide, handleChange, id, name, value }: FormInputContainerPropType) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between items-center w-full">
        <span className="text-[#666] text-base">{label}</span>
        {needHide && setHide && (
          <button type="button" className="text-[#666] text-base flex items-center" onClick={() => setHide(!hide)}>
            {hide ? (
              <>
                <BiShowAlt size={16} /> Show
              </>
            ) : (
              <>
                <BiHide size={16} /> Hide
              </>
            )}
          </button>
        )}
      </div>
      <input value={value} onBlur={handleBlur} onChange={handleChange} id={id} name={name} type={type} className="rounded-xl border border-[#666] px-4 py-4 text-lg outline-none w-full" />
    </div>
  );
};

export default FormInputContainer;
