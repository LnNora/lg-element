import LgButton from '../'

export default {
  title: 'LgButton',
  component: LgButton
}

export const Text = () => ({
  components: { LgButton },
  template: '<lg-button>登 录</lg-button>'
})
