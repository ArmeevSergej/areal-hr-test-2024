<template>
  <div class="app">
    <div class="hero hero-text">
      <h1 class="title">Добро пожаловать на наш сайт!</h1>
      <p class="subtitle">
        Наша платформа предлагает передовые инструменты для управления данными. 
        Мы стремимся сделать вашу работу удобной и эффективной.
      </p>
      <p class="additional-info">
        Узнайте больше о возможностях нашей системы, исследуйте встроенные аналитические функции 
        и улучшайте свои бизнес-процессы.
      </p>
      <button class="btn">О нас</button>
    </div>
    <div class="hero hero-buttons">
      <h2 class="title-small">Начните работать с нами!</h2>
      <div class="buttons">
        <button class="btn">Войти</button>
        <button class="btn">Зарегистрироваться</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
.app {
  font-family: "Arial", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center; 
  gap: 30px; 
  height: 100vh;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite; 
  color: white;
  text-align: center;
  position: relative;
  padding: 20px;
}


@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}


.hero {
  background-color: rgba(0, 0, 0, 0.6); 
  padding: 40px;
  border-radius: 15px;
  transition: transform 0.5s ease-in-out, box-shadow 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  width: 80%; 
  max-width: 500px; 
}


.hero:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
}


.hero-text .title {
  font-size: 2rem;
  margin-bottom: 15px;
  animation: fadeIn 1s ease-out;
}

.hero-text .subtitle,
.hero-text .additional-info {
  font-size: 1.55rem;
  line-height: 1.5;
  opacity: 0;
  animation: fadeIn 1.5s ease-out forwards;
  animation-delay: 0.5s;
}

.hero-text .additional-info {
  margin-top: 15px;
}


.hero-buttons .title-small {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #f0f0f0;
  animation: fadeIn 1s ease-out;
}

.hero-buttons .buttons {
  display: flex;
  flex-direction: column;
  gap: 15px;
  opacity: 0;
  animation: fadeIn 2s ease-out forwards;
  animation-delay: 1s;
}


.btn {
  padding: 12px 25px;
  font-size: 1rem;
  color: #fff;
  background-color: rgba(105, 89, 209, 0.8); 
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}


.btn:hover {
  background-color: rgb(88, 72, 193);
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}


@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
