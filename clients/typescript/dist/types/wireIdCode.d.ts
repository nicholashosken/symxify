import { WireIdCodeField9OtherIdentification } from "./wireIdCodeField9OtherIdentification";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WireIdCode {
    field9OtherIdentification: WireIdCodeField9OtherIdentification[];
    field9OtherIdentificationSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
