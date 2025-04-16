import { Bureau } from "./bureau";
import { Name } from "./name";
import { Address } from "./address";
import { Experian } from "./experian";
import { ChexSystems } from "./chexSystems";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { CreditReportBaseRequest } from "./creditReportBaseRequest";

export interface OrderReportRequest extends CreditReportBaseRequest {
    bureauValue: Bureau;
    bureauValueSpecified: boolean;
    bureau: Bureau | null;
    accountNumber: string;
    ssn: string;
    name: Name;
    address: Address;
    experian: Experian;
    chexSystems: ChexSystems;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}