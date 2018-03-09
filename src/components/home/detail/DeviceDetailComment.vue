<template>
    <div class="block">
        <ul class="property-list">
            <li class="detail-item-li">
                <span>°C</span>
                <span class="value">Celsius</span>
            </li>
            <li class="detail-item-li">
                <span>°F</span>
                <span class="value">Fahrenhert</span>
            </li>
            <li class="detail-item-li">
                <span>IR</span>
                <span class="value">Infrared</span>
            </li>
            <li class="detail-item-li">
                <span>UV</span>
                <span class="value">Ultraviolet</span>
            </li>
            <li class="detail-item-li">
                <span>Fault</span>
                <span class="value">Error Code(Hex)</span>
            </li>
            <li class="detail-item-li">
                <span>TEMP</span>
                <span class="value">Temperature</span>
            </li>
            <li class="detail-item-li">
                <span>MAX</span>
                <span class="value">AC Maximum</span>
            </li>
            <li class="detail-item-li">
                <span>MIN</span>
                <span class="value">AC Minimum</span>
            </li>
            <li class="detail-item-li">
                <span>ON_TL</span>
                <span class="value">ON Threshold in Low</span>
            </li>
            <li class="detail-item-li">
                <span>ON_TH</span>
                <span class="value">ON Threshold in High</span>
            </li>
            <li class="detail-item-li">
                <span>TEMP UNIT</span>
                <span class="value">
                    °C
                </span>
            </li>
        </ul>
    </div>
</template>

<script>  
export default {
    name: 'DeviceDetailComment',
}
</script>

<style scoped lang="less">
.detail-item-li {
  padding-bottom: 0.2rem;
}
</style>