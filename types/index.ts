import { StyledString } from "next/dist/build/swc";
import { MouseEventHandler } from "react";

export interface CustomBTNProps{
    title:String;
    btnType?: "button" | "submit";
    textStyles?:string
    rightIcon?:string
    isDisabled?:boolean

    containerStyles?:string;
    handleClick?:MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManufecturerProps{
    manufacturer:string;
    setManufecturer:(manufecturer:string)=>void;
}

export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
  }
  export interface FilterProps {
    manufacturer?: string;
    year?: number;
    model?: string;
    limit?: number;
    fuel?: string;
  }

  export interface OptionProps {
    title: string;
    value: string;
  }
  
  export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
  }


  export interface HomeProps {
    searchParams: FilterProps;
  }
  