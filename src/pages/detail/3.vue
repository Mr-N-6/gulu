<template>
	<div class="con2Wrap">
    <el-input
      class="tableTitleInput"
      placeholder="标题"
      v-model="tableTitle"
      clearable>
    </el-input>

    <el-select v-model="tableSelectImportant" placeholder="重要性">
      <el-option
        v-for="item in tableSelectImportantOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>

    <el-select v-model="tableSelectType" placeholder="类型">
      <el-option
        v-for="item in tableSelectTypeOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>

    <el-button type="primary"><i class="el-icon-search"></i>搜索</el-button>
    <el-button type="primary"><i class="el-icon-edit"></i>添加</el-button>
    <el-button type="primary"><i class="el-icon-download"></i>导出</el-button>

    <el-checkbox v-model="auditor">审核人</el-checkbox>

    <div>
      <el-table
        :height="tableHeight"
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          type="index"
          label="序号"
          width="50">
        </el-table-column>
        <el-table-column
          prop="date"
          label="时间"
          width="180">
        </el-table-column>
        <el-table-column
          prop="title"
          label="标题"
          width="180">
        </el-table-column>
        <el-table-column
          prop="author"
          label="作者">
        </el-table-column>
        <el-table-column
          prop="important"
          label="重要性">
        </el-table-column>
        <el-table-column
          prop="read"
          label="阅读数">
        </el-table-column>
        <el-table-column
          prop="state"
          label="状态">
          <template slot-scope="scope">

          </template>
        </el-table-column>
        <el-table-column
          prop="operation"
          label="操作">
        </el-table-column>
      </el-table>

      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage2"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="100"
          layout="sizes, prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
    </div>
	</div>
</template>

<script>
  import tableData from './tableData'
  export default {
    data(){
      return {
        tableTitle: '', // 标题
        tableSelectImportant: '', // 重要性
        tableSelectType: '', // 类型
        tableSelectImportantOptions: [
          {
            value: '1',
            label: 1
          },
          {
            value: '2',
            label: 2
          },
          {
            value: '3',
            label: 3
          }
        ],
        tableSelectTypeOptions: [
          {
            value: '1',
            label: 'CN'
          },
          {
            value: '2',
            label: 'US'
          },
          {
            value: '3',
            label: 'EU'
          }
        ],
        auditor: false,
        tableData: [], // 表格数据
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        tableHeight: window.innerHeight - 180
      }
    },
    mounted(){
      this.tableData = tableData.tableData;
      console.log(this.tableHeight)
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
  }
</script>

<style scoped>
  .con2Wrap .tableTitleInput {
    width: 200px;
  }
  .el-icon-search, .el-icon-edit, .el-icon-download {
    margin-right: 5px;
  }
  .block {
    padding: 20px 0;
  }

</style>
<style>
  .el-pager li.active {
    color: #409eff !important;
    border-left: 0;
  }
</style>
