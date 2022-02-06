import { Box } from '@chakra-ui/react';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import ScrollToTop from 'react-scroll-up';

export function ButtonScrollTop() {
  return (
    <ScrollToTop
      key="scroll-button"
      style={{ bottom: 0, right: 30 }}
      showUnder={800}
    >
      <Box bg="teal.800" opacity="0.9" padding="1" borderTopRadius="base">
        <MdOutlineKeyboardArrowUp size={32} />
      </Box>
    </ScrollToTop>
  );
}
