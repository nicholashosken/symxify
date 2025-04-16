import { IrsBkupWithhold } from "./irsBkupWithhold";

export interface IrsBkupWithholdList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    irsBkupWithhold: IrsBkupWithhold[];
    irsBkupWithholdSpecified: boolean;
}