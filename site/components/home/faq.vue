<script setup lang="ts">
const { t, te, tm } = useLang()
const route = useRoute()

const selectedSection = ref('basics')
const selectedQuestion = ref('')

const questions = Object.keys(tm('home.faq.questions')).map((questionKey) => {
  const PATH = `home.faq.questions.${questionKey}`
  const basicSections = new Set(['what', 'mission', 'money', 'who', 'payments'])

  return {
    section: basicSections.has(questionKey) ? 'basics' : 'starting',
    question: t(`${PATH}.question`),
    answer: t(`${PATH}.answer`),
    note: te(`${PATH}.note`) && t(`${PATH}.note`),
    items:
      te(`${PATH}.items`) &&
      Object.keys(tm(`${PATH}.items`)).map((itemKey) =>
        t(`${PATH}.items.${itemKey}`)
      ),
    lists:
      te(`${PATH}.lists`) &&
      Object.keys(tm(`${PATH}.lists`)).map((listKey) => ({
        title: t(`${PATH}.lists.${listKey}.title`),
        items: Object.keys(tm(`${PATH}.lists.${listKey}.items`)).map(
          (itemKey) => t(`${PATH}.lists.${listKey}.items.${itemKey}`)
        ),
      })),
  }
})
</script>

<template>
  <div class="waves-section">
    <div class="container pb-10 mx-auto">
      <h3
        class="max-w-4xl mx-auto mb-4 text-3xl font-semibold text-center text-primary"
      >
        {{ $t('home.faq.title') }}
      </h3>
      <ul class="flex items-center justify-center w-full mt-8 text-lg">
        <li>
          <NavLink
            t-key="home.faq.basics"
            @click="selectedSection = 'basics'"
            :is-active="selectedSection === 'basics'"
          />
        </li>
        <li>
          <NavLink
            t-key="home.faq.starting"
            @click="selectedSection = 'starting'"
            :is-active="selectedSection === 'starting'"
          />
        </li>
      </ul>

      <div class="mt-12 max-w-2xl mx-auto">
        <div v-for="(question, index) of questions" :key="question">
          <div
            v-show="question.section === selectedSection"
            class="relative border-b border-opacity-20 border-primary"
          >
            <button
              type="button"
              class="w-full py-4 text-left"
              @click="
                selectedQuestion !== question.question
                  ? (selectedQuestion = question.question)
                  : (selectedQuestion = null)
              "
            >
              <div class="flex items-center justify-between">
                <span class="pr-4 text-xl text-gray-strong">
                  {{ question.question }}
                </span>
                <span :class="$style.icon">
                  <i
                    :class="{
                      [$style.caret]: true,
                      [$style.active]: selectedQuestion === question,
                    }"
                  />
                </span>
              </div>
            </button>

            <div
              ref="containers"
              class="relative overflow-hidden transition-all duration-300 ease max-h-0"
              :style="{
                maxHeight:
                  selectedQuestion === question.question &&
                  $refs.containers[index]
                    ? $refs.containers[index].scrollHeight + 'px'
                    : '',
              }"
            >
              <div class="p-6 text-lg text-gray-strong">
                <p v-html="question.answer" />

                <ul v-if="question.items" :class="$style.items">
                  <li v-for="item of question.items" :key="item">
                    {{ item }}
                  </li>
                </ul>

                <ul v-if="question.lists" :class="$style.lists">
                  <li v-for="list of question.lists" :key="list">
                    {{ list.title }}
                    <ul>
                      <li v-for="item of list.items" :key="item">
                        {{ item }}
                      </li>
                    </ul>
                  </li>
                </ul>

                <p v-if="question.note" v-html="question.note" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style module>
.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.5rem;
  height: 1.5rem;
}

.caret {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: theme('colors.primary.DEFAULT');
  border-radius: 100%;
  transition: all 300ms ease;

  &.active {
    transform: rotate(90deg);
  }

  &::after {
    padding: 3px;
    margin-left: -2px;
    content: ' ';
    border: solid #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(-45deg);
  }
}

.items {
  padding: 16px 0 16px 24px;
  list-style: disc;
  > li {
    padding: 4px 0;
  }
}

.lists {
  padding: 16px 0;
  font-weight: bold;
  ul {
    padding: 16px 0 16px 24px;
    list-style-type: disc;
    li {
      font-weight: normal;
      padding: 4px 0;
    }
  }
}
</style>
