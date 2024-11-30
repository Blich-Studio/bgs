import type { Meta, StoryObj } from '@storybook/react';

import { NavbarItem } from './NavbarItem';

const meta = {
    title: 'Components/NavbarItem',
    component: NavbarItem,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
      layout: 'fullscreen',
    },
  } satisfies Meta<typeof NavbarItem>;

  export default meta;
  type Story = StoryObj<typeof meta>;

  export const Primary: Story = {
    args: {
        children: 'Primary Item',
        href: "/home",
    },
  };