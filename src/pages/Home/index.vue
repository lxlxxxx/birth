<template>
  <div>
    <el-tabs :tab-position="'left'" style="height: 400px;" class="tabs">
    <el-tab-pane label="用户管理">
      <el-carousel :interval="4000" type="card" height="400px">
      <el-carousel-item v-for="item in 6" :key="item">
      <h3 class="medium">{{ item }}</h3>
       </el-carousel-item>
      </el-carousel>
    </el-tab-pane>
    <el-tab-pane label="配置管理">
      <el-carousel :interval="4000" type="card" height="400px">
      <el-carousel-item v-for="item in 6" :key="item">
      <h3 class="medium">{{ item }}</h3>
       </el-carousel-item>
      </el-carousel>
    </el-tab-pane>
    <el-tab-pane label="角色管理">
      <el-carousel :interval="4000" type="card" height="400px">
      <el-carousel-item v-for="item in 6" :key="item">
      <h3 class="medium">{{ item }}</h3>
       </el-carousel-item>
      </el-carousel>
    </el-tab-pane>
    <el-tab-pane label="定时任务补偿">
      <el-carousel :interval="4000" type="card" height="400px">
      <el-carousel-item v-for="item in 6" :key="item">
      <h3 class="medium">{{ item }}</h3>
       </el-carousel-item>
      </el-carousel>
    </el-tab-pane>
  </el-tabs>
  </div>
</template>

<script> 
export default {
    name:"Home",
    data() {
      return {
     
      };
    },
    
  };
</script>

<style>
.tabs {
  margin:80px auto;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>