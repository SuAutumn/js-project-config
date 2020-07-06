<template>
  <div class="map-data">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div v-for="i in '012'" :key="i" class="swiper-slide map-item">
          <div :ref="'map' + i" style="height: 100%;" />
          <div class="data-left">
            <div v-for="item in '012345'" :key="item" class="item">
              <div class="title">环境温度</div>
              <div class="value">28.8℃</div>
            </div>
          </div>
          <div class="data-right">
            <div v-for="item in '012345'" :key="item" class="item">
              <div class="title">环境温度</div>
              <div class="value">28.8℃</div>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination" />
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
import echarts from 'echarts'
import mapData from '@/assets/dataShow/mapData'
import { titleStyle } from '@/views/dataShow/staticEchartsSetting'
import 'swiper/css/swiper.min.css'
import Swiper from 'swiper'

const option = {
  geo: {
    map: 'China',
    roam: true,
    itemStyle: {
      areaColor: 'transparent',
      borderColor: '#fff',
      borderWidth: 1
    },
    emphasis: {
      label: { color: '#fff' },
      itemStyle: {
        areaColor: 'transparent'
      }
    },
    zoom: 1.2
  },
  title: Object.assign({
    text: '当前监测数据'
  }, titleStyle),
  series: [
    {
      type: 'scatter',
      coordinateSystem: 'geo',
      data: [{ name: '海门', value: [121.15, 31.89, 9] }],
      symbol: 'pin',
      symbolSize: 30,
      color: '#fff',
      label: {
        normal: {
          show: true,
          position: 'top',
          formatter (params) {
            return params.name
          }
        }
      }
    }
  ]
}
export default {
  name: 'MapData',
  data () {
    this.myChartList = []
    return {}
  },
  mounted () {
    echarts.registerMap('China', mapData)
    for (const ref in this.$refs) {
      const myChart = echarts.init(this.$refs[ref][0])
      myChart.setOption(option)
      this.myChartList.push(myChart)
    }
    this.mySwiper = new Swiper('.swiper-container', {
      autoplay: true,
      pagination: {
        el: '.swiper-pagination'
      }
    })
  },
  beforeDestroy () {
    this.myChartList.forEach(myChart => {
      myChart.dispose()
    })
    this.mySwiper && this.mySwiper.destroy()
  }
}
</script>

<style lang="scss">
.data-show {
  .map-data {
    height: 550*$rem;
    background: url("~@/assets/dataShow/bg1.png") no-repeat;
    background-size: 150% 150%;
    background-position: top;
    position: relative;

    & > div:first-child {
      height: 100%;
    }

    .data-left, .data-right {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      text-align: center;
      position: absolute;
      top: 10%;
      bottom: 10%;
    }

    .data-left {
      left: 70*$rem;
    }

    .data-right {
      right: 70*$rem;
    }

    .data-left > div, .data-right > div {
      width: 82*$rem;
      height: 46*$rem;
      background: url("~@/assets/dataShow/little-border.png") no-repeat;
      background-size: contain;
      background-position: center;
    }

    .map-item {
      position: relative;
    }

    .item {
      padding-top: 7*$rem;

      .title {
        font-size: 12*$rem;
        color: #CBEBFF;
        margin: 0;
      }

      .value {
        font-size: 12*$rem;
        color: #1CF7FF;
        margin: 0;
      }
    }
  }
}
.swiper-pagination-bullet {
  background: #fff;
}
</style>
