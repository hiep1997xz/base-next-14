import { AUTH_PREFIX_PATH } from '@/configs/route.constant';
import {
  HiOutlineKey,
  HiOutlineLockClosed,
  HiOutlineShieldCheck,
  HiOutlineUserAdd
} from 'react-icons/hi';
import { NavigationTree } from '@/@types/navigation';

const authNavigationConfig: NavigationTree[] = [
  {
    key: 'authentication',
    path: '',
    type: 'group',
    title: 'nav.authentication.authentication',
    icon: <HiOutlineLockClosed />,
    authority: [],
    children: [
      {
        key: 'authentication.signIn',
        path: '',
        title: 'nav.authentication.signIn',
        icon: <HiOutlineShieldCheck />,
        authority: ['admin'],
        children: [
          {
            key: 'authentication.signIn.Simple',
            path: `${AUTH_PREFIX_PATH}/sign-in/simple`,
            title: 'nav.authentication.signInSimple',
            icon: '',
            authority: ['admin'],
            children: []
          },
          {
            key: 'authentication.signInSide',
            path: `${AUTH_PREFIX_PATH}/sign-in/side`,
            title: 'nav.authentication.signInSide',
            icon: '',
            authority: [],
            children: []
          },
          {
            key: 'authentication.signInCover',
            path: `${AUTH_PREFIX_PATH}/sign-in/cover`,
            title: 'nav.authentication.signInCover',
            icon: '',
            authority: [],
            children: []
          }
        ]
      },
      {
        key: 'authentication.signUp',
        path: '',
        title: 'nav.authentication.signUp',
        icon: <HiOutlineUserAdd />,
        authority: [],
        children: [
          {
            key: 'authentication.signUpSimple',
            path: `${AUTH_PREFIX_PATH}/sign-up/simple`,
            title: 'nav.authentication.signUpSimple',
            icon: '',
            authority: [],
            children: []
          },
          {
            key: 'authentication.signUpSide',
            path: `${AUTH_PREFIX_PATH}/sign-up/side`,
            title: 'nav.authentication.signUpSide',
            icon: '',
            authority: [],
            children: []
          },
          {
            key: 'authentication.signUpCover',
            path: `${AUTH_PREFIX_PATH}/sign-up/cover`,
            title: 'nav.authentication.signUpCover',
            icon: '',
            authority: [],
            children: []
          }
        ]
      },
      {
        key: 'authentication.forgotPassword',
        path: '',
        title: 'nav.authentication.forgotPassword',
        icon: <HiOutlineLockClosed />,
        authority: [],
        children: [
          {
            key: 'authentication.forgotPasswordSimple',
            path: `${AUTH_PREFIX_PATH}/forgot-password/simple`,
            title: 'nav.authentication.forgotPasswordSimple',
            icon: '',
            authority: [],
            children: []
          },
          {
            key: 'authentication.forgotPasswordSide',
            path: `${AUTH_PREFIX_PATH}/forgot-password/side`,
            title: 'nav.authentication.forgotPasswordSide',
            icon: '',
            authority: [],
            children: []
          },
          {
            key: 'authentication.forgotPasswordCover',
            path: `${AUTH_PREFIX_PATH}/forgot-password/cover`,
            title: 'nav.authentication.forgotPasswordCover',
            icon: '',
            authority: [],
            children: []
          }
        ]
      },
      {
        key: 'authentication.resetPassword',
        path: '',
        title: 'nav.authentication.resetPassword',
        icon: <HiOutlineKey />,
        authority: [],
        children: [
          {
            key: 'authentication.resetPasswordSimple',
            path: `${AUTH_PREFIX_PATH}/reset-password/simple`,
            title: 'nav.authentication.resetPasswordSimple',
            icon: '',
            authority: [],
            children: []
          },
          {
            key: 'authentication.resetPasswordSide',
            path: `${AUTH_PREFIX_PATH}/reset-password/side`,
            title: 'nav.authentication.resetPasswordSide',
            icon: '',
            authority: [],
            children: []
          },
          {
            key: 'authentication.resetPasswordCover',
            path: `${AUTH_PREFIX_PATH}/reset-password/cover`,
            title: 'nav.authentication.resetPasswordCover',
            icon: '',
            authority: [],
            children: []
          }
        ]
      }
    ]
  }
];
export default authNavigationConfig;
