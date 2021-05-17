<template>
  <p>{{ title }}</p>
  <div id="card-container">
    <input
      :id="action + 'chck'"
      @input="$store.commit(action, $event.target.checked)"
      :checked="initial"
      type="checkbox"
    />
    <label :for="action + 'chck'" class="check-trail" :class="'tippy' + action">
      <span class="check-handler"></span>
    </label>
  </div>
</template>

<script>
import tippy from "tippy.js";

export default {
  name: "HTMLEditable",
  props: ["title", "action", "initial"],
  methods: {
    initTippy() {
      let tippyContent = {
        changeMarkdownDarkMode:
          "Changes the color palette of your Markdown notes and Markdown files ",
        changeAllowBrowsing: "Allows or disables navigation between websites",
        changeHTMLContenteditable:
          "Allows or disables being able to edit HTML content on copied HTML",
      };
      tippy(".tippy" + this.action, {
        content: tippyContent[this.action],
      });
    },
  },
  mounted: function () {
    this.$nextTick(() => {
      this.initTippy();
    });
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

#card-container {
  height: 50%;
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
</style>