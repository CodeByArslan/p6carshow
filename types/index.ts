import { MouseEventHandler } from "react";

export interface CustomBTNProps{
    title:String;
    btnType?: "button" | "submit";

    containerStyles?:string;
    handleClick?:MouseEventHandler<HTMLButtonElement>;
}