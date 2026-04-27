<script setup lang="ts">
const { t } = useI18n()

const CONTACT = {
  email: 'quentin@yunikon.re',
  github: { url: 'https://github.com/Masutayunikon', label: 'github.com/Masutayunikon' },
  linkedin: { url: 'https://www.linkedin.com/in/quentinrbt/', label: 'linkedin.com/in/quentinrbt' },
}

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const form = reactive<FormData>({ name: '', email: '', subject: '', message: '' })
const focusedField = ref<string | null>(null)
const submitting = ref(false)
const submitted = ref(false)
const errorMsg = ref('')

async function handleSubmit() {
  submitting.value = true
  errorMsg.value = ''

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      },
    })
    submitted.value = true
  } catch (err: unknown) {
    // Si le serveur a répondu (4xx/5xx) → message d'erreur, pas de mailto
    const status = (err as any)?.statusCode
    if (status) {
      errorMsg.value = t('contact.error')
      submitting.value = false
      return
    }
    // Fallback mailto uniquement si pas de réponse du tout (réseau coupé, serveur down)
    try {
      const subject = encodeURIComponent(form.subject || t('contact.field_subject_ph'))
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`)
      window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`
      submitted.value = true
    } catch {
      errorMsg.value = t('contact.error')
    }
  } finally {
    submitting.value = false
  }
}

const emailCopied = ref(false)
function copyEmail() {
  navigator.clipboard?.writeText(CONTACT.email)
  emailCopied.value = true
  setTimeout(() => { emailCopied.value = false }, 1400)
}

const inputClass = 'appearance-none w-full px-4 h-12 font-["Inter_Tight",sans-serif] text-[15px] text-ink bg-[#FDFBF7] border border-[var(--line)] rounded-lg outline-none transition-[border-color,box-shadow] duration-200 focus:border-[var(--ink)] focus:shadow-[0_0_0_3px_rgba(107,99,85,0.12)]'
const channelCardClass = 'flex items-center gap-[18px] px-[22px] py-[18px] bg-[#FDFBF7] border border-[var(--line)] rounded-[10px] text-ink w-full transition-[border-color,transform] duration-200 hover:border-[var(--ink)] hover:-translate-y-px no-underline'
const channelIconClass = 'w-[42px] h-[42px] rounded-lg bg-[var(--beige-2)] flex items-center justify-center shrink-0'
</script>

<template>
  <section id="contact" class="bg-[var(--beige)] flex flex-col" aria-labelledby="contact-heading">

    <!-- Header -->
    <div class="px-6 pt-10 pb-6 sm:px-8 sm:pt-[60px] sm:pb-8 lg:px-20 lg:pt-[88px] lg:pb-12">
      <p class="eyebrow reveal" style="margin-bottom: 18px;">{{ $t('contact.eyebrow') }}</p>
      <h2
          id="contact-heading"
          class="m-0 text-[clamp(48px,6vw,96px)] leading-[0.92] tracking-[-0.045em] font-medium text-ink flex items-baseline gap-[18px] flex-wrap reveal"
          style="font-family:'Inter Tight',sans-serif"
      >
        <span>{{ $t('contact.title') }}</span>
        <span
            class="font-semibold text-[0.92em] text-accent inline-block leading-[0.85] translate-y-[0.04em]"
            style="font-family:'Caveat',cursive"
        >{{ $t('contact.title_caveat') }}</span>
      </h2>
    </div>

    <!-- Grid -->
    <div class="flex-1 grid grid-cols-1 gap-12 px-6 pb-9 sm:px-8 sm:pb-12 lg:grid-cols-2 lg:gap-16 lg:px-20 lg:pb-16">

      <!-- LEFT: Pitch + signature + channels -->
      <div class="flex flex-col gap-9">
        <p class="m-0 text-[20px] leading-[1.55] text-ink-2 max-w-[520px] reveal">
          {{ $t('contact.pitch') }}
          <em class="font-serif-it text-muted" style="font-style:normal"> {{ $t('contact.pitch_italic') }}</em>
        </p>

        <!-- Signature -->
        <div class="mt-3 pt-2 reveal">
          <UiHandwritten :height="64" color="var(--accent)" :text="$t('contact.get_in_touch')" />
        </div>

        <!-- Channels -->
        <div class="flex flex-col gap-2.5 reveal">

          <!-- Email -->
          <button
              :class="channelCardClass"
              class="cursor-pointer text-left font-[inherit]"
              type="button"
              @click="copyEmail"
              :aria-label="`${$t('contact.email_label')}: ${CONTACT.email}`"
          >
            <span :class="channelIconClass">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3 7.5 12 13l9-5.5M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            <div class="flex-1 min-w-0 flex flex-col gap-1">
              <span class="eyebrow block">{{ $t('contact.email_label') }}</span>
              <span class="font-mono text-[15px] font-medium overflow-hidden text-ellipsis whitespace-nowrap">{{ CONTACT.email }}</span>
            </div>
            <span
                class="font-mono text-[11px] tracking-[0.12em] uppercase shrink-0 transition-colors duration-200"
                :class="emailCopied ? 'text-[#4a8a5c]' : 'text-muted'"
            >
              {{ emailCopied ? $t('contact.copied') : $t('contact.copy') }}
            </span>
          </button>

          <!-- GitHub -->
          <a
              :href="CONTACT.github.url"
              target="_blank"
              rel="noopener noreferrer"
              :class="channelCardClass"
              :aria-label="`${$t('contact.github_label')}: ${CONTACT.github.label}`"
          >
            <span :class="channelIconClass">
              <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M8 .2a8 8 0 0 0-2.5 15.6c.4.07.55-.18.55-.4v-1.4c-2.2.5-2.7-1-2.7-1-.36-.9-.9-1.15-.9-1.15-.74-.5.05-.5.05-.5.82.06 1.25.84 1.25.84.72 1.25 1.9.9 2.36.68.07-.53.28-.9.5-1.1-1.77-.2-3.63-.88-3.63-3.93 0-.87.31-1.58.82-2.13-.08-.2-.36-1 .08-2.1 0 0 .67-.21 2.2.81a7.6 7.6 0 0 1 4 0c1.53-1.02 2.2-.81 2.2-.81.44 1.1.16 1.9.08 2.1.51.55.82 1.26.82 2.13 0 3.06-1.87 3.73-3.65 3.93.29.25.54.74.54 1.5v2.22c0 .22.15.47.55.4A8 8 0 0 0 8 .2Z" />
              </svg>
            </span>
            <div class="flex-1 min-w-0 flex flex-col gap-1">
              <span class="eyebrow block">{{ $t('contact.github_label') }}</span>
              <span class="text-[15px] font-medium overflow-hidden text-ellipsis whitespace-nowrap">{{ CONTACT.github.label }}</span>
            </div>
            <span class="font-mono text-[11px] tracking-[0.12em] text-muted uppercase shrink-0">{{ $t('contact.open') }}</span>
          </a>

          <!-- LinkedIn -->
          <a
              :href="CONTACT.linkedin.url"
              target="_blank"
              rel="noopener noreferrer"
              :class="channelCardClass"
              :aria-label="`${$t('contact.linkedin_label')}: ${CONTACT.linkedin.label}`"
          >
            <span :class="channelIconClass">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.06c.53-1 1.83-2.05 3.77-2.05C21.4 8.65 22 11 22 14.05V21h-4v-6.2c0-1.48-.03-3.39-2.07-3.39-2.07 0-2.39 1.62-2.39 3.28V21h-4V9Z" />
              </svg>
            </span>
            <div class="flex-1 min-w-0 flex flex-col gap-1">
              <span class="eyebrow block">{{ $t('contact.linkedin_label') }}</span>
              <span class="text-[15px] font-medium overflow-hidden text-ellipsis whitespace-nowrap">{{ CONTACT.linkedin.label }}</span>
            </div>
            <span class="font-mono text-[11px] tracking-[0.12em] text-muted uppercase shrink-0">{{ $t('contact.open') }}</span>
          </a>

        </div>
      </div>

      <!-- RIGHT: Form -->
      <form
          class="bg-[var(--paper)] border border-[var(--line)] rounded-[14px] p-9 flex flex-col gap-5 self-start relative w-full min-w-0 reveal"
          novalidate
          @submit.prevent="handleSubmit"
      >
        <UiCornerTicks />

        <!-- Success state -->
        <div v-if="submitted" class="flex flex-col items-center justify-center gap-4 py-12 text-center">
          <div class="w-12 h-12 rounded-full bg-[#edf5f0] flex items-center justify-center">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12l5 5L19 7" stroke="#4a8a5c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <p class="text-[18px] font-medium text-ink m-0">{{ $t('contact.success_title') }}</p>
          <p class="text-[14px] text-muted m-0 max-w-[280px]">{{ $t('contact.success_desc') }}</p>
        </div>

        <!-- Form fields -->
        <template v-else>
          <div class="flex justify-between items-baseline mb-1">
            <span class="text-[18px] font-medium text-ink tracking-[-0.01em]">{{ $t('contact.form_title') }}</span>
            <span class="font-mono text-[10px] tracking-[0.16em] text-muted">{{ $t('contact.form_ref') }}</span>
          </div>

          <!-- Name + Email -->
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label class="flex flex-col gap-2">
              <span class="eyebrow block transition-colors duration-200" :class="focusedField === 'name' ? 'text-ink' : 'text-muted'">
                {{ $t('contact.field_name') }}<span class="text-accent ml-1" aria-hidden="true">*</span>
              </span>
              <input
                  v-model="form.name"
                  type="text"
                  name="name"
                  :placeholder="$t('contact.field_name_ph')"
                  required
                  autocomplete="name"
                  :class="inputClass"
                  @focus="focusedField = 'name'"
                  @blur="focusedField = null"
              />
            </label>

            <label class="flex flex-col gap-2">
              <span class="eyebrow block transition-colors duration-200" :class="focusedField === 'email' ? 'text-ink' : 'text-muted'">
                {{ $t('contact.field_email') }}<span class="text-accent ml-1" aria-hidden="true">*</span>
              </span>
              <input
                  v-model="form.email"
                  type="email"
                  name="email"
                  :placeholder="$t('contact.field_email_ph')"
                  required
                  autocomplete="email"
                  :class="inputClass"
                  @focus="focusedField = 'email'"
                  @blur="focusedField = null"
              />
            </label>
          </div>

          <!-- Subject -->
          <label class="flex flex-col gap-2">
            <span class="eyebrow block transition-colors duration-200" :class="focusedField === 'subject' ? 'text-ink' : 'text-muted'">
              {{ $t('contact.field_subject') }}
            </span>
            <input
                v-model="form.subject"
                type="text"
                name="subject"
                :placeholder="$t('contact.field_subject_ph')"
                autocomplete="off"
                :class="inputClass"
                @focus="focusedField = 'subject'"
                @blur="focusedField = null"
            />
          </label>

          <!-- Message -->
          <label class="flex flex-col gap-2">
            <span class="eyebrow block transition-colors duration-200" :class="focusedField === 'message' ? 'text-ink' : 'text-muted'">
              {{ $t('contact.field_message') }}<span class="text-accent ml-1" aria-hidden="true">*</span>
            </span>
            <textarea
                v-model="form.message"
                name="message"
                :placeholder="$t('contact.field_message_ph')"
                required
                rows="6"
                class="appearance-none w-full px-4 py-3.5 text-[15px] text-ink bg-[#FDFBF7] border border-[var(--line)] rounded-lg outline-none leading-[1.5] resize-y transition-[border-color,box-shadow] duration-200 focus:border-[var(--ink)] focus:shadow-[0_0_0_3px_rgba(107,99,85,0.12)]"
                style="font-family:'Inter Tight',sans-serif"
                @focus="focusedField = 'message'"
                @blur="focusedField = null"
            />
          </label>

          <div class="flex flex-col gap-3 mt-1.5 sm:flex-row sm:justify-between sm:items-center sm:flex-wrap">
            <p class="text-[12px] text-muted leading-[1.4] max-w-[280px] m-0">{{ $t('contact.form_privacy') }}</p>
            <button type="submit" class="btn btn-primary" :disabled="submitting">
              <span v-if="submitting" class="inline-flex items-center gap-2">
                <svg class="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" stroke-dasharray="31.4" stroke-dashoffset="10" />
                </svg>
                {{ $t('contact.form_sending') }}
              </span>
              <span v-else class="inline-flex items-center gap-2">
                {{ $t('contact.form_submit') }}
                <svg class="btn-arrow" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
            </button>
          </div>

          <p v-if="errorMsg" class="text-[13px] text-[#c0392b] m-0" role="alert">{{ errorMsg }}</p>
        </template>
      </form>
    </div>

    <!-- Footer -->
    <footer class="border-t border-[var(--line)] px-6 py-5 flex flex-col items-start gap-6 flex-wrap text-[12px] text-muted sm:flex-row sm:items-center sm:px-8 sm:py-6 lg:px-20 lg:py-7">
      <div class="flex items-center gap-3.5">
        <UiAppMonogram />
        <span>{{ $t('contact.footer_copyright') }}</span>
      </div>
      <div class="font-mono text-[11px] tracking-[0.14em] flex gap-[18px] items-center">
        <span class="text-ink-2">{{ $t('contact.footer_version') }}</span>
      </div>
    </footer>

  </section>
</template>