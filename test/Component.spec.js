import { mount } from '@vue/test-utils'
import TheLogo from '@/components/Utils/TheLogo.vue'

describe('TheLogo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(TheLogo);
    expect(wrapper.vm).toBeTruthy();
  });

  test('renders correctly', () => {
    const wrapper = mount(TheLogo);
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('renders all images', () => {
    const wrapper = mount(TheLogo);
    const images = wrapper.findAll('img');
    expect(images).toHaveLength(9);
  });
});

