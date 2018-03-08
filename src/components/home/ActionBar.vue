<template>
    <div class="btn-group actionbar" role="group">
        <button type="button" class="btn btn-primary"> Add Row
            <i class="fa fa-plus-circle"></i>
        </button>
        <button type="button" class="btn btn-primary"> Auto Assign
            <i class="fa fa-th"></i>
        </button>
    </div>
</template>

<script> 
export default {
    name: 'ActionBar'
}
</script>

<style scoped lang="less">
.actionbar {
  position: fixed;
  bottom: 22px;
  right: 0px;
}
</style>