<template>
  <div class="modal_popup" id="modal_popup">
    <form action="" class="zooming" method="post">
      <div class="wrapper">
        <div class="loader" v-if="loading"></div>
        <div v-else-if="chooseDeck" class="choose-deck">
          <h2>Choose a Deck</h2>
          <ul class="deck-menu">
            <li
              class="deck-item"
              v-for="(deck, index) in decks"
              :ref="deck"
              @click="clickDeck(deck)"
              :key="index"
            >
              {{ deck }}
            </li>
          </ul>
          <div id="button-container">
            <a class="button" id="accept" @click="syncAnki">Accept</a>
            <a class="button" id="delete" @click="$emit('unsuccessfullSync')"
              >Cancel</a
            >
          </div>
        </div>
        <div v-else-if="error" class="error">
          <div v-if="ankiconnectError">
            <h2>
              Please open Anki or install the<br />
              following Add-on and restart Anki:
            </h2>
            AnkiConnect<br />
            2055492159
          </div>
          <div v-else-if="katexError">
            <h2>Please install the following Add-on for Anki:</h2>
            Markdown and KaTeX Support <br />
            1087328706
          </div>
          <div v-else-if="otherError"><h2>Connection failed</h2></div>
          <div id="button-container">
            <a class="button" id="accept" @click="retry">Retry</a>
            <a class="button" id="delete" @click="$emit('unsuccessfullSync')"
              >Cancel</a
            >
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
const fs = window.require("fs");
const path = window.require("path");

export default {
  name: "LoadingModal",
  props: ["notes", "indexOfAnkiCards", "media_path"],
  data: function () {
    return {
      decks: [],
      currentDeck: null,
      loading: true,
      chooseDeck: false,
      error: false,
      ankiconnectError: false,
      katexError: false,
      otherError: false,
      mediaFiles: [],
    };
  },
  methods: {
    ankiConnectAction(body) {
      return new Promise((resolve, reject) => {
        fetch("http://localhost:8765", {
          method: "Post",
          body: body,
        })
          .then((response) => {
            if (!response.ok) {
              reject("else");
            }
            return response.json();
          })
          .then((json) => resolve(json))
          .catch((e) => {
            if (e instanceof TypeError) {
              reject("ankiconnect");
            } else {
              reject("else");
            }
          });
      });
    },
    checkAnki() {
      return new Promise((resolve, reject) => {
        this.ankiConnectAction(
          JSON.stringify({ action: "modelNames", version: 6 })
        )
          .then((models) => {
            if (!models.result.includes("KaTeX and Markdown Cloze")) {
              reject("katex");
            } else {
              resolve("succ");
            }
          })
          .catch((err) => reject(err));
      });
    },
    createAnkiNotes() {
      return this.notes.map((note, index) => {
        if (this.indexOfAnkiCards.has(index)) {
          this.mediaFiles.forEach((fileName) => {
            note = note.replace(new RegExp(fileName, "gi"), "_" + fileName);
          });
          return {
            deckName: this.currentDeck,
            modelName: "KaTeX and Markdown Cloze",
            fields: {
              Text: note,
            },
          };
        }
      });
    },
    clickDeck(deck) {
      if (this.currentDeck)
        this.$refs[this.currentDeck].classList.remove("active");
      this.currentDeck = deck;
      this.$refs[deck].classList.add("active");
    },
    errorCatching(err) {
      this.loading = false;
      this.chooseDeck = false;
      this.error = true;
      if (err === "ankiconnect") {
        this.ankiconnectError = true;
      } else if (err === "katex") {
        this.katexError = true;
      } else {
        this.otherError = true;
      }
    },
    async showDecks() {
      this.loading = true;
      let ankiCheck = await this.checkAnki().catch((err) =>
        this.errorCatching(err)
      );

      if (ankiCheck === "succ") {
        let deckNames = await this.ankiConnectAction(
          JSON.stringify({
            action: "deckNames",
            version: 6,
          })
        ).catch((err) => this.errorCatching(err));
        this.decks = deckNames.result;
        this.loading = false;
        this.chooseDeck = true;
      }
    },
    async syncAnki() {
      this.loading = true;
      let notes = this.createAnkiNotes();

      let checkAnki = await this.ankiConnectAction(
        JSON.stringify({
          action: "addNotes",
          version: 6,
          params: {
            notes: notes,
          },
        })
      ).catch((err) => this.errorCatching(err));
      if (checkAnki) {
        await Promise.all(
          this.mediaFiles.map(async (file) => {
            await this.ankiConnectAction(
              JSON.stringify({
                action: "storeMediaFile",
                version: 6,
                params: {
                  filename: "_" + file,
                  path: path.join(this.media_path, file),
                },
              })
            ).catch((err) => {
              this.errorCatching(err);
              return;
            });
          })
        );

        this.loading = false;
        this.$emit("successfullSync");
      }
    },
    retry() {
      this.loading = true;
      this.error = false;
      this.chooseDeck = false;
      this.ankiconnectError = false;
      this.katexError = false;
      this.otherError = false;
      this.showDecks();
    },
  },
  mounted: function () {
    this.mediaFiles = fs.readdirSync(this.media_path);

    this.showDecks();
  },
};
</script>

<style lang="scss" scoped>
h2 {
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* IE 10+ */
  user-select: none; /* Likely future */
}
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
  transition: width 0.5s linear;
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
.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* IE 10+ */
  user-select: none; /* Likely future */
}
.choose-deck {
  width: 35vw;
  max-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
p {
  font-size: 22px;
}
.deck-menu {
  width: 100%;
  max-height: 35vh;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
}
.deck-item {
  list-style: none;
  width: 100%;
  font-size: 22px;
  background-color: #0a0a127c;
  padding: 5px;
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* IE 10+ */
  user-select: none; /* Likely future */
}
.deck-item:hover {
  background-color: #0a0a12c9;
  cursor: pointer;
}
.active {
  background-color: #0a0a12;
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
#accept {
  margin-right: 5px;
  color: #2ecc71;
  border: 2px #2ecc71 solid;
}

#accept:hover {
  color: #fff;
  background-color: #2ecc71;
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

.error {
  font-size: 18px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
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
