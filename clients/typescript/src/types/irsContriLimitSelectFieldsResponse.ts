import { IrsContriLimit } from "./irsContriLimit";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface IrsContriLimitSelectFieldsResponse {
    irsContriLimit: IrsContriLimit;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}