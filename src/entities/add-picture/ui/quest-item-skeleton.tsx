import React from 'react';


import {QuestItemTitle} from "./quest-item-title";
import Upload from "../../../../public/icons/upload";

export const QuestItemSkeleton = () => {
    return (
            <div className="items-center self-center flex flex-col  justify-center min-h-[500px]">
                <QuestItemTitle/>
                <Upload/>
            </div>
    );
};
