<template>
  <div id="media-container">
    <h1 id="title">{{ item.name }}</h1>
    <video
      class="vjs-big-play-centered vjs-matrix video-js vjs-show-big-play-button-on-pause"
      id="media-player"
      :ref="mode + 'media'"
    ></video>
  </div>
</template>

<script>
import videojs from "video.js";

export default {
  name: "Media",
  props: ["mode", "item"],
  computed: {
    getPath: function () {
      return this.item.dir + "/" + this.item.ID + "." + this.item.fileType;
    },
  },
  data: function () {
    return {
      player: null,
      itemLocal: this.item,
    };
  },
  mounted: function () {
    let options = {
      autoplay: false,
      controls: true,
      fluid: true,
      playbackRates: [0.5, 1, 1.25, 1.5, 1.75, 2],
      controlBar: {
        pictureInPictureToggle: false,
        fullscreenToggle: false,
      },
      userActions: {
        doubleClick: false,
      },
    };
    this.player = videojs(this.$refs[this.mode + "media"], options);
    this.player.src(this.getPath);
    this.player.currentTime(this.itemLocal.position);
  },
  beforeUnmount: function () {
    this.itemLocal.position = this.player.currentTime();
    this.$store.dispatch("updateItemFromQueue", this.itemLocal);
    let mediaElement = this.$refs[this.mode + "media"];
    mediaElement.pause();
    mediaElement.removeAttribute("src");
    mediaElement.load();
  },
};
</script>

<style scoped>
#title {
  color: white;
  font-size: 40x;
  margin: 0;
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* IE 10+ */
  user-select: none; /* Likely future */
}
#media-container {
  text-align: center;
  overflow: hidden;
}
#media-player {
  border-radius: 10px;
}
</style>
