import { IrsName } from "./irsName";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface IrsNameSelectFieldsResponse {
    irsName: IrsName;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
