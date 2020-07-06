<!--近七日日降雨量(mm)-->
<template>
  <div class="rain7">
    <div ref="rain7" class="rain7-chart" />
  </div>
</template>

<script type='text/ecmascript-6'>
import echarts from 'echarts'
import {
  axisLabel,
  axisLine,
  axisTick, linearGradient, rem, titleStyle,
  xSplitLine,
  ySplitLine
} from '@/views/dataShow/staticEchartsSetting'
import { dateFormat, emptyArr, generatorRandNum } from '@/util'

const option = {
  color: ['#fff'],
  title: Object.assign({
    text: '近七日日降雨量(mm)'
  }, titleStyle),
  tooltip: { trigger: 'axis' },
  grid: {
    top: '25%',
    bottom: '2%',
    left: '5%',
    right: '8%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    axisLine: Object.assign({
      onZero: false
    }, axisLine),
    axisLabel,
    axisTick,
    splitLine: xSplitLine,
    data: emptyArr(7).map((val, i) => {
      return dateFormat(new Date(Date.now() - (7 - i) * 24 * 60 * 60 * 1000), 'MM-dd')
    })
  },
  yAxis: {
    type: 'value',
    axisLabel,
    axisLine,
    axisTick,
    // min: 0,
    // max: 60,
    // interval: 10,
    splitLine: ySplitLine
  },
  series: [
    {
      type: 'bar',
      name: '降水量（mm）',
      data: emptyArr(7).map(() => generatorRandNum(0, 50)),
      barWidth: rem(24),
      itemStyle: {
        color: linearGradient('#00FFAE', '#1CDCFF', '#1DA7FF')
      }
    }
  ]
}

export default {
  name: 'Rain7',
  mounted () {
    this.myChart = echarts.init(this.$refs.rain7)
    this.myChart.setOption(option)
  },
  beforeDestroy () {
    this.myChart && this.myChart.dispose()
  }
}
</script>

<style lang="scss">
.data-show {
  .rain7 {
    height: 160*$rem;
    border: 1px solid rgb(38, 58, 118);
    border-radius: 4px;
    overflow: hidden;

    .rain7-chart {
      height: 100%;
    }
  }
}
</style>
