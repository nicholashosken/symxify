import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface PmtAppMethodFields {
    createAddlPrincipalCommentValue: boolean;
    createAddlPrincipalCommentValueSpecified: boolean;
    createAddlPrincipalComment: boolean | null;
    currentExcessOrder: number[];
    currentExcessOrderSpecified: boolean;
    definedCodeValue: boolean;
    definedCodeValueSpecified: boolean;
    definedCode: boolean | null;
    descriptionValue: boolean;
    descriptionValueSpecified: boolean;
    description: boolean | null;
    dqExcessOrder: number[];
    dqExcessOrderSpecified: boolean;
    gracePmtExcessOrder: number[];
    gracePmtExcessOrderSpecified: boolean;
    includeEscrowUnpdinPmtDueValue: boolean;
    includeEscrowUnpdinPmtDueValueSpecified: boolean;
    includeEscrowUnpdinPmtDue: boolean | null;
    paymentOrder: number[];
    paymentOrderSpecified: boolean;
    prepaidExcessOrder: number[];
    prepaidExcessOrderSpecified: boolean;
    thresholdPaymentIndicatorValue: boolean;
    thresholdPaymentIndicatorValueSpecified: boolean;
    thresholdPaymentIndicator: boolean | null;
    typeValue: boolean;
    typeValueSpecified: boolean;
    type: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}