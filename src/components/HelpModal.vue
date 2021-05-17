<template>
  <div class="modal_popup" id="modal_popup">
    <form action="" class="zooming" method="post">
      <iframe
        width="560"
        height="315"
        src="http://www.youtube.com/embed/ZYooh1LxB80"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        sandbox
      ></iframe>
      <a class="button" id="accept" @click="$emit('closeModal')">Okay</a>
    </form>
  </div>
</template>

<script>
export default {
  name: "HelpModal",
};
</script>

<style lang="scss" scoped>
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

.zooming {
  animation: animatezoom 0.5s;
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
  left: 52.5%;
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
#button-container {
  margin-top: 50px;
}
.button {
  margin-top: 5%;
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

@keyframes animatezoom {
  from {
    transform: translate(-50%, -50%) scale(0);
  }
  to {
    scale: translate(-50%, -50%) scale(1);
  }
}
</style>
