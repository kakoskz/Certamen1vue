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
    justify-items: center;
    gap: 500px;
    background-color: #262730;
}
.logo-box img{
    width: 250px;
}
.enrutadores a {
  position: relative;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.15);
  border: solid 1px rgba(255, 255, 255, 0.4);
  border-radius: 900px;
  backdrop-filter: blur(12px) saturate(100%);
  -webkit-backdrop-filter: blur(12px) saturate(100%);
  box-shadow:
    0 4px 20px rgba(0, 0, 0, 0.15),
    inset 0 1px 1px rgba(255, 255, 255, 0.6),
    inset 0 -1px 1px rgba(0, 0, 0, 0.1);
  color: #1a1a1a;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  text-decoration: none;
}

.enrutadores a::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 50%;
  background: linear-gradient(180deg, rgba(255,255,255,0.4), transparent);
  border-radius: 900px 900px 0 0;
  pointer-events: none;
}

.enrutadores a:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
  box-shadow:
    0 8px 30px rgba(0, 0, 0, 0.2),
    inset 0 1px 1px rgba(255, 255, 255, 0.7);
}

.enrutadores a:active {
  transform: translateY(0);
  background: rgba(255, 255, 255, 0.1);
}
</style>
