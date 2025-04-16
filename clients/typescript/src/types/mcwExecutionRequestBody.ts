import { McwUserDefinedParameters } from "./mcwUserDefinedParameters";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface McwExecutionRequestBody {
    file: string;
    inputLetterFile: string;
    mcwSessionNumberValue: number;
    mcwSessionNumberValueSpecified: boolean;
    mcwSessionNumber: number | null;
    userValue: number;
    userValueSpecified: boolean;
    user: number | null;
    userDefinedParameters: McwUserDefinedParameters;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}