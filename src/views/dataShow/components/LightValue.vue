<!--光照实况(LX)-->
<template>
  <div class="light">
    <div ref="lightChart" class="light-chart" />
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
    text: '光照实况(LX)'
  }, titleStyle),
  legend: Object.assign({
    data: ['最低光照', '平均光照', '最高光照']
  }, legend),
  grid: {
    top: '25%',
    bottom: '2%',
    left: '3%',
    right: '8%',
    containLabel: true
  },
  tooltip: {
    trigger: 'axis',
    position: (point, params, dom, rect, size) => {
      const { contentSize, viewSize } = size
      let x = 0
      if (point[0] + contentSize[0] > viewSize[0]) {
        x = point[0] - contentSize[0] - 5
      } else {
        x = point[0] + 5
      }
      return [x, (viewSize[1] - contentSize[1]) / 2]
    }
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
    }),
    boundaryGap: false
  },
  yAxis: {
    type: 'value',
    axisLabel: Object.assign({}, axisLabel),
    axisLine,
    axisTick,
    min: 0,
    max: 3000,
    interval: 500,
    splitLine: ySplitLine
  },
  series: [
    Object.assign({
      name: '最高光照',
      data: emptyArr(13).map((val, i) => {
        return {
          value: generatorRandNum(2500, 2800)
        }
      }),
      type: 'line',
      areaStyle: {
        color: linearGradient('#FF562F', '#FDA424'),
        opacity: 1
      },
      color: '#FF562F',
      lineStyle: { width: 0 },
      symbol: 'none'
    }, seriesLabel, {
      label: { show: false }
    }),
    Object.assign({
      name: '平均光照',
      data: emptyArr(13).map((val, i) => {
        return {
          value: generatorRandNum(2000, 2500)
        }
      }),
      type: 'line',
      areaStyle: {
        color: linearGradient('#1D97FF', '#6ABAFF'),
        opacity: 1
      },
      color: '#1D97FF',
      lineStyle: { width: 0 },
      symbol: 'none'
    }, seriesLabel, { label: { show: false }}),
    Object.assign({
      name: '最低光照',
      data: emptyArr(13).map((val, i) => {
        return {
          value: generatorRandNum(1600, 2000)
        }
      }),
      type: 'line',
      areaStyle: {
        color: linearGradient('#1CF6FF', '#90FBFF'),
        opacity: 1
      },
      color: '#1CF6FF',
      lineStyle: { width: 0 },
      symbol: 'none'
    }, seriesLabel, { label: { show: false }})
  ]
}

export default {
  name: 'LightValue',
  mounted () {
    this.myChart = echarts.init(this.$refs.lightChart)
    this.myChart.setOption(option)
  },
  beforeDestroy () {
    this.myChart && this.myChart.dispose()
  }
}
</script>

<style lang="scss">
.data-show {
  .light {
    height: 160*$rem;
    border: 1px solid rgb(38, 58, 118);
    border-radius: 4px;
    overflow: hidden;

    .light-chart {
      height: 100%;
    }
  }
}
</style>
