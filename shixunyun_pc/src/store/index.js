import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headerContent: ['学生基础信息', '班级管理'],
    idCollapseState: false,
    BarContent: [],
    // 学生信息数据
    Student: [
      {
        id: '0',
        name: '任一',
        idCard: '43066...',
        phone: '137...',
        address: '岳阳',
        grade: 'y2',
        major: 'Java',
        ruxueTime: '2020-09-09'
      },
      {
        id: '1',
        name: '任2',
        idCard: '43066...',
        phone: '137...',
        address: '岳阳',
        grade: 'y2',
        major: '前端',
        ruxueTime: '2020-09-09'
      },
      {
        id: '2',
        name: '任2',
        idCard: '43066...',
        phone: '137...',
        address: '岳阳',
        grade: 'y2',
        major: '前端',
        ruxueTime: '2020-09-09'
      },
      {
        id: '3',
        name: '任2',
        idCard: '43066...',
        phone: '137...',
        address: '岳阳',
        grade: 'y2',
        major: '前端',
        ruxueTime: '2020-09-09'
      },
      {
        id: '4',
        name: '任2',
        idCard: '43066...',
        phone: '137...',
        address: '岳阳',
        grade: 'y2',
        major: '前端',
        ruxueTime: '2020-09-09'
      },
      {
        id: '5',
        name: '任2',
        idCard: '43066...',
        phone: '137...',
        address: '岳阳',
        grade: 'y2',
        major: '前端',
        ruxueTime: '2020-09-09'
      },
      {
        id: '6',
        name: '任2',
        idCard: '43066...',
        phone: '137...',
        address: '岳阳',
        grade: 'y2',
        major: '前端',
        ruxueTime: '2020-09-09'
      },
      {
        id: '7',
        name: '任2',
        idCard: '43066...',
        phone: '137...',
        address: '岳阳',
        grade: 'y2',
        major: '前端',
        ruxueTime: '2020-09-09'
      },
      {
        id: '8',
        name: '任2',
        idCard: '43066...',
        phone: '137...',
        address: '岳阳',
        grade: 'y2',
        major: '前端',
        ruxueTime: '2020-09-09'
      },
      {
        id: '9',
        name: '任2',
        idCard: '43066...',
        phone: '137...',
        address: '岳阳',
        grade: 'y2',
        major: '前端',
        ruxueTime: '2020-09-09'
      },
      {
        id: '10',
        name: '任2',
        idCard: '43066...',
        phone: '137...',
        address: '岳阳',
        grade: 'y2',
        major: '前端',
        ruxueTime: '2020-09-09'
      },
      {
        id: '11',
        name: '任2',
        idCard: '43066...',
        phone: '137...',
        address: '岳阳',
        grade: 'y2',
        major: '前端',
        ruxueTime: '2020-09-09'
      },
      {
        id: '1',
        name: '任2',
        idCard: '43066...',
        phone: '137...',
        address: '岳阳',
        grade: 'y2',
        major: '前端',
        ruxueTime: '2020-09-09'
      }
    ],
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
    ],
    // 专业信息数据
    zhuan: [
      {
        id: '0',
        name: 'JAVA'
      },
      {
        id: '1',
        name: 'C、C++'
      },
      {
        id: '2',
        name: '前端'
      },
      {
        id: '3',
        name: '.NET'
      },
      {
        id: '4',
        name: 'PHP'
      },
      {
        id: '5',
        name: 'Python'
      },
      {
        id: '3',
        name: '.NET'
      },
      {
        id: '4',
        name: 'PHP'
      },
      {
        id: '5',
        name: 'Python'
      },
      {
        id: '3',
        name: '.NET'
      },
      {
        id: '4',
        name: 'PHP'
      },
      {
        id: '5',
        name: 'Python'
      }
    ],
    // 教师基础信息
    teacher: [
      {
        id: '0',
        name: '任一',
        class: 'T218'
      }
    ]
  },
  mutations: {
    topQieM (state) {
      state.idCollapseState = !state.idCollapseState
      alert()
    },
    updateHeaCon (state, val) {
      state.headerContent = val
    }
  },
  actions: {
  },
  modules: {
  }
})
