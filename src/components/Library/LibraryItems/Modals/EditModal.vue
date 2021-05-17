<template>
  <div ref="modalPopup" class="modal_popup" id="modal_popup">
    <form action="" class="zooming" method="post">
      <span id="close" @click="closeModal">&times;</span>
      <div class="card" ref="card">
        <div class="card__wrapper">
          <div class="card-container card__side is-active" ref="front">
            <p class="title">{{ modi[mode] }}</p>
            <div class="editCard">
              Name:
              <input
                class="input"
                type="text"
                @input="nameChange"
                ref="priorityName"
                :value="name"
                spellcheck="false"
              />
            </div>
            <div class="editCard">
              Priority: {{ priority }}
              <div id="slider-container">
                <input
                  type="range"
                  min="1"
                  :max="$store.getters.getMaxPrio"
                  :value="priority"
                  @input="priorityChange"
                  class="slider"
                  id="myRange"
                  ref="priority"
                />
              </div>
            </div>
            <div class="editCard">
              <div>Reset Queue Position:</div>
              <div>
                <transition name="fade" mode="out-in">
                  <a
                    class="button"
                    v-if="!showCheckmark"
                    id="delete"
                    @click="resetPosition()"
                    >Reset</a
                  >
                  <Icons
                    v-else
                    icon="checkmark"
                    color="green"
                    width="22px"
                    height="22px"
                  />
                </transition>
              </div>
            </div>
            <transition name="slide-fade" mode="out-in">
              <div v-if="mode === 2" class="editCard">
                Priority: {{ priority }}
                <div>
                  <input
                    type="range"
                    min="1"
                    :max="$store.getters.getMaxPrio"
                    @input="priorityChange"
                    :value="priority"
                    class="slider"
                    id="prioritySliderMixed"
                    ref="mixedPriority"
                  />
                </div>
              </div>
            </transition>
          </div>
          <div class="card-container card__side card__side--back" ref="back">
            <p class="title">{{ modi[mode] }}</p>
            <div class="editCard">
              Name:
              <input
                class="input"
                type="text"
                :value="name"
                @input="nameChange"
                ref="intervalName"
                spellcheck="false"
              />
            </div>
            <div class="editCard">
              Interval:
              <div id="day-picker" style="display: inline-block">
                <a
                  class="button interval-button"
                  @click="setInterval(0)"
                  ref="Date-0"
                  >MON</a
                >
                <a
                  class="button interval-button"
                  @click="setInterval(1)"
                  ref="Date-1"
                  >TUE</a
                >
                <a
                  class="button interval-button"
                  @click="setInterval(2)"
                  ref="Date-2"
                  >WED</a
                >
                <a
                  class="button interval-button"
                  @click="setInterval(3)"
                  ref="Date-3"
                  >THU</a
                >
                <a
                  class="button interval-button"
                  @click="setInterval(4)"
                  ref="Date-4"
                  >FRI</a
                >
                <a
                  class="button interval-button"
                  @click="setInterval(5)"
                  ref="Date-5"
                  >SAT</a
                >
                <a
                  class="button interval-button"
                  @click="setInterval(6)"
                  ref="Date-6"
                  >SUN</a
                >
              </div>
            </div>
            <transition name="slide-fade" mode="out-in">
              <div v-if="mode === 2" class="editCard">
                Priority: {{ priority }}
                <div>
                  <input
                    type="range"
                    min="1"
                    :max="$store.getters.getMaxPrio"
                    @input="priorityChange"
                    :value="priority"
                    class="slider"
                    id="prioritySliderMixed"
                    ref="mixedPriority"
                  />
                </div>
              </div>
            </transition>
            <transition name="slide-fade" mode="out-in">
              <div v-if="mode === 2" class="editCard">
                <div>Reset Queue Position:</div>
                <div>
                  <transition name="fade" mode="out-in">
                    <a
                      class="button"
                      v-if="!showCheckmark"
                      id="delete"
                      @click="resetPosition()"
                      >Reset</a
                    >
                    <Icons
                      v-else
                      icon="checkmark"
                      color="green"
                      width="22px"
                      height="22px"
                    />
                  </transition>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
      <div id="mode-container">
        <a class="button" id="change-mode" @click="changeMode">Mode</a>
      </div>
      <div id="buttons">
        <a class="button" id="accept" @click="saveChanges">Save</a>
        <a class="button" id="delete" @click="closeModal">Cancle</a>
      </div>
    </form>
  </div>
</template>

<script>
import Icons from "./../../../Icons";

export default {
  name: "EditModal",
  components: {
    Icons,
  },
  props: ["item"],
  data: function () {
    return {
      itemLocal: this.item,
      priority: this.item.priority,
      name: this.item.name,
      mode: this.item.mode,
      resetPositionBool: false,
      showCheckmark: false,
      modi: this.$store.getters.getModi,
      switching: false,
      selectedDays: [false, false, false, false, false, false, false],
    };
  },
  methods: {
    saveChanges() {
      let nameDiv =
        this.mode === 0 ? this.$refs.priorityName : this.$refs.intervalName;
      let name = this.name;
      let priority =
        this.mode === 1
          ? Math.floor(this.$store.getters.getMaxPrio / 2)
          : parseInt(this.$refs.priority.value);
      let interval =
        this.mode === 0
          ? [false, false, false, false, false, false, false]
          : this.selectedDays;

      if (name) {
        this.itemLocal.name = name;
        this.itemLocal.priority = priority;
        this.itemLocal.interval = interval;
        this.itemLocal.mode = this.mode;
        if (this.resetPositionBool) this.itemLocal.value = 0;
        this.$store.dispatch("updateItemFromQueue", this.itemLocal);
        this.closeModal();
      }
      if (!name) {
        this.wiggleRed(nameDiv);
      }
    },
    changeMode() {
      if (this.switching) {
        return false;
      }
      this.switching = true;
      let card = this.$refs.card;
      let front = this.$refs.front;
      let back = this.$refs.back;

      switch (this.mode) {
        case 0:
          this.priorityToInterval(card, front, back);
          break;
        case 1:
          this.intervalToMixed();
          break;
        case 2:
          this.mixedToPriority(card, front, back);
          break;
      }
    },
    priorityToInterval(card, front, back) {
      card.classList.add("is-switched");
      setTimeout(() => {
        front.classList.remove("is-active");
        back.classList.add("is-active");
        this.switching = false;
        this.mode = (this.mode + 1) % this.modi.length;
      }, 250);
    },
    intervalToMixed() {
      this.switching = false;
      this.mode = (this.mode + 1) % this.modi.length;
    },
    mixedToPriority(card, front, back) {
      card.classList.remove("is-switched");
      setTimeout(() => {
        front.classList.add("is-active");
        back.classList.remove("is-active");
        this.switching = false;
        this.mode = (this.mode + 1) % this.modi.length;
      }, 250);
    },
    resetPosition() {
      this.resetPositionBool = true;
      this.showCheckmark = true;
    },
    setInterval(dateIndex) {
      this.selectedDays[dateIndex] = !this.selectedDays[dateIndex];
      this.$refs["Date-" + dateIndex].classList.toggle("active");
    },
    closeModal() {
      this.$emit("closeEditModal");
    },
    handleKey(e) {
      if (e.key === "Escape") {
        this.closeModal();
      } else if (e.key === "Enter") {
        this.closeModal();
        this.saveChanges();
      }
    },
    priorityChange(e) {
      this.priority = e.target.value;
    },
    nameChange(e) {
      this.name = e.target.value;
    },
    wiggleRed(nameDiv) {
      nameDiv.style.borderColor = "red";
      setTimeout(() => (nameDiv.style.borderColor = "white"), 500);
      nameDiv.animate(
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
    },
  },
  mounted: function () {
    document.addEventListener("keydown", this.handleKey);

    if (this.mode === 1 || this.mode === 2) {
      this.$refs.card.classList.add("is-switched");
      this.$refs.front.classList.remove("is-active");
      this.$refs.back.classList.add("is-active");
    }

    let dates = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
    let datePickerDivs = Array.from(
      document.getElementsByClassName("interval-button")
    );
    datePickerDivs.forEach((div) => {
      let dayIndexOfButton = dates.indexOf(div.innerHTML);
      if (this.item.interval[dayIndexOfButton]) {
        div.classList.add("active");
        this.selectedDays[dayIndexOfButton] = true;
      }
    });
  },
  beforeUnmount: function () {
    document.removeEventListener("keydown", this.handleKey);
  },
};
</script>

<style lang="scss" scoped>
$card-transition-time: 0.5s;

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-in;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-100px);
  opacity: 0;
}

.card {
  perspective: 2000px;
  position: relative;
  width: 100%;

  &.is-switched {
    .card__wrapper {
      animation: rotate $card-transition-time linear both;
    }
  }
}

.card__wrapper {
  transform-style: preserve-3d;
  animation: rotate-inverse $card-transition-time linear both;
}

.card__side {
  backface-visibility: hidden;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;

  &.is-active {
    position: static;
  }
}

.card__side--back {
  transform: rotateY(180deg);
}

@keyframes rotate {
  0% {
    transform: rotateY(0);
  }
  70% {
    transform: rotateY(200deg);
  }
  100% {
    transform: rotateY(180deg);
  }
}

@keyframes rotate-inverse {
  0% {
    transform: rotateY(180deg);
  }
  70% {
    transform: rotateY(-20deg);
  }
  100% {
    transform: rotateY(0);
  }
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
  font-size: 22px;
  color: white;
}
.modal_popup form {
  width: 40%;
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
  font-size: 2em;
  padding: 0px 10px;
  transition: 0.2s;
  border-radius: 10px;
}
.modal_popup #close:hover {
  color: grey;
}
.zooming {
  animation: animatezoom 0.5s;
}
.card-container {
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 20px;
  column-gap: 20px;
}
.title {
  grid-column-start: 1;
  grid-column-end: 3;
}
#mode-container {
  padding: 20px;
  height: 40px;
  display: grid;
  justify-content: center;
  align-content: center;
}
.editCard {
  height: 120px;
  border-radius: 10px;
  background-color: #0a0a12;
  box-shadow: -5px 0 5px #000;
  display: grid;
  align-items: center;
  text-align: center;
  grid-template-rows: 40% 60%;
}
.input {
  width: 80%;
  margin-left: 10%;
  height: 30px;
  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  background: #0a0a12;
  text-align: center;
  transition: border-color 0.1s linear;
}
.input-days {
  height: 30px;
  width: 30px;
  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  background: #0a0a12;
  text-align: center;
}
input[type="text"] {
  color: white;
  font-size: 22px;
}
#buttons {
  display: grid;
  grid-template-columns: 50% 50%;
  justify-items: center;
}
.slider {
  -webkit-appearance: none;
  width: 80%;
  height: 9px;
  border-radius: 5px;
  background: rgb(163, 152, 152);
  outline: none;
  transition: 0.2s;
}
.slider::-webkit-slider-thumb {
  appearance: none;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: rgb(163, 152, 152);
  cursor: pointer;
  transition: 0.2s;
}
.slider:hover,
.slider:hover::-webkit-slider-thumb {
  background: white;
}
.button {
  margin-top: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 22px;
  transition: 0.3s;
  outline: none;
  text-align: center;
  user-select: none;
  display: inline-block;
}

#delete-container {
  margin-left: 20px;
  margin-top: -30px;
}

#delete {
  color: #e74c3c;
  border: 2px #e74c3c solid;
  width: 100px;
  height: 27px;
  padding: 5px;
  border-radius: 5px;
}

#delete:hover {
  color: #fff;
  background-color: #e74c3c;
}

#delete-text {
  padding: 0;
}

#accept {
  color: #2ecc71;
  border: 2px #2ecc71 solid;
  width: 100px;
  height: 27px;
  padding: 5px;
  border-radius: 5px;
}

#accept:hover {
  color: #fff;
  background-color: #2ecc71;
}

.interval-button:first-child {
  border-radius: 5px 0 0 5px;
}
.interval-button:last-child {
  border-radius: 0 5px 5px 0;
}

.interval-button {
  color: #e74c3c;
  border: 2px #e74c3c solid;
  margin-left: -2px;
  padding: 1px;
  font-size: 18px;
  width: 45px;
}
.interval-button:hover {
  color: #fff;
  background-color: #e74c3c;
}
.active {
  color: #2ecc71;
  border: 2px #2ecc71 solid;
}
.active:hover {
  color: #fff;
  background-color: #2ecc71;
}

#change-mode {
  color: #63adf2a4;
  border: 2px #63adf2a4 solid;
  height: 27px;
  padding: 5px;
  border-radius: 5px;
  width: 100px;
}
#change-mode:hover {
  color: #fff;
  background-color: #63adf2a4;
}

@keyframes animatezoom {
  from {
    transform: translate(-50%, -50%) scale(0);
  }
  to {
    scale: translate(-50%, -50%) scale(1);
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
