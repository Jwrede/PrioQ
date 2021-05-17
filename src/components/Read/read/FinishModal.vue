<template>
  <div ref="modalPopup" class="modal_popup" id="modal_popup">
    <form action="" class="zooming" method="post">
      <span id="close" @click="closeModal">&times;</span>
      <h2>Finish {{ item.name }} and remove it from all Queues?</h2>
      <div id="button-container">
        <a class="button" id="accept" @click="finishItem()">Accept</a>
        <a class="button" id="delete" @click="closeModal">Cancel</a>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "DeleteModal",
  props: ["item", "mode"],
  methods: {
    finishItem() {
      this.$store.dispatch("finishItem", this.item);
      this.closeModal();
    },
    closeModal() {
      this.$emit("closeFinishModal");
    },
    handleKey(e) {
      if (e.key === "Escape") {
        this.closeModal();
      } else if (e.key === "Enter") {
        this.closeModal();
        this.finishItem();
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
  margin-top: 5px;
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
  display: inline-block;
}

#delete {
  margin-left: 5px;
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
