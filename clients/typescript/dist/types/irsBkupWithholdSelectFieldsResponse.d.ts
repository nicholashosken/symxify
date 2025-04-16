import { IrsBkupWithhold } from "./irsBkupWithhold";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface IrsBkupWithholdSelectFieldsResponse {
    irsBkupWithhold: IrsBkupWithhold;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
