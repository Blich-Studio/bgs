import type { Meta, StoryObj } from '@storybook/react';
import { ShowcaseItem } from './ShowcaseItem';

const meta = {
    title: 'Components/ShowcaseItem',
    component: ShowcaseItem,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
      layout: 'fullscreen',
    },
  } satisfies Meta<typeof ShowcaseItem>;

  export default meta;
  type Story = StoryObj<typeof meta>;

  export const Primary: Story = {
    args: {
        title: 'Example Title',
        description: 'Example Description',
        imageUrl: 'https://placehold.co/300x200',
    },
  };