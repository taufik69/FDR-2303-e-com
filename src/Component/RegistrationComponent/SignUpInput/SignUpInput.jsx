import React from "react";

const SignUpInput = ({
  className,
  inputType,
  placeHolder,
  labelTitle,
  inputId,
  oninputChange,
}) => {
  return (
    <div className="flex basis-2/5 flex-col gap-y-4">
      <label
        className="font-DMsans text-base font-normal text-main_font_color"
        htmlFor={labelTitle}
      >
        {labelTitle}
      </label>
      <input
        className={className}
        type={inputType}
        id={inputId}
        name={inputId}
        placeholder={placeHolder}
        onChange={oninputChange}
      />
    </div>
  );
};

export default SignUpInput;
