import LgInput from '../'

export default {
  title: 'LgInput',
  component: LgInput
}

export const Text = () => ({
  components: { LgInput },
  template: '<lg-input placeholder="请输入姓名"></lg-input>',
  data () {
    return {
      value: 'admin'
    }
  }
})

export const Password = () => ({
  components: { LgInput },
  template: '<lg-input type="password" v-model="value"></lg-input>',
  data () {
      return{
          value: 'admin'
      }
  }
})