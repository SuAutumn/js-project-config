<!--风向/风速实况-->
<template>
  <div class="wind">
    <div ref="wind" class="wind-chart" />
  </div>
</template>

<script type='text/ecmascript-6'>
import echarts from 'echarts'
import {
  axisLabel,
  axisLine,
  axisTick, legend, linearGradient, rem, seriesLabel, titleStyle,
  xSplitLine,
  ySplitLine
} from '@/views/dataShow/staticEchartsSetting'
import { dateFormat, emptyArr, generatorRandNum } from '@/util'

const option = {
  color: ['#fff'],
  title: Object.assign({
    text: '风向/风速实况'
  }, titleStyle),
  legend: Object.assign({
    data: ['风速(m/s)', '风向值']
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
    max: 60,
    interval: 10,
    splitLine: ySplitLine
  },
  series: [
    {
      type: 'bar',
      name: '风速(m/s)',
      data: emptyArr(13).map(() => generatorRandNum(10, 20)),
      barWidth: rem(12),
      itemStyle: {
        color: linearGradient('#1CF7FF', '#1DA7FF', '#2915EA')
      }
    },
    Object.assign({
      name: '风向值',
      data: emptyArr(13).map((val, i) => {
        return {
          value: generatorRandNum(0, 7)
        }
      }),
      type: 'line',
      color: '#64CEFF'
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
  name: 'WindSpeed',
  mounted () {
    this.myChart = echarts.init(this.$refs.wind)
    this.myChart.setOption(option)
  },
  beforeDestroy () {
    this.myChart && this.myChart.dispose()
  }
}
</script>

<style lang="scss">
.data-show {
  .wind {
    height: 280*$rem;
    border: 1px solid rgb(38, 58, 118);
    border-radius: 4px;
    overflow: hidden;

    .wind-chart {
      height: 100%;
    }
  }
}
</style>
