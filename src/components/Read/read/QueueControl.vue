<template>
  <div class="wrapper">
    <EditModal
      v-if="openEditModal"
      @closeEditModal="openEditModal = false"
      :item="item"
    />
    <FinishModal
      v-if="openFinishModal"
      @closeFinishModal="openFinishModal = false"
      :item="item"
      :mode="mode"
    />
    <div class="item" @click="$emit('backToMenu')">
      <Icons height="25px" width="25px" color="black" icon="back" />
    </div>
    <div class="item finish" @click="if (item) openFinishModal = true;">
      <Icons
        height="29px"
        width="29px"
        :color="item ? 'rgba(0,0,0,1)' : 'rgba(0,0,0,0.5)'"
        icon="checkmark"
      />
    </div>
    <div class="item edit" @click="if (item) openEditModal = true;">
      <Icons
        height="25px"
        width="25px"
        :color="item ? 'rgba(0,0,0,1)' : 'rgba(0,0,0,0.5)'"
        icon="edit"
      />
    </div>
    <div class="item next" @click="if (item) nextItem();">
      <Icons
        height="25px"
        width="25px"
        :color="item ? 'rgba(0,0,0,1)' : 'rgba(0,0,0,0.5)'"
        icon="next"
      />
    </div>
  </div>
</template>

<script>
import Icons from "../../Icons";
import EditModal from "../../Library/LibraryItems/Modals/EditModal";
import FinishModal from "./FinishModal";
import tippy from "tippy.js";

export default {
  props: ["item", "mode"],
  components: {
    Icons,
    EditModal,
    FinishModal,
  },
  data: function () {
    return {
      openEditModal: false,
      openFinishModal: false,
    };
  },
  methods: {
    nextItem() {
      this.$store.dispatch("seenItem", this.item);
      if (this.mode === "priority") {
        this.$store.dispatch("nextPriorityItem", this.item);
      } else {
        this.$store.dispatch("increaseIntervalIndex");
      }
    },
    initTippy() {
      if (this.item) {
        let placement =
          this.$store.getters.getTimerPosition.split("-")[0] === "bot"
            ? "top"
            : "bottom";
        tippy(".finish", {
          content:
            "Finishes " + this.item.name + " and removes it from the queue",
          placement: placement,
        });
        tippy(".edit", {
          content: "Edit " + this.item.name,
          placement: placement,
        });
        tippy(".next", {
          content: "Shows the next item",
          placement: placement,
        });
      }
    },
  },
  mounted: function () {
    this.$nextTick(() => {
      this.initTippy();
    });
  },
};
</script>

<style scoped>
.wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.item {
  height: 100%;
  width: 100%;
  display: grid;
  justify-content: center;
  align-content: center;
  transition: transform 0.1s linear;
}
.item:hover {
  transform: scale(1.15);
  background-color: #63adf2b9;
  cursor: pointer;
}
</style>
