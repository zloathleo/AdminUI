<template>
    <nav id="sidebar" class="my-sidebar bg-primary" style="z-index:3;display:none">
        <div class="sidebar-header">
            <h3>RodinX</h3>
        </div>
        <ul class="list-group list-group-flush">
            <router-link :to="{name:'home'}" @click.native="clickCloseSidebar" class="list-group-item w3-bar-item w3-button w3-padding m-sidebaritem-active">
                <i class="fa fa-users"></i>
                Dashboard
            </router-link>
            <router-link :to="{name:'alarm'}" @click.native="clickCloseSidebar" class="list-group-item w3-bar-item w3-button w3-padding">
                <i class="fa fa-eye"></i>
                Alarms
            </router-link>
        </ul>
    </nav>
</template>

<script> 
export default {
    name: 'Sidebar',
    methods: {
        clickCloseSidebar: function (event) {
            $("#sidebar").fadeOut(); 
            $("#overlay").fadeOut();
        }
    }
}
</script>

<style scoped lang="less">
.my-sidebar {
  height: 100%;
  width: 200px;
  max-width: 100%;
  position: fixed;
  overflow: hidden;
  outline: 0;
  direction: ltr;
  .sidebar-header {
    padding: 20px;
    color: #fff;
  }
}
</style>