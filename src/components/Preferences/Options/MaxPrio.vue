<template>
  <div id="container">
    <p>Maximum Priority</p>
    <div class="wrapper">
      <p id="priority">{{ $store.getters.getMaxPrio }}</p>
      <a class="button" id="accept" @click="openModal = true">Edit</a>
    </div>
    <div ref="modalPopup" class="modal_popup" id="modal_popup" v-if="openModal">
      <form action="" class="zooming" method="post">
        <span id="close" @click="openModal = false">&times;</span>
        <p>New Maximum Priority</p>
        <input type="text" id="new-prio" spellcheck="false" @keydown.stop />
        <button
          type="submit"
          disabled
          style="display: none"
          aria-hidden="true"
        ></button>
        <div id="button-container">
          <a
            class="button"
            id="accept"
            style="margin-right: 10px"
            @click="scale"
            >Scale</a
          >
          <a class="button" id="accept" @click="cutoff">Cut off</a>
          <a
            class="button"
            id="delete"
            style="margin-left: 10px"
            @click="openModal = false"
            >Cancel</a
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "MaxPrio",
  data: function () {
    return {
      openModal: false,
    };
  },
  methods: {
    scale: function () {
      let val = parseInt(document.getElementById("new-prio").value);
      if (this.checkInput(val)) {
        this.$store.dispatch("changeHighestPrioScale", val);
        this.openModal = false;
      }
    },
    cutoff: function () {
      let val = parseInt(document.getElementById("new-prio").value);
      if (this.checkInput(val)) {
        this.$store.dispatch("changeHighestPrioCutOff", val);
        this.openModal = false;
      }
    },
    checkInput: function (val) {
      if (val && val > 0) {
        return true;
      } else {
        let input = document.getElementById("new-prio");
        input.style.borderColor = "red";
        setTimeout(() => (input.style.borderColor = "white"), 500);
        input.animate(
          [
            { transform: "translate(1px, 1px) rotate(0deg)" },
            { transform: "translate(-1px, -2px) rotate(-1deg)" },
            { transform: "translate(-3px, 0px) rotate(1deg)" },
            { transform: "translate(3px, 2px) rotate(0deg)" },
            { transform: "translate(1px, -1px) rotate(1deg)" },
            { transform: "translate(-1px, 2px) rotate(-1deg)" },
            { transform: "translate(-3px, 1px) rotate(0deg)" },
            { transform: "translate(3px, 1px) rotate(-1deg)" },
            { transform: "translate(-1px, -1px) rotate(1deg)" },
            { transform: "translate(1px, 2px) rotate(0deg)" },
            { transform: "translate(1px, -2px) rotate(-1deg)" },
          ],
          {
            duration: 500,
          }
        );
        return false;
      }
    },
    handleKey(e) {
      if (e.key === "Escape") {
        this.openModal = false;
      } else if (e.key === "Enter") {
        e.preventDefault();
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

<style lang="scss" scoped>
$clouds: #ecf0f1;
$turquoise: #1abc9c;
$greensea: #16a085;
$night: #34495e;
$midnight: #2c3e50;
$transition: all 0.5s ease;

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
#button-container {
  margin-top: 22px;
}
input {
  width: 20%;
  height: 30px;
  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  background: #24242e;
}
input[type="text"] {
  color: white;
  font-size: 22px;
}
#delete {
  color: #e74c3c;
  border: 2px #e74c3c solid;
}

#delete:hover {
  color: #fff;
  background-color: #e74c3c;
}

#accept {
  color: #2ecc71;
  border: 2px #2ecc71 solid;
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
#container {
  height: 50%;
  display: flex;
  flex-direction: column;
}
#priority {
  color: red;
  font-size: 30px;
}
.button {
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 100%;
  transition: 0.3s;
  outline: none;
  text-align: center;
  user-select: none;
  display: inline-block;
  width: 100px;
}
#accept {
  color: #2ecc71;
  border: 2px #2ecc71 solid;
}

#accept:hover {
  color: #fff;
  background-color: #2ecc71;
}
</style>