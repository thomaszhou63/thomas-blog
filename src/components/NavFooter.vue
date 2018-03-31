<template>
  <footer class="footer">
    <div class="footer_wrap">
        <div class="footer_inner">
					<!--<div class="footer__region">-->
            <!--<span>Region</span>-->
            <!--<select class="footer__region__select">-->
              <!--<option value="en-US">USA</option>-->
              <!--<option value="zh-CN">China</option>-->
            <!--</select>-->
          <!--</div>-->
            <span>© 2018 周先生的前端杂物铺</span>
					--
            <a href="#">
							网站地图
            </a>


				</div>
    </div>
  </footer>
</template>
<style scope lang="scss">
	.footer {
		color: #333;
		/*background-color:#ffffff;*/
		.footer_wrap {
			margin:0 auto;
			max-width: 1280px;
			height: 50px;
			border-top: 1px solid rgba(51, 51, 51, 0.15);
			.footer_inner {
				color: #9e9a97;
				span {
					margin:0 10px;
				}
				a {
					margin:0 10px;
				}
			}
		}
	}

</style>