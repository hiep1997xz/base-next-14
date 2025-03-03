import classNames from 'classnames';
import logo from '@/assets/images/logo.png';
import avatar from '@/assets/images/avatar.png';
import Image from 'next/image';

// interface HeaderProps extends CommonProps {}

const Header = () => {
  return (
    <header
      className={classNames(
        'h-[70px] py-2 sticky px-4 top-0 flex items-center bg-background-default shadow-[0_0_1px_0_rgba(0,0,0,0.25)]'
      )}>
      <div className="header_content flex items-center w-full">
        <div className="flex items-center justify-center gap-2">
          <Image alt="logo" src={logo} width={48} height={48} />
          <span className="font-yu-mincho text-primary text-[34px] leading-[135%] font-semibold">
            恋草
          </span>
        </div>
        <div className="flex-1 text-center">
          <span className="font-noto text-xl font-bold">さがす</span>
        </div>
        <div className="flex gap-10 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.56665 4.3335C0.738223 4.3335 0.0666504 5.00507 0.0666504 5.8335V26.1668C0.0666504 26.9953 0.738226 27.6668 1.56665 27.6668H30.4333C31.2617 27.6668 31.9333 26.9953 31.9333 26.1668V5.8335C31.9333 5.00507 31.2617 4.3335 30.4333 4.3335H1.56665ZM2.06665 8.33565V6.3335H29.9333V8.33565C29.7284 8.3218 29.5175 8.37071 29.3308 8.48917L16 16.9491L2.66914 8.48917C2.48248 8.37071 2.27152 8.3218 2.06665 8.33565ZM2.06665 10.4756V25.6668H29.9333V10.4756L16.5358 18.9778C16.2087 19.1854 15.7912 19.1854 15.4642 18.9778L2.06665 10.4756Z"
              fill="#1F1F1F"
            />
          </svg>
          <div className="h-8 w-8 rounded-full border-2 border-gray-500 overflow-hidden">
            <Image src={avatar} alt="avatar" width={32} height={32} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
