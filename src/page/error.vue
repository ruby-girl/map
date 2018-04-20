<template>
<div>
  <Tit :nav="navMsg"></Tit>
  <Search></Search>
  <div class="errorText">很抱歉，未能找到相关梦境</div>
</div>
  
</template>
<script>
export default {
  name: 'dream',
  data () {
    return {
      navMsg: '周公解梦'
    }
  },
  components: {
    'Search': require('@/components/search.vue'),
    'Tit': require('@/components/nav.vue')
  }
}

</script>
<style>
.errorText{
  color:#e4393c;
  display: flex;
  justify-content: center;
  align-items:center;
  margin-top: 30%;
}
</style>
