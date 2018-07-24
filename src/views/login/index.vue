<template>
  <div class="form-wrapper">
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <el-form-item label="" prop="user">
        <span class="icon-wrapper">
          <svg-icon iconName="user"></svg-icon>
        </span>
        <el-input type="text" v-model="ruleForm2.user" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="" prop="pass">
        <span class="icon-wrapper">
          <svg-icon iconName="pass"></svg-icon>
        </span>
        <el-input type="password" v-model.number="ruleForm2.pass"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">login in</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
// import axios from 'axios'
import {login} from '@/api/login'
// import {Message, MessageBox} from 'element-ui'
export default {
  name: 'login',
  data() {
    var checkUser = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'))
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      ruleForm2: {
        pass: '',
        user: ''
      },
      rules2: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        user: [
          { validator: checkUser, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          login(this.ruleForm2.user, this.ruleForm2.pass).then(res => {
            if (res.code === '000000') {
              console.log(res)
              this.$router.push('/layout')
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}

</script>
<style rel="stylesheet/less" lang="less" scoped>
.form-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: lightblue;
  .el-form {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    .el-button {
      width: 100%;
    }
    .icon-wrapper {
      position: absolute;
      left: 1px;
      top: 2px;
      font-size: 12px;
      width: 14px;
      height: 14px;
      display: inline-block;
      vertical-align: middle;
      margin-right: 5px;
      color:#000;
      z-index: 1000;
    }
  }
}

</style>
