<template>
    <div class="demo">
        <h1>{{ name }} Demo</h1>
        <button @click="updateTime">Click</button>
        <h2>Time since start of day {{ timeSinceStartOfDay }}</h2>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    methods: {
        updateTime() {
            this.setTime()
        },
        ...mapActions([
            'setTime'
        ])
    },
    computed: {
        ...mapState([
            'name',
            'timeSinceStartOfDay'
        ])
    }
}
</script>

<style lang="scss">
.demo {
    h1 {
        color: slategrey;
    }
}
</style>
