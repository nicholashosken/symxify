import { LoanBankruptcyPrepetitionBalList } from "./loanBankruptcyPrepetitionBalList";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanBankruptcy {
    closeDateValue: string;
    closeDateValueSpecified: boolean;
    closeDate: string | null;
    description: string;
    effectDateValue: string;
    effectDateValueSpecified: boolean;
    effectDate: string | null;
    expireDateValue: string;
    expireDateValueSpecified: boolean;
    expireDate: string | null;
    id: string;
    loanBankruptcyPrepetitionBalList: LoanBankruptcyPrepetitionBalList;
    openDateValue: string;
    openDateValueSpecified: boolean;
    openDate: string | null;
    recordChangeDateValue: string;
    recordChangeDateValueSpecified: boolean;
    recordChangeDate: string | null;
    typeValue: number;
    typeValueSpecified: boolean;
    type: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}