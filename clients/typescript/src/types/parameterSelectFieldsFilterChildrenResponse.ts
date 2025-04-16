import { Parameter } from "./parameter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ParameterSelectFieldsFilterChildrenResponse {
    parameter: Parameter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}