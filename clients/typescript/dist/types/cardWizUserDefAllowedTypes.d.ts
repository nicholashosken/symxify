import { BitMap } from "./bitMap";
export interface CardWizUserDefAllowedTypes {
    entryIdValue: number;
    entryIdValueSpecified: boolean;
    entryId: number | null;
    userDefAllowedTypes: BitMap;
}
