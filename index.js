import { resolve } from 'path'
import getPlayer from 'play-sound'

const player = getPlayer()
const mp3 = resolve(__dirname, 'beep.mp3')

function play () {
  let handle
  const handler = e => !e && handle.kill()
  player.play(mp3, handle)
}

export default function () {
  if (!this.options.whiterose) {
    this.options.whiterose = {}
  }
  this.options.whiterose = {
    interval: this.options.whiterose.interval || 1,
    build: this.options.whiterose.build === false ? false : true,
  }
  const { interval, build } = this.options.whiterose
  setInterval(play, interval * 60000)
  if (build) {
    this.nuxt.hook('build:done', play)
  }
}
