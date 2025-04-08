import React from 'react';


interface BackgroundPickElementProps {
    color: {
        name: string;
        value: string;
    };
}

export const BackgroundPickElement = (props: BackgroundPickElementProps) => {
    const {color} = {...props};
    return (
        <li key={color.name} className={"h-full w-full flex"}>
            <input
                onChange={(e) => {
                }}
                type={"radio"}
                id={color.name}
                value={color.value}
                hidden={true}
                name={"color"}
            />
            <label
                className={"cursor-pointer border-background opacity-60  min-w-[100px] min-h-[140px] h-full w-full hover:border-additional"}
                htmlFor={color.name}
                style={{
                    background: color.value,
                }}
            ></label>
        </li>
    );
};


