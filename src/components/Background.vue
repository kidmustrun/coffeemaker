<template>
<div class="wrap">
    <img class="background" src="../assets/background.svg" alt="background">
    <img id="ellipse1" class="ellipse" src="../assets/ellipse.svg" alt="ellipse">
    <img id="ellipse2" class="ellipse" src="../assets/ellipse.svg" alt="ellipse">
    <img class="line1" src="../assets/line1.svg" alt="line">
    <img class="line2" src="../assets/line2.svg" alt="line">
    <img id="rectangle1" class="rectangle" src="../assets/rectangle.svg" alt="rectangle">
    <img id="rectangle2" class="rectangle" src="../assets/rectangle.svg" alt="rectangle">
    <Menu :coffee_list="coffee_list"/>
    <Choose />
    
</div>

</template>

<script>
import Choose from '../components/Choose.vue'
import Menu from '../components/Menu.vue'
export default {
    components: {
    Choose,
    Menu
  },
  props:[
    'coffee_list'
  ],
  name: 'Background',
}
</script>
<style>

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    position: relative;
    background-color: #FFD1BA;
    overflow: hidden !important; 
}

.wrap{
    height: 100vh;
}

.line1{
    position: fixed;
    right: 0;
    z-index: -1;
}

.line2{
    position: fixed;
    right: 0;
    top: 50vh;
    z-index: -1;
}

.background{
    position: fixed;
    right: 0;
    height: 100vh;
    z-index: -1;
    object-fit: cover;
}

.rectangle {
    position: fixed;
    z-index: -1;
    object-fit: cover;
    animation-name: rotation;
    animation-duration: 30s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

.ellipse{
    position: fixed;
    z-index: -1;
    object-fit: cover;
    animation: bobble 8s ease-in-out infinite;
}

#ellipse1{
    right: -10vw;
    top: 25vh;
}

#ellipse2{
    right: 40vw;
    bottom: -35vh;
}

#rectangle1{
    left: 30vh;
    top:-20vh;
}

#rectangle2{
    right: 30vh;
    top: 70vh;
}

@keyframes bobble {
    0% {
        transform: translate3d(50px, 0px, 0px);
        animation-timing-function: ease-in;
    }
    25% {
        transform: translate3d(30px, 30px, 0px);
        animation-timing-function: ease-out;
    }
    50% {
        transform: translate3d(40px, 50px, 0px);
        animation-timing-function: ease-out;
    }
    75% {
        transform: translate3d(50px, 30px, 0px);
        animation-timing-function: ease-out;
    }
    100% {
        transform: translate3d(50px, 0px, 0px);
    }
}

@keyframes rotation {
    0% {
        transform:rotate(0deg)
    }

    100% {
        transform:rotate(360deg)
    }
}

</style>