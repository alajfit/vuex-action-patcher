<template>
    <div class="demo">
        <h1>{{ name }} Demo</h1>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: mapState([
        'name'
    ])
}
</script>

<style lang="scss">
.demo {
    h1 {
        color: slategrey;
    }
}
</style>
