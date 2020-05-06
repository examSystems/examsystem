<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
    <el-form-item>
        <el-button type="primary" size="small" @click="insert=true">新增专业</el-button>
         <!-- 新增弹窗 -->
        <el-dialog title="新增" :visible.sync="insert" class="insert">
          <el-form :model="form">
          <el-form-item label="专业名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off" style="width:217px"></el-input>
          </el-form-item>
    </el-form>
          <!-- 取消or保存 -->
           <div slot="footer" class="dialog-footer">
            <el-button @click="insertFrom = false">取 消</el-button>
            <el-button type="primary" @click="insertFrom = false">保 存</el-button>
          </div>
        </el-dialog>
    </el-form-item>
    </el-form>
    <!-- 数据 -->
    <div class="main">
        <el-table
        :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
         max-height="458"
        align="center"
        :cell-style='cellStyle'
        :header-cell-style='rowClass'
        stripe
        style="width: 100%">
        <el-table-column
        prop="id"
        label="ID"
        width="230">
        </el-table-column>
        <el-table-column
        prop="name"
        label="专业名称"
        width="500">
        </el-table-column>
        <el-table-column
      fixed="right"
      label="操作"
      width="400">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small">
          移除
        </el-button>
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small">
          修改
        </el-button>
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
  :total="tableData.length">
</el-pagination>
  </div>
</template>
<script>
export default {
  name: 'Zhuan',
  data () {
    return {
      form: {
        name: ''
      },
      tableData: this.$store.state.zhuan,
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
    }
  }
}
</script>
<style scoped>
.el-form-item{
    margin: 10px 0;
}
.StuData::-webkit-scrollbar {
    width: 4px
}

.StuData::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 4px
}

.StuData:hover::-webkit-scrollbar-thumb {
    background: hsla(0,0%,53%,1)
}

.StuData:hover::-webkit-scrollbar-track {
    background: hsla(0,0%,53%,.1)
}
.your-table .el-table__body-wrapper::-webkit-scrollbar {
width: 10px;
height: 10px;
}
</style>
