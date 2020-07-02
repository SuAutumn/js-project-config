<!--温度数据-->
<template>
  <div class="temp">
    <div ref="tempChart" class="temp-chart" />
  </div>
</template>

<script type='text/ecmascript-6'>
import echarts from 'echarts'
import {
  axisLabel,
  axisLine,
  axisTick, legend, linearGradient, seriesLabel, titleStyle,
  xSplitLine,
  ySplitLine
} from '@/views/dataShow/staticEchartsSetting'
import { dateFormat, emptyArr, generatorRandNum } from '@/util'

const option = {
  color: ['#fff'],
  title: Object.assign({
    text: '温度实况(℃)'
  }, titleStyle),
  legend: Object.assign({
    data: ['空气温度', '土壤温度']
  }, legend),
  grid: {
    top: '15%',
    bottom: '5%',
    left: '5%',
    right: '8%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    axisLine: Object.assign({
      onZero: false
    }, axisLine),
    axisLabel: Object.assign({
      interval: 0,
      formatter (value, i) {
        return i % 4 === 0 ? value : ''
      }
    }, axisLabel),
    axisTick,
    splitNumber: 12,
    splitLine: xSplitLine,
    data: emptyArr(13).map((val, i) => {
      return dateFormat(new Date(Date.now() - (13 - i) * 60 * 60 * 1000), 'MM-dd HH:00')
    }),
    boundaryGap: false
  },
  yAxis: {
    type: 'value',
    axisLabel: Object.assign({}, axisLabel),
    axisLine,
    axisTick,
    min: -30,
    max: 50,
    interval: 10,
    splitLine: ySplitLine
  },
  series: [
    Object.assign({
      name: '空气温度',
      data: emptyArr(13).map((val, i) => {
        return {
          value: generatorRandNum(20, 28)
        }
      }),
      type: 'line',
      areaStyle: {
        origin: 'start',
        color: linearGradient('#1D97FF', '#1DD7FF00')
      },
      color: '#1D97FF'
    }, seriesLabel),
    Object.assign({
      name: '土壤温度',
      data: emptyArr(13).map((val, i) => {
        return {
          value: generatorRandNum(12, 15)
        }
      }),
      type: 'line',
      areaStyle: {
        origin: 'start',
        color: linearGradient('#FFC21D', '#FF871D00')
      },
      color: '#FFC21D'
    }, seriesLabel)
  ]
}

export default {
  name: 'Temperature',
  mounted () {
    this.myChart = echarts.init(this.$refs.tempChart)
    this.myChart.setOption(option)
  },
  beforeDestroy () {
    this.myChart && this.myChart.dispose()
  }
}
</script>

<style lang="scss">
.data-show {
  .temp {
    height: 272*$rem;
    border: 1px solid rgb(38, 58, 118);
    border-radius: 4px;
    overflow: hidden;

    .temp-chart {
      height: 100%;
    }
  }
}
</style>
