import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headerContent: ['学生基础信息', '班级管理'],
    idCollapseState: false,
    BarContent: [],
    // 班级信息数据
    ban: [
      {
        id: '0',
        xueQi: 'S1',
        name: 'T217',
        kaiTime: '2019-01-01',
        jiaoYuan: '李四',
        banZhuRen: '张三'
      },
      {
        id: '1',
        xueQi: 'S2',
        name: 'T218',
        kaiTime: '2019-01-11',
        jiaoYuan: '李四',
        banZhuRen: '张三'
      },
      {
        id: '2',
        xueQi: 'Y2',
        name: 'T218',
        kaiTime: '2019-01-11',
        jiaoYuan: '李四',
        banZhuRen: '张三'
      },
      {
        id: '3',
        xueQi: 'S2',
        name: 'T218',
        kaiTime: '2019-01-11',
        jiaoYuan: '李四',
        banZhuRen: '张三'
      },
      {
        id: '4',
        xueQi: 'S2',
        name: 'T218',
        kaiTime: '2019-01-11',
        jiaoYuan: '李四',
        banZhuRen: '张三'
      },
      {
        id: '5',
        xueQi: 'S2',
        name: 'T218',
        kaiTime: '2019-01-11',
        jiaoYuan: '李四',
        banZhuRen: '张三'
      },
      {
        id: '6',
        xueQi: 'S2',
        name: 'T218',
        kaiTime: '2019-01-11',
        jiaoYuan: '李四',
        banZhuRen: '张三'
      },
      {
        id: '7',
        xueQi: 'S2',
        name: 'T218',
        kaiTime: '2019-01-11',
        jiaoYuan: '李四',
        banZhuRen: '张三'
      },
      {
        id: '8',
        xueQi: 'S2',
        name: 'T218',
        kaiTime: '2019-01-11',
        jiaoYuan: '李四',
        banZhuRen: '张三'
      },
      {
        id: '9',
        xueQi: 'S2',
        name: 'T218',
        kaiTime: '2019-01-11',
        jiaoYuan: '李四',
        banZhuRen: '张三'
      },
      {
        id: '10',
        xueQi: 'S2',
        name: 'T218',
        kaiTime: '2019-01-11',
        jiaoYuan: '李四',
        banZhuRen: '张三'
      },
      {
        id: '11',
        xueQi: 'Y2',
        name: 'T218',
        kaiTime: '2019-01-11',
        jiaoYuan: '李四',
        banZhuRen: '张三'
      }
    ]
  },
  mutations: {
    topQieM (state) {
      state.idCollapseState = !state.idCollapseState
      alert()
    },
    updateHeaCon (state, val) {
      // console.log(val)
      state.headerContent = val
    }
  },
  actions: {
  },
  modules: {
  }
})
