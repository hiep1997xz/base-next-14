import React from 'react';
import navigationConfig from '@/configs/navigation.config';
import { Dropdown } from 'antd';
import { useLanguages } from '@/utils/hooks/useLanguages';
import { getItemList } from '@/utils/helppers';
import useResponsive from '@/utils/hooks/useResponsive.ts';

const HorizontalMenu = () => {
  const { swLanguages } = useLanguages();
  const { larger } = useResponsive();
  return (
    <>
      {larger.md &&
        navigationConfig.map((nav, i) => {
          const items = getItemList(nav.children, [], swLanguages);
          return (
            <React.Fragment key={i}>
              <Dropdown menu={{ items }}>
                <div className="flex items-center cursor-pointer gap-2 text-sm font-semibold">
                  <div className="text-2xl">{nav.icon}</div>
                  {swLanguages(nav.title)}
                </div>
              </Dropdown>
            </React.Fragment>
          );
        })}
    </>
  );
};

export default HorizontalMenu;
