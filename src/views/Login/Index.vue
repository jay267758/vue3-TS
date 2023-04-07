<template>
  <div class="login-box">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm login"
    >
      <el-form-item label="用户名" prop="name">
        <el-input
          v-model="ruleForm.name"
          type="text"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input
          v-model="ruleForm.pass"
          type="password"
          autocomplete="off"
          show-password
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm(ruleFormRef)"
          :loading="loading"
          >Submit</el-button
        >
        <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">

import { reactive, ref } from 'vue'
import {useRouter} from 'vue-router';
import type { FormInstance, FormRules } from 'element-plus'
import useToken from '@/pinia/token';

const router = useRouter();
const ruleFormRef = ref<FormInstance>();
const loading = ref(false);
const tokenState = useToken();

const validate = (rule: any, value: any, callback: any) => {
  const nameRegExp = new RegExp(/^[0-9a-zA-Z_`~!@#$%^&*()_\-+=<>?:"{}|,.\\/;'\\[\]·~!@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]{6,18}$/, "g");
  if (!nameRegExp.test(value)) {
     callback(new Error("只允许包含数字、字母和下划线特殊字符、6~18字符"))
  } else {
    callback();
  }
}
const ruleForm = reactive({
  pass: '',
  name: '',
})

const rules = reactive<FormRules>({
  name: [{ validator: validate, trigger: 'blur' }],
  pass: [{ validator: validate, trigger: 'blur' }],
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log(ruleForm);
      loading.value = true;
      const token = JSON.stringify(ruleForm);
      document.cookie = 'token=';
      setTimeout(() => {
        tokenState.setToken(token);
        document.cookie = `token=${token}`;
        router.push('/');
        loading.value = false;
        formEl.resetFields()
      }, 2000)
    } else {
      return false
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

</script>

<style lang="scss" scoped>
.login-box {
  width: 100%;
  height: 100vh;
  display:  flex;
  justify-content: center;
  align-items: center;
  .login {
    width: 420px;
    margin-bottom: 100px;
  }
}
</style>
