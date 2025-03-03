import React, { useCallback, useEffect, useState } from 'react';
import { Menu, MenuProps } from 'antd';
import { Direction } from '@/@types/theme';
import type { NavigationTree } from '@/@types/navigation';
import { useLanguages } from '@/utils/hooks/useLanguages';
import { getItemList } from '@/utils/helppers';
import { useAppDispatch, useAppSelector } from '@/store/hook.ts';
import { setCurrentRouteKey } from '@/store/slices/base.ts';
import { usePathname } from 'next/navigation';

type IMenuProps = MenuProps & {
  collapsed?: boolean;
  navigationTree?: NavigationTree[];
  userAuthority: string[];
  direction?: Direction;
};

const MenuCustom = (props: IMenuProps) => {
  const { collapsed, navigationTree = [], userAuthority = [], ...resProps } = props;
  const { swLanguages, lng } = useLanguages();
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const currentRouteKey = useAppSelector((state) => state.base.currentRouteKey);
  const [openKey, setOpenKey] = useState<string[]>([]);

  const items = getItemList(navigationTree, userAuthority, swLanguages) || [];

  const onSelectItem: MenuProps['onClick'] = (v) => {
    const { key } = v;
    dispatch(setCurrentRouteKey(key));
  };

  const foundItemKey = useCallback((items: any[], route: string) => {
    for (const item of items) {
      if (item.path === route) {
        return item.key;
      }

      if (item?.children?.length > 0) {
        const key: any = foundItemKey(item.children, route);
        if (key) return key;
      }
    }
    return null;
  }, []);

  const handleOpenChange: MenuProps['onOpenChange'] = (value) => {
    setOpenKey(value);
  };
  useEffect(() => {
    if (currentRouteKey === '') {
      const router = pathname.split(`/${lng}`)[1];
      const keySelected = foundItemKey(items, router);
      if (keySelected) {
        dispatch(setCurrentRouteKey(keySelected));
        const openKey = keySelected.slice(0, keySelected.lastIndexOf('.'));
        setOpenKey([openKey]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentRouteKey, dispatch, foundItemKey, lng, pathname]);

  return (
    <>
      <Menu
        {...resProps}
        onClick={props.onClick || onSelectItem}
        selectedKeys={[currentRouteKey]}
        openKeys={openKey}
        onOpenChange={props.onOpenChange || handleOpenChange}
        items={items}
        inlineCollapsed={collapsed}
      />
    </>
  );
};

export default MenuCustom;
