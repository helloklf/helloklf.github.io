<template>
  <div>
    <!--Dialog-->
    <div>
      <button @click="status.confirm = !status.confirm">Confirm</button>
      <confirm v-if="status.confirm" @onLeftClick="status.confirm = false" @onRightClick="status.confirm = false"/>

      <button @click="status.alert = !status.alert">Alert</button>
      <alert v-if="status.alert" @onConfirm="status.alert = false"/>

      <button @click="status.inputConfirm = !status.inputConfirm">InputConfirm</button>
      <input-confirm v-if="status.inputConfirm" @onCancel="status.inputConfirm = false" @onConfirm="status.inputConfirm = false" :allowEmpty="true"/>

      <button @click="status.passwordConfirm = !status.passwordConfirm">PasswordConfirm</button>
      <password-confirm v-if="status.passwordConfirm" @onCancel="status.passwordConfirm = false" @onConfirm="status.passwordConfirm = false" :allowEmpty="false"/>
    </div>

    <div style="padding: 1em;">
      <double-column-list>
        <double-column-list-item title="商品名称">中国移动 话费50元</double-column-list-item>
        <double-column-list-item title="测试标题">
          <span class="amount">￥42.123</span>
        </double-column-list-item>
        <double-column-list-item title="订单状态">
          <span class="hight-light">支付成功</span>
        </double-column-list-item>
        <double-column-list-item title="下单时间">2018-02-20 12:20:20</double-column-list-item>
      </double-column-list>
    </div>

    <!--Select-->
    <div style="padding: 1em;">
      <fzs-select :placeholder="placeholder" display-field="label" :multi-select="true" :options="options" v-model="selectValues" value-field="value" @onSelectedItemChange="onSelectedItemChange">
        <template slot="item" slot-scope="row">
          <div>
            <b>{{row.data.label}} - {{row.selected ? "已选中":"未选中"}}</b>
          </div>
        </template>
      </fzs-select>
      
      <fzs-select v-model="selectValue" placeholder="请选择" display-field='label' value-field="value" :multi-select="false" :options="options">
        <template slot="item" slot-scope="row">
          <div>
            <b>{{row.data.label}} - {{row.selected ? "已选中":"未选中"}}</b>
          </div>
        </template>
      </fzs-select>
    </div>

    <div style="padding: 1em;">
      <mobile-phone />
    </div>

    <div style="padding: 1em;">
      <single-row-button>测试测试测试</single-row-button>
    </div>
  </div>
</template>
<script>
import Alert from '@/components/dialog/Alert'
import Confirm from '@/components/dialog/Confirm'
import InputConfirm from '@/components/dialog/InputConfirm'
import PasswordConfirm from '@/components/dialog/PasswordConfirm'

import DoubleColumnList from '@/components/list/DoubleColumnList'
import DoubleColumnListItem from '@/components/list/DoubleColumnListItem'

import MobilePhone from '@/components/input/MobilePhone'
import SingleRowButton from '@/components/button/SingleRowButton'

import FzsSelect from '@/components/select/Select.vue'

export default {
  data () {
    return {
      selectValue: 'aaa3',
      selectValues: ['aaa3'],
      options: [
        { label: '测试项目1', value: 'aaa' },
        { label: '测试项目2', value: 'aaa2' },
        { label: '测试项目3', value: 'aaa3' },
        { label: '测试项目4', value: 'aaa4' },
        { label: '测试项目5', value: 'aaa5' },
        { label: '测试项目6', value: 'aaa6' }
      ],
      status: {
        alert: false,
        confirm: false,
        inputConfirm: false,
        passwordConfirm: false
      },
      placeholder: '请选择'
    }
  },
  methods: {
    onSelectedItemChange (items) {
      this.placeholder = JSON.stringify(items || '')
    }
  },
  components: {
    MobilePhone,
    SingleRowButton,
    Confirm,
    Alert,
    InputConfirm,
    PasswordConfirm,
    DoubleColumnList,
    DoubleColumnListItem,
    FzsSelect
  }
}
</script>

<style lang="less">
button {
  font-size: 12px;
  padding: 0.5em 0.7em;
  background: #eee;
  margin: 0.3em;
  border: 1px solid #ccc;
  outline: none;
  border-radius: 1.25em;
}
</style>
