import { useEffect } from 'react';

import { Text } from '@chakra-ui/react';
import { AnimationControls } from 'framer-motion';
import { PolarArea } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

import { MotionFlex } from '../motion-chakra';
import { chartVariants, dataSkills } from './chartSkillsData';

interface ChartSkillProps {
  controls: AnimationControls;
}

export function ChartSkill({ controls }: ChartSkillProps) {
  const { t } = useTranslation('common');

  const { ref, inView } = useInView();

  useEffect(() => {
    controls.start('hidden');
  }, [controls]);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <MotionFlex
      ref={ref}
      backgroundColor="white"
      boxShadow="dark-lg"
      justifyContent="center"
      initial="hidden"
      alignItems="center"
      flexDirection="column"
      animate={controls}
      variants={chartVariants}
      w={['sm', 'md', 'lg']}
      p="8"
      borderRadius="2xl"
    >
      <Text mb="2" fontSize="2xl" color="gray.700">
        {t('SKILL_CHART_TITLE_LABEL')}
      </Text>
      <PolarArea
        data={dataSkills}
        options={{
          plugins: {
            legend: {
              position: 'bottom',
            },
          },
        }}
      />
    </MotionFlex>
  );
}
