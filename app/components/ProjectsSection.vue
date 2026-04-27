<script setup lang="ts">
import { useLocalizedProjects } from '~/data/projects'

const { locale } = useI18n()

const localizedProjects = computed(() =>
  useLocalizedProjects(locale.value as 'fr' | 'en')
)
</script>

<template>
  <section id="projects" class="bg-[var(--beige)] w-full" aria-labelledby="projects-heading">

    <!-- Section header -->
    <div class="pt-20 px-14 pb-10 flex items-end justify-between gap-10 flex-wrap max-lg:pt-[60px] max-lg:px-8 max-lg:pb-8 max-lg:flex-col max-lg:items-start max-sm:pt-10 max-sm:px-6 max-sm:pb-6">
      <div>
        <p class="eyebrow reveal" style="margin-bottom: 18px;">{{ $t('projects.eyebrow') }}</p>
        <h2
          id="projects-heading"
          class="m-0 text-[clamp(48px,6vw,96px)] leading-[0.92] tracking-[-0.045em] font-medium text-ink flex items-baseline gap-[18px] flex-wrap reveal"
          style="font-family:'Inter Tight',sans-serif"
        >
          <span>{{ $t('projects.title') }}</span>
          <span class="font-caveat font-semibold text-[0.92em] text-accent inline-block leading-[0.85] translate-y-[0.04em]">
            {{ $t('projects.title_caveat') }}
          </span>
        </h2>
      </div>
      <div class="max-w-[380px]">
        <p class="font-serif-it text-[20px] leading-[1.4] text-muted m-0 mb-2 reveal">
          {{ $t('projects.subtitle') }}
        </p>
        <p class="font-mono text-[11px] tracking-[0.16em] uppercase text-ink-2 m-0 reveal">
          {{ String(localizedProjects.length).padStart(2, '0') }} / {{ String(localizedProjects.length).padStart(2, '0') }}
        </p>
      </div>
    </div>

    <!-- Project cards -->
    <div class="w-full">
      <ProjectCard
        v-for="(project, idx) in localizedProjects"
        :key="project.id"
        :project="project"
        :flip="idx % 2 === 1"
      />
    </div>

    <div class="h-20 border-t border-[var(--line)]" />
  </section>
</template>
