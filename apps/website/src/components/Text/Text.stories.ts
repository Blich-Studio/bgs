import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';

const meta = {
    title: 'Components/Text',
    component: Text,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
      layout: 'fullscreen',
    },
  } satisfies Meta<typeof Text>;

  export default meta;
  type Story = StoryObj<typeof meta>;

  export const Primary: Story = {
    args: {
      children: 'Primary Text',

      // Default is 'h1'
      as: "h3",

      color: "red",
      align: "center",
      size: "hero",
      font: "robotoMono"
    },
  };