<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item>
        <el-button type="primary" size="small" icon="el-icon-plus" @click="insert=true">新增</el-button>
        <el-button type="danger" size="small" icon="el-icon-delete">批量删除</el-button>
        <el-dialog title="新增" :visible.sync="insert" class="insert">
          <el-form :model="form">
            <el-form-item label="专业" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择">
                <el-option label="JAVA" value="S1"></el-option>
                <el-option label=".NET" value="S2"></el-option>
                <el-option label="前端" value="Y2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="科目" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择">
                <el-option label="JAVA" value="S1"></el-option>
                <el-option label=".NET" value="S2"></el-option>
                <el-option label="前端" value="Y2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="题目" :label-width="formLabelWidth">
              <el-input v-model="form.name" placeholder="请输入内容" style="width:217px"></el-input>
            </el-form-item>
            <el-form-item label="答案" :label-width="formLabelWidth">
              <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
            </el-form-item>
            <el-form-item label="评分标准" :label-width="formLabelWidth">
              <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
            </el-form-item>
          </el-form>
          <!-- 取消or保存 -->
          <div slot="footer" class="dialog-footer">
            <el-button @click="insertFrom = false">取 消</el-button>
            <el-button type="primary" @click="insertFrom = false">保 存</el-button>
          </div>
        </el-dialog>
      </el-form-item>
      <el-row class="inputRow">
        <el-col :span="5">
          <el-form-item label="专业">
            <el-select v-model="form.region" placeholder="请选择">
              <el-option label="JAVA" value="S1"></el-option>
              <el-option label=".NET" value="S2"></el-option>
              <el-option label="前端" value="Y2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="科目">
            <el-select v-model="form.region" placeholder="请选择">
              <el-option label="JAVA" value="S1"></el-option>
              <el-option label=".NET" value="S2"></el-option>
              <el-option label="前端" value="Y2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="13">
          <el-form-item style="text-align:right;">
            <el-button type="primary">查询</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-table
      ref="multipleTable"
      :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      max-height="395"
      tooltip-effect="dark"
      style="width: 100%"
      align="center"
      :cell-style="cellStyle"
      :header-cell-style="rowClass"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="banji" label="班级"></el-table-column>
      <el-table-column prop="tongG" label="考核通过人数" show-overflow-tooltip></el-table-column>
      <el-table-column prop="zongRenShu" label="总人数"></el-table-column>
      <el-table-column prop="TongGuoLv" label="通过率"></el-table-column>
      <el-table-column fixed="right" label="操作">
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
    <el-pagination
      background
      :page-size="pagesize"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      layout="total, prev, pager, next"
      :total="tableData.length"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  name: 'ClassXunLian',
  data () {
    return {
      tableData: [
        {
          id: '0',
          banji: 'T218',
          tongG: 28,
          zongRenShu: 30,
          TongGuoLv: '93.33%'
        },
        {
          id: '0',
          banji: 'T218',
          tongG: 28,
          zongRenShu: 30,
          TongGuoLv: '93.33%'
        },
        {
          id: '0',
          banji: 'T218',
          tongG: 28,
          zongRenShu: 30,
          TongGuoLv: '93.33%'
        },
        {
          id: '0',
          banji: 'T218',
          tongG: 28,
          zongRenShu: 30,
          TongGuoLv: '93.33%'
        },
        {
          id: '0',
          banji: 'T218',
          tongG: 28,
          zongRenShu: 30,
          TongGuoLv: '93.33%'
        },
        {
          id: '0',
          banji: 'T218',
          tongG: 28,
          zongRenShu: 30,
          TongGuoLv: '93.33%'
        },
        {
          id: '0',
          banji: 'T218',
          tongG: 28,
          zongRenShu: 30,
          TongGuoLv: '93.33%'
        },
        {
          id: '0',
          banji: 'T218',
          tongG: 28,
          zongRenShu: 30,
          TongGuoLv: '93.33%'
        },
        {
          id: '0',
          banji: 'T218',
          tongG: 28,
          zongRenShu: 30,
          TongGuoLv: '93.33%'
        },
        {
          id: '0',
          banji: 'T218',
          tongG: 28,
          zongRenShu: 30,
          TongGuoLv: '93.33%'
        },
        {
          id: '0',
          banji: 'T218',
          tongG: 28,
          zongRenShu: 30,
          TongGuoLv: '93.33%'
        },
        {
          id: '0',
          banji: 'T218',
          tongG: 28,
          zongRenShu: 30,
          TongGuoLv: '93.33%'
        },
        {
          id: '0',
          banji: 'T218',
          tongG: 28,
          zongRenShu: 30,
          TongGuoLv: '93.33%'
        }
      ],
      form: {
        name: '',
        region: ''
      },
      pagesize: 10,
      currentPage: 1,
      insert: false,
      insertFrom: false,
      formLabelWidth: '120px'
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
    handleSelectionChange (val) {
      console.log(val)
    },
    insertFun () {
      console.log(1)
      this.insert = true
    }
  }
}
</script>

<style scoped>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.insert .el-form-item {
  margin: 20px 0;
}
.insert .el-dialog__body {
  padding: 0 20px 30px !important;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.inputRow {
  margin-top: 20px;
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
