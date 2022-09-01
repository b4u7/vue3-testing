import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ButtonComponent from '../ButtonComponent.vue'

describe('ButtonComponent', () => {
  it('renders properly', () => {
    const wrapper = mount(ButtonComponent, {
      props: { text: 'This is a test button' },
    })
    expect(wrapper.text()).toContain('This is a test button')
  })
})
