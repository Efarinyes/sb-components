import { Mylabel } from "../../components/Mylabel";
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'UI/MyLabel',
    component: Mylabel,
    argTypes: {
        color: { control:'select' },
        size: { control:'select' },
        fontColor: { control: 'color' },
    }

} as ComponentMeta<typeof Mylabel>;

const Template: ComponentStory<typeof Mylabel> = (args) => <Mylabel {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    size : 'normal',
    color : 'primary',
}

export const AllCaps = Template.bind({});
AllCaps.args = {
    size : 'normal',
    allCaps : true,
    color: 'primary',
}

export const Secondary = Template.bind({});
Secondary.args = {
    size : 'normal',
    color : 'secondary',
}

export const Tertiary = Template.bind({});
Tertiary.args = {
    size: 'normal',
    color: 'tertiary',
}
export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
  size:'h1',
  fontColor: '#5517ac'
}