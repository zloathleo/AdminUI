<template>
    <div id="MainContent">
        <Breadcrumb />
        <div class="main-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>  
import Breadcrumb from './Breadcrumb.vue';
export default {
    name: 'MainContent',
    components: { Breadcrumb }
}
</script>

<style scoped lang="less">
.breadcrumb {
  padding: 0.5rem 1rem;
}
.main-content {
  width: 100%;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
}
</style>