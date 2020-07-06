const clientWidth = document.body.clientWidth

export function rem (fontSize) {
  return fontSize * clientWidth / 1920
}

export const axisLabel = {
  color: '#fff',
  fontSize: rem(12),
  margin: 10
}

export const axisLine = {
  lineStyle: {
    color: '#64CEFF'
  }
}

export const axisTick = {
  show: false
}

export const titleStyle = {
  textStyle: {
    color: '#00FFFF',
    fontSize: rem(16)
  },
  top: '2%',
  left: '2%'
}

export const xSplitLine = {
  show: false,
  lineStyle: {
    color: '#458AC6',
    type: 'datted'
  }
}

export const ySplitLine = {
  lineStyle: {
    color: '#458AC6'
  }
}

export const seriesLabel = {
  smooth: true,
  label: {
    normal: {
      show: true,
      position: 'top',
      color: '#fff'
    }
  },
  lineStyle: {
    width: 1
  }
}

export const linearGradient = (...colors) => {
  return {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: colors.map((color, i) => {
      return {
        offset: i / (colors.length - 1),
        color
      }
    })
  }
}

export const legend = {
  itemHeight: rem(10),
  itemWidth: rem(20),
  textStyle: {
    color: '#fff',
    fontSize: rem(12)
  },
  top: '2%',
  right: '7%'
}
