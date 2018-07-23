<template lang="html">
  <div class="ucenter">
    <div class="ucenter-header">
      <div class="avatar"></div>
      <a href="#" v-if="islogin">{{ userinfo.username }}</a>
      <a @click="openHandler" v-if="!islogin" class="btn-login">点击登录</a>
    </div>
    <el-dialog
      title="登录"
      :visible.sync="centerDialogVisible"
      width="80%"
      center>
      <el-form label-width="80px">
        <el-form-item label="用户名" :model="form">
          <el-input v-model="form.name" type="text"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.pass" type="password"></el-input>
        </el-form-item>
        <el-button type="primary" @click="onSubmit">立即登录</el-button>
      </el-form>
    </el-dialog>
    <div class="ucenter-content">
      <h3>我的收藏</h3>
      <ul>
        <router-link tag="li" :to="{name:'MusicPlay',params:{songid:item.musicid}}" :key="index" v-for="(item,index) in collectData">
          {{ item.musicname }}-{{ item.musicauthor }}
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:"ucenter",
  data(){
    return{
      centerDialogVisible:false,
      form: {
          name: '',
          pass: ''
      },
      islogin:false,
      userinfo:{},
      collectData:[]
    }
  },
  methods:{
    openHandler(event){
      this.centerDialogVisible = true;
    },
    onSubmit(event){
      // 登录
      this.$axios.post("http://localhost:3000/login",{
        username:this.form.name,
        password:this.form.pass
      })
      .then(res => {
        this.userinfo = res.data[0];
        this.islogin = true;
        this.centerDialogVisible = false;
      })
      .catch(error => {
        console.log(error);
      })
    }
  },
  created(){
    this.$axios.get("http://localhost:3000/collect")
      .then(res =>{
          this.collectData = res.data
      })
      .catch(error => {
        console.log(error);
      })
  }
}
</script>
<style scoped>
.ucenter-header {
    width: 100%;
    height: 85px;
    line-height: 85px;
    background-color: #f8f8f8;
    padding: 0 17px;
    box-sizing: border-box;
}

.avatar {
    width: 56px;
    height: 56px;
    border-radius: 28px;
    float: left;
    background: url(//static0.qianqian.com/web/st/img/sprite/app-all-23f.png) no-repeat;
    background-size: 289px;
    overflow: hidden;
    margin: 15px 10px 0 0;
    background-position: -184px -144px;
}

.btn-login {
    display: inline-block;
}

.ucenter-content{
  background: #fff;
  padding: 10px 17px;
  box-sizing: border-box;
}
.ucenter-content h3{
  font-size: 18px;
  border-bottom: 2px solid #f2f2f2;
  padding-bottom: 5px;
}

ul li{
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #f2f2f2;
}

</style>
