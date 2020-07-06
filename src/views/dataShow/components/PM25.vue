<!--可吸入颗粒物实况(ug/m³)-->
<template>
  <div class="pm25">
    <div ref="pm25" class="pm25-chart" />
  </div>
</template>

<script type='text/ecmascript-6'>
import echarts from 'echarts'
import {
  axisLabel,
  axisLine,
  axisTick, legend, rem, titleStyle,
  xSplitLine,
  ySplitLine
} from '@/views/dataShow/staticEchartsSetting'
import { dateFormat, emptyArr, generatorRandNum } from '@/util'

const option = {
  color: ['#fff'],
  title: Object.assign({
    text: '可吸入颗粒物实况(ug/m³)'
  }, titleStyle),
  legend: Object.assign({
    data: ['PM2.5', 'PM10']
  }, legend),
  tooltip: { trigger: 'axis' },
  grid: {
    top: '15%',
    bottom: '2%',
    left: '6%',
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
    splitNumber: 12,
    splitLine: xSplitLine,
    data: emptyArr(13).map((val, i) => {
      return dateFormat(new Date(Date.now() - (13 - i) * 60 * 60 * 1000), 'H:00')
    })
  },
  yAxis: {
    type: 'value',
    axisLabel,
    axisLine,
    axisTick,
    min: 0,
    max: 300,
    interval: 50,
    splitLine: ySplitLine
  },
  series: [
    {
      type: 'bar',
      name: 'PM2.5',
      data: emptyArr(13).map(() => generatorRandNum(10, 20)),
      barWidth: rem(8),
      itemStyle: {
        color: '#FFBC09'
      }
    },
    {
      type: 'bar',
      name: 'PM10',
      data: emptyArr(13).map(() => generatorRandNum(20, 50)),
      barWidth: rem(8),
      itemStyle: {
        color: '#09FFC8'
      },
      markLine: {
        data: [
          [
            {
              symbol: 'none',
              yAxis: 150,
              x: '12%',
              lineStyle: {
                color: 'red'
              }
            },
            {
              yAxis: 150,
              x: '80%',
              symbol: 'none',
              label: {
                formatter: '严重污染',
                color: '#fff'
              }
            }
          ]
        ]
      }
    }
  ]
}

export default {
  name: 'PM25',
  mounted () {
    this.myChart = echarts.init(this.$refs.pm25)
    this.myChart.setOption(option)
  },
  beforeDestroy () {
    this.myChart && this.myChart.dispose()
  }
}
</script>

<style lang="scss">
.data-show {
  .pm25 {
    height: 280*$rem;
    border: 1px solid rgb(38, 58, 118);
    border-radius: 4px;
    overflow: hidden;

    .pm25-chart {
      height: 100%;
    }
  }
}
</style>
