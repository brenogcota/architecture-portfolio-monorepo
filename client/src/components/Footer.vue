<template>
  <div class="_footer">
    <p>footer</p>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
 ._footer {
   background: var(--gray);
   border-top: 1px solid var(--dark);

   display: flex;
   min-height: 200px;
   width: 100%;
 }
</style>
