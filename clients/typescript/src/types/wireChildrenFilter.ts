import { WireBeneficiaryAdvFilter } from "./wireBeneficiaryAdvFilter";
import { WireBeneficiaryFiAdvFilter } from "./wireBeneficiaryFiAdvFilter";
import { WireBeneficiaryFiInfoFilter } from "./wireBeneficiaryFiInfoFilter";
import { WireBeneficiaryInfoFilter } from "./wireBeneficiaryInfoFilter";
import { WireDrawdownDebitAcctAdvFilter } from "./wireDrawdownDebitAcctAdvFilter";
import { WireFiToFiInfoFilter } from "./wireFiToFiInfoFilter";
import { WireFmHistoryFilter } from "./wireFmHistoryFilter";
import { WireIntermedFiAdvFilter } from "./wireIntermedFiAdvFilter";
import { WireIntermedFiInfoFilter } from "./wireIntermedFiInfoFilter";
import { WireOfacDetailsFilter } from "./wireOfacDetailsFilter";
import { WireReceiverFiInfoFilter } from "./wireReceiverFiInfoFilter";
import { WireServiceMessageFilter } from "./wireServiceMessageFilter";
import { WireUscAuditInfoFilter } from "./wireUscAuditInfoFilter";
import { VersionType } from "./versionType";

export interface WireChildrenFilter {
    wireBeneficiaryAdvFilter: WireBeneficiaryAdvFilter;
    wireBeneficiaryFiAdvFilter: WireBeneficiaryFiAdvFilter;
    wireBeneficiaryFiInfoFilter: WireBeneficiaryFiInfoFilter;
    wireBeneficiaryInfoFilter: WireBeneficiaryInfoFilter;
    wireDrawdownDebitAcctAdvFilter: WireDrawdownDebitAcctAdvFilter;
    wireFiToFiInfoFilter: WireFiToFiInfoFilter;
    wireFmHistoryFilter: WireFmHistoryFilter;
    wireIntermedFiAdvFilter: WireIntermedFiAdvFilter;
    wireIntermedFiInfoFilter: WireIntermedFiInfoFilter;
    wireOfacDetailsFilter: WireOfacDetailsFilter;
    wireReceiverFiInfoFilter: WireReceiverFiInfoFilter;
    wireServiceMessageFilter: WireServiceMessageFilter;
    wireUscAuditInfoFilter: WireUscAuditInfoFilter;
    version1: VersionType;
}