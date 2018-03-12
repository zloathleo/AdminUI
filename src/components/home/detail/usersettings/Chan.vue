<template>
    <div class="block">
        <div class="bg-primary ribbon-box text-uppercase">CH1</div>
        <div class="row">
            <div class="col-12">
                <ul class="property-list ribbon-box-paddomh">
                    <li class="detail-item-li">
                        <span>Burner Type</span>
                        <span class="value">
                            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                <label class="btn btn-primary value-radio-buttom active">
                                    <input type="radio" name="options" checked=""> RI
                                </label>
                                <label class="btn btn-primary value-radio-buttom">
                                    <input type="radio" name="options" class="btn-sm"> UV
                                </label>
                            </div>
                        </span>
                    </li>
                    <li class="detail-item-li">
                        <span>Channel En</span>
                        <span class="value ">
                            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                <label class="btn btn-primary value-radio-buttom active">
                                    <input type="radio" name="options" checked=""> Enable
                                </label>
                                <label class="btn btn-primary value-radio-buttom">
                                    <input type="radio" name="options" class="btn-sm"> Disable
                                </label>
                            </div>
                        </span>
                    </li>
                    <li class="detail-item-li">
                        <span>File</span>
                        <span class="value">
                            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                <label class="btn btn-primary value-radio-buttom active">
                                    <input type="radio" name="options" checked=""> File A
                                </label>
                                <label class="btn btn-primary value-radio-buttom">
                                    <input type="radio" name="options" class="btn-sm"> File B
                                </label>
                            </div>
                        </span>
                    </li>
                    <div class="dropdown-divider"></div>

                    <div class="col-12">
                        <div class="row">
                            <file/>
                            <file/>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>   
import File from './File.vue';
export default {
    name: 'Chan',
    components: { File },
}
</script>

<style scoped lang="less">
@media (min-width: 768px) {
  .ribbon-box-paddomh {
    padding: 1rem 1rem 0;
    .value {
      padding-right: 3rem;
    }
  }
}
</style>