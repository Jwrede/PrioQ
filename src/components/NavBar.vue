<template>
  <div id="nav">
    <div
      class="nav-item"
      id="library"
      @click="navItemClicked"
      :class="
        $store.getters.getActiveTab === 'library' ? 'active' : 'not-active'
      "
    >
      <Icons
        :svgID="'library'"
        class="nav-logos"
        icon="library"
        color="white"
        height="52px"
        width="52px"
      />
    </div>
    <div
      class="nav-item"
      id="read"
      @click="navItemClicked"
      :class="$store.getters.getActiveTab === 'read' ? 'active' : 'not-active'"
    >
      <Icons
        :svgID="'read'"
        class="nav-logos"
        icon="read"
        color="white"
        height="52px"
        width="52px"
      />
    </div>
    <div
      class="nav-item"
      id="stats"
      @click="navItemClicked"
      :class="$store.getters.getActiveTab === 'stats' ? 'active' : 'not-active'"
    >
      <Icons
        :svgID="'stats'"
        class="nav-logos"
        icon="stats"
        color="white"
        height="52px"
        width="52px"
      />
    </div>
    <div
      class="nav-item"
      id="preferences"
      @click="navItemClicked"
      :class="
        $store.getters.getActiveTab === 'preferences' ? 'active' : 'not-active'
      "
    >
      <Icons
        :svgID="'preferences'"
        class="nav-logos"
        icon="preferences"
        color="white"
        height="52px"
        width="52px"
      />
    </div>
  </div>
</template>

<script>
import { constants } from "../constants";
import Icons from "./Icons";

export default {
  name: "NavBar",
  components: {
    Icons,
  },
  methods: {
    navItemClicked(event) {
      let clickedTab;
      clickedTab =
        event.target.tagName === "path"
          ? event.target.parentElement.id
          : event.target.id;

      if (constants.ALLOWED_TABS.includes(clickedTab)) {
        this.$store.commit("changeTab", clickedTab);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$nav-color: #0a0a12;
$active-color: #352d69;

#nav {
  background-color: $nav-color;
  margin-left: 0;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  overflow: hidden;
}
.nav-item {
  width: 100%;
  flex: 1;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;

  -ms-flex-align: center;
  -webkit-align-items: center;
  -webkit-box-align: center;

  align-items: center;
}
.nav-item:hover {
  cursor: pointer;
}
.nav-item:not(.active):hover {
  background-color: #121220;
}
.nav-logos {
  width: 60px;
  margin-left: auto;
  margin-right: auto;
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* IE 10+ */
  user-select: none; /* Likely future */
}
.not-active {
  background: $nav-color;
  animation: fadeout 0.3s;
}
.active {
  background: $active-color;
  animation: fadein 0.3s;
}

@keyframes fadein {
  from {
    background: $nav-color;
  }
  to {
    background: $active-color;
  }
}

@keyframes fadeout {
  from {
    background: $active-color;
  }
  to {
    background: $nav-color;
  }
}
</style>
