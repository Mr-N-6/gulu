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

    <el-button @click.native="searchFlow(tableTitle)" size="mini" type="primary"><i class="el-icon-search"></i>搜索</el-button>
    <el-button @click.native="addTableData()" size="mini" type="primary"><i class="el-icon-edit"></i>添加</el-button>
    <el-button size="mini" type="primary"><i class="el-icon-download"></i>导出</el-button>

    <el-checkbox v-model="auditor">审核人</el-checkbox>

    <div>
      <el-table
        :height="tableHeight"
        :data="tableData"
        border
        highlight-current-row
        style="width: 100%">
        <el-table-column
          type="index"
          label="序号"
          align="center"
          width="50">
        </el-table-column>
        <el-table-column
          prop="date"
          label="时间"
          align="center"
          width="180">
        </el-table-column>
        <el-table-column
          prop="title"
          label="标题"
          align="center"
          width="580">
        </el-table-column>
        <el-table-column
          prop="author"
          align="center"
          label="作者">
        </el-table-column>
        <el-table-column
          prop="important"
          align="center"
          label="重要性">
        </el-table-column>
        <el-table-column
          prop="read"
          align="center"
          label="阅读数">
        </el-table-column>
        <el-table-column
          prop="state"
          align="center"
          label="状态">
          <template slot-scope="scope">
            <el-tag :type="scope.row.status">{{ scope.row.state }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="operation"
          align="center"
          width="230px"
          label="操作">
          <template slot-scope="scope">
            <el-button @click.native="checkDialogFormVisible(scope.$index, scope.row)" type="primary" size="mini">编辑</el-button>
            <el-button @click.native="release(scope.$index, scope.row)" :type="scope.row.status" size="mini">{{ scope.row.state === 'published' ? '草稿' : '发布' }}</el-button>
            <el-button @click.native="deleteRow(scope.$index, tableData)" type="danger" size="mini">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="paginationWrapper">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-sizes="pageSizes"
          :page-size="pageIndex"
          layout="sizes, prev, pager, next"
          :total="total">
        </el-pagination>
      </div>
    </div>

    <EditDialog @addTableDataMsg="addTableDataMsg" :rowsData="rowsData" @closeDialog="closeDialog" :dialogVisible.sync="dialogFormVisible"></EditDialog>
  </div>
</template>

<script>
  import EditDialog from '../dialog/editDialog'
  export default {
    name: 'work',
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
        currentPage: 1,
        tableHeight: window.innerHeight - 180,
        tableState: '',
        dialogFormVisible: null,
        rowsData: '',
        total: null,
        pageResult: [],
        pageIndex: 3,
        pageSizes: [3, 5, 8, 10]
      }
    },
    components: {
      EditDialog
    },
    mounted(){
      this.getTableData();
    },
    watch: {
      pageIndex(newVal, oldVal){
        this.pageIndex = newVal;
      }
    },
    methods: {
      handleSizeChange(val) {
        this.pageIndex = val;
        this.getTableData();
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.tableData = this.pageResult[val-1];
      },
      deleteRow(index, rows){
        this.$confirm('此操作将永久删除当前行, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          rows.splice(index, 1);
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      release(index, row){
        console.log(index, row);
        if (row.releaseTxt === '发布') {
          row.status = 'success';
          row.state = 'published';
          row.releaseTxt = '草稿';
        } else {
          row.status = 'info';
          row.state = 'draft';
          row.releaseTxt = '发布';
        }
      },
      getTableData(){
        let that = this;
        const loading = that.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        that.$axios.get('https://www.easy-mock.com/mock/5b5aeca298d3191437d914a2/table-Data/tableData').then( res => {
          for (let i = 0; i < res.data.data.length; i++) {
            that.$set(res.data.data[i], 'status', '123');
            that.$set(res.data.data[i], 'releaseTxt', '发布');
            switch (res.data.data[i].state) {
              case '0':
                res.data.data[i].state = 'draft';
                res.data.data[i].status = 'info';
                break;
              case '1':
                res.data.data[i].state = 'published';
                res.data.data[i].status = 'success';
                break;
              case '2':
                res.data.data[i].state = 'deleted';
                res.data.data[i].status = 'danger';
                break;
            }
          }
          function sliceArr(array, size) {
            for (var x = 0; x < Math.ceil(array.length / size); x++) {
              var start = x * size;
              var end = start + size;
              that.pageResult.push(array.slice(start, end));
            }
            return that.pageResult;
          }
          sliceArr(res.data.data, that.pageIndex);
          that.total = res.data.data.length;
          that.tableData = that.pageResult[0];
          loading.close();
        }).catch( err => {
          this.$message.error(`错误信息：${err}`)
        })
      },
      checkDialogFormVisible(index, row){
        console.log(index, row);
        this.rowsData = row;
        this.dialogFormVisible = true;
      },
      closeDialog(val){
        // console.log(val)
        this.dialogFormVisible = val
      },
      addTableData(){
        this.dialogFormVisible = true;
        this.rowsData = {}
      },
      addTableDataMsg(val){
        let that = this;
       console.log(val);
       this.tableData.push({
         id: this.tableData.length,
         date: val.date,
         title: val.title,
         author: 'Linda',
         important: val.important,
         read: '2342',
         state: val.state,
         operation: '0'
       });
        for (let i = 0; i < this.tableData.length; i++) {
          that.$set(that.tableData[i], 'status', '123');
          that.$set(that.tableData[i], 'releaseTxt', '发布');
          switch (this.tableData[i].state) {
            case '0':
              this.tableData[i].state = 'draft';
              that.tableData[i].status = 'info';
              break;
            case '1':
              this.tableData[i].state = 'published';
              that.tableData[i].status = 'success';
              break;
            case '2':
              this.tableData[i].state = 'deleted';
              that.tableData[i].status = 'danger';
              break;
          }
        }

      },
      searchFlow(tableTitle){
        console.log(tableTitle)
        for (let i = 0; i < this.tableData.length; i++) {
          if (this.tableData[i].id === tableTitle) {
            this.tableData = [];
            this.tableData.push(this.tableData[i]);
          }
        }
      },

    },
  }
</script>

<style scoped>
  .con2Wrap .tableTitleInput {
    width: 200px;
  }
  .tableTitleInput {
    float: left;
  }
  .el-icon-search, .el-icon-edit, .el-icon-download {
    margin-right: 5px;
  }
  .paginationWrapper {
    padding: 20px 0;
  }

</style>
<style>
  .el-pager li.active {
    color: #409eff !important;
    border-left: 0;
  }
</style>
