<script setup lang="ts">
import type { LocalizedProject } from '~/data/projects'

const props = defineProps<{
  project: LocalizedProject
  flip?: boolean
}>()

const isBeforeAfter = computed(() => !!props.project.beforeAfterPairs?.length)

// ── Carousel ──────────────────────────────────────────────────────────
const currentSlide = ref(0)
let timer: ReturnType<typeof setInterval> | null = null

function startTimer() {
  stopTimer()
  const count = isBeforeAfter.value
      ? props.project.beforeAfterPairs!.length
      : props.project.images.length
  if (count <= 1) return
  timer = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % count
  }, 3500)
}

function stopTimer() {
  if (timer) { clearInterval(timer); timer = null }
}

function goTo(i: number) {
  currentSlide.value = i
  startTimer()
}

onMounted(startTimer)
onUnmounted(stopTimer)

// ── Before/After slider ───────────────────────────────────────────────
const sliderValue = ref(50)
let resumeTimeout: ReturnType<typeof setTimeout>

watch(currentSlide, () => { sliderValue.value = 50 })

function onSliderInput(e: Event) {
  sliderValue.value = Number((e.target as HTMLInputElement).value)
  stopTimer()
  clearTimeout(resumeTimeout)
  resumeTimeout = setTimeout(startTimer, 2000)
}

onUnmounted(() => clearTimeout(resumeTimeout))
</script>

<template>
  <article
      class="grid grid-cols-2 border-t border-[var(--line)] max-lg:grid-cols-1 max-lg:[direction:ltr]"
      :class="flip ? '[direction:rtl]' : ''"
      :aria-label="project.title"
  >

    <!-- ── Text side ──────────────────────────────────────────────── -->
    <div class="[direction:ltr] p-[72px_64px] flex flex-col gap-7 justify-center min-w-0 max-lg:p-[48px_32px] max-sm:p-[36px_24px]">

      <div class="flex items-baseline gap-[18px]">
        <span class="font-mono text-[11px] tracking-[0.16em] text-muted">{{ project.num }}</span>
        <span class="eyebrow">{{ project.kicker }}</span>
      </div>

      <h3
          class="m-0 text-[clamp(40px,5.5vw,86px)] leading-[0.95] tracking-[-0.04em] font-medium text-ink"
          style="font-family:'Inter Tight',sans-serif"
      >
        {{ project.title }}<span :style="{ color: project.tone.hue }">.</span>
      </h3>

      <p class="font-serif-it m-0 text-[22px] leading-[1.35] text-muted max-w-[520px]">
        {{ project.desc }}
      </p>

      <div class="flex flex-col gap-2">
        <p class="text-[14px] leading-[1.6] text-ink-2 m-0 max-w-[480px]">
          {{ project.context }}
        </p>
        <a
          v-if="project.community"
          :href="project.community.href"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.08em] text-muted no-underline transition-colors duration-200 hover:text-ink w-fit"
        >
          <svg width="10" height="10" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M6 3h7v7M13 3 5 11M11 11v2H3V5h2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          {{ project.community.label }}
        </a>
      </div>

      <!-- Solution chips -->
      <div class="flex flex-wrap gap-2">
        <span
            v-for="(item, i) in project.solution"
            :key="i"
            class="inline-flex items-center px-3 py-[5px] rounded-full bg-white border border-[var(--line)] text-[12px] font-medium text-ink tracking-[0.01em] whitespace-nowrap"
        >{{ item }}</span>
      </div>

      <!-- Result box -->
      <div
          class="bg-white border border-[var(--line)] border-l-[3px] rounded-[6px] p-[16px_18px]"
          :style="{ borderLeftColor: project.tone.hue }"
      >
        <p class="eyebrow mb-1.5">{{ $t('projects.label_result') }}</p>
        <p class="text-[14px] leading-[1.55] text-ink m-0 font-medium">{{ project.result }}</p>
      </div>

      <!-- Stack + links -->
      <div class="flex items-center justify-between flex-wrap gap-5 mt-2 max-sm:flex-col max-sm:items-start">
        <div class="font-mono text-[11px] tracking-[0.06em] text-muted flex flex-wrap gap-[4px_12px] items-center">
          <template v-for="(tech, i) in project.stack" :key="tech">
            <span>{{ tech }}</span>
            <span v-if="i < project.stack.length - 1" class="opacity-40">·</span>
          </template>
        </div>
        <div class="flex gap-2.5">
          <a
              v-for="link in project.links"
              :key="link.kind"
              :href="link.href"
              :target="link.href !== '#' ? '_blank' : undefined"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-[var(--line)] text-ink text-[13px] font-medium no-underline transition-[border-color,transform] duration-200 hover:border-[var(--ink)] hover:-translate-y-px"
          >
            <svg v-if="link.kind === 'github'" width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M8 .2a8 8 0 0 0-2.5 15.6c.4.07.55-.18.55-.4v-1.4c-2.2.5-2.7-1-2.7-1-.36-.9-.9-1.15-.9-1.15-.74-.5.05-.5.05-.5.82.06 1.25.84 1.25.84.72 1.25 1.9.9 2.36.68.07-.53.28-.9.5-1.1-1.77-.2-3.63-.88-3.63-3.93 0-.87.31-1.58.82-2.13-.08-.2-.36-1 .08-2.1 0 0 .67-.21 2.2.81a7.6 7.6 0 0 1 4 0c1.53-1.02 2.2-.81 2.2-.81.44 1.1.16 1.9.08 2.1.51.55.82 1.26.82 2.13 0 3.06-1.87 3.73-3.65 3.93.29.25.54.74.54 1.5v2.22c0 .22.15.47.55.4A8 8 0 0 0 8 .2Z" />
            </svg>
            <svg v-else width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M6 3h7v7M13 3 5 11M11 11v2H3V5h2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            {{ link.kind === 'github' ? $t('projects.link_github') : $t('projects.link_demo') }}
          </a>
        </div>
      </div>
    </div>

    <!-- ── Visual side ────────────────────────────────────────────── -->
    <div class="[direction:ltr] p-[72px_64px] flex items-center justify-center relative min-w-0 max-lg:p-8 max-sm:p-6">

      <!-- Ambient glow -->
      <div
          class="absolute inset-10 pointer-events-none"
          :style="{ background: `radial-gradient(ellipse at center, ${project.tone.hue}1a 0%, transparent 70%)` }"
      />

      <!-- Frame wrapper -->
      <div class="w-full max-w-[580px] relative mt-6">

        <!-- FIG label -->
        <p class="absolute -top-[22px] left-0 font-mono text-[10px] tracking-[0.16em] text-muted m-0">
          FIG. {{ project.num }} — {{ project.title.toUpperCase() }}
        </p>

        <!-- White frame + corner ticks -->
        <div class="relative bg-[#FDFBF7] p-3.5 shadow-[0_1px_0_rgba(0,0,0,0.04),_0_18px_40px_-20px_rgba(0,0,0,0.18)]">
          <UiCornerTicks color="var(--ink)" />

          <!-- ── BEFORE/AFTER MODE ── -->
          <div v-if="isBeforeAfter" class="relative aspect-[16/10] overflow-hidden rounded-[2px] select-none">

            <div
                v-for="(pair, i) in project.beforeAfterPairs"
                :key="i"
                class="absolute inset-0 transition-opacity duration-700"
                :class="i === currentSlide ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'"
            >
              <!-- Image APRÈS (fond complet) -->
              <NuxtImg
                  :src="pair.after"
                  :alt="`${project.title} — après ${i + 1}`"
                  width="580"
                  height="363"
                  format="webp"
                  quality="80"
                  :loading="i === 0 ? 'eager' : 'lazy'"
                  class="absolute inset-0 w-full h-full object-cover"
                  sizes="sm:100vw md:50vw lg:580px"
              />

              <!-- Image AVANT (clipée à gauche du slider) -->
              <div
                  class="absolute inset-0 overflow-hidden"
                  :style="{ width: `${i === currentSlide ? sliderValue : 50}%` }"
              >
                <NuxtImg
                    :src="pair.before"
                    :alt="`${project.title} — avant ${i + 1}`"
                    width="580"
                    height="363"
                    format="webp"
                    quality="80"
                    :loading="i === 0 ? 'eager' : 'lazy'"
                    class="absolute inset-0 h-full object-cover"
                    style="width: 580px; max-width: none;"
                    sizes="sm:100vw md:50vw lg:580px"
                />
              </div>

              <!-- Labels avant / après -->
              <span class="absolute top-3 left-3 font-mono text-[9px] tracking-[0.14em] uppercase text-white bg-black/40 px-2 py-1 rounded-full leading-none backdrop-blur-sm pointer-events-none">
                {{ $t('projects.label_before') }}
              </span>
              <span class="absolute top-3 right-3 font-mono text-[9px] tracking-[0.14em] uppercase text-white bg-black/40 px-2 py-1 rounded-full leading-none backdrop-blur-sm pointer-events-none">
                {{ $t('projects.label_after') }}
              </span>

              <!-- Ligne de séparation + handle -->
              <div
                  class="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_6px_rgba(0,0,0,0.3)] pointer-events-none"
                  :style="{ left: `calc(${i === currentSlide ? sliderValue : 50}% - 1px)` }"
              >
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-[0_1px_6px_rgba(0,0,0,0.25)] flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M5 8H2M11 8h3M5 8l2-2M5 8l2 2M11 8l-2-2M11 8l-2 2" stroke="#555" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>

              <!-- Range input invisible par-dessus tout -->
              <input
                  v-if="i === currentSlide"
                  type="range"
                  min="0"
                  max="100"
                  step="0.5"
                  :value="sliderValue"
                  class="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10"
                  :aria-label="$t('projects.slider_aria')"
                  @input="onSliderInput"
              />
            </div>

            <!-- Indicators -->
            <div
                v-if="project.beforeAfterPairs!.length > 1"
                class="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10 pointer-events-none"
            >
              <button
                  v-for="(_, i) in project.beforeAfterPairs"
                  :key="i"
                  class="h-1.5 rounded-full border-0 p-0 cursor-pointer transition-all duration-300 pointer-events-auto"
                  :class="i === currentSlide
                  ? 'w-5 bg-[var(--beige)] shadow-[0_1px_3px_rgba(0,0,0,0.3)]'
                  : 'w-1.5 bg-[var(--beige-2)] hover:bg-white/75'"
                  :aria-label="`Slide ${i + 1}`"
                  @click="goTo(i)"
              />
            </div>

          </div>

          <!-- ── CAROUSEL CLASSIQUE ── -->
          <div v-else class="relative aspect-[16/10] overflow-hidden rounded-[2px]">

            <NuxtImg
                v-for="(img, i) in project.images"
                :key="img"
                :src="img"
                :alt="`${project.title} — vue ${i + 1}`"
                width="580"
                height="363"
                format="webp"
                quality="80"
                :loading="i === 0 ? 'eager' : 'lazy'"
                class="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
                :class="i === currentSlide ? 'opacity-100' : 'opacity-0'"
                sizes="sm:100vw md:50vw lg:580px"
            />

            <div
                v-if="project.images.length > 1"
                class="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10"
            >
              <button
                  v-for="(_, i) in project.images"
                  :key="i"
                  class="h-1.5 rounded-full border-0 p-0 cursor-pointer transition-all duration-300"
                  :class="i === currentSlide
                  ? 'w-5 bg-[var(--beige)] shadow-[0_1px_3px_rgba(0,0,0,0.3)]'
                  : 'w-1.5 bg-[var(--beige-2)] hover:bg-white/75'"
                  :aria-label="`Image ${i + 1}`"
                  @click="goTo(i)"
              />
            </div>

          </div>

        </div>
      </div>
    </div>

  </article>
</template>