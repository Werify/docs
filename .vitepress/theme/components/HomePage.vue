<script setup lang="ts">
import { computed } from "vue";
import { useData } from "vitepress";
import { useEmojiItem, useMediumZoom } from "./composables";
import { version } from "../../../package.json";

const emoji = useEmojiItem();
const { frontmatter } = useData();
const features = computed(() => frontmatter.value.czFeatures);
const pkgFeatureTitle = computed(() => frontmatter.value.pkgFeatureTitle);
const emojiFeature = computed(() => frontmatter.value.emojiFeature);
useMediumZoom();
</script>

<template>

  <div
    flex="~ wrap grow basis-30% md:row col"
    class="maauto max-w-1152px mt-14 lg:px-1 px-2 py-4 justify-between items-stretch"
  >
    <div
      v-for="(feat, i) in features"
      :key="i"
      class="feat"
      :class="{ relative: i !== 2 }"
    >
      <h2 class="featTitle">
        {{ feat.title }}
      </h2>
      <p class="dark:c-gray-4 c-gray-5 text-4.2">
        {{ feat.details }}
      </p>
    </div>
    <div class="feat relative">
      <h2 class="featTitle">
        {{ pkgFeatureTitle }}
      </h2>
      <p class="dark:c-gray-4 c-gray-5 text-4.2">
        $ npm install -D cz-git<br />
        + cz-git
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        (<span c-orange-5> 1.6 MB </span>) <br />added &nbsp;<span c-orange-5
          >1</span
        >&nbsp; package in &nbsp;<span c-orange-5>0.482s</span>
      </p>
    </div>
    <div class="feat">
      <h2 class="featTitle">
        {{ emojiFeature.title }}
      </h2>
      <p class="dark:c-gray-4 c-gray-5 text-4.2">
        <span text-6>{{ emoji }}</span
        >&nbsp; {{ emojiFeature.details }}
      </p>
    </div>
  </div>

  <p class="maauto max-w-1152px mt-10 lg:px-1 px-2">
    <img
      class="max-w-100%"
      src="https://user-images.githubusercontent.com/40693636/188255006-b9df9837-4678-4085-9395-e2905d7ec7de.gif"
      alt="demo-gif"
      width="1144"
      height="376"
      loading="lazy"
      decoding="async"
      onerror="this.classList.add('error');"
    />
  </p>
  <div class="flex flex-row text-xs mt-4 justify-center">
    <span>version:{{ version }}</span>
  </div>

</template>
