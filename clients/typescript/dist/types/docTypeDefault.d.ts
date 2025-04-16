import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface DocTypeDefault {
    description: string;
    documentTypeValue: number;
    documentTypeValueSpecified: boolean;
    documentType: number | null;
    excpNoticeCountCpWorkValue: number;
    excpNoticeCountCpWorkValueSpecified: boolean;
    excpNoticeCountCpWork: number | null;
    excpNoticeOptionValue: number;
    excpNoticeOptionValueSpecified: boolean;
    excpNoticeOption: number | null;
    expireDateValue: string;
    expireDateValueSpecified: boolean;
    expireDate: string | null;
    typeValue: number;
    typeValueSpecified: boolean;
    type: number | null;
    userChar1: string;
    userChar2: string;
    userChar3: string;
    userChar4: string;
    userChar5: string;
    userChar6: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
