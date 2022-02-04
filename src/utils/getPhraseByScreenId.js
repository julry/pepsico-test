import { phrases } from '../phrases.config';

export const getPhraseByScreenId = (screenId, index, data) => {
    let phrasesArr = phrases[screenId];
    if (!phrasesArr) return;
    else phrasesArr = phrasesArr(data);
    if (index >= phrasesArr.length) index = index % phrasesArr.length;
    return phrasesArr[index];
}