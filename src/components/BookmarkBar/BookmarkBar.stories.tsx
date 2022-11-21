import { ComponentMeta, ComponentStory } from '@storybook/react';
import BookmarkBar from './BookmarkBar';
import { BookmarkBarMock } from './BookmarkBarMock';

type T = typeof BookmarkBar;

export default {
  title: 'BookmarkBar',
  component: BookmarkBar,
} as ComponentMeta<T>;

const Template: ComponentStory<typeof BookmarkBar> = (args) => (
  <BookmarkBar {...args} />
);

export const Default = Template.bind({});

Default.args = {
  ...BookmarkBarMock,
};
