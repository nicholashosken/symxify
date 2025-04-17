import { IrsBkupWithhold } from "./irsBkupWithhold";
export interface IrsBkupWithholdList {
    hasReachedMaximumListSize: boolean | null;
    irsBkupWithhold: IrsBkupWithhold[];
}
