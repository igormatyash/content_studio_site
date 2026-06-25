const progress = document.querySelector(".scroll-progress");
const revealItems = document.querySelectorAll("[data-reveal]");
const storyPanels = document.querySelectorAll(".story-panel");
const storyImages = document.querySelectorAll(".story-image");
const langButtons = document.querySelectorAll("[data-lang]");

const translations = {
  ru: {
    meta: {
      title: "AI-платформа для контент-операций | Content Studio",
      description: "Content Studio помогает командам превращать бренд, идеи и AI-черновики в понятный контент-план, календарь публикаций и управляемый production-процесс.",
      ogTitle: "AI-платформа для контент-операций",
      ogDescription: "Идеи, бренд-профиль, AI-черновики, согласование, календарь и публикации в одном спокойном рабочем процессе.",
      locale: "ru_RU"
    },
    "nav.workflow": "Процесс",
    "nav.channels": "Соцсети",
    "nav.features": "Возможности",
    "nav.pricing": "Тарифы",
    "nav.control": "Контроль",
    "cta.login": "Войти",
    "cta.start": "Начать работу",
    "cta.pricing": "Посмотреть тарифы",
    "cta.createWorkspace": "Создать workspace",
    "cta.openAdmin": "Открыть админку",
    "hero.eyebrow": "AI content operations",
    "hero.title": "AI-платформа для контент-операций",
    "hero.text": "Планируйте, генерируйте, согласовывайте и публикуйте контент для Telegram, Instagram, LinkedIn, TikTok и YouTube из одного workspace.",
    "hero.stat1": "единый бренд-профиль",
    "hero.stat2": "идеи, планы и черновики",
    "hero.stat3": "очередь публикаций",
    "strip.ideas": "Идеи",
    "strip.plan": "Контент-план",
    "strip.drafts": "Черновики",
    "strip.review": "Согласование",
    "strip.calendar": "Календарь",
    "strip.publish": "Публикации",
    "strip.costs": "AI-расходы",
    "problems.eyebrow": "Проблемы бизнеса",
    "problems.title": "Контент тормозит не из-за идей, а из-за процесса",
    "problems.text": "Бизнесу нужен регулярный контент в нескольких соцсетях, но команда часто тонет в разрозненных задачах, правках, дедлайнах и ручной координации.",
    "problems.p1.title": "Нет единого голоса бренда",
    "problems.p1.text": "Каждый автор пишет по-своему, а правки возвращаются снова и снова.",
    "problems.p2.title": "Контент живет в чатах",
    "problems.p2.text": "Идеи, дедлайны, картинки и согласования размазаны по разным каналам.",
    "problems.p3.title": "Непонятна стоимость AI",
    "problems.p3.text": "Генерации идут, но бизнес не видит лимиты, расходы и эффективность.",
    "problems.p4.title": "Сложно масштабировать соцсети",
    "problems.p4.text": "Один пост нужно адаптировать под разные форматы, языки и площадки.",
    "workflow.eyebrow": "Рабочий поток",
    "workflow.title": "Как Content Studio превращает хаос в production-систему",
    "workflow.text": "Сервис работает как операционный центр для контента: берет бизнес-контекст, создает идеи и черновики, проводит материалы через статусы и выводит их в календарь публикаций.",
    "workflow.s1.title": "Бизнес-контекст",
    "workflow.s1.text": "Вы описываете компанию, аудиторию, tone of voice, рубрики, визуальные стили и ограничения бренда.",
    "workflow.s2.title": "AI-планирование",
    "workflow.s2.text": "AI генерирует идеи, контент-планы на неделю или месяц и адаптирует темы под цели бизнеса.",
    "workflow.s3.title": "Редакционная работа",
    "workflow.s3.text": "Команда видит статусы, правки, ответственных и следующий шаг для каждого материала.",
    "workflow.s4.title": "Публикации и контроль",
    "workflow.s4.text": "Материалы попадают в календарь, готовятся под соцсети, а расходы и лимиты остаются прозрачными.",
    "story.eyebrow": "Как это работает",
    "story.title": "Одна система вместо пяти разрозненных инструментов",
    "story.text": "Content Studio связывает бизнес-цели, бренд-память, AI-генерацию, редактуру, календарь и публикации в один рабочий контур.",
    "story.s1.title": "AI не пишет в вакууме",
    "story.s1.text": "Перед генерацией Content Studio учитывает профиль компании, рубрики, стиль, язык и ограничения бренда.",
    "story.s2.eyebrow": "Editorial system",
    "story.s2.title": "План превращается в рабочую доску",
    "story.s2.text": "Идеи не смешиваются с черновиками: у каждого материала есть статус, дата и следующий ответственный шаг.",
    "story.s3.eyebrow": "Publishing control",
    "story.s3.title": "Публикации и расходы под контролем",
    "story.s3.text": "Команда видит календарь, очередь, каналы и AI-стоимость, не прыгая между разными инструментами.",
    "features.eyebrow": "Возможности",
    "features.title": "Блоки, которые нужны контент-команде каждый день",
    "features.f1.title": "AI-генерация идей",
    "features.f1.text": "Темы и гипотезы на базе бренда, рубрик, целей и актуального контекста.",
    "features.f2.title": "Контент-план",
    "features.f2.text": "Периоды, даты, количество постов, фокус кампании и результат в виде идей или черновиков.",
    "features.f3.title": "Статусы и согласование",
    "features.f3.text": "От идеи до публикации: draft, review, ready, scheduled и понятная история работы.",
    "features.f4.title": "Календарь",
    "features.f4.text": "Видимость ближайших публикаций, материалов без даты и планирования по неделям.",
    "features.f4.metric": "очередь публикаций",
    "features.f5.title": "Визуальные стили",
    "features.f5.text": "Брендовые правила для текстов, изображений, рубрик и форматов в одном workspace.",
    "features.f6.title": "Каналы и публикации",
    "features.f6.text": "Подготовка материалов под разные площадки и контроль очереди публикаций.",
    "channels.eyebrow": "Соцсети и форматы",
    "channels.title": "Один контент-процесс для разных площадок",
    "channels.text": "Сервис помогает готовить материалы под Telegram, Instagram, LinkedIn, TikTok, YouTube Shorts и другие каналы: разные форматы, один бренд-контекст и общий календарь.",
    "channels.telegram": "посты, анонсы, экспертные материалы",
    "channels.instagram": "caption, визуальные идеи, серии публикаций",
    "channels.linkedin": "B2B-посты, кейсы, thought leadership",
    "channels.tiktok": "сценарии коротких видео и контент-хуки",
    "channels.youtube": "Shorts-идеи, описания и контент-серии",
    "channels.more.title": "Другие каналы",
    "channels.more.text": "адаптация под рабочий процесс команды",
    "pricing.eyebrow": "Тарифы",
    "pricing.title": "Выберите ритм для вашей контент-команды",
    "pricing.text": "Оплата через Telegram Stars за 30 дней. Регистрация создает компанию и первый workspace, а тариф можно активировать в кабинете.",
    "pricing.period": "/ 30 дней",
    "pricing.publications": "публикаций",
    "pricing.texts": "текстов",
    "pricing.images": "изображений",
    "pricing.users": "пользователей",
    "pricing.choose": "Выбрать тариф",
    "pricing.popular": "Самый популярный",
    "pricing.note": "После регистрации вы сможете войти в админку, создать workspace и оплатить выбранный план в разделе тарифов.",
    "pricing.start.tagline": "Для небольшой команды и стабильного контент-ритма.",
    "pricing.start.f1": "AI-темы, тексты и изображения",
    "pricing.start.f2": "Контент-календарь и отложенная публикация",
    "pricing.start.f3": "Собственные рубрики, шаблоны и логотипы",
    "pricing.start.f4": "Telegram, Instagram и LinkedIn форматы",
    "pricing.growth.tagline": "Для маркетинговой команды, которая публикует регулярно.",
    "pricing.growth.f1": "Все из Start",
    "pricing.growth.f2": "Серии постов и контент-планы на месяц",
    "pricing.growth.f3": "250 текстовых и 120 визуальных генераций в месяц",
    "pricing.growth.f4": "Аналитика использования по пользователям",
    "pricing.scale.tagline": "Для большого контент-производства и нескольких команд.",
    "pricing.scale.f1": "Все из Growth",
    "pricing.scale.f2": "До 300 публикаций в месяц",
    "pricing.scale.f3": "Увеличенный лимит генерации изображений",
    "pricing.scale.f4": "Приоритетная поддержка",
    "control.eyebrow": "Управление",
    "control.title": "Сервис подходит не только авторам, но и владельцам процесса",
    "control.text": "Content Studio делает производство контента измеримым: кто работает, что готово, какие публикации запланированы и сколько стоит AI-генерация.",
    "control.l1": "Workspace для отдельных клиентов, брендов или команд",
    "control.l2": "Роли, пользователи, настройки безопасности и доступов",
    "control.l3": "Аналитика AI-расходов по дням, моделям и рубрикам",
    "control.l4": "Гайд и онбординг, чтобы команда быстрее вошла в процесс",
    "final.eyebrow": "Запуск",
    "final.title": "Соберите контент-процесс, который не разваливается после первой недели",
    "final.text": "Начните с workspace, добавьте бренд-профиль и дайте AI работать внутри понятных правил.",
    "footer.text": "AI content operations platform",
    "alt.hero": "Интерфейс платформы с контент-пайплайном, календарем и соцсетями",
    "alt.problems": "Хаос контент-процесса превращается в управляемую систему",
    "alt.workflow": "Схема процесса Content Studio от бизнес-целей до публикаций",
    "alt.product": "Продуктовый интерфейс с контентным пайплайном и календарем",
    "alt.automation": "AI-автоматизация, публикации в каналы и аналитика затрат",
    "alt.control": "Интерфейс контроля AI-автоматизации и публикаций"
  },
  uk: {
    meta: {
      title: "AI-платформа для контент-операцій | Content Studio",
      description: "Content Studio допомагає командам перетворювати бренд, ідеї та AI-чернетки на зрозумілий контент-план, календар публікацій і керований production-процес.",
      ogTitle: "AI-платформа для контент-операцій",
      ogDescription: "Ідеї, бренд-профіль, AI-чернетки, погодження, календар і публікації в одному спокійному робочому процесі.",
      locale: "uk_UA"
    },
    "nav.workflow": "Процес",
    "nav.channels": "Соцмережі",
    "nav.features": "Можливості",
    "nav.pricing": "Тарифи",
    "nav.control": "Контроль",
    "cta.login": "Увійти",
    "cta.start": "Почати роботу",
    "cta.pricing": "Переглянути тарифи",
    "cta.createWorkspace": "Створити workspace",
    "cta.openAdmin": "Відкрити адмінку",
    "hero.eyebrow": "AI content operations",
    "hero.title": "AI-платформа для контент-операцій",
    "hero.text": "Плануйте, генеруйте, погоджуйте й публікуйте контент для Telegram, Instagram, LinkedIn, TikTok і YouTube з одного workspace.",
    "hero.stat1": "єдиний бренд-профіль",
    "hero.stat2": "ідеї, плани й чернетки",
    "hero.stat3": "черга публікацій",
    "strip.ideas": "Ідеї",
    "strip.plan": "Контент-план",
    "strip.drafts": "Чернетки",
    "strip.review": "Погодження",
    "strip.calendar": "Календар",
    "strip.publish": "Публікації",
    "strip.costs": "AI-витрати",
    "problems.eyebrow": "Проблеми бізнесу",
    "problems.title": "Контент гальмує не через ідеї, а через процес",
    "problems.text": "Бізнесу потрібен регулярний контент у кількох соцмережах, але команда часто тоне в розрізнених задачах, правках, дедлайнах і ручній координації.",
    "problems.p1.title": "Немає єдиного голосу бренду",
    "problems.p1.text": "Кожен автор пише по-своєму, а правки повертаються знову і знову.",
    "problems.p2.title": "Контент живе в чатах",
    "problems.p2.text": "Ідеї, дедлайни, картинки й погодження розкидані по різних каналах.",
    "problems.p3.title": "Незрозуміла вартість AI",
    "problems.p3.text": "Генерації відбуваються, але бізнес не бачить ліміти, витрати й ефективність.",
    "problems.p4.title": "Складно масштабувати соцмережі",
    "problems.p4.text": "Один пост потрібно адаптувати під різні формати, мови й платформи.",
    "workflow.eyebrow": "Робочий потік",
    "workflow.title": "Як Content Studio перетворює хаос на production-систему",
    "workflow.text": "Сервіс працює як операційний центр для контенту: бере бізнес-контекст, створює ідеї та чернетки, проводить матеріали через статуси й виводить їх у календар публікацій.",
    "workflow.s1.title": "Бізнес-контекст",
    "workflow.s1.text": "Ви описуєте компанію, аудиторію, tone of voice, рубрики, візуальні стилі й обмеження бренду.",
    "workflow.s2.title": "AI-планування",
    "workflow.s2.text": "AI генерує ідеї, контент-плани на тиждень або місяць і адаптує теми під бізнес-цілі.",
    "workflow.s3.title": "Редакційна робота",
    "workflow.s3.text": "Команда бачить статуси, правки, відповідальних і наступний крок для кожного матеріалу.",
    "workflow.s4.title": "Публікації й контроль",
    "workflow.s4.text": "Матеріали потрапляють у календар, готуються під соцмережі, а витрати й ліміти залишаються прозорими.",
    "story.eyebrow": "Як це працює",
    "story.title": "Одна система замість п’яти розрізнених інструментів",
    "story.text": "Content Studio зв’язує бізнес-цілі, бренд-пам’ять, AI-генерацію, редактуру, календар і публікації в один робочий контур.",
    "story.s1.title": "AI не пише у вакуумі",
    "story.s1.text": "Перед генерацією Content Studio враховує профіль компанії, рубрики, стиль, мову й обмеження бренду.",
    "story.s2.eyebrow": "Editorial system",
    "story.s2.title": "План перетворюється на робочу дошку",
    "story.s2.text": "Ідеї не змішуються з чернетками: кожен матеріал має статус, дату й наступний відповідальний крок.",
    "story.s3.eyebrow": "Publishing control",
    "story.s3.title": "Публікації та витрати під контролем",
    "story.s3.text": "Команда бачить календар, чергу, канали й AI-вартість, не стрибаючи між різними інструментами.",
    "features.eyebrow": "Можливості",
    "features.title": "Блоки, які потрібні контент-команді щодня",
    "features.f1.title": "AI-генерація ідей",
    "features.f1.text": "Теми й гіпотези на базі бренду, рубрик, цілей і актуального контексту.",
    "features.f2.title": "Контент-план",
    "features.f2.text": "Періоди, дати, кількість постів, фокус кампанії та результат у вигляді ідей або чернеток.",
    "features.f3.title": "Статуси й погодження",
    "features.f3.text": "Від ідеї до публікації: draft, review, ready, scheduled і зрозуміла історія роботи.",
    "features.f4.title": "Календар",
    "features.f4.text": "Видимість найближчих публікацій, матеріалів без дати й планування по тижнях.",
    "features.f4.metric": "черга публікацій",
    "features.f5.title": "Візуальні стилі",
    "features.f5.text": "Брендові правила для текстів, зображень, рубрик і форматів в одному workspace.",
    "features.f6.title": "Канали й публікації",
    "features.f6.text": "Підготовка матеріалів під різні майданчики й контроль черги публікацій.",
    "channels.eyebrow": "Соцмережі й формати",
    "channels.title": "Один контент-процес для різних платформ",
    "channels.text": "Сервіс допомагає готувати матеріали під Telegram, Instagram, LinkedIn, TikTok, YouTube Shorts та інші канали: різні формати, один бренд-контекст і спільний календар.",
    "channels.telegram": "пости, анонси, експертні матеріали",
    "channels.instagram": "caption, візуальні ідеї, серії публікацій",
    "channels.linkedin": "B2B-пости, кейси, thought leadership",
    "channels.tiktok": "сценарії коротких відео й контент-хуки",
    "channels.youtube": "Shorts-ідеї, описи й контент-серії",
    "channels.more.title": "Інші канали",
    "channels.more.text": "адаптація під робочий процес команди",
    "pricing.eyebrow": "Тарифи",
    "pricing.title": "Оберіть ритм для вашої контент-команди",
    "pricing.text": "Оплата через Telegram Stars за 30 днів. Реєстрація створює компанію та перший workspace, а тариф можна активувати в кабінеті.",
    "pricing.period": "/ 30 днів",
    "pricing.publications": "публікацій",
    "pricing.texts": "текстів",
    "pricing.images": "зображень",
    "pricing.users": "користувачів",
    "pricing.choose": "Обрати тариф",
    "pricing.popular": "Найпопулярніший",
    "pricing.note": "Після реєстрації ви зможете увійти в адмінку, створити workspace і оплатити вибраний план у розділі тарифів.",
    "pricing.start.tagline": "Для невеликої команди та стабільного контент-ритму.",
    "pricing.start.f1": "AI-теми, тексти та зображення",
    "pricing.start.f2": "Контент-календар і відкладена публікація",
    "pricing.start.f3": "Власні рубрики, шаблони та логотипи",
    "pricing.start.f4": "Telegram, Instagram і LinkedIn формати",
    "pricing.growth.tagline": "Для маркетингової команди, яка публікує регулярно.",
    "pricing.growth.f1": "Усе зі Start",
    "pricing.growth.f2": "Серії постів і контент-плани на місяць",
    "pricing.growth.f3": "250 текстових і 120 візуальних генерацій на місяць",
    "pricing.growth.f4": "Аналітика використання за користувачами",
    "pricing.scale.tagline": "Для великого контент-виробництва та кількох команд.",
    "pricing.scale.f1": "Усе з Growth",
    "pricing.scale.f2": "До 300 публікацій на місяць",
    "pricing.scale.f3": "Збільшений ліміт генерації зображень",
    "pricing.scale.f4": "Пріоритетна підтримка",
    "control.eyebrow": "Управління",
    "control.title": "Сервіс підходить не лише авторам, а й власникам процесу",
    "control.text": "Content Studio робить виробництво контенту вимірюваним: хто працює, що готово, які публікації заплановані та скільки коштує AI-генерація.",
    "control.l1": "Workspace для окремих клієнтів, брендів або команд",
    "control.l2": "Ролі, користувачі, налаштування безпеки й доступів",
    "control.l3": "Аналітика AI-витрат за днями, моделями й рубриками",
    "control.l4": "Гайд і онбординг, щоб команда швидше увійшла в процес",
    "final.eyebrow": "Запуск",
    "final.title": "Зберіть контент-процес, який не розвалюється після першого тижня",
    "final.text": "Почніть із workspace, додайте бренд-профіль і дайте AI працювати всередині зрозумілих правил.",
    "footer.text": "AI content operations platform",
    "alt.hero": "Інтерфейс платформи з контент-пайплайном, календарем і соцмережами",
    "alt.problems": "Хаос контент-процесу перетворюється на керовану систему",
    "alt.workflow": "Схема процесу Content Studio від бізнес-цілей до публікацій",
    "alt.product": "Продуктовий інтерфейс із контентним пайплайном і календарем",
    "alt.automation": "AI-автоматизація, публікації в канали й аналітика витрат",
    "alt.control": "Інтерфейс контролю AI-автоматизації та публікацій"
  },
  en: {
    meta: {
      title: "AI platform for content operations | Content Studio",
      description: "Content Studio helps teams turn brand context, ideas and AI drafts into a clear content plan, publishing calendar and managed production workflow.",
      ogTitle: "AI platform for content operations",
      ogDescription: "Ideas, brand profile, AI drafts, approvals, calendar and publishing in one calm workflow.",
      locale: "en_US"
    },
    "nav.workflow": "Workflow",
    "nav.channels": "Socials",
    "nav.features": "Features",
    "nav.pricing": "Pricing",
    "nav.control": "Control",
    "cta.login": "Sign in",
    "cta.start": "Get started",
    "cta.pricing": "View pricing",
    "cta.createWorkspace": "Create workspace",
    "cta.openAdmin": "Open admin",
    "hero.eyebrow": "AI content operations",
    "hero.title": "AI platform for content operations",
    "hero.text": "Plan, generate, approve and publish content for Telegram, Instagram, LinkedIn, TikTok and YouTube from one workspace.",
    "hero.stat1": "single brand profile",
    "hero.stat2": "ideas, plans and drafts",
    "hero.stat3": "publishing queue",
    "strip.ideas": "Ideas",
    "strip.plan": "Content plan",
    "strip.drafts": "Drafts",
    "strip.review": "Approval",
    "strip.calendar": "Calendar",
    "strip.publish": "Publishing",
    "strip.costs": "AI costs",
    "problems.eyebrow": "Business problems",
    "problems.title": "Content slows down because of process, not ideas",
    "problems.text": "A business needs regular content across several social platforms, but teams often drown in scattered tasks, edits, deadlines and manual coordination.",
    "problems.p1.title": "No consistent brand voice",
    "problems.p1.text": "Every author writes differently, and edits come back again and again.",
    "problems.p2.title": "Content lives in chats",
    "problems.p2.text": "Ideas, deadlines, images and approvals are spread across different channels.",
    "problems.p3.title": "AI cost is unclear",
    "problems.p3.text": "Generation happens, but the business cannot see limits, costs and efficiency.",
    "problems.p4.title": "Social scaling is hard",
    "problems.p4.text": "One post needs adaptation for different formats, languages and platforms.",
    "workflow.eyebrow": "Workflow",
    "workflow.title": "How Content Studio turns chaos into a production system",
    "workflow.text": "The service works as an operating center for content: it takes business context, creates ideas and drafts, moves materials through statuses and sends them into a publishing calendar.",
    "workflow.s1.title": "Business context",
    "workflow.s1.text": "Describe the company, audience, tone of voice, rubrics, visual styles and brand constraints.",
    "workflow.s2.title": "AI planning",
    "workflow.s2.text": "AI generates ideas, weekly or monthly content plans and adapts topics to business goals.",
    "workflow.s3.title": "Editorial work",
    "workflow.s3.text": "The team sees statuses, edits, owners and the next step for every material.",
    "workflow.s4.title": "Publishing and control",
    "workflow.s4.text": "Materials move into the calendar, are prepared for social platforms, and costs and limits stay transparent.",
    "story.eyebrow": "How it works",
    "story.title": "One system instead of five disconnected tools",
    "story.text": "Content Studio connects business goals, brand memory, AI generation, editorial review, calendar and publishing into one operating loop.",
    "story.s1.title": "AI does not write in a vacuum",
    "story.s1.text": "Before generation, Content Studio considers company profile, rubrics, style, language and brand constraints.",
    "story.s2.eyebrow": "Editorial system",
    "story.s2.title": "A plan becomes an operating board",
    "story.s2.text": "Ideas do not mix with drafts: every material has a status, date and next responsible step.",
    "story.s3.eyebrow": "Publishing control",
    "story.s3.title": "Publishing and costs stay under control",
    "story.s3.text": "The team sees calendar, queue, channels and AI cost without jumping between tools.",
    "features.eyebrow": "Features",
    "features.title": "Daily building blocks for a content team",
    "features.f1.title": "AI idea generation",
    "features.f1.text": "Topics and hypotheses based on brand, rubrics, goals and current context.",
    "features.f2.title": "Content plan",
    "features.f2.text": "Periods, dates, post counts, campaign focus and output as ideas or drafts.",
    "features.f3.title": "Statuses and approvals",
    "features.f3.text": "From idea to publication: draft, review, ready, scheduled and a clear work history.",
    "features.f4.title": "Calendar",
    "features.f4.text": "Visibility into upcoming publications, undated materials and weekly planning.",
    "features.f4.metric": "publishing queue",
    "features.f5.title": "Visual styles",
    "features.f5.text": "Brand rules for copy, images, rubrics and formats in one workspace.",
    "features.f6.title": "Channels and publishing",
    "features.f6.text": "Prepare materials for different platforms and control the publishing queue.",
    "channels.eyebrow": "Social networks and formats",
    "channels.title": "One content process for different platforms",
    "channels.text": "The service helps prepare materials for Telegram, Instagram, LinkedIn, TikTok, YouTube Shorts and other channels: different formats, one brand context and a shared calendar.",
    "channels.telegram": "posts, announcements, expert materials",
    "channels.instagram": "captions, visual ideas, publication series",
    "channels.linkedin": "B2B posts, cases, thought leadership",
    "channels.tiktok": "short video scripts and content hooks",
    "channels.youtube": "Shorts ideas, descriptions and content series",
    "channels.more.title": "Other channels",
    "channels.more.text": "adaptation to the team's workflow",
    "pricing.eyebrow": "Pricing",
    "pricing.title": "Choose the rhythm for your content team",
    "pricing.text": "Paid with Telegram Stars for 30 days. Registration creates a company and first workspace; the plan can be activated in the account.",
    "pricing.period": "/ 30 days",
    "pricing.publications": "publications",
    "pricing.texts": "texts",
    "pricing.images": "images",
    "pricing.users": "users",
    "pricing.choose": "Choose plan",
    "pricing.popular": "Most popular",
    "pricing.note": "After registration you can sign in, create a workspace and pay for the selected plan in the pricing section.",
    "pricing.start.tagline": "For a small team and a steady content rhythm.",
    "pricing.start.f1": "AI topics, texts and images",
    "pricing.start.f2": "Content calendar and scheduled publishing",
    "pricing.start.f3": "Custom rubrics, templates and logos",
    "pricing.start.f4": "Telegram, Instagram and LinkedIn formats",
    "pricing.growth.tagline": "For a marketing team that publishes regularly.",
    "pricing.growth.f1": "Everything in Start",
    "pricing.growth.f2": "Post series and monthly content plans",
    "pricing.growth.f3": "250 text and 120 visual generations per month",
    "pricing.growth.f4": "Usage analytics by user",
    "pricing.scale.tagline": "For large content production and multiple teams.",
    "pricing.scale.f1": "Everything in Growth",
    "pricing.scale.f2": "Up to 300 publications per month",
    "pricing.scale.f3": "Increased image generation limit",
    "pricing.scale.f4": "Priority support",
    "control.eyebrow": "Management",
    "control.title": "Built for creators and process owners",
    "control.text": "Content Studio makes content production measurable: who is working, what is ready, what is scheduled and how much AI generation costs.",
    "control.l1": "Workspaces for separate clients, brands or teams",
    "control.l2": "Roles, users, security and access settings",
    "control.l3": "AI cost analytics by day, model and rubric",
    "control.l4": "Guide and onboarding so the team gets into the process faster",
    "final.eyebrow": "Launch",
    "final.title": "Build a content process that does not fall apart after week one",
    "final.text": "Start with a workspace, add a brand profile and let AI work inside clear rules.",
    "footer.text": "AI content operations platform",
    "alt.hero": "Platform interface with content pipeline, calendar and social channels",
    "alt.problems": "Content process chaos turning into a managed system",
    "alt.workflow": "Content Studio workflow from business goals to publications",
    "alt.product": "Product interface with content pipeline and calendar",
    "alt.automation": "AI automation, channel publishing and cost analytics",
    "alt.control": "Interface for controlling AI automation and publishing"
  }
};

