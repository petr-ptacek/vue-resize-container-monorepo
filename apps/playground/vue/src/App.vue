<script setup lang="ts">
import {
  type ResizeContainerProps,
  VueResizeContainer,
  VueResizeContainerSection,
} from "@petr-ptacek/vue-resize-container";

const _props: ResizeContainerProps = {
  direction: "horizontal",
};
</script>

<template>
  <div style="width: 100%; height: 100vh">
    <VueResizeContainer v-bind="_props">
      <template #sectionAlpha>
        <VueResizeContainerSection>
          <div class="section alpha">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cumque dolorem earum neque nihil
              officia quas quasi tempora ut velit.
            </p>
            <p>
              Autem cum, eaque fugiat hic impedit iste numquam pariatur totam voluptatibus. Accusamus fugit illo impedit
              molestiae, perferendis perspiciatis repellat vitae.
            </p>
            <p>
              Accusamus aliquam, doloribus eius eveniet harum hic laudantium officiis qui quidem saepe sed voluptate.
              Cumque eum nisi quibusdam quidem ratione.
            </p>
            <p>
              Commodi doloribus ea est ex nesciunt obcaecati sed sequi tempore. Ad alias corporis delectus nobis
              provident quia tenetur? Culpa, soluta!
            </p>
            <p>
              Amet corporis doloremque minus veniam. Excepturi, sapiente, temporibus. Animi at consequuntur eius illo
              iusto magnam magni nobis, odit velit vero.
            </p>
            <p>
              Commodi corporis dolorem dolores earum enim facere in incidunt qui quia ratione? Commodi incidunt natus
              odit quis repellat. Atque, natus.
            </p>
          </div>
        </VueResizeContainerSection>
      </template>
      <template #sectionBeta>
        <VueResizeContainerSection>
          <div class="beta section"></div>
        </VueResizeContainerSection>
      </template>
    </VueResizeContainer>
  </div>
</template>

<style>
.section {
  padding: 10px;
}

.vue-resize-container-section {
}

.alpha {
  min-width: 600px;
  overflow: visible;
  background-color: lightblue;
}

.beta {
  background-color: lightgreen;
}
</style>
