
<template>
    <div class="card">
        <slot />
    </div>
</template>
<style  scoped>
.card {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: var(--spacing-sm);
    border-radius: var(--border-radius);
    background-color: var(--color-primary);
    margin: var(--spacing-sm);
    transition: all 0.5s ease;
    box-shadow: 5px 6px 10px -1px rgba(0, 0, 0, 0.35);
}
</style>