import React from 'react';

interface QuestItemImageProps {
    previewUrl: string;

}

export const QuestItemImage = ({
                                   previewUrl,
                               }: QuestItemImageProps) => {
    return (

            <img
                src={previewUrl}
                alt="Изображение"
                className="w-full h-full object-contain"
                style={{
                    width: '80%',
                    height: '80%',
                    objectFit: 'contain'
                }}
            />

    );
};