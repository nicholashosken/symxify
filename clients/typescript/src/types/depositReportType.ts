import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface DepositReportType {
    countValue: number;
    countValueSpecified: boolean;
    count: number | null;
    amountValue: number;
    amountValueSpecified: boolean;
    amount: number | null;
    glCodeValue: number;
    glCodeValueSpecified: boolean;
    glCode: number | null;
    glTranCountValue: number;
    glTranCountValueSpecified: boolean;
    glTranCount: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}