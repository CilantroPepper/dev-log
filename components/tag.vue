<template>
    <div class="tag-root" :style="`--color: var(--level-${level});`">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
    defineProps<{
        level: 1 | 2 | 3
    }>()
</script>

<style scoped>
.tag-root {
    --level-1: #F56C6C;
    --level-2: #E6A23C;
    --level-3: #67C23A;
    box-sizing: border-box;
    padding: 0rem .4rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    background: var(--color);
    color: #fff;
    border-radius: .25rem;
}
</style>