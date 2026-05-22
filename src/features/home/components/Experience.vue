<script setup lang="ts">
import { experience } from "../../../content/experience";
import NotchSection from "../../../components/NotchSection.vue";
import Banner from "../../../components/Banner.vue";
import gsap from "gsap";
import { ref, onMounted, onUnmounted } from "vue";
import { t } from "../../../i18n/utils/translate";

const sectionRef = ref<HTMLElement | null>(null);
const cardsRef = ref<HTMLElement[]>([]);
let cardTween: gsap.core.Timeline | null = null;

onMounted(() => {
  if (!sectionRef.value || cardsRef.value.length === 0) return;

  cardTween = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      start: "top bottom",
    },
  });

  cardTween.fromTo(
    cardsRef.value,
    { y: 60, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5, stagger: 0.15, ease: "power2.out" },
  );
});

onUnmounted(() => {
  if (cardTween) {
    cardTween.kill();
    cardTween = null;
  }
});
</script>

<template>
  <div class="experience" ref="sectionRef">
    <NotchSection class="experience-notch-start" />
    <NotchSection class="experience-notch-end" />
    <div class="grid">
      <div class="experience-title">
        <Banner class="experience-title-banner" :copy="t('experience')" size="sm" animated />
        <h2 class="experience-title-copy">{{ t("experience") }}</h2>
      </div>
    </div>
    <div class="grid">
      <div class="experience-list">
        <article
          v-for="(entry, index) in experience"
          :key="entry.company"
          class="experience-card"
          :ref="(el: any) => { if (el) cardsRef[index] = el as HTMLElement }"
        >
          <div class="experience-card-top">
            <div class="experience-card-period">{{ entry.period }}</div>
          </div>
          <div class="experience-card-body">
            <h3 class="experience-card-company">{{ entry.company }}</h3>
            <p class="experience-card-role">{{ entry.role }}</p>
            <ul class="experience-card-bullets">
              <li v-for="bullet in entry.bullets" :key="bullet" class="experience-card-bullet">
                {{ bullet }}
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.experience {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  gap: var(--space-xl);
  padding-left: var(--space-outer);
  padding-right: var(--space-outer);
  background-color: var(--color-beige-500);
  min-height: calc(var(--lvh) * 100 + var(--radius-xxl));
  padding-top: 96px;
  padding-bottom: 96px;

  @include mixins.mq("md") {
    padding-top: 144px;
    padding-bottom: 144px;
    gap: var(--space-xxl);
  }

  @include mixins.mq("lg") {
    gap: var(--space-xxxl);
  }

  &-title {
    position: relative;
    padding-top: var(--space-md);
    grid-column: 1 / 13;

    @include mixins.mq("md") {
      grid-column: 1 / 10;
    }

    @include mixins.mq("lg") {
      grid-column: 3 / 8;
    }

    &-copy {
      font-weight: 900;
      letter-spacing: 0.02em;
      font-size: var(--font-size-title-md);

      @include mixins.mq("sm") {
        font-size: var(--font-size-title-lg);
      }

      @include mixins.mq("xl") {
        font-size: var(--font-size-title-xl);
      }
    }

    &-banner {
      position: absolute;
      top: 0;
      left: -8px;
      transform: translate(0, -20%) rotate(-4deg);

      @include mixins.mq("lg") {
        left: -16px;
        transform: translate(0, -20%) rotate(-6deg);
      }
    }
  }

  &-notch {
    &-start {
      position: absolute;
      top: 0;
      left: 0;
      transform: translateY(-100%);
      color: var(--color-beige-500);
      --icon-color: var(--color-beige-500);
    }

    &-end {
      position: absolute;
      bottom: 0;
      left: 0;
      color: var(--color-beige-600);
      --icon-color: var(--color-beige-600);
    }
  }

  &-list {
    width: 100%;
    grid-column: 1 / span 12;
    display: flex;
    flex-direction: column;
    gap: var(--space-lg);

    @include mixins.mq("lg") {
      grid-column: 3 / span 8;
    }
  }

  &-card {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
    padding: var(--space-md);
    border-radius: var(--radius-lg);
    background-color: var(--color-beige-400);
    border: var(--stroke-sm) solid var(--color-beige-600);

    @include mixins.mq("md") {
      padding: var(--space-lg);
      flex-direction: row;
      gap: var(--space-lg);
    }

    &-top {
      flex-shrink: 0;

      @include mixins.mq("md") {
        width: 200px;
      }
    }

    &-period {
      font-family: "ProFontWindows";
      font-size: var(--font-size-xs);
      color: var(--color-text-300);
      text-transform: uppercase;
      letter-spacing: 0.05em;

      @include mixins.mq("md") {
        font-size: var(--font-size-sm);
      }
    }

    &-body {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
    }

    &-company {
      font-weight: 900;
      font-size: var(--font-size-title-xs);
      color: var(--color-text-400);

      @include mixins.mq("md") {
        font-size: var(--font-size-title-sm);
      }
    }

    &-role {
      font-family: "ProFontWindows";
      font-size: var(--font-size-sm);
      color: var(--color-text-300);
      text-transform: uppercase;
      letter-spacing: 0.03em;
    }

    &-bullets {
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
      padding-left: 0;
      margin: 0;
      list-style: none;
      padding-top: var(--space-xs);
    }

    &-bullet {
      position: relative;
      padding-left: 16px;
      font-size: var(--font-size-sm);
      color: var(--color-text-300);
      line-height: 1.6;

      @include mixins.mq("md") {
        font-size: var(--font-size-md);
      }

      &::before {
        content: "";
        position: absolute;
        left: 2px;
        top: 8px;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: var(--color-accent-400, var(--color-cyan-500));
      }
    }
  }
}
</style>
