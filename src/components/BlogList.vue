<template>
  <div class="bloglist">
    <div class="blogs" v-for="list in blogs">
      <article class="excerpt">
        <a :href=list.href target="_blank" class="focus">
          <!--data-src="../assets/img/wechat.jpg",-->
          <img :src=list.imgSrc alt="1">
        </a>
        <!--标题-->
        <header>
            <a :href=list.href target="_blank">
							{{list.title}}
						</a>
        </header>
       <!--时间和作者-->
        <p class="meta">
          <time><i class="icon iconfont icon-time"></i>{{list.time}}</time>
          <span><i class="icon iconfont icon-icon-awsauthor"></i>{{list.author}}</span>
					<span>{{list.label}}</span>
        </p>
        <!--文章简介-->
        <p class="note">
          {{list.content}}
        </p>
      </article>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        currentDate: new Date(),
//        BlogsList: [
////          {
////            href: '#1',
////            imgSrc: '../../static/img/note1.png',
////            title: '主题一',
////            label: '(更新中)',
////            time: '2017-7-1',
////            author: 'thomas',
////            content: '上套课程讲了Koa2，挑战全栈就必须和数据库打交道，' +
////                  '个人觉的作为一个前端开发人员，操作MongDB还是比较惬意的。因为它是一种NoSql数据库，不用写SQL语句。' +
////                  '所以我们在Koa2的课程中间查了MongDB的课程，等会操作数据库后，我们再返...'
////          },
////          {
////            href: '#1',
////            imgSrc: '../../static/img/note2.png',
////            title: '主题一',
////            label: '(更新中)',
////            time: '2017-7-1',
////            author: 'thomas',
////            content: '上套课程讲了Koa2，挑战全栈就必须和数据库打交道，' +
////            '个人觉的作为一个前端开发人员，操作MongDB还是比较惬意的。因为它是一种NoSql数据库，不用写SQL语句。' +
////            '所以我们在Koa2的课程中间查了MongDB的课程，等会操作数据库后，我们再返...'
////          },
////          {
////            href: '#1',
////            imgSrc: '../../static/img/note3.png',
////            title: '主题一',
////            label: '(更新中)',
////            time: '2017-7-1',
////            author: 'thomas',
////            content: '上套课程讲了Koa2，挑战全栈就必须和数据库打交道，' +
////            '个人觉的作为一个前端开发人员，操作MongDB还是比较惬意的。因为它是一种NoSql数据库，不用写SQL语句。' +
////            '所以我们在Koa2的课程中间查了MongDB的课程，等会操作数据库后，我们再返...'
////          },
////          {
////            href: '#1',
////            imgSrc: '../../static/img/note3.png',
////            title: '主题一',
////            label: '(更新中)',
////            time: '2017-7-1',
////            author: 'thomas',
////            content: '上套课程讲了Koa2，挑战全栈就必须和数据库打交道，' +
////            '个人觉的作为一个前端开发人员，操作MongDB还是比较惬意的。因为它是一种NoSql数据库，不用写SQL语句。' +
////            '所以我们在Koa2的课程中间查了MongDB的课程，等会操作数据库后，我们再返...'
////          },
////          {
////            href: '#1',
////            imgSrc: '../../static/img/note3.png',
////            title: '主题一',
////            label: '(更新中)',
////            time: '2017-7-1',
////            author: 'thomas',
////            content: '上套课程讲了Koa2，挑战全栈就必须和数据库打交道，' +
////            '个人觉的作为一个前端开发人员，操作MongDB还是比较惬意的。因为它是一种NoSql数据库，不用写SQL语句。' +
////            '所以我们在Koa2的课程中间查了MongDB的课程，等会操作数据库后，我们再返...'
////          },
////          {
////            href: '#1',
////            imgSrc: '../../static/img/note3.png',
////            title: '主题一',
////            label: '(更新中)',
////            time: '2017-7-1',
////            author: 'thomas',
////            content: '上套课程讲了Koa2，挑战全栈就必须和数据库打交道，' +
////            '个人觉的作为一个前端开发人员，操作MongDB还是比较惬意的。因为它是一种NoSql数据库，不用写SQL语句。' +
////            '所以我们在Koa2的课程中间查了MongDB的课程，等会操作数据库后，我们再返...'
////          }
//        ]
      }
    },
		props: {
      blogs: { // 传递参数
        type: Array,
      }
    },
		created () {
		},
		methods: {
			}
  }
</script>

<style scope lang="scss">
$font1:12px;

.blogs {
  /*width:100%;*/
  /*height: 100px;*/
    .excerpt {
      border: 2px solid #eaeaea;cursor: move;
			/*position: absolute;*/
			-webkit-transition: all .5s ease-out;
			transition: all .5s ease-out;
      border-radius: 4px 4px 0 0;
      overflow: hidden;
      width: 90%;
      padding:16px;
      margin: 0 0 10px 0 ;
      box-sizing: border-box;
   		&:hover {
				 border-color: #d98b34;
				 -webkit-transform: translateY(-5px);
				 -ms-transform: translateY(-5px);
				 transform: translateY(-5px);
				 -webkit-box-shadow: 0 0 10px #999;
				 box-shadow: 0 0 10px #999;
				 -webkit-transition: all .5s ease-out;
				 transition: all .5s ease-out;
			 }
		   .focus {
				 float:left;
				 display: inline;
				 padding: 0;
				 width:30%;
				 margin: 0px 20px 0 0px;
				 img {
					 width:100%;
					 /*border:1px solid transparent;*/
				 }
        }
        header {
				  text-align: left;
          a {
						margin-left: 4px;
            font-size: 20px;
          }
        }
        .meta {
          font-size: $font1;
          margin:6px 0;
					text-align: left;
          i {
						font-size: 10px;
            margin: 0 4px;
          }
					span:nth-child(3) {
						margin-left: 10px;
						color: #2b2b2b;
						background-color: #ececec;
						border-radius: 3px;
						padding:0 2px;
					}
        }
				.note { /* 两行溢出显示省略号*/
					text-align: left;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;
				}

    }

}
</style>
