import type { Meta, StoryObj } from '@storybook/react';
import { Showcase } from './Showcase';

const meta = {
    title: 'Components/Showcase',
    component: Showcase,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
      layout: 'fullscreen',
    },
  } satisfies Meta<typeof Showcase>;

  export default meta;
  type Story = StoryObj<typeof meta>;

  export const Primary: Story = {
    args: {
        title: 'Example Title',
        description: 'Example Description',
        imageUrl: 'https://placehold.co/200',
    },
  };