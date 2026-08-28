<script>
export default{
    name:'Navbar'
}

</script>

<template>
    <div class="nave">
        <div class="logo-box">
            <img src="/img/logo.png" alt="Logo">
        </div>
        <div class="enrutadores">

                <router-link to="/">Home</router-link>
                <router-link to="/atractivos">Atractivos</router-link>
                <router-link to="/gastronomia">Gastronomia</router-link>
                <router-link to="/contacto">Contacto</router-link>
        </div>
    </div>
</template>


<style scoped>
.nave{
    display: flex;
    grid-template-columns:1fr 1fr ;
    gap: 500px;
}
.logo-box img{
    width: 250px;
}
.enrutadores {
    display: flex;
    gap: 50px;
    padding: 1rem;
    flex-wrap: wrap;
    background: black;
    border-radius: 50px;
}

.enrutadores a{
    text-decoration: none;
}
</style>
