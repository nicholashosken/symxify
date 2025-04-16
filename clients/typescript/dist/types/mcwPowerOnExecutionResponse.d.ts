import { McwExecutionHeader } from "./mcwExecutionHeader";
import { McwExecutionResponseBody } from "./mcwExecutionResponseBody";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface McwPowerOnExecutionResponse {
    header: McwExecutionHeader;
    body: McwExecutionResponseBody;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
