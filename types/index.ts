import { MouseEventHandler } from "react";

export interface CustomBTNProps{
    title:String;
    containerStyles?:string;
    handleClick?:MouseEventHandler<HTMLButtonElement>;
}