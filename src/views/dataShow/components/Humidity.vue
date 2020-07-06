<!--湿度数据-->
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
    text: '湿度实况(%RH)'
  }, titleStyle),
  tooltip: {
    trigger: 'axis'
  },
  legend: Object.assign({
    data: ['空气湿度', '土壤湿度']
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
    axisLine,
    axisLabel,
    axisTick,
    splitNumber: 12,
    splitLine: xSplitLine,
    data: emptyArr(13).map((val, i) => {
      return dateFormat(new Date(Date.now() - (13 - i) * 60 * 60 * 1000), 'H:00')
    }),
    boundaryGap: false
  },
  yAxis: {
    type: 'value',
    axisLabel: Object.assign({}, axisLabel),
    axisLine,
    axisTick,
    min: 0,
    max: 80,
    interval: 10,
    splitLine: ySplitLine
  },
  series: [
    Object.assign({
      name: '空气湿度',
      data: emptyArr(13).map((val, i) => {
        return {
          value: generatorRandNum(40, 50)
        }
      }),
      type: 'line',
      areaStyle: {
        origin: 'start',
        color: linearGradient('#1DA7FF80', '#1DA7FF80', '#0280CF00')
      },
      color: '#1D97FF'
    }, seriesLabel),
    Object.assign({
      name: '土壤湿度',
      data: emptyArr(13).map((val, i) => {
        return {
          value: generatorRandNum(30, 40)
        }
      }),
      type: 'line',
      areaStyle: {
        origin: 'start',
        color: linearGradient('#1DE7FF80', '#04B1D600')
      },
      color: '#02DEFB'
    }, seriesLabel)
  ]
}

export default {
  name: 'Humidity',
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
