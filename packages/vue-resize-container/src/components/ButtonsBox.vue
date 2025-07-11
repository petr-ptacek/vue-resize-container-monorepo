<script lang="ts" setup>
import ButtonBase from "./ButtonBase.vue";
import IconCollapse from "./IconCollapse.vue";
import IconExpand from "./IconExpand.vue";

const emit = defineEmits<{
  expand: [MouseEvent];
  collapse: [MouseEvent];
}>();

defineSlots<{
  iconExpand: () => void;
  iconCollapse: () => void;
}>();

function emitExpand(e: MouseEvent): void {
  emit("expand", e);
}

function emitCollapse(e: MouseEvent): void {
  emit("collapse", e);
}
</script>

<template>
  <div class="vue-resize-container-buttons">
    <ButtonBase
      class="vue-resize-container-buttons__button"
      data-action="expand"
      @click="emitExpand"
    >
      <slot name="iconExpand">
        <IconExpand />
      </slot>
    </ButtonBase>

    <div class="vue-resize-container-buttons__splitter"></div>
    <ButtonBase
      class="vue-resize-container-buttons__button"
      data-action="collapse"
      @click="emitCollapse"
    >
      <slot name="iconCollapse">
        <IconCollapse />
      </slot>
    </ButtonBase>
  </div>
</template>
