<template>
  <div class="navbar">
    <nav>
      <label class="logo">Blogging-Platforms</label>
      <ul>
        <li>
          <router-link :to="{ path: '/' }" exact
            ><a class="active" href="#">Publish</a></router-link
          >
        </li>
        <li>
          <router-link :to="{ path: '/ViewPosts' }" exact
            ><a href="#">View Posts</a></router-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>
<style scoped>
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
}
nav {
  background: #0082e6;
  height: 80px;
  width: 100%;
  font-family: montserrat;
}
label.logo {
  color: white;
  font-size: 25px;
  line-height: 80px;
  padding: 0 100px;
  font-weight: bold;
  margin-left: -460px;
}
nav ul {
  float: right;
  margin-right: 300px;
}
nav ul li {
  display: inline-block;
  line-height: 80px;
  margin: 0 5px;
}
nav ul li a {
  color: white;
  font-size: 17px;
  padding: 7px 13px;
  border-radius: 3px;
  text-transform: uppercase;
}
a.active,
a:hover {
  background: #1b9bff;
  transition: 0.5s;
}
@media (max-width: 950px) {
  label.logo {
    font-size: 30px;
    padding-left: 50px;
  }
  nav ul li a {
    font-size: 15px;
  }
}
</style>
