'use client';
import Cookies from 'js-cookie';
import React from 'react';
import { Form, Button } from 'antd';
import styles from './styles.module.scss';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import CustomInput from '../../../../components/CustomInput';
import { useLanguages } from '@/utils/hooks/useLanguages';

const Page = () => {
  const [form] = Form.useForm();
  const router = useRouter();

  const {swLanguages} = useLanguages()

  const handleFinish = (values) => {
    console.log('Form submitted with values:', values);
    try {
      Cookies.set('token', '1');
      router.push('/email-verify');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="py-6 px-4 bg-[url(/imgs/login_bg.png)] object-cover bg-center bg-no-repeat xl:w-[913px] xs:h-[700px] xs:w-[500px] w-full h-full xs:rounded-2xl text-black transition-all">
        <div className="flex items-center justify-between pb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="18"
            viewBox="0 0 11 18"
            fill="none">
            <path
              d="M9.62451 1.05957L2.03757 8.81894L9.62451 16.5783"
              stroke="#7B7B7B"
              strokeWidth="1.51739"
              strokeLinecap="round"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none">
            <path
              d="M1.16626 1.05957L16.0744 15.9677"
              stroke="#7B7B7B"
              strokeWidth="1.51739"
              strokeLinecap="round"
            />
            <path
              d="M16.0732 1.05957L1.16509 15.9677"
              stroke="#7B7B7B"
              strokeWidth="1.51739"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <span className="block w-full border border-solid border-[#D0D0D0]"></span>

        <div className="flex justify-center mb-6 pt-32">
          <Image
            src="/imgs/login-logo.png"
            alt="Logo"
            width={112}
            height={104}
            className="object-contain"
          />
        </div>
        <h1 className="text-center text-primary text-3xl font-bold mb-10 uppercase">
          {swLanguages("forgotPass.forgot_pass")}
        </h1>

        <Form
          layout="vertical"
          size="large"
          form={form}
          className={styles.form}
          onFinish={handleFinish}>
          <Form.Item
            name="email"
            rules={[{ required: true, message: `${swLanguages('login.ruleEmail')}` }]}
            className="floating-label mb-3"
            >
            <CustomInput label={swLanguages('login.email')} />
          </Form.Item>

          <p className="text-[#949DA7] text-base mb-6">
           {swLanguages("forgotPass.text")}
          </p>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full hover:bg-orange-600 border-none rounded-full max-xs:mt-24"
            >
              {swLanguages("login.SignIn")}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Page;
