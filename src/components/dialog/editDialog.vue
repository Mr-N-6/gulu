<template>
    <div class="editDialogWrapper">
      <el-dialog title="Edit" :visible.sync="dialogFormVisible" :close-on-press-escape="false" :show-close="false" :center="false" :close-on-click-modal="false">
        <el-form :model="form">
          <el-form-item label="时间：" :label-width="formLabelWidth">
            <el-date-picker
              v-model="form.date"
              type="datetime"
              placeholder="Please pick a date">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="标题：" :label-width="formLabelWidth">
            <el-input v-model="form.title" auto-complete="on"></el-input>
          </el-form-item>
          <el-form-item label="状态：" :label-width="formLabelWidth">
            <el-input v-model="form.state" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="重要性：" :label-width="formLabelWidth">
            <el-input v-model="form.important" auto-complete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="cancel()">取 消</el-button>
          <el-button type="primary" @click="sure()">确 定</el-button>
        </div>
      </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "editDialog",
        props: ['dialogVisible', 'rowsData'],
        watch: {
          dialogVisible(newVal, oldVal){
            this.dialogFormVisible = newVal
          },
          rowsData(newVal, oldVal) {
            this.form = newVal
          }
        },
        data(){
          return {
            dialogFormVisible: this.dialogVisible,
            form: this.rowsData,
            formLabelWidth: '100px'
          }
        },
        mounted(){
          this.dialogFormVisible = this.dialogVisible
        },
        methods: {
          sure(){
            if (this.form.date === undefined) {
              this.$message.error('日期不能为空');
              return;
            }
            if (this.form.title === undefined) {
              this.$message.error('标题不能为空');
              return;
            }
            if (this.form.state === undefined) {
              this.$message.error('状态不能为空');
              return;
            }
            if (this.form.state.length !== 1 || !/^[1-3]\d*$/.test(this.form.state)) {
              this.$message.error('状态只能输入1-3的正整数');
              return;
            }
            if (this.form.important === undefined) {
              this.$message.error('重要性不能为空');
              return;
            }
            if (this.form.important.length !== 1 || !/^[1-2]\d*$/.test(this.form.important)) {
              this.$message.error('重要性只能输入1或2');
              return;
            }
            this.dialogFormVisible = false;
            this.$emit('closeDialog', false);
            this.$message.success('修改成功');
            if (this.form.date) {
              this.form.date = `${this.form.date.getFullYear()}-${this.form.date.getMonth()+1}-${this.form.date.getDate()} ${this.form.date.getHours()}:${this.form.date.getMinutes()}`;
            }
            this.$emit('addTableDataMsg', this.form)
          },
          cancel(){
            this.dialogFormVisible = false;
            this.$emit('closeDialog', false);
            this.$message('取消编辑')
          }
        }
    }
</script>

<style lang="less">
  .el-select {
    float: left;
  }
  .el-date-editor.el-input, .el-date-editor.el-input__inner {
    float: left;
  }
  .editDialogWrapper {
    .el-dialog__header {
      .el-dialog__title {
        float: left;
      }
    }
  }
</style>
