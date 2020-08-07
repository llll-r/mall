<template>
  <div id="CommentInfo">
    <div class="title-comment">
      <div class="left">用户评价</div>
      <div class="right">
        <a href="#">更多</a>
      </div>
    </div>
    <div class="comment-info">
      <div class="name">
        <img :src="commentinfo.user.avatar" alt />
        <span>{{commentinfo.user.uname}}</span>
      </div>
      <div class="message">{{commentinfo.content}}</div>
      <div class="params">{{commentinfo.style}}</div>
      <div class="images">
        <div v-for="item in commentinfo.images" :key="item">
          <img :src="item" alt />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { observable } from 'vue/types/umd'
export default {
  name: "CommentInfo",
  data() {
    return {};
  },
  activated() {},
  props: {
    commentinfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style>
#CommentInfo {
  border-bottom: 2px solid rgb(235, 232, 232);
}
.title-comment {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  line-height: 40px;
  margin: 10px;
  border-bottom: 1px solid #ddd;
}
.title-comment a {
  color: black;
  text-decoration: none;
}
.name img {
  width: 35px;
  border-radius: 50%;
  /* margin-left: 10px; */
}
.name span {
  margin-left: 10px;
}
.message {
  margin-top: 10px;
  font-size: 15px;
  color: rgb(85, 84, 84);
  /* margin-left: 5px; */
}
.params {
  color: gray;
  font-size: 13px;
  margin-top: 10px;
  /* margin-left: 10px; */
}
.images {
  margin-top: 10px;
  display: flex;
}
.images img {
  width: 50px;
  height: 50px;
  margin-right: 20px;
  margin-bottom: 15px;
}
</style>
