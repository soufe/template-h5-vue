<template>
  <h1>{{ msg }}</h1>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Ts extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped lang="less"></style>
