import React, { useState } from 'react';
import { Drawer } from 'antd';
import MenuCustom from '@/components/ui/Menu/index.tsx';
import navigationConfig from '@/configs/navigation.config';
import { useAppSelector } from '@/store/hook.ts';
import useResponsive from '@/utils/hooks/useResponsive.ts';
import classNames from 'classnames';
import { HiOutlineMenu, HiOutlineMenuAlt2 } from 'react-icons/hi';

const MobileMenu = () => {
  const { smaller } = useResponsive();
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => {
    setIsOpen(true);
  };

  const onDrawerClose = () => {
    setIsOpen(false);
  };
  const mode = useAppSelector((state) => state.theme.mode);

  return (
    <>
      {smaller.md && (
        <>
          <div
            className={classNames('cursor-pointer p-2 rounded-full hover:bg-black/10')}
            onClick={openDrawer}>
            <div className="text-2xl text-gray-500">
              {isOpen ? <HiOutlineMenu /> : <HiOutlineMenuAlt2 />}
            </div>
          </div>
          <Drawer
            placement="left"
            styles={{
              body: {
                padding: '20px 0'
              }
            }}
            open={isOpen}
            onClose={onDrawerClose}>
            <MenuCustom
              mode="inline"
              onSelect={onDrawerClose}
              theme={mode}
              navigationTree={navigationConfig}
              userAuthority={['admin']}
            />
          </Drawer>
        </>
      )}
    </>
  );
};

export default MobileMenu;
