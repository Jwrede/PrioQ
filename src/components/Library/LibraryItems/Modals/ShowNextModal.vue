<template>
  <div ref="modalPopup" class="modal_popup" id="modal_popup">
    <form action="" class="zooming" method="post">
      <span id="close" @click="closeModal">&times;</span>
      <div v-if="item.mode === 0">
        <h2>Set {{ item.name }} as the highest priority item?</h2>
        <div id="button-container">
          <a class="button" id="accept" @click="toHighestPrio">Accept</a>
          <a class="button" id="delete" @click="closeModal">Cancel</a>
        </div>
      </div>
      <div v-else-if="item.mode === 1">
        <h2>Show {{ item.name }} next?</h2>
        <div id="button-container">
          <a class="button" id="accept" @click="changeIntervalIndex">Accept</a>
          <a class="button" id="delete" @click="closeModal">Cancel</a>
        </div>
      </div>
      <div v-else-if="item.mode === 2">
        <h2>Show {{ item.name }} next in Interval Mode or in Priority Mode?</h2>
        <div id="button-container">
          <a class="button" id="accept" @click="changeIntervalIndex"
            >Interval Mode</a
          >
          <a class="button" id="accept" @click="toHighestPrio">Priority Mode</a>
          <a class="button" id="delete" @click="closeModal">Cancel</a>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ShowNextModal",
  props: ["item"],
  data: function () {
    return {
      itemLocal: this.item,
    };
  },
  methods: {
    toHighestPrio() {
      this.itemLocal.value = Number.MAX_VALUE;
      this.$store.dispatch("updateItemFromQueue", this.itemLocal);
      this.closeModal();
    },
    changeIntervalIndex() {
      let index = this.$store.getters.getIntervalQueue.indexOf(this.item);
      this.$store.commit("changeIntervalIndex", index);
      this.closeModal();
    },
    closeModal() {
      this.$emit("closeShowNextModal");
    },
    handleKey(e) {
      if (e.key === "Escape") {
        this.closeModal();
      } else if (e.key === "Enter") {
        if (this.itemLocal.mode === 0) {
          this.closeModal();
          this.toHighestPrio();
        } else if (this.itemLocal === 1) {
          this.closeModal();
          this.changeIntervalIndex();
        }
      }
    },
  },
  mounted: function () {
    document.addEventListener("keydown", this.handleKey);
  },
  beforeUnmount: function () {
    document.removeEventListener("keydown", this.handleKey);
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
#button-container {
  margin-top: 50px;
}
.button {
  cursor: pointer;
  height: 27px;
  width: 100px;
  padding: 5px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 22px;
  transition: 0.3s;
  outline: none;
  text-align: center;
  user-select: none;
  margin: 5px;
  display: inline-block;
}

#delete {
  color: #e74c3c;
  border: 2px #e74c3c solid;
}

#delete:hover {
  color: #fff;
  background-color: #e74c3c;
}

#delete-text {
  padding: 0;
}

#accept {
  margin-right: 5px;
  color: #2ecc71;
  border: 2px #2ecc71 solid;
}

#accept:hover {
  color: #fff;
  background-color: #2ecc71;
}

#accept:hover {
  color: #fff;
  background-color: #2ecc71;
}
.modal_popup {
  width: 100%;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  z-index: 1;
  box-shadow: 0px 6px 16px -6px rgba(1, 1, 1, 0.5);
  background: rgba(1, 1, 1, 0.5);
  text-align: center;
}
.modal_popup form {
  padding: 50px;
  background-color: #24242e;
  background-size: cover;
  position: absolute;
  text-align: center;
  border-radius: 10px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
}
.modal_popup #close {
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  background: #24242e;
  padding: 0px 10px;
  color: white;
  font-size: 2em;
  transition: 0.2s;
  border-radius: 10px;
}
.modal_popup #close:hover {
  color: grey;
}
.zooming {
  animation: animatezoom 0.5s;
}

@keyframes animatezoom {
  from {
    transform: translate(-50%, -50%) scale(0);
  }
  to {
    scale: translate(-50%, -50%) scale(1);
  }
}
</style>
