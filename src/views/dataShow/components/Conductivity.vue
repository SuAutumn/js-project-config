<!--土壤电导率实况(us/cm)-->
<template>
  <div class="conductivity">
    <div ref="condChart" class="cond-chart" />
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
    text: '土壤电导率实况(us/cm)'
  }, titleStyle),
  grid: {
    top: '25%',
    bottom: '2%',
    left: '3%',
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
      data: emptyArr(13).map((val, i) => {
        return {
          value: generatorRandNum(180, 400)
        }
      }),
      type: 'line',
      color: '#64CEFF'
    }, seriesLabel)
  ]
}

export default {
  name: 'Conductivity',
  mounted () {
    this.myChart = echarts.init(this.$refs.condChart)
    this.myChart.setOption(option)
  },
  beforeDestroy () {
    this.myChart && this.myChart.dispose()
  }
}
</script>

<style lang="scss">
.data-show {
  .conductivity {
    height: 160*$rem;
    border: 1px solid rgb(38, 58, 118);
    border-radius: 4px;
    overflow: hidden;

    .cond-chart {
      height: 100%;
    }
  }
}
</style>
