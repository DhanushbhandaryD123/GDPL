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

// Both variants render in the DOM and CSS decides which is visible, so the
// layout is stable from first paint — no post-hydration swap, no CLS, no hydration mismatch errors.
export function AppCategory(props: AppCategoryProps) {
  return (
    <>
      <div className="md:hidden">
        <AppCategoryMobile {...props} />
      </div>
      <div className="hidden md:block">
        <AppCategoryDesktop {...props} />
      </div>
    </>
  );
}
