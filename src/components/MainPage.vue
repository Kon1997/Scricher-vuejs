<template>
  <div>
    <Navbar />
    <PostForm @post-added="onPostAdded" />
    <div v-for="(item, index) in list" :key='item._id'>
      <Post @post-deleted="onPostDeleted" :object="item" :index="index" />
    </div>
    <infinite-loading @infinite="infiniteHandler">
      <span slot="no-more">
        Nothing to load
      </span>
    </infinite-loading>
  </div>
</template>
<script>
import PostForm from './PostForm'
import Post from './Post'
import Navbar from './Navbar'
import InfiniteLoading from 'vue-infinite-loading'
import { getPosts } from '../util/api'
import { getUser} from '../util/auth'
import router from '../router'
import eventBus from '../util/eventbus'
export default {
  data() {
    return {
      list: [],
    }
  },
  methods: {
    infiniteHandler($state) {
      getPosts({
        limit: 10,
        newest: this.list.length ? this.list[this.list.length - 1].date : undefined
      })
      .then(data => {
          if (data.length) {
            this.list = this.list.concat(data)
            $state.loaded()
            /*if (this.list.length / 20 === 2) {
              $state.complete()
            }*/
          } else {
            $state.complete()
          }
      })
      .catch(err => {
        console.error(err)
        eventBus.$emit('error-thrown', err)
        router.push('/login')
      })
    },
    onPostAdded(value) {
      this.list.unshift(value)
    },
    onPostDeleted(index) {
      this.list.splice(index, 1)
    }
  },
  components: {
    InfiniteLoading,
    PostForm,
    Post,
    Navbar
  },
};
</script>