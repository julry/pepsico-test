import { ROTATION_TYPES } from './constants/rotationsTypes';
import { Screen1 } from "./components/screens/Screen1";
import { Screen2 } from "./components/screens/Screen2";
import { Screen3 } from "./components/screens/Screen3";
import { Screen4 } from "./components/screens/Screen4";
import { Screen5 } from "./components/screens/Screen5";
import { Screen6 } from "./components/screens/Screen6";
import { Screen7 } from "./components/screens/Screen7";
import { Screen8 } from "./components/screens/Screen8";
import { Screen9 } from "./components/screens/Screen9";
import { Screen10 } from "./components/screens/Screen10";
import { Screen11 } from './components/screens/Screen11';
import { Screen12 } from './components/screens/Screen12';
import { Screen13 } from './components/screens/Screen13';
import { Screen14 } from './components/screens/Screen14';
import { Screen15 } from './components/screens/Screen15';
import { Screen16 } from './components/screens/Screen16';
import { Screen17 } from './components/screens/Screen17';
import { Screen18 } from "./components/screens/Screen18";
import { Screen19 } from "./components/screens/Screen19";
import { Screen20 } from "./components/screens/Screen20";
import { Screen21 } from "./components/screens/Screen21/Screen21";
import { Screen22 } from "./components/screens/Screen22";

export const screens = [
    {
        component: Screen1,
        preloadImages: [],
    },
    {
        component: Screen2,
        preloadImages: [],
    },
    {
        component: Screen3,
        preloadImages: [],
    },
    {
        component: Screen4,
        preloadImages: [],
    },
    {
        component: Screen5,
        preloadImages: [],
    },
    {
        component: Screen6,
        preloadImages: [],
    },
    {
        component: Screen7,
        preloadImages: [],
    },
    ({ currentRotation }) => currentRotation ===  ROTATION_TYPES.brandMarketing ? ([
        {
            component: Screen8,
            preloadImages: [],
        },
        {
            component: Screen9,
            preloadImages: [],
        },
    ]) : ([
        {
            component: Screen10,
            preloadImages: [],
        },
        {
            component: Screen11,
            preloadImages: [],
        },
    ]),
    {
        component: Screen12,
        preloadImages: [],
    },
    {
        component: Screen13,
        preloadImages: [],
    },
    ({ currentRotation }) => currentRotation === ROTATION_TYPES.insights? ([
        {
            component: Screen14,
            preloadImages: [],
        },
        {
            component: Screen15,
            preloadImages: [],
        },
    ]) : ([
        {
            component: Screen16,
            preloadImages: [],
        },
        {
            component: Screen17,
            preloadImages: [],
        },
    ]),
    {
        component: Screen18,
        preloadImages: [],
    },
    ({ currentRotation }) => currentRotation ===  ROTATION_TYPES.category ? ([
        {
            component: Screen19,
            preloadImages: [],
        },
    ]) : ([
        {
            component: Screen20,
            preloadImages: [],
        },
        {
            component: Screen21,
            preloadImages: [],
        },
    ]),
    {
        component: Screen22,
        preloadImages: [],
    },

];
