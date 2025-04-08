import React from 'react';

interface QuestItemImageProps {
    previewUrl: string
}

export const QuestItemImage = (props: QuestItemImageProps) => {
    const {previewUrl} = {...props};
    return (

            <img
                className={"m-auto text-center align-middle w-full h-full object-cover rounded-md"}
                src={previewUrl}
                alt={"Ваше изображение"}
            />

    );
};


