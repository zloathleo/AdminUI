<template>
    <div class="block">
        <div class="bg-primary ribbon-box text-uppercase">{{initData.name}}</div>
        <div class="row">
            <div class="col-12">
                <ul class="property-list ribbon-box-paddomh">
                    <RadioButtom :title="'File'" :value="initData.file" :item1="fileItem1" :item2="fileItem2" @onPropsChange="fileChange" />
                    <div class="dropdown-divider"></div>

                    <div class="col-12">
                        <div class="row">
                            <FileSFS1000 v-for="_file, index in initData.files" :key="index" :init-data='_file' />
                        </div>

                        <ChanActionBar v-if="$mem.state.isLogin" :chan-name="initData.name" />
                    </div>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>   
import FileSFS1000 from './FileSFS1000.vue';
import RadioButtom from './RadioButtom.vue';
import ChanActionBar from './ChanActionBar.vue';

export default {
    name: 'ChanSFS1000',
    components: { FileSFS1000, RadioButtom, ChanActionBar },
    props: {
        initData: Object,
    },
    data: function () {
        return {
            burnerTypeItem1: { display: 'IR', value: '1' },
            burnerTypeItem2: { display: 'UV', value: '0' },
            EnItem1: { display: 'Enable', value: 1 },
            EnItem2: { display: 'Disable', value: 0 },
            fileItem1: { display: 'File A', value: 0 },
            fileItem2: { display: 'File B', value: 1 },
        }
    },
    methods: {
        burnerTypeChange(propName, newVal, oldVal) {
            this.initData.type = newVal;
        },
        enableChange(propName, newVal, oldVal) {
            this.initData.enable = newVal;
        },
        fileChange(propName, newVal, oldVal) {
            this.initData.file = newVal;
        },
    },
}
</script>

<style scoped lang="less">
@media (min-width: 768px) {
  .ribbon-box-paddomh {
    padding: 1rem 1rem 0;
    .active {
      z-index: 0;
    }
    .value {
      padding-right: 3rem;
    }
  }
}
</style>