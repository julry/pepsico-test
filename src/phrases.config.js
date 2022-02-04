import { ROTATION_TYPES } from './constants/rotationsTypes';

export const phrases = {
    '3': ({isWoman}) => [
        isWoman ? 'Я бы прислушалась к опыту!' : 'Я бы прислушался к опыту!',
        'У тебя все получится!',
        'Ты отлично справляешься!',
        'Сверь номер с базой, может, перепутаны цифры?',
        'Ничего не бойся, у тебя все получится!'
    ],
    '4': () => [
        'Давай с самого начала — надо учесть все ЦА, связанные с расположением точки',
        'Ну какой ты молодец!',
        'Давай посмотрим на то, сколько какой продукции у нас есть для предложения?',
        'Посмотри, что он уже заказывал!',
        'Перешли мне переписку с клиентом, посмотрю',
    ],
    '6': () => [
        'Слушай свое сердце и принимай решение!',
        'Что тебе ближе?',
        'Действительно сложный выбор…'
    ],
    '7': ({rotation}) => rotation === ROTATION_TYPES.brandMarketing ? [
        'Ты просто супер!',
        'Эксклюзивные линейки — задача не из простых! Надо чувствовать рынок.',
        'Ты молодец, что следишь за повесткой конкурентов!',
        'Давай обсудим завтра на колле?',
        'Жду твоего плана действий'
    ] : [
        'С Лавкой, кстати, активация была Lay’s movies. Посмотри материалы на досуге :)',
        'Давай взглянем на аналогичные кейсы конкурентов!',
        'Все в твоих руках!',
        'Пиши, если будут вопросы'
    ],
    '8': ({rotation}) => rotation === ROTATION_TYPES.brandMarketing ? [
        'Обожаю этот морс! Мой любимый — в зеленой упаковке, а твой?',
        'Давай посмотрим на аналогичные кейсы!',
        'Ты же сам знаешь, что выберешь самый актуальный вариант ;)',
        'Пиши, если будут вопросы'
    ] : [
        'С таким исследователем, как ты, у конкурентов не остается шансов!',
        'Тебе нужна помощь?',
        'Отвечу чуть позже, пока на встрече',
        'Пиши, если будут вопросы'
    ],
    '10': () => [
        'Обе команды очень крутые!',
        'Даже не знаю, что бы я сам выбрал…',
        'Вперед к свершениям!',
    ],
    '11': ({rotation}) => rotation === ROTATION_TYPES.insights ? [
        'Работа в Инсайтах — всегда приятно. Многое понимаешь о нашем бизнесе!',
        'Пора бы мне уже зарегистрироваться в ТикТоке…',
        'Тебе нужна помощь?',
        'Обожаю праздники! А спецлинейки продуктов… Вкуснота!',
        'Пиши, если будут вопросы'
    ] : [],
    '13': () => [
        'Ты универсальный солдат! Так что выбирай понравившуюся команду. Что бы ты ни выбрал, у тебя все получится!',
        'Да, выбор не из легких!'
    ],
    '14': ({rotation}) => rotation === ROTATION_TYPES.category ? [
        'Сейлз-команды — полезный опыт. Работая с ними, понимаешь, как устроена другая сторона нашего бизнеса!',
        'Так-так-так…',
        'Ты на верном пути!',
        'А может, командировочку в поле?',
        'Пиши, если будут вопросы'
    ] : [
        'Между большой и огромными площадями — пропасть квадратных метров!',
        'Так, что тут у нас?',
        'Чем могу быть полезен?',
        'Сегментация — в целом, очень полезный инструмент! Расскажу тебе, как ее укротить почти под любую задачу ;)',
        'Я бы сейчас по М11, да в Питер…'
    ],
};
