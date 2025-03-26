import { LucideIcon } from 'lucide-react';

type CustomIconProps = {
  icon: LucideIcon;
};

export const CustomIcon = ({ icon: Icon }: CustomIconProps) => {
  return (
    <div className='bg-border text-muted-foreground flex h-9 w-9 items-center justify-center rounded-md'>
      <Icon className='size-4' />
    </div>
  );
};
