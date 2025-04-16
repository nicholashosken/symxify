import { RgLine } from "./rgLine";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { McwExecutionBaseResponseBody } from "./mcwExecutionBaseResponseBody";
export interface McwExecutionReturnArrayResponseBody extends McwExecutionBaseResponseBody {
    rgLine: RgLine[];
    rgLineSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
