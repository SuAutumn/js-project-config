<!--空气中CO2含量实况(ppm)-->
<template>
  <div class="co2">
    <div ref="co2Chart" class="co2-chart" />
  </div>
</template>

<script type='text/ecmascript-6'>
import echarts from 'echarts'
import {
  axisLabel,
  axisLine,
  axisTick, seriesLabel, titleStyle,
  xSplitLine,
  ySplitLine
} from '@/views/dataShow/staticEchartsSetting'
import { dateFormat, emptyArr, generatorRandNum } from '@/util'

const option = {
  color: ['#fff'],
  title: Object.assign({
    text: '空气中CO2含量实况(ppm)'
  }, titleStyle),
  grid: {
    top: '25%',
    bottom: '2%',
    left: '2%',
    right: '8%',
    containLabel: true
  },
  tooltip: {
    trigger: 'axis'
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
    axisLabel,
    axisLine,
    axisTick,
    min: 0,
    max: 1000,
    interval: 200,
    splitLine: ySplitLine
  },
  series: [
    Object.assign({
      name: '空气中CO2含量实况(ppm)',
      data: emptyArr(13).map((val, i) => {
        return {
          value: generatorRandNum(180, 400)
        }
      }),
      type: 'line',
      color: '#09FFC8',
      symbol: 'circle'
    }, seriesLabel, {
      label: {
        normal: {
          show: false
        }
      }
    })
  ]
}

export default {
  name: 'CO2',
  mounted () {
    this.myChart = echarts.init(this.$refs.co2Chart)
    this.myChart.setOption(option)
  },
  beforeDestroy () {
    this.myChart && this.myChart.dispose()
  }
}
</script>

<style lang="scss">
.data-show {
  .co2 {
    height: 160*$rem;
    border: 1px solid rgb(38, 58, 118);
    border-radius: 4px;
    overflow: hidden;

    .co2-chart {
      height: 100%;
    }
  }
}
</style>
