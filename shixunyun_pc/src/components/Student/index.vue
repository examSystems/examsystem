<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item>
        <el-button type="primary" size="small" @click="insert-=true">新增学员</el-button>
        <!-- 新增弹窗 -->
        <el-dialog title="新增" :visible.sync="insert" class="insert">
          <el-form :model="form">
            <el-form-item label="学生姓名" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off" style="width:217px"></el-input>
            </el-form-item>
            <el-form-item label="开班时间" :label-width="formLabelWidth">
              <div class="block">
                <el-date-picker v-model="value1" type="datetime" placeholder="选择日期时间"></el-date-picker>
              </div>
            </el-form-item>
            <el-form-item label="班级" :label-width="formLabelWidth" style="width:80%">
              <el-input v-model="form.name" autocomplete="off" style="width:217px"></el-input>
            </el-form-item>
            <el-form-item label="专业" :label-width="formLabelWidth" style="width:80%">
              <el-select v-model="form.b" placeholder="请选择活动区域">
                <el-option label="Java" value="xuanze"></el-option>
                <el-option label="前端" value="tiankongti"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <!-- 取消or保存 -->
          <div slot="footer" class="dialog-footer">
            <el-button @click="insertFrom = false">取 消</el-button>
            <el-button type="primary" @click="insertFrom = false">保 存</el-button>
          </div>
        </el-dialog>
      </el-form-item>
      <el-row>
        <el-col :span="5">
          <el-form-item label="学员名称">
            <el-input v-model="form.name" placeholder="请输入内容"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="班级">
            <el-select v-model="form.region" placeholder="请选择">
              <el-option label="S1" value="S1"></el-option>
              <el-option label="S2" value="S2"></el-option>
              <el-option label="Y2" value="Y2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="专业">
            <el-select v-model="form.region" placeholder="请选择">
              <el-option label="S1" value="S1"></el-option>
              <el-option label="S2" value="S2"></el-option>
              <el-option label="Y2" value="Y2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item style="text-align:right;">
            <el-button type="primary">查询</el-button>
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
        <el-table-column prop="stuName" label="姓名" width="180"></el-table-column>
        <el-table-column prop="openClassTime" label="开班时间" width="180"></el-table-column>
        <el-table-column prop="address" label="班级"></el-table-column>
        <el-table-column prop="major" label="专业"></el-table-column>
        <el-table-column fixed="right" label="操作" width="120">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small"
            >移除</el-button>
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small"
            >修改</el-button>
          </template>
        </el-table-column>
      </el-table>
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
  name: 'Student',
  data () {
    return {
      form: {
        name: ''
      },
      tableData: [],
      pagesize: 10,
      currentPage: 1,
      total: 0,
      insert: false,
      insertFrom: false,
      formLabelWidth: '120px',
      value1: ''
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
    handleSizeChange: function (size) {
      this.pagesize = size
      console.log(this.pagesize) // 每页下拉显示数据
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage
      console.log(this.currentPage) // 点击第几页
    },
    selAxios () {
      var that = this
      this.$axios
        .get('http://192.168.43.108:8081/examsystem/studentForPage', {
          params: {
            pageSize: that.pagesize,
            currentPage: that.currentPage
          }
        })
        .then(response => {
          console.log(response)
          that.tableData = response.data.data.data
          that.total = response.data.data.total
        })
        .catch(function (error) {
          // 请求失败处理
          console.log('请求处理失败')
          console.log(error)
        })
    }
  },
  mounted () {
    this.selAxios()
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
