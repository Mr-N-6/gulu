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
            this.dialogFormVisible = false;
            this.$emit('closeDialog', false);
            this.$message.success('修改成功');
            console.log(this.rowsData);
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
