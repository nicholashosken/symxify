import { PromptRgDataType } from "./promptRgDataType";
import { RequiredInputDefaultValue } from "./requiredInputDefaultValue";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface Prompt {
    rgMaxCodeWidthValue: number;
    rgMaxCodeWidthValueSpecified: boolean;
    rgMaxCodeWidth: number | null;
    rgDataTypeValue: PromptRgDataType;
    rgDataTypeValueSpecified: boolean;
    rgDataType: PromptRgDataType | null;
    requiredInputDefault: RequiredInputDefaultValue;
    rgPrompt: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
