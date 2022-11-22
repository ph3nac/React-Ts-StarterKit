import { ComponentStory, ComponentMeta } from '@storybook/react';
import Bookmark from './Bookmark';
import { BookmarkMock } from './BookmarkMock';

type T = typeof Bookmark;

export default {
  title: 'Bookmark',
  component: Bookmark,
} as ComponentMeta<T>;

const Template: ComponentStory<T> = (args) => <Bookmark {...args} />;
export const Default = Template.bind({});
Default.args = {
  ...BookmarkMock,
  id: '1',
};
