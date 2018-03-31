<template>
	<div>
		<div class="main">
			<nav-header></nav-header>
			<div class="accessory-result-page accessory-page">
						<div class="container">
							<!--标题栏-->
							<div class="filter-nav">
								<span class="sortby">Sort by:</span>
								<a href="javascript:void(0)" class="default cur">Default</a>
								<a href="javascript:void(0)" class="price" v-bind:class="{'sort-up':sortFlag}" @click="sortBlogs()">日期<svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
								<a href="javascript:void(0)" class="filterby stopPop" @click.stop="showFilterPop">分类目录</a>
							</div>
							<!--内容-->
							<div class="accessory-result">
								<!--左侧栏-->
								<div class="filter stopPop" id="filter" v-bind:class="{'filterby-show':filterBy}">
									<dl class="filter-price">
										<dt>全部分类:</dt>
										<dd><a href="javascript:void(0)" @click="showAllBlog()" v-bind:class="{'cur':speciesChecked === -1}">ALL ({{allNum}})</a></dd>
										<dd v-for="(item,index) in species">
											<a href="javascript:void(0)" @click="locationBlog(item.index)" v-bind:class="{'cur':speciesChecked===item.index}">{{item.name}}（{{item.blogNum}}）</a>
										</dd>
									</dl>
								</div>
								<!--右侧栏-->
								<div class="accessory-list-wrap">
									<!--将axios获取到的数组存进BlogsList，然后将此传递至子组件BlogList-->
									<blog-list :blogs = "selectList"></blog-list>
								</div>
							</div>
						</div>

					</div>

			<div class="md-overlay" v-show="overLayFlag" @click.stop="closePop"></div>
			<nav-footer></nav-footer>
		</div>
	</div>
</template>
<script>
  import NavHeader from './../components/NavHeader'
  import NavFooter from './../components/NavFooter'
  import BlogList from '../components/BlogList'
//  import NavBread from './../components/NavBread'
//  import Modal from './../components/Modal'
  import axios from 'axios'
  export default{
    data(){
      return {
        BlogsList:[],
				selectList:[],
        sortFlag:true,
//        page:1,
//        pageSize:8,
//        busy:true,
//        loading:false,
//        mdShow:false,
//        mdShowCart:false,
        species:[
					{
					  index: 'html',
						name: 'Html(5)',
						blogNum: 0
					},
          {
            index:'javascript',
						name: 'Javascript',
            blogNum: 0
          },
          {
            index:'css',
						name: 'CSS',
            blogNum: 0
          },
          {
            index:'vue',
						name: 'Vue',
            blogNum: 0
          },
          {
            index:'data-structure',
						name: '数据结构',
            blogNum: 0
          },
          {
            index:'other',
            name: '其他',
            blogNum: 0
          }
        ],
				allNum: 0,
        filterBy:false,
        overLayFlag:false,
        speciesChecked:-1 // 默认给all列表高亮（.cur）
      }
    },
    mounted() {
      this.getBlogsList();
    },
    components:{
      NavHeader,
      NavFooter,
      BlogList,
//      NavBread,
//      Modal
    },
    methods:{
      getBlogsList() {
        axios.get('/result').then(res => {
          let results = res.data;
          // console.log(results); 数据在results的data属性内
          this.BlogsList = results.data;
          this.selectList = results.data;
          this.allNum = this.BlogsList.length;
          // 从json中获取每个数据的label，用来更新species数组的blogNum值
					this.BlogsList.forEach((blog, i) => {
					  // console.log(blog.label);
					  this.species.forEach((item, j) => {
					    if (item.index === blog.label) {
					      item.blogNum += 1;
							}
						})
					})
        })
      },
//      getGoodsList1(flag){
//        var param = {
//          page:this.page,
//          pageSize:this.pageSize,
//          sort:this.sortFlag?1:-1,
//          priceLevel:this.priceChecked
//        };
//        this.loading = true;
//        axios.get("/goods/list",{
//          params:param
//        }).then((response)=>{
//          var res = response.data;
//          this.loading = false;
//          if(res.status=="0"){
//            if(flag){
//              this.goodsList = this.goodsList.concat(res.result.list);
//
//              if(res.result.count==0){
//                this.busy = true;
//              }else{
//                this.busy = false;
//              }
//            }else{
//              this.goodsList = res.result.list;
//              this.busy = false;
//            }
//          }else{
//            this.goodsList = [];
//          }
//        });
//      },
      sortBlogs(){
        this.sortFlag = !this.sortFlag;
//        this.page = 1;
				this.selectList.forEach((blog, i) => {
				  console.log(blog.time);
				})
      },
      showAllBlog(){
        this.speciesChecked = -1; // 给ALL种类列表加cur样式
				this.selectList = [];
        this.BlogsList.forEach((blog, i) => {
            this.selectList.push(blog);
        });
      },
			locationBlog(index) { // 定位到对应种类的博客index
//				console.log(i);
				this.speciesChecked = index; // 给对应的种类列表加cur样式
				this.selectList = [];
        this.BlogsList.forEach((blog, i) => {
          if (blog.label === index) {
            this.selectList.push(blog);
					}
				});
			},
      loadMore(){
        this.busy = true;
        setTimeout(() => {
          this.page++;
          this.getGoodsList(true);
        }, 50);
      },
//      addCart(productId){
//        axios.post("/goods/addCart",{
//          productId:productId
//        }).then((res)=>{
//          var res = res.data;
//          if(res.status==0){
//            this.mdShowCart = true;
//            this.$store.commit("updateCartCount",1);
//          }else{
//            this.mdShow = true;
//          }
//        });
//      },
      closeModal(){
        this.mdShow = false;
        this.mdShowCart = false;
      },
      showFilterPop(){
        this.filterBy=true;
        this.overLayFlag=true;
      },
      closePop(){
        this.filterBy=false;
        this.overLayFlag=false;
        this.mdShowCart = false;
      }
    }
  }
</script>
<style>
	.main {
		min-width: 500px;
	}

</style>
