<template>
  <UiBrowserFrame url="bbn.dev/ide" :height="420">
    <div class="grid h-full" style="grid-template-columns: 40px 180px 1fr">
      <!-- Activity bar -->
      <div class="bg-[rgba(0,0,0,0.04)] border-r border-[var(--line)] py-2.5 flex flex-col items-center gap-3.5">
        <span
          v-for="(g, i) in glyphs"
          :key="g"
          class="text-[14px]"
          :style="{ color: i === 0 ? '#5C4A3A' : 'var(--muted)' }"
        >{{ g }}</span>
      </div>

      <!-- File tree -->
      <div class="p-[14px_12px] border-r border-[var(--line)] bg-[rgba(0,0,0,0.015)] overflow-hidden">
        <div class="text-[10px] tracking-[0.16em] uppercase text-[var(--muted)] mb-2.5">Explorer</div>
        <div
          v-for="(f, i) in files"
          :key="i"
          class="py-[3px] pr-1.5 text-[11px] rounded-[4px] whitespace-nowrap overflow-hidden text-ellipsis"
          :class="f.sel ? 'text-[var(--ink)] bg-[rgba(0,0,0,0.06)] font-medium' : f.dim ? 'text-[var(--muted)]' : 'text-[var(--ink-2)]'"
          :style="{ paddingLeft: `${6 + f.d * 10}px`, fontFamily: '\'JetBrains Mono\', monospace' }"
        >{{ f.l }}</div>
      </div>

      <!-- Editor -->
      <div class="bg-[#FBF8F2] p-[14px_16px] overflow-hidden flex flex-col">
        <div class="flex gap-1.5 mb-3">
          <span class="font-mono text-[10px] px-2.5 py-1 rounded-[4px] text-[var(--muted)]">FileTree.vue</span>
          <span class="font-mono text-[10px] px-2.5 py-1 rounded-[4px] bg-[#FDFBF7] text-[var(--ink)] border border-[var(--line)]">Editor.vue</span>
        </div>
        <pre class="m-0 font-mono text-[11.5px] leading-[1.7] text-[var(--ink-2)] flex-1 overflow-hidden"><div v-for="(line, i) in codeLines" :key="i" class="flex gap-3.5"><span class="text-[var(--muted)] opacity-60 w-[18px] text-right shrink-0">{{ i + 1 }}</span><span :style="{ color: lineColors[line.t] }">{{ line.s || ' ' }}</span></div></pre>
        <div class="mt-2.5 pt-2.5 border-t border-[var(--line)] flex justify-between font-mono text-[10px] text-[var(--muted)]">
          <span>● LSP connected</span>
          <span>TypeScript · UTF-8 · Ln 6, Col 12</span>
        </div>
      </div>
    </div>
  </UiBrowserFrame>
</template>

<script setup lang="ts">
const glyphs = ['◰', '◳', '✶', '⚙', '◯']

const files = [
  { d: 0, l: '▾ app', dim: false, sel: false },
  { d: 1, l: '▾ components', dim: false, sel: false },
  { d: 2, l: 'Editor.vue', sel: true, dim: false },
  { d: 2, l: 'FileTree.vue', dim: true, sel: false },
  { d: 2, l: 'Mailbox.vue', dim: true, sel: false },
  { d: 1, l: '▸ pages', dim: true, sel: false },
  { d: 1, l: '▸ stores', dim: true, sel: false },
  { d: 0, l: 'package.json', dim: true, sel: false },
  { d: 0, l: 'README.md', dim: true, sel: false },
]

const codeLines = [
  { t: 'comment', s: '// app/components/Editor.vue' },
  { t: 'kw', s: '<' + 'script setup>' },
  { t: 'code', s: 'import { useEditor } from "@bbn/core";' },
  { t: 'code', s: 'import { LSP } from "@bbn/lsp";' },
  { t: 'plain', s: '' },
  { t: 'code', s: 'const editor = useEditor({' },
  { t: 'code', s: '  lsp: new LSP("typescript"),' },
  { t: 'code', s: '  theme: "warm-paper",' },
  { t: 'code', s: '});' },
  { t: 'kw', s: '</' + 'script>' },
]

const lineColors: Record<string, string> = {
  comment: '#9A9286',
  kw: '#5C4A3A',
  code: '#3A3A35',
  plain: '#3A3A35',
}
</script>