const getInitialLang = () => {
  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get("lang");
  const stored = localStorage.getItem("content-studio:site-locale");
  const browserLang = navigator.language?.toLowerCase().startsWith("uk") ? "uk" : "ru";
  return translations[urlLang] ? urlLang : translations[stored] ? stored : browserLang;
};

const setMeta = (lang) => {
  const meta = translations[lang].meta;
  document.documentElement.lang = lang === "uk" ? "uk" : lang;
  document.title = meta.title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description);
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", meta.ogTitle);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", meta.ogDescription);
  document.querySelector('meta[property="og:locale"]')?.setAttribute("content", meta.locale);
};

const applyLang = (lang, { persist = true } = {}) => {
  const dictionary = translations[lang] || translations.ru;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = dictionary[node.dataset.i18n];
    if (value) node.textContent = value;
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((node) => {
    const value = dictionary[node.dataset.i18nAlt];
    if (value) node.setAttribute("alt", value);
  });
  langButtons.forEach((button) => {
    const active = button.dataset.lang === lang;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  setMeta(lang);
  if (persist) {
    localStorage.setItem("content-studio:site-locale", lang);
    localStorage.setItem("content-studio:locale", lang === "en" ? "en" : "uk");
    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    window.history.replaceState({}, "", url);
  }
};

const setProgress = () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = max > 0 ? window.scrollY / max : 0;
  progress.style.transform = `scaleX(${Math.min(1, Math.max(0, ratio))})`;
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });

revealItems.forEach((item) => revealObserver.observe(item));

const activateStory = (index) => {
  storyPanels.forEach((panel) => {
    const active = panel.dataset.story === index;
    panel.classList.toggle("active", active);
    panel.setAttribute("aria-pressed", String(active));
  });
  storyImages.forEach((image) => image.classList.toggle("visible", image.dataset.storyImage === index));
};

storyPanels.forEach((panel) => {
  panel.addEventListener("click", () => activateStory(panel.dataset.story));
  panel.addEventListener("mouseenter", () => activateStory(panel.dataset.story));
  panel.addEventListener("focus", () => activateStory(panel.dataset.story));
});
langButtons.forEach((button) => button.addEventListener("click", () => applyLang(button.dataset.lang)));
window.addEventListener("scroll", setProgress, { passive: true });
window.addEventListener("resize", setProgress);

applyLang(getInitialLang(), { persist: false });
setProgress();
