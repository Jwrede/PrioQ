<template>
  <div ref="modalPopup" class="modal_popup" id="modal_popup">
    <form action="" class="zooming" method="post">
      <span id="close" @click="closeModal">&times;</span>
      <div id="container">
        <input id="minute-input" class="text" type="text" spellcheck="false" />
        <button
          type="submit"
          disabled
          style="display: none"
          aria-hidden="true"
        ></button>
        Minutes
      </div>
      <div id="button-container">
        <a class="button" id="accept" @click="add">Add</a>
        <a class="button" id="delete" @click="closeModal">Cancel</a>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "TimerIntervalsModal",
  methods: {
    add() {
      let input = document.getElementById("minute-input");
      let minutes = parseInt(input.value);
      if (minutes) {
        minutes = minutes > 999 ? 999 : minutes;
        this.$emit("addTimerInterval", minutes);
        this.$emit("closeModal");
      } else {
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
      }
    },
    closeModal() {
      this.$emit("closeModal");
    },
    handleKey(e) {
      if (e.key === "Escape") {
        this.closeModal();
      } else if (e.key === "Enter") {
        this.add();
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
  margin-top: 50px;
}
.button {
  margin-top: 5px;
  cursor: pointer;
  height: 27px;
  padding: 5px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 22px;
  transition: 0.3s;
  outline: none;
  text-align: center;
  user-select: none;
  display: inline-block;
  width: 100px;
}
#container {
  display: inline-block;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
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
  font-size: 22spx;
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
#checkbox {
  display: grid;
  justify-content: center;
  align-content: center;
}
input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  z-index: -1;
}
.check-trail {
  display: flex;
  align-items: center;
  width: 45px;
  height: 25px;
  background: $midnight;
  border-radius: 2.5em;
  transition: $transition;
  cursor: pointer;
}
.check-handler {
  display: flex;
  margin-left: 2.5px;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background: $night;
  border-radius: 50%;
  transition: $transition;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  &:before {
    content: "\00D7";
    color: white;
    font-size: 10px;
    font-weight: bold;
  }
}
input[type="checkbox"]:checked + .check-trail {
  background: $greensea;
  .check-handler {
    margin-left: 50%;
    background: $turquoise;
    &::before {
      content: "\2714";
    }
  }
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
