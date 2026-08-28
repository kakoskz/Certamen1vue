<script setup>
    import { ref } from 'vue'

    const items = {
        tipo: 'imagen', src: '/img/caviar.jpg',
        tipo: 'video', src: '/videos/Video Project.mp4',
        tipo: 'imagen', src: '/img/ratatouille.webp'
    }

    const indiceActual = ref(0)

    function siguiente(){
        indiceActual.value = (indiceActual + 1) % items.length 
    }

    function anterior(){
        indiceActual.value = (indiceActual - 1) % items.length
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
                :class="{ activa: 1 === indiceActual }"
                @click="indiceActual = i"
            ></span>
        </div>
    </div>
</template>