import { McwExecutionHeader } from "./mcwExecutionHeader";
import { McwExecutionReturnArrayResponseBody } from "./mcwExecutionReturnArrayResponseBody";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface McwPowerOnExecutionReturnArrayResponse {
    header: McwExecutionHeader;
    body: McwExecutionReturnArrayResponseBody;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}