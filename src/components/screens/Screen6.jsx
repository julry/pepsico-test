import React, { useState } from 'react';
import { PROJECT_TYPES } from '../../constants/projectTypes';
import { useProgress } from '../../hooks/useProgress';
import { QuestionWrapper } from '../common/QuestionWrapper';

export const Screen6 = (props) => {
    const {updateProgress} = useProgress();
    const [chosenAnswerId, setChosenAnswerId] = useState('');
    const question = {
        title: 'Выбор проекта',
        text: 'Ура, ты покорил аккаунт-менеджмент! Чем бы ты хотел заниматься на проекте, который будешь развивать на своем BREAKOUT’е?:)',
        answers: [
            {
                id: '1',
                text: 'Хочу посмотреть, как в период низкого спроса увеличивать продажи кваса',
                project: PROJECT_TYPES.sales
            },
            {
                id: '2',
                text: 'Буду улучшать процессы взаимодействия с клиентами, чтобы исключить временные и финансовые потери',
                project: PROJECT_TYPES.communication
            },
            {
                id: '3',
                text: 'Вперед к изучению и оптимизации промо-кампаний!',
                project: PROJECT_TYPES.promo
            },
            {
                id: '4',
                text: 'Мой вариант — развивать портфель и брендинг напитков без сахара, чтобы сделать нас лидером в этой категории ',
                project: PROJECT_TYPES.branding
            },
        ]
    };
    const answerFunction = (answer) => {
        setChosenAnswerId(answer.id);
        updateProgress('project', answer.project);
    };
    return  <QuestionWrapper question={question} answerFunction={answerFunction} chosenAnswerId={chosenAnswerId}/>;
};