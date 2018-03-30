<template>
  <div>
    <Sidebar/>
    <Navbar />
    <MainContent />
    <VirtualLayer />
    <!-- <Foot /> -->
  </div>
</template>

<script> 
import { Navbar, MainContent, Sidebar, VirtualLayer, Foot } from './components/framework';
export default {
  name: 'Root',
  components: { Navbar, MainContent, Sidebar, VirtualLayer, Foot },
}
</script>