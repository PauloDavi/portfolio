import { ComponentProps, ReactNode } from 'react';

import Icon from '@chakra-ui/icon';
import { IconProps } from '@chakra-ui/react';
import { IconType } from 'react-icons';

import { MotionLink } from './motion-chakra';

interface LinkButtonProps extends ComponentProps<typeof MotionLink> {
  children: ReactNode;
  href: string;
  icon?: IconType;
  iconProps?: IconProps;
}

export function LinkButton({
  children,
  href,
  icon,
  iconProps,
  ...props
}: LinkButtonProps) {
  return (
    <MotionLink
      borderColor="darkblue"
      href={href}
      border="4px"
      px="6"
      py="4"
      boxShadow="lg"
      display="flex"
      justifyContent="center"
      whileHover={{
        scale: 1.1,
      }}
      alignItems="center"
      gridGap="4"
      {...props}
    >
      {icon && <Icon as={icon} {...iconProps} h="6" w="6" color="gray.200" />}
      {children}
    </MotionLink>
  );
}
