import { useEffect, useRef, useState } from "react";

export const OTPBOX = () => {
  const OTP_DIGIT_COUNT = 5;

  const ArrayRef = useRef([]);

  useEffect(() => {
    ArrayRef.current[0]?.focus();
  }, []);
  const [otpArray, setOtpArray] = useState(new Array(OTP_DIGIT_COUNT).fill(""));

  const handleOnchange = (value, index) => {
    if (isNaN(value)) return;

    const newArray = [...otpArray];
    newArray[index] = value.slice(-1);
    setOtpArray(newArray);

    ArrayRef.current[index + 1]?.focus();
  };
  const handleOnkeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (!otpArray[index] && index > 0) {
        const newArray = [...otpArray];
        newArray[index - 1] = "";
        setOtpArray(newArray);

        ArrayRef.current[index - 1]?.focus();
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto flex flex-col items-center justify-center mt-20">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Enter Your OTP</h1>

      <div className="flex gap-3">
        {otpArray.map((digit, index) => (
          <input
            key={index}
            type="text"
            value={digit}
            ref={(input) => (ArrayRef.current[index] = input)}
            onChange={(e) => handleOnchange(e.target.value, index)}
            onKeyDown={(e) => handleOnkeyDown(e, index)}
            className="w-14 h-14 text-center text-xl font-semibold border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
          />
        ))}
      </div>
    </div>
  );
};
