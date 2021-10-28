export const dataSkills = {
  labels: ['React.js', 'Next.js', 'Node.js', 'Nest.js', 'Git e Github'],
  datasets: [
    {
      label: 'Skills',
      data: [10, 7, 9, 7, 9],
      backgroundColor: [
        'rgba(54, 162, 235, 0.5)',
        'rgba(0, 0, 0, 0.2)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(255, 99, 132, 0.5)',
        'rgba(0, 0, 0, 0.4)',
      ],
      borderWidth: 1,
    },
  ],
};

export const chartVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
