<template>
  <Presence>
    <Motion
      :initial="{ opacity: 0, y: 100 }"
      :in-view="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.8, delay: index * 0.05 }"
      class="group relative w-full border-t border-gray-800 hover:bg-gray-100 transition-colors duration-500 cursor-pointer overflow-hidden"
      @click="openProject"
    >
      <div class="container mx-auto px-6 py-16 flex flex-col gap-4 relative z-10">
        <div class="flex justify-between items-start">
          <span class="text-sm md:text-base font-body text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
            {{ project.year }}
          </span>
          <div class="opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
            <ArrowUpRight class="text-gray-900 w-8 h-8" />
          </div>
        </div>
        <h2 class="text-5xl md:text-7xl lg:text-8xl font-display text-gray-100 group-hover:text-gray-900 transition-colors duration-500 uppercase tracking-tight leading-none">
          {{ project.title[i18n.locale] || project.title.ko }}
        </h2>
        <div class="flex flex-wrap gap-2 mt-4">
          <span v-for="(tag, i) in project.tags" :key="i"
            class="px-3 py-1 border border-gray-700 rounded-full text-xs md:text-sm font-body text-gray-400 group-hover:border-gray-400 group-hover:text-gray-600 transition-colors duration-300"
          >
            {{ getTagLabel(tag) }}
          </span>
        </div>
      </div>
      <div class="absolute inset-0 bg-gray-100 transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-in-out -z-0" />
    </Motion>
  </Presence>
</template>

<script setup>
/* eslint-disable no-undef */
import { Motion, Presence } from "@motionone/vue";
import { ArrowUpRight } from 'lucide-vue-next';
import { i18n } from '../i18n';

const props = defineProps({
  project: Object,
  index: Number
});

const getTagLabel = (tag) => {
  if (typeof tag === 'string') return tag;
  return tag[i18n.locale] || tag.ko;
};

const openProject = () => {
  if (props.project && props.project.url) {
    window.open(props.project.url, '_blank');
  }
};
</script>