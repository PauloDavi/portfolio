import { AnimationControls } from 'framer-motion';

import { MotionSimpleGrid } from '../motion-chakra';
import { technologies, tecnoContainer } from './technologies';
import { TecnoCard } from './TecnoCard';

interface TechnologiesListProps {
  controls: AnimationControls;
}

export function TechnologiesList({ controls }: TechnologiesListProps) {
  return (
    <MotionSimpleGrid
      initial="hidden"
      color="gray.800"
      animate={controls}
      variants={tecnoContainer}
      columns={[2, 2, 3]}
      spacing={14}
    >
      {technologies.map(tecno => (
        <TecnoCard key={tecno.name} tecno={tecno} />
      ))}
    </MotionSimpleGrid>
  );
}
