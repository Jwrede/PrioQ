<template>
  <div id="main">
    <div id="dropzone">
      <Dropzone />
    </div>
    <div id="library">
      <input
        id="search"
        name="search"
        type="text"
        spellcheck="false"
        maxlength="65"
      />
      <Icons
        id="search-icon"
        icon="search"
        color="white"
        height="52px"
        width="52px"
      />
      <div id="border"></div>
      <transition-group name="list" tag="ul" id="list-wrapper">
        <Item
          v-for="item in $store.getters.getLibrary.filter((i) =>
            i.name.includes(searchedString)
          )"
          :item="item"
          :key="item.ID"
        />
      </transition-group>
    </div>
  </div>
</template>

<script>
import Dropzone from "./dropzone/Dropzone.vue";
import Item from "./LibraryItems/Item.vue";
import Icons from "../Icons";

export default {
  components: {
    Dropzone,
    Item,
    Icons,
  },
  name: "Library",
  data: function () {
    return {
      searchedString: "",
    };
  },
  mounted: function () {
    let search = document.getElementById("search");
    search.addEventListener("input", () => {
      this.searchedString = search.value;
    });
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background: white;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

::-webkit-scrollbar-corner {
  background: white;
}
#main {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #24242e;
  height: 100vh;
}
#library {
  background-color: #24242e;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  height: 50vh;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 0 0 50px 50px;
}
#border {
  height: 2px;
  width: 100%;
  background-color: white;
  border: none;
}
#search {
  height: 10%;
  width: 100%;
  overflow: hidden;
  border: none;
  outline: none;
  background-color: #24242e;
  color: white;
  margin-bottom: -35px;
}
#search-icon {
  position: relative;
  margin-top: -35px;
}
input[type="text"] {
  font-size: 22px;
  padding-left: 55px;
}
#list-wrapper {
  margin: 0;
  padding: 0;
  background-color: #17141d;
}
#list-wrapper:last-child {
  border-radius: 0 0 50px 50px;
}
</style>
