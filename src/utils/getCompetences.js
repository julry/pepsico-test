import { getAnswerById } from './getAnswerById';

const COMPETENCES_NAMES = {
    cooperation: 'Сотрудничество',
    results: 'Достижение результатов',
    flexibility: 'Гибкость',
    education: 'Стремление к обучению и развитию',
};

export const getCompetences = (answers) => {
    const resultPoints = Object.keys(answers).reduce((res, questionId) => {
        const answerId = answers[questionId];
        if (!answerId) return res;

        const answer = getAnswerById(questionId, answerId);
        const {competence} = answer;
        let resultComp = {...res};
        competence.map(comp => resultComp = {...resultComp, [comp]: (res[comp] || 0) + 1});
        return {...res, ...resultComp};
    }, {});

    return Object.keys(Object.fromEntries(
        Object.entries(resultPoints).sort(([,a],[,b]) => +b - +a)
    )).map(comp => ({name: COMPETENCES_NAMES[comp], points: resultPoints[comp]}));
};
