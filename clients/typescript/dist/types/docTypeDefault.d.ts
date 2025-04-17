import { VersionType } from "./versionType";
export interface DocTypeDefault {
    description: string;
    documentType: number | null;
    excpNoticeCountCpWork: number | null;
    excpNoticeOption: number | null;
    expireDate: string | null;
    type: number | null;
    userChar1: string;
    userChar2: string;
    userChar3: string;
    userChar4: string;
    userChar5: string;
    userChar6: string;
    version1: VersionType;
}
