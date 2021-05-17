<template>
  <p>Math Delimiters {{ type }}</p>
  <div id="delimiter-list-container">
    <ul>
      <li v-for="(delimiter, index) in delimiters" :key="index" :id="index">
        <div class="item">
          <div>Left:</div>
          <div style="color: green">{{ delimiter.left }}</div>
        </div>
        <div class="item">
          <div>Right:</div>
          <div style="color: green">{{ delimiter.left }}</div>
        </div>
        <div class="item" id="display">
          Display:
          <div>
            <Icons
              class="icons"
              icon="checkmark"
              width="18px"
              height="18px"
              color="white"
              v-if="delimiter.display"
            />
            <Icons
              class="icons"
              icon="times"
              width="18px"
              height="18px"
              color="white"
              v-else
            />
          </div>
        </div>
        <div id="delete" class="item">
          <Icons
            @click="deleteDelimiter(index)"
            icon="trash"
            height="22px"
            width="22px"
            color="red"
          />
        </div>
      </li>
    </ul>
  </div>
  <Icons
    id="add"
    icon="plus"
    color="green"
    height="25px"
    width="25px"
    @click="openModalfn"
  />
  <MathDelimitersModal
    v-if="openModal"
    @closeModal="closeModalfn"
    @addDelimiter="addDelimiter"
  />
</template>

<script>
import Icons from "../../Icons";
import MathDelimitersModal from "./Modals/MathDelimiterModal";

export default {
  name: "MathDelimiters",
  components: {
    Icons,
    MathDelimitersModal,
  },
  props: ["type"],
  data: function () {
    return {
      delimiters:
        this.type === "Markdown"
          ? this.$store.getters.getMarkdownMathDelimiters
          : this.$store.getters.getNoteMathDelimiters,
      openModal: false,
      hover: false,
    };
  },
  methods: {
    deleteDelimiter(index) {
      this.delimiters = this.delimiters.filter((e, i) => i !== index);
      if (this.type === "Markdown") {
        this.$store.commit("changeMarkdownMathDelimiters", this.delimiters);
      } else {
        this.$store.commit("changeNoteMathDelimiters", this.delimiters);
      }
    },
    openModalfn() {
      this.openModal = true;
    },
    closeModalfn() {
      this.openModal = false;
    },
    addDelimiter(delimiter) {
      this.delimiters.push(delimiter);
      if (this.type === "Markdown") {
        this.$store.commit("changeMarkdownMathDelimiters", this.delimiters);
      } else {
        this.$store.commit("changeNoteMathDelimiters", this.delimiters);
      }
    },
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background: #17141d;
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
#delimiter-list-container {
  height: 50%;
  width: 100%;
  overflow: auto;
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* IE 10+ */
  user-select: none; /* Likely future */
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 16px;
  text-align: left;
}
li {
  display: grid;
  grid-template-columns: 2fr 2fr 3fr 1fr;
  padding: 20px;
}
li + li {
  border-top: 1px solid white;
}
.icons {
  margin-left: 10px;
}
#delete {
  display: grid;
  justify-content: center;
}
#delete:hover,
#add:hover {
  cursor: pointer;
}
.item {
  overflow: hidden;
  display: flex;
  flex-direction: row;
}
</style>