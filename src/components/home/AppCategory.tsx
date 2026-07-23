import { useIsMobile } from '../../hooks/useIsMobile';
import { AppCategoryMobile, AppItem as AppItemMobile } from '../mobile/AppCategoryMobile';
import { AppCategoryDesktop, AppItem as AppItemDesktop } from './AppCategoryDesktop';

// Re-export AppItem for convenience
export type AppItem = AppItemMobile | AppItemDesktop;

interface AppCategoryProps {
  title: string;
  deviceImageAlt: string;
  deviceImagePath: string;
  imageClassName?: string;
  titleClassName?: string;
  apps: AppItem[];
  reverse?: boolean;
}

export function AppCategory(props: AppCategoryProps) {
  const isMobile = useIsMobile();

  return isMobile ? (
    <AppCategoryMobile {...props} />
  ) : (
    <AppCategoryDesktop {...props} />
  );
}
