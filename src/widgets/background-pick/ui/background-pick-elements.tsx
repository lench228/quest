import React from 'react';

import {BACKGROUND_PICK} from "../model/background-pick";

import {BackgroundPickElement} from "./background-pick-element";



export const BackgroundPickElements = () => {

    return (
        <ul className={"flex gap-2 overflow-x-scroll"}>
            {BACKGROUND_PICK.BACKGROUND_COLORS.map((color) => (
                <BackgroundPickElement color={color} key={color.name} />
                )
            )}
        </ul>
    );
};


