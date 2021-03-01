import Hls from 'hls.js'

export const usePlayer = () => {
  if (Hls.isSupported()) {
    const video = document.getElementById('video') as HTMLMediaElement
    const hls = new Hls()

    hls.attachMedia(video)
    hls.on(Hls.Events.MEDIA_ATTACHED, function () {
      hls.loadSource(
        'https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8'
      )
    })
  }
}
