<template>
	<div class="navhead">

		<div id="head-title">
			<p>周先生的前端杂物铺</p>
		</div>
		<div class="contact-me">
      <span v-if="isShow"
						class = "wechat icon iconfont icon-weixin"
						@mouseover="toggleShow"
						@mouseout="toggleShow"></span>

			<div v-if = "wechatIsShow" class = "wechat-img">
				<i class="triangle"></i>
				<img src="../../static/wechat.jpg"  alt="">
			</div>

			<span v-if="isShow"><a href="https://github.com/thomaszhou63" class="github icon iconfont icon-GitHub"></a></span>
		</div>

	</div>
</template>

<script>
  //sample--->import Hello from './components/Hello'
  export default {
    name: 'hello',
    data () {
      return {
        msg: '欢迎！',
        wechatIsShow: false,
        isShow: true
      }
    },
		methods: {
      toggleShow () {
        setTimeout(() => {
          this.wechatIsShow = !(this.wechatIsShow)
				},1000);

      }
		}
  }
</script>

<style scope lang="scss">
	#head-title {
		font-size: 20px;
		text-align: left;
	  margin-left: 16px;
		line-height: 38px;
		padding: 5px 0;
		p {
			width: 196px;
			border-bottom: 2px solid transparent;
			-webkit-transition: all .5s ease-out;
			transition: all .5s ease-out;
			&:hover {
		 		-webkit-transition: padding-left .3s ease-out;
		 		transition: padding-left .3s ease-out;
		 		border-bottom: 2px solid #ee7a23;
		 		padding-left: 15px;
	 		}
		}
	}
	.contact-me {
		position: absolute;
		right: 30px;
		top: 16px;

		span {
			margin:0 5px;
			font-size: 1em;
			color: #2b2b2b;
		}
	}
	@media screen and (max-width: 600px) {
		.github,.wechat {
			display: none;
		}
	}
	.wechat-img {
		position: fixed;
		right:1.5%;
		top: 30%;
		width:158px;
		height: 158px;
		border-radius:3px;
		background-color: #c9c9c9;
		line-height: 150px;

	.triangle {
		width: 0px;
		height: 0px;
		border-top:10px solid transparent;
		border-bottom:10px solid transparent;
		border-right:10px solid transparent;
		border-left:20px solid #c9c9c9;
		position: absolute;
		right: -20px;
		top: 10px;
	}

	img {
		position: absolute;
		top: 25px;
		right: 0px;
		margin:-22px 4px 4px 4px ;
		/*22 约等于 16+8*/
		width: 150px;
		border-radius: 3px;


	}
	}
	.wechat {
		cursor: pointer;
	}
	.github:hover{
		color: #4d4d4d;
	}

</style>