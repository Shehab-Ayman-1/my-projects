import { MouseEvent, ChangeEvent } from "react";

export type InputEvent = ChangeEvent<HTMLInputElement>;
export type TextAreaEvent = ChangeEvent<HTMLTextAreaElement>;
export type FormEvent = MouseEvent<HTMLFormElement>;
