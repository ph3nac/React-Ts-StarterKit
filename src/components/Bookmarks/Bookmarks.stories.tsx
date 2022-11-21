import { ComponentMeta, ComponentStory } from '@storybook/react';
import Bookmarks from './Bookmarks';
import { BookmarksMock } from './BookmarksMock';

type T = typeof Bookmarks;

export default {
  title: 'Bookmarks',
  component: Bookmarks,
} as ComponentMeta<T>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<T> = (args) => <Bookmarks {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...BookmarksMock,
  id: '1',
};
