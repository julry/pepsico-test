import { useMemo, useState } from 'react';
import { screens } from '../screens.config';
import { PROJECT_TYPES } from '../constants/projectTypes';

function parseScreens(currentScreenIndex, progress) {
    return screens.reduce((acc, screen, index) => {
        if (index <= currentScreenIndex) {
            let parsedScreen = screen;

            if (typeof parsedScreen === 'function') {
                parsedScreen = parsedScreen(progress);
            }

            if (Array.isArray(parsedScreen)) {
                return [...acc, ...parsedScreen];
            }

            return [...acc, parsedScreen];
        } else {
            return [...acc, screen];
        }
    }, []);
}

const INITIAL_ANSWERS = {};
const INITIAL_ROTATIONS = [];
const INITIAL_PROJECT = PROJECT_TYPES.branding;
const INITIAL_PROGRESS = {
    answers: INITIAL_ANSWERS,
    rotations: INITIAL_ROTATIONS,
    mentor: {},
    project: INITIAL_PROJECT,
    currentRotation: ''
};

export function useProgressInit() {
    const [progress, setProgress] = useState(INITIAL_PROGRESS);

    const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
    const parsedScreens = useMemo(
        () => parseScreens(currentScreenIndex, progress),
        [currentScreenIndex, progress],
    );
    const screen = parsedScreens[currentScreenIndex];

    const next = () => {
        const nextScreenIndex = currentScreenIndex + 1;
        const canNext = nextScreenIndex <= parsedScreens.length - 1;

        if (canNext) {
            if (progress.wrapperRef) progress.wrapperRef.current.scrollTop = 0;
            setCurrentScreenIndex(nextScreenIndex);
        }
    };


    const updateRotations = (name) => {
        setProgress(progress => ({
            ...progress,
            rotations: [...progress.rotations, name],
            currentRotation: name
        }));
    };

    const updateAnswer = (name, value) => {
        setProgress(progress => ({
            ...progress,
            answers: {...progress.answers, [name]: value},
        }));
    };

    const updateProgress = (name, value) => {
        setProgress(progress => ({...progress, [name]: value}));
    };

    return {
        progress,
        currentScreenIndex,
        user: progress.user,
        answers: progress.answers,
        screen,
        rotations: progress.rotations,
        mentor: progress.mentor,
        project: progress.project,
        next,
        currentRotation: progress.currentRotation,
        updateAnswer,
        updateRotations,
        updateProgress,
    };
}