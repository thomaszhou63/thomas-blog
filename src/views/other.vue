<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
	</div>
</template>

<script>
  //sample--->import Hello from './components/Hello'
  export default {
    name: 'hello',
    data () {
      return {
        msg: '欢迎！'
      }
    }
  }
</script>

<style>

</style>