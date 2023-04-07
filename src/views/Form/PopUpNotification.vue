<template>
  <div>
    <div
      class="list"
      v-for="(item, index) in list"
      :key="index"
      :style="{ background: item.background
      }"
      @click="handleClickItem(index)"
    >
      <img src="https:''via.placeholder.com/150">
      <div class="list-item">{{ index + 1 }}</div>
    </div>
    <div v-show="isLoading" class="loading">加载中...</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      timer: null,
      list: [
        { background: 'rgb(233,32,38)' }
      ]
    }
  },
  mounted() {
    this.loadList(11);
    window.addEventListener('scroll', this.lazyLoading, true); // 监听滚动事件
  },
  methods: {
    lazyLoading (e) {
      const scrollTop = e.target.scrollTop
      const clientHeight = e.target.clientHeight
      const scrollHeight = e.target.scrollHeight

      if (scrollHeight >= 5000) return; // 由于每个框都给得比较大，写成5000

       // 滚动过半，再加载的处理事件
      if (scrollTop + clientHeight > scrollHeight / 2) {
          this.loadList(10)
      }
    },
    async getListItems(num) {
      this.isLoading = true;
      if (!this.timer) {
        let sun = Math.ceil(Math.random()*5);
        console.log(sun)
        let newArr = [];
        this.timer = setTimeout(() => {
          let backgroundColor = '';
          let one = 0;
          let two = 0;
          let three = 0;
          for(let i = 0; i < num; i++){
            one = Math.ceil(Math.random()*255);
            two = Math.ceil(Math.random()*255);
            three = Math.ceil(Math.random()*255);
            backgroundColor = `rgb(${one}, ${two}, ${three})`;
            newArr.push({
              background: backgroundColor
            });
          }
          this.list = [...this.list, ...newArr]
          this.isLoading = false;
          clearTimeout(this.timer);
          this.timer = null;
        }, sun*1000)
      }
    },
    loadList(num = 10) {
      this.getListItems(num)
    },
    handleClickItem(index) {
      alert(index + 1)
    }
  }
}
</script>

<style scoped>
.list {
  display: flex;
  width: 100%;
  height: 200px;
  line-height: 200px;
}
.list-item {
  flex: 1;
  color: #fff;
  font-size: 24px;
  text-align: center;
}
.loading {
  margin: 10px auto;
  color: #333;
  text-align: center;
}
</style>

<!-- <template>
  <div class="box">
    <div class="box-1">
      <h2 @click="open = true">点击打开弹窗</h2>
    </div>
    <div class="box-2" v-if="open">
      <div class="box-2-1">
        <span @click="open = false">X</span>
        <h1>标题</h1>
        <h3>这是弹窗的内容</h3>
        <div>
          <button @click="open = false">
            取消
          </button>
          <button class="box-2-1-button" @click="open = false">
            确定
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        open: true
      }
    },
    methods: {
      onOpen() {
        console.log(this.open)
      }
    }
  }
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.box {
  width: 100%;
  height: 100vh;
  position: relative;
}

.box-1 {
  display: flex;
  justify-content: center;
}
.box-2 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #ccc;
  opacity: 0.9;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box-2-1 {
  width: 400px;
  height: 160px;
  border-radius: 10px;
  background-color: #fff;
  margin: auto;
}
.box-2-1 > h1 {
  margin-top: 20px;
  text-align: center;
}

.box-2-1 > h3 {
  text-align: center;
}
.box-2-1 > div {
  text-align: center;
}

span {
  float: right;
  cursor: pointer;
}

button {
  padding: 6px 12px;
  cursor: pointer;
}
.box-2-1-button {
  background-color: #409eff;
  margin-left: 20px;
}

h2 {
  color: #409eff;
  cursor: pointer;
}

h3 {
  line-height: 60px;
}

</style> -->