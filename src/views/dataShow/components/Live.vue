<template>
  <div class="live">
    <video
      id="myPlayer"
      autoplay
      :src="videoSrc"
      controls
      playsInline
      webkit-playsinline
    />
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  name: 'Live',
  data () {
    return {
      videoSrc: 'https://hls01open.ys7.com/openlive/f01018a141094b7fa138b9d0b856507b.m3u8'
    }
  },
  mounted () {
    // eslint-disable-next-line no-undef
    this.myPlayer = new EZUIKit.EZUIPlayer('myPlayer')
  }
}
</script>

<style lang="scss">
.data-show {
  .live {
    height: 370*$rem;
    background: url("~@/assets/dataShow/border.png") no-repeat;
    background-size: contain;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;

    & > video {
      height: 336*$rem;
      width: 680*$rem;
      background: #000;
    }
  }
}
</style>
