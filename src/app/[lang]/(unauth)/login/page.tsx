'use client';
import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { Form,  Button, Checkbox } from 'antd';
import styles from './styles.module.scss';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { IconApple, IconGoogle } from '@/assets/svgs/icons';
import CustomInput from '@/components/CustomInput';
import { useLanguages } from '@/utils/hooks/useLanguages';

const Page = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const {swLanguages} = useLanguages()

  const [state, setState] = useState('Sign up')

  const handleFinish = (values: any) => {
    console.log('Form submitted with values:', values);
    try {
      Cookies.set('token', '1');
      router.push('/');
    } catch (e: any) {
      console.log(e);
    }
  };
  return (
    <div className=" w-screen h-screen flex items-center justify-center">
      <div className="py-6 px-4 bg-[url(/imgs/login_bg.png)] object-cover bg-center bg-no-repeat xl:w-[913px] xs:h-[700px] xs:w-[500px] w-full h-full xs:rounded-2xl text-black transition-all ">
        <div className="flex items-center justify-between pb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="18" viewBox="0 0 11 18" fill="none">
            <path d="M9.62451 1.05957L2.03757 8.81894L9.62451 16.5783" stroke="#7B7B7B" stroke-width="1.51739" stroke-linecap="round"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
            <path d="M1.16626 1.05957L16.0744 15.9677" stroke="#7B7B7B" stroke-width="1.51739" stroke-linecap="round"/>
            <path d="M16.0732 1.05957L1.16509 15.9677" stroke="#7B7B7B" stroke-width="1.51739" stroke-linecap="round"/>
          </svg>
        </div>
        <span className="block w-full border border-solid border-[#D0D0D0]"></span>

        <div className="flex justify-center mb-6 pt-8">
          <Image
            src="/imgs/login-logo.png" 
            alt="Logo"
            width={112} 
            height={104} 
            objectFit="contain" 
          />
        </div>
        <h1 className="text-center text-primary text-3xl font-bold mb-6">
          {state === 'Sign up' ? `${swLanguages('login.SignUp')}` : `${swLanguages('login.SignIn')}`}
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
            className="floating-label mb-6"
          >
            <CustomInput label={swLanguages('login.email')}/>
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: `${swLanguages('login.rulePass')}` }]}
            className="mb-6"
          >
            <CustomInput label={swLanguages('login.password')} type="password" />
          </Form.Item>

          {state === 'Sign up' && (
            <Form.Item
            name="confirm password"
            rules={[{ required: true, message: `${swLanguages('login.ruleConfirmPass')}` }]}
            className="mb-8"
          >
            <CustomInput label={swLanguages('login.confirmPass')} type="password" />
          </Form.Item>
        )}
          
          {state === 'Sign up' ? '' : (
            <div className="flex items-center justify-between mb-8">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>{swLanguages('login.checkbox')}</Checkbox>
            </Form.Item>
            <a href="#" className="text-orange-500 text-sm hover:underline">
            {swLanguages('login.forgot_pass')}
            </a>
          </div>)}
          
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full hover:bg-orange-600 border-none rounded-full max-xs:mt-24"
            >
              {state}
            </Button>
          </Form.Item>
        </Form>


        {state === 'Sign up' ? '' : (
          <div className="text-center mb-6">
          <p className="text-gray-500 mb-6">{swLanguages('login.loginWith')}</p>
          <div className="flex justify-center space-x-4">
            <Button
              className="w-[169px] h-10 flex items-center border border-gray-300 rounded-full text-gray-700 bg-white hover:bg-gray-100 focus:outline-none"
            >
              <IconGoogle />
              Google
            </Button>
            <Button
              className="w-[169px] h-10 flex items-center border border-gray-300 rounded-full text-gray-700 bg-white hover:bg-gray-100 focus:outline-none"
            >
              <IconApple />
              Apple
            </Button>
          </div>
        </div>)}

        {state === 'Sign up' ? (
          <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
          {swLanguages('login.haveAccount')}{' '}
            <span onClick={() => setState('Login')} className="text-primary hover:underline font-bold cursor-pointer">
            {swLanguages('login.login_here')}
            </span>
          </p>
        </div>) : (
          <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            {swLanguages('login.noAccount')}{' '}
            <span onClick={() => setState('Sign up')} className="text-primary hover:underline font-bold cursor-pointer">
            {swLanguages('login.SignUp')}
            </span>
          </p>
        </div>)}

      </div>
    </div>
  );
};

export default Page;
