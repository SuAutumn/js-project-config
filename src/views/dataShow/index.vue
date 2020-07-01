<template>
  <div class="data-show">
    <div class="data-show-title">中科易贺气象监测数据展示</div>
    <div class="tick">{{ tick | dateFormat("yyyy年MM月dd日 HH:mm:ss") }}</div>
    <div class="data-show-container">
      <div class="left" />
      <div class="center" />
      <div class="right" />
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  name: 'DataShow',
  data () {
    return {
      tick: new Date()
    }
  },
  mounted () {
    this.timer = setInterval(() => {
      this.tick = new Date()
    }, 1000)
  },
  beforeDestroy () {
    this.timer && clearInterval(this.timer)
  }
}
</script>

<style lang="scss">
.data-show {
  width: 100vw;
  height: 100vh;
  background: url("~@/assets/dataShow/bg.png") no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;

  .data-show-title {
    font-size: 40*$rem;
    text-align: center;
    font-weight: bold;
    font-family: SourceHanSansCN-Bold 微软雅黑 sans-serif;
    color: $dataShowTitleColor;
    margin-top: 15*$rem;
    letter-spacing: 5*$rem;
  }

  .tick {
    color: #25E6FF;
    font-size: 26*$rem;
    text-align: center;
    font-family: DS-Digital;
  }

  .data-show-container {
    display: flex;
    height: 100%;
    & > div {
      flex: 1;
    }
    & > div:nth-child(2) {
      flex: 2;
    }
  }
}
</style>
