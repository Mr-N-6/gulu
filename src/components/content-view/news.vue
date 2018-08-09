<template>
  <div class="newsWrapper">
    <el-input
      width="300"
      clearable
      v-model="searchVal"
      placeholder="请输入内容"
      @keyup.native="loadAllData(searchVal)"
      @keyup.13.native="searchFlow(searchVal)"
    ></el-input>
    <el-button size="mini" @click="searchFlow(searchVal)" type="primary" plain>新闻搜索</el-button>
    <el-button size="mini" @click="baiduSearchFlow(searchVal)" type="primary" plain>百度搜索</el-button>
    <div v-if="searchBool" class="contentWrap">
      <ul>
        <li v-for="(item,index) in newsData" :key="index">
          <a :href="item.url" target="_blank">{{ item.title }}</a>
          <p>
            {{ item.content }}
          </p>
          <div class="imagesWrap">
            <img v-for="(imgItem, imgIndex) in item.imageUrls" :key="imgIndex" width="200px" :src="imgItem" alt="">
          </div>
          <div class="floatR">
            <p>
              <span>时间：</span><span>{{ item.publishDateStr }}</span>
              <span>作者：</span><span>{{ item.posterScreenName }}</span>
            </p>
          </div>
        </li>
      </ul>
    </div>

    <div v-else class="searchWrapper" v-html="searchValues">

    </div>

    <div class="loadAllWrapper">
      <ul>
        <li v-for="(item, index) in loadAll" :key="index">
          {{ item.word }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "news",
    data(){
      return {
        searchVal: '',
        newsData: [],
        searchValues: '',
        timeout:  null,
        searchBool: false,
        loadAll: []
      }
    },
    methods: {
      searchFlow(val){
        let that = this;
        that.searchBool = true;
        let url = 'http://120.76.205.241:8000/news/qihoo?kw='+ val +'&site=qq.com&apikey=OjqwF3H5Z1c76wFHRbIeeMPx4Fonm3b1xSjLTztAE5zc9r3nWNCESDEfDYOvhtVw';
        that.$axios.get(url).then( res => {
          this.newsData = res.data.data;
          if (this.newsData = []) {
            this.$message.warning('暂无数据')
          }
        }).catch( err => {
          // this.$message.error(`错误信息${err}`)
        })
      },
      baiduSearchFlow(val){
        let that = this;
        that.searchBool = false;
        let url = 'https://www.baidu.com/s?ie=utf-8&mod=11&isbd=1&isid=F1180D2F7DE26772&ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd='+ val +'&rsv_pq=9ef66f0a00021ca8&rsv_t=00f7PHvLgxi4ufEHZtFaReMsEsGsUH1HCj%2Btn6U%2Fo2LkO0i1ogIVrByiNYY&rqlang=cn&rsv_enter=1&rsv_sug3=3&rsv_sug1=1&rsv_sug7=001&rsv_sid=26523_1469_26966_21120_26922_22157&_ss=1&clist=&hsug=&csor=3&pstg=5&_cr1=26041';
        that.$axios.get(url).then( res => {
          console.log(res.data);
          this.searchValues = res.data;
        }).catch( err => {
          this.$message.error(`错误信息${err}`)
        })
      },
      loadAllData(val){
        this.$axios.get('https://sug.so.360.cn/suggest?encodein=utf-8&encodeout=utf-8&format=json&fields=word&word='+ val).then( res => {
          this.loadAll = res.data.result;
        }).catch( err => {
          this.$message.error(`错误信息：${err}`)
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .newsWrapper {
    width: 100%;
    height: 100%;
    text-align: left;
    padding: 15px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    .contentWrap {
      font-size: 14px;
      width: 100%;
      margin-top: 10px;
      ul {
         li {
           border-bottom: 1px solid #cccccc;
           width: 100%;
           a {
             color: #0101d9;
             text-decoration: none;
             border: none !important;
             margin: 15px 0;
             display: inline-block;
           }
           p {
             overflow: hidden;
             text-overflow: ellipsis;
             white-space: nowrap;
           }
           .floatR {
             text-align: right;
             margin: 15px;
             font-size: 12px;
           }
           .imagesWrap {
             img {
               margin: 10px 5px;
             }
           }
         }
      }
    }
  }
</style>
