<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="column1">
          <label for="title"><b>Title</b></label>
        </div>
        <div class="column2">
          <textarea
            rows="3"
            type="text"
            id="title"
            name="title:"
            placeholder="enter the title"
            v-model="blog.title"
          />
        </div>
      </div>
      <div class="row">
        <div class="column1">
          <label for="description"><b>Description</b></label>
        </div>
        <div class="column2">
          <textarea
            rows="5"
            type="text"
            id="description"
            name="description"
            placeholder="enter the description.."
            v-model="blog.description"
          />
        </div>
      </div>
      <div class="row">
        <input type="submit" value="submit" v-on:click.prevent="editingPost" />
      </div>
    </form>
  </div>
</template>
<script src="./js/EditPosts.js"></script>
<style scoped>
input[type="text"],
select,
textarea {
  width: 50%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}
label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

input[type="submit"] {
  background-color: #04aa6d;
  color: white;
  padding: 12px 20px;
  border: none;
  margin-right: 500px;
  margin-top: 40px;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}

input[type="submit"]:hover {
  background-color: #45a049;
}
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  margin-top: 40px;
}
.row {
  margin-left: 400px;
}
/*
.column1 {
  float: left;
  width: 25%;
  margin-top: 6px;
}

.column2 {
  float: left;
  width: 75%;
  margin-top: 6px;
} */

@media screen and (max-width: 350px) {
  .column1,
  .column2,
  input[type="submit"] {
    width: 50%;
    margin-top: 0;
  }
}
</style>
