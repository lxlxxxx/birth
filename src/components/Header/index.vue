<template>
  <div>
     <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
     <el-menu-item index="1" @click="goHome">主页</el-menu-item>
     <el-menu-item index="2" @click="goTimeline">时间线</el-menu-item>
     <el-menu-item index="3" >消息中心</el-menu-item>
     <el-menu-item index="4">订单管理</el-menu-item>
    </el-menu>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name:'Header',
  data() {
      return {
        
      };
    },
    methods: {
     goHome(){
      this.$router.push(
        {
          path:"/home"
        }
      )
     },
     goTimeline(){
      this.$router.push(
        {
          path:"/Timeline"
        }
      )
     }
}
}
</script>

<style>

</style>