import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface PromptResponse {
    rgAnsText: string;
    rgAnsRateValue: number;
    rgAnsRateValueSpecified: boolean;
    rgAnsRate: number | null;
    rgAnsDateValue: string;
    rgAnsDateValueSpecified: boolean;
    rgAnsDate: string | null;
    rgAnsNumValue: number;
    rgAnsNumValueSpecified: boolean;
    rgAnsNum: number | null;
    rgAnsAmountValue: number;
    rgAnsAmountValueSpecified: boolean;
    rgAnsAmount: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}