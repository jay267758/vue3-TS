<template>
  <div>
    <p>孙组件</p>
    <p>爷传：{{ HomeName }}</p>
    <p>父传：{{ FatherName }}</p>
  </div>
</template>

<script>
export default {
  //  inject 接收爷父传过来的数据
  inject: ['FatherName', 'HomeName'],
  setup() {
    // provide 给子孙传数据
    // inj
  }
}
</script>