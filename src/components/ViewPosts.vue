<template>
  <div id="view-posts">
    <input type="text" v-model="search" placeholder="search posts" />
    <div v-if="blogList.length > 0">
      <div>
        <div
          v-for="blog in blogList"
          :key="blog.id"
          :blog="blog"
          class="single-post"
        >
          <h2>{{ blog.title.toUpperCase() }}</h2>
          <article>{{ blog.description }}</article>
          <div class="button">
            <button id="deleteButton" @click="deleteBlog(blog.id)">
              Delete
            </button>
            <button id="editButton" @click="editingBlog(blog)">Edit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./js/ViewPosts.js"></script>
<style scoped>
#view-posts {
  max-width: 700px;
  margin: 0 auto;
  margin-top: 40px;
}
.single-post {
  border: 1.5px solid blue;
  border-radius: 25px;
  margin-top: 30px;
  padding-bottom: 10px;
  padding-left: 20px;
  box-shadow: 4px 6px lightblue;
}
input[type="text"] {
  display: block;
  width: 50%;
  padding: 10px;
  border-radius: 10px;
}
button {
  margin-top: 20px;
  color: white;
  padding: 7px;
  margin-left: 5px;
  background-color: #0082e6;
  border: none;
  border-radius: 10px;
}
@media (max-width: 300px) {
  #view-posts {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .single-blog {
    padding: 10px;
    width: 250px;
    display: flex;
    flex-direction: column;
    box-shadow: 2px 6px #c7c5c5;
    height: fit-content;
  }
  .button {
    display: inline;
  }
}
</style>
