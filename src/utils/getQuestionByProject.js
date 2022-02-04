import { questions } from '../questions.config';

export const getQuestionByProject = (project) => {
    return questions.find(question => question.project && question.project === project);
};