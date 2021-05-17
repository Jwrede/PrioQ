<template>
  <li>
    <div id="container" ref="container" @click="turnArrow">
      <p>{{ item.name }}</p>
      <div id="button" ref="arrow"></div>
      <div id="lower-container" @click="stopPropagation">
        <div class="stats-container">
          <div class="stats-item" v-if="item.finished">
            <div>Finished</div>
            <Icons
              id="checkmark"
              height="25px"
              width="25px"
              color="green"
              icon="checkmark"
            />
          </div>
          <div class="stats-item" v-if="item.mode !== 1 && !item.finished">
            <div>Queue Position:</div>
            <div>{{ $store.getters.getPriorityQueue.indexOf(item) + 1 }}</div>
          </div>
          <div class="stats-item">
            <div>Added on:</div>
            <div>
              {{ date("added_on") }}
            </div>
          </div>
          <div class="stats-item">
            <div>Amount of Notes:</div>
            <div>{{ item.nr_notes }}</div>
          </div>
          <div class="stats-item">
            <div>Times seen:</div>
            <div>{{ item.times_seen }}</div>
          </div>
        </div>
        <div id="lower-lower-container">
          <div>
            <a
              class="button"
              id="show"
              v-if="!item.finished"
              @click="openShowNextModal"
              >As Next</a
            >
            <a class="button" id="show" @click="unfinish" v-else>Unfinish</a>
            <ShowNextModal
              v-if="showNextModalOpen"
              :item="item"
              @closeShowNextModal="closeShowNextModal"
            />
            <a class="button" id="accept" @click="openEditModal">Edit</a>
            <EditModal
              v-if="editModalOpen"
              :item="item"
              @closeEditModal="closeEditModal"
            />
            <a class="button" id="delete" @click="openDeleteModal">Delete</a>
            <DeleteModal
              v-if="deleteModalOpen"
              :item="item"
              @closeDeleteModal="closeDeleteModal"
            />
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import DeleteModal from "./Modals/DeleteModal";
import EditModal from "./Modals/EditModal";
import ShowNextModal from "./Modals/ShowNextModal";
import Icons from "../../Icons";

export default {
  name: "Item",
  props: ["item"],
  components: {
    DeleteModal,
    EditModal,
    Icons,
    ShowNextModal,
  },
  methods: {
    date: function (property) {
      if (this.item) {
        let date = new Date(this.item[property]);
        return (
          date.getDate() +
          "." +
          (date.getMonth() + 1) +
          "." +
          date.getFullYear()
        );
      } else return "";
    },
    turnArrow() {
      let currRotation = this.$refs.arrow.style.transform;

      if (currRotation === "rotate(225deg)") {
        this.$refs.arrow.style.transform = "rotate(45deg)";
        this.$refs.container.style.height = "71px";
      } else {
        this.$refs.arrow.style.transform = "rotate(225deg)";
        this.$refs.container.style.height = "330px";
      }
    },
    unfinish() {
      this.itemLocal.finished = false;
      this.$store.dispatch("updateItemFromQueue", this.itemLocal);
    },
    openShowNextModal() {
      this.showNextModalOpen = true;
    },
    closeShowNextModal() {
      this.showNextModalOpen = false;
    },
    stopPropagation(e) {
      e.stopPropagation();
    },
    openDeleteModal() {
      this.deleteModalOpen = true;
    },
    closeDeleteModal() {
      this.deleteModalOpen = false;
    },
    openEditModal() {
      this.editModalOpen = true;
    },
    closeEditModal() {
      this.editModalOpen = false;
    },
  },
  data: function () {
    return {
      deleteModalOpen: false,
      editModalOpen: false,
      itemLocal: this.item,
      showNextModalOpen: false,
    };
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
#container {
  width: 100%;
  height: 71px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  cursor: pointer;
  transition: height 0.5s;
  overflow: hidden;
  padding: 0 33px 0 0;
  color: white;
}
#lower-container {
  width: 100%;
  margin-top: 9px;
  height: calc(330px - 80px);
  cursor: default;
}
li {
  display: flex;
  align-items: center;
  padding: 0 0 0 25px;
  box-sizing: border-box;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
  user-select: none;
  font-size: 22px;
}

li::before {
  text-align: right;
  font-weight: bold;
  min-width: 50px;
  padding-right: 12px;
  align-self: flex-start;
}

li + li {
  border-top: 1px solid white;
}

.stats-container {
  width: 100%;
  height: calc(300px - 72px - 80px);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 10px;
  align-items: center;
  padding: 10px;
}

.stats-item {
  height: 100%;
  border-radius: 10px;
  background-color: #0a0a12;
  box-shadow: -5px 0 5px #000;
  color: white;
  display: grid;
  align-items: center;
  justify-content: center;
  text-align: center;
}

#button {
  margin-top: 20px;

  border-right: 3px solid;
  border-bottom: 3px solid;
  height: 15px;
  width: 15px;
  transform: rotate(45deg);
  transition: transform 0.5s;
  border-color: white;
}

#lower-lower-container {
  margin-top: 20px;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  float: right;
}

.button {
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
  margin: 5px;
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
  color: #2ecc71;
  border: 2px #2ecc71 solid;
}

#accept:hover {
  color: #fff;
  background-color: #2ecc71;
}

#show {
  color: #63adf2a4;
  border: 2px #63adf2a4 solid;
  padding: 5px;
}
#show:hover {
  color: #fff;
  background-color: #63adf2a4;
}

#slider-container {
  width: 95%;
  text-align: center;
}

#checkmark {
  margin-left: 30%;
}
</style>
