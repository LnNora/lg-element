
// require('browser-env')()
import input from '../src/input.vue'
import { mount } from '@vue/test-utils'


describe('lg-input', () => {
  test('input-text', () => {
    const wrapper = mount(input)
    expect(wrapper.html()).toContain('input type="text"')
  })
})
