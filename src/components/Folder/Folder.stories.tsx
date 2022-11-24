import { ComponentMeta, ComponentStory } from '@storybook/react';
import Folder from './Folder';
import { FolderMock } from './FolderMock';

type T = typeof Folder;

export default {
  title: 'Folder',
  component: Folder,
} as ComponentMeta<T>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<T> = (args) => <Folder {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...FolderMock,
  id: '1',
  type: 'folder',
};
