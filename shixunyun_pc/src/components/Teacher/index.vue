<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item>
        <el-button type="primary" size="small" @click="insert=true">新增教师</el-button>
        <!-- 新增弹窗 -->
        <el-dialog title="新增" :visible.sync="insert" class="insert">
          <el-form :model="insertData">
            <el-form-item label="教师姓名" :label-width="formLabelWidth">
              <el-input v-model="insertData.name" autocomplete="off" style="width:217px"></el-input>
            </el-form-item>
            <el-form-item label="专业" :label-width="formLabelWidth" style="width:80%">
              <el-select v-model="insertData.zhuan" placeholder="请选择活动区域">
                <el-option
                v-for="(item, index) in zOptionData"
                :key="index"
                :label="item.professionalName"
                :value="item.id"
              ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="职务" :label-width="formLabelWidth" style="width:80%">
              <el-select v-model="insertData.zhiwu" placeholder="请选择职务">
                <el-option label="班主任" value="班主任"></el-option>
                <el-option label="教员" value="教员"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <!-- 取消or保存 -->
          <div slot="footer" class="dialog-footer">
            <el-button @click="insertFrom = false">取 消</el-button>
            <el-button type="primary" @click="insertFun">保 存</el-button>
          </div>
        </el-dialog>
      </el-form-item>
      <el-row>
        <el-col :span="5">
          <el-form-item label="老师名称">
            <el-input v-model="form.name" placeholder="请输入老师名称"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="专业">
            <el-select v-model="form.professional" placeholder="请选择">
              <el-option
                v-for="(item, index) in zOptionData"
                :key="index"
                :label="item.professionalName"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="13">
          <el-form-item style="text-align:right;">
            <el-button type="primary" @click.native="selClickFun">查询</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <!-- 数据 -->
    <div class="main">
      <el-table
        :data="tableData"
        max-height="418"
        align="center"
        :cell-style="cellStyle"
        :header-cell-style="rowClass"
        stripe
        style="width: 100%"
      >
        <el-table-column prop="teacherName" label="姓名"></el-table-column>
        <el-table-column prop="professional.professionalName" label="专业"></el-table-column>
        <el-table-column prop="teacherPosition" label="职务"></el-table-column>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small"
            >移除</el-button>
            <el-button @click.native.prevent="deleteRow(scope.row)" type="text" size="small">修改</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 修改 -->
      <el-dialog title="修改" :visible.sync="update" class="insert">
        <el-form :model="updataData">
          <el-form-item label="教师姓名" :label-width="formLabelWidth">
            <el-input v-model="updataData.name" autocomplete="off" style="width:217px"></el-input>
          </el-form-item>
          <el-form-item label="专业" :label-width="formLabelWidth" style="width:80%">
            <el-select v-model="updataData.b" placeholder="请选择活动区域">
              <el-option label="Java" value="xuanze"></el-option>
              <el-option label="前端" value="tiankongti"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <!-- 取消or保存 -->
        <div slot="footer" class="dialog-footer">
          <el-button @click="update = false">取 消</el-button>
          <el-button type="primary" @click="updateFrom = false">修改</el-button>
        </div>
      </el-dialog>
    </div>
    <el-pagination
      background
      :page-size="pagesize"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      layout="total, prev, pager, next"
      :total="total"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  name: 'Teacher',
  data () {
    return {
      form: {
        name: '',
        professional: ''
      },
      tableData: [],
      pagesize: 2,
      currentPage: 1,
      insert: false,
      insertFrom: false,
      formLabelWidth: '120px',
      total: 0,
      // 专业option
      zOptionData: [],
      update: false,
      updataData: {
        name: ''
      },
      insertData: {}
    }
  },
  methods: {
    cellStyle ({ row, column, rowIndex, columnIndex }) {
      // 表格文字居中
      return 'text-align:center'
    },
    rowClass ({ row, rowIndex }) {
      return 'text-align:center'
    },
    // 初始页currentPage、初始每页数据数pagesize和数据data
    handleSizeChange: function (val) {
      this.currentPage = val
      this.selAxios()
    },
    handleCurrentChange: function (val) {
      this.currentPage = val
      this.selAxios()
    },
    selAxios () {
      var that = this
      this.$axios
        .get('http://192.168.43.108:8081/examsystem/teacherForPage', {
          params: {
            pageSize: that.pagesize,
            currentPage: that.currentPage
          }
        })
        .then(response => {
          console.log(response.data.data.data)
          that.tableData = response.data.data.data
          that.total = response.data.data.total
        })
        .catch(function (error) {
          // 请求失败处理
          console.log('请求处理失败')
          console.log(error)
        })
    },
    selClickFun () {
      this.$axios.get('http://192.168.43.108:8081/examsystem/teacherForPage', {
        params: {
          pageSize: this.pagesize,
          currentPage: this.currentPage,
          professionalId: this.form.professional,
          teacherName: this.form.name
        }
      }).then(res => {
        this.tableData = res.data.data.data
        this.total = res.data.data.total
      })
        .catch(function (error) {
          // 请求失败处理
          console.log('请求处理失败')
          console.log(error)
        })
    },
    insertFun () {
      this.insertFrom = false
    }
  },
  mounted () {
    this.selAxios()
    this.$axios
      .get('http://192.168.43.108:8081/examsystem/getProfessionalNoPage', {
        params: {
          positionName: '教员'
        }
      })
      .then(response => {
        console.log(response.data.data)
        this.zOptionData = response.data.data
      })
      .catch(function (error) {
        // 请求失败处理
        console.log('请求处理失败')
        console.log(error)
      })
  }
}
</script>
<style scoped>
.el-form-item {
  margin: 10px 0;
}
.StuData::-webkit-scrollbar {
  width: 4px;
}

.StuData::-webkit-scrollbar-thumb {
  background: transparent;
  border-radius: 4px;
}

.StuData:hover::-webkit-scrollbar-thumb {
  background: hsla(0, 0%, 53%, 1);
}

.StuData:hover::-webkit-scrollbar-track {
  background: hsla(0, 0%, 53%, 0.1);
}
.your-table .el-table__body-wrapper::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
</style>
