import { ROTATION_TYPES } from './constants/rotationsTypes';
import { PROJECT_TYPES } from './constants/projectTypes';

const COMPETENCE_TYPES = {
    cooperation: 'cooperation',
    results: 'results',
    flexibility: 'flexibility',
    education: 'education',
};
export const questions = [
    {
        id: '1',
        rotation: ROTATION_TYPES.accManagement,
        title: 'Торговые точки',
        text: 'Твоя задача — сопровождать торговые сети в продаже товаров PepsiCo конечному потребителю. Но появилась проблема…\nМенеджер торговой сети не выходит на связь по вопросу поставок на следующий месяц.\nЧто делать?',
        answers: [
            {
                id: '1',
                text: 'Спрошу у коллег про опыт работы с этой торговой сетью. Решим вопрос вместе! И запомню на будущее, как можно решать такие ситуации',
                competence: [COMPETENCE_TYPES.cooperation, COMPETENCE_TYPES.education]
            },
            {
                id: '2',
                text: 'Постараюсь найти его контакты, свяжусь с ним по личному телефону. Может, он потерял свой рабочий телефон?',
                competence: [COMPETENCE_TYPES.flexibility, COMPETENCE_TYPES.results]
            },
        ],
    },
    {
        id: '2',
        title: 'Продажа',
        rotation: ROTATION_TYPES.accManagement,
        text: 'К тебе пришел клиент, который\nхочет расширить ассортимент\nпродукции PepsiCo в своей\nторговой точке. Его целевая\nаудитория — семьи с детьми,\nа располагается он прямо у школы\nс детским садом. Что предложим закупить?',
        textDesk: 'К тебе пришел клиент, который хочет расширить ассортимент продукции PepsiCo в своей торговой точке. Его целевая аудитория — семьи с детьми, а располагается он прямо\nу школы с детским садом. Что предложим закупить?',
        answers: [
            {
                id: '1',
                text: 'Уточню, что клиент сам хочет и на какую аудиторию ориентируется, и примем решение совместно!',
                competence: [COMPETENCE_TYPES.cooperation]
            },
            {
                id: '2',
                text: 'Сначала проверю, как идут продажи уже закупленных товаров PepsiCo в этой точке, вдруг нужно будет улучшить текущие продукты перед закупкой новых',
                competence: [COMPETENCE_TYPES.results]
            },
            {
                id: '3',
                text: 'Изучу, что покупают аналогичные торговые точки, и на основе этого выделю топ-бренды',
                competence: [COMPETENCE_TYPES.education]
            },
            {
                id: '4',
                text: 'Распишу все возможные ЦА торговой точки клиента и предложу набор брендов для каждой из них',
                competence: [COMPETENCE_TYPES.flexibility]
            },
        ],
    },
    {
        id: '3',
        title: 'Конкуренты бренда',
        rotation: ROTATION_TYPES.brandMarketing,
        text: 'Листая ленту с утра, ты увидел, что конкурент Lay’s запустил линейку новых вкусов, приуроченных к 14 февраля. Что делать с этой информацией?',
        answers: [
            {
                id: '1',
                text: 'Собрать брейншторм-встречу с коллегами, чтобы обсудить аналогичный запуск к другому празднику',
                competence: [COMPETENCE_TYPES.cooperation]
            },
            {
                id: '2',
                text: 'Детально изучить сезонную линейку конкурента и прийти к руководителю с проработанным предложением по интеграции схожих идей для линейки Lay’s',
                competence: [COMPETENCE_TYPES.results, COMPETENCE_TYPES.education]
            },
            {
                id: '3',
                text: 'Посмотрю материалы запуска прошлых эксклюзивных линеек, чтобы адаптировать опыт к текущей ситуации',
                competence: [COMPETENCE_TYPES.flexibility]
            },
        ],
    },
    {
        id: '4',
        title: 'Узнаваемость бренда',
        rotation: ROTATION_TYPES.brandMarketing,
        text: 'Пришла задача повысить узнаваемость бренда морса\nЧудо-Ягода!  На установочной встрече собрались представители пяти отделов и у всех оказался абсолютно разный взгляд на эту задачу —  договориться будет сложно. Что будешь делать?',
        answers: [
            {
                id: '1',
                text: 'Соберу со всех отделов сначала мнения по отдельности, а затем приглашу всех на общий звонок и представлю проанализированные аргументы',
                competence: [COMPETENCE_TYPES.cooperation, COMPETENCE_TYPES.flexibility]
            },
            {
                id: '2',
                text: 'Сначала сам изучу аналитику по этому вопросу. Затем приду ко всем коллегам с конкретными предложениями',
                competence: [COMPETENCE_TYPES.results, COMPETENCE_TYPES.education]
            },
        ],
    },
    {
        id: '5',
        title: 'Бренд-активации',
        rotation: ROTATION_TYPES.electronicCommerce,
        text: 'Маркетинговая поддержка\n— важная часть электронных\nпродаж. Например, в прошлом\nгоду PepsiCo создал активацию\nсовместно с Яндекс.Лавкой. \n' +
            'В рамках развития одного\nиз брендов PepsiCo на этот год\nмы хотим запустить схожий проект. \n' +
            'С чего начать?',
        textDesk: 'Маркетинговая поддержка — важная часть электронных продаж. Например, в прошлом году PepsiCo создал активацию совместно с Яндекс.Лавкой. ' +
            'В рамках развития одного\nиз брендов PepsiCo на этот год мы хотим запустить схожий проект. ' +
            'С чего начать?',
        answers: [
            {
                id: '1',
                text: 'Сначала посмотрю на то, как рынок изменился за год, нужно подстраиваться под новые реалии',
                textDesk: 'Сначала посмотрю на то, как рынок изменился за год,\nнужно подстраиваться под новые реалии',
                competence: [COMPETENCE_TYPES.education, COMPETENCE_TYPES.flexibility]
            },
            {
                id: '2',
                text: 'Сравню результаты прошлогодних активаций, и пойдем с самой прибыльной',
                textDesk: 'Сравню результаты прошлогодних активаций,\nи пойдем с самой прибыльной',
                competence: [COMPETENCE_TYPES.results]
            },
            {
                id: '3',
                text: 'А давайте послушаем мнения отделов бренд-маркетинга и продаж и устроим брейншторм',
                textDesk: 'А давайте послушаем мнения отделов бренд-маркетинга\nи продаж и устроим брейншторм',
                competence: [COMPETENCE_TYPES.cooperation]
            },
        ],
    },
    {
        id: '6',
        title: 'Анализ конкурентов',
        rotation: ROTATION_TYPES.electronicCommerce,
        text: 'Тебе поручили проанализировать конкурентов компании\nв е-коме и их активации в высокие сезоны, например, в Черную пятницу. Но ты не понимаешь, откуда брать информацию.\nЧто будем делать?',
        answers: [
            {
                id: '1',
                text: 'Попрошу кого-то из более опытных в этом направлении коллег помочь мне, а сам в обмен помогу им',
                competence: [COMPETENCE_TYPES.cooperation, COMPETENCE_TYPES.flexibility]
            },
            {
                id: '2',
                text: 'Сделаю все сам, даже если это займет чуть больше времени, чем я рассчитывал — зато всему научусь',
                competence: [COMPETENCE_TYPES.results, COMPETENCE_TYPES.education]
            },
        ],
    },
    {
        id: '7',
        title: 'Помнишь, ты выбирал проект?',
        rotation: null,
        project: PROJECT_TYPES.sales,
        text: 'Вы с коллегами провели первичную аналитику продаж по клиентам, каналам и регионам. Вы увидели, что продажи резко растут летом, в “сезон окрошки”, но больше никаких закономерностей не нашли. Что делать?',
        answers: [
            {
                id: '1',
                text: 'Попрошу команду исследований провести фокус-группы на потребителях, инсайт будет глубже. Да, это изначально не входило в их планы, но предложу свою помощь в обмен на их',
                competence: [COMPETENCE_TYPES.cooperation, COMPETENCE_TYPES.education]
            },
            {
                id: '2',
                text: 'Придумаем с командой несколько решений и потестируем их на пилотных запусках. Неэффективные отбросим, а эффективные возьмем на вооружение',
                competence: [COMPETENCE_TYPES.results, COMPETENCE_TYPES.flexibility]
            },
        ],
    },
    {
        id: '8',
        title: 'Помнишь, ты выбирал проект?',
        rotation: null,
        project: PROJECT_TYPES.communication,
        text: 'Один из ключевых клиентов компании придерживается самого классического метода взаимодействия — общение по электронной почте. У тебя появилось предложение перенести коммуникацию на более удобную платформу, но клиент не горит желанием это делать. Как его убедить?',
        answers: [
            {
                id: '1',
                text: 'Найду в интернете статистику по эффективности платформ коммуникации. С опорой на факты любые переговоры идут продуктивнее',
                competence: [COMPETENCE_TYPES.results, COMPETENCE_TYPES.education]
            },
            {
                id: '2',
                text: 'Узнаю, почему клиенту более удобна электронная почта. Исходя из ключевых поинтов, найду удобную обеим сторонам альтернативу',
                competence: [COMPETENCE_TYPES.cooperation, COMPETENCE_TYPES.flexibility]
            },
        ],
    },
    {
        id: '9',
        title: 'Помнишь, ты выбирал проект?',
        rotation: null,
        project: PROJECT_TYPES.promo,
        text: 'Ты подготовил план промо-кампании, но выяснилось, что на рынке уже был такой подход к персонализации у компании-конкурента, и он был достаточно успешным. Как поступить в этом случае?',
        answers: [
            {
                id: '1',
                text: 'Продвигать кампанию дальше! Еще надо подумать, как выделить PepsiCo, чтобы о конкуренте никто и не вспомнил',
                competence: [COMPETENCE_TYPES.results]
            },
            {
                id: '2',
                text: 'Попросить фидбэк у коллег! От конструктивной критики и фидбэка проще отталкиваться в доработке идеи',
                competence: [COMPETENCE_TYPES.cooperation]
            },
            {
                id: '3',
                text: 'Обыграть схожесть кампаний :) Даже конкуренты — в какой-то мере коллеги с одной целевой аудиторией',
                competence: [COMPETENCE_TYPES.flexibility]
            },
            {
                id: '4',
                text: 'Поставлю свою идею на стоп, чтобы изучить непопулярные подходы к персонализации и адаптировать под текущие задачи',
                competence: [COMPETENCE_TYPES.education]
            },
        ],
    },
    {
        id: '10',
        title: 'Помнишь, ты выбирал проект?',
        rotation: null,
        project: PROJECT_TYPES.branding,
        text: 'Начинать надо с начала! По какому принципу на первой встрече по проекту ты предложишь действовать?',
        answers: [
            {
                id: '1',
                text: 'Предложу найти агенство, которое проведет исследование  рынка и будет экспертно управлять проектом — потратим больше средств, но точно достигнем качественного результата',
                competence: [COMPETENCE_TYPES.results]
            },
            {
                id: '2',
                text: 'Надо проанализировать все самостоятельно изнутри, подумать, почему мы еще не лидер, и поменять подходы',
                competence: [COMPETENCE_TYPES.flexibility, COMPETENCE_TYPES.education]
            },
            {
                id: '3',
                text: 'Соберемся с коллегами и разберем, какие ресурсы из других отделов нам понадобятся для проекта. Распределим ресурсы между командами',
                competence: [COMPETENCE_TYPES.cooperation]
            },
        ],
    },
    {
        id: '11',
        title: 'Похрустим извилинами',
        rotation: ROTATION_TYPES.insights,
        text: 'Команда бренда Хрусteam для\nтого, чтобы разработать новую\nупаковку, попросила провести\nисследование среди покупателей\nи потребителей. Вы пообещали\nодин срок, но подписание\nконтракта с агентством, которое\nпроводит исследование,\n задерживается и в сроки вы\nне успеваете. Что делать?',
        textDesk: 'Команда бренда Хрусteam для того, чтобы разработать новую упаковку, попросила провести исследование среди покупателей и потребителей. Вы пообещали один срок,\nно подписание контракта с агентством, которое проводит исследование, задерживается и в сроки вы не успеваете.\nЧто делать?',
        answers: [
            {
                id: '1',
                text: 'Можно обратиться к опыту компании и провести исследование своими силами',
                competence: [COMPETENCE_TYPES.results, COMPETENCE_TYPES.flexibility]
            },
            {
                id: '2',
                text: 'Соберу всех участников закупки на звонок, договоримся кто, что и как делает, чтобы успеть завести контракт в срок. Заодно досконально изучу закупочный процесс',
                competence: [COMPETENCE_TYPES.cooperation, COMPETENCE_TYPES.education]
            },
        ],
    },
    {
        id: '12',
        title: 'Хьюстон, у нас проблема!',
        rotation: ROTATION_TYPES.insights,
        text: 'К тебе пришла команда Агуши с проблемой: в последний месяц падали продажи и важно понять, куда уходят от нас наши потребители, к каким брендам.\nНо вдруг всей компании по ошибке заблокировали доступ к базам данных. Что делать?',
        textDesk: 'К тебе пришла команда Агуши с проблемой: в последний месяц падали продажи и важно понять, куда уходят от нас наши потребители, к каким брендам. Но вдруг всей компании по ошибке заблокировали доступ к базам данных. Что делать?',
        answers: [
            {
                id: '1',
                text: 'Попробую напрямую обратиться к поставщику базы и объяснить ситуацию, ведь задачу нужно решить срочно, проблема горящая',
                textDesk: 'Попробую напрямую обратиться к поставщику базы\nи объяснить ситуацию, ведь задачу нужно решить срочно, проблема горящая',
                competence: [COMPETENCE_TYPES.results, COMPETENCE_TYPES.cooperation]
            },
            {
                id: '2',
                text: 'Обращусь к другим источникам — наверняка в компании много данных, не беда!',
                competence: [COMPETENCE_TYPES.flexibility]
            },
            {
                id: '3',
                text: 'Пока жду разблокировки, пойду искать, что происходило на рынке в последний месяц, в открытых источниках, заодно найду альтернативных поставщиков баз данных',
                textDesk: 'Пока жду разблокировки, пойду искать, что происходило\nна рынке в последний месяц, в открытых источниках, заодно найду альтернативных поставщиков баз данных',
                competence: [COMPETENCE_TYPES.education]
            },
        ],
    },
    {
        id: '13',
        title: 'Проблемы KPI',
        rotation: ROTATION_TYPES.revenueManagement,
        text: 'Ты провел финансовую аналитику портфеля Pepsi и понял, что для повышения маржинальности напитка и прибыльности, вам нужно убрать из портфеля часть больших бутылок и заменить их на маленькие. Но это не совсем выгодно sales-команде, KPI которых завязан на выручке от продаж. Что делать?',
        answers: [
            {
                id: '1',
                text: 'Заручусь поддержкой команды маркетинга и категорийного менеджмента, чтобы продвинуть свое решение, ведь оно выгодно для бизнеса',
                competence: [COMPETENCE_TYPES.results]
            },
            {
                id: '2',
                text: 'Попробую подробно разобраться, как найти золотую середину между моим решением и выгодой sales-команды',
                competence: [COMPETENCE_TYPES.education]
            },
            {
                id: '3',
                text: 'Пойду в sales-команду с предложением, как пересмотреть их KPI: мне важно достичь не только своих целей, но и чтобы другие коллеги не пострадали',
                competence: [COMPETENCE_TYPES.flexibility, COMPETENCE_TYPES.cooperation]
            },
        ],
    },
    {
        id: '14',
        title: 'Клиентский вопрос',
        rotation: ROTATION_TYPES.revenueManagement,
        text: 'Менеджер команды бренда J7 попросил тебя проанализировать ценовую политику бренда. На основе анализы ты выяснил, что нам нужно повышать цены у клиента, чтобы сохранять приемлемый уровень выручки и маржинальности. Как подойти к этому вопросу, чтобы достичь своей цели и не испортить отношения с клиентом?',
        answers: [
            {
                id: '1',
                text: 'Сначала предупрежу клиента и заранее приду к нему с описанием ситуации и попрошу его высказать свое мнение',
                competence: [COMPETENCE_TYPES.cooperation]
            },
            {
                id: '2',
                text: 'Сначала выстрою целый сторителлинг на основе своего анализа и аналитики лучших практик моих коллег - нужно заходить с козырей, чтобы точно не провалить переговоры',
                competence: [COMPETENCE_TYPES.education, COMPETENCE_TYPES.results]
            },
            {
                id: '3',
                text: 'Заранее посмотрю, где мы точно можем уступить клиенту, и приду с более жесткой позицией, постепенно смягчая ее в переговорах',
                competence: [COMPETENCE_TYPES.flexibility]
            },
        ],
    },
    {
        id: '15',
        title: 'Сейлз-команды',
        rotation: ROTATION_TYPES.category,
        text: 'Тебе часто приходится общаться \n' +
            'с командами продаж в регионах, чтобы вместе с ними анализировать эффективность промоакций и реакции покупателей на изменение ассортимента. Но один \n' +
            'из торговых менеджеров никогда не выполняет твои рекомендации. Что делать?',
        answers: [
            {
                id: '1',
                text: 'Пойду к директору по продажам и попрошу четко донести до всей команды обязательность их выполнения для достижения общего KPI',
                textDesk: 'Пойду к директору по продажам и попрошу четко донести\nдо всей команды обязательность их выполнения для достижения общего KPI',
                competence: [COMPETENCE_TYPES.results]
            },
            {
                id: '2',
                text: 'Организую встречу с этим менеджером и попрошу рассказать про всю ситуацию подробнее',
                competence: [COMPETENCE_TYPES.cooperation, COMPETENCE_TYPES.flexibility]
            },
            {
                id: '3',
                text: 'Более подробно изучу всю накопленную в компании аналитику по региону, пообщаюсь с торговыми представителями.\nЕсли проблема есть уже сейчас, то нужно разобраться в ее первопричинах',
                competence: [COMPETENCE_TYPES.education]
            },
        ],
    },
    {
        id: '16',
        title: 'Сегментация\nторговых точек',
        rotation: ROTATION_TYPES.businessDevelopment,
        text: 'Твой менеджер поручил тебе заняться составлением единой базы торговых точек. Основной критерий сегментации — это площадь торговой точки, так как именно от нее зависит возможность линейной выкладки товара. Сопоставь точку с ее размером!',
        answers: [
            {
                id: '1',
                text: 'correct',
                competence: [COMPETENCE_TYPES.results, COMPETENCE_TYPES.education, COMPETENCE_TYPES.flexibility, COMPETENCE_TYPES.cooperation]
            },
            {
                id: '2',
                text: 'incorrect',
                competence: []
            },
        ],
    },
];