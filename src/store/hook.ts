import { useDispatch, useSelector, useStore } from 'react-redux';
import { AppDispatch, AppStore, RootState } from '@/store/index';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
