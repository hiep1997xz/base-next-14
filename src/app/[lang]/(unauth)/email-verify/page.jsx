'use client';

import { useState, useRef, useEffect } from 'react';
import { Input, Button } from 'antd';
import Image from 'next/image';
import { useLanguages } from '@/utils/hooks/useLanguages';


const Page = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(120);
  const inputsRef = useRef([]);

  const {swLanguages} = useLanguages()

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return;
    if (index > 0 && otp[index - 1] === '') return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace' && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="py-6 px-4 bg-[url(/imgs/login_bg.png)] object-cover bg-center bg-no-repeat xl:w-[913px] xs:h-[700px] xs:w-[500px] w-full h-full xs:rounded-2xl text-black transition-all">
        <div className="flex items-center justify-between pb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="18" viewBox="0 0 11 18" fill="none">
            <path d="M9.62451 1.05957L2.03757 8.81894L9.62451 16.5783" stroke="#7B7B7B" strokeWidth="1.51739" strokeLinecap="round"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
            <path d="M1.16626 1.05957L16.0744 15.9677" stroke="#7B7B7B" strokeWidth="1.51739" strokeLinecap="round"/>
            <path d="M16.0732 1.05957L1.16509 15.9677" stroke="#7B7B7B" strokeWidth="1.51739" strokeLinecap="round"/>
          </svg>
        </div>
        <span className="block w-full border border-solid border-[#D0D0D0]"></span>

        <div className="flex justify-center mb-6 pt-8">
          <Image
            src="/imgs/login-logo.png" 
            alt="Logo"
            width={112} 
            height={104} 
            className="object-contain"
          />
        </div>
        <h1 className="text-center text-primary text-3xl font-bold mb-10 uppercase">
          {swLanguages("emailVerify.verify")}
        </h1>
        <div className=" flex flex-col items-center mx-auto max-w-[512px]">
          <p className='text-gray-500 text-base'>{swLanguages("emailVerify.text1")}</p>
          <p className='text-gray-500 text-base'>{swLanguages("emailVerify.text2")}</p>
          <div className="flex space-x-2 justify-center my-4">
            {otp.map((digit, index) => (
              <Input
                key={index}
                ref={(el) => (inputsRef.current[index] = el)}
                maxLength={1}
                className="text-center text-xl w-[63px] h-[63px] max-xs:w-[50px] max-xs:h-[50px]"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
              />
            ))}
          </div>
          <p className='text-gray-500'>
            {!otp.includes('') || timeLeft === 0 ? (
              <>{swLanguages("emailVerify.noOtp")} <span className='text-[#FA541C] font-bold cursor-pointer' onClick={() => { setOtp(['', '', '', '']); setTimeLeft(120); }} >{swLanguages("emailVerify.resend")}</span></>
            ) : (
              <>{swLanguages("emailVerify.noOtp")} <span className='text-[#FA541C] font-bold'>{`0${Math.floor(timeLeft / 60)}:${(timeLeft % 60).toString().padStart(2, '0')}`}</span></>
            )}
          </p>
          <Button
            type="primary"
            htmlType="submit"
            className=" w-full h-11 hover:bg-orange-600 border-none rounded-full mt-6 max-xs:mt-24"
            style={{ backgroundColor: otp.includes('') ? '#fcbd76' : '#FF8800', borderColor: otp.includes('') ? '#fcbd76' : '#FF8800' }}
            disabled={otp.includes('')}
          >
            {swLanguages("login.SignUp")}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Page