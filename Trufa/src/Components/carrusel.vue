<script setup>
    import { ref } from 'vue'

    const items = [
        {tipo: 'imagen', src: '/img/caviar.jpg'},
        {tipo: 'video', src: '/videos/Video Project.mp4'},
        {tipo: 'imagen', src: '/img/ratatouille.webp'}
]

    const indiceActual = ref(0)

    function siguiente(){
        indiceActual.value = (indiceActual.value + 1) % items.length 
    }

    function anterior(){
        indiceActual.value = (indiceActual.value - 1 + items.length) % items.length
    }

</script>
<template>
    <div class="carrusel">
        <button @click="anterior"><</button>


        <div class="wrapper">
            <img 
                v-if="items[indiceActual].tipo === 'imagen'"
                :src="items[indiceActual].src"
                class="media-slider"
            >
            <video 
                v-else
                :src="items[indiceActual].src"
                class="media-slider"
                controls
                autoplay
                muted
                loop
            ></video>
        </div>

        <button @click="siguiente">></button>    


        <div class="puntos">
            <span   
                v-for="(items, i) in items"
                :key="i"
                :class="{ activa: i === indiceActual }"
                @click="indiceActual = i"
            ></span>
        </div>
    </div>
</template>

<style scoped>
.carrusel{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;
}
.wrapper{
    display: flex;
    justify-content: center;
    flex: 1;
}
.media-slider{
    height: 500px;
    width: 90%;
    border-radius: 8px;
}

</style>