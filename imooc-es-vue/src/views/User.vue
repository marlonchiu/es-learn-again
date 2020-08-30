<template>
  <div class="user">
    <h1>用户列表</h1>
    <button @click="asc">升序</button>
    <button @click="desc">降序</button>
    <button @click="reset">重置</button>
    <ul>
      <li v-for="(item, index) in userList" :key="index">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'User',
  data () {
    return {
      userList: [],
      proxy: {}
    }
  },
  async created () {
    // 解构赋值
    const { data } = await axios.get('http://jsonplaceholder.typicode.com/users')
    console.log(data)
    // this.userList = data

    // 代理
    this.proxy = new Proxy({}, {
      get (target, key) {
        if (key === 'asc') {
          // [].concat(data) 不改变原来的数组
          return [].concat(data).sort((a, b) => a.name > b.name ? 1 : -1)
        } else if (key === 'desc') {
          return [].concat(data).sort((a, b) => b.name > a.name ? 1 : -1)
        } else {
          return data
        }
      },
      set () {
        return false
      }
    })

    this.userList = this.proxy.default
  },
  methods: {
    asc () {
      this.userList = this.proxy.asc
    },
    desc () {
      this.userList = this.proxy.desc
    },
    reset () {
      this.userList = this.proxy.default
    }
  }
}
</script>

<style>
li {
  list-style: none;
}
ul {
  padding: 0;
}
</style>
