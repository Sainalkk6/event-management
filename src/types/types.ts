
import { MouseEventHandler } from "react";
import { IconType } from "react-icons";

export type FormInputContainerPropType = {
    label: string;
    type: "text" | "password"
    id: string;
    name: string;
    value: string;
    handleBlur: (e: React.FocusEvent<any, Element>) => void
    handleChange: (e: React.ChangeEvent<any>) => void,
    needHide: boolean,
    hide?: boolean,
    setHide?: React.Dispatch<React.SetStateAction<boolean>>;
}

export type AdminDashboardNavigationButtonProp = {
    label: string;
    pointer: string;
    Icon: IconType;
    onClick?: () => void
}

export type EventInputContainerPropType = {
    label: string;
    type: "text" | "file" | "time" | "date";
    value: string | number;
    name: string;
    id: string;
    handleChange: (e: React.FocusEvent<any, Element>) => void;
    handleBlur: (e: React.FocusEvent<any, Element>) => void;
}

export type EventCardPropType = {
    date: string;
    description: string;
    imageUrl: string;
    location: string;
    time: string;
    title: string;
    id: number
    route: string;
    price: number
}


export interface EventFormPropType {
    id?: number;
    title?: string;
    date?: string;
    createdBy?: string;
    description?: string;
    location?: string;
    imageUrl?: string;
    time?: string;
    price?:number,
}

export type ModalButtonPropType = {
    label: string;
    onClick: MouseEventHandler<HTMLButtonElement>
}

export type Params = {
    params: { [key: string]: string }
}