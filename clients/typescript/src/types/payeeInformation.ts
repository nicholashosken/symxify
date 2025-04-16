import { PayeeLine } from "./payeeLine";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface PayeeInformation {
    payeeLine: PayeeLine[];
    payeeLineSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}