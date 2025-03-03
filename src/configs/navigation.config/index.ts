import type { NavigationTree } from '@/@types/navigation';
import authNavigationConfig from '@/configs/navigation.config/auth.navigation.config';

const navigationConfig: NavigationTree[] = [...authNavigationConfig];

export default navigationConfig;
