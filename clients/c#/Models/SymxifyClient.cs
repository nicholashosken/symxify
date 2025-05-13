namespace Memberwise.Symxify;
using CollateralService;
using ContactEventMgmtService;
using CorpTransferService;
using CreditReportService;
using DealerService;
using EcaaService;
using ExceptionItemService;
using FileManagementService;
using FindByService;
using FinrepService;
using GeneralLedgerService;
using MbraddressService;
using MemberService;
using NonAccountNameService;
using ParameterService;
using ParticipantService;
using PowerOnService;
using ProjectionService;
using ReceivedItemService;
using RemittanceService;
using TransactionsService;
using UserService;
using WireService;

public partial class SymxifyClient
{

public Task<Memberwise.Symxify.Models.Result<ExceptionItemService.GetExcpItemSelectFieldsResponse>> GetExcpItemSelectFields(ExceptionItemService.ExcpItemSelectFieldsRequest payload) =>
    RequestAsync<ExceptionItemService.ExcpItemSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ExceptionItemService.GetExcpItemSelectFieldsResponse>>("getExcpItemSelectFields", payload, "exceptionitem");


public Task<Memberwise.Symxify.Models.Result<ExceptionItemService.GetExcpItemSelectFieldsFilterChildrenResponse>> GetExcpItemSelectFieldsFilterChildren(ExceptionItemService.ExcpItemSelectFieldsFilterChildrenRequest payload) =>
    RequestAsync<ExceptionItemService.ExcpItemSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<ExceptionItemService.GetExcpItemSelectFieldsFilterChildrenResponse>>("getExcpItemSelectFieldsFilterChildren", payload, "exceptionitem");


public Task<Memberwise.Symxify.Models.Result<ExceptionItemService.GetExcpAddInfoSelectFieldsResponse>> GetExcpAddInfoSelectFields(ExceptionItemService.ExcpAddInfoSelectFieldsRequest payload) =>
    RequestAsync<ExceptionItemService.ExcpAddInfoSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ExceptionItemService.GetExcpAddInfoSelectFieldsResponse>>("getExcpAddInfoSelectFields", payload, "exceptionitem");


public Task<Memberwise.Symxify.Models.Result<ExceptionItemService.GetExcpAddInfoPagedListSelectFieldsResponse>> GetExcpAddInfoPagedListSelectFields(ExceptionItemService.ExcpAddInfoPagedListSelectFieldsRequest payload) =>
    RequestAsync<ExceptionItemService.ExcpAddInfoPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ExceptionItemService.GetExcpAddInfoPagedListSelectFieldsResponse>>("getExcpAddInfoPagedListSelectFields", payload, "exceptionitem");


public Task<Memberwise.Symxify.Models.Result<ExceptionItemService.SearchExcpAddInfoPagedSelectFieldsResponse>> SearchExcpAddInfoPagedSelectFields(ExceptionItemService.ExcpAddInfoSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ExceptionItemService.ExcpAddInfoSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ExceptionItemService.SearchExcpAddInfoPagedSelectFieldsResponse>>("searchExcpAddInfoPagedSelectFields", payload, "exceptionitem");


public Task<Memberwise.Symxify.Models.Result<ExceptionItemService.GetExcpAddendaSelectFieldsResponse>> GetExcpAddendaSelectFields(ExceptionItemService.ExcpAddendaSelectFieldsRequest payload) =>
    RequestAsync<ExceptionItemService.ExcpAddendaSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ExceptionItemService.GetExcpAddendaSelectFieldsResponse>>("getExcpAddendaSelectFields", payload, "exceptionitem");


public Task<Memberwise.Symxify.Models.Result<ExceptionItemService.GetExcpAddendaPagedListSelectFieldsResponse>> GetExcpAddendaPagedListSelectFields(ExceptionItemService.ExcpAddendaPagedListSelectFieldsRequest payload) =>
    RequestAsync<ExceptionItemService.ExcpAddendaPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ExceptionItemService.GetExcpAddendaPagedListSelectFieldsResponse>>("getExcpAddendaPagedListSelectFields", payload, "exceptionitem");


public Task<Memberwise.Symxify.Models.Result<ExceptionItemService.SearchExcpAddendaPagedSelectFieldsResponse>> SearchExcpAddendaPagedSelectFields(ExceptionItemService.ExcpAddendaSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ExceptionItemService.ExcpAddendaSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ExceptionItemService.SearchExcpAddendaPagedSelectFieldsResponse>>("searchExcpAddendaPagedSelectFields", payload, "exceptionitem");


public Task<Memberwise.Symxify.Models.Result<FinrepService.GetCtrSelectFieldsResponse>> GetCtrSelectFields(FinrepService.CtrSelectFieldsRequest payload) =>
    RequestAsync<FinrepService.CtrSelectFieldsRequest,  Memberwise.Symxify.Models.Result<FinrepService.GetCtrSelectFieldsResponse>>("getCtrSelectFields", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.GetCtrSelectFieldsFilterChildrenResponse>> GetCtrSelectFieldsFilterChildren(FinrepService.CtrSelectFieldsFilterChildrenRequest payload) =>
    RequestAsync<FinrepService.CtrSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<FinrepService.GetCtrSelectFieldsFilterChildrenResponse>>("getCtrSelectFieldsFilterChildren", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.GetCtrAccountSelectFieldsResponse>> GetCtrAccountSelectFields(FinrepService.CtrAccountSelectFieldsRequest payload) =>
    RequestAsync<FinrepService.CtrAccountSelectFieldsRequest,  Memberwise.Symxify.Models.Result<FinrepService.GetCtrAccountSelectFieldsResponse>>("getCtrAccountSelectFields", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.GetCtrAccountPagedListSelectFieldsResponse>> GetCtrAccountPagedListSelectFields(FinrepService.CtrAccountPagedListSelectFieldsRequest payload) =>
    RequestAsync<FinrepService.CtrAccountPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<FinrepService.GetCtrAccountPagedListSelectFieldsResponse>>("getCtrAccountPagedListSelectFields", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.SearchCtrAccountPagedSelectFieldsResponse>> SearchCtrAccountPagedSelectFields(FinrepService.CtrAccountSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<FinrepService.CtrAccountSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<FinrepService.SearchCtrAccountPagedSelectFieldsResponse>>("searchCtrAccountPagedSelectFields", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.GetCtrBranchSelectFieldsResponse>> GetCtrBranchSelectFields(FinrepService.CtrBranchSelectFieldsRequest payload) =>
    RequestAsync<FinrepService.CtrBranchSelectFieldsRequest,  Memberwise.Symxify.Models.Result<FinrepService.GetCtrBranchSelectFieldsResponse>>("getCtrBranchSelectFields", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.GetCtrBranchPagedListSelectFieldsResponse>> GetCtrBranchPagedListSelectFields(FinrepService.CtrBranchPagedListSelectFieldsRequest payload) =>
    RequestAsync<FinrepService.CtrBranchPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<FinrepService.GetCtrBranchPagedListSelectFieldsResponse>>("getCtrBranchPagedListSelectFields", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.SearchCtrBranchPagedSelectFieldsResponse>> SearchCtrBranchPagedSelectFields(FinrepService.CtrBranchSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<FinrepService.CtrBranchSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<FinrepService.SearchCtrBranchPagedSelectFieldsResponse>>("searchCtrBranchPagedSelectFields", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.GetCtrFmHistoryPagedListSelectFieldsResponse>> GetCtrFmHistoryPagedListSelectFields(FinrepService.CtrFmHistoryPagedListSelectFieldsRequest payload) =>
    RequestAsync<FinrepService.CtrFmHistoryPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<FinrepService.GetCtrFmHistoryPagedListSelectFieldsResponse>>("getCtrFmHistoryPagedListSelectFields", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.SearchCtrFmHistoryPagedSelectFieldsResponse>> SearchCtrFmHistoryPagedSelectFields(FinrepService.CtrFmHistorySearchPagedSelectFieldsRequest payload) =>
    RequestAsync<FinrepService.CtrFmHistorySearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<FinrepService.SearchCtrFmHistoryPagedSelectFieldsResponse>>("searchCtrFmHistoryPagedSelectFields", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.GetCtrForeignSelectFieldsResponse>> GetCtrForeignSelectFields(FinrepService.CtrForeignSelectFieldsRequest payload) =>
    RequestAsync<FinrepService.CtrForeignSelectFieldsRequest,  Memberwise.Symxify.Models.Result<FinrepService.GetCtrForeignSelectFieldsResponse>>("getCtrForeignSelectFields", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.GetCtrForeignPagedListSelectFieldsResponse>> GetCtrForeignPagedListSelectFields(FinrepService.CtrForeignPagedListSelectFieldsRequest payload) =>
    RequestAsync<FinrepService.CtrForeignPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<FinrepService.GetCtrForeignPagedListSelectFieldsResponse>>("getCtrForeignPagedListSelectFields", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.SearchCtrForeignPagedSelectFieldsResponse>> SearchCtrForeignPagedSelectFields(FinrepService.CtrForeignSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<FinrepService.CtrForeignSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<FinrepService.SearchCtrForeignPagedSelectFieldsResponse>>("searchCtrForeignPagedSelectFields", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.GetCtrNoteSelectFieldsResponse>> GetCtrNoteSelectFields(FinrepService.CtrNoteSelectFieldsRequest payload) =>
    RequestAsync<FinrepService.CtrNoteSelectFieldsRequest,  Memberwise.Symxify.Models.Result<FinrepService.GetCtrNoteSelectFieldsResponse>>("getCtrNoteSelectFields", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.GetCtrNotePagedListSelectFieldsResponse>> GetCtrNotePagedListSelectFields(FinrepService.CtrNotePagedListSelectFieldsRequest payload) =>
    RequestAsync<FinrepService.CtrNotePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<FinrepService.GetCtrNotePagedListSelectFieldsResponse>>("getCtrNotePagedListSelectFields", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.SearchCtrNotePagedSelectFieldsResponse>> SearchCtrNotePagedSelectFields(FinrepService.CtrNoteSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<FinrepService.CtrNoteSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<FinrepService.SearchCtrNotePagedSelectFieldsResponse>>("searchCtrNotePagedSelectFields", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.GetCtrPersonSelectFieldsResponse>> GetCtrPersonSelectFields(FinrepService.CtrPersonSelectFieldsRequest payload) =>
    RequestAsync<FinrepService.CtrPersonSelectFieldsRequest,  Memberwise.Symxify.Models.Result<FinrepService.GetCtrPersonSelectFieldsResponse>>("getCtrPersonSelectFields", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.GetCtrPersonSelectFieldsFilterChildrenResponse>> GetCtrPersonSelectFieldsFilterChildren(FinrepService.CtrPersonSelectFieldsFilterChildrenRequest payload) =>
    RequestAsync<FinrepService.CtrPersonSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<FinrepService.GetCtrPersonSelectFieldsFilterChildrenResponse>>("getCtrPersonSelectFieldsFilterChildren", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.GetCtrPersonPagedListSelectFieldsResponse>> GetCtrPersonPagedListSelectFields(FinrepService.CtrPersonPagedListSelectFieldsRequest payload) =>
    RequestAsync<FinrepService.CtrPersonPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<FinrepService.GetCtrPersonPagedListSelectFieldsResponse>>("getCtrPersonPagedListSelectFields", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.SearchCtrPersonPagedSelectFieldsResponse>> SearchCtrPersonPagedSelectFields(FinrepService.CtrPersonSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<FinrepService.CtrPersonSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<FinrepService.SearchCtrPersonPagedSelectFieldsResponse>>("searchCtrPersonPagedSelectFields", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.GetCtrPersonCtrTranInfoSelectFieldsResponse>> GetCtrPersonCtrTranInfoSelectFields(FinrepService.CtrPersonCtrTranInfoSelectFieldsRequest payload) =>
    RequestAsync<FinrepService.CtrPersonCtrTranInfoSelectFieldsRequest,  Memberwise.Symxify.Models.Result<FinrepService.GetCtrPersonCtrTranInfoSelectFieldsResponse>>("getCtrPersonCtrTranInfoSelectFields", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.GetCtrPersonCtrTranInfoPagedListSelectFieldsResponse>> GetCtrPersonCtrTranInfoPagedListSelectFields(FinrepService.CtrPersonCtrTranInfoPagedListSelectFieldsRequest payload) =>
    RequestAsync<FinrepService.CtrPersonCtrTranInfoPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<FinrepService.GetCtrPersonCtrTranInfoPagedListSelectFieldsResponse>>("getCtrPersonCtrTranInfoPagedListSelectFields", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.SearchCtrPersonCtrTranInfoPagedSelectFieldsResponse>> SearchCtrPersonCtrTranInfoPagedSelectFields(FinrepService.CtrPersonCtrTranInfoSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<FinrepService.CtrPersonCtrTranInfoSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<FinrepService.SearchCtrPersonCtrTranInfoPagedSelectFieldsResponse>>("searchCtrPersonCtrTranInfoPagedSelectFields", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.UpdateCtrByIdResponse>> UpdateCtrById(FinrepService.UpdateCtrByIdRequest payload) =>
    RequestAsync<FinrepService.UpdateCtrByIdRequest,  Memberwise.Symxify.Models.Result<FinrepService.UpdateCtrByIdResponse>>("updateCtrByID", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.UpdateCtrAccountByIdResponse>> UpdateCtrAccountById(FinrepService.UpdateCtrAccountByIdRequest payload) =>
    RequestAsync<FinrepService.UpdateCtrAccountByIdRequest,  Memberwise.Symxify.Models.Result<FinrepService.UpdateCtrAccountByIdResponse>>("updateCtrAccountByID", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.UpdateCtrBranchByIdResponse>> UpdateCtrBranchById(FinrepService.UpdateCtrBranchByIdRequest payload) =>
    RequestAsync<FinrepService.UpdateCtrBranchByIdRequest,  Memberwise.Symxify.Models.Result<FinrepService.UpdateCtrBranchByIdResponse>>("updateCtrBranchByID", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.UpdateCtrForeignByIdResponse>> UpdateCtrForeignById(FinrepService.UpdateCtrForeignByIdRequest payload) =>
    RequestAsync<FinrepService.UpdateCtrForeignByIdRequest,  Memberwise.Symxify.Models.Result<FinrepService.UpdateCtrForeignByIdResponse>>("updateCtrForeignByID", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.UpdateCtrNoteByIdResponse>> UpdateCtrNoteById(FinrepService.UpdateCtrNoteByIdRequest payload) =>
    RequestAsync<FinrepService.UpdateCtrNoteByIdRequest,  Memberwise.Symxify.Models.Result<FinrepService.UpdateCtrNoteByIdResponse>>("updateCtrNoteByID", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.UpdateCtrPersonByIdResponse>> UpdateCtrPersonById(FinrepService.UpdateCtrPersonByIdRequest payload) =>
    RequestAsync<FinrepService.UpdateCtrPersonByIdRequest,  Memberwise.Symxify.Models.Result<FinrepService.UpdateCtrPersonByIdResponse>>("updateCtrPersonByID", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.UpdateCtrPersonCtrTranInfoByIdResponse>> UpdateCtrPersonCtrTranInfoById(FinrepService.UpdateCtrPersonCtrTranInfoByIdRequest payload) =>
    RequestAsync<FinrepService.UpdateCtrPersonCtrTranInfoByIdRequest,  Memberwise.Symxify.Models.Result<FinrepService.UpdateCtrPersonCtrTranInfoByIdResponse>>("updateCtrPersonCtrTranInfoByID", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.CreateCtrBranchResponse>> CreateCtrBranch(FinrepService.CreateCtrBranchRequest payload) =>
    RequestAsync<FinrepService.CreateCtrBranchRequest,  Memberwise.Symxify.Models.Result<FinrepService.CreateCtrBranchResponse>>("createCtrBranch", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.DeleteCtrBranchResponse>> DeleteCtrBranch(FinrepService.DeleteCtrBranchRequest payload) =>
    RequestAsync<FinrepService.DeleteCtrBranchRequest,  Memberwise.Symxify.Models.Result<FinrepService.DeleteCtrBranchResponse>>("deleteCtrBranch", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<ProjectionService.CalculatePaymentAmountResponse>> CalculatePaymentAmount(ProjectionService.CalculatePaymentAmountRequest payload) =>
    RequestAsync<ProjectionService.CalculatePaymentAmountRequest,  Memberwise.Symxify.Models.Result<ProjectionService.CalculatePaymentAmountResponse>>("calculatePaymentAmount", payload, "projection");


public Task<Memberwise.Symxify.Models.Result<ProjectionService.CalculateLoanAmountResponse>> CalculateLoanAmount(ProjectionService.CalculateLoanAmountRequest payload) =>
    RequestAsync<ProjectionService.CalculateLoanAmountRequest,  Memberwise.Symxify.Models.Result<ProjectionService.CalculateLoanAmountResponse>>("calculateLoanAmount", payload, "projection");


public Task<Memberwise.Symxify.Models.Result<ProjectionService.CalculateLoanTermResponse>> CalculateLoanTerm(ProjectionService.CalculateLoanTermRequest payload) =>
    RequestAsync<ProjectionService.CalculateLoanTermRequest,  Memberwise.Symxify.Models.Result<ProjectionService.CalculateLoanTermResponse>>("calculateLoanTerm", payload, "projection");


public Task<Memberwise.Symxify.Models.Result<PowerOnService.ExecutePowerOnReturnArrayResponse>> ExecutePowerOnReturnArray(PowerOnService.PowerOnExecutionRequest payload) =>
    RequestAsync<PowerOnService.PowerOnExecutionRequest,  Memberwise.Symxify.Models.Result<PowerOnService.ExecutePowerOnReturnArrayResponse>>("executePowerOnReturnArray", payload, "poweron");


public Task<Memberwise.Symxify.Models.Result<PowerOnService.ExecutePowerOnResponse>> ExecutePowerOn(PowerOnService.PowerOnExecutionRequest payload) =>
    RequestAsync<PowerOnService.PowerOnExecutionRequest,  Memberwise.Symxify.Models.Result<PowerOnService.ExecutePowerOnResponse>>("executePowerOn", payload, "poweron");


public Task<Memberwise.Symxify.Models.Result<PowerOnService.ExecuteMcwPowerOnResponse>> ExecuteMcwPowerOn(PowerOnService.McwPowerOnExecutionRequest payload) =>
    RequestAsync<PowerOnService.McwPowerOnExecutionRequest,  Memberwise.Symxify.Models.Result<PowerOnService.ExecuteMcwPowerOnResponse>>("executeMCWPowerOn", payload, "poweron");


public Task<Memberwise.Symxify.Models.Result<PowerOnService.ExecuteMcwPowerOnReturnArrayResponse>> ExecuteMcwPowerOnReturnArray(PowerOnService.McwPowerOnExecutionRequest payload) =>
    RequestAsync<PowerOnService.McwPowerOnExecutionRequest,  Memberwise.Symxify.Models.Result<PowerOnService.ExecuteMcwPowerOnReturnArrayResponse>>("executeMCWPowerOnReturnArray", payload, "poweron");


public Task<Memberwise.Symxify.Models.Result<ContactEventMgmtService.GetEventSummariesByAccountResponse>> GetEventSummariesByAccount(ContactEventMgmtService.GetEventSummariesByAccountRequest payload) =>
    RequestAsync<ContactEventMgmtService.GetEventSummariesByAccountRequest,  Memberwise.Symxify.Models.Result<ContactEventMgmtService.GetEventSummariesByAccountResponse>>("getEventSummariesByAccount", payload, "contacteventmgmt");


public Task<Memberwise.Symxify.Models.Result<FindByService.FindByActiveCardResponse>> FindByActiveCard(FindByService.LookupByActiveCardRequest payload) =>
    RequestAsync<FindByService.LookupByActiveCardRequest,  Memberwise.Symxify.Models.Result<FindByService.FindByActiveCardResponse>>("findByActiveCard", payload, "findby");


public Task<Memberwise.Symxify.Models.Result<FindByService.FindByAnyCardResponse>> FindByAnyCard(FindByService.LookupByAnyCardRequest payload) =>
    RequestAsync<FindByService.LookupByAnyCardRequest,  Memberwise.Symxify.Models.Result<FindByService.FindByAnyCardResponse>>("findByAnyCard", payload, "findby");


public Task<Memberwise.Symxify.Models.Result<FindByService.FindByHomeUserResponse>> FindByHomeUser(FindByService.LookupByHomeUserRequest payload) =>
    RequestAsync<FindByService.LookupByHomeUserRequest,  Memberwise.Symxify.Models.Result<FindByService.FindByHomeUserResponse>>("findByHomeUser", payload, "findby");


public Task<Memberwise.Symxify.Models.Result<FindByService.FindByMicrResponse>> FindByMicr(FindByService.LookupByMicrRequest payload) =>
    RequestAsync<FindByService.LookupByMicrRequest,  Memberwise.Symxify.Models.Result<FindByService.FindByMicrResponse>>("findByMICR", payload, "findby");


public Task<Memberwise.Symxify.Models.Result<FindByService.FindByLookupResponse>> FindByLookup(FindByService.LookupByLookupRequest payload) =>
    RequestAsync<FindByService.LookupByLookupRequest,  Memberwise.Symxify.Models.Result<FindByService.FindByLookupResponse>>("findByLookup", payload, "findby");


public Task<Memberwise.Symxify.Models.Result<FindByService.FindBySsnResponse>> FindBySsn(FindByService.LookupBySsnRequest payload) =>
    RequestAsync<FindByService.LookupBySsnRequest,  Memberwise.Symxify.Models.Result<FindByService.FindBySsnResponse>>("findBySSN", payload, "findby");


public Task<Memberwise.Symxify.Models.Result<FindByService.FindByShortNameResponse>> FindByShortName(FindByService.LookupByShortNameRequest payload) =>
    RequestAsync<FindByService.LookupByShortNameRequest,  Memberwise.Symxify.Models.Result<FindByService.FindByShortNameResponse>>("findByShortName", payload, "findby");


public Task<Memberwise.Symxify.Models.Result<ReceivedItemService.GetReceivedItemSelectFieldsResponse>> GetReceivedItemSelectFields(ReceivedItemService.ReceivedItemSelectFieldsRequest payload) =>
    RequestAsync<ReceivedItemService.ReceivedItemSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ReceivedItemService.GetReceivedItemSelectFieldsResponse>>("getReceivedItemSelectFields", payload, "receiveditem");


public Task<Memberwise.Symxify.Models.Result<ReceivedItemService.UpdateReceivedItemByIdResponse>> UpdateReceivedItemById(ReceivedItemService.UpdateReceivedItemByIdRequest payload) =>
    RequestAsync<ReceivedItemService.UpdateReceivedItemByIdRequest,  Memberwise.Symxify.Models.Result<ReceivedItemService.UpdateReceivedItemByIdResponse>>("updateReceivedItemByID", payload, "receiveditem");


public Task<Memberwise.Symxify.Models.Result<ReceivedItemService.CreateReceivedItemResponse>> CreateReceivedItem(ReceivedItemService.CreateReceivedItemRequest payload) =>
    RequestAsync<ReceivedItemService.CreateReceivedItemRequest,  Memberwise.Symxify.Models.Result<ReceivedItemService.CreateReceivedItemResponse>>("createReceivedItem", payload, "receiveditem");


public Task<Memberwise.Symxify.Models.Result<ReceivedItemService.DeleteReceivedItemResponse>> DeleteReceivedItem(ReceivedItemService.DeleteReceivedItemRequest payload) =>
    RequestAsync<ReceivedItemService.DeleteReceivedItemRequest,  Memberwise.Symxify.Models.Result<ReceivedItemService.DeleteReceivedItemResponse>>("deleteReceivedItem", payload, "receiveditem");


public Task<Memberwise.Symxify.Models.Result<WireService.GetWireSelectFieldsResponse>> GetWireSelectFields(WireService.WireSelectFieldsRequest payload) =>
    RequestAsync<WireService.WireSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.GetWireSelectFieldsResponse>>("getWireSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.GetWireSelectFieldsFilterChildrenResponse>> GetWireSelectFieldsFilterChildren(WireService.WireSelectFieldsFilterChildrenRequest payload) =>
    RequestAsync<WireService.WireSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<WireService.GetWireSelectFieldsFilterChildrenResponse>>("getWireSelectFieldsFilterChildren", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.GetWireBeneficiaryAdvSelectFieldsResponse>> GetWireBeneficiaryAdvSelectFields(WireService.WireBeneficiaryAdvSelectFieldsRequest payload) =>
    RequestAsync<WireService.WireBeneficiaryAdvSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.GetWireBeneficiaryAdvSelectFieldsResponse>>("getWireBeneficiaryAdvSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.GetWireBeneficiaryAdvPagedListSelectFieldsResponse>> GetWireBeneficiaryAdvPagedListSelectFields(WireService.WireBeneficiaryAdvPagedListSelectFieldsRequest payload) =>
    RequestAsync<WireService.WireBeneficiaryAdvPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.GetWireBeneficiaryAdvPagedListSelectFieldsResponse>>("getWireBeneficiaryAdvPagedListSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.SearchWireBeneficiaryAdvPagedSelectFieldsResponse>> SearchWireBeneficiaryAdvPagedSelectFields(WireService.WireBeneficiaryAdvSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<WireService.WireBeneficiaryAdvSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.SearchWireBeneficiaryAdvPagedSelectFieldsResponse>>("searchWireBeneficiaryAdvPagedSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.GetWireBeneficiaryFiAdvSelectFieldsResponse>> GetWireBeneficiaryFiAdvSelectFields(WireService.WireBeneficiaryFiAdvSelectFieldsRequest payload) =>
    RequestAsync<WireService.WireBeneficiaryFiAdvSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.GetWireBeneficiaryFiAdvSelectFieldsResponse>>("getWireBeneficiaryFiAdvSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.GetWireBeneficiaryFiAdvPagedListSelectFieldsResponse>> GetWireBeneficiaryFiAdvPagedListSelectFields(WireService.WireBeneficiaryFiAdvPagedListSelectFieldsRequest payload) =>
    RequestAsync<WireService.WireBeneficiaryFiAdvPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.GetWireBeneficiaryFiAdvPagedListSelectFieldsResponse>>("getWireBeneficiaryFiAdvPagedListSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.SearchWireBeneficiaryFiAdvPagedSelectFieldsResponse>> SearchWireBeneficiaryFiAdvPagedSelectFields(WireService.WireBeneficiaryFiAdvSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<WireService.WireBeneficiaryFiAdvSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.SearchWireBeneficiaryFiAdvPagedSelectFieldsResponse>>("searchWireBeneficiaryFiAdvPagedSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.GetWireBeneficiaryFiInfoSelectFieldsResponse>> GetWireBeneficiaryFiInfoSelectFields(WireService.WireBeneficiaryFiInfoSelectFieldsRequest payload) =>
    RequestAsync<WireService.WireBeneficiaryFiInfoSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.GetWireBeneficiaryFiInfoSelectFieldsResponse>>("getWireBeneficiaryFiInfoSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.GetWireBeneficiaryFiInfoPagedListSelectFieldsResponse>> GetWireBeneficiaryFiInfoPagedListSelectFields(WireService.WireBeneficiaryFiInfoPagedListSelectFieldsRequest payload) =>
    RequestAsync<WireService.WireBeneficiaryFiInfoPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.GetWireBeneficiaryFiInfoPagedListSelectFieldsResponse>>("getWireBeneficiaryFiInfoPagedListSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.SearchWireBeneficiaryFiInfoPagedSelectFieldsResponse>> SearchWireBeneficiaryFiInfoPagedSelectFields(WireService.WireBeneficiaryFiInfoSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<WireService.WireBeneficiaryFiInfoSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.SearchWireBeneficiaryFiInfoPagedSelectFieldsResponse>>("searchWireBeneficiaryFiInfoPagedSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.GetWireBeneficiaryInfoSelectFieldsResponse>> GetWireBeneficiaryInfoSelectFields(WireService.WireBeneficiaryInfoSelectFieldsRequest payload) =>
    RequestAsync<WireService.WireBeneficiaryInfoSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.GetWireBeneficiaryInfoSelectFieldsResponse>>("getWireBeneficiaryInfoSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.GetWireBeneficiaryInfoPagedListSelectFieldsResponse>> GetWireBeneficiaryInfoPagedListSelectFields(WireService.WireBeneficiaryInfoPagedListSelectFieldsRequest payload) =>
    RequestAsync<WireService.WireBeneficiaryInfoPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.GetWireBeneficiaryInfoPagedListSelectFieldsResponse>>("getWireBeneficiaryInfoPagedListSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.SearchWireBeneficiaryInfoPagedSelectFieldsResponse>> SearchWireBeneficiaryInfoPagedSelectFields(WireService.WireBeneficiaryInfoSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<WireService.WireBeneficiaryInfoSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.SearchWireBeneficiaryInfoPagedSelectFieldsResponse>>("searchWireBeneficiaryInfoPagedSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.GetWireDrawdownDebitAcctAdvSelectFieldsResponse>> GetWireDrawdownDebitAcctAdvSelectFields(WireService.WireDrawdownDebitAcctAdvSelectFieldsRequest payload) =>
    RequestAsync<WireService.WireDrawdownDebitAcctAdvSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.GetWireDrawdownDebitAcctAdvSelectFieldsResponse>>("getWireDrawdownDebitAcctAdvSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.GetWireDrawdownDebitAcctAdvPagedListSelectFieldsResponse>> GetWireDrawdownDebitAcctAdvPagedListSelectFields(WireService.WireDrawdownDebitAcctAdvPagedListSelectFieldsRequest payload) =>
    RequestAsync<WireService.WireDrawdownDebitAcctAdvPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.GetWireDrawdownDebitAcctAdvPagedListSelectFieldsResponse>>("getWireDrawdownDebitAcctAdvPagedListSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.SearchWireDrawdownDebitAcctAdvPagedSelectFieldsResponse>> SearchWireDrawdownDebitAcctAdvPagedSelectFields(WireService.WireDrawdownDebitAcctAdvSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<WireService.WireDrawdownDebitAcctAdvSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.SearchWireDrawdownDebitAcctAdvPagedSelectFieldsResponse>>("searchWireDrawdownDebitAcctAdvPagedSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.GetWireFiToFiInfoSelectFieldsResponse>> GetWireFiToFiInfoSelectFields(WireService.WireFiToFiInfoSelectFieldsRequest payload) =>
    RequestAsync<WireService.WireFiToFiInfoSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.GetWireFiToFiInfoSelectFieldsResponse>>("getWireFiToFiInfoSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.GetWireFiToFiInfoPagedListSelectFieldsResponse>> GetWireFiToFiInfoPagedListSelectFields(WireService.WireFiToFiInfoPagedListSelectFieldsRequest payload) =>
    RequestAsync<WireService.WireFiToFiInfoPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.GetWireFiToFiInfoPagedListSelectFieldsResponse>>("getWireFiToFiInfoPagedListSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.SearchWireFiToFiInfoPagedSelectFieldsResponse>> SearchWireFiToFiInfoPagedSelectFields(WireService.WireFiToFiInfoSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<WireService.WireFiToFiInfoSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.SearchWireFiToFiInfoPagedSelectFieldsResponse>>("searchWireFiToFiInfoPagedSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.GetWireFmHistoryPagedListSelectFieldsResponse>> GetWireFmHistoryPagedListSelectFields(WireService.WireFmHistoryPagedListSelectFieldsRequest payload) =>
    RequestAsync<WireService.WireFmHistoryPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.GetWireFmHistoryPagedListSelectFieldsResponse>>("getWireFmHistoryPagedListSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.SearchWireFmHistoryPagedSelectFieldsResponse>> SearchWireFmHistoryPagedSelectFields(WireService.WireFmHistorySearchPagedSelectFieldsRequest payload) =>
    RequestAsync<WireService.WireFmHistorySearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.SearchWireFmHistoryPagedSelectFieldsResponse>>("searchWireFmHistoryPagedSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.GetWireIntermedFiAdvSelectFieldsResponse>> GetWireIntermedFiAdvSelectFields(WireService.WireIntermedFiAdvSelectFieldsRequest payload) =>
    RequestAsync<WireService.WireIntermedFiAdvSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.GetWireIntermedFiAdvSelectFieldsResponse>>("getWireIntermedFiAdvSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.GetWireIntermedFiAdvPagedListSelectFieldsResponse>> GetWireIntermedFiAdvPagedListSelectFields(WireService.WireIntermedFiAdvPagedListSelectFieldsRequest payload) =>
    RequestAsync<WireService.WireIntermedFiAdvPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.GetWireIntermedFiAdvPagedListSelectFieldsResponse>>("getWireIntermedFiAdvPagedListSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.SearchWireIntermedFiAdvPagedSelectFieldsResponse>> SearchWireIntermedFiAdvPagedSelectFields(WireService.WireIntermedFiAdvSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<WireService.WireIntermedFiAdvSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.SearchWireIntermedFiAdvPagedSelectFieldsResponse>>("searchWireIntermedFiAdvPagedSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.GetWireIntermedFiInfoSelectFieldsResponse>> GetWireIntermedFiInfoSelectFields(WireService.WireIntermedFiInfoSelectFieldsRequest payload) =>
    RequestAsync<WireService.WireIntermedFiInfoSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.GetWireIntermedFiInfoSelectFieldsResponse>>("getWireIntermedFiInfoSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.GetWireIntermedFiInfoPagedListSelectFieldsResponse>> GetWireIntermedFiInfoPagedListSelectFields(WireService.WireIntermedFiInfoPagedListSelectFieldsRequest payload) =>
    RequestAsync<WireService.WireIntermedFiInfoPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.GetWireIntermedFiInfoPagedListSelectFieldsResponse>>("getWireIntermedFiInfoPagedListSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.SearchWireIntermedFiInfoPagedSelectFieldsResponse>> SearchWireIntermedFiInfoPagedSelectFields(WireService.WireIntermedFiInfoSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<WireService.WireIntermedFiInfoSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.SearchWireIntermedFiInfoPagedSelectFieldsResponse>>("searchWireIntermedFiInfoPagedSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.GetWireOfacDetailsSelectFieldsResponse>> GetWireOfacDetailsSelectFields(WireService.WireOfacDetailsSelectFieldsRequest payload) =>
    RequestAsync<WireService.WireOfacDetailsSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.GetWireOfacDetailsSelectFieldsResponse>>("getWireOfacDetailsSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.GetWireOfacDetailsPagedListSelectFieldsResponse>> GetWireOfacDetailsPagedListSelectFields(WireService.WireOfacDetailsPagedListSelectFieldsRequest payload) =>
    RequestAsync<WireService.WireOfacDetailsPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.GetWireOfacDetailsPagedListSelectFieldsResponse>>("getWireOfacDetailsPagedListSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.SearchWireOfacDetailsPagedSelectFieldsResponse>> SearchWireOfacDetailsPagedSelectFields(WireService.WireOfacDetailsSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<WireService.WireOfacDetailsSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.SearchWireOfacDetailsPagedSelectFieldsResponse>>("searchWireOfacDetailsPagedSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.GetWireReceiverFiInfoSelectFieldsResponse>> GetWireReceiverFiInfoSelectFields(WireService.WireReceiverFiInfoSelectFieldsRequest payload) =>
    RequestAsync<WireService.WireReceiverFiInfoSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.GetWireReceiverFiInfoSelectFieldsResponse>>("getWireReceiverFiInfoSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.GetWireReceiverFiInfoPagedListSelectFieldsResponse>> GetWireReceiverFiInfoPagedListSelectFields(WireService.WireReceiverFiInfoPagedListSelectFieldsRequest payload) =>
    RequestAsync<WireService.WireReceiverFiInfoPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.GetWireReceiverFiInfoPagedListSelectFieldsResponse>>("getWireReceiverFiInfoPagedListSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.SearchWireReceiverFiInfoPagedSelectFieldsResponse>> SearchWireReceiverFiInfoPagedSelectFields(WireService.WireReceiverFiInfoSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<WireService.WireReceiverFiInfoSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.SearchWireReceiverFiInfoPagedSelectFieldsResponse>>("searchWireReceiverFiInfoPagedSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.GetWireServiceMessageSelectFieldsResponse>> GetWireServiceMessageSelectFields(WireService.WireServiceMessageSelectFieldsRequest payload) =>
    RequestAsync<WireService.WireServiceMessageSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.GetWireServiceMessageSelectFieldsResponse>>("getWireServiceMessageSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.GetWireServiceMessagePagedListSelectFieldsResponse>> GetWireServiceMessagePagedListSelectFields(WireService.WireServiceMessagePagedListSelectFieldsRequest payload) =>
    RequestAsync<WireService.WireServiceMessagePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.GetWireServiceMessagePagedListSelectFieldsResponse>>("getWireServiceMessagePagedListSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.SearchWireServiceMessagePagedSelectFieldsResponse>> SearchWireServiceMessagePagedSelectFields(WireService.WireServiceMessageSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<WireService.WireServiceMessageSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.SearchWireServiceMessagePagedSelectFieldsResponse>>("searchWireServiceMessagePagedSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.GetWireUscAuditInfoSelectFieldsResponse>> GetWireUscAuditInfoSelectFields(WireService.WireUscAuditInfoSelectFieldsRequest payload) =>
    RequestAsync<WireService.WireUscAuditInfoSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.GetWireUscAuditInfoSelectFieldsResponse>>("getWireUscAuditInfoSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.GetWireUscAuditInfoPagedListSelectFieldsResponse>> GetWireUscAuditInfoPagedListSelectFields(WireService.WireUscAuditInfoPagedListSelectFieldsRequest payload) =>
    RequestAsync<WireService.WireUscAuditInfoPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.GetWireUscAuditInfoPagedListSelectFieldsResponse>>("getWireUscAuditInfoPagedListSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.SearchWireUscAuditInfoPagedSelectFieldsResponse>> SearchWireUscAuditInfoPagedSelectFields(WireService.WireUscAuditInfoSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<WireService.WireUscAuditInfoSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.SearchWireUscAuditInfoPagedSelectFieldsResponse>>("searchWireUscAuditInfoPagedSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.UpdateWireByIdResponse>> UpdateWireById(WireService.UpdateWireByIdRequest payload) =>
    RequestAsync<WireService.UpdateWireByIdRequest,  Memberwise.Symxify.Models.Result<WireService.UpdateWireByIdResponse>>("updateWireByID", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.UpdateWireBeneficiaryAdvByIdResponse>> UpdateWireBeneficiaryAdvById(WireService.UpdateWireBeneficiaryAdvByIdRequest payload) =>
    RequestAsync<WireService.UpdateWireBeneficiaryAdvByIdRequest,  Memberwise.Symxify.Models.Result<WireService.UpdateWireBeneficiaryAdvByIdResponse>>("updateWireBeneficiaryAdvByID", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.UpdateWireBeneficiaryFiAdvByIdResponse>> UpdateWireBeneficiaryFiAdvById(WireService.UpdateWireBeneficiaryFiAdvByIdRequest payload) =>
    RequestAsync<WireService.UpdateWireBeneficiaryFiAdvByIdRequest,  Memberwise.Symxify.Models.Result<WireService.UpdateWireBeneficiaryFiAdvByIdResponse>>("updateWireBeneficiaryFiAdvByID", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.UpdateWireBeneficiaryFiInfoByIdResponse>> UpdateWireBeneficiaryFiInfoById(WireService.UpdateWireBeneficiaryFiInfoByIdRequest payload) =>
    RequestAsync<WireService.UpdateWireBeneficiaryFiInfoByIdRequest,  Memberwise.Symxify.Models.Result<WireService.UpdateWireBeneficiaryFiInfoByIdResponse>>("updateWireBeneficiaryFiInfoByID", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.UpdateWireBeneficiaryInfoByIdResponse>> UpdateWireBeneficiaryInfoById(WireService.UpdateWireBeneficiaryInfoByIdRequest payload) =>
    RequestAsync<WireService.UpdateWireBeneficiaryInfoByIdRequest,  Memberwise.Symxify.Models.Result<WireService.UpdateWireBeneficiaryInfoByIdResponse>>("updateWireBeneficiaryInfoByID", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.UpdateWireDrawdownDebitAcctAdvByIdResponse>> UpdateWireDrawdownDebitAcctAdvById(WireService.UpdateWireDrawdownDebitAcctAdvByIdRequest payload) =>
    RequestAsync<WireService.UpdateWireDrawdownDebitAcctAdvByIdRequest,  Memberwise.Symxify.Models.Result<WireService.UpdateWireDrawdownDebitAcctAdvByIdResponse>>("updateWireDrawdownDebitAcctAdvByID", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.UpdateWireFiToFiInfoByIdResponse>> UpdateWireFiToFiInfoById(WireService.UpdateWireFiToFiInfoByIdRequest payload) =>
    RequestAsync<WireService.UpdateWireFiToFiInfoByIdRequest,  Memberwise.Symxify.Models.Result<WireService.UpdateWireFiToFiInfoByIdResponse>>("updateWireFiToFiInfoByID", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.UpdateWireIntermedFiAdvByIdResponse>> UpdateWireIntermedFiAdvById(WireService.UpdateWireIntermedFiAdvByIdRequest payload) =>
    RequestAsync<WireService.UpdateWireIntermedFiAdvByIdRequest,  Memberwise.Symxify.Models.Result<WireService.UpdateWireIntermedFiAdvByIdResponse>>("updateWireIntermedFiAdvByID", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.UpdateWireIntermedFiInfoByIdResponse>> UpdateWireIntermedFiInfoById(WireService.UpdateWireIntermedFiInfoByIdRequest payload) =>
    RequestAsync<WireService.UpdateWireIntermedFiInfoByIdRequest,  Memberwise.Symxify.Models.Result<WireService.UpdateWireIntermedFiInfoByIdResponse>>("updateWireIntermedFiInfoByID", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.UpdateWireOfacDetailsByIdResponse>> UpdateWireOfacDetailsById(WireService.UpdateWireOfacDetailsByIdRequest payload) =>
    RequestAsync<WireService.UpdateWireOfacDetailsByIdRequest,  Memberwise.Symxify.Models.Result<WireService.UpdateWireOfacDetailsByIdResponse>>("updateWireOfacDetailsByID", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.UpdateWireReceiverFiInfoByIdResponse>> UpdateWireReceiverFiInfoById(WireService.UpdateWireReceiverFiInfoByIdRequest payload) =>
    RequestAsync<WireService.UpdateWireReceiverFiInfoByIdRequest,  Memberwise.Symxify.Models.Result<WireService.UpdateWireReceiverFiInfoByIdResponse>>("updateWireReceiverFiInfoByID", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.UpdateWireServiceMessageByIdResponse>> UpdateWireServiceMessageById(WireService.UpdateWireServiceMessageByIdRequest payload) =>
    RequestAsync<WireService.UpdateWireServiceMessageByIdRequest,  Memberwise.Symxify.Models.Result<WireService.UpdateWireServiceMessageByIdResponse>>("updateWireServiceMessageByID", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.UpdateWireUscAuditInfoByIdResponse>> UpdateWireUscAuditInfoById(WireService.UpdateWireUscAuditInfoByIdRequest payload) =>
    RequestAsync<WireService.UpdateWireUscAuditInfoByIdRequest,  Memberwise.Symxify.Models.Result<WireService.UpdateWireUscAuditInfoByIdResponse>>("updateWireUscAuditInfoByID", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.CreateWireResponse>> CreateWire(WireService.CreateWireRequest payload) =>
    RequestAsync<WireService.CreateWireRequest,  Memberwise.Symxify.Models.Result<WireService.CreateWireResponse>>("createWire", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<CheckVerificationService.VerifyCheckResponse>> VerifyCheck(CheckVerificationService.CheckVerificationRequest payload) =>
    RequestAsync<CheckVerificationService.CheckVerificationRequest,  Memberwise.Symxify.Models.Result<CheckVerificationService.VerifyCheckResponse>>("verifyCheck", payload, "checkverification");


public Task<Memberwise.Symxify.Models.Result<MemberService.GetMemberRecSelectFieldsResponse>> GetMemberRecSelectFields(MemberService.MemberRecSelectFieldsRequest payload) =>
    RequestAsync<MemberService.MemberRecSelectFieldsRequest,  Memberwise.Symxify.Models.Result<MemberService.GetMemberRecSelectFieldsResponse>>("getMemberRecSelectFields", payload, "member");


public Task<Memberwise.Symxify.Models.Result<MemberService.GetMemberRecSelectFieldsFilterChildrenResponse>> GetMemberRecSelectFieldsFilterChildren(MemberService.MemberRecSelectFieldsFilterChildrenRequest payload) =>
    RequestAsync<MemberService.MemberRecSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<MemberService.GetMemberRecSelectFieldsFilterChildrenResponse>>("getMemberRecSelectFieldsFilterChildren", payload, "member");


public Task<Memberwise.Symxify.Models.Result<MemberService.GetMemberRecFmHistoryPagedListSelectFieldsResponse>> GetMemberRecFmHistoryPagedListSelectFields(MemberService.MemberRecFmHistoryPagedListSelectFieldsRequest payload) =>
    RequestAsync<MemberService.MemberRecFmHistoryPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<MemberService.GetMemberRecFmHistoryPagedListSelectFieldsResponse>>("getMemberRecFmHistoryPagedListSelectFields", payload, "member");


public Task<Memberwise.Symxify.Models.Result<MemberService.SearchMemberRecFmHistoryPagedSelectFieldsResponse>> SearchMemberRecFmHistoryPagedSelectFields(MemberService.MemberRecFmHistorySearchPagedSelectFieldsRequest payload) =>
    RequestAsync<MemberService.MemberRecFmHistorySearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<MemberService.SearchMemberRecFmHistoryPagedSelectFieldsResponse>>("searchMemberRecFmHistoryPagedSelectFields", payload, "member");


public Task<Memberwise.Symxify.Models.Result<MemberService.UpdateMemberRecByIdResponse>> UpdateMemberRecById(MemberService.UpdateMemberRecByIdRequest payload) =>
    RequestAsync<MemberService.UpdateMemberRecByIdRequest,  Memberwise.Symxify.Models.Result<MemberService.UpdateMemberRecByIdResponse>>("updateMemberRecByID", payload, "member");


public Task<Memberwise.Symxify.Models.Result<MemberService.CreateMemberRecResponse>> CreateMemberRec(MemberService.CreateMemberRecRequest payload) =>
    RequestAsync<MemberService.CreateMemberRecRequest,  Memberwise.Symxify.Models.Result<MemberService.CreateMemberRecResponse>>("createMemberRec", payload, "member");


public Task<Memberwise.Symxify.Models.Result<BatchJobsService.ListBatchJobsServiceResponse>> ListBatchJobs(BatchJobsService.ListBatchJobsRequest payload) =>
    RequestAsync<BatchJobsService.ListBatchJobsRequest,  Memberwise.Symxify.Models.Result<BatchJobsService.ListBatchJobsServiceResponse>>("listBatchJobs", payload, "batchjobs");


public Task<Memberwise.Symxify.Models.Result<BatchJobsService.ExecuteBatchJobServiceResponse>> ExecuteBatchJob(BatchJobsService.ExecuteBatchJobRequest payload) =>
    RequestAsync<BatchJobsService.ExecuteBatchJobRequest,  Memberwise.Symxify.Models.Result<BatchJobsService.ExecuteBatchJobServiceResponse>>("executeBatchJob", payload, "batchjobs");


public Task<Memberwise.Symxify.Models.Result<BatchJobsService.GetBatchJobStatusResponse>> GetBatchJobStatus(BatchJobsService.GetBatchJobStatusRequest payload) =>
    RequestAsync<BatchJobsService.GetBatchJobStatusRequest,  Memberwise.Symxify.Models.Result<BatchJobsService.GetBatchJobStatusResponse>>("getBatchJobStatus", payload, "batchjobs");


public Task<Memberwise.Symxify.Models.Result<CollateralService.GetCollateralSelectFieldsResponse>> GetCollateralSelectFields(CollateralService.CollateralSelectFieldsRequest payload) =>
    RequestAsync<CollateralService.CollateralSelectFieldsRequest,  Memberwise.Symxify.Models.Result<CollateralService.GetCollateralSelectFieldsResponse>>("getCollateralSelectFields", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.GetCollateralSelectFieldsFilterChildrenResponse>> GetCollateralSelectFieldsFilterChildren(CollateralService.CollateralSelectFieldsFilterChildrenRequest payload) =>
    RequestAsync<CollateralService.CollateralSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<CollateralService.GetCollateralSelectFieldsFilterChildrenResponse>>("getCollateralSelectFieldsFilterChildren", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.GetCollateralCollHoldSelectFieldsResponse>> GetCollateralCollHoldSelectFields(CollateralService.CollateralCollHoldSelectFieldsRequest payload) =>
    RequestAsync<CollateralService.CollateralCollHoldSelectFieldsRequest,  Memberwise.Symxify.Models.Result<CollateralService.GetCollateralCollHoldSelectFieldsResponse>>("getCollateralCollHoldSelectFields", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.GetCollateralCollHoldPagedListSelectFieldsResponse>> GetCollateralCollHoldPagedListSelectFields(CollateralService.CollateralCollHoldPagedListSelectFieldsRequest payload) =>
    RequestAsync<CollateralService.CollateralCollHoldPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<CollateralService.GetCollateralCollHoldPagedListSelectFieldsResponse>>("getCollateralCollHoldPagedListSelectFields", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.SearchCollateralCollHoldPagedSelectFieldsResponse>> SearchCollateralCollHoldPagedSelectFields(CollateralService.CollateralCollHoldSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<CollateralService.CollateralCollHoldSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<CollateralService.SearchCollateralCollHoldPagedSelectFieldsResponse>>("searchCollateralCollHoldPagedSelectFields", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.GetCollateralDocumentSelectFieldsResponse>> GetCollateralDocumentSelectFields(CollateralService.CollateralDocumentSelectFieldsRequest payload) =>
    RequestAsync<CollateralService.CollateralDocumentSelectFieldsRequest,  Memberwise.Symxify.Models.Result<CollateralService.GetCollateralDocumentSelectFieldsResponse>>("getCollateralDocumentSelectFields", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.GetCollateralDocumentSelectFieldsFilterChildrenResponse>> GetCollateralDocumentSelectFieldsFilterChildren(CollateralService.CollateralDocumentSelectFieldsFilterChildrenRequest payload) =>
    RequestAsync<CollateralService.CollateralDocumentSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<CollateralService.GetCollateralDocumentSelectFieldsFilterChildrenResponse>>("getCollateralDocumentSelectFieldsFilterChildren", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.GetCollateralDocumentPagedListSelectFieldsResponse>> GetCollateralDocumentPagedListSelectFields(CollateralService.CollateralDocumentPagedListSelectFieldsRequest payload) =>
    RequestAsync<CollateralService.CollateralDocumentPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<CollateralService.GetCollateralDocumentPagedListSelectFieldsResponse>>("getCollateralDocumentPagedListSelectFields", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.SearchCollateralDocumentPagedSelectFieldsResponse>> SearchCollateralDocumentPagedSelectFields(CollateralService.CollateralDocumentSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<CollateralService.CollateralDocumentSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<CollateralService.SearchCollateralDocumentPagedSelectFieldsResponse>>("searchCollateralDocumentPagedSelectFields", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.GetCollateralDocumentTrackingSelectFieldsResponse>> GetCollateralDocumentTrackingSelectFields(CollateralService.CollateralDocumentTrackingSelectFieldsRequest payload) =>
    RequestAsync<CollateralService.CollateralDocumentTrackingSelectFieldsRequest,  Memberwise.Symxify.Models.Result<CollateralService.GetCollateralDocumentTrackingSelectFieldsResponse>>("getCollateralDocumentTrackingSelectFields", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.GetCollateralDocumentTrackingPagedListSelectFieldsResponse>> GetCollateralDocumentTrackingPagedListSelectFields(CollateralService.CollateralDocumentTrackingPagedListSelectFieldsRequest payload) =>
    RequestAsync<CollateralService.CollateralDocumentTrackingPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<CollateralService.GetCollateralDocumentTrackingPagedListSelectFieldsResponse>>("getCollateralDocumentTrackingPagedListSelectFields", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.SearchCollateralDocumentTrackingPagedSelectFieldsResponse>> SearchCollateralDocumentTrackingPagedSelectFields(CollateralService.CollateralDocumentTrackingSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<CollateralService.CollateralDocumentTrackingSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<CollateralService.SearchCollateralDocumentTrackingPagedSelectFieldsResponse>>("searchCollateralDocumentTrackingPagedSelectFields", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.GetCollateralFmHistoryPagedListSelectFieldsResponse>> GetCollateralFmHistoryPagedListSelectFields(CollateralService.CollateralFmHistoryPagedListSelectFieldsRequest payload) =>
    RequestAsync<CollateralService.CollateralFmHistoryPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<CollateralService.GetCollateralFmHistoryPagedListSelectFieldsResponse>>("getCollateralFmHistoryPagedListSelectFields", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.SearchCollateralFmHistoryPagedSelectFieldsResponse>> SearchCollateralFmHistoryPagedSelectFields(CollateralService.CollateralFmHistorySearchPagedSelectFieldsRequest payload) =>
    RequestAsync<CollateralService.CollateralFmHistorySearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<CollateralService.SearchCollateralFmHistoryPagedSelectFieldsResponse>>("searchCollateralFmHistoryPagedSelectFields", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.GetCollateralTrackingSelectFieldsResponse>> GetCollateralTrackingSelectFields(CollateralService.CollateralTrackingSelectFieldsRequest payload) =>
    RequestAsync<CollateralService.CollateralTrackingSelectFieldsRequest,  Memberwise.Symxify.Models.Result<CollateralService.GetCollateralTrackingSelectFieldsResponse>>("getCollateralTrackingSelectFields", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.GetCollateralTrackingPagedListSelectFieldsResponse>> GetCollateralTrackingPagedListSelectFields(CollateralService.CollateralTrackingPagedListSelectFieldsRequest payload) =>
    RequestAsync<CollateralService.CollateralTrackingPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<CollateralService.GetCollateralTrackingPagedListSelectFieldsResponse>>("getCollateralTrackingPagedListSelectFields", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.SearchCollateralTrackingPagedSelectFieldsResponse>> SearchCollateralTrackingPagedSelectFields(CollateralService.CollateralTrackingSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<CollateralService.CollateralTrackingSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<CollateralService.SearchCollateralTrackingPagedSelectFieldsResponse>>("searchCollateralTrackingPagedSelectFields", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.UpdateCollateralByIdResponse>> UpdateCollateralById(CollateralService.UpdateCollateralByIdRequest payload) =>
    RequestAsync<CollateralService.UpdateCollateralByIdRequest,  Memberwise.Symxify.Models.Result<CollateralService.UpdateCollateralByIdResponse>>("updateCollateralByID", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.UpdateCollateralCollHoldByIdResponse>> UpdateCollateralCollHoldById(CollateralService.UpdateCollateralCollHoldByIdRequest payload) =>
    RequestAsync<CollateralService.UpdateCollateralCollHoldByIdRequest,  Memberwise.Symxify.Models.Result<CollateralService.UpdateCollateralCollHoldByIdResponse>>("updateCollateralCollHoldByID", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.UpdateCollateralDocumentByIdResponse>> UpdateCollateralDocumentById(CollateralService.UpdateCollateralDocumentByIdRequest payload) =>
    RequestAsync<CollateralService.UpdateCollateralDocumentByIdRequest,  Memberwise.Symxify.Models.Result<CollateralService.UpdateCollateralDocumentByIdResponse>>("updateCollateralDocumentByID", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.UpdateCollateralDocumentTrackingByIdResponse>> UpdateCollateralDocumentTrackingById(CollateralService.UpdateCollateralDocumentTrackingByIdRequest payload) =>
    RequestAsync<CollateralService.UpdateCollateralDocumentTrackingByIdRequest,  Memberwise.Symxify.Models.Result<CollateralService.UpdateCollateralDocumentTrackingByIdResponse>>("updateCollateralDocumentTrackingByID", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.UpdateCollateralTrackingByIdResponse>> UpdateCollateralTrackingById(CollateralService.UpdateCollateralTrackingByIdRequest payload) =>
    RequestAsync<CollateralService.UpdateCollateralTrackingByIdRequest,  Memberwise.Symxify.Models.Result<CollateralService.UpdateCollateralTrackingByIdResponse>>("updateCollateralTrackingByID", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.CreateCollateralResponse>> CreateCollateral(CollateralService.CreateCollateralRequest payload) =>
    RequestAsync<CollateralService.CreateCollateralRequest,  Memberwise.Symxify.Models.Result<CollateralService.CreateCollateralResponse>>("createCollateral", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.CreateCollateralCollHoldResponse>> CreateCollateralCollHold(CollateralService.CreateCollateralCollHoldRequest payload) =>
    RequestAsync<CollateralService.CreateCollateralCollHoldRequest,  Memberwise.Symxify.Models.Result<CollateralService.CreateCollateralCollHoldResponse>>("createCollateralCollHold", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.CreateCollateralDocumentResponse>> CreateCollateralDocument(CollateralService.CreateCollateralDocumentRequest payload) =>
    RequestAsync<CollateralService.CreateCollateralDocumentRequest,  Memberwise.Symxify.Models.Result<CollateralService.CreateCollateralDocumentResponse>>("createCollateralDocument", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.CreateCollateralDocumentTrackingResponse>> CreateCollateralDocumentTracking(CollateralService.CreateCollateralDocumentTrackingRequest payload) =>
    RequestAsync<CollateralService.CreateCollateralDocumentTrackingRequest,  Memberwise.Symxify.Models.Result<CollateralService.CreateCollateralDocumentTrackingResponse>>("createCollateralDocumentTracking", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.CreateCollateralTrackingResponse>> CreateCollateralTracking(CollateralService.CreateCollateralTrackingRequest payload) =>
    RequestAsync<CollateralService.CreateCollateralTrackingRequest,  Memberwise.Symxify.Models.Result<CollateralService.CreateCollateralTrackingResponse>>("createCollateralTracking", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.DeleteCollateralCollHoldResponse>> DeleteCollateralCollHold(CollateralService.DeleteCollateralCollHoldRequest payload) =>
    RequestAsync<CollateralService.DeleteCollateralCollHoldRequest,  Memberwise.Symxify.Models.Result<CollateralService.DeleteCollateralCollHoldResponse>>("deleteCollateralCollHold", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.DeleteCollateralDocumentResponse>> DeleteCollateralDocument(CollateralService.DeleteCollateralDocumentRequest payload) =>
    RequestAsync<CollateralService.DeleteCollateralDocumentRequest,  Memberwise.Symxify.Models.Result<CollateralService.DeleteCollateralDocumentResponse>>("deleteCollateralDocument", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.DeleteCollateralDocumentTrackingResponse>> DeleteCollateralDocumentTracking(CollateralService.DeleteCollateralDocumentTrackingRequest payload) =>
    RequestAsync<CollateralService.DeleteCollateralDocumentTrackingRequest,  Memberwise.Symxify.Models.Result<CollateralService.DeleteCollateralDocumentTrackingResponse>>("deleteCollateralDocumentTracking", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.DeleteCollateralTrackingResponse>> DeleteCollateralTracking(CollateralService.DeleteCollateralTrackingRequest payload) =>
    RequestAsync<CollateralService.DeleteCollateralTrackingRequest,  Memberwise.Symxify.Models.Result<CollateralService.DeleteCollateralTrackingResponse>>("deleteCollateralTracking", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<MbraddressService.GetMbrAddressSelectFieldsResponse>> GetMbrAddressSelectFields(MbraddressService.MbrAddressSelectFieldsRequest payload) =>
    RequestAsync<MbraddressService.MbrAddressSelectFieldsRequest,  Memberwise.Symxify.Models.Result<MbraddressService.GetMbrAddressSelectFieldsResponse>>("getMbrAddressSelectFields", payload, "mbraddress");


public Task<Memberwise.Symxify.Models.Result<MbraddressService.GetMbrAddressSelectFieldsFilterChildrenResponse>> GetMbrAddressSelectFieldsFilterChildren(MbraddressService.MbrAddressSelectFieldsFilterChildrenRequest payload) =>
    RequestAsync<MbraddressService.MbrAddressSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<MbraddressService.GetMbrAddressSelectFieldsFilterChildrenResponse>>("getMbrAddressSelectFieldsFilterChildren", payload, "mbraddress");


public Task<Memberwise.Symxify.Models.Result<MbraddressService.GetMbrAddressFmHistoryPagedListSelectFieldsResponse>> GetMbrAddressFmHistoryPagedListSelectFields(MbraddressService.MbrAddressFmHistoryPagedListSelectFieldsRequest payload) =>
    RequestAsync<MbraddressService.MbrAddressFmHistoryPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<MbraddressService.GetMbrAddressFmHistoryPagedListSelectFieldsResponse>>("getMbrAddressFmHistoryPagedListSelectFields", payload, "mbraddress");


public Task<Memberwise.Symxify.Models.Result<MbraddressService.SearchMbrAddressFmHistoryPagedSelectFieldsResponse>> SearchMbrAddressFmHistoryPagedSelectFields(MbraddressService.MbrAddressFmHistorySearchPagedSelectFieldsRequest payload) =>
    RequestAsync<MbraddressService.MbrAddressFmHistorySearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<MbraddressService.SearchMbrAddressFmHistoryPagedSelectFieldsResponse>>("searchMbrAddressFmHistoryPagedSelectFields", payload, "mbraddress");


public Task<Memberwise.Symxify.Models.Result<MbraddressService.UpdateMbrAddressByIdResponse>> UpdateMbrAddressById(MbraddressService.UpdateMbrAddressByIdRequest payload) =>
    RequestAsync<MbraddressService.UpdateMbrAddressByIdRequest,  Memberwise.Symxify.Models.Result<MbraddressService.UpdateMbrAddressByIdResponse>>("updateMbrAddressByID", payload, "mbraddress");


public Task<Memberwise.Symxify.Models.Result<MbraddressService.CreateMbrAddressResponse>> CreateMbrAddress(MbraddressService.CreateMbrAddressRequest payload) =>
    RequestAsync<MbraddressService.CreateMbrAddressRequest,  Memberwise.Symxify.Models.Result<MbraddressService.CreateMbrAddressResponse>>("createMbrAddress", payload, "mbraddress");


public Task<Memberwise.Symxify.Models.Result<CashLetterService.GetCashLetterSelectFieldsResponse>> GetCashLetterSelectFields(CashLetterService.CashLetterSelectFieldsRequest payload) =>
    RequestAsync<CashLetterService.CashLetterSelectFieldsRequest,  Memberwise.Symxify.Models.Result<CashLetterService.GetCashLetterSelectFieldsResponse>>("getCashLetterSelectFields", payload, "cashletter");


public Task<Memberwise.Symxify.Models.Result<BalancingService.ResetCashValueBalancesResponse>> ResetCashValueBalances(BalancingService.ResetCashValueBalancesRequest payload) =>
    RequestAsync<BalancingService.ResetCashValueBalancesRequest,  Memberwise.Symxify.Models.Result<BalancingService.ResetCashValueBalancesResponse>>("resetCashValueBalances", payload, "balancing");


public Task<Memberwise.Symxify.Models.Result<BalancingService.ResetDepositBalancesResponse>> ResetDepositBalances(BalancingService.ResetDepositBalancesRequest payload) =>
    RequestAsync<BalancingService.ResetDepositBalancesRequest,  Memberwise.Symxify.Models.Result<BalancingService.ResetDepositBalancesResponse>>("resetDepositBalances", payload, "balancing");


public Task<Memberwise.Symxify.Models.Result<BalancingService.ResetSecondPartyCheckBalancesResponse>> ResetSecondPartyCheckBalances(BalancingService.ResetSecondPartyCheckBalancesRequest payload) =>
    RequestAsync<BalancingService.ResetSecondPartyCheckBalancesRequest,  Memberwise.Symxify.Models.Result<BalancingService.ResetSecondPartyCheckBalancesResponse>>("resetSecondPartyCheckBalances", payload, "balancing");


public Task<Memberwise.Symxify.Models.Result<BalancingService.CashValueAdjustResponse>> CashValueAdjust(BalancingService.CashValueAdjustRequest payload) =>
    RequestAsync<BalancingService.CashValueAdjustRequest,  Memberwise.Symxify.Models.Result<BalancingService.CashValueAdjustResponse>>("cashValueAdjust", payload, "balancing");


public Task<Memberwise.Symxify.Models.Result<BalancingService.SecondPartyCheckAdjustResponse>> SecondPartyCheckAdjust(BalancingService.SecondPartyCheckAdjustRequest payload) =>
    RequestAsync<BalancingService.SecondPartyCheckAdjustRequest,  Memberwise.Symxify.Models.Result<BalancingService.SecondPartyCheckAdjustResponse>>("secondPartyCheckAdjust", payload, "balancing");


public Task<Memberwise.Symxify.Models.Result<BalancingService.CashValueReportResponse>> CashValueReport(BalancingService.CashValueReportRequest payload) =>
    RequestAsync<BalancingService.CashValueReportRequest,  Memberwise.Symxify.Models.Result<BalancingService.CashValueReportResponse>>("cashValueReport", payload, "balancing");


public Task<Memberwise.Symxify.Models.Result<BalancingService.VerifyDepositReportResponse>> VerifyDepositReport(BalancingService.VerifyDepositReportRequest payload) =>
    RequestAsync<BalancingService.VerifyDepositReportRequest,  Memberwise.Symxify.Models.Result<BalancingService.VerifyDepositReportResponse>>("verifyDepositReport", payload, "balancing");


public Task<Memberwise.Symxify.Models.Result<BalancingService.CheckDisbursedReportResponse>> CheckDisbursedReport(BalancingService.CheckDisbursedReportRequest payload) =>
    RequestAsync<BalancingService.CheckDisbursedReportRequest,  Memberwise.Symxify.Models.Result<BalancingService.CheckDisbursedReportResponse>>("checkDisbursedReport", payload, "balancing");


public Task<Memberwise.Symxify.Models.Result<FileManagementService.DownloadLetterFileResponse>> DownloadLetterFile(FileManagementService.DownloadRequest payload) =>
    RequestAsync<FileManagementService.DownloadRequest,  Memberwise.Symxify.Models.Result<FileManagementService.DownloadLetterFileResponse>>("downloadLetterFile", payload, "filemanagement");


public Task<Memberwise.Symxify.Models.Result<FileManagementService.UploadLetterFileResponse>> UploadLetterFile(FileManagementService.UploadRequest payload) =>
    RequestAsync<FileManagementService.UploadRequest,  Memberwise.Symxify.Models.Result<FileManagementService.UploadLetterFileResponse>>("uploadLetterFile", payload, "filemanagement");


public Task<Memberwise.Symxify.Models.Result<FileManagementService.DeleteLetterFileResponse>> DeleteLetterFile(FileManagementService.DeleteRequest payload) =>
    RequestAsync<FileManagementService.DeleteRequest,  Memberwise.Symxify.Models.Result<FileManagementService.DeleteLetterFileResponse>>("deleteLetterFile", payload, "filemanagement");


public Task<Memberwise.Symxify.Models.Result<FileManagementService.UploadDataFileResponse>> UploadDataFile(FileManagementService.UploadRequest payload) =>
    RequestAsync<FileManagementService.UploadRequest,  Memberwise.Symxify.Models.Result<FileManagementService.UploadDataFileResponse>>("uploadDataFile", payload, "filemanagement");


public Task<Memberwise.Symxify.Models.Result<FileManagementService.DownloadDataFileResponse>> DownloadDataFile(FileManagementService.DownloadRequest payload) =>
    RequestAsync<FileManagementService.DownloadRequest,  Memberwise.Symxify.Models.Result<FileManagementService.DownloadDataFileResponse>>("downloadDataFile", payload, "filemanagement");


public Task<Memberwise.Symxify.Models.Result<FileManagementService.DeleteDataFileResponse>> DeleteDataFile(FileManagementService.DeleteRequest payload) =>
    RequestAsync<FileManagementService.DeleteRequest,  Memberwise.Symxify.Models.Result<FileManagementService.DeleteDataFileResponse>>("deleteDataFile", payload, "filemanagement");


public Task<Memberwise.Symxify.Models.Result<CheckService.GetCheckSelectFieldsResponse>> GetCheckSelectFields(CheckService.CheckSelectFieldsRequest payload) =>
    RequestAsync<CheckService.CheckSelectFieldsRequest,  Memberwise.Symxify.Models.Result<CheckService.GetCheckSelectFieldsResponse>>("getCheckSelectFields", payload, "check");


public Task<Memberwise.Symxify.Models.Result<CheckService.GetCheckSelectFieldsFilterChildrenResponse>> GetCheckSelectFieldsFilterChildren(CheckService.CheckSelectFieldsFilterChildrenRequest payload) =>
    RequestAsync<CheckService.CheckSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<CheckService.GetCheckSelectFieldsFilterChildrenResponse>>("getCheckSelectFieldsFilterChildren", payload, "check");


public Task<Memberwise.Symxify.Models.Result<CheckService.GetCheckFmHistoryPagedListSelectFieldsResponse>> GetCheckFmHistoryPagedListSelectFields(CheckService.CheckFmHistoryPagedListSelectFieldsRequest payload) =>
    RequestAsync<CheckService.CheckFmHistoryPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<CheckService.GetCheckFmHistoryPagedListSelectFieldsResponse>>("getCheckFmHistoryPagedListSelectFields", payload, "check");


public Task<Memberwise.Symxify.Models.Result<CheckService.SearchCheckFmHistoryPagedSelectFieldsResponse>> SearchCheckFmHistoryPagedSelectFields(CheckService.CheckFmHistorySearchPagedSelectFieldsRequest payload) =>
    RequestAsync<CheckService.CheckFmHistorySearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<CheckService.SearchCheckFmHistoryPagedSelectFieldsResponse>>("searchCheckFmHistoryPagedSelectFields", payload, "check");


public Task<Memberwise.Symxify.Models.Result<CheckService.UpdateCheckByIdResponse>> UpdateCheckById(CheckService.UpdateCheckByIdRequest payload) =>
    RequestAsync<CheckService.UpdateCheckByIdRequest,  Memberwise.Symxify.Models.Result<CheckService.UpdateCheckByIdResponse>>("updateCheckByID", payload, "check");


public Task<Memberwise.Symxify.Models.Result<CheckService.CreateCheckResponse>> CreateCheck(CheckService.CreateCheckRequest payload) =>
    RequestAsync<CheckService.CreateCheckRequest,  Memberwise.Symxify.Models.Result<CheckService.CreateCheckResponse>>("createCheck", payload, "check");


public Task<Memberwise.Symxify.Models.Result<CheckService.DeleteCheckResponse>> DeleteCheck(CheckService.DeleteCheckRequest payload) =>
    RequestAsync<CheckService.DeleteCheckRequest,  Memberwise.Symxify.Models.Result<CheckService.DeleteCheckResponse>>("deleteCheck", payload, "check");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetParameterSelectFieldsResponse>> GetParameterSelectFields(ParameterService.ParameterSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.ParameterSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetParameterSelectFieldsResponse>>("getParameterSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetParameterSelectFieldsFilterChildrenResponse>> GetParameterSelectFieldsFilterChildren(ParameterService.ParameterSelectFieldsFilterChildrenRequest payload) =>
    RequestAsync<ParameterService.ParameterSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetParameterSelectFieldsFilterChildrenResponse>>("getParameterSelectFieldsFilterChildren", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetAccountDefaultSelectFieldsResponse>> GetAccountDefaultSelectFields(ParameterService.AccountDefaultSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.AccountDefaultSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetAccountDefaultSelectFieldsResponse>>("getAccountDefaultSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetAccountDefaultPagedListSelectFieldsResponse>> GetAccountDefaultPagedListSelectFields(ParameterService.AccountDefaultPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.AccountDefaultPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetAccountDefaultPagedListSelectFieldsResponse>>("getAccountDefaultPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchAccountDefaultPagedSelectFieldsResponse>> SearchAccountDefaultPagedSelectFields(ParameterService.AccountDefaultSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.AccountDefaultSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchAccountDefaultPagedSelectFieldsResponse>>("searchAccountDefaultPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetAccountFieldNameSelectFieldsResponse>> GetAccountFieldNameSelectFields(ParameterService.AccountFieldNameSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.AccountFieldNameSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetAccountFieldNameSelectFieldsResponse>>("getAccountFieldNameSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetAccountFieldNamePagedListSelectFieldsResponse>> GetAccountFieldNamePagedListSelectFields(ParameterService.AccountFieldNamePagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.AccountFieldNamePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetAccountFieldNamePagedListSelectFieldsResponse>>("getAccountFieldNamePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchAccountFieldNamePagedSelectFieldsResponse>> SearchAccountFieldNamePagedSelectFields(ParameterService.AccountFieldNameSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.AccountFieldNameSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchAccountFieldNamePagedSelectFieldsResponse>>("searchAccountFieldNamePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetAcctLimitSelectFieldsResponse>> GetAcctLimitSelectFields(ParameterService.AcctLimitSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.AcctLimitSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetAcctLimitSelectFieldsResponse>>("getAcctLimitSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetAcctMembGrpDescSelectFieldsResponse>> GetAcctMembGrpDescSelectFields(ParameterService.AcctMembGrpDescSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.AcctMembGrpDescSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetAcctMembGrpDescSelectFieldsResponse>>("getAcctMembGrpDescSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetAcctMembGrpDescPagedListSelectFieldsResponse>> GetAcctMembGrpDescPagedListSelectFields(ParameterService.AcctMembGrpDescPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.AcctMembGrpDescPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetAcctMembGrpDescPagedListSelectFieldsResponse>>("getAcctMembGrpDescPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchAcctMembGrpDescPagedSelectFieldsResponse>> SearchAcctMembGrpDescPagedSelectFields(ParameterService.AcctMembGrpDescSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.AcctMembGrpDescSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchAcctMembGrpDescPagedSelectFieldsResponse>>("searchAcctMembGrpDescPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetAcctRelCodeDescSelectFieldsResponse>> GetAcctRelCodeDescSelectFields(ParameterService.AcctRelCodeDescSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.AcctRelCodeDescSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetAcctRelCodeDescSelectFieldsResponse>>("getAcctRelCodeDescSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetAcctTrackingTypeSelectFieldsResponse>> GetAcctTrackingTypeSelectFields(ParameterService.AcctTrackingTypeSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.AcctTrackingTypeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetAcctTrackingTypeSelectFieldsResponse>>("getAcctTrackingTypeSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetAcctTrackingTypePagedListSelectFieldsResponse>> GetAcctTrackingTypePagedListSelectFields(ParameterService.AcctTrackingTypePagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.AcctTrackingTypePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetAcctTrackingTypePagedListSelectFieldsResponse>>("getAcctTrackingTypePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchAcctTrackingTypePagedSelectFieldsResponse>> SearchAcctTrackingTypePagedSelectFields(ParameterService.AcctTrackingTypeSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.AcctTrackingTypeSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchAcctTrackingTypePagedSelectFieldsResponse>>("searchAcctTrackingTypePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetAcctTypeNameSelectFieldsResponse>> GetAcctTypeNameSelectFields(ParameterService.AcctTypeNameSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.AcctTypeNameSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetAcctTypeNameSelectFieldsResponse>>("getAcctTypeNameSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetAcctTypeNamePagedListSelectFieldsResponse>> GetAcctTypeNamePagedListSelectFields(ParameterService.AcctTypeNamePagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.AcctTypeNamePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetAcctTypeNamePagedListSelectFieldsResponse>>("getAcctTypeNamePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchAcctTypeNamePagedSelectFieldsResponse>> SearchAcctTypeNamePagedSelectFields(ParameterService.AcctTypeNameSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.AcctTypeNameSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchAcctTypeNamePagedSelectFieldsResponse>>("searchAcctTypeNamePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetAcsGlobalSelectFieldsResponse>> GetAcsGlobalSelectFields(ParameterService.AcsGlobalSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.AcsGlobalSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetAcsGlobalSelectFieldsResponse>>("getAcsGlobalSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetAcsServiceSelectFieldsResponse>> GetAcsServiceSelectFields(ParameterService.AcsServiceSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.AcsServiceSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetAcsServiceSelectFieldsResponse>>("getAcsServiceSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetAcsServicePagedListSelectFieldsResponse>> GetAcsServicePagedListSelectFields(ParameterService.AcsServicePagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.AcsServicePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetAcsServicePagedListSelectFieldsResponse>>("getAcsServicePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchAcsServicePagedSelectFieldsResponse>> SearchAcsServicePagedSelectFields(ParameterService.AcsServiceSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.AcsServiceSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchAcsServicePagedSelectFieldsResponse>>("searchAcsServicePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetActivityFmSelectFieldsResponse>> GetActivityFmSelectFields(ParameterService.ActivityFmSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.ActivityFmSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetActivityFmSelectFieldsResponse>>("getActivityFmSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetAnalysisFloatSelectFieldsResponse>> GetAnalysisFloatSelectFields(ParameterService.AnalysisFloatSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.AnalysisFloatSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetAnalysisFloatSelectFieldsResponse>>("getAnalysisFloatSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetAnalysisFloatPagedListSelectFieldsResponse>> GetAnalysisFloatPagedListSelectFields(ParameterService.AnalysisFloatPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.AnalysisFloatPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetAnalysisFloatPagedListSelectFieldsResponse>>("getAnalysisFloatPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchAnalysisFloatPagedSelectFieldsResponse>> SearchAnalysisFloatPagedSelectFields(ParameterService.AnalysisFloatSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.AnalysisFloatSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchAnalysisFloatPagedSelectFieldsResponse>>("searchAnalysisFloatPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetAnalysisGlobalSelectFieldsResponse>> GetAnalysisGlobalSelectFields(ParameterService.AnalysisGlobalSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.AnalysisGlobalSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetAnalysisGlobalSelectFieldsResponse>>("getAnalysisGlobalSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetAnalysisPlanSelectFieldsResponse>> GetAnalysisPlanSelectFields(ParameterService.AnalysisPlanSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.AnalysisPlanSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetAnalysisPlanSelectFieldsResponse>>("getAnalysisPlanSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetAnalysisPlanPagedListSelectFieldsResponse>> GetAnalysisPlanPagedListSelectFields(ParameterService.AnalysisPlanPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.AnalysisPlanPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetAnalysisPlanPagedListSelectFieldsResponse>>("getAnalysisPlanPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchAnalysisPlanPagedSelectFieldsResponse>> SearchAnalysisPlanPagedSelectFields(ParameterService.AnalysisPlanSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.AnalysisPlanSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchAnalysisPlanPagedSelectFieldsResponse>>("searchAnalysisPlanPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetApMiscSelectFieldsResponse>> GetApMiscSelectFields(ParameterService.ApMiscSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.ApMiscSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetApMiscSelectFieldsResponse>>("getApMiscSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetApPmtTermsTablePagedListSelectFieldsResponse>> GetApPmtTermsTablePagedListSelectFields(ParameterService.ApPmtTermsTablePagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.ApPmtTermsTablePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetApPmtTermsTablePagedListSelectFieldsResponse>>("getApPmtTermsTablePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchApPmtTermsTablePagedSelectFieldsResponse>> SearchApPmtTermsTablePagedSelectFields(ParameterService.ApPmtTermsTableSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.ApPmtTermsTableSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchApPmtTermsTablePagedSelectFieldsResponse>>("searchApPmtTermsTablePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetApWorkFlowSelectFieldsResponse>> GetApWorkFlowSelectFields(ParameterService.ApWorkFlowSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.ApWorkFlowSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetApWorkFlowSelectFieldsResponse>>("getApWorkFlowSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetApWorkFlowPagedListSelectFieldsResponse>> GetApWorkFlowPagedListSelectFields(ParameterService.ApWorkFlowPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.ApWorkFlowPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetApWorkFlowPagedListSelectFieldsResponse>>("getApWorkFlowPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchApWorkFlowPagedSelectFieldsResponse>> SearchApWorkFlowPagedSelectFields(ParameterService.ApWorkFlowSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.ApWorkFlowSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchApWorkFlowPagedSelectFieldsResponse>>("searchApWorkFlowPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetAtmSelectFieldsResponse>> GetAtmSelectFields(ParameterService.AtmSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.AtmSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetAtmSelectFieldsResponse>>("getAtmSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetBatchRcSelectFieldsResponse>> GetBatchRcSelectFields(ParameterService.BatchRcSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.BatchRcSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetBatchRcSelectFieldsResponse>>("getBatchRcSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetBatchRcPagedListSelectFieldsResponse>> GetBatchRcPagedListSelectFields(ParameterService.BatchRcPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.BatchRcPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetBatchRcPagedListSelectFieldsResponse>>("getBatchRcPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchBatchRcPagedSelectFieldsResponse>> SearchBatchRcPagedSelectFields(ParameterService.BatchRcSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.BatchRcSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchBatchRcPagedSelectFieldsResponse>>("searchBatchRcPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetCardDefaultSelectFieldsResponse>> GetCardDefaultSelectFields(ParameterService.CardDefaultSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.CardDefaultSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetCardDefaultSelectFieldsResponse>>("getCardDefaultSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetCardDefaultPagedListSelectFieldsResponse>> GetCardDefaultPagedListSelectFields(ParameterService.CardDefaultPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.CardDefaultPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetCardDefaultPagedListSelectFieldsResponse>>("getCardDefaultPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchCardDefaultPagedSelectFieldsResponse>> SearchCardDefaultPagedSelectFields(ParameterService.CardDefaultSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.CardDefaultSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchCardDefaultPagedSelectFieldsResponse>>("searchCardDefaultPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetCardWizSelectFieldsResponse>> GetCardWizSelectFields(ParameterService.CardWizSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.CardWizSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetCardWizSelectFieldsResponse>>("getCardWizSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetCardWizPagedListSelectFieldsResponse>> GetCardWizPagedListSelectFields(ParameterService.CardWizPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.CardWizPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetCardWizPagedListSelectFieldsResponse>>("getCardWizPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchCardWizPagedSelectFieldsResponse>> SearchCardWizPagedSelectFields(ParameterService.CardWizSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.CardWizSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchCardWizPagedSelectFieldsResponse>>("searchCardWizPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetCdmSelectFieldsResponse>> GetCdmSelectFields(ParameterService.CdmSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.CdmSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetCdmSelectFieldsResponse>>("getCdmSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetCdmPagedListSelectFieldsResponse>> GetCdmPagedListSelectFields(ParameterService.CdmPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.CdmPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetCdmPagedListSelectFieldsResponse>>("getCdmPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchCdmPagedSelectFieldsResponse>> SearchCdmPagedSelectFields(ParameterService.CdmSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.CdmSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchCdmPagedSelectFieldsResponse>>("searchCdmPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetCdmCommonSelectFieldsResponse>> GetCdmCommonSelectFields(ParameterService.CdmCommonSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.CdmCommonSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetCdmCommonSelectFieldsResponse>>("getCdmCommonSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetCheckOrderDefaultSelectFieldsResponse>> GetCheckOrderDefaultSelectFields(ParameterService.CheckOrderDefaultSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.CheckOrderDefaultSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetCheckOrderDefaultSelectFieldsResponse>>("getCheckOrderDefaultSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetCheckOrderDefaultPagedListSelectFieldsResponse>> GetCheckOrderDefaultPagedListSelectFields(ParameterService.CheckOrderDefaultPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.CheckOrderDefaultPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetCheckOrderDefaultPagedListSelectFieldsResponse>>("getCheckOrderDefaultPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchCheckOrderDefaultPagedSelectFieldsResponse>> SearchCheckOrderDefaultPagedSelectFields(ParameterService.CheckOrderDefaultSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.CheckOrderDefaultSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchCheckOrderDefaultPagedSelectFieldsResponse>>("searchCheckOrderDefaultPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetCollateralTypeSelectFieldsResponse>> GetCollateralTypeSelectFields(ParameterService.CollateralTypeSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.CollateralTypeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetCollateralTypeSelectFieldsResponse>>("getCollateralTypeSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetCollateralTypePagedListSelectFieldsResponse>> GetCollateralTypePagedListSelectFields(ParameterService.CollateralTypePagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.CollateralTypePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetCollateralTypePagedListSelectFieldsResponse>>("getCollateralTypePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchCollateralTypePagedSelectFieldsResponse>> SearchCollateralTypePagedSelectFields(ParameterService.CollateralTypeSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.CollateralTypeSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchCollateralTypePagedSelectFieldsResponse>>("searchCollateralTypePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetCollatrlTrackingTypeSelectFieldsResponse>> GetCollatrlTrackingTypeSelectFields(ParameterService.CollatrlTrackingTypeSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.CollatrlTrackingTypeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetCollatrlTrackingTypeSelectFieldsResponse>>("getCollatrlTrackingTypeSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetCollatrlTrackingTypePagedListSelectFieldsResponse>> GetCollatrlTrackingTypePagedListSelectFields(ParameterService.CollatrlTrackingTypePagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.CollatrlTrackingTypePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetCollatrlTrackingTypePagedListSelectFieldsResponse>>("getCollatrlTrackingTypePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchCollatrlTrackingTypePagedSelectFieldsResponse>> SearchCollatrlTrackingTypePagedSelectFields(ParameterService.CollatrlTrackingTypeSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.CollatrlTrackingTypeSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchCollatrlTrackingTypePagedSelectFieldsResponse>>("searchCollatrlTrackingTypePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetCommentSelectFieldsResponse>> GetCommentSelectFields(ParameterService.CommentSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.CommentSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetCommentSelectFieldsResponse>>("getCommentSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetCommentPagedListSelectFieldsResponse>> GetCommentPagedListSelectFields(ParameterService.CommentPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.CommentPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetCommentPagedListSelectFieldsResponse>>("getCommentPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchCommentPagedSelectFieldsResponse>> SearchCommentPagedSelectFields(ParameterService.CommentSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.CommentSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchCommentPagedSelectFieldsResponse>>("searchCommentPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetConsoleFmSelectFieldsResponse>> GetConsoleFmSelectFields(ParameterService.ConsoleFmSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.ConsoleFmSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetConsoleFmSelectFieldsResponse>>("getConsoleFmSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetCpLetterSelectFieldsResponse>> GetCpLetterSelectFields(ParameterService.CpLetterSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.CpLetterSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetCpLetterSelectFieldsResponse>>("getCpLetterSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetCpLetterPagedListSelectFieldsResponse>> GetCpLetterPagedListSelectFields(ParameterService.CpLetterPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.CpLetterPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetCpLetterPagedListSelectFieldsResponse>>("getCpLetterPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchCpLetterPagedSelectFieldsResponse>> SearchCpLetterPagedSelectFields(ParameterService.CpLetterSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.CpLetterSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchCpLetterPagedSelectFieldsResponse>>("searchCpLetterPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetCpWorkCardSelectFieldsResponse>> GetCpWorkCardSelectFields(ParameterService.CpWorkCardSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.CpWorkCardSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetCpWorkCardSelectFieldsResponse>>("getCpWorkCardSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetCreditReportSelectFieldsResponse>> GetCreditReportSelectFields(ParameterService.CreditReportSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.CreditReportSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetCreditReportSelectFieldsResponse>>("getCreditReportSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetCrsSelectFieldsResponse>> GetCrsSelectFields(ParameterService.CrsSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.CrsSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetCrsSelectFieldsResponse>>("getCrsSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetCurrencyCtrlSelectFieldsResponse>> GetCurrencyCtrlSelectFields(ParameterService.CurrencyCtrlSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.CurrencyCtrlSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetCurrencyCtrlSelectFieldsResponse>>("getCurrencyCtrlSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetDailyPostSelectFieldsResponse>> GetDailyPostSelectFields(ParameterService.DailyPostSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.DailyPostSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetDailyPostSelectFieldsResponse>>("getDailyPostSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetDealerStatementSelectFieldsResponse>> GetDealerStatementSelectFields(ParameterService.DealerStatementSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.DealerStatementSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetDealerStatementSelectFieldsResponse>>("getDealerStatementSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetDebtRatioSelectFieldsResponse>> GetDebtRatioSelectFields(ParameterService.DebtRatioSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.DebtRatioSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetDebtRatioSelectFieldsResponse>>("getDebtRatioSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetDebtRatioPagedListSelectFieldsResponse>> GetDebtRatioPagedListSelectFields(ParameterService.DebtRatioPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.DebtRatioPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetDebtRatioPagedListSelectFieldsResponse>>("getDebtRatioPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchDebtRatioPagedSelectFieldsResponse>> SearchDebtRatioPagedSelectFields(ParameterService.DebtRatioSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.DebtRatioSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchDebtRatioPagedSelectFieldsResponse>>("searchDebtRatioPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetDisclosureSelectFieldsResponse>> GetDisclosureSelectFields(ParameterService.DisclosureSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.DisclosureSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetDisclosureSelectFieldsResponse>>("getDisclosureSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetDivIndexLocalSelectFieldsResponse>> GetDivIndexLocalSelectFields(ParameterService.DivIndexLocalSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.DivIndexLocalSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetDivIndexLocalSelectFieldsResponse>>("getDivIndexLocalSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetDivIndexLocalPagedListSelectFieldsResponse>> GetDivIndexLocalPagedListSelectFields(ParameterService.DivIndexLocalPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.DivIndexLocalPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetDivIndexLocalPagedListSelectFieldsResponse>>("getDivIndexLocalPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchDivIndexLocalPagedSelectFieldsResponse>> SearchDivIndexLocalPagedSelectFields(ParameterService.DivIndexLocalSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.DivIndexLocalSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchDivIndexLocalPagedSelectFieldsResponse>>("searchDivIndexLocalPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetDivTableSelectFieldsResponse>> GetDivTableSelectFields(ParameterService.DivTableSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.DivTableSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetDivTableSelectFieldsResponse>>("getDivTableSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetDivTablePagedListSelectFieldsResponse>> GetDivTablePagedListSelectFields(ParameterService.DivTablePagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.DivTablePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetDivTablePagedListSelectFieldsResponse>>("getDivTablePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchDivTablePagedSelectFieldsResponse>> SearchDivTablePagedSelectFields(ParameterService.DivTableSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.DivTableSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchDivTablePagedSelectFieldsResponse>>("searchDivTablePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetDocExcpNoticeSelectFieldsResponse>> GetDocExcpNoticeSelectFields(ParameterService.DocExcpNoticeSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.DocExcpNoticeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetDocExcpNoticeSelectFieldsResponse>>("getDocExcpNoticeSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetDocExcpNoticePagedListSelectFieldsResponse>> GetDocExcpNoticePagedListSelectFields(ParameterService.DocExcpNoticePagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.DocExcpNoticePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetDocExcpNoticePagedListSelectFieldsResponse>>("getDocExcpNoticePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchDocExcpNoticePagedSelectFieldsResponse>> SearchDocExcpNoticePagedSelectFields(ParameterService.DocExcpNoticeSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.DocExcpNoticeSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchDocExcpNoticePagedSelectFieldsResponse>>("searchDocExcpNoticePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetDocTypeDefaultSelectFieldsResponse>> GetDocTypeDefaultSelectFields(ParameterService.DocTypeDefaultSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.DocTypeDefaultSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetDocTypeDefaultSelectFieldsResponse>>("getDocTypeDefaultSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetDocTypeDefaultPagedListSelectFieldsResponse>> GetDocTypeDefaultPagedListSelectFields(ParameterService.DocTypeDefaultPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.DocTypeDefaultPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetDocTypeDefaultPagedListSelectFieldsResponse>>("getDocTypeDefaultPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchDocTypeDefaultPagedSelectFieldsResponse>> SearchDocTypeDefaultPagedSelectFields(ParameterService.DocTypeDefaultSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.DocTypeDefaultSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchDocTypeDefaultPagedSelectFieldsResponse>>("searchDocTypeDefaultPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetDocumentNumberSelectFieldsResponse>> GetDocumentNumberSelectFields(ParameterService.DocumentNumberSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.DocumentNumberSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetDocumentNumberSelectFieldsResponse>>("getDocumentNumberSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetEpisysDbExtractSelectFieldsResponse>> GetEpisysDbExtractSelectFields(ParameterService.EpisysDbExtractSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.EpisysDbExtractSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetEpisysDbExtractSelectFieldsResponse>>("getEpisysDbExtractSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetEscrowAnalysisSelectFieldsResponse>> GetEscrowAnalysisSelectFields(ParameterService.EscrowAnalysisSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.EscrowAnalysisSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetEscrowAnalysisSelectFieldsResponse>>("getEscrowAnalysisSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetEscrowTypeSelectFieldsResponse>> GetEscrowTypeSelectFields(ParameterService.EscrowTypeSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.EscrowTypeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetEscrowTypeSelectFieldsResponse>>("getEscrowTypeSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetEscrowTypePagedListSelectFieldsResponse>> GetEscrowTypePagedListSelectFields(ParameterService.EscrowTypePagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.EscrowTypePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetEscrowTypePagedListSelectFieldsResponse>>("getEscrowTypePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchEscrowTypePagedSelectFieldsResponse>> SearchEscrowTypePagedSelectFields(ParameterService.EscrowTypeSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.EscrowTypeSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchEscrowTypePagedSelectFieldsResponse>>("searchEscrowTypePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetExtLoanSelectFieldsResponse>> GetExtLoanSelectFields(ParameterService.ExtLoanSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.ExtLoanSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetExtLoanSelectFieldsResponse>>("getExtLoanSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetExtLoanPagedListSelectFieldsResponse>> GetExtLoanPagedListSelectFields(ParameterService.ExtLoanPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.ExtLoanPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetExtLoanPagedListSelectFieldsResponse>>("getExtLoanPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchExtLoanPagedSelectFieldsResponse>> SearchExtLoanPagedSelectFields(ParameterService.ExtLoanSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.ExtLoanSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchExtLoanPagedSelectFieldsResponse>>("searchExtLoanPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetGlCategorySelectFieldsResponse>> GetGlCategorySelectFields(ParameterService.GlCategorySelectFieldsRequest payload) =>
    RequestAsync<ParameterService.GlCategorySelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetGlCategorySelectFieldsResponse>>("getGlCategorySelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetGlCategoryPagedListSelectFieldsResponse>> GetGlCategoryPagedListSelectFields(ParameterService.GlCategoryPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.GlCategoryPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetGlCategoryPagedListSelectFieldsResponse>>("getGlCategoryPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchGlCategoryPagedSelectFieldsResponse>> SearchGlCategoryPagedSelectFields(ParameterService.GlCategorySearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.GlCategorySearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchGlCategoryPagedSelectFieldsResponse>>("searchGlCategoryPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetGlCodeSelectFieldsResponse>> GetGlCodeSelectFields(ParameterService.GlCodeSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.GlCodeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetGlCodeSelectFieldsResponse>>("getGlCodeSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetGlCodePagedListSelectFieldsResponse>> GetGlCodePagedListSelectFields(ParameterService.GlCodePagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.GlCodePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetGlCodePagedListSelectFieldsResponse>>("getGlCodePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchGlCodePagedSelectFieldsResponse>> SearchGlCodePagedSelectFields(ParameterService.GlCodeSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.GlCodeSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchGlCodePagedSelectFieldsResponse>>("searchGlCodePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetGlTableSelectFieldsResponse>> GetGlTableSelectFields(ParameterService.GlTableSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.GlTableSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetGlTableSelectFieldsResponse>>("getGlTableSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetGlTablePagedListSelectFieldsResponse>> GetGlTablePagedListSelectFields(ParameterService.GlTablePagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.GlTablePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetGlTablePagedListSelectFieldsResponse>>("getGlTablePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchGlTablePagedSelectFieldsResponse>> SearchGlTablePagedSelectFields(ParameterService.GlTableSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.GlTableSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchGlTablePagedSelectFieldsResponse>>("searchGlTablePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetGlTrackingTypeSelectFieldsResponse>> GetGlTrackingTypeSelectFields(ParameterService.GlTrackingTypeSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.GlTrackingTypeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetGlTrackingTypeSelectFieldsResponse>>("getGlTrackingTypeSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetGlTrackingTypePagedListSelectFieldsResponse>> GetGlTrackingTypePagedListSelectFields(ParameterService.GlTrackingTypePagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.GlTrackingTypePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetGlTrackingTypePagedListSelectFieldsResponse>>("getGlTrackingTypePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchGlTrackingTypePagedSelectFieldsResponse>> SearchGlTrackingTypePagedSelectFields(ParameterService.GlTrackingTypeSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.GlTrackingTypeSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchGlTrackingTypePagedSelectFieldsResponse>>("searchGlTrackingTypePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetGlxLateSelectFieldsResponse>> GetGlxLateSelectFields(ParameterService.GlxLateSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.GlxLateSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetGlxLateSelectFieldsResponse>>("getGlxLateSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetGlxLatePagedListSelectFieldsResponse>> GetGlxLatePagedListSelectFields(ParameterService.GlxLatePagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.GlxLatePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetGlxLatePagedListSelectFieldsResponse>>("getGlxLatePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchGlxLatePagedSelectFieldsResponse>> SearchGlxLatePagedSelectFields(ParameterService.GlxLateSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.GlxLateSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchGlxLatePagedSelectFieldsResponse>>("searchGlxLatePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetIdentIdTypeDescSelectFieldsResponse>> GetIdentIdTypeDescSelectFields(ParameterService.IdentIdTypeDescSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.IdentIdTypeDescSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetIdentIdTypeDescSelectFieldsResponse>>("getIdentIdTypeDescSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetImagingSelectFieldsResponse>> GetImagingSelectFields(ParameterService.ImagingSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.ImagingSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetImagingSelectFieldsResponse>>("getImagingSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetInqDefinitionSelectFieldsResponse>> GetInqDefinitionSelectFields(ParameterService.InqDefinitionSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.InqDefinitionSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetInqDefinitionSelectFieldsResponse>>("getInqDefinitionSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetInqDefinitionPagedListSelectFieldsResponse>> GetInqDefinitionPagedListSelectFields(ParameterService.InqDefinitionPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.InqDefinitionPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetInqDefinitionPagedListSelectFieldsResponse>>("getInqDefinitionPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchInqDefinitionPagedSelectFieldsResponse>> SearchInqDefinitionPagedSelectFields(ParameterService.InqDefinitionSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.InqDefinitionSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchInqDefinitionPagedSelectFieldsResponse>>("searchInqDefinitionPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetInsTableSelectFieldsResponse>> GetInsTableSelectFields(ParameterService.InsTableSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.InsTableSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetInsTableSelectFieldsResponse>>("getInsTableSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetInsTablePagedListSelectFieldsResponse>> GetInsTablePagedListSelectFields(ParameterService.InsTablePagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.InsTablePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetInsTablePagedListSelectFieldsResponse>>("getInsTablePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchInsTablePagedSelectFieldsResponse>> SearchInsTablePagedSelectFields(ParameterService.InsTableSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.InsTableSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchInsTablePagedSelectFieldsResponse>>("searchInsTablePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetInsTypeSelectFieldsResponse>> GetInsTypeSelectFields(ParameterService.InsTypeSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.InsTypeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetInsTypeSelectFieldsResponse>>("getInsTypeSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetInsTypePagedListSelectFieldsResponse>> GetInsTypePagedListSelectFields(ParameterService.InsTypePagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.InsTypePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetInsTypePagedListSelectFieldsResponse>>("getInsTypePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchInsTypePagedSelectFieldsResponse>> SearchInsTypePagedSelectFields(ParameterService.InsTypeSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.InsTypeSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchInsTypePagedSelectFieldsResponse>>("searchInsTypePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetInstitutionSelectFieldsResponse>> GetInstitutionSelectFields(ParameterService.InstitutionSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.InstitutionSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetInstitutionSelectFieldsResponse>>("getInstitutionSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetInstitutionPagedListSelectFieldsResponse>> GetInstitutionPagedListSelectFields(ParameterService.InstitutionPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.InstitutionPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetInstitutionPagedListSelectFieldsResponse>>("getInstitutionPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchInstitutionPagedSelectFieldsResponse>> SearchInstitutionPagedSelectFields(ParameterService.InstitutionSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.InstitutionSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchInstitutionPagedSelectFieldsResponse>>("searchInstitutionPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetIntIndexSelectFieldsResponse>> GetIntIndexSelectFields(ParameterService.IntIndexSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.IntIndexSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetIntIndexSelectFieldsResponse>>("getIntIndexSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetIntIndexPagedListSelectFieldsResponse>> GetIntIndexPagedListSelectFields(ParameterService.IntIndexPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.IntIndexPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetIntIndexPagedListSelectFieldsResponse>>("getIntIndexPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchIntIndexPagedSelectFieldsResponse>> SearchIntIndexPagedSelectFields(ParameterService.IntIndexSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.IntIndexSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchIntIndexPagedSelectFieldsResponse>>("searchIntIndexPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetIntTypeSelectFieldsResponse>> GetIntTypeSelectFields(ParameterService.IntTypeSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.IntTypeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetIntTypeSelectFieldsResponse>>("getIntTypeSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetIntTypePagedListSelectFieldsResponse>> GetIntTypePagedListSelectFields(ParameterService.IntTypePagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.IntTypePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetIntTypePagedListSelectFieldsResponse>>("getIntTypePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchIntTypePagedSelectFieldsResponse>> SearchIntTypePagedSelectFields(ParameterService.IntTypeSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.IntTypeSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchIntTypePagedSelectFieldsResponse>>("searchIntTypePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetInventoryCopiedFldsSelectFieldsResponse>> GetInventoryCopiedFldsSelectFields(ParameterService.InventoryCopiedFldsSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.InventoryCopiedFldsSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetInventoryCopiedFldsSelectFieldsResponse>>("getInventoryCopiedFldsSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetInventoryCopiedFldsPagedListSelectFieldsResponse>> GetInventoryCopiedFldsPagedListSelectFields(ParameterService.InventoryCopiedFldsPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.InventoryCopiedFldsPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetInventoryCopiedFldsPagedListSelectFieldsResponse>>("getInventoryCopiedFldsPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchInventoryCopiedFldsPagedSelectFieldsResponse>> SearchInventoryCopiedFldsPagedSelectFields(ParameterService.InventoryCopiedFldsSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.InventoryCopiedFldsSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchInventoryCopiedFldsPagedSelectFieldsResponse>>("searchInventoryCopiedFldsPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetInventoryDefaultSelectFieldsResponse>> GetInventoryDefaultSelectFields(ParameterService.InventoryDefaultSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.InventoryDefaultSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetInventoryDefaultSelectFieldsResponse>>("getInventoryDefaultSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetInventoryDefaultPagedListSelectFieldsResponse>> GetInventoryDefaultPagedListSelectFields(ParameterService.InventoryDefaultPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.InventoryDefaultPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetInventoryDefaultPagedListSelectFieldsResponse>>("getInventoryDefaultPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchInventoryDefaultPagedSelectFieldsResponse>> SearchInventoryDefaultPagedSelectFields(ParameterService.InventoryDefaultSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.InventoryDefaultSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchInventoryDefaultPagedSelectFieldsResponse>>("searchInventoryDefaultPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetInventoryFieldNameSelectFieldsResponse>> GetInventoryFieldNameSelectFields(ParameterService.InventoryFieldNameSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.InventoryFieldNameSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetInventoryFieldNameSelectFieldsResponse>>("getInventoryFieldNameSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetInventoryFieldNamePagedListSelectFieldsResponse>> GetInventoryFieldNamePagedListSelectFields(ParameterService.InventoryFieldNamePagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.InventoryFieldNamePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetInventoryFieldNamePagedListSelectFieldsResponse>>("getInventoryFieldNamePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchInventoryFieldNamePagedSelectFieldsResponse>> SearchInventoryFieldNamePagedSelectFields(ParameterService.InventoryFieldNameSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.InventoryFieldNameSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchInventoryFieldNamePagedSelectFieldsResponse>>("searchInventoryFieldNamePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetInventoryGeneralSelectFieldsResponse>> GetInventoryGeneralSelectFields(ParameterService.InventoryGeneralSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.InventoryGeneralSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetInventoryGeneralSelectFieldsResponse>>("getInventoryGeneralSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetInventoryTypeSelectFieldsResponse>> GetInventoryTypeSelectFields(ParameterService.InventoryTypeSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.InventoryTypeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetInventoryTypeSelectFieldsResponse>>("getInventoryTypeSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetInventoryTypePagedListSelectFieldsResponse>> GetInventoryTypePagedListSelectFields(ParameterService.InventoryTypePagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.InventoryTypePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetInventoryTypePagedListSelectFieldsResponse>>("getInventoryTypePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchInventoryTypePagedSelectFieldsResponse>> SearchInventoryTypePagedSelectFields(ParameterService.InventoryTypeSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.InventoryTypeSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchInventoryTypePagedSelectFieldsResponse>>("searchInventoryTypePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetIrsBkupWithholdSelectFieldsResponse>> GetIrsBkupWithholdSelectFields(ParameterService.IrsBkupWithholdSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.IrsBkupWithholdSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetIrsBkupWithholdSelectFieldsResponse>>("getIrsBkupWithholdSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetIrsContriLimitSelectFieldsResponse>> GetIrsContriLimitSelectFields(ParameterService.IrsContriLimitSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.IrsContriLimitSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetIrsContriLimitSelectFieldsResponse>>("getIrsContriLimitSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetItcFraudSelectFieldsResponse>> GetItcFraudSelectFields(ParameterService.ItcFraudSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.ItcFraudSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetItcFraudSelectFieldsResponse>>("getItcFraudSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetItcFraudPagedListSelectFieldsResponse>> GetItcFraudPagedListSelectFields(ParameterService.ItcFraudPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.ItcFraudPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetItcFraudPagedListSelectFieldsResponse>>("getItcFraudPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchItcFraudPagedSelectFieldsResponse>> SearchItcFraudPagedSelectFields(ParameterService.ItcFraudSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.ItcFraudSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchItcFraudPagedSelectFieldsResponse>>("searchItcFraudPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetItcInstallationSelectFieldsResponse>> GetItcInstallationSelectFields(ParameterService.ItcInstallationSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.ItcInstallationSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetItcInstallationSelectFieldsResponse>>("getItcInstallationSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetItcInstallationPagedListSelectFieldsResponse>> GetItcInstallationPagedListSelectFields(ParameterService.ItcInstallationPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.ItcInstallationPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetItcInstallationPagedListSelectFieldsResponse>>("getItcInstallationPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchItcInstallationPagedSelectFieldsResponse>> SearchItcInstallationPagedSelectFields(ParameterService.ItcInstallationSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.ItcInstallationSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchItcInstallationPagedSelectFieldsResponse>>("searchItcInstallationPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetLateChgSelectFieldsResponse>> GetLateChgSelectFields(ParameterService.LateChgSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.LateChgSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetLateChgSelectFieldsResponse>>("getLateChgSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetLateChgPagedListSelectFieldsResponse>> GetLateChgPagedListSelectFields(ParameterService.LateChgPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.LateChgPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetLateChgPagedListSelectFieldsResponse>>("getLateChgPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchLateChgPagedSelectFieldsResponse>> SearchLateChgPagedSelectFields(ParameterService.LateChgSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.LateChgSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchLateChgPagedSelectFieldsResponse>>("searchLateChgPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetLnSegmentDefaultSelectFieldsResponse>> GetLnSegmentDefaultSelectFields(ParameterService.LnSegmentDefaultSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.LnSegmentDefaultSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetLnSegmentDefaultSelectFieldsResponse>>("getLnSegmentDefaultSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetLnSegmentDefaultPagedListSelectFieldsResponse>> GetLnSegmentDefaultPagedListSelectFields(ParameterService.LnSegmentDefaultPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.LnSegmentDefaultPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetLnSegmentDefaultPagedListSelectFieldsResponse>>("getLnSegmentDefaultPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchLnSegmentDefaultPagedSelectFieldsResponse>> SearchLnSegmentDefaultPagedSelectFields(ParameterService.LnSegmentDefaultSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.LnSegmentDefaultSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchLnSegmentDefaultPagedSelectFieldsResponse>>("searchLnSegmentDefaultPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetLoanAppCopiedFldsSelectFieldsResponse>> GetLoanAppCopiedFldsSelectFields(ParameterService.LoanAppCopiedFldsSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.LoanAppCopiedFldsSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetLoanAppCopiedFldsSelectFieldsResponse>>("getLoanAppCopiedFldsSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetLoanAppCopiedFldsPagedListSelectFieldsResponse>> GetLoanAppCopiedFldsPagedListSelectFields(ParameterService.LoanAppCopiedFldsPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.LoanAppCopiedFldsPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetLoanAppCopiedFldsPagedListSelectFieldsResponse>>("getLoanAppCopiedFldsPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchLoanAppCopiedFldsPagedSelectFieldsResponse>> SearchLoanAppCopiedFldsPagedSelectFields(ParameterService.LoanAppCopiedFldsSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.LoanAppCopiedFldsSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchLoanAppCopiedFldsPagedSelectFieldsResponse>>("searchLoanAppCopiedFldsPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetLoanAppDefaultSelectFieldsResponse>> GetLoanAppDefaultSelectFields(ParameterService.LoanAppDefaultSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.LoanAppDefaultSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetLoanAppDefaultSelectFieldsResponse>>("getLoanAppDefaultSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetLoanAppDefaultPagedListSelectFieldsResponse>> GetLoanAppDefaultPagedListSelectFields(ParameterService.LoanAppDefaultPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.LoanAppDefaultPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetLoanAppDefaultPagedListSelectFieldsResponse>>("getLoanAppDefaultPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchLoanAppDefaultPagedSelectFieldsResponse>> SearchLoanAppDefaultPagedSelectFields(ParameterService.LoanAppDefaultSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.LoanAppDefaultSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchLoanAppDefaultPagedSelectFieldsResponse>>("searchLoanAppDefaultPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetLoanAppDenialSelectFieldsResponse>> GetLoanAppDenialSelectFields(ParameterService.LoanAppDenialSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.LoanAppDenialSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetLoanAppDenialSelectFieldsResponse>>("getLoanAppDenialSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetLoanAppDenialPagedListSelectFieldsResponse>> GetLoanAppDenialPagedListSelectFields(ParameterService.LoanAppDenialPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.LoanAppDenialPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetLoanAppDenialPagedListSelectFieldsResponse>>("getLoanAppDenialPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchLoanAppDenialPagedSelectFieldsResponse>> SearchLoanAppDenialPagedSelectFields(ParameterService.LoanAppDenialSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.LoanAppDenialSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchLoanAppDenialPagedSelectFieldsResponse>>("searchLoanAppDenialPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetLoanAppFieldNameSelectFieldsResponse>> GetLoanAppFieldNameSelectFields(ParameterService.LoanAppFieldNameSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.LoanAppFieldNameSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetLoanAppFieldNameSelectFieldsResponse>>("getLoanAppFieldNameSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetLoanAppFieldNamePagedListSelectFieldsResponse>> GetLoanAppFieldNamePagedListSelectFields(ParameterService.LoanAppFieldNamePagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.LoanAppFieldNamePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetLoanAppFieldNamePagedListSelectFieldsResponse>>("getLoanAppFieldNamePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchLoanAppFieldNamePagedSelectFieldsResponse>> SearchLoanAppFieldNamePagedSelectFields(ParameterService.LoanAppFieldNameSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.LoanAppFieldNameSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchLoanAppFieldNamePagedSelectFieldsResponse>>("searchLoanAppFieldNamePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetLoanAppFormPktSelectFieldsResponse>> GetLoanAppFormPktSelectFields(ParameterService.LoanAppFormPktSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.LoanAppFormPktSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetLoanAppFormPktSelectFieldsResponse>>("getLoanAppFormPktSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetLoanAppFormPktPagedListSelectFieldsResponse>> GetLoanAppFormPktPagedListSelectFields(ParameterService.LoanAppFormPktPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.LoanAppFormPktPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetLoanAppFormPktPagedListSelectFieldsResponse>>("getLoanAppFormPktPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchLoanAppFormPktPagedSelectFieldsResponse>> SearchLoanAppFormPktPagedSelectFields(ParameterService.LoanAppFormPktSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.LoanAppFormPktSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchLoanAppFormPktPagedSelectFieldsResponse>>("searchLoanAppFormPktPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetLoanAppMiscSelectFieldsResponse>> GetLoanAppMiscSelectFields(ParameterService.LoanAppMiscSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.LoanAppMiscSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetLoanAppMiscSelectFieldsResponse>>("getLoanAppMiscSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetLoanAppPrintAppSelectFieldsResponse>> GetLoanAppPrintAppSelectFields(ParameterService.LoanAppPrintAppSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.LoanAppPrintAppSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetLoanAppPrintAppSelectFieldsResponse>>("getLoanAppPrintAppSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetLoanAppPrintAppPagedListSelectFieldsResponse>> GetLoanAppPrintAppPagedListSelectFields(ParameterService.LoanAppPrintAppPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.LoanAppPrintAppPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetLoanAppPrintAppPagedListSelectFieldsResponse>>("getLoanAppPrintAppPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchLoanAppPrintAppPagedSelectFieldsResponse>> SearchLoanAppPrintAppPagedSelectFields(ParameterService.LoanAppPrintAppSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.LoanAppPrintAppSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchLoanAppPrintAppPagedSelectFieldsResponse>>("searchLoanAppPrintAppPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetLoanAppReusedFldsSelectFieldsResponse>> GetLoanAppReusedFldsSelectFields(ParameterService.LoanAppReusedFldsSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.LoanAppReusedFldsSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetLoanAppReusedFldsSelectFieldsResponse>>("getLoanAppReusedFldsSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetLoanAppReusedFldsPagedListSelectFieldsResponse>> GetLoanAppReusedFldsPagedListSelectFields(ParameterService.LoanAppReusedFldsPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.LoanAppReusedFldsPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetLoanAppReusedFldsPagedListSelectFieldsResponse>>("getLoanAppReusedFldsPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchLoanAppReusedFldsPagedSelectFieldsResponse>> SearchLoanAppReusedFldsPagedSelectFields(ParameterService.LoanAppReusedFldsSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.LoanAppReusedFldsSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchLoanAppReusedFldsPagedSelectFieldsResponse>>("searchLoanAppReusedFldsPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetLoanAppVerFormSelectFieldsResponse>> GetLoanAppVerFormSelectFields(ParameterService.LoanAppVerFormSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.LoanAppVerFormSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetLoanAppVerFormSelectFieldsResponse>>("getLoanAppVerFormSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetLoanAppVerFormPagedListSelectFieldsResponse>> GetLoanAppVerFormPagedListSelectFields(ParameterService.LoanAppVerFormPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.LoanAppVerFormPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetLoanAppVerFormPagedListSelectFieldsResponse>>("getLoanAppVerFormPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchLoanAppVerFormPagedSelectFieldsResponse>> SearchLoanAppVerFormPagedSelectFields(ParameterService.LoanAppVerFormSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.LoanAppVerFormSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchLoanAppVerFormPagedSelectFieldsResponse>>("searchLoanAppVerFormPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetLoanAppViewAppSelectFieldsResponse>> GetLoanAppViewAppSelectFields(ParameterService.LoanAppViewAppSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.LoanAppViewAppSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetLoanAppViewAppSelectFieldsResponse>>("getLoanAppViewAppSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetLoanAppViewAppPagedListSelectFieldsResponse>> GetLoanAppViewAppPagedListSelectFields(ParameterService.LoanAppViewAppPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.LoanAppViewAppPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetLoanAppViewAppPagedListSelectFieldsResponse>>("getLoanAppViewAppPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchLoanAppViewAppPagedSelectFieldsResponse>> SearchLoanAppViewAppPagedSelectFields(ParameterService.LoanAppViewAppSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.LoanAppViewAppSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchLoanAppViewAppPagedSelectFieldsResponse>>("searchLoanAppViewAppPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetLoanAppWorkFlowSelectFieldsResponse>> GetLoanAppWorkFlowSelectFields(ParameterService.LoanAppWorkFlowSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.LoanAppWorkFlowSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetLoanAppWorkFlowSelectFieldsResponse>>("getLoanAppWorkFlowSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetLoanAppWorkFlowPagedListSelectFieldsResponse>> GetLoanAppWorkFlowPagedListSelectFields(ParameterService.LoanAppWorkFlowPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.LoanAppWorkFlowPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetLoanAppWorkFlowPagedListSelectFieldsResponse>>("getLoanAppWorkFlowPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchLoanAppWorkFlowPagedSelectFieldsResponse>> SearchLoanAppWorkFlowPagedSelectFields(ParameterService.LoanAppWorkFlowSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.LoanAppWorkFlowSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchLoanAppWorkFlowPagedSelectFieldsResponse>>("searchLoanAppWorkFlowPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetLoanDefaultSelectFieldsResponse>> GetLoanDefaultSelectFields(ParameterService.LoanDefaultSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.LoanDefaultSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetLoanDefaultSelectFieldsResponse>>("getLoanDefaultSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetLoanDefaultPagedListSelectFieldsResponse>> GetLoanDefaultPagedListSelectFields(ParameterService.LoanDefaultPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.LoanDefaultPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetLoanDefaultPagedListSelectFieldsResponse>>("getLoanDefaultPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchLoanDefaultPagedSelectFieldsResponse>> SearchLoanDefaultPagedSelectFields(ParameterService.LoanDefaultSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.LoanDefaultSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchLoanDefaultPagedSelectFieldsResponse>>("searchLoanDefaultPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetLoanFieldNameSelectFieldsResponse>> GetLoanFieldNameSelectFields(ParameterService.LoanFieldNameSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.LoanFieldNameSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetLoanFieldNameSelectFieldsResponse>>("getLoanFieldNameSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetLoanFieldNamePagedListSelectFieldsResponse>> GetLoanFieldNamePagedListSelectFields(ParameterService.LoanFieldNamePagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.LoanFieldNamePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetLoanFieldNamePagedListSelectFieldsResponse>>("getLoanFieldNamePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchLoanFieldNamePagedSelectFieldsResponse>> SearchLoanFieldNamePagedSelectFields(ParameterService.LoanFieldNameSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.LoanFieldNameSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchLoanFieldNamePagedSelectFieldsResponse>>("searchLoanFieldNamePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetLoanTypeIdRangeSelectFieldsResponse>> GetLoanTypeIdRangeSelectFields(ParameterService.LoanTypeIdRangeSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.LoanTypeIdRangeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetLoanTypeIdRangeSelectFieldsResponse>>("getLoanTypeIdRangeSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetLoanTypeIdRangePagedListSelectFieldsResponse>> GetLoanTypeIdRangePagedListSelectFields(ParameterService.LoanTypeIdRangePagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.LoanTypeIdRangePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetLoanTypeIdRangePagedListSelectFieldsResponse>>("getLoanTypeIdRangePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchLoanTypeIdRangePagedSelectFieldsResponse>> SearchLoanTypeIdRangePagedSelectFields(ParameterService.LoanTypeIdRangeSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.LoanTypeIdRangeSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchLoanTypeIdRangePagedSelectFieldsResponse>>("searchLoanTypeIdRangePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetLookupTypeNameSelectFieldsResponse>> GetLookupTypeNameSelectFields(ParameterService.LookupTypeNameSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.LookupTypeNameSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetLookupTypeNameSelectFieldsResponse>>("getLookupTypeNameSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetLookupTypeNamePagedListSelectFieldsResponse>> GetLookupTypeNamePagedListSelectFields(ParameterService.LookupTypeNamePagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.LookupTypeNamePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetLookupTypeNamePagedListSelectFieldsResponse>>("getLookupTypeNamePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchLookupTypeNamePagedSelectFieldsResponse>> SearchLookupTypeNamePagedSelectFields(ParameterService.LookupTypeNameSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.LookupTypeNameSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchLookupTypeNamePagedSelectFieldsResponse>>("searchLookupTypeNamePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetMiscSelectFieldsResponse>> GetMiscSelectFields(ParameterService.MiscSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.MiscSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetMiscSelectFieldsResponse>>("getMiscSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetMiscPmtSelectFieldsResponse>> GetMiscPmtSelectFields(ParameterService.MiscPmtSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.MiscPmtSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetMiscPmtSelectFieldsResponse>>("getMiscPmtSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetMoProductSelectFieldsResponse>> GetMoProductSelectFields(ParameterService.MoProductSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.MoProductSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetMoProductSelectFieldsResponse>>("getMoProductSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetNameFieldNameSelectFieldsResponse>> GetNameFieldNameSelectFields(ParameterService.NameFieldNameSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.NameFieldNameSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetNameFieldNameSelectFieldsResponse>>("getNameFieldNameSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetNameFieldNamePagedListSelectFieldsResponse>> GetNameFieldNamePagedListSelectFields(ParameterService.NameFieldNamePagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.NameFieldNamePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetNameFieldNamePagedListSelectFieldsResponse>>("getNameFieldNamePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchNameFieldNamePagedSelectFieldsResponse>> SearchNameFieldNamePagedSelectFields(ParameterService.NameFieldNameSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.NameFieldNameSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchNameFieldNamePagedSelectFieldsResponse>>("searchNameFieldNamePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetNcua5300SelectFieldsResponse>> GetNcua5300SelectFields(ParameterService.Ncua5300SelectFieldsRequest payload) =>
    RequestAsync<ParameterService.Ncua5300SelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetNcua5300SelectFieldsResponse>>("getNcua5300SelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetNonRegCcSelectFieldsResponse>> GetNonRegCcSelectFields(ParameterService.NonRegCcSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.NonRegCcSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetNonRegCcSelectFieldsResponse>>("getNonRegCcSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetNoticeSelectFieldsResponse>> GetNoticeSelectFields(ParameterService.NoticeSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.NoticeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetNoticeSelectFieldsResponse>>("getNoticeSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetNoticePagedListSelectFieldsResponse>> GetNoticePagedListSelectFields(ParameterService.NoticePagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.NoticePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetNoticePagedListSelectFieldsResponse>>("getNoticePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchNoticePagedSelectFieldsResponse>> SearchNoticePagedSelectFields(ParameterService.NoticeSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.NoticeSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchNoticePagedSelectFieldsResponse>>("searchNoticePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetOnlineBlockSelectFieldsResponse>> GetOnlineBlockSelectFields(ParameterService.OnlineBlockSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.OnlineBlockSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetOnlineBlockSelectFieldsResponse>>("getOnlineBlockSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetOnlineBlockPagedListSelectFieldsResponse>> GetOnlineBlockPagedListSelectFields(ParameterService.OnlineBlockPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.OnlineBlockPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetOnlineBlockPagedListSelectFieldsResponse>>("getOnlineBlockPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchOnlineBlockPagedSelectFieldsResponse>> SearchOnlineBlockPagedSelectFields(ParameterService.OnlineBlockSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.OnlineBlockSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchOnlineBlockPagedSelectFieldsResponse>>("searchOnlineBlockPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetOnlineCardSelectFieldsResponse>> GetOnlineCardSelectFields(ParameterService.OnlineCardSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.OnlineCardSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetOnlineCardSelectFieldsResponse>>("getOnlineCardSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetOnlineCardPagedListSelectFieldsResponse>> GetOnlineCardPagedListSelectFields(ParameterService.OnlineCardPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.OnlineCardPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetOnlineCardPagedListSelectFieldsResponse>>("getOnlineCardPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchOnlineCardPagedSelectFieldsResponse>> SearchOnlineCardPagedSelectFields(ParameterService.OnlineCardSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.OnlineCardSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchOnlineCardPagedSelectFieldsResponse>>("searchOnlineCardPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetOnlineFeeSelectFieldsResponse>> GetOnlineFeeSelectFields(ParameterService.OnlineFeeSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.OnlineFeeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetOnlineFeeSelectFieldsResponse>>("getOnlineFeeSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetOnlineFeePagedListSelectFieldsResponse>> GetOnlineFeePagedListSelectFields(ParameterService.OnlineFeePagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.OnlineFeePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetOnlineFeePagedListSelectFieldsResponse>>("getOnlineFeePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchOnlineFeePagedSelectFieldsResponse>> SearchOnlineFeePagedSelectFields(ParameterService.OnlineFeeSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.OnlineFeeSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchOnlineFeePagedSelectFieldsResponse>>("searchOnlineFeePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetOnlineFileSelectFieldsResponse>> GetOnlineFileSelectFields(ParameterService.OnlineFileSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.OnlineFileSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetOnlineFileSelectFieldsResponse>>("getOnlineFileSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetOnlineFilePagedListSelectFieldsResponse>> GetOnlineFilePagedListSelectFields(ParameterService.OnlineFilePagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.OnlineFilePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetOnlineFilePagedListSelectFieldsResponse>>("getOnlineFilePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchOnlineFilePagedSelectFieldsResponse>> SearchOnlineFilePagedSelectFields(ParameterService.OnlineFileSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.OnlineFileSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchOnlineFilePagedSelectFieldsResponse>>("searchOnlineFilePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetOnlineFileMgrSelectFieldsResponse>> GetOnlineFileMgrSelectFields(ParameterService.OnlineFileMgrSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.OnlineFileMgrSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetOnlineFileMgrSelectFieldsResponse>>("getOnlineFileMgrSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetOnlineMainSelectFieldsResponse>> GetOnlineMainSelectFields(ParameterService.OnlineMainSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.OnlineMainSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetOnlineMainSelectFieldsResponse>>("getOnlineMainSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetOnlineNetSelectFieldsResponse>> GetOnlineNetSelectFields(ParameterService.OnlineNetSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.OnlineNetSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetOnlineNetSelectFieldsResponse>>("getOnlineNetSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetOnlineNetPagedListSelectFieldsResponse>> GetOnlineNetPagedListSelectFields(ParameterService.OnlineNetPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.OnlineNetPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetOnlineNetPagedListSelectFieldsResponse>>("getOnlineNetPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchOnlineNetPagedSelectFieldsResponse>> SearchOnlineNetPagedSelectFields(ParameterService.OnlineNetSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.OnlineNetSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchOnlineNetPagedSelectFieldsResponse>>("searchOnlineNetPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetOnlineOutletSelectFieldsResponse>> GetOnlineOutletSelectFields(ParameterService.OnlineOutletSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.OnlineOutletSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetOnlineOutletSelectFieldsResponse>>("getOnlineOutletSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetOnlineOutletPagedListSelectFieldsResponse>> GetOnlineOutletPagedListSelectFields(ParameterService.OnlineOutletPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.OnlineOutletPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetOnlineOutletPagedListSelectFieldsResponse>>("getOnlineOutletPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchOnlineOutletPagedSelectFieldsResponse>> SearchOnlineOutletPagedSelectFields(ParameterService.OnlineOutletSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.OnlineOutletSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchOnlineOutletPagedSelectFieldsResponse>>("searchOnlineOutletPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetOnlineSbAddOnSelectFieldsResponse>> GetOnlineSbAddOnSelectFields(ParameterService.OnlineSbAddOnSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.OnlineSbAddOnSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetOnlineSbAddOnSelectFieldsResponse>>("getOnlineSbAddOnSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetOnlineSbAddOnPagedListSelectFieldsResponse>> GetOnlineSbAddOnPagedListSelectFields(ParameterService.OnlineSbAddOnPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.OnlineSbAddOnPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetOnlineSbAddOnPagedListSelectFieldsResponse>>("getOnlineSbAddOnPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchOnlineSbAddOnPagedSelectFieldsResponse>> SearchOnlineSbAddOnPagedSelectFields(ParameterService.OnlineSbAddOnSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.OnlineSbAddOnSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchOnlineSbAddOnPagedSelectFieldsResponse>>("searchOnlineSbAddOnPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetOnlineSbaSelectFieldsResponse>> GetOnlineSbaSelectFields(ParameterService.OnlineSbaSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.OnlineSbaSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetOnlineSbaSelectFieldsResponse>>("getOnlineSbaSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetOnlineSbiSelectFieldsResponse>> GetOnlineSbiSelectFields(ParameterService.OnlineSbiSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.OnlineSbiSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetOnlineSbiSelectFieldsResponse>>("getOnlineSbiSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetParam360ViewSelectFieldsResponse>> GetParam360ViewSelectFields(ParameterService.Param360ViewSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.Param360ViewSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetParam360ViewSelectFieldsResponse>>("getParam360ViewSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetPartStatementSelectFieldsResponse>> GetPartStatementSelectFields(ParameterService.PartStatementSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.PartStatementSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetPartStatementSelectFieldsResponse>>("getPartStatementSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetPartTrackingTypeSelectFieldsResponse>> GetPartTrackingTypeSelectFields(ParameterService.PartTrackingTypeSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.PartTrackingTypeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetPartTrackingTypeSelectFieldsResponse>>("getPartTrackingTypeSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetPartTrackingTypePagedListSelectFieldsResponse>> GetPartTrackingTypePagedListSelectFields(ParameterService.PartTrackingTypePagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.PartTrackingTypePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetPartTrackingTypePagedListSelectFieldsResponse>>("getPartTrackingTypePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchPartTrackingTypePagedSelectFieldsResponse>> SearchPartTrackingTypePagedSelectFields(ParameterService.PartTrackingTypeSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.PartTrackingTypeSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchPartTrackingTypePagedSelectFieldsResponse>>("searchPartTrackingTypePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetParticipantFieldNameSelectFieldsResponse>> GetParticipantFieldNameSelectFields(ParameterService.ParticipantFieldNameSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.ParticipantFieldNameSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetParticipantFieldNameSelectFieldsResponse>>("getParticipantFieldNameSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetParticipantFieldNamePagedListSelectFieldsResponse>> GetParticipantFieldNamePagedListSelectFields(ParameterService.ParticipantFieldNamePagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.ParticipantFieldNamePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetParticipantFieldNamePagedListSelectFieldsResponse>>("getParticipantFieldNamePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchParticipantFieldNamePagedSelectFieldsResponse>> SearchParticipantFieldNamePagedSelectFields(ParameterService.ParticipantFieldNameSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.ParticipantFieldNameSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchParticipantFieldNamePagedSelectFieldsResponse>>("searchParticipantFieldNamePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetPayCalcSelectFieldsResponse>> GetPayCalcSelectFields(ParameterService.PayCalcSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.PayCalcSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetPayCalcSelectFieldsResponse>>("getPayCalcSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetPayCalcPagedListSelectFieldsResponse>> GetPayCalcPagedListSelectFields(ParameterService.PayCalcPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.PayCalcPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetPayCalcPagedListSelectFieldsResponse>>("getPayCalcPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchPayCalcPagedSelectFieldsResponse>> SearchPayCalcPagedSelectFields(ParameterService.PayCalcSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.PayCalcSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchPayCalcPagedSelectFieldsResponse>>("searchPayCalcPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetPeriodicMtgSelectFieldsResponse>> GetPeriodicMtgSelectFields(ParameterService.PeriodicMtgSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.PeriodicMtgSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetPeriodicMtgSelectFieldsResponse>>("getPeriodicMtgSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetPlanDefaultSelectFieldsResponse>> GetPlanDefaultSelectFields(ParameterService.PlanDefaultSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.PlanDefaultSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetPlanDefaultSelectFieldsResponse>>("getPlanDefaultSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetPlanDefaultPagedListSelectFieldsResponse>> GetPlanDefaultPagedListSelectFields(ParameterService.PlanDefaultPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.PlanDefaultPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetPlanDefaultPagedListSelectFieldsResponse>>("getPlanDefaultPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchPlanDefaultPagedSelectFieldsResponse>> SearchPlanDefaultPagedSelectFields(ParameterService.PlanDefaultSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.PlanDefaultSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchPlanDefaultPagedSelectFieldsResponse>>("searchPlanDefaultPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetPlanFieldNameSelectFieldsResponse>> GetPlanFieldNameSelectFields(ParameterService.PlanFieldNameSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.PlanFieldNameSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetPlanFieldNameSelectFieldsResponse>>("getPlanFieldNameSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetPlanFieldNamePagedListSelectFieldsResponse>> GetPlanFieldNamePagedListSelectFields(ParameterService.PlanFieldNamePagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.PlanFieldNamePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetPlanFieldNamePagedListSelectFieldsResponse>>("getPlanFieldNamePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchPlanFieldNamePagedSelectFieldsResponse>> SearchPlanFieldNamePagedSelectFields(ParameterService.PlanFieldNameSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.PlanFieldNameSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchPlanFieldNamePagedSelectFieldsResponse>>("searchPlanFieldNamePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetPmtAppMethodSelectFieldsResponse>> GetPmtAppMethodSelectFields(ParameterService.PmtAppMethodSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.PmtAppMethodSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetPmtAppMethodSelectFieldsResponse>>("getPmtAppMethodSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetPmtAppMethodPagedListSelectFieldsResponse>> GetPmtAppMethodPagedListSelectFields(ParameterService.PmtAppMethodPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.PmtAppMethodPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetPmtAppMethodPagedListSelectFieldsResponse>>("getPmtAppMethodPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchPmtAppMethodPagedSelectFieldsResponse>> SearchPmtAppMethodPagedSelectFields(ParameterService.PmtAppMethodSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.PmtAppMethodSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchPmtAppMethodPagedSelectFieldsResponse>>("searchPmtAppMethodPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetPositivePaySelectFieldsResponse>> GetPositivePaySelectFields(ParameterService.PositivePaySelectFieldsRequest payload) =>
    RequestAsync<ParameterService.PositivePaySelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetPositivePaySelectFieldsResponse>>("getPositivePaySelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetPositivePayPagedListSelectFieldsResponse>> GetPositivePayPagedListSelectFields(ParameterService.PositivePayPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.PositivePayPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetPositivePayPagedListSelectFieldsResponse>>("getPositivePayPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchPositivePayPagedSelectFieldsResponse>> SearchPositivePayPagedSelectFields(ParameterService.PositivePaySearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.PositivePaySearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchPositivePayPagedSelectFieldsResponse>>("searchPositivePayPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetPreferenceDefaultSelectFieldsResponse>> GetPreferenceDefaultSelectFields(ParameterService.PreferenceDefaultSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.PreferenceDefaultSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetPreferenceDefaultSelectFieldsResponse>>("getPreferenceDefaultSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetPrivGroupSelectFieldsResponse>> GetPrivGroupSelectFields(ParameterService.PrivGroupSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.PrivGroupSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetPrivGroupSelectFieldsResponse>>("getPrivGroupSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetPrivGroupPagedListSelectFieldsResponse>> GetPrivGroupPagedListSelectFields(ParameterService.PrivGroupPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.PrivGroupPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetPrivGroupPagedListSelectFieldsResponse>>("getPrivGroupPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchPrivGroupPagedSelectFieldsResponse>> SearchPrivGroupPagedSelectFields(ParameterService.PrivGroupSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.PrivGroupSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchPrivGroupPagedSelectFieldsResponse>>("searchPrivGroupPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetRegCcSelectFieldsResponse>> GetRegCcSelectFields(ParameterService.RegCcSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.RegCcSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetRegCcSelectFieldsResponse>>("getRegCcSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetRegCcPagedListSelectFieldsResponse>> GetRegCcPagedListSelectFields(ParameterService.RegCcPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.RegCcPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetRegCcPagedListSelectFieldsResponse>>("getRegCcPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchRegCcPagedSelectFieldsResponse>> SearchRegCcPagedSelectFields(ParameterService.RegCcSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.RegCcSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchRegCcPagedSelectFieldsResponse>>("searchRegCcPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetScreenDefinitionSelectFieldsResponse>> GetScreenDefinitionSelectFields(ParameterService.ScreenDefinitionSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.ScreenDefinitionSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetScreenDefinitionSelectFieldsResponse>>("getScreenDefinitionSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetScreenDefinitionPagedListSelectFieldsResponse>> GetScreenDefinitionPagedListSelectFields(ParameterService.ScreenDefinitionPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.ScreenDefinitionPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetScreenDefinitionPagedListSelectFieldsResponse>>("getScreenDefinitionPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchScreenDefinitionPagedSelectFieldsResponse>> SearchScreenDefinitionPagedSelectFields(ParameterService.ScreenDefinitionSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.ScreenDefinitionSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchScreenDefinitionPagedSelectFieldsResponse>>("searchScreenDefinitionPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetSecFieldSelectFieldsResponse>> GetSecFieldSelectFields(ParameterService.SecFieldSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.SecFieldSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetSecFieldSelectFieldsResponse>>("getSecFieldSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetSecFieldPagedListSelectFieldsResponse>> GetSecFieldPagedListSelectFields(ParameterService.SecFieldPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.SecFieldPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetSecFieldPagedListSelectFieldsResponse>>("getSecFieldPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchSecFieldPagedSelectFieldsResponse>> SearchSecFieldPagedSelectFields(ParameterService.SecFieldSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.SecFieldSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchSecFieldPagedSelectFieldsResponse>>("searchSecFieldPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetSecuritySelectFieldsResponse>> GetSecuritySelectFields(ParameterService.SecuritySelectFieldsRequest payload) =>
    RequestAsync<ParameterService.SecuritySelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetSecuritySelectFieldsResponse>>("getSecuritySelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetSecurityPagedListSelectFieldsResponse>> GetSecurityPagedListSelectFields(ParameterService.SecurityPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.SecurityPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetSecurityPagedListSelectFieldsResponse>>("getSecurityPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchSecurityPagedSelectFieldsResponse>> SearchSecurityPagedSelectFields(ParameterService.SecuritySearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.SecuritySearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchSecurityPagedSelectFieldsResponse>>("searchSecurityPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetShareDefaultSelectFieldsResponse>> GetShareDefaultSelectFields(ParameterService.ShareDefaultSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.ShareDefaultSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetShareDefaultSelectFieldsResponse>>("getShareDefaultSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetShareDefaultPagedListSelectFieldsResponse>> GetShareDefaultPagedListSelectFields(ParameterService.ShareDefaultPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.ShareDefaultPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetShareDefaultPagedListSelectFieldsResponse>>("getShareDefaultPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchShareDefaultPagedSelectFieldsResponse>> SearchShareDefaultPagedSelectFields(ParameterService.ShareDefaultSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.ShareDefaultSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchShareDefaultPagedSelectFieldsResponse>>("searchShareDefaultPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetShareFieldNameSelectFieldsResponse>> GetShareFieldNameSelectFields(ParameterService.ShareFieldNameSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.ShareFieldNameSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetShareFieldNameSelectFieldsResponse>>("getShareFieldNameSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetShareFieldNamePagedListSelectFieldsResponse>> GetShareFieldNamePagedListSelectFields(ParameterService.ShareFieldNamePagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.ShareFieldNamePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetShareFieldNamePagedListSelectFieldsResponse>>("getShareFieldNamePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchShareFieldNamePagedSelectFieldsResponse>> SearchShareFieldNamePagedSelectFields(ParameterService.ShareFieldNameSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.ShareFieldNameSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchShareFieldNamePagedSelectFieldsResponse>>("searchShareFieldNamePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetStatementSelectFieldsResponse>> GetStatementSelectFields(ParameterService.StatementSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.StatementSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetStatementSelectFieldsResponse>>("getStatementSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetStmtMailNameSelectFieldsResponse>> GetStmtMailNameSelectFields(ParameterService.StmtMailNameSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.StmtMailNameSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetStmtMailNameSelectFieldsResponse>>("getStmtMailNameSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetStmtMailNamePagedListSelectFieldsResponse>> GetStmtMailNamePagedListSelectFields(ParameterService.StmtMailNamePagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.StmtMailNamePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetStmtMailNamePagedListSelectFieldsResponse>>("getStmtMailNamePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchStmtMailNamePagedSelectFieldsResponse>> SearchStmtMailNamePagedSelectFields(ParameterService.StmtMailNameSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.StmtMailNameSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchStmtMailNamePagedSelectFieldsResponse>>("searchStmtMailNamePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetStmtMessagesSelectFieldsResponse>> GetStmtMessagesSelectFields(ParameterService.StmtMessagesSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.StmtMessagesSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetStmtMessagesSelectFieldsResponse>>("getStmtMessagesSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetStmtMessagesPagedListSelectFieldsResponse>> GetStmtMessagesPagedListSelectFields(ParameterService.StmtMessagesPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.StmtMessagesPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetStmtMessagesPagedListSelectFieldsResponse>>("getStmtMessagesPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchStmtMessagesPagedSelectFieldsResponse>> SearchStmtMessagesPagedSelectFields(ParameterService.StmtMessagesSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.StmtMessagesSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchStmtMessagesPagedSelectFieldsResponse>>("searchStmtMessagesPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetStockSelectFieldsResponse>> GetStockSelectFields(ParameterService.StockSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.StockSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetStockSelectFieldsResponse>>("getStockSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetStockPagedListSelectFieldsResponse>> GetStockPagedListSelectFields(ParameterService.StockPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.StockPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetStockPagedListSelectFieldsResponse>>("getStockPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchStockPagedSelectFieldsResponse>> SearchStockPagedSelectFields(ParameterService.StockSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.StockSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchStockPagedSelectFieldsResponse>>("searchStockPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetSymXClientSelectFieldsResponse>> GetSymXClientSelectFields(ParameterService.SymXClientSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.SymXClientSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetSymXClientSelectFieldsResponse>>("getSymXClientSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetSymXDeviceMapSelectFieldsResponse>> GetSymXDeviceMapSelectFields(ParameterService.SymXDeviceMapSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.SymXDeviceMapSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetSymXDeviceMapSelectFieldsResponse>>("getSymXDeviceMapSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetSymXDeviceMapPagedListSelectFieldsResponse>> GetSymXDeviceMapPagedListSelectFields(ParameterService.SymXDeviceMapPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.SymXDeviceMapPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetSymXDeviceMapPagedListSelectFieldsResponse>>("getSymXDeviceMapPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchSymXDeviceMapPagedSelectFieldsResponse>> SearchSymXDeviceMapPagedSelectFields(ParameterService.SymXDeviceMapSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.SymXDeviceMapSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchSymXDeviceMapPagedSelectFieldsResponse>>("searchSymXDeviceMapPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetSymXGeneralSelectFieldsResponse>> GetSymXGeneralSelectFields(ParameterService.SymXGeneralSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.SymXGeneralSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetSymXGeneralSelectFieldsResponse>>("getSymXGeneralSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetSymXGeneralPagedListSelectFieldsResponse>> GetSymXGeneralPagedListSelectFields(ParameterService.SymXGeneralPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.SymXGeneralPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetSymXGeneralPagedListSelectFieldsResponse>>("getSymXGeneralPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchSymXGeneralPagedSelectFieldsResponse>> SearchSymXGeneralPagedSelectFields(ParameterService.SymXGeneralSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.SymXGeneralSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchSymXGeneralPagedSelectFieldsResponse>>("searchSymXGeneralPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetSymXInstanceSelectFieldsResponse>> GetSymXInstanceSelectFields(ParameterService.SymXInstanceSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.SymXInstanceSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetSymXInstanceSelectFieldsResponse>>("getSymXInstanceSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetSymXInstancePagedListSelectFieldsResponse>> GetSymXInstancePagedListSelectFields(ParameterService.SymXInstancePagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.SymXInstancePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetSymXInstancePagedListSelectFieldsResponse>>("getSymXInstancePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchSymXInstancePagedSelectFieldsResponse>> SearchSymXInstancePagedSelectFields(ParameterService.SymXInstanceSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.SymXInstanceSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchSymXInstancePagedSelectFieldsResponse>>("searchSymXInstancePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetSynapsysMrmSelectFieldsResponse>> GetSynapsysMrmSelectFields(ParameterService.SynapsysMrmSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.SynapsysMrmSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetSynapsysMrmSelectFieldsResponse>>("getSynapsysMrmSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetTcProductSelectFieldsResponse>> GetTcProductSelectFields(ParameterService.TcProductSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.TcProductSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetTcProductSelectFieldsResponse>>("getTcProductSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetTellerFeeSelectFieldsResponse>> GetTellerFeeSelectFields(ParameterService.TellerFeeSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.TellerFeeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetTellerFeeSelectFieldsResponse>>("getTellerFeeSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetTellerFeePagedListSelectFieldsResponse>> GetTellerFeePagedListSelectFields(ParameterService.TellerFeePagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.TellerFeePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetTellerFeePagedListSelectFieldsResponse>>("getTellerFeePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchTellerFeePagedSelectFieldsResponse>> SearchTellerFeePagedSelectFields(ParameterService.TellerFeeSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.TellerFeeSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchTellerFeePagedSelectFieldsResponse>>("searchTellerFeePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetTellerTranFeeSelectFieldsResponse>> GetTellerTranFeeSelectFields(ParameterService.TellerTranFeeSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.TellerTranFeeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetTellerTranFeeSelectFieldsResponse>>("getTellerTranFeeSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetTellerTranValidateSelectFieldsResponse>> GetTellerTranValidateSelectFields(ParameterService.TellerTranValidateSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.TellerTranValidateSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetTellerTranValidateSelectFieldsResponse>>("getTellerTranValidateSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetTptSelectFieldsResponse>> GetTptSelectFields(ParameterService.TptSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.TptSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetTptSelectFieldsResponse>>("getTptSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetTptPagedListSelectFieldsResponse>> GetTptPagedListSelectFields(ParameterService.TptPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.TptPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetTptPagedListSelectFieldsResponse>>("getTptPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchTptPagedSelectFieldsResponse>> SearchTptPagedSelectFields(ParameterService.TptSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.TptSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchTptPagedSelectFieldsResponse>>("searchTptPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetTrackingCodeSelectFieldsResponse>> GetTrackingCodeSelectFields(ParameterService.TrackingCodeSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.TrackingCodeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetTrackingCodeSelectFieldsResponse>>("getTrackingCodeSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetTrackingCodePagedListSelectFieldsResponse>> GetTrackingCodePagedListSelectFields(ParameterService.TrackingCodePagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.TrackingCodePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetTrackingCodePagedListSelectFieldsResponse>>("getTrackingCodePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchTrackingCodePagedSelectFieldsResponse>> SearchTrackingCodePagedSelectFields(ParameterService.TrackingCodeSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.TrackingCodeSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchTrackingCodePagedSelectFieldsResponse>>("searchTrackingCodePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetUserFmSelectFieldsResponse>> GetUserFmSelectFields(ParameterService.UserFmSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.UserFmSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetUserFmSelectFieldsResponse>>("getUserFmSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetUserTrackingFmSelectFieldsResponse>> GetUserTrackingFmSelectFields(ParameterService.UserTrackingFmSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.UserTrackingFmSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetUserTrackingFmSelectFieldsResponse>>("getUserTrackingFmSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetUserTrackingTypeSelectFieldsResponse>> GetUserTrackingTypeSelectFields(ParameterService.UserTrackingTypeSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.UserTrackingTypeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetUserTrackingTypeSelectFieldsResponse>>("getUserTrackingTypeSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetUserTrackingTypePagedListSelectFieldsResponse>> GetUserTrackingTypePagedListSelectFields(ParameterService.UserTrackingTypePagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.UserTrackingTypePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetUserTrackingTypePagedListSelectFieldsResponse>>("getUserTrackingTypePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchUserTrackingTypePagedSelectFieldsResponse>> SearchUserTrackingTypePagedSelectFields(ParameterService.UserTrackingTypeSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.UserTrackingTypeSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchUserTrackingTypePagedSelectFieldsResponse>>("searchUserTrackingTypePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetWarningsSelectFieldsResponse>> GetWarningsSelectFields(ParameterService.WarningsSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.WarningsSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetWarningsSelectFieldsResponse>>("getWarningsSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetWarningsPagedListSelectFieldsResponse>> GetWarningsPagedListSelectFields(ParameterService.WarningsPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.WarningsPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetWarningsPagedListSelectFieldsResponse>>("getWarningsPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchWarningsPagedSelectFieldsResponse>> SearchWarningsPagedSelectFields(ParameterService.WarningsSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.WarningsSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchWarningsPagedSelectFieldsResponse>>("searchWarningsPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetWdFeeSelectFieldsResponse>> GetWdFeeSelectFields(ParameterService.WdFeeSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.WdFeeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetWdFeeSelectFieldsResponse>>("getWdFeeSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetWdFeePagedListSelectFieldsResponse>> GetWdFeePagedListSelectFields(ParameterService.WdFeePagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.WdFeePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetWdFeePagedListSelectFieldsResponse>>("getWdFeePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchWdFeePagedSelectFieldsResponse>> SearchWdFeePagedSelectFields(ParameterService.WdFeeSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.WdFeeSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchWdFeePagedSelectFieldsResponse>>("searchWdFeePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetWireBfcSelectFieldsResponse>> GetWireBfcSelectFields(ParameterService.WireBfcSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.WireBfcSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetWireBfcSelectFieldsResponse>>("getWireBfcSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetWireCorpVerSelectFieldsResponse>> GetWireCorpVerSelectFields(ParameterService.WireCorpVerSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.WireCorpVerSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetWireCorpVerSelectFieldsResponse>>("getWireCorpVerSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetWireIdCodeSelectFieldsResponse>> GetWireIdCodeSelectFields(ParameterService.WireIdCodeSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.WireIdCodeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetWireIdCodeSelectFieldsResponse>>("getWireIdCodeSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetWireInCmtCodeSelectFieldsResponse>> GetWireInCmtCodeSelectFields(ParameterService.WireInCmtCodeSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.WireInCmtCodeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetWireInCmtCodeSelectFieldsResponse>>("getWireInCmtCodeSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetWireInCmtCodePagedListSelectFieldsResponse>> GetWireInCmtCodePagedListSelectFields(ParameterService.WireInCmtCodePagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.WireInCmtCodePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetWireInCmtCodePagedListSelectFieldsResponse>>("getWireInCmtCodePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchWireInCmtCodePagedSelectFieldsResponse>> SearchWireInCmtCodePagedSelectFields(ParameterService.WireInCmtCodeSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.WireInCmtCodeSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchWireInCmtCodePagedSelectFieldsResponse>>("searchWireInCmtCodePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetWireMiscSelectFieldsResponse>> GetWireMiscSelectFields(ParameterService.WireMiscSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.WireMiscSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetWireMiscSelectFieldsResponse>>("getWireMiscSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetWireOutCmtCodeSelectFieldsResponse>> GetWireOutCmtCodeSelectFields(ParameterService.WireOutCmtCodeSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.WireOutCmtCodeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetWireOutCmtCodeSelectFieldsResponse>>("getWireOutCmtCodeSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetWireOutCmtCodePagedListSelectFieldsResponse>> GetWireOutCmtCodePagedListSelectFields(ParameterService.WireOutCmtCodePagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.WireOutCmtCodePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetWireOutCmtCodePagedListSelectFieldsResponse>>("getWireOutCmtCodePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchWireOutCmtCodePagedSelectFieldsResponse>> SearchWireOutCmtCodePagedSelectFields(ParameterService.WireOutCmtCodeSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.WireOutCmtCodeSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchWireOutCmtCodePagedSelectFieldsResponse>>("searchWireOutCmtCodePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetWireTypeCodeSelectFieldsResponse>> GetWireTypeCodeSelectFields(ParameterService.WireTypeCodeSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.WireTypeCodeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetWireTypeCodeSelectFieldsResponse>>("getWireTypeCodeSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetWorkFlowRepGenSelectFieldsResponse>> GetWorkFlowRepGenSelectFields(ParameterService.WorkFlowRepGenSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.WorkFlowRepGenSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetWorkFlowRepGenSelectFieldsResponse>>("getWorkFlowRepGenSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetWorkFlowRepGenPagedListSelectFieldsResponse>> GetWorkFlowRepGenPagedListSelectFields(ParameterService.WorkFlowRepGenPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.WorkFlowRepGenPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetWorkFlowRepGenPagedListSelectFieldsResponse>>("getWorkFlowRepGenPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SearchWorkFlowRepGenPagedSelectFieldsResponse>> SearchWorkFlowRepGenPagedSelectFields(ParameterService.WorkFlowRepGenSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.WorkFlowRepGenSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SearchWorkFlowRepGenPagedSelectFieldsResponse>>("searchWorkFlowRepGenPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GetYellowHammerSelectFieldsResponse>> GetYellowHammerSelectFields(ParameterService.YellowHammerSelectFieldsRequest payload) =>
    RequestAsync<ParameterService.YellowHammerSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GetYellowHammerSelectFieldsResponse>>("getYellowHammerSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateAccountDefaultByIdResponse>> UpdateAccountDefaultById(ParameterService.UpdateAccountDefaultByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateAccountDefaultByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateAccountDefaultByIdResponse>>("updateAccountDefaultByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateAccountFieldNameByIdResponse>> UpdateAccountFieldNameById(ParameterService.UpdateAccountFieldNameByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateAccountFieldNameByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateAccountFieldNameByIdResponse>>("updateAccountFieldNameByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateAcctLimitByIdResponse>> UpdateAcctLimitById(ParameterService.UpdateAcctLimitByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateAcctLimitByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateAcctLimitByIdResponse>>("updateAcctLimitByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateAcctMembGrpDescByIdResponse>> UpdateAcctMembGrpDescById(ParameterService.UpdateAcctMembGrpDescByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateAcctMembGrpDescByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateAcctMembGrpDescByIdResponse>>("updateAcctMembGrpDescByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateAcctRelCodeDescByIdResponse>> UpdateAcctRelCodeDescById(ParameterService.UpdateAcctRelCodeDescByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateAcctRelCodeDescByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateAcctRelCodeDescByIdResponse>>("updateAcctRelCodeDescByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateAcctTrackingTypeByIdResponse>> UpdateAcctTrackingTypeById(ParameterService.UpdateAcctTrackingTypeByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateAcctTrackingTypeByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateAcctTrackingTypeByIdResponse>>("updateAcctTrackingTypeByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateAcctTypeNameByIdResponse>> UpdateAcctTypeNameById(ParameterService.UpdateAcctTypeNameByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateAcctTypeNameByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateAcctTypeNameByIdResponse>>("updateAcctTypeNameByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateAcsGlobalByIdResponse>> UpdateAcsGlobalById(ParameterService.UpdateAcsGlobalByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateAcsGlobalByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateAcsGlobalByIdResponse>>("updateAcsGlobalByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateAcsServiceByIdResponse>> UpdateAcsServiceById(ParameterService.UpdateAcsServiceByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateAcsServiceByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateAcsServiceByIdResponse>>("updateAcsServiceByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateAnalysisFloatByIdResponse>> UpdateAnalysisFloatById(ParameterService.UpdateAnalysisFloatByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateAnalysisFloatByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateAnalysisFloatByIdResponse>>("updateAnalysisFloatByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateAnalysisGlobalByIdResponse>> UpdateAnalysisGlobalById(ParameterService.UpdateAnalysisGlobalByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateAnalysisGlobalByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateAnalysisGlobalByIdResponse>>("updateAnalysisGlobalByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateAnalysisPlanByIdResponse>> UpdateAnalysisPlanById(ParameterService.UpdateAnalysisPlanByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateAnalysisPlanByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateAnalysisPlanByIdResponse>>("updateAnalysisPlanByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateApMiscByIdResponse>> UpdateApMiscById(ParameterService.UpdateApMiscByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateApMiscByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateApMiscByIdResponse>>("updateApMiscByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateApWorkFlowByIdResponse>> UpdateApWorkFlowById(ParameterService.UpdateApWorkFlowByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateApWorkFlowByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateApWorkFlowByIdResponse>>("updateApWorkFlowByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateBatchRcByIdResponse>> UpdateBatchRcById(ParameterService.UpdateBatchRcByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateBatchRcByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateBatchRcByIdResponse>>("updateBatchRcByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateCardDefaultByIdResponse>> UpdateCardDefaultById(ParameterService.UpdateCardDefaultByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateCardDefaultByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateCardDefaultByIdResponse>>("updateCardDefaultByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateCardWizByIdResponse>> UpdateCardWizById(ParameterService.UpdateCardWizByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateCardWizByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateCardWizByIdResponse>>("updateCardWizByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateCdmByIdResponse>> UpdateCdmById(ParameterService.UpdateCdmByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateCdmByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateCdmByIdResponse>>("updateCdmByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateCdmCommonByIdResponse>> UpdateCdmCommonById(ParameterService.UpdateCdmCommonByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateCdmCommonByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateCdmCommonByIdResponse>>("updateCdmCommonByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateCheckOrderDefaultByIdResponse>> UpdateCheckOrderDefaultById(ParameterService.UpdateCheckOrderDefaultByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateCheckOrderDefaultByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateCheckOrderDefaultByIdResponse>>("updateCheckOrderDefaultByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateCollateralTypeByIdResponse>> UpdateCollateralTypeById(ParameterService.UpdateCollateralTypeByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateCollateralTypeByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateCollateralTypeByIdResponse>>("updateCollateralTypeByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateCollatrlTrackingTypeByIdResponse>> UpdateCollatrlTrackingTypeById(ParameterService.UpdateCollatrlTrackingTypeByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateCollatrlTrackingTypeByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateCollatrlTrackingTypeByIdResponse>>("updateCollatrlTrackingTypeByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateCommentByIdResponse>> UpdateCommentById(ParameterService.UpdateCommentByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateCommentByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateCommentByIdResponse>>("updateCommentByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateCpLetterByIdResponse>> UpdateCpLetterById(ParameterService.UpdateCpLetterByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateCpLetterByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateCpLetterByIdResponse>>("updateCpLetterByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateCpWorkCardByIdResponse>> UpdateCpWorkCardById(ParameterService.UpdateCpWorkCardByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateCpWorkCardByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateCpWorkCardByIdResponse>>("updateCpWorkCardByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateCrsByIdResponse>> UpdateCrsById(ParameterService.UpdateCrsByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateCrsByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateCrsByIdResponse>>("updateCrsByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateCurrencyCtrlByIdResponse>> UpdateCurrencyCtrlById(ParameterService.UpdateCurrencyCtrlByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateCurrencyCtrlByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateCurrencyCtrlByIdResponse>>("updateCurrencyCtrlByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateDealerStatementByIdResponse>> UpdateDealerStatementById(ParameterService.UpdateDealerStatementByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateDealerStatementByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateDealerStatementByIdResponse>>("updateDealerStatementByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateDebtRatioByIdResponse>> UpdateDebtRatioById(ParameterService.UpdateDebtRatioByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateDebtRatioByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateDebtRatioByIdResponse>>("updateDebtRatioByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateDisclosureByIdResponse>> UpdateDisclosureById(ParameterService.UpdateDisclosureByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateDisclosureByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateDisclosureByIdResponse>>("updateDisclosureByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateDivIndexLocalByIdResponse>> UpdateDivIndexLocalById(ParameterService.UpdateDivIndexLocalByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateDivIndexLocalByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateDivIndexLocalByIdResponse>>("updateDivIndexLocalByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateDivTableByIdResponse>> UpdateDivTableById(ParameterService.UpdateDivTableByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateDivTableByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateDivTableByIdResponse>>("updateDivTableByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateDocExcpNoticeByIdResponse>> UpdateDocExcpNoticeById(ParameterService.UpdateDocExcpNoticeByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateDocExcpNoticeByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateDocExcpNoticeByIdResponse>>("updateDocExcpNoticeByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateDocTypeDefaultByIdResponse>> UpdateDocTypeDefaultById(ParameterService.UpdateDocTypeDefaultByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateDocTypeDefaultByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateDocTypeDefaultByIdResponse>>("updateDocTypeDefaultByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateDocumentNumberByIdResponse>> UpdateDocumentNumberById(ParameterService.UpdateDocumentNumberByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateDocumentNumberByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateDocumentNumberByIdResponse>>("updateDocumentNumberByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateEpisysDbExtractByIdResponse>> UpdateEpisysDbExtractById(ParameterService.UpdateEpisysDbExtractByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateEpisysDbExtractByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateEpisysDbExtractByIdResponse>>("updateEpisysDbExtractByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateEscrowAnalysisByIdResponse>> UpdateEscrowAnalysisById(ParameterService.UpdateEscrowAnalysisByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateEscrowAnalysisByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateEscrowAnalysisByIdResponse>>("updateEscrowAnalysisByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateEscrowTypeByIdResponse>> UpdateEscrowTypeById(ParameterService.UpdateEscrowTypeByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateEscrowTypeByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateEscrowTypeByIdResponse>>("updateEscrowTypeByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateExtLoanByIdResponse>> UpdateExtLoanById(ParameterService.UpdateExtLoanByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateExtLoanByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateExtLoanByIdResponse>>("updateExtLoanByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateGlCategoryByIdResponse>> UpdateGlCategoryById(ParameterService.UpdateGlCategoryByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateGlCategoryByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateGlCategoryByIdResponse>>("updateGlCategoryByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateGlCodeByIdResponse>> UpdateGlCodeById(ParameterService.UpdateGlCodeByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateGlCodeByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateGlCodeByIdResponse>>("updateGlCodeByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateGlTableByIdResponse>> UpdateGlTableById(ParameterService.UpdateGlTableByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateGlTableByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateGlTableByIdResponse>>("updateGlTableByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateGlTrackingTypeByIdResponse>> UpdateGlTrackingTypeById(ParameterService.UpdateGlTrackingTypeByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateGlTrackingTypeByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateGlTrackingTypeByIdResponse>>("updateGlTrackingTypeByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateGlxLateByIdResponse>> UpdateGlxLateById(ParameterService.UpdateGlxLateByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateGlxLateByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateGlxLateByIdResponse>>("updateGlxLateByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateIdentIdTypeDescByIdResponse>> UpdateIdentIdTypeDescById(ParameterService.UpdateIdentIdTypeDescByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateIdentIdTypeDescByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateIdentIdTypeDescByIdResponse>>("updateIdentIdTypeDescByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateImagingByIdResponse>> UpdateImagingById(ParameterService.UpdateImagingByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateImagingByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateImagingByIdResponse>>("updateImagingByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateInqDefinitionByIdResponse>> UpdateInqDefinitionById(ParameterService.UpdateInqDefinitionByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateInqDefinitionByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateInqDefinitionByIdResponse>>("updateInqDefinitionByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateInsTableByIdResponse>> UpdateInsTableById(ParameterService.UpdateInsTableByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateInsTableByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateInsTableByIdResponse>>("updateInsTableByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateInsTypeByIdResponse>> UpdateInsTypeById(ParameterService.UpdateInsTypeByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateInsTypeByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateInsTypeByIdResponse>>("updateInsTypeByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateInstitutionByIdResponse>> UpdateInstitutionById(ParameterService.UpdateInstitutionByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateInstitutionByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateInstitutionByIdResponse>>("updateInstitutionByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateIntIndexByIdResponse>> UpdateIntIndexById(ParameterService.UpdateIntIndexByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateIntIndexByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateIntIndexByIdResponse>>("updateIntIndexByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateIntTypeByIdResponse>> UpdateIntTypeById(ParameterService.UpdateIntTypeByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateIntTypeByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateIntTypeByIdResponse>>("updateIntTypeByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateInventoryCopiedFldsByIdResponse>> UpdateInventoryCopiedFldsById(ParameterService.UpdateInventoryCopiedFldsByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateInventoryCopiedFldsByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateInventoryCopiedFldsByIdResponse>>("updateInventoryCopiedFldsByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateInventoryDefaultByIdResponse>> UpdateInventoryDefaultById(ParameterService.UpdateInventoryDefaultByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateInventoryDefaultByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateInventoryDefaultByIdResponse>>("updateInventoryDefaultByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateInventoryFieldNameByIdResponse>> UpdateInventoryFieldNameById(ParameterService.UpdateInventoryFieldNameByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateInventoryFieldNameByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateInventoryFieldNameByIdResponse>>("updateInventoryFieldNameByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateInventoryGeneralByIdResponse>> UpdateInventoryGeneralById(ParameterService.UpdateInventoryGeneralByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateInventoryGeneralByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateInventoryGeneralByIdResponse>>("updateInventoryGeneralByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateInventoryTypeByIdResponse>> UpdateInventoryTypeById(ParameterService.UpdateInventoryTypeByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateInventoryTypeByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateInventoryTypeByIdResponse>>("updateInventoryTypeByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateIrsBkupWithholdByIdResponse>> UpdateIrsBkupWithholdById(ParameterService.UpdateIrsBkupWithholdByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateIrsBkupWithholdByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateIrsBkupWithholdByIdResponse>>("updateIrsBkupWithholdByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateIrsContriLimitByIdResponse>> UpdateIrsContriLimitById(ParameterService.UpdateIrsContriLimitByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateIrsContriLimitByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateIrsContriLimitByIdResponse>>("updateIrsContriLimitByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateItcFraudByIdResponse>> UpdateItcFraudById(ParameterService.UpdateItcFraudByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateItcFraudByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateItcFraudByIdResponse>>("updateItcFraudByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateItcInstallationByIdResponse>> UpdateItcInstallationById(ParameterService.UpdateItcInstallationByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateItcInstallationByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateItcInstallationByIdResponse>>("updateItcInstallationByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateLateChgByIdResponse>> UpdateLateChgById(ParameterService.UpdateLateChgByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateLateChgByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateLateChgByIdResponse>>("updateLateChgByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateLnSegmentDefaultByIdResponse>> UpdateLnSegmentDefaultById(ParameterService.UpdateLnSegmentDefaultByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateLnSegmentDefaultByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateLnSegmentDefaultByIdResponse>>("updateLnSegmentDefaultByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateLoanAppCopiedFldsByIdResponse>> UpdateLoanAppCopiedFldsById(ParameterService.UpdateLoanAppCopiedFldsByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateLoanAppCopiedFldsByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateLoanAppCopiedFldsByIdResponse>>("updateLoanAppCopiedFldsByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateLoanAppDefaultByIdResponse>> UpdateLoanAppDefaultById(ParameterService.UpdateLoanAppDefaultByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateLoanAppDefaultByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateLoanAppDefaultByIdResponse>>("updateLoanAppDefaultByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateLoanAppDenialByIdResponse>> UpdateLoanAppDenialById(ParameterService.UpdateLoanAppDenialByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateLoanAppDenialByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateLoanAppDenialByIdResponse>>("updateLoanAppDenialByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateLoanAppFieldNameByIdResponse>> UpdateLoanAppFieldNameById(ParameterService.UpdateLoanAppFieldNameByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateLoanAppFieldNameByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateLoanAppFieldNameByIdResponse>>("updateLoanAppFieldNameByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateLoanAppFormPktByIdResponse>> UpdateLoanAppFormPktById(ParameterService.UpdateLoanAppFormPktByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateLoanAppFormPktByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateLoanAppFormPktByIdResponse>>("updateLoanAppFormPktByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateLoanAppMiscByIdResponse>> UpdateLoanAppMiscById(ParameterService.UpdateLoanAppMiscByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateLoanAppMiscByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateLoanAppMiscByIdResponse>>("updateLoanAppMiscByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateLoanAppPrintAppByIdResponse>> UpdateLoanAppPrintAppById(ParameterService.UpdateLoanAppPrintAppByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateLoanAppPrintAppByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateLoanAppPrintAppByIdResponse>>("updateLoanAppPrintAppByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateLoanAppReusedFldsByIdResponse>> UpdateLoanAppReusedFldsById(ParameterService.UpdateLoanAppReusedFldsByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateLoanAppReusedFldsByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateLoanAppReusedFldsByIdResponse>>("updateLoanAppReusedFldsByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateLoanAppVerFormByIdResponse>> UpdateLoanAppVerFormById(ParameterService.UpdateLoanAppVerFormByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateLoanAppVerFormByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateLoanAppVerFormByIdResponse>>("updateLoanAppVerFormByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateLoanAppViewAppByIdResponse>> UpdateLoanAppViewAppById(ParameterService.UpdateLoanAppViewAppByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateLoanAppViewAppByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateLoanAppViewAppByIdResponse>>("updateLoanAppViewAppByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateLoanAppWorkFlowByIdResponse>> UpdateLoanAppWorkFlowById(ParameterService.UpdateLoanAppWorkFlowByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateLoanAppWorkFlowByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateLoanAppWorkFlowByIdResponse>>("updateLoanAppWorkFlowByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateLoanDefaultByIdResponse>> UpdateLoanDefaultById(ParameterService.UpdateLoanDefaultByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateLoanDefaultByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateLoanDefaultByIdResponse>>("updateLoanDefaultByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateLoanFieldNameByIdResponse>> UpdateLoanFieldNameById(ParameterService.UpdateLoanFieldNameByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateLoanFieldNameByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateLoanFieldNameByIdResponse>>("updateLoanFieldNameByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateLoanTypeIdRangeByIdResponse>> UpdateLoanTypeIdRangeById(ParameterService.UpdateLoanTypeIdRangeByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateLoanTypeIdRangeByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateLoanTypeIdRangeByIdResponse>>("updateLoanTypeIdRangeByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateLookupTypeNameByIdResponse>> UpdateLookupTypeNameById(ParameterService.UpdateLookupTypeNameByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateLookupTypeNameByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateLookupTypeNameByIdResponse>>("updateLookupTypeNameByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateMiscByIdResponse>> UpdateMiscById(ParameterService.UpdateMiscByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateMiscByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateMiscByIdResponse>>("updateMiscByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateMiscPmtByIdResponse>> UpdateMiscPmtById(ParameterService.UpdateMiscPmtByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateMiscPmtByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateMiscPmtByIdResponse>>("updateMiscPmtByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateMoProductByIdResponse>> UpdateMoProductById(ParameterService.UpdateMoProductByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateMoProductByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateMoProductByIdResponse>>("updateMoProductByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateNameFieldNameByIdResponse>> UpdateNameFieldNameById(ParameterService.UpdateNameFieldNameByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateNameFieldNameByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateNameFieldNameByIdResponse>>("updateNameFieldNameByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateNcua5300ByIdResponse>> UpdateNcua5300ById(ParameterService.UpdateNcua5300ByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateNcua5300ByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateNcua5300ByIdResponse>>("updateNcua5300ByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateNonRegCcByIdResponse>> UpdateNonRegCcById(ParameterService.UpdateNonRegCcByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateNonRegCcByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateNonRegCcByIdResponse>>("updateNonRegCcByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateNoticeByIdResponse>> UpdateNoticeById(ParameterService.UpdateNoticeByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateNoticeByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateNoticeByIdResponse>>("updateNoticeByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateOnlineBlockByIdResponse>> UpdateOnlineBlockById(ParameterService.UpdateOnlineBlockByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateOnlineBlockByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateOnlineBlockByIdResponse>>("updateOnlineBlockByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateOnlineCardByIdResponse>> UpdateOnlineCardById(ParameterService.UpdateOnlineCardByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateOnlineCardByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateOnlineCardByIdResponse>>("updateOnlineCardByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateOnlineFeeByIdResponse>> UpdateOnlineFeeById(ParameterService.UpdateOnlineFeeByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateOnlineFeeByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateOnlineFeeByIdResponse>>("updateOnlineFeeByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateOnlineFileByIdResponse>> UpdateOnlineFileById(ParameterService.UpdateOnlineFileByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateOnlineFileByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateOnlineFileByIdResponse>>("updateOnlineFileByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateOnlineFileMgrByIdResponse>> UpdateOnlineFileMgrById(ParameterService.UpdateOnlineFileMgrByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateOnlineFileMgrByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateOnlineFileMgrByIdResponse>>("updateOnlineFileMgrByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateOnlineMainByIdResponse>> UpdateOnlineMainById(ParameterService.UpdateOnlineMainByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateOnlineMainByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateOnlineMainByIdResponse>>("updateOnlineMainByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateOnlineNetByIdResponse>> UpdateOnlineNetById(ParameterService.UpdateOnlineNetByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateOnlineNetByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateOnlineNetByIdResponse>>("updateOnlineNetByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateOnlineOutletByIdResponse>> UpdateOnlineOutletById(ParameterService.UpdateOnlineOutletByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateOnlineOutletByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateOnlineOutletByIdResponse>>("updateOnlineOutletByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateOnlineSbAddOnByIdResponse>> UpdateOnlineSbAddOnById(ParameterService.UpdateOnlineSbAddOnByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateOnlineSbAddOnByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateOnlineSbAddOnByIdResponse>>("updateOnlineSbAddOnByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateOnlineSbaByIdResponse>> UpdateOnlineSbaById(ParameterService.UpdateOnlineSbaByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateOnlineSbaByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateOnlineSbaByIdResponse>>("updateOnlineSbaByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateOnlineSbiByIdResponse>> UpdateOnlineSbiById(ParameterService.UpdateOnlineSbiByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateOnlineSbiByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateOnlineSbiByIdResponse>>("updateOnlineSbiByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateParam360ViewByIdResponse>> UpdateParam360ViewById(ParameterService.UpdateParam360ViewByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateParam360ViewByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateParam360ViewByIdResponse>>("updateParam360ViewByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdatePartStatementByIdResponse>> UpdatePartStatementById(ParameterService.UpdatePartStatementByIdRequest payload) =>
    RequestAsync<ParameterService.UpdatePartStatementByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdatePartStatementByIdResponse>>("updatePartStatementByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdatePartTrackingTypeByIdResponse>> UpdatePartTrackingTypeById(ParameterService.UpdatePartTrackingTypeByIdRequest payload) =>
    RequestAsync<ParameterService.UpdatePartTrackingTypeByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdatePartTrackingTypeByIdResponse>>("updatePartTrackingTypeByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateParticipantFieldNameByIdResponse>> UpdateParticipantFieldNameById(ParameterService.UpdateParticipantFieldNameByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateParticipantFieldNameByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateParticipantFieldNameByIdResponse>>("updateParticipantFieldNameByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdatePayCalcByIdResponse>> UpdatePayCalcById(ParameterService.UpdatePayCalcByIdRequest payload) =>
    RequestAsync<ParameterService.UpdatePayCalcByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdatePayCalcByIdResponse>>("updatePayCalcByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdatePeriodicMtgByIdResponse>> UpdatePeriodicMtgById(ParameterService.UpdatePeriodicMtgByIdRequest payload) =>
    RequestAsync<ParameterService.UpdatePeriodicMtgByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdatePeriodicMtgByIdResponse>>("updatePeriodicMtgByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdatePlanDefaultByIdResponse>> UpdatePlanDefaultById(ParameterService.UpdatePlanDefaultByIdRequest payload) =>
    RequestAsync<ParameterService.UpdatePlanDefaultByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdatePlanDefaultByIdResponse>>("updatePlanDefaultByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdatePlanFieldNameByIdResponse>> UpdatePlanFieldNameById(ParameterService.UpdatePlanFieldNameByIdRequest payload) =>
    RequestAsync<ParameterService.UpdatePlanFieldNameByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdatePlanFieldNameByIdResponse>>("updatePlanFieldNameByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdatePmtAppMethodByIdResponse>> UpdatePmtAppMethodById(ParameterService.UpdatePmtAppMethodByIdRequest payload) =>
    RequestAsync<ParameterService.UpdatePmtAppMethodByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdatePmtAppMethodByIdResponse>>("updatePmtAppMethodByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdatePositivePayByIdResponse>> UpdatePositivePayById(ParameterService.UpdatePositivePayByIdRequest payload) =>
    RequestAsync<ParameterService.UpdatePositivePayByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdatePositivePayByIdResponse>>("updatePositivePayByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdatePreferenceDefaultByIdResponse>> UpdatePreferenceDefaultById(ParameterService.UpdatePreferenceDefaultByIdRequest payload) =>
    RequestAsync<ParameterService.UpdatePreferenceDefaultByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdatePreferenceDefaultByIdResponse>>("updatePreferenceDefaultByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdatePrivGroupByIdResponse>> UpdatePrivGroupById(ParameterService.UpdatePrivGroupByIdRequest payload) =>
    RequestAsync<ParameterService.UpdatePrivGroupByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdatePrivGroupByIdResponse>>("updatePrivGroupByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateRegCcByIdResponse>> UpdateRegCcById(ParameterService.UpdateRegCcByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateRegCcByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateRegCcByIdResponse>>("updateRegCcByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateScreenDefinitionByIdResponse>> UpdateScreenDefinitionById(ParameterService.UpdateScreenDefinitionByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateScreenDefinitionByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateScreenDefinitionByIdResponse>>("updateScreenDefinitionByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateSecFieldByIdResponse>> UpdateSecFieldById(ParameterService.UpdateSecFieldByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateSecFieldByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateSecFieldByIdResponse>>("updateSecFieldByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateSecurityByIdResponse>> UpdateSecurityById(ParameterService.UpdateSecurityByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateSecurityByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateSecurityByIdResponse>>("updateSecurityByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateShareDefaultByIdResponse>> UpdateShareDefaultById(ParameterService.UpdateShareDefaultByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateShareDefaultByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateShareDefaultByIdResponse>>("updateShareDefaultByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateShareFieldNameByIdResponse>> UpdateShareFieldNameById(ParameterService.UpdateShareFieldNameByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateShareFieldNameByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateShareFieldNameByIdResponse>>("updateShareFieldNameByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateStatementByIdResponse>> UpdateStatementById(ParameterService.UpdateStatementByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateStatementByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateStatementByIdResponse>>("updateStatementByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateStmtMailNameByIdResponse>> UpdateStmtMailNameById(ParameterService.UpdateStmtMailNameByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateStmtMailNameByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateStmtMailNameByIdResponse>>("updateStmtMailNameByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateStmtMessagesByIdResponse>> UpdateStmtMessagesById(ParameterService.UpdateStmtMessagesByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateStmtMessagesByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateStmtMessagesByIdResponse>>("updateStmtMessagesByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateStockByIdResponse>> UpdateStockById(ParameterService.UpdateStockByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateStockByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateStockByIdResponse>>("updateStockByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateSymXClientByIdResponse>> UpdateSymXClientById(ParameterService.UpdateSymXClientByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateSymXClientByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateSymXClientByIdResponse>>("updateSymXClientByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateSymXGeneralByIdResponse>> UpdateSymXGeneralById(ParameterService.UpdateSymXGeneralByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateSymXGeneralByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateSymXGeneralByIdResponse>>("updateSymXGeneralByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateSynapsysMrmByIdResponse>> UpdateSynapsysMrmById(ParameterService.UpdateSynapsysMrmByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateSynapsysMrmByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateSynapsysMrmByIdResponse>>("updateSynapsysMrmByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateTcProductByIdResponse>> UpdateTcProductById(ParameterService.UpdateTcProductByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateTcProductByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateTcProductByIdResponse>>("updateTcProductByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateTellerFeeByIdResponse>> UpdateTellerFeeById(ParameterService.UpdateTellerFeeByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateTellerFeeByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateTellerFeeByIdResponse>>("updateTellerFeeByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateTellerTranFeeByIdResponse>> UpdateTellerTranFeeById(ParameterService.UpdateTellerTranFeeByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateTellerTranFeeByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateTellerTranFeeByIdResponse>>("updateTellerTranFeeByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateTellerTranValidateByIdResponse>> UpdateTellerTranValidateById(ParameterService.UpdateTellerTranValidateByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateTellerTranValidateByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateTellerTranValidateByIdResponse>>("updateTellerTranValidateByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateTrackingCodeByIdResponse>> UpdateTrackingCodeById(ParameterService.UpdateTrackingCodeByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateTrackingCodeByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateTrackingCodeByIdResponse>>("updateTrackingCodeByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateUserTrackingFmByIdResponse>> UpdateUserTrackingFmById(ParameterService.UpdateUserTrackingFmByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateUserTrackingFmByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateUserTrackingFmByIdResponse>>("updateUserTrackingFmByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateUserTrackingTypeByIdResponse>> UpdateUserTrackingTypeById(ParameterService.UpdateUserTrackingTypeByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateUserTrackingTypeByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateUserTrackingTypeByIdResponse>>("updateUserTrackingTypeByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateWarningsByIdResponse>> UpdateWarningsById(ParameterService.UpdateWarningsByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateWarningsByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateWarningsByIdResponse>>("updateWarningsByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateWdFeeByIdResponse>> UpdateWdFeeById(ParameterService.UpdateWdFeeByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateWdFeeByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateWdFeeByIdResponse>>("updateWdFeeByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateWireBfcByIdResponse>> UpdateWireBfcById(ParameterService.UpdateWireBfcByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateWireBfcByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateWireBfcByIdResponse>>("updateWireBfcByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateWireCorpVerByIdResponse>> UpdateWireCorpVerById(ParameterService.UpdateWireCorpVerByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateWireCorpVerByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateWireCorpVerByIdResponse>>("updateWireCorpVerByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateWireIdCodeByIdResponse>> UpdateWireIdCodeById(ParameterService.UpdateWireIdCodeByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateWireIdCodeByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateWireIdCodeByIdResponse>>("updateWireIdCodeByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateWireInCmtCodeByIdResponse>> UpdateWireInCmtCodeById(ParameterService.UpdateWireInCmtCodeByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateWireInCmtCodeByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateWireInCmtCodeByIdResponse>>("updateWireInCmtCodeByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateWireMiscByIdResponse>> UpdateWireMiscById(ParameterService.UpdateWireMiscByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateWireMiscByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateWireMiscByIdResponse>>("updateWireMiscByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateWireOutCmtCodeByIdResponse>> UpdateWireOutCmtCodeById(ParameterService.UpdateWireOutCmtCodeByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateWireOutCmtCodeByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateWireOutCmtCodeByIdResponse>>("updateWireOutCmtCodeByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateWireTypeCodeByIdResponse>> UpdateWireTypeCodeById(ParameterService.UpdateWireTypeCodeByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateWireTypeCodeByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateWireTypeCodeByIdResponse>>("updateWireTypeCodeByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateWorkFlowRepGenByIdResponse>> UpdateWorkFlowRepGenById(ParameterService.UpdateWorkFlowRepGenByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateWorkFlowRepGenByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateWorkFlowRepGenByIdResponse>>("updateWorkFlowRepGenByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UpdateYellowHammerByIdResponse>> UpdateYellowHammerById(ParameterService.UpdateYellowHammerByIdRequest payload) =>
    RequestAsync<ParameterService.UpdateYellowHammerByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UpdateYellowHammerByIdResponse>>("updateYellowHammerByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<RemittanceService.GetRemittanceSelectFieldsResponse>> GetRemittanceSelectFields(RemittanceService.RemittanceSelectFieldsRequest payload) =>
    RequestAsync<RemittanceService.RemittanceSelectFieldsRequest,  Memberwise.Symxify.Models.Result<RemittanceService.GetRemittanceSelectFieldsResponse>>("getRemittanceSelectFields", payload, "remittance");


public Task<Memberwise.Symxify.Models.Result<RemittanceService.UpdateRemittanceByIdResponse>> UpdateRemittanceById(RemittanceService.UpdateRemittanceByIdRequest payload) =>
    RequestAsync<RemittanceService.UpdateRemittanceByIdRequest,  Memberwise.Symxify.Models.Result<RemittanceService.UpdateRemittanceByIdResponse>>("updateRemittanceByID", payload, "remittance");


public Task<Memberwise.Symxify.Models.Result<RemittanceService.CreateRemittanceResponse>> CreateRemittance(RemittanceService.CreateRemittanceRequest payload) =>
    RequestAsync<RemittanceService.CreateRemittanceRequest,  Memberwise.Symxify.Models.Result<RemittanceService.CreateRemittanceResponse>>("createRemittance", payload, "remittance");


public Task<Memberwise.Symxify.Models.Result<RemittanceService.DeleteRemittanceResponse>> DeleteRemittance(RemittanceService.DeleteRemittanceRequest payload) =>
    RequestAsync<RemittanceService.DeleteRemittanceRequest,  Memberwise.Symxify.Models.Result<RemittanceService.DeleteRemittanceResponse>>("deleteRemittance", payload, "remittance");


public Task<Memberwise.Symxify.Models.Result<CreditReportService.OrderReportResponse>> OrderReport(CreditReportService.OrderReportRequest payload) =>
    RequestAsync<CreditReportService.OrderReportRequest,  Memberwise.Symxify.Models.Result<CreditReportService.OrderReportResponse>>("orderReport", payload, "creditreport");


public Task<Memberwise.Symxify.Models.Result<CreditReportService.ImportReportResponse>> ImportReport(CreditReportService.ImportReportRequest payload) =>
    RequestAsync<CreditReportService.ImportReportRequest,  Memberwise.Symxify.Models.Result<CreditReportService.ImportReportResponse>>("importReport", payload, "creditreport");


public Task<Memberwise.Symxify.Models.Result<CorpTransferService.GetCorpTransferSelectFieldsResponse>> GetCorpTransferSelectFields(CorpTransferService.CorpTransferSelectFieldsRequest payload) =>
    RequestAsync<CorpTransferService.CorpTransferSelectFieldsRequest,  Memberwise.Symxify.Models.Result<CorpTransferService.GetCorpTransferSelectFieldsResponse>>("getCorpTransferSelectFields", payload, "corptransfer");


public Task<Memberwise.Symxify.Models.Result<UserService.GetUserSelectFieldsResponse>> GetUserSelectFields(UserService.UserSelectFieldsRequest payload) =>
    RequestAsync<UserService.UserSelectFieldsRequest,  Memberwise.Symxify.Models.Result<UserService.GetUserSelectFieldsResponse>>("getUserSelectFields", payload, "user");


public Task<Memberwise.Symxify.Models.Result<UserService.GetUserSelectFieldsFilterChildrenResponse>> GetUserSelectFieldsFilterChildren(UserService.UserSelectFieldsFilterChildrenRequest payload) =>
    RequestAsync<UserService.UserSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<UserService.GetUserSelectFieldsFilterChildrenResponse>>("getUserSelectFieldsFilterChildren", payload, "user");


public Task<Memberwise.Symxify.Models.Result<UserService.GetActivityPagedListSelectFieldsResponse>> GetActivityPagedListSelectFields(UserService.ActivityPagedListSelectFieldsRequest payload) =>
    RequestAsync<UserService.ActivityPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<UserService.GetActivityPagedListSelectFieldsResponse>>("getActivityPagedListSelectFields", payload, "user");


public Task<Memberwise.Symxify.Models.Result<UserService.SearchActivityPagedSelectFieldsResponse>> SearchActivityPagedSelectFields(UserService.ActivitySearchPagedSelectFieldsRequest payload) =>
    RequestAsync<UserService.ActivitySearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<UserService.SearchActivityPagedSelectFieldsResponse>>("searchActivityPagedSelectFields", payload, "user");


public Task<Memberwise.Symxify.Models.Result<UserService.GetUserTrackingSelectFieldsResponse>> GetUserTrackingSelectFields(UserService.UserTrackingSelectFieldsRequest payload) =>
    RequestAsync<UserService.UserTrackingSelectFieldsRequest,  Memberwise.Symxify.Models.Result<UserService.GetUserTrackingSelectFieldsResponse>>("getUserTrackingSelectFields", payload, "user");


public Task<Memberwise.Symxify.Models.Result<UserService.GetUserTrackingPagedListSelectFieldsResponse>> GetUserTrackingPagedListSelectFields(UserService.UserTrackingPagedListSelectFieldsRequest payload) =>
    RequestAsync<UserService.UserTrackingPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<UserService.GetUserTrackingPagedListSelectFieldsResponse>>("getUserTrackingPagedListSelectFields", payload, "user");


public Task<Memberwise.Symxify.Models.Result<UserService.SearchUserTrackingPagedSelectFieldsResponse>> SearchUserTrackingPagedSelectFields(UserService.UserTrackingSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<UserService.UserTrackingSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<UserService.SearchUserTrackingPagedSelectFieldsResponse>>("searchUserTrackingPagedSelectFields", payload, "user");


public Task<Memberwise.Symxify.Models.Result<UserService.UpdateUserByIdResponse>> UpdateUserById(UserService.UpdateUserByIdRequest payload) =>
    RequestAsync<UserService.UpdateUserByIdRequest,  Memberwise.Symxify.Models.Result<UserService.UpdateUserByIdResponse>>("updateUserByID", payload, "user");


public Task<Memberwise.Symxify.Models.Result<UserService.UpdateUserTrackingByIdResponse>> UpdateUserTrackingById(UserService.UpdateUserTrackingByIdRequest payload) =>
    RequestAsync<UserService.UpdateUserTrackingByIdRequest,  Memberwise.Symxify.Models.Result<UserService.UpdateUserTrackingByIdResponse>>("updateUserTrackingByID", payload, "user");


public Task<Memberwise.Symxify.Models.Result<UserService.CreateUserTrackingResponse>> CreateUserTracking(UserService.CreateUserTrackingRequest payload) =>
    RequestAsync<UserService.CreateUserTrackingRequest,  Memberwise.Symxify.Models.Result<UserService.CreateUserTrackingResponse>>("createUserTracking", payload, "user");


public Task<Memberwise.Symxify.Models.Result<UserService.DeleteUserTrackingResponse>> DeleteUserTracking(UserService.DeleteUserTrackingRequest payload) =>
    RequestAsync<UserService.DeleteUserTrackingRequest,  Memberwise.Symxify.Models.Result<UserService.DeleteUserTrackingResponse>>("deleteUserTracking", payload, "user");


public Task<Memberwise.Symxify.Models.Result<GeneralLedgerService.GetGlAccountSelectFieldsResponse>> GetGlAccountSelectFields(GeneralLedgerService.GlAccountSelectFieldsRequest payload) =>
    RequestAsync<GeneralLedgerService.GlAccountSelectFieldsRequest,  Memberwise.Symxify.Models.Result<GeneralLedgerService.GetGlAccountSelectFieldsResponse>>("getGlAccountSelectFields", payload, "generalledger");


public Task<Memberwise.Symxify.Models.Result<GeneralLedgerService.GetGlAccountSelectFieldsFilterChildrenResponse>> GetGlAccountSelectFieldsFilterChildren(GeneralLedgerService.GlAccountSelectFieldsFilterChildrenRequest payload) =>
    RequestAsync<GeneralLedgerService.GlAccountSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<GeneralLedgerService.GetGlAccountSelectFieldsFilterChildrenResponse>>("getGlAccountSelectFieldsFilterChildren", payload, "generalledger");


public Task<Memberwise.Symxify.Models.Result<GeneralLedgerService.GetGlAccountFmHistoryPagedListSelectFieldsResponse>> GetGlAccountFmHistoryPagedListSelectFields(GeneralLedgerService.GlAccountFmHistoryPagedListSelectFieldsRequest payload) =>
    RequestAsync<GeneralLedgerService.GlAccountFmHistoryPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<GeneralLedgerService.GetGlAccountFmHistoryPagedListSelectFieldsResponse>>("getGlAccountFmHistoryPagedListSelectFields", payload, "generalledger");


public Task<Memberwise.Symxify.Models.Result<GeneralLedgerService.SearchGlAccountFmHistoryPagedSelectFieldsResponse>> SearchGlAccountFmHistoryPagedSelectFields(GeneralLedgerService.GlAccountFmHistorySearchPagedSelectFieldsRequest payload) =>
    RequestAsync<GeneralLedgerService.GlAccountFmHistorySearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<GeneralLedgerService.SearchGlAccountFmHistoryPagedSelectFieldsResponse>>("searchGlAccountFmHistoryPagedSelectFields", payload, "generalledger");


public Task<Memberwise.Symxify.Models.Result<GeneralLedgerService.GetGlAccountTrackingSelectFieldsResponse>> GetGlAccountTrackingSelectFields(GeneralLedgerService.GlAccountTrackingSelectFieldsRequest payload) =>
    RequestAsync<GeneralLedgerService.GlAccountTrackingSelectFieldsRequest,  Memberwise.Symxify.Models.Result<GeneralLedgerService.GetGlAccountTrackingSelectFieldsResponse>>("getGlAccountTrackingSelectFields", payload, "generalledger");


public Task<Memberwise.Symxify.Models.Result<GeneralLedgerService.GetGlAccountTrackingPagedListSelectFieldsResponse>> GetGlAccountTrackingPagedListSelectFields(GeneralLedgerService.GlAccountTrackingPagedListSelectFieldsRequest payload) =>
    RequestAsync<GeneralLedgerService.GlAccountTrackingPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<GeneralLedgerService.GetGlAccountTrackingPagedListSelectFieldsResponse>>("getGlAccountTrackingPagedListSelectFields", payload, "generalledger");


public Task<Memberwise.Symxify.Models.Result<GeneralLedgerService.SearchGlAccountTrackingPagedSelectFieldsResponse>> SearchGlAccountTrackingPagedSelectFields(GeneralLedgerService.GlAccountTrackingSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<GeneralLedgerService.GlAccountTrackingSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<GeneralLedgerService.SearchGlAccountTrackingPagedSelectFieldsResponse>>("searchGlAccountTrackingPagedSelectFields", payload, "generalledger");


public Task<Memberwise.Symxify.Models.Result<GeneralLedgerService.GetGlHistoryPagedListSelectFieldsResponse>> GetGlHistoryPagedListSelectFields(GeneralLedgerService.GlHistoryPagedListSelectFieldsRequest payload) =>
    RequestAsync<GeneralLedgerService.GlHistoryPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<GeneralLedgerService.GetGlHistoryPagedListSelectFieldsResponse>>("getGlHistoryPagedListSelectFields", payload, "generalledger");


public Task<Memberwise.Symxify.Models.Result<GeneralLedgerService.SearchGlHistoryPagedSelectFieldsResponse>> SearchGlHistoryPagedSelectFields(GeneralLedgerService.GlHistorySearchPagedSelectFieldsRequest payload) =>
    RequestAsync<GeneralLedgerService.GlHistorySearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<GeneralLedgerService.SearchGlHistoryPagedSelectFieldsResponse>>("searchGlHistoryPagedSelectFields", payload, "generalledger");


public Task<Memberwise.Symxify.Models.Result<GeneralLedgerService.GetGlSubaccountSelectFieldsResponse>> GetGlSubaccountSelectFields(GeneralLedgerService.GlSubaccountSelectFieldsRequest payload) =>
    RequestAsync<GeneralLedgerService.GlSubaccountSelectFieldsRequest,  Memberwise.Symxify.Models.Result<GeneralLedgerService.GetGlSubaccountSelectFieldsResponse>>("getGlSubaccountSelectFields", payload, "generalledger");


public Task<Memberwise.Symxify.Models.Result<GeneralLedgerService.GetGlSubaccountPagedListSelectFieldsResponse>> GetGlSubaccountPagedListSelectFields(GeneralLedgerService.GlSubaccountPagedListSelectFieldsRequest payload) =>
    RequestAsync<GeneralLedgerService.GlSubaccountPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<GeneralLedgerService.GetGlSubaccountPagedListSelectFieldsResponse>>("getGlSubaccountPagedListSelectFields", payload, "generalledger");


public Task<Memberwise.Symxify.Models.Result<GeneralLedgerService.SearchGlSubaccountPagedSelectFieldsResponse>> SearchGlSubaccountPagedSelectFields(GeneralLedgerService.GlSubaccountSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<GeneralLedgerService.GlSubaccountSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<GeneralLedgerService.SearchGlSubaccountPagedSelectFieldsResponse>>("searchGlSubaccountPagedSelectFields", payload, "generalledger");


public Task<Memberwise.Symxify.Models.Result<GeneralLedgerService.UpdateGlAccountByIdResponse>> UpdateGlAccountById(GeneralLedgerService.UpdateGlAccountByIdRequest payload) =>
    RequestAsync<GeneralLedgerService.UpdateGlAccountByIdRequest,  Memberwise.Symxify.Models.Result<GeneralLedgerService.UpdateGlAccountByIdResponse>>("updateGlAccountByID", payload, "generalledger");


public Task<Memberwise.Symxify.Models.Result<GeneralLedgerService.UpdateGlAccountTrackingByIdResponse>> UpdateGlAccountTrackingById(GeneralLedgerService.UpdateGlAccountTrackingByIdRequest payload) =>
    RequestAsync<GeneralLedgerService.UpdateGlAccountTrackingByIdRequest,  Memberwise.Symxify.Models.Result<GeneralLedgerService.UpdateGlAccountTrackingByIdResponse>>("updateGlAccountTrackingByID", payload, "generalledger");


public Task<Memberwise.Symxify.Models.Result<GeneralLedgerService.UpdateGlSubaccountByIdResponse>> UpdateGlSubaccountById(GeneralLedgerService.UpdateGlSubaccountByIdRequest payload) =>
    RequestAsync<GeneralLedgerService.UpdateGlSubaccountByIdRequest,  Memberwise.Symxify.Models.Result<GeneralLedgerService.UpdateGlSubaccountByIdResponse>>("updateGlSubaccountByID", payload, "generalledger");


public Task<Memberwise.Symxify.Models.Result<GeneralLedgerService.CreateGlAccountResponse>> CreateGlAccount(GeneralLedgerService.CreateGlAccountRequest payload) =>
    RequestAsync<GeneralLedgerService.CreateGlAccountRequest,  Memberwise.Symxify.Models.Result<GeneralLedgerService.CreateGlAccountResponse>>("createGlAccount", payload, "generalledger");


public Task<Memberwise.Symxify.Models.Result<GeneralLedgerService.CreateGlAccountTrackingResponse>> CreateGlAccountTracking(GeneralLedgerService.CreateGlAccountTrackingRequest payload) =>
    RequestAsync<GeneralLedgerService.CreateGlAccountTrackingRequest,  Memberwise.Symxify.Models.Result<GeneralLedgerService.CreateGlAccountTrackingResponse>>("createGlAccountTracking", payload, "generalledger");


public Task<Memberwise.Symxify.Models.Result<GeneralLedgerService.CreateGlSubaccountResponse>> CreateGlSubaccount(GeneralLedgerService.CreateGlSubaccountRequest payload) =>
    RequestAsync<GeneralLedgerService.CreateGlSubaccountRequest,  Memberwise.Symxify.Models.Result<GeneralLedgerService.CreateGlSubaccountResponse>>("createGlSubaccount", payload, "generalledger");


public Task<Memberwise.Symxify.Models.Result<GeneralLedgerService.DeleteGlAccountTrackingResponse>> DeleteGlAccountTracking(GeneralLedgerService.DeleteGlAccountTrackingRequest payload) =>
    RequestAsync<GeneralLedgerService.DeleteGlAccountTrackingRequest,  Memberwise.Symxify.Models.Result<GeneralLedgerService.DeleteGlAccountTrackingResponse>>("deleteGlAccountTracking", payload, "generalledger");


public Task<Memberwise.Symxify.Models.Result<GeneralLedgerService.DeleteGlSubaccountResponse>> DeleteGlSubaccount(GeneralLedgerService.DeleteGlSubaccountRequest payload) =>
    RequestAsync<GeneralLedgerService.DeleteGlSubaccountRequest,  Memberwise.Symxify.Models.Result<GeneralLedgerService.DeleteGlSubaccountResponse>>("deleteGlSubaccount", payload, "generalledger");


public Task<Memberwise.Symxify.Models.Result<NonAccountNameService.GetNonAcctNameSelectFieldsResponse>> GetNonAcctNameSelectFields(NonAccountNameService.NonAcctNameSelectFieldsRequest payload) =>
    RequestAsync<NonAccountNameService.NonAcctNameSelectFieldsRequest,  Memberwise.Symxify.Models.Result<NonAccountNameService.GetNonAcctNameSelectFieldsResponse>>("getNonAcctNameSelectFields", payload, "nonaccountname");


public Task<Memberwise.Symxify.Models.Result<NonAccountNameService.GetNonAcctNameSelectFieldsFilterChildrenResponse>> GetNonAcctNameSelectFieldsFilterChildren(NonAccountNameService.NonAcctNameSelectFieldsFilterChildrenRequest payload) =>
    RequestAsync<NonAccountNameService.NonAcctNameSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<NonAccountNameService.GetNonAcctNameSelectFieldsFilterChildrenResponse>>("getNonAcctNameSelectFieldsFilterChildren", payload, "nonaccountname");


public Task<Memberwise.Symxify.Models.Result<NonAccountNameService.GetNonAcctNameFmHistoryPagedListSelectFieldsResponse>> GetNonAcctNameFmHistoryPagedListSelectFields(NonAccountNameService.NonAcctNameFmHistoryPagedListSelectFieldsRequest payload) =>
    RequestAsync<NonAccountNameService.NonAcctNameFmHistoryPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<NonAccountNameService.GetNonAcctNameFmHistoryPagedListSelectFieldsResponse>>("getNonAcctNameFmHistoryPagedListSelectFields", payload, "nonaccountname");


public Task<Memberwise.Symxify.Models.Result<NonAccountNameService.SearchNonAcctNameFmHistoryPagedSelectFieldsResponse>> SearchNonAcctNameFmHistoryPagedSelectFields(NonAccountNameService.NonAcctNameFmHistorySearchPagedSelectFieldsRequest payload) =>
    RequestAsync<NonAccountNameService.NonAcctNameFmHistorySearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<NonAccountNameService.SearchNonAcctNameFmHistoryPagedSelectFieldsResponse>>("searchNonAcctNameFmHistoryPagedSelectFields", payload, "nonaccountname");


public Task<Memberwise.Symxify.Models.Result<NonAccountNameService.UpdateNonAcctNameByIdResponse>> UpdateNonAcctNameById(NonAccountNameService.UpdateNonAcctNameByIdRequest payload) =>
    RequestAsync<NonAccountNameService.UpdateNonAcctNameByIdRequest,  Memberwise.Symxify.Models.Result<NonAccountNameService.UpdateNonAcctNameByIdResponse>>("updateNonAcctNameByID", payload, "nonaccountname");


public Task<Memberwise.Symxify.Models.Result<NonAccountNameService.CreateNonAcctNameResponse>> CreateNonAcctName(NonAccountNameService.CreateNonAcctNameRequest payload) =>
    RequestAsync<NonAccountNameService.CreateNonAcctNameRequest,  Memberwise.Symxify.Models.Result<NonAccountNameService.CreateNonAcctNameResponse>>("createNonAcctName", payload, "nonaccountname");


public Task<Memberwise.Symxify.Models.Result<NonAccountNameService.DeleteNonAcctNameResponse>> DeleteNonAcctName(NonAccountNameService.DeleteNonAcctNameRequest payload) =>
    RequestAsync<NonAccountNameService.DeleteNonAcctNameRequest,  Memberwise.Symxify.Models.Result<NonAccountNameService.DeleteNonAcctNameResponse>>("deleteNonAcctName", payload, "nonaccountname");


public Task<Memberwise.Symxify.Models.Result<DealerService.GetDealerSelectFieldsResponse>> GetDealerSelectFields(DealerService.DealerSelectFieldsRequest payload) =>
    RequestAsync<DealerService.DealerSelectFieldsRequest,  Memberwise.Symxify.Models.Result<DealerService.GetDealerSelectFieldsResponse>>("getDealerSelectFields", payload, "dealer");


public Task<Memberwise.Symxify.Models.Result<DealerService.GetDealerSelectFieldsFilterChildrenResponse>> GetDealerSelectFieldsFilterChildren(DealerService.DealerSelectFieldsFilterChildrenRequest payload) =>
    RequestAsync<DealerService.DealerSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<DealerService.GetDealerSelectFieldsFilterChildrenResponse>>("getDealerSelectFieldsFilterChildren", payload, "dealer");


public Task<Memberwise.Symxify.Models.Result<DealerService.GetDealerCommentSelectFieldsResponse>> GetDealerCommentSelectFields(DealerService.DealerCommentSelectFieldsRequest payload) =>
    RequestAsync<DealerService.DealerCommentSelectFieldsRequest,  Memberwise.Symxify.Models.Result<DealerService.GetDealerCommentSelectFieldsResponse>>("getDealerCommentSelectFields", payload, "dealer");


public Task<Memberwise.Symxify.Models.Result<DealerService.GetDealerCommentPagedListSelectFieldsResponse>> GetDealerCommentPagedListSelectFields(DealerService.DealerCommentPagedListSelectFieldsRequest payload) =>
    RequestAsync<DealerService.DealerCommentPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<DealerService.GetDealerCommentPagedListSelectFieldsResponse>>("getDealerCommentPagedListSelectFields", payload, "dealer");


public Task<Memberwise.Symxify.Models.Result<DealerService.SearchDealerCommentPagedSelectFieldsResponse>> SearchDealerCommentPagedSelectFields(DealerService.DealerCommentSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<DealerService.DealerCommentSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<DealerService.SearchDealerCommentPagedSelectFieldsResponse>>("searchDealerCommentPagedSelectFields", payload, "dealer");


public Task<Memberwise.Symxify.Models.Result<DealerService.GetDealerFmHistoryPagedListSelectFieldsResponse>> GetDealerFmHistoryPagedListSelectFields(DealerService.DealerFmHistoryPagedListSelectFieldsRequest payload) =>
    RequestAsync<DealerService.DealerFmHistoryPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<DealerService.GetDealerFmHistoryPagedListSelectFieldsResponse>>("getDealerFmHistoryPagedListSelectFields", payload, "dealer");


public Task<Memberwise.Symxify.Models.Result<DealerService.SearchDealerFmHistoryPagedSelectFieldsResponse>> SearchDealerFmHistoryPagedSelectFields(DealerService.DealerFmHistorySearchPagedSelectFieldsRequest payload) =>
    RequestAsync<DealerService.DealerFmHistorySearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<DealerService.SearchDealerFmHistoryPagedSelectFieldsResponse>>("searchDealerFmHistoryPagedSelectFields", payload, "dealer");


public Task<Memberwise.Symxify.Models.Result<DealerService.GetDealerNoteSelectFieldsResponse>> GetDealerNoteSelectFields(DealerService.DealerNoteSelectFieldsRequest payload) =>
    RequestAsync<DealerService.DealerNoteSelectFieldsRequest,  Memberwise.Symxify.Models.Result<DealerService.GetDealerNoteSelectFieldsResponse>>("getDealerNoteSelectFields", payload, "dealer");


public Task<Memberwise.Symxify.Models.Result<DealerService.GetDealerNotePagedListSelectFieldsResponse>> GetDealerNotePagedListSelectFields(DealerService.DealerNotePagedListSelectFieldsRequest payload) =>
    RequestAsync<DealerService.DealerNotePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<DealerService.GetDealerNotePagedListSelectFieldsResponse>>("getDealerNotePagedListSelectFields", payload, "dealer");


public Task<Memberwise.Symxify.Models.Result<DealerService.SearchDealerNotePagedSelectFieldsResponse>> SearchDealerNotePagedSelectFields(DealerService.DealerNoteSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<DealerService.DealerNoteSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<DealerService.SearchDealerNotePagedSelectFieldsResponse>>("searchDealerNotePagedSelectFields", payload, "dealer");


public Task<Memberwise.Symxify.Models.Result<DealerService.GetDealerTrackingSelectFieldsResponse>> GetDealerTrackingSelectFields(DealerService.DealerTrackingSelectFieldsRequest payload) =>
    RequestAsync<DealerService.DealerTrackingSelectFieldsRequest,  Memberwise.Symxify.Models.Result<DealerService.GetDealerTrackingSelectFieldsResponse>>("getDealerTrackingSelectFields", payload, "dealer");


public Task<Memberwise.Symxify.Models.Result<DealerService.GetDealerTrackingPagedListSelectFieldsResponse>> GetDealerTrackingPagedListSelectFields(DealerService.DealerTrackingPagedListSelectFieldsRequest payload) =>
    RequestAsync<DealerService.DealerTrackingPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<DealerService.GetDealerTrackingPagedListSelectFieldsResponse>>("getDealerTrackingPagedListSelectFields", payload, "dealer");


public Task<Memberwise.Symxify.Models.Result<DealerService.SearchDealerTrackingPagedSelectFieldsResponse>> SearchDealerTrackingPagedSelectFields(DealerService.DealerTrackingSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<DealerService.DealerTrackingSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<DealerService.SearchDealerTrackingPagedSelectFieldsResponse>>("searchDealerTrackingPagedSelectFields", payload, "dealer");


public Task<Memberwise.Symxify.Models.Result<DealerService.GetReservePlanSelectFieldsResponse>> GetReservePlanSelectFields(DealerService.ReservePlanSelectFieldsRequest payload) =>
    RequestAsync<DealerService.ReservePlanSelectFieldsRequest,  Memberwise.Symxify.Models.Result<DealerService.GetReservePlanSelectFieldsResponse>>("getReservePlanSelectFields", payload, "dealer");


public Task<Memberwise.Symxify.Models.Result<DealerService.GetReservePlanSelectFieldsFilterChildrenResponse>> GetReservePlanSelectFieldsFilterChildren(DealerService.ReservePlanSelectFieldsFilterChildrenRequest payload) =>
    RequestAsync<DealerService.ReservePlanSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<DealerService.GetReservePlanSelectFieldsFilterChildrenResponse>>("getReservePlanSelectFieldsFilterChildren", payload, "dealer");


public Task<Memberwise.Symxify.Models.Result<DealerService.GetReservePlanPagedListSelectFieldsResponse>> GetReservePlanPagedListSelectFields(DealerService.ReservePlanPagedListSelectFieldsRequest payload) =>
    RequestAsync<DealerService.ReservePlanPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<DealerService.GetReservePlanPagedListSelectFieldsResponse>>("getReservePlanPagedListSelectFields", payload, "dealer");


public Task<Memberwise.Symxify.Models.Result<DealerService.SearchReservePlanPagedSelectFieldsResponse>> SearchReservePlanPagedSelectFields(DealerService.ReservePlanSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<DealerService.ReservePlanSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<DealerService.SearchReservePlanPagedSelectFieldsResponse>>("searchReservePlanPagedSelectFields", payload, "dealer");


public Task<Memberwise.Symxify.Models.Result<DealerService.GetReservePlanLoanSelectFieldsResponse>> GetReservePlanLoanSelectFields(DealerService.ReservePlanLoanSelectFieldsRequest payload) =>
    RequestAsync<DealerService.ReservePlanLoanSelectFieldsRequest,  Memberwise.Symxify.Models.Result<DealerService.GetReservePlanLoanSelectFieldsResponse>>("getReservePlanLoanSelectFields", payload, "dealer");


public Task<Memberwise.Symxify.Models.Result<DealerService.GetReservePlanLoanPagedListSelectFieldsResponse>> GetReservePlanLoanPagedListSelectFields(DealerService.ReservePlanLoanPagedListSelectFieldsRequest payload) =>
    RequestAsync<DealerService.ReservePlanLoanPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<DealerService.GetReservePlanLoanPagedListSelectFieldsResponse>>("getReservePlanLoanPagedListSelectFields", payload, "dealer");


public Task<Memberwise.Symxify.Models.Result<DealerService.SearchReservePlanLoanPagedSelectFieldsResponse>> SearchReservePlanLoanPagedSelectFields(DealerService.ReservePlanLoanSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<DealerService.ReservePlanLoanSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<DealerService.SearchReservePlanLoanPagedSelectFieldsResponse>>("searchReservePlanLoanPagedSelectFields", payload, "dealer");


public Task<Memberwise.Symxify.Models.Result<DealerService.GetReservePlanTrackingSelectFieldsResponse>> GetReservePlanTrackingSelectFields(DealerService.ReservePlanTrackingSelectFieldsRequest payload) =>
    RequestAsync<DealerService.ReservePlanTrackingSelectFieldsRequest,  Memberwise.Symxify.Models.Result<DealerService.GetReservePlanTrackingSelectFieldsResponse>>("getReservePlanTrackingSelectFields", payload, "dealer");


public Task<Memberwise.Symxify.Models.Result<DealerService.GetReservePlanTrackingPagedListSelectFieldsResponse>> GetReservePlanTrackingPagedListSelectFields(DealerService.ReservePlanTrackingPagedListSelectFieldsRequest payload) =>
    RequestAsync<DealerService.ReservePlanTrackingPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<DealerService.GetReservePlanTrackingPagedListSelectFieldsResponse>>("getReservePlanTrackingPagedListSelectFields", payload, "dealer");


public Task<Memberwise.Symxify.Models.Result<DealerService.SearchReservePlanTrackingPagedSelectFieldsResponse>> SearchReservePlanTrackingPagedSelectFields(DealerService.ReservePlanTrackingSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<DealerService.ReservePlanTrackingSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<DealerService.SearchReservePlanTrackingPagedSelectFieldsResponse>>("searchReservePlanTrackingPagedSelectFields", payload, "dealer");


public Task<Memberwise.Symxify.Models.Result<DealerService.GetReservePlanTransactionPagedListSelectFieldsResponse>> GetReservePlanTransactionPagedListSelectFields(DealerService.ReservePlanTransactionPagedListSelectFieldsRequest payload) =>
    RequestAsync<DealerService.ReservePlanTransactionPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<DealerService.GetReservePlanTransactionPagedListSelectFieldsResponse>>("getReservePlanTransactionPagedListSelectFields", payload, "dealer");


public Task<Memberwise.Symxify.Models.Result<DealerService.SearchReservePlanTransactionPagedSelectFieldsResponse>> SearchReservePlanTransactionPagedSelectFields(DealerService.ReservePlanTransactionSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<DealerService.ReservePlanTransactionSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<DealerService.SearchReservePlanTransactionPagedSelectFieldsResponse>>("searchReservePlanTransactionPagedSelectFields", payload, "dealer");


public Task<Memberwise.Symxify.Models.Result<AccountsPayableService.GetVendorSelectFieldsResponse>> GetVendorSelectFields(AccountsPayableService.VendorSelectFieldsRequest payload) =>
    RequestAsync<AccountsPayableService.VendorSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountsPayableService.GetVendorSelectFieldsResponse>>("getVendorSelectFields", payload, "accountspayable");


public Task<Memberwise.Symxify.Models.Result<AccountsPayableService.GetVendorSelectFieldsFilterChildrenResponse>> GetVendorSelectFieldsFilterChildren(AccountsPayableService.VendorSelectFieldsFilterChildrenRequest payload) =>
    RequestAsync<AccountsPayableService.VendorSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<AccountsPayableService.GetVendorSelectFieldsFilterChildrenResponse>>("getVendorSelectFieldsFilterChildren", payload, "accountspayable");


public Task<Memberwise.Symxify.Models.Result<AccountsPayableService.GetInvoiceSelectFieldsResponse>> GetInvoiceSelectFields(AccountsPayableService.InvoiceSelectFieldsRequest payload) =>
    RequestAsync<AccountsPayableService.InvoiceSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountsPayableService.GetInvoiceSelectFieldsResponse>>("getInvoiceSelectFields", payload, "accountspayable");


public Task<Memberwise.Symxify.Models.Result<AccountsPayableService.GetInvoiceSelectFieldsFilterChildrenResponse>> GetInvoiceSelectFieldsFilterChildren(AccountsPayableService.InvoiceSelectFieldsFilterChildrenRequest payload) =>
    RequestAsync<AccountsPayableService.InvoiceSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<AccountsPayableService.GetInvoiceSelectFieldsFilterChildrenResponse>>("getInvoiceSelectFieldsFilterChildren", payload, "accountspayable");


public Task<Memberwise.Symxify.Models.Result<AccountsPayableService.GetInvoicePagedListSelectFieldsResponse>> GetInvoicePagedListSelectFields(AccountsPayableService.InvoicePagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountsPayableService.InvoicePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountsPayableService.GetInvoicePagedListSelectFieldsResponse>>("getInvoicePagedListSelectFields", payload, "accountspayable");


public Task<Memberwise.Symxify.Models.Result<AccountsPayableService.SearchInvoicePagedSelectFieldsResponse>> SearchInvoicePagedSelectFields(AccountsPayableService.InvoiceSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountsPayableService.InvoiceSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountsPayableService.SearchInvoicePagedSelectFieldsResponse>>("searchInvoicePagedSelectFields", payload, "accountspayable");


public Task<Memberwise.Symxify.Models.Result<AccountsPayableService.GetInvoiceNoteSelectFieldsResponse>> GetInvoiceNoteSelectFields(AccountsPayableService.InvoiceNoteSelectFieldsRequest payload) =>
    RequestAsync<AccountsPayableService.InvoiceNoteSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountsPayableService.GetInvoiceNoteSelectFieldsResponse>>("getInvoiceNoteSelectFields", payload, "accountspayable");


public Task<Memberwise.Symxify.Models.Result<AccountsPayableService.GetInvoiceNotePagedListSelectFieldsResponse>> GetInvoiceNotePagedListSelectFields(AccountsPayableService.InvoiceNotePagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountsPayableService.InvoiceNotePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountsPayableService.GetInvoiceNotePagedListSelectFieldsResponse>>("getInvoiceNotePagedListSelectFields", payload, "accountspayable");


public Task<Memberwise.Symxify.Models.Result<AccountsPayableService.SearchInvoiceNotePagedSelectFieldsResponse>> SearchInvoiceNotePagedSelectFields(AccountsPayableService.InvoiceNoteSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountsPayableService.InvoiceNoteSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountsPayableService.SearchInvoiceNotePagedSelectFieldsResponse>>("searchInvoiceNotePagedSelectFields", payload, "accountspayable");


public Task<Memberwise.Symxify.Models.Result<AccountsPayableService.GetVendorFmHistoryPagedListSelectFieldsResponse>> GetVendorFmHistoryPagedListSelectFields(AccountsPayableService.VendorFmHistoryPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountsPayableService.VendorFmHistoryPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountsPayableService.GetVendorFmHistoryPagedListSelectFieldsResponse>>("getVendorFmHistoryPagedListSelectFields", payload, "accountspayable");


public Task<Memberwise.Symxify.Models.Result<AccountsPayableService.SearchVendorFmHistoryPagedSelectFieldsResponse>> SearchVendorFmHistoryPagedSelectFields(AccountsPayableService.VendorFmHistorySearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountsPayableService.VendorFmHistorySearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountsPayableService.SearchVendorFmHistoryPagedSelectFieldsResponse>>("searchVendorFmHistoryPagedSelectFields", payload, "accountspayable");


public Task<Memberwise.Symxify.Models.Result<AccountsPayableService.UpdateVendorByIdResponse>> UpdateVendorById(AccountsPayableService.UpdateVendorByIdRequest payload) =>
    RequestAsync<AccountsPayableService.UpdateVendorByIdRequest,  Memberwise.Symxify.Models.Result<AccountsPayableService.UpdateVendorByIdResponse>>("updateVendorByID", payload, "accountspayable");


public Task<Memberwise.Symxify.Models.Result<AccountsPayableService.UpdateInvoiceByIdResponse>> UpdateInvoiceById(AccountsPayableService.UpdateInvoiceByIdRequest payload) =>
    RequestAsync<AccountsPayableService.UpdateInvoiceByIdRequest,  Memberwise.Symxify.Models.Result<AccountsPayableService.UpdateInvoiceByIdResponse>>("updateInvoiceByID", payload, "accountspayable");


public Task<Memberwise.Symxify.Models.Result<AccountsPayableService.UpdateInvoiceNoteByIdResponse>> UpdateInvoiceNoteById(AccountsPayableService.UpdateInvoiceNoteByIdRequest payload) =>
    RequestAsync<AccountsPayableService.UpdateInvoiceNoteByIdRequest,  Memberwise.Symxify.Models.Result<AccountsPayableService.UpdateInvoiceNoteByIdResponse>>("updateInvoiceNoteByID", payload, "accountspayable");


public Task<Memberwise.Symxify.Models.Result<AccountsPayableService.CreateVendorResponse>> CreateVendor(AccountsPayableService.CreateVendorRequest payload) =>
    RequestAsync<AccountsPayableService.CreateVendorRequest,  Memberwise.Symxify.Models.Result<AccountsPayableService.CreateVendorResponse>>("createVendor", payload, "accountspayable");


public Task<Memberwise.Symxify.Models.Result<AccountsPayableService.CreateInvoiceResponse>> CreateInvoice(AccountsPayableService.CreateInvoiceRequest payload) =>
    RequestAsync<AccountsPayableService.CreateInvoiceRequest,  Memberwise.Symxify.Models.Result<AccountsPayableService.CreateInvoiceResponse>>("createInvoice", payload, "accountspayable");


public Task<Memberwise.Symxify.Models.Result<AccountsPayableService.CreateInvoiceNoteResponse>> CreateInvoiceNote(AccountsPayableService.CreateInvoiceNoteRequest payload) =>
    RequestAsync<AccountsPayableService.CreateInvoiceNoteRequest,  Memberwise.Symxify.Models.Result<AccountsPayableService.CreateInvoiceNoteResponse>>("createInvoiceNote", payload, "accountspayable");


public Task<Memberwise.Symxify.Models.Result<AccountsPayableService.DeleteVendorResponse>> DeleteVendor(AccountsPayableService.DeleteVendorRequest payload) =>
    RequestAsync<AccountsPayableService.DeleteVendorRequest,  Memberwise.Symxify.Models.Result<AccountsPayableService.DeleteVendorResponse>>("deleteVendor", payload, "accountspayable");


public Task<Memberwise.Symxify.Models.Result<AccountsPayableService.DeleteInvoiceResponse>> DeleteInvoice(AccountsPayableService.DeleteInvoiceRequest payload) =>
    RequestAsync<AccountsPayableService.DeleteInvoiceRequest,  Memberwise.Symxify.Models.Result<AccountsPayableService.DeleteInvoiceResponse>>("deleteInvoice", payload, "accountspayable");


public Task<Memberwise.Symxify.Models.Result<AccountsPayableService.DeleteInvoiceNoteResponse>> DeleteInvoiceNote(AccountsPayableService.DeleteInvoiceNoteRequest payload) =>
    RequestAsync<AccountsPayableService.DeleteInvoiceNoteRequest,  Memberwise.Symxify.Models.Result<AccountsPayableService.DeleteInvoiceNoteResponse>>("deleteInvoiceNote", payload, "accountspayable");


public Task<Memberwise.Symxify.Models.Result<EcaaService.AuthenticateResponse>> Authenticate(EcaaService.AuthenticateRequest payload) =>
    RequestAsync<EcaaService.AuthenticateRequest,  Memberwise.Symxify.Models.Result<EcaaService.AuthenticateResponse>>("authenticate", payload, "ecaa");


public Task<Memberwise.Symxify.Models.Result<EcaaService.AuthenticateWithAuthorizationResponse>> AuthenticateWithAuthorization(EcaaService.AuthenticateWithAuthorizationRequest payload) =>
    RequestAsync<EcaaService.AuthenticateWithAuthorizationRequest,  Memberwise.Symxify.Models.Result<EcaaService.AuthenticateWithAuthorizationResponse>>("authenticateWithAuthorization", payload, "ecaa");


public Task<Memberwise.Symxify.Models.Result<EcaaService.GetPrincipalsResponse>> GetPrincipals(EcaaService.GetPrincipalsRequest payload) =>
    RequestAsync<EcaaService.GetPrincipalsRequest,  Memberwise.Symxify.Models.Result<EcaaService.GetPrincipalsResponse>>("getPrincipals", payload, "ecaa");


public Task<Memberwise.Symxify.Models.Result<EcaaService.InitKerberosAuthenticationResponse>> InitKerberosAuthentication(EcaaService.InitKerberosAuthenticationRequest payload) =>
    RequestAsync<EcaaService.InitKerberosAuthenticationRequest,  Memberwise.Symxify.Models.Result<EcaaService.InitKerberosAuthenticationResponse>>("initKerberosAuthentication", payload, "ecaa");


public Task<Memberwise.Symxify.Models.Result<EcaaService.AuthorizeSymResponse>> AuthorizeSym(EcaaService.AuthorizeSymRequest payload) =>
    RequestAsync<EcaaService.AuthorizeSymRequest,  Memberwise.Symxify.Models.Result<EcaaService.AuthorizeSymResponse>>("authorizeSym", payload, "ecaa");


public Task<Memberwise.Symxify.Models.Result<EcaaService.ChangeSymitarPasswordResponse>> ChangeSymitarPassword(EcaaService.ChangeSymitarPasswordRequest payload) =>
    RequestAsync<EcaaService.ChangeSymitarPasswordRequest,  Memberwise.Symxify.Models.Result<EcaaService.ChangeSymitarPasswordResponse>>("changeSymitarPassword", payload, "ecaa");


public Task<Memberwise.Symxify.Models.Result<EcaaService.AuthenticateMemberResponse>> AuthenticateMember(EcaaService.AuthenticateMemberRequest payload) =>
    RequestAsync<EcaaService.AuthenticateMemberRequest,  Memberwise.Symxify.Models.Result<EcaaService.AuthenticateMemberResponse>>("authenticateMember", payload, "ecaa");


public Task<Memberwise.Symxify.Models.Result<EcaaService.AuthenticateServiceResponse>> AuthenticateService(EcaaService.AuthenticateServiceRequest payload) =>
    RequestAsync<EcaaService.AuthenticateServiceRequest,  Memberwise.Symxify.Models.Result<EcaaService.AuthenticateServiceResponse>>("authenticateService", payload, "ecaa");


public Task<Memberwise.Symxify.Models.Result<EcaaService.ChangeMemberHbPasswordResponse>> ChangeMemberHbPassword(EcaaService.ChangeMemberHbPasswordRequest payload) =>
    RequestAsync<EcaaService.ChangeMemberHbPasswordRequest,  Memberwise.Symxify.Models.Result<EcaaService.ChangeMemberHbPasswordResponse>>("changeMemberHBPassword", payload, "ecaa");


public Task<Memberwise.Symxify.Models.Result<EcaaService.ConvertToJwtResponse>> ConvertToJwt(EcaaService.ConvertToJwtRequest payload) =>
    RequestAsync<EcaaService.ConvertToJwtRequest,  Memberwise.Symxify.Models.Result<EcaaService.ConvertToJwtResponse>>("convertToJWT", payload, "ecaa");


public Task<Memberwise.Symxify.Models.Result<EcaaService.ConvertToSamlResponse>> ConvertToSaml(EcaaService.ConvertToSamlRequest payload) =>
    RequestAsync<EcaaService.ConvertToSamlRequest,  Memberwise.Symxify.Models.Result<EcaaService.ConvertToSamlResponse>>("convertToSAML", payload, "ecaa");


public Task<Memberwise.Symxify.Models.Result<TransactionsService.DepositResponse>> Deposit(TransactionsService.ShareDepositRequest payload) =>
    RequestAsync<TransactionsService.ShareDepositRequest,  Memberwise.Symxify.Models.Result<TransactionsService.DepositResponse>>("deposit", payload, "transactions");


public Task<Memberwise.Symxify.Models.Result<TransactionsService.WithdrawResponse>> Withdraw(TransactionsService.WithdrawalRequest payload) =>
    RequestAsync<TransactionsService.WithdrawalRequest,  Memberwise.Symxify.Models.Result<TransactionsService.WithdrawResponse>>("withdraw", payload, "transactions");


public Task<Memberwise.Symxify.Models.Result<TransactionsService.NewLoanResponse>> NewLoan(TransactionsService.NewLoanRequest payload) =>
    RequestAsync<TransactionsService.NewLoanRequest,  Memberwise.Symxify.Models.Result<TransactionsService.NewLoanResponse>>("newLoan", payload, "transactions");


public Task<Memberwise.Symxify.Models.Result<TransactionsService.PayBillResponse>> PayBill(TransactionsService.BillPaymentRequest payload) =>
    RequestAsync<TransactionsService.BillPaymentRequest,  Memberwise.Symxify.Models.Result<TransactionsService.PayBillResponse>>("payBill", payload, "transactions");


public Task<Memberwise.Symxify.Models.Result<TransactionsService.WithdrawFeeResponse>> WithdrawFee(TransactionsService.WithdrawFeeRequest payload) =>
    RequestAsync<TransactionsService.WithdrawFeeRequest,  Memberwise.Symxify.Models.Result<TransactionsService.WithdrawFeeResponse>>("withdrawFee", payload, "transactions");


public Task<Memberwise.Symxify.Models.Result<TransactionsService.TransferResponse>> Transfer(TransactionsService.TransferRequest payload) =>
    RequestAsync<TransactionsService.TransferRequest,  Memberwise.Symxify.Models.Result<TransactionsService.TransferResponse>>("transfer", payload, "transactions");


public Task<Memberwise.Symxify.Models.Result<TransactionsService.StopCheckPaymentResponse>> StopCheckPayment(TransactionsService.StopCheckPaymentRequest payload) =>
    RequestAsync<TransactionsService.StopCheckPaymentRequest,  Memberwise.Symxify.Models.Result<TransactionsService.StopCheckPaymentResponse>>("stopCheckPayment", payload, "transactions");


public Task<Memberwise.Symxify.Models.Result<TransactionsService.LoanAddonResponse>> LoanAddon(TransactionsService.LoanAddonRequest payload) =>
    RequestAsync<TransactionsService.LoanAddonRequest,  Memberwise.Symxify.Models.Result<TransactionsService.LoanAddonResponse>>("loanAddon", payload, "transactions");


public Task<Memberwise.Symxify.Models.Result<TransactionsService.PayLoanResponse>> PayLoan(TransactionsService.LoanPaymentRequest payload) =>
    RequestAsync<TransactionsService.LoanPaymentRequest,  Memberwise.Symxify.Models.Result<TransactionsService.PayLoanResponse>>("payLoan", payload, "transactions");


public Task<Memberwise.Symxify.Models.Result<TransactionsService.GlToGlPostResponse>> GlToGlPost(TransactionsService.GlToGlPostingRequest payload) =>
    RequestAsync<TransactionsService.GlToGlPostingRequest,  Memberwise.Symxify.Models.Result<TransactionsService.GlToGlPostResponse>>("glToGlPost", payload, "transactions");


public Task<Memberwise.Symxify.Models.Result<TransactionsService.GetDonorRecipientAccountsResponse>> GetDonorRecipientAccounts(TransactionsService.GetDonorRecipientAccountsRequest payload) =>
    RequestAsync<TransactionsService.GetDonorRecipientAccountsRequest,  Memberwise.Symxify.Models.Result<TransactionsService.GetDonorRecipientAccountsResponse>>("getDonorRecipientAccounts", payload, "transactions");


public Task<Memberwise.Symxify.Models.Result<ParticipantService.GetParticipantSelectFieldsResponse>> GetParticipantSelectFields(ParticipantService.ParticipantSelectFieldsRequest payload) =>
    RequestAsync<ParticipantService.ParticipantSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParticipantService.GetParticipantSelectFieldsResponse>>("getParticipantSelectFields", payload, "participant");


public Task<Memberwise.Symxify.Models.Result<ParticipantService.GetParticipantSelectFieldsFilterChildrenResponse>> GetParticipantSelectFieldsFilterChildren(ParticipantService.ParticipantSelectFieldsFilterChildrenRequest payload) =>
    RequestAsync<ParticipantService.ParticipantSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<ParticipantService.GetParticipantSelectFieldsFilterChildrenResponse>>("getParticipantSelectFieldsFilterChildren", payload, "participant");


public Task<Memberwise.Symxify.Models.Result<ParticipantService.GetParticipantFmHistoryPagedListSelectFieldsResponse>> GetParticipantFmHistoryPagedListSelectFields(ParticipantService.ParticipantFmHistoryPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParticipantService.ParticipantFmHistoryPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParticipantService.GetParticipantFmHistoryPagedListSelectFieldsResponse>>("getParticipantFmHistoryPagedListSelectFields", payload, "participant");


public Task<Memberwise.Symxify.Models.Result<ParticipantService.SearchParticipantFmHistoryPagedSelectFieldsResponse>> SearchParticipantFmHistoryPagedSelectFields(ParticipantService.ParticipantFmHistorySearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParticipantService.ParticipantFmHistorySearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParticipantService.SearchParticipantFmHistoryPagedSelectFieldsResponse>>("searchParticipantFmHistoryPagedSelectFields", payload, "participant");


public Task<Memberwise.Symxify.Models.Result<ParticipantService.GetParticipantNoteSelectFieldsResponse>> GetParticipantNoteSelectFields(ParticipantService.ParticipantNoteSelectFieldsRequest payload) =>
    RequestAsync<ParticipantService.ParticipantNoteSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParticipantService.GetParticipantNoteSelectFieldsResponse>>("getParticipantNoteSelectFields", payload, "participant");


public Task<Memberwise.Symxify.Models.Result<ParticipantService.GetParticipantNotePagedListSelectFieldsResponse>> GetParticipantNotePagedListSelectFields(ParticipantService.ParticipantNotePagedListSelectFieldsRequest payload) =>
    RequestAsync<ParticipantService.ParticipantNotePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParticipantService.GetParticipantNotePagedListSelectFieldsResponse>>("getParticipantNotePagedListSelectFields", payload, "participant");


public Task<Memberwise.Symxify.Models.Result<ParticipantService.SearchParticipantNotePagedSelectFieldsResponse>> SearchParticipantNotePagedSelectFields(ParticipantService.ParticipantNoteSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParticipantService.ParticipantNoteSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParticipantService.SearchParticipantNotePagedSelectFieldsResponse>>("searchParticipantNotePagedSelectFields", payload, "participant");


public Task<Memberwise.Symxify.Models.Result<ParticipantService.GetParticipantTransactionPagedListSelectFieldsResponse>> GetParticipantTransactionPagedListSelectFields(ParticipantService.ParticipantTransactionPagedListSelectFieldsRequest payload) =>
    RequestAsync<ParticipantService.ParticipantTransactionPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParticipantService.GetParticipantTransactionPagedListSelectFieldsResponse>>("getParticipantTransactionPagedListSelectFields", payload, "participant");


public Task<Memberwise.Symxify.Models.Result<ParticipantService.SearchParticipantTransactionPagedSelectFieldsResponse>> SearchParticipantTransactionPagedSelectFields(ParticipantService.ParticipantTransactionSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<ParticipantService.ParticipantTransactionSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParticipantService.SearchParticipantTransactionPagedSelectFieldsResponse>>("searchParticipantTransactionPagedSelectFields", payload, "participant");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetAccountSelectFieldsResponse>> GetAccountSelectFields(AccountService.AccountSelectFieldsRequest payload) =>
    RequestAsync<AccountService.AccountSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetAccountSelectFieldsResponse>>("getAccountSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetAccountSelectFieldsFilterChildrenResponse>> GetAccountSelectFieldsFilterChildren(AccountService.AccountSelectFieldsFilterChildrenRequest payload) =>
    RequestAsync<AccountService.AccountSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<AccountService.GetAccountSelectFieldsFilterChildrenResponse>>("getAccountSelectFieldsFilterChildren", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetBatchAchOrigSelectFieldsResponse>> GetBatchAchOrigSelectFields(AccountService.BatchAchOrigSelectFieldsRequest payload) =>
    RequestAsync<AccountService.BatchAchOrigSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetBatchAchOrigSelectFieldsResponse>>("getBatchAchOrigSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetBatchAchOrigPagedListSelectFieldsResponse>> GetBatchAchOrigPagedListSelectFields(AccountService.BatchAchOrigPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.BatchAchOrigPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetBatchAchOrigPagedListSelectFieldsResponse>>("getBatchAchOrigPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchBatchAchOrigPagedSelectFieldsResponse>> SearchBatchAchOrigPagedSelectFields(AccountService.BatchAchOrigSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.BatchAchOrigSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchBatchAchOrigPagedSelectFieldsResponse>>("searchBatchAchOrigPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetCardSelectFieldsResponse>> GetCardSelectFields(AccountService.CardSelectFieldsRequest payload) =>
    RequestAsync<AccountService.CardSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetCardSelectFieldsResponse>>("getCardSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetCardSelectFieldsFilterChildrenResponse>> GetCardSelectFieldsFilterChildren(AccountService.CardSelectFieldsFilterChildrenRequest payload) =>
    RequestAsync<AccountService.CardSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<AccountService.GetCardSelectFieldsFilterChildrenResponse>>("getCardSelectFieldsFilterChildren", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetCardPagedListSelectFieldsResponse>> GetCardPagedListSelectFields(AccountService.CardPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.CardPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetCardPagedListSelectFieldsResponse>>("getCardPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchCardPagedSelectFieldsResponse>> SearchCardPagedSelectFields(AccountService.CardSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.CardSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchCardPagedSelectFieldsResponse>>("searchCardPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetCardAccessSelectFieldsResponse>> GetCardAccessSelectFields(AccountService.CardAccessSelectFieldsRequest payload) =>
    RequestAsync<AccountService.CardAccessSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetCardAccessSelectFieldsResponse>>("getCardAccessSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetCardAccessPagedListSelectFieldsResponse>> GetCardAccessPagedListSelectFields(AccountService.CardAccessPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.CardAccessPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetCardAccessPagedListSelectFieldsResponse>>("getCardAccessPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchCardAccessPagedSelectFieldsResponse>> SearchCardAccessPagedSelectFields(AccountService.CardAccessSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.CardAccessSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchCardAccessPagedSelectFieldsResponse>>("searchCardAccessPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetCardNameSelectFieldsResponse>> GetCardNameSelectFields(AccountService.CardNameSelectFieldsRequest payload) =>
    RequestAsync<AccountService.CardNameSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetCardNameSelectFieldsResponse>>("getCardNameSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetCardNamePagedListSelectFieldsResponse>> GetCardNamePagedListSelectFields(AccountService.CardNamePagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.CardNamePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetCardNamePagedListSelectFieldsResponse>>("getCardNamePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchCardNamePagedSelectFieldsResponse>> SearchCardNamePagedSelectFields(AccountService.CardNameSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.CardNameSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchCardNamePagedSelectFieldsResponse>>("searchCardNamePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetCardNoteSelectFieldsResponse>> GetCardNoteSelectFields(AccountService.CardNoteSelectFieldsRequest payload) =>
    RequestAsync<AccountService.CardNoteSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetCardNoteSelectFieldsResponse>>("getCardNoteSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetCardNotePagedListSelectFieldsResponse>> GetCardNotePagedListSelectFields(AccountService.CardNotePagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.CardNotePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetCardNotePagedListSelectFieldsResponse>>("getCardNotePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchCardNotePagedSelectFieldsResponse>> SearchCardNotePagedSelectFields(AccountService.CardNoteSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.CardNoteSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchCardNotePagedSelectFieldsResponse>>("searchCardNotePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetCpWorkCardSelectFieldsFilterChildrenResponse>> GetCpWorkCardSelectFieldsFilterChildren(AccountService.CpWorkCardSelectFieldsFilterChildrenRequest payload) =>
    RequestAsync<AccountService.CpWorkCardSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<AccountService.GetCpWorkCardSelectFieldsFilterChildrenResponse>>("getCpWorkCardSelectFieldsFilterChildren", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetCpWorkCardPagedListSelectFieldsResponse>> GetCpWorkCardPagedListSelectFields(AccountService.CpWorkCardPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.CpWorkCardPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetCpWorkCardPagedListSelectFieldsResponse>>("getCpWorkCardPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchCpWorkCardPagedSelectFieldsResponse>> SearchCpWorkCardPagedSelectFields(AccountService.CpWorkCardSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.CpWorkCardSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchCpWorkCardPagedSelectFieldsResponse>>("searchCpWorkCardPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetCpWorkCardNoteSelectFieldsResponse>> GetCpWorkCardNoteSelectFields(AccountService.CpWorkCardNoteSelectFieldsRequest payload) =>
    RequestAsync<AccountService.CpWorkCardNoteSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetCpWorkCardNoteSelectFieldsResponse>>("getCpWorkCardNoteSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetCpWorkCardNotePagedListSelectFieldsResponse>> GetCpWorkCardNotePagedListSelectFields(AccountService.CpWorkCardNotePagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.CpWorkCardNotePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetCpWorkCardNotePagedListSelectFieldsResponse>>("getCpWorkCardNotePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchCpWorkCardNotePagedSelectFieldsResponse>> SearchCpWorkCardNotePagedSelectFields(AccountService.CpWorkCardNoteSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.CpWorkCardNoteSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchCpWorkCardNotePagedSelectFieldsResponse>>("searchCpWorkCardNotePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetCpWorkCardTrackingSelectFieldsResponse>> GetCpWorkCardTrackingSelectFields(AccountService.CpWorkCardTrackingSelectFieldsRequest payload) =>
    RequestAsync<AccountService.CpWorkCardTrackingSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetCpWorkCardTrackingSelectFieldsResponse>>("getCpWorkCardTrackingSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetCpWorkCardTrackingPagedListSelectFieldsResponse>> GetCpWorkCardTrackingPagedListSelectFields(AccountService.CpWorkCardTrackingPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.CpWorkCardTrackingPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetCpWorkCardTrackingPagedListSelectFieldsResponse>>("getCpWorkCardTrackingPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchCpWorkCardTrackingPagedSelectFieldsResponse>> SearchCpWorkCardTrackingPagedSelectFields(AccountService.CpWorkCardTrackingSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.CpWorkCardTrackingSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchCpWorkCardTrackingPagedSelectFieldsResponse>>("searchCpWorkCardTrackingPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetCredRepSelectFieldsResponse>> GetCredRepSelectFields(AccountService.CredRepSelectFieldsRequest payload) =>
    RequestAsync<AccountService.CredRepSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetCredRepSelectFieldsResponse>>("getCredRepSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetCredRepSelectFieldsFilterChildrenResponse>> GetCredRepSelectFieldsFilterChildren(AccountService.CredRepSelectFieldsFilterChildrenRequest payload) =>
    RequestAsync<AccountService.CredRepSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<AccountService.GetCredRepSelectFieldsFilterChildrenResponse>>("getCredRepSelectFieldsFilterChildren", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetCredRepPagedListSelectFieldsResponse>> GetCredRepPagedListSelectFields(AccountService.CredRepPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.CredRepPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetCredRepPagedListSelectFieldsResponse>>("getCredRepPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchCredRepPagedSelectFieldsResponse>> SearchCredRepPagedSelectFields(AccountService.CredRepSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.CredRepSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchCredRepPagedSelectFieldsResponse>>("searchCredRepPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetCredRepItemPagedListSelectFieldsResponse>> GetCredRepItemPagedListSelectFields(AccountService.CredRepItemPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.CredRepItemPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetCredRepItemPagedListSelectFieldsResponse>>("getCredRepItemPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchCredRepItemPagedSelectFieldsResponse>> SearchCredRepItemPagedSelectFields(AccountService.CredRepItemSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.CredRepItemSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchCredRepItemPagedSelectFieldsResponse>>("searchCredRepItemPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetEftSelectFieldsResponse>> GetEftSelectFields(AccountService.EftSelectFieldsRequest payload) =>
    RequestAsync<AccountService.EftSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetEftSelectFieldsResponse>>("getEftSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetEftSelectFieldsFilterChildrenResponse>> GetEftSelectFieldsFilterChildren(AccountService.EftSelectFieldsFilterChildrenRequest payload) =>
    RequestAsync<AccountService.EftSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<AccountService.GetEftSelectFieldsFilterChildrenResponse>>("getEftSelectFieldsFilterChildren", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetEftPagedListSelectFieldsResponse>> GetEftPagedListSelectFields(AccountService.EftPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.EftPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetEftPagedListSelectFieldsResponse>>("getEftPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchEftPagedSelectFieldsResponse>> SearchEftPagedSelectFields(AccountService.EftSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.EftSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchEftPagedSelectFieldsResponse>>("searchEftPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetEftAddendaInfoSelectFieldsResponse>> GetEftAddendaInfoSelectFields(AccountService.EftAddendaInfoSelectFieldsRequest payload) =>
    RequestAsync<AccountService.EftAddendaInfoSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetEftAddendaInfoSelectFieldsResponse>>("getEftAddendaInfoSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetEftAddendaInfoPagedListSelectFieldsResponse>> GetEftAddendaInfoPagedListSelectFields(AccountService.EftAddendaInfoPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.EftAddendaInfoPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetEftAddendaInfoPagedListSelectFieldsResponse>>("getEftAddendaInfoPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchEftAddendaInfoPagedSelectFieldsResponse>> SearchEftAddendaInfoPagedSelectFields(AccountService.EftAddendaInfoSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.EftAddendaInfoSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchEftAddendaInfoPagedSelectFieldsResponse>>("searchEftAddendaInfoPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetEftNameSelectFieldsResponse>> GetEftNameSelectFields(AccountService.EftNameSelectFieldsRequest payload) =>
    RequestAsync<AccountService.EftNameSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetEftNameSelectFieldsResponse>>("getEftNameSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetEftNamePagedListSelectFieldsResponse>> GetEftNamePagedListSelectFields(AccountService.EftNamePagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.EftNamePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetEftNamePagedListSelectFieldsResponse>>("getEftNamePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchEftNamePagedSelectFieldsResponse>> SearchEftNamePagedSelectFields(AccountService.EftNameSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.EftNameSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchEftNamePagedSelectFieldsResponse>>("searchEftNamePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetEftTransferSelectFieldsResponse>> GetEftTransferSelectFields(AccountService.EftTransferSelectFieldsRequest payload) =>
    RequestAsync<AccountService.EftTransferSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetEftTransferSelectFieldsResponse>>("getEftTransferSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetEftTransferPagedListSelectFieldsResponse>> GetEftTransferPagedListSelectFields(AccountService.EftTransferPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.EftTransferPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetEftTransferPagedListSelectFieldsResponse>>("getEftTransferPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchEftTransferPagedSelectFieldsResponse>> SearchEftTransferPagedSelectFields(AccountService.EftTransferSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.EftTransferSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchEftTransferPagedSelectFieldsResponse>>("searchEftTransferPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetExternalAccountSelectFieldsResponse>> GetExternalAccountSelectFields(AccountService.ExternalAccountSelectFieldsRequest payload) =>
    RequestAsync<AccountService.ExternalAccountSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetExternalAccountSelectFieldsResponse>>("getExternalAccountSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetExternalAccountPagedListSelectFieldsResponse>> GetExternalAccountPagedListSelectFields(AccountService.ExternalAccountPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.ExternalAccountPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetExternalAccountPagedListSelectFieldsResponse>>("getExternalAccountPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchExternalAccountPagedSelectFieldsResponse>> SearchExternalAccountPagedSelectFields(AccountService.ExternalAccountSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.ExternalAccountSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchExternalAccountPagedSelectFieldsResponse>>("searchExternalAccountPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetExternalLoanSelectFieldsResponse>> GetExternalLoanSelectFields(AccountService.ExternalLoanSelectFieldsRequest payload) =>
    RequestAsync<AccountService.ExternalLoanSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetExternalLoanSelectFieldsResponse>>("getExternalLoanSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetExternalLoanSelectFieldsFilterChildrenResponse>> GetExternalLoanSelectFieldsFilterChildren(AccountService.ExternalLoanSelectFieldsFilterChildrenRequest payload) =>
    RequestAsync<AccountService.ExternalLoanSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<AccountService.GetExternalLoanSelectFieldsFilterChildrenResponse>>("getExternalLoanSelectFieldsFilterChildren", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetExternalLoanPagedListSelectFieldsResponse>> GetExternalLoanPagedListSelectFields(AccountService.ExternalLoanPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.ExternalLoanPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetExternalLoanPagedListSelectFieldsResponse>>("getExternalLoanPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchExternalLoanPagedSelectFieldsResponse>> SearchExternalLoanPagedSelectFields(AccountService.ExternalLoanSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.ExternalLoanSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchExternalLoanPagedSelectFieldsResponse>>("searchExternalLoanPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetExternalLoanNameSelectFieldsResponse>> GetExternalLoanNameSelectFields(AccountService.ExternalLoanNameSelectFieldsRequest payload) =>
    RequestAsync<AccountService.ExternalLoanNameSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetExternalLoanNameSelectFieldsResponse>>("getExternalLoanNameSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetExternalLoanNamePagedListSelectFieldsResponse>> GetExternalLoanNamePagedListSelectFields(AccountService.ExternalLoanNamePagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.ExternalLoanNamePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetExternalLoanNamePagedListSelectFieldsResponse>>("getExternalLoanNamePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchExternalLoanNamePagedSelectFieldsResponse>> SearchExternalLoanNamePagedSelectFields(AccountService.ExternalLoanNameSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.ExternalLoanNameSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchExternalLoanNamePagedSelectFieldsResponse>>("searchExternalLoanNamePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetExternalLoanNoteSelectFieldsResponse>> GetExternalLoanNoteSelectFields(AccountService.ExternalLoanNoteSelectFieldsRequest payload) =>
    RequestAsync<AccountService.ExternalLoanNoteSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetExternalLoanNoteSelectFieldsResponse>>("getExternalLoanNoteSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetExternalLoanNotePagedListSelectFieldsResponse>> GetExternalLoanNotePagedListSelectFields(AccountService.ExternalLoanNotePagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.ExternalLoanNotePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetExternalLoanNotePagedListSelectFieldsResponse>>("getExternalLoanNotePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchExternalLoanNotePagedSelectFieldsResponse>> SearchExternalLoanNotePagedSelectFields(AccountService.ExternalLoanNoteSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.ExternalLoanNoteSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchExternalLoanNotePagedSelectFieldsResponse>>("searchExternalLoanNotePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetExternalLoanTrackingSelectFieldsResponse>> GetExternalLoanTrackingSelectFields(AccountService.ExternalLoanTrackingSelectFieldsRequest payload) =>
    RequestAsync<AccountService.ExternalLoanTrackingSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetExternalLoanTrackingSelectFieldsResponse>>("getExternalLoanTrackingSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetExternalLoanTrackingPagedListSelectFieldsResponse>> GetExternalLoanTrackingPagedListSelectFields(AccountService.ExternalLoanTrackingPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.ExternalLoanTrackingPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetExternalLoanTrackingPagedListSelectFieldsResponse>>("getExternalLoanTrackingPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchExternalLoanTrackingPagedSelectFieldsResponse>> SearchExternalLoanTrackingPagedSelectFields(AccountService.ExternalLoanTrackingSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.ExternalLoanTrackingSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchExternalLoanTrackingPagedSelectFieldsResponse>>("searchExternalLoanTrackingPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetExternalLoanTransferSelectFieldsResponse>> GetExternalLoanTransferSelectFields(AccountService.ExternalLoanTransferSelectFieldsRequest payload) =>
    RequestAsync<AccountService.ExternalLoanTransferSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetExternalLoanTransferSelectFieldsResponse>>("getExternalLoanTransferSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetExternalLoanTransferPagedListSelectFieldsResponse>> GetExternalLoanTransferPagedListSelectFields(AccountService.ExternalLoanTransferPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.ExternalLoanTransferPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetExternalLoanTransferPagedListSelectFieldsResponse>>("getExternalLoanTransferPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchExternalLoanTransferPagedSelectFieldsResponse>> SearchExternalLoanTransferPagedSelectFields(AccountService.ExternalLoanTransferSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.ExternalLoanTransferSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchExternalLoanTransferPagedSelectFieldsResponse>>("searchExternalLoanTransferPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetFmHistoryPagedListSelectFieldsResponse>> GetFmHistoryPagedListSelectFields(AccountService.FmHistoryPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.FmHistoryPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetFmHistoryPagedListSelectFieldsResponse>>("getFmHistoryPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchFmHistoryPagedSelectFieldsResponse>> SearchFmHistoryPagedSelectFields(AccountService.FmHistorySearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.FmHistorySearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchFmHistoryPagedSelectFieldsResponse>>("searchFmHistoryPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetHouseholdSelectFieldsResponse>> GetHouseholdSelectFields(AccountService.HouseholdSelectFieldsRequest payload) =>
    RequestAsync<AccountService.HouseholdSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetHouseholdSelectFieldsResponse>>("getHouseholdSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetHouseholdPagedListSelectFieldsResponse>> GetHouseholdPagedListSelectFields(AccountService.HouseholdPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.HouseholdPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetHouseholdPagedListSelectFieldsResponse>>("getHouseholdPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchHouseholdPagedSelectFieldsResponse>> SearchHouseholdPagedSelectFields(AccountService.HouseholdSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.HouseholdSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchHouseholdPagedSelectFieldsResponse>>("searchHouseholdPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetIrsSelectFieldsResponse>> GetIrsSelectFields(AccountService.IrsSelectFieldsRequest payload) =>
    RequestAsync<AccountService.IrsSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetIrsSelectFieldsResponse>>("getIrsSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetIrsSelectFieldsFilterChildrenResponse>> GetIrsSelectFieldsFilterChildren(AccountService.IrsSelectFieldsFilterChildrenRequest payload) =>
    RequestAsync<AccountService.IrsSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<AccountService.GetIrsSelectFieldsFilterChildrenResponse>>("getIrsSelectFieldsFilterChildren", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetIrsPagedListSelectFieldsResponse>> GetIrsPagedListSelectFields(AccountService.IrsPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.IrsPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetIrsPagedListSelectFieldsResponse>>("getIrsPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchIrsPagedSelectFieldsResponse>> SearchIrsPagedSelectFields(AccountService.IrsSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.IrsSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchIrsPagedSelectFieldsResponse>>("searchIrsPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetIrsDistributionSelectFieldsResponse>> GetIrsDistributionSelectFields(AccountService.IrsDistributionSelectFieldsRequest payload) =>
    RequestAsync<AccountService.IrsDistributionSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetIrsDistributionSelectFieldsResponse>>("getIrsDistributionSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetIrsDistributionPagedListSelectFieldsResponse>> GetIrsDistributionPagedListSelectFields(AccountService.IrsDistributionPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.IrsDistributionPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetIrsDistributionPagedListSelectFieldsResponse>>("getIrsDistributionPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchIrsDistributionPagedSelectFieldsResponse>> SearchIrsDistributionPagedSelectFields(AccountService.IrsDistributionSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.IrsDistributionSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchIrsDistributionPagedSelectFieldsResponse>>("searchIrsDistributionPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetIrsNameSelectFieldsResponse>> GetIrsNameSelectFields(AccountService.IrsNameSelectFieldsRequest payload) =>
    RequestAsync<AccountService.IrsNameSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetIrsNameSelectFieldsResponse>>("getIrsNameSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetIrsNamePagedListSelectFieldsResponse>> GetIrsNamePagedListSelectFields(AccountService.IrsNamePagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.IrsNamePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetIrsNamePagedListSelectFieldsResponse>>("getIrsNamePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchIrsNamePagedSelectFieldsResponse>> SearchIrsNamePagedSelectFields(AccountService.IrsNameSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.IrsNameSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchIrsNamePagedSelectFieldsResponse>>("searchIrsNamePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanSelectFieldsResponse>> GetLoanSelectFields(AccountService.LoanSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanSelectFieldsResponse>>("getLoanSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanSelectFieldsFilterChildrenResponse>> GetLoanSelectFieldsFilterChildren(AccountService.LoanSelectFieldsFilterChildrenRequest payload) =>
    RequestAsync<AccountService.LoanSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanSelectFieldsFilterChildrenResponse>>("getLoanSelectFieldsFilterChildren", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanPagedListSelectFieldsResponse>> GetLoanPagedListSelectFields(AccountService.LoanPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanPagedListSelectFieldsResponse>>("getLoanPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchLoanPagedSelectFieldsResponse>> SearchLoanPagedSelectFields(AccountService.LoanSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchLoanPagedSelectFieldsResponse>>("searchLoanPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanBankruptcySelectFieldsResponse>> GetLoanBankruptcySelectFields(AccountService.LoanBankruptcySelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanBankruptcySelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanBankruptcySelectFieldsResponse>>("getLoanBankruptcySelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanBankruptcySelectFieldsFilterChildrenResponse>> GetLoanBankruptcySelectFieldsFilterChildren(AccountService.LoanBankruptcySelectFieldsFilterChildrenRequest payload) =>
    RequestAsync<AccountService.LoanBankruptcySelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanBankruptcySelectFieldsFilterChildrenResponse>>("getLoanBankruptcySelectFieldsFilterChildren", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanBankruptcyPagedListSelectFieldsResponse>> GetLoanBankruptcyPagedListSelectFields(AccountService.LoanBankruptcyPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanBankruptcyPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanBankruptcyPagedListSelectFieldsResponse>>("getLoanBankruptcyPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchLoanBankruptcyPagedSelectFieldsResponse>> SearchLoanBankruptcyPagedSelectFields(AccountService.LoanBankruptcySearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanBankruptcySearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchLoanBankruptcyPagedSelectFieldsResponse>>("searchLoanBankruptcyPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanBankruptcyPrepetitionBalSelectFieldsResponse>> GetLoanBankruptcyPrepetitionBalSelectFields(AccountService.LoanBankruptcyPrepetitionBalSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanBankruptcyPrepetitionBalSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanBankruptcyPrepetitionBalSelectFieldsResponse>>("getLoanBankruptcyPrepetitionBalSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanBankruptcyPrepetitionBalPagedListSelectFieldsResponse>> GetLoanBankruptcyPrepetitionBalPagedListSelectFields(AccountService.LoanBankruptcyPrepetitionBalPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanBankruptcyPrepetitionBalPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanBankruptcyPrepetitionBalPagedListSelectFieldsResponse>>("getLoanBankruptcyPrepetitionBalPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchLoanBankruptcyPrepetitionBalPagedSelectFieldsResponse>> SearchLoanBankruptcyPrepetitionBalPagedSelectFields(AccountService.LoanBankruptcyPrepetitionBalSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanBankruptcyPrepetitionBalSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchLoanBankruptcyPrepetitionBalPagedSelectFieldsResponse>>("searchLoanBankruptcyPrepetitionBalPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanBillingSelectFieldsResponse>> GetLoanBillingSelectFields(AccountService.LoanBillingSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanBillingSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanBillingSelectFieldsResponse>>("getLoanBillingSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanBillingPagedListSelectFieldsResponse>> GetLoanBillingPagedListSelectFields(AccountService.LoanBillingPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanBillingPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanBillingPagedListSelectFieldsResponse>>("getLoanBillingPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchLoanBillingPagedSelectFieldsResponse>> SearchLoanBillingPagedSelectFields(AccountService.LoanBillingSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanBillingSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchLoanBillingPagedSelectFieldsResponse>>("searchLoanBillingPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanCheckOrderSelectFieldsResponse>> GetLoanCheckOrderSelectFields(AccountService.LoanCheckOrderSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanCheckOrderSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanCheckOrderSelectFieldsResponse>>("getLoanCheckOrderSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanCheckOrderPagedListSelectFieldsResponse>> GetLoanCheckOrderPagedListSelectFields(AccountService.LoanCheckOrderPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanCheckOrderPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanCheckOrderPagedListSelectFieldsResponse>>("getLoanCheckOrderPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchLoanCheckOrderPagedSelectFieldsResponse>> SearchLoanCheckOrderPagedSelectFields(AccountService.LoanCheckOrderSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanCheckOrderSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchLoanCheckOrderPagedSelectFieldsResponse>>("searchLoanCheckOrderPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanEscrowSelectFieldsResponse>> GetLoanEscrowSelectFields(AccountService.LoanEscrowSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanEscrowSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanEscrowSelectFieldsResponse>>("getLoanEscrowSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanEscrowPagedListSelectFieldsResponse>> GetLoanEscrowPagedListSelectFields(AccountService.LoanEscrowPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanEscrowPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanEscrowPagedListSelectFieldsResponse>>("getLoanEscrowPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchLoanEscrowPagedSelectFieldsResponse>> SearchLoanEscrowPagedSelectFields(AccountService.LoanEscrowSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanEscrowSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchLoanEscrowPagedSelectFieldsResponse>>("searchLoanEscrowPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanEscrowAnalysisSelectFieldsResponse>> GetLoanEscrowAnalysisSelectFields(AccountService.LoanEscrowAnalysisSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanEscrowAnalysisSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanEscrowAnalysisSelectFieldsResponse>>("getLoanEscrowAnalysisSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanEscrowAnalysisPagedListSelectFieldsResponse>> GetLoanEscrowAnalysisPagedListSelectFields(AccountService.LoanEscrowAnalysisPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanEscrowAnalysisPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanEscrowAnalysisPagedListSelectFieldsResponse>>("getLoanEscrowAnalysisPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchLoanEscrowAnalysisPagedSelectFieldsResponse>> SearchLoanEscrowAnalysisPagedSelectFields(AccountService.LoanEscrowAnalysisSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanEscrowAnalysisSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchLoanEscrowAnalysisPagedSelectFieldsResponse>>("searchLoanEscrowAnalysisPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanHoldSelectFieldsResponse>> GetLoanHoldSelectFields(AccountService.LoanHoldSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanHoldSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanHoldSelectFieldsResponse>>("getLoanHoldSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanHoldPagedListSelectFieldsResponse>> GetLoanHoldPagedListSelectFields(AccountService.LoanHoldPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanHoldPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanHoldPagedListSelectFieldsResponse>>("getLoanHoldPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchLoanHoldPagedSelectFieldsResponse>> SearchLoanHoldPagedSelectFields(AccountService.LoanHoldSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanHoldSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchLoanHoldPagedSelectFieldsResponse>>("searchLoanHoldPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanLnSegmentSelectFieldsResponse>> GetLoanLnSegmentSelectFields(AccountService.LoanLnSegmentSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanLnSegmentSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanLnSegmentSelectFieldsResponse>>("getLoanLnSegmentSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanLnSegmentSelectFieldsFilterChildrenResponse>> GetLoanLnSegmentSelectFieldsFilterChildren(AccountService.LoanLnSegmentSelectFieldsFilterChildrenRequest payload) =>
    RequestAsync<AccountService.LoanLnSegmentSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanLnSegmentSelectFieldsFilterChildrenResponse>>("getLoanLnSegmentSelectFieldsFilterChildren", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanLnSegmentPagedListSelectFieldsResponse>> GetLoanLnSegmentPagedListSelectFields(AccountService.LoanLnSegmentPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanLnSegmentPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanLnSegmentPagedListSelectFieldsResponse>>("getLoanLnSegmentPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchLoanLnSegmentPagedSelectFieldsResponse>> SearchLoanLnSegmentPagedSelectFields(AccountService.LoanLnSegmentSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanLnSegmentSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchLoanLnSegmentPagedSelectFieldsResponse>>("searchLoanLnSegmentPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanLnSegmentBillingSelectFieldsResponse>> GetLoanLnSegmentBillingSelectFields(AccountService.LoanLnSegmentBillingSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanLnSegmentBillingSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanLnSegmentBillingSelectFieldsResponse>>("getLoanLnSegmentBillingSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanLnSegmentBillingPagedListSelectFieldsResponse>> GetLoanLnSegmentBillingPagedListSelectFields(AccountService.LoanLnSegmentBillingPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanLnSegmentBillingPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanLnSegmentBillingPagedListSelectFieldsResponse>>("getLoanLnSegmentBillingPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchLoanLnSegmentBillingPagedSelectFieldsResponse>> SearchLoanLnSegmentBillingPagedSelectFields(AccountService.LoanLnSegmentBillingSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanLnSegmentBillingSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchLoanLnSegmentBillingPagedSelectFieldsResponse>>("searchLoanLnSegmentBillingPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanNameSelectFieldsResponse>> GetLoanNameSelectFields(AccountService.LoanNameSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanNameSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanNameSelectFieldsResponse>>("getLoanNameSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanNamePagedListSelectFieldsResponse>> GetLoanNamePagedListSelectFields(AccountService.LoanNamePagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanNamePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanNamePagedListSelectFieldsResponse>>("getLoanNamePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchLoanNamePagedSelectFieldsResponse>> SearchLoanNamePagedSelectFields(AccountService.LoanNameSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanNameSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchLoanNamePagedSelectFieldsResponse>>("searchLoanNamePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanNoteSelectFieldsResponse>> GetLoanNoteSelectFields(AccountService.LoanNoteSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanNoteSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanNoteSelectFieldsResponse>>("getLoanNoteSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanNotePagedListSelectFieldsResponse>> GetLoanNotePagedListSelectFields(AccountService.LoanNotePagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanNotePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanNotePagedListSelectFieldsResponse>>("getLoanNotePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchLoanNotePagedSelectFieldsResponse>> SearchLoanNotePagedSelectFields(AccountService.LoanNoteSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanNoteSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchLoanNotePagedSelectFieldsResponse>>("searchLoanNotePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanPledgeSelectFieldsResponse>> GetLoanPledgeSelectFields(AccountService.LoanPledgeSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanPledgeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanPledgeSelectFieldsResponse>>("getLoanPledgeSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanPledgeSelectFieldsFilterChildrenResponse>> GetLoanPledgeSelectFieldsFilterChildren(AccountService.LoanPledgeSelectFieldsFilterChildrenRequest payload) =>
    RequestAsync<AccountService.LoanPledgeSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanPledgeSelectFieldsFilterChildrenResponse>>("getLoanPledgeSelectFieldsFilterChildren", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanPledgePagedListSelectFieldsResponse>> GetLoanPledgePagedListSelectFields(AccountService.LoanPledgePagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanPledgePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanPledgePagedListSelectFieldsResponse>>("getLoanPledgePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchLoanPledgePagedSelectFieldsResponse>> SearchLoanPledgePagedSelectFields(AccountService.LoanPledgeSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanPledgeSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchLoanPledgePagedSelectFieldsResponse>>("searchLoanPledgePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanPledgeNameSelectFieldsResponse>> GetLoanPledgeNameSelectFields(AccountService.LoanPledgeNameSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanPledgeNameSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanPledgeNameSelectFieldsResponse>>("getLoanPledgeNameSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanPledgeNamePagedListSelectFieldsResponse>> GetLoanPledgeNamePagedListSelectFields(AccountService.LoanPledgeNamePagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanPledgeNamePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanPledgeNamePagedListSelectFieldsResponse>>("getLoanPledgeNamePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchLoanPledgeNamePagedSelectFieldsResponse>> SearchLoanPledgeNamePagedSelectFields(AccountService.LoanPledgeNameSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanPledgeNameSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchLoanPledgeNamePagedSelectFieldsResponse>>("searchLoanPledgeNamePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanRateChangeSelectFieldsResponse>> GetLoanRateChangeSelectFields(AccountService.LoanRateChangeSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanRateChangeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanRateChangeSelectFieldsResponse>>("getLoanRateChangeSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanRateChangePagedListSelectFieldsResponse>> GetLoanRateChangePagedListSelectFields(AccountService.LoanRateChangePagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanRateChangePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanRateChangePagedListSelectFieldsResponse>>("getLoanRateChangePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchLoanRateChangePagedSelectFieldsResponse>> SearchLoanRateChangePagedSelectFields(AccountService.LoanRateChangeSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanRateChangeSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchLoanRateChangePagedSelectFieldsResponse>>("searchLoanRateChangePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanScheduleSelectFieldsResponse>> GetLoanScheduleSelectFields(AccountService.LoanScheduleSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanScheduleSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanScheduleSelectFieldsResponse>>("getLoanScheduleSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanSchedulePagedListSelectFieldsResponse>> GetLoanSchedulePagedListSelectFields(AccountService.LoanSchedulePagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanSchedulePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanSchedulePagedListSelectFieldsResponse>>("getLoanSchedulePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchLoanSchedulePagedSelectFieldsResponse>> SearchLoanSchedulePagedSelectFields(AccountService.LoanScheduleSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanScheduleSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchLoanSchedulePagedSelectFieldsResponse>>("searchLoanSchedulePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanTrackingSelectFieldsResponse>> GetLoanTrackingSelectFields(AccountService.LoanTrackingSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanTrackingSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanTrackingSelectFieldsResponse>>("getLoanTrackingSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanTrackingPagedListSelectFieldsResponse>> GetLoanTrackingPagedListSelectFields(AccountService.LoanTrackingPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanTrackingPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanTrackingPagedListSelectFieldsResponse>>("getLoanTrackingPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchLoanTrackingPagedSelectFieldsResponse>> SearchLoanTrackingPagedSelectFields(AccountService.LoanTrackingSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanTrackingSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchLoanTrackingPagedSelectFieldsResponse>>("searchLoanTrackingPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanTransactionPagedListSelectFieldsResponse>> GetLoanTransactionPagedListSelectFields(AccountService.LoanTransactionPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanTransactionPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanTransactionPagedListSelectFieldsResponse>>("getLoanTransactionPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchLoanTransactionPagedSelectFieldsResponse>> SearchLoanTransactionPagedSelectFields(AccountService.LoanTransactionSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanTransactionSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchLoanTransactionPagedSelectFieldsResponse>>("searchLoanTransactionPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanTransferSelectFieldsResponse>> GetLoanTransferSelectFields(AccountService.LoanTransferSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanTransferSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanTransferSelectFieldsResponse>>("getLoanTransferSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanTransferPagedListSelectFieldsResponse>> GetLoanTransferPagedListSelectFields(AccountService.LoanTransferPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanTransferPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanTransferPagedListSelectFieldsResponse>>("getLoanTransferPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchLoanTransferPagedSelectFieldsResponse>> SearchLoanTransferPagedSelectFields(AccountService.LoanTransferSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanTransferSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchLoanTransferPagedSelectFieldsResponse>>("searchLoanTransferPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanAppSelectFieldsResponse>> GetLoanAppSelectFields(AccountService.LoanAppSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanAppSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanAppSelectFieldsResponse>>("getLoanAppSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanAppSelectFieldsFilterChildrenResponse>> GetLoanAppSelectFieldsFilterChildren(AccountService.LoanAppSelectFieldsFilterChildrenRequest payload) =>
    RequestAsync<AccountService.LoanAppSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanAppSelectFieldsFilterChildrenResponse>>("getLoanAppSelectFieldsFilterChildren", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanAppPagedListSelectFieldsResponse>> GetLoanAppPagedListSelectFields(AccountService.LoanAppPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanAppPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanAppPagedListSelectFieldsResponse>>("getLoanAppPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchLoanAppPagedSelectFieldsResponse>> SearchLoanAppPagedSelectFields(AccountService.LoanAppSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanAppSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchLoanAppPagedSelectFieldsResponse>>("searchLoanAppPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanAppEscrowSelectFieldsResponse>> GetLoanAppEscrowSelectFields(AccountService.LoanAppEscrowSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanAppEscrowSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanAppEscrowSelectFieldsResponse>>("getLoanAppEscrowSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanAppEscrowPagedListSelectFieldsResponse>> GetLoanAppEscrowPagedListSelectFields(AccountService.LoanAppEscrowPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanAppEscrowPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanAppEscrowPagedListSelectFieldsResponse>>("getLoanAppEscrowPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchLoanAppEscrowPagedSelectFieldsResponse>> SearchLoanAppEscrowPagedSelectFields(AccountService.LoanAppEscrowSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanAppEscrowSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchLoanAppEscrowPagedSelectFieldsResponse>>("searchLoanAppEscrowPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanAppEscrowAnalysisSelectFieldsResponse>> GetLoanAppEscrowAnalysisSelectFields(AccountService.LoanAppEscrowAnalysisSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanAppEscrowAnalysisSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanAppEscrowAnalysisSelectFieldsResponse>>("getLoanAppEscrowAnalysisSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanAppEscrowAnalysisPagedListSelectFieldsResponse>> GetLoanAppEscrowAnalysisPagedListSelectFields(AccountService.LoanAppEscrowAnalysisPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanAppEscrowAnalysisPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanAppEscrowAnalysisPagedListSelectFieldsResponse>>("getLoanAppEscrowAnalysisPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchLoanAppEscrowAnalysisPagedSelectFieldsResponse>> SearchLoanAppEscrowAnalysisPagedSelectFields(AccountService.LoanAppEscrowAnalysisSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanAppEscrowAnalysisSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchLoanAppEscrowAnalysisPagedSelectFieldsResponse>>("searchLoanAppEscrowAnalysisPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanAppFinanceSelectFieldsResponse>> GetLoanAppFinanceSelectFields(AccountService.LoanAppFinanceSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanAppFinanceSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanAppFinanceSelectFieldsResponse>>("getLoanAppFinanceSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanAppFinancePagedListSelectFieldsResponse>> GetLoanAppFinancePagedListSelectFields(AccountService.LoanAppFinancePagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanAppFinancePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanAppFinancePagedListSelectFieldsResponse>>("getLoanAppFinancePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchLoanAppFinancePagedSelectFieldsResponse>> SearchLoanAppFinancePagedSelectFields(AccountService.LoanAppFinanceSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanAppFinanceSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchLoanAppFinancePagedSelectFieldsResponse>>("searchLoanAppFinancePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanAppLnSegmentSelectFieldsResponse>> GetLoanAppLnSegmentSelectFields(AccountService.LoanAppLnSegmentSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanAppLnSegmentSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanAppLnSegmentSelectFieldsResponse>>("getLoanAppLnSegmentSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanAppLnSegmentPagedListSelectFieldsResponse>> GetLoanAppLnSegmentPagedListSelectFields(AccountService.LoanAppLnSegmentPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanAppLnSegmentPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanAppLnSegmentPagedListSelectFieldsResponse>>("getLoanAppLnSegmentPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchLoanAppLnSegmentPagedSelectFieldsResponse>> SearchLoanAppLnSegmentPagedSelectFields(AccountService.LoanAppLnSegmentSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanAppLnSegmentSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchLoanAppLnSegmentPagedSelectFieldsResponse>>("searchLoanAppLnSegmentPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanAppNoteSelectFieldsResponse>> GetLoanAppNoteSelectFields(AccountService.LoanAppNoteSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanAppNoteSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanAppNoteSelectFieldsResponse>>("getLoanAppNoteSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanAppNotePagedListSelectFieldsResponse>> GetLoanAppNotePagedListSelectFields(AccountService.LoanAppNotePagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanAppNotePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanAppNotePagedListSelectFieldsResponse>>("getLoanAppNotePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchLoanAppNotePagedSelectFieldsResponse>> SearchLoanAppNotePagedSelectFields(AccountService.LoanAppNoteSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanAppNoteSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchLoanAppNotePagedSelectFieldsResponse>>("searchLoanAppNotePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanAppPersonSelectFieldsResponse>> GetLoanAppPersonSelectFields(AccountService.LoanAppPersonSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanAppPersonSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanAppPersonSelectFieldsResponse>>("getLoanAppPersonSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanAppPersonPagedListSelectFieldsResponse>> GetLoanAppPersonPagedListSelectFields(AccountService.LoanAppPersonPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanAppPersonPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanAppPersonPagedListSelectFieldsResponse>>("getLoanAppPersonPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchLoanAppPersonPagedSelectFieldsResponse>> SearchLoanAppPersonPagedSelectFields(AccountService.LoanAppPersonSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanAppPersonSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchLoanAppPersonPagedSelectFieldsResponse>>("searchLoanAppPersonPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanAppPledgeSelectFieldsResponse>> GetLoanAppPledgeSelectFields(AccountService.LoanAppPledgeSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanAppPledgeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanAppPledgeSelectFieldsResponse>>("getLoanAppPledgeSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanAppPledgePagedListSelectFieldsResponse>> GetLoanAppPledgePagedListSelectFields(AccountService.LoanAppPledgePagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanAppPledgePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanAppPledgePagedListSelectFieldsResponse>>("getLoanAppPledgePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchLoanAppPledgePagedSelectFieldsResponse>> SearchLoanAppPledgePagedSelectFields(AccountService.LoanAppPledgeSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanAppPledgeSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchLoanAppPledgePagedSelectFieldsResponse>>("searchLoanAppPledgePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanAppScheduleSelectFieldsResponse>> GetLoanAppScheduleSelectFields(AccountService.LoanAppScheduleSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanAppScheduleSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanAppScheduleSelectFieldsResponse>>("getLoanAppScheduleSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanAppSchedulePagedListSelectFieldsResponse>> GetLoanAppSchedulePagedListSelectFields(AccountService.LoanAppSchedulePagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanAppSchedulePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanAppSchedulePagedListSelectFieldsResponse>>("getLoanAppSchedulePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchLoanAppSchedulePagedSelectFieldsResponse>> SearchLoanAppSchedulePagedSelectFields(AccountService.LoanAppScheduleSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanAppScheduleSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchLoanAppSchedulePagedSelectFieldsResponse>>("searchLoanAppSchedulePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanAppTrackingSelectFieldsResponse>> GetLoanAppTrackingSelectFields(AccountService.LoanAppTrackingSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanAppTrackingSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanAppTrackingSelectFieldsResponse>>("getLoanAppTrackingSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLoanAppTrackingPagedListSelectFieldsResponse>> GetLoanAppTrackingPagedListSelectFields(AccountService.LoanAppTrackingPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanAppTrackingPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLoanAppTrackingPagedListSelectFieldsResponse>>("getLoanAppTrackingPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchLoanAppTrackingPagedSelectFieldsResponse>> SearchLoanAppTrackingPagedSelectFields(AccountService.LoanAppTrackingSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LoanAppTrackingSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchLoanAppTrackingPagedSelectFieldsResponse>>("searchLoanAppTrackingPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLookupSelectFieldsResponse>> GetLookupSelectFields(AccountService.LookupSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LookupSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLookupSelectFieldsResponse>>("getLookupSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetLookupPagedListSelectFieldsResponse>> GetLookupPagedListSelectFields(AccountService.LookupPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LookupPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetLookupPagedListSelectFieldsResponse>>("getLookupPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchLookupPagedSelectFieldsResponse>> SearchLookupPagedSelectFields(AccountService.LookupSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.LookupSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchLookupPagedSelectFieldsResponse>>("searchLookupPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetNameSelectFieldsResponse>> GetNameSelectFields(AccountService.NameSelectFieldsRequest payload) =>
    RequestAsync<AccountService.NameSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetNameSelectFieldsResponse>>("getNameSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetNamePagedListSelectFieldsResponse>> GetNamePagedListSelectFields(AccountService.NamePagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.NamePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetNamePagedListSelectFieldsResponse>>("getNamePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchNamePagedSelectFieldsResponse>> SearchNamePagedSelectFields(AccountService.NameSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.NameSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchNamePagedSelectFieldsResponse>>("searchNamePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetNoteSelectFieldsResponse>> GetNoteSelectFields(AccountService.NoteSelectFieldsRequest payload) =>
    RequestAsync<AccountService.NoteSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetNoteSelectFieldsResponse>>("getNoteSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetNotePagedListSelectFieldsResponse>> GetNotePagedListSelectFields(AccountService.NotePagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.NotePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetNotePagedListSelectFieldsResponse>>("getNotePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchNotePagedSelectFieldsResponse>> SearchNotePagedSelectFields(AccountService.NoteSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.NoteSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchNotePagedSelectFieldsResponse>>("searchNotePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetPledgeSelectFieldsResponse>> GetPledgeSelectFields(AccountService.PledgeSelectFieldsRequest payload) =>
    RequestAsync<AccountService.PledgeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetPledgeSelectFieldsResponse>>("getPledgeSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetPledgePagedListSelectFieldsResponse>> GetPledgePagedListSelectFields(AccountService.PledgePagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.PledgePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetPledgePagedListSelectFieldsResponse>>("getPledgePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchPledgePagedSelectFieldsResponse>> SearchPledgePagedSelectFields(AccountService.PledgeSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.PledgeSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchPledgePagedSelectFieldsResponse>>("searchPledgePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetPortfolioSelectFieldsResponse>> GetPortfolioSelectFields(AccountService.PortfolioSelectFieldsRequest payload) =>
    RequestAsync<AccountService.PortfolioSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetPortfolioSelectFieldsResponse>>("getPortfolioSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetPortfolioSelectFieldsFilterChildrenResponse>> GetPortfolioSelectFieldsFilterChildren(AccountService.PortfolioSelectFieldsFilterChildrenRequest payload) =>
    RequestAsync<AccountService.PortfolioSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<AccountService.GetPortfolioSelectFieldsFilterChildrenResponse>>("getPortfolioSelectFieldsFilterChildren", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetPortfolioPagedListSelectFieldsResponse>> GetPortfolioPagedListSelectFields(AccountService.PortfolioPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.PortfolioPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetPortfolioPagedListSelectFieldsResponse>>("getPortfolioPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchPortfolioPagedSelectFieldsResponse>> SearchPortfolioPagedSelectFields(AccountService.PortfolioSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.PortfolioSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchPortfolioPagedSelectFieldsResponse>>("searchPortfolioPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetPortfolioHoldSelectFieldsResponse>> GetPortfolioHoldSelectFields(AccountService.PortfolioHoldSelectFieldsRequest payload) =>
    RequestAsync<AccountService.PortfolioHoldSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetPortfolioHoldSelectFieldsResponse>>("getPortfolioHoldSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetPortfolioHoldPagedListSelectFieldsResponse>> GetPortfolioHoldPagedListSelectFields(AccountService.PortfolioHoldPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.PortfolioHoldPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetPortfolioHoldPagedListSelectFieldsResponse>>("getPortfolioHoldPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchPortfolioHoldPagedSelectFieldsResponse>> SearchPortfolioHoldPagedSelectFields(AccountService.PortfolioHoldSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.PortfolioHoldSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchPortfolioHoldPagedSelectFieldsResponse>>("searchPortfolioHoldPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetPortfolioNoteSelectFieldsResponse>> GetPortfolioNoteSelectFields(AccountService.PortfolioNoteSelectFieldsRequest payload) =>
    RequestAsync<AccountService.PortfolioNoteSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetPortfolioNoteSelectFieldsResponse>>("getPortfolioNoteSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetPortfolioNotePagedListSelectFieldsResponse>> GetPortfolioNotePagedListSelectFields(AccountService.PortfolioNotePagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.PortfolioNotePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetPortfolioNotePagedListSelectFieldsResponse>>("getPortfolioNotePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchPortfolioNotePagedSelectFieldsResponse>> SearchPortfolioNotePagedSelectFields(AccountService.PortfolioNoteSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.PortfolioNoteSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchPortfolioNotePagedSelectFieldsResponse>>("searchPortfolioNotePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetPortfolioTrackingSelectFieldsResponse>> GetPortfolioTrackingSelectFields(AccountService.PortfolioTrackingSelectFieldsRequest payload) =>
    RequestAsync<AccountService.PortfolioTrackingSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetPortfolioTrackingSelectFieldsResponse>>("getPortfolioTrackingSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetPortfolioTrackingPagedListSelectFieldsResponse>> GetPortfolioTrackingPagedListSelectFields(AccountService.PortfolioTrackingPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.PortfolioTrackingPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetPortfolioTrackingPagedListSelectFieldsResponse>>("getPortfolioTrackingPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchPortfolioTrackingPagedSelectFieldsResponse>> SearchPortfolioTrackingPagedSelectFields(AccountService.PortfolioTrackingSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.PortfolioTrackingSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchPortfolioTrackingPagedSelectFieldsResponse>>("searchPortfolioTrackingPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetPreferenceSelectFieldsResponse>> GetPreferenceSelectFields(AccountService.PreferenceSelectFieldsRequest payload) =>
    RequestAsync<AccountService.PreferenceSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetPreferenceSelectFieldsResponse>>("getPreferenceSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetPreferenceSelectFieldsFilterChildrenResponse>> GetPreferenceSelectFieldsFilterChildren(AccountService.PreferenceSelectFieldsFilterChildrenRequest payload) =>
    RequestAsync<AccountService.PreferenceSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<AccountService.GetPreferenceSelectFieldsFilterChildrenResponse>>("getPreferenceSelectFieldsFilterChildren", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetPreferencePagedListSelectFieldsResponse>> GetPreferencePagedListSelectFields(AccountService.PreferencePagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.PreferencePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetPreferencePagedListSelectFieldsResponse>>("getPreferencePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchPreferencePagedSelectFieldsResponse>> SearchPreferencePagedSelectFields(AccountService.PreferenceSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.PreferenceSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchPreferencePagedSelectFieldsResponse>>("searchPreferencePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetPreferenceAccessSelectFieldsResponse>> GetPreferenceAccessSelectFields(AccountService.PreferenceAccessSelectFieldsRequest payload) =>
    RequestAsync<AccountService.PreferenceAccessSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetPreferenceAccessSelectFieldsResponse>>("getPreferenceAccessSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetPreferenceAccessPagedListSelectFieldsResponse>> GetPreferenceAccessPagedListSelectFields(AccountService.PreferenceAccessPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.PreferenceAccessPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetPreferenceAccessPagedListSelectFieldsResponse>>("getPreferenceAccessPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchPreferenceAccessPagedSelectFieldsResponse>> SearchPreferenceAccessPagedSelectFields(AccountService.PreferenceAccessSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.PreferenceAccessSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchPreferenceAccessPagedSelectFieldsResponse>>("searchPreferenceAccessPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetShareSelectFieldsResponse>> GetShareSelectFields(AccountService.ShareSelectFieldsRequest payload) =>
    RequestAsync<AccountService.ShareSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetShareSelectFieldsResponse>>("getShareSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetShareSelectFieldsFilterChildrenResponse>> GetShareSelectFieldsFilterChildren(AccountService.ShareSelectFieldsFilterChildrenRequest payload) =>
    RequestAsync<AccountService.ShareSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<AccountService.GetShareSelectFieldsFilterChildrenResponse>>("getShareSelectFieldsFilterChildren", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetSharePagedListSelectFieldsResponse>> GetSharePagedListSelectFields(AccountService.SharePagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.SharePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetSharePagedListSelectFieldsResponse>>("getSharePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchSharePagedSelectFieldsResponse>> SearchSharePagedSelectFields(AccountService.ShareSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.ShareSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchSharePagedSelectFieldsResponse>>("searchSharePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetShareAnalysisSelectFieldsResponse>> GetShareAnalysisSelectFields(AccountService.ShareAnalysisSelectFieldsRequest payload) =>
    RequestAsync<AccountService.ShareAnalysisSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetShareAnalysisSelectFieldsResponse>>("getShareAnalysisSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetShareAnalysisPagedListSelectFieldsResponse>> GetShareAnalysisPagedListSelectFields(AccountService.ShareAnalysisPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.ShareAnalysisPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetShareAnalysisPagedListSelectFieldsResponse>>("getShareAnalysisPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchShareAnalysisPagedSelectFieldsResponse>> SearchShareAnalysisPagedSelectFields(AccountService.ShareAnalysisSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.ShareAnalysisSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchShareAnalysisPagedSelectFieldsResponse>>("searchShareAnalysisPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetShareAnalysisGroupSelectFieldsResponse>> GetShareAnalysisGroupSelectFields(AccountService.ShareAnalysisGroupSelectFieldsRequest payload) =>
    RequestAsync<AccountService.ShareAnalysisGroupSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetShareAnalysisGroupSelectFieldsResponse>>("getShareAnalysisGroupSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetShareAnalysisGroupPagedListSelectFieldsResponse>> GetShareAnalysisGroupPagedListSelectFields(AccountService.ShareAnalysisGroupPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.ShareAnalysisGroupPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetShareAnalysisGroupPagedListSelectFieldsResponse>>("getShareAnalysisGroupPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchShareAnalysisGroupPagedSelectFieldsResponse>> SearchShareAnalysisGroupPagedSelectFields(AccountService.ShareAnalysisGroupSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.ShareAnalysisGroupSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchShareAnalysisGroupPagedSelectFieldsResponse>>("searchShareAnalysisGroupPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetShareAnalysisPlanSelectFieldsResponse>> GetShareAnalysisPlanSelectFields(AccountService.ShareAnalysisPlanSelectFieldsRequest payload) =>
    RequestAsync<AccountService.ShareAnalysisPlanSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetShareAnalysisPlanSelectFieldsResponse>>("getShareAnalysisPlanSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetShareAnalysisPlanPagedListSelectFieldsResponse>> GetShareAnalysisPlanPagedListSelectFields(AccountService.ShareAnalysisPlanPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.ShareAnalysisPlanPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetShareAnalysisPlanPagedListSelectFieldsResponse>>("getShareAnalysisPlanPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchShareAnalysisPlanPagedSelectFieldsResponse>> SearchShareAnalysisPlanPagedSelectFields(AccountService.ShareAnalysisPlanSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.ShareAnalysisPlanSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchShareAnalysisPlanPagedSelectFieldsResponse>>("searchShareAnalysisPlanPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetShareCheckOrderSelectFieldsResponse>> GetShareCheckOrderSelectFields(AccountService.ShareCheckOrderSelectFieldsRequest payload) =>
    RequestAsync<AccountService.ShareCheckOrderSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetShareCheckOrderSelectFieldsResponse>>("getShareCheckOrderSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetShareCheckOrderPagedListSelectFieldsResponse>> GetShareCheckOrderPagedListSelectFields(AccountService.ShareCheckOrderPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.ShareCheckOrderPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetShareCheckOrderPagedListSelectFieldsResponse>>("getShareCheckOrderPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchShareCheckOrderPagedSelectFieldsResponse>> SearchShareCheckOrderPagedSelectFields(AccountService.ShareCheckOrderSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.ShareCheckOrderSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchShareCheckOrderPagedSelectFieldsResponse>>("searchShareCheckOrderPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetShareHoldSelectFieldsResponse>> GetShareHoldSelectFields(AccountService.ShareHoldSelectFieldsRequest payload) =>
    RequestAsync<AccountService.ShareHoldSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetShareHoldSelectFieldsResponse>>("getShareHoldSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetShareHoldPagedListSelectFieldsResponse>> GetShareHoldPagedListSelectFields(AccountService.ShareHoldPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.ShareHoldPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetShareHoldPagedListSelectFieldsResponse>>("getShareHoldPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchShareHoldPagedSelectFieldsResponse>> SearchShareHoldPagedSelectFields(AccountService.ShareHoldSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.ShareHoldSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchShareHoldPagedSelectFieldsResponse>>("searchShareHoldPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetShareNameSelectFieldsResponse>> GetShareNameSelectFields(AccountService.ShareNameSelectFieldsRequest payload) =>
    RequestAsync<AccountService.ShareNameSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetShareNameSelectFieldsResponse>>("getShareNameSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetShareNamePagedListSelectFieldsResponse>> GetShareNamePagedListSelectFields(AccountService.ShareNamePagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.ShareNamePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetShareNamePagedListSelectFieldsResponse>>("getShareNamePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchShareNamePagedSelectFieldsResponse>> SearchShareNamePagedSelectFields(AccountService.ShareNameSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.ShareNameSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchShareNamePagedSelectFieldsResponse>>("searchShareNamePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetShareNoteSelectFieldsResponse>> GetShareNoteSelectFields(AccountService.ShareNoteSelectFieldsRequest payload) =>
    RequestAsync<AccountService.ShareNoteSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetShareNoteSelectFieldsResponse>>("getShareNoteSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetShareNotePagedListSelectFieldsResponse>> GetShareNotePagedListSelectFields(AccountService.ShareNotePagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.ShareNotePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetShareNotePagedListSelectFieldsResponse>>("getShareNotePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchShareNotePagedSelectFieldsResponse>> SearchShareNotePagedSelectFields(AccountService.ShareNoteSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.ShareNoteSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchShareNotePagedSelectFieldsResponse>>("searchShareNotePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetShareTrackingSelectFieldsResponse>> GetShareTrackingSelectFields(AccountService.ShareTrackingSelectFieldsRequest payload) =>
    RequestAsync<AccountService.ShareTrackingSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetShareTrackingSelectFieldsResponse>>("getShareTrackingSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetShareTrackingPagedListSelectFieldsResponse>> GetShareTrackingPagedListSelectFields(AccountService.ShareTrackingPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.ShareTrackingPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetShareTrackingPagedListSelectFieldsResponse>>("getShareTrackingPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchShareTrackingPagedSelectFieldsResponse>> SearchShareTrackingPagedSelectFields(AccountService.ShareTrackingSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.ShareTrackingSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchShareTrackingPagedSelectFieldsResponse>>("searchShareTrackingPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetShareTransactionPagedListSelectFieldsResponse>> GetShareTransactionPagedListSelectFields(AccountService.ShareTransactionPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.ShareTransactionPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetShareTransactionPagedListSelectFieldsResponse>>("getShareTransactionPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchShareTransactionPagedSelectFieldsResponse>> SearchShareTransactionPagedSelectFields(AccountService.ShareTransactionSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.ShareTransactionSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchShareTransactionPagedSelectFieldsResponse>>("searchShareTransactionPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetShareTransferSelectFieldsResponse>> GetShareTransferSelectFields(AccountService.ShareTransferSelectFieldsRequest payload) =>
    RequestAsync<AccountService.ShareTransferSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetShareTransferSelectFieldsResponse>>("getShareTransferSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetShareTransferPagedListSelectFieldsResponse>> GetShareTransferPagedListSelectFields(AccountService.ShareTransferPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.ShareTransferPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetShareTransferPagedListSelectFieldsResponse>>("getShareTransferPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchShareTransferPagedSelectFieldsResponse>> SearchShareTransferPagedSelectFields(AccountService.ShareTransferSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.ShareTransferSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchShareTransferPagedSelectFieldsResponse>>("searchShareTransferPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetSiteSelectFieldsResponse>> GetSiteSelectFields(AccountService.SiteSelectFieldsRequest payload) =>
    RequestAsync<AccountService.SiteSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetSiteSelectFieldsResponse>>("getSiteSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetSiteSelectFieldsFilterChildrenResponse>> GetSiteSelectFieldsFilterChildren(AccountService.SiteSelectFieldsFilterChildrenRequest payload) =>
    RequestAsync<AccountService.SiteSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<AccountService.GetSiteSelectFieldsFilterChildrenResponse>>("getSiteSelectFieldsFilterChildren", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetSitePagedListSelectFieldsResponse>> GetSitePagedListSelectFields(AccountService.SitePagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.SitePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetSitePagedListSelectFieldsResponse>>("getSitePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchSitePagedSelectFieldsResponse>> SearchSitePagedSelectFields(AccountService.SiteSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.SiteSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchSitePagedSelectFieldsResponse>>("searchSitePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetSiteCashOrderTypeSelectFieldsResponse>> GetSiteCashOrderTypeSelectFields(AccountService.SiteCashOrderTypeSelectFieldsRequest payload) =>
    RequestAsync<AccountService.SiteCashOrderTypeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetSiteCashOrderTypeSelectFieldsResponse>>("getSiteCashOrderTypeSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetSiteCashOrderTypePagedListSelectFieldsResponse>> GetSiteCashOrderTypePagedListSelectFields(AccountService.SiteCashOrderTypePagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.SiteCashOrderTypePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetSiteCashOrderTypePagedListSelectFieldsResponse>>("getSiteCashOrderTypePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchSiteCashOrderTypePagedSelectFieldsResponse>> SearchSiteCashOrderTypePagedSelectFields(AccountService.SiteCashOrderTypeSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.SiteCashOrderTypeSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchSiteCashOrderTypePagedSelectFieldsResponse>>("searchSiteCashOrderTypePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetTrackingSelectFieldsResponse>> GetTrackingSelectFields(AccountService.TrackingSelectFieldsRequest payload) =>
    RequestAsync<AccountService.TrackingSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetTrackingSelectFieldsResponse>>("getTrackingSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.GetTrackingPagedListSelectFieldsResponse>> GetTrackingPagedListSelectFields(AccountService.TrackingPagedListSelectFieldsRequest payload) =>
    RequestAsync<AccountService.TrackingPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.GetTrackingPagedListSelectFieldsResponse>>("getTrackingPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SearchTrackingPagedSelectFieldsResponse>> SearchTrackingPagedSelectFields(AccountService.TrackingSearchPagedSelectFieldsRequest payload) =>
    RequestAsync<AccountService.TrackingSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SearchTrackingPagedSelectFieldsResponse>>("searchTrackingPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateAccountByIdResponse>> UpdateAccountById(AccountService.UpdateAccountByIdRequest payload) =>
    RequestAsync<AccountService.UpdateAccountByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateAccountByIdResponse>>("updateAccountByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateBatchAchOrigByIdResponse>> UpdateBatchAchOrigById(AccountService.UpdateBatchAchOrigByIdRequest payload) =>
    RequestAsync<AccountService.UpdateBatchAchOrigByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateBatchAchOrigByIdResponse>>("updateBatchAchOrigByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateCardByIdResponse>> UpdateCardById(AccountService.UpdateCardByIdRequest payload) =>
    RequestAsync<AccountService.UpdateCardByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateCardByIdResponse>>("updateCardByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateCardAccessByIdResponse>> UpdateCardAccessById(AccountService.UpdateCardAccessByIdRequest payload) =>
    RequestAsync<AccountService.UpdateCardAccessByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateCardAccessByIdResponse>>("updateCardAccessByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateCardNameByIdResponse>> UpdateCardNameById(AccountService.UpdateCardNameByIdRequest payload) =>
    RequestAsync<AccountService.UpdateCardNameByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateCardNameByIdResponse>>("updateCardNameByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateCardNoteByIdResponse>> UpdateCardNoteById(AccountService.UpdateCardNoteByIdRequest payload) =>
    RequestAsync<AccountService.UpdateCardNoteByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateCardNoteByIdResponse>>("updateCardNoteByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateCpWorkCardTrackingByIdResponse>> UpdateCpWorkCardTrackingById(AccountService.UpdateCpWorkCardTrackingByIdRequest payload) =>
    RequestAsync<AccountService.UpdateCpWorkCardTrackingByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateCpWorkCardTrackingByIdResponse>>("updateCpWorkCardTrackingByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateEftByIdResponse>> UpdateEftById(AccountService.UpdateEftByIdRequest payload) =>
    RequestAsync<AccountService.UpdateEftByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateEftByIdResponse>>("updateEftByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateEftAddendaInfoByIdResponse>> UpdateEftAddendaInfoById(AccountService.UpdateEftAddendaInfoByIdRequest payload) =>
    RequestAsync<AccountService.UpdateEftAddendaInfoByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateEftAddendaInfoByIdResponse>>("updateEftAddendaInfoByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateEftNameByIdResponse>> UpdateEftNameById(AccountService.UpdateEftNameByIdRequest payload) =>
    RequestAsync<AccountService.UpdateEftNameByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateEftNameByIdResponse>>("updateEftNameByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateEftTransferByIdResponse>> UpdateEftTransferById(AccountService.UpdateEftTransferByIdRequest payload) =>
    RequestAsync<AccountService.UpdateEftTransferByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateEftTransferByIdResponse>>("updateEftTransferByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateExternalAccountByIdResponse>> UpdateExternalAccountById(AccountService.UpdateExternalAccountByIdRequest payload) =>
    RequestAsync<AccountService.UpdateExternalAccountByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateExternalAccountByIdResponse>>("updateExternalAccountByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateExternalLoanByIdResponse>> UpdateExternalLoanById(AccountService.UpdateExternalLoanByIdRequest payload) =>
    RequestAsync<AccountService.UpdateExternalLoanByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateExternalLoanByIdResponse>>("updateExternalLoanByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateExternalLoanNameByIdResponse>> UpdateExternalLoanNameById(AccountService.UpdateExternalLoanNameByIdRequest payload) =>
    RequestAsync<AccountService.UpdateExternalLoanNameByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateExternalLoanNameByIdResponse>>("updateExternalLoanNameByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateExternalLoanNoteByIdResponse>> UpdateExternalLoanNoteById(AccountService.UpdateExternalLoanNoteByIdRequest payload) =>
    RequestAsync<AccountService.UpdateExternalLoanNoteByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateExternalLoanNoteByIdResponse>>("updateExternalLoanNoteByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateExternalLoanTrackingByIdResponse>> UpdateExternalLoanTrackingById(AccountService.UpdateExternalLoanTrackingByIdRequest payload) =>
    RequestAsync<AccountService.UpdateExternalLoanTrackingByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateExternalLoanTrackingByIdResponse>>("updateExternalLoanTrackingByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateExternalLoanTransferByIdResponse>> UpdateExternalLoanTransferById(AccountService.UpdateExternalLoanTransferByIdRequest payload) =>
    RequestAsync<AccountService.UpdateExternalLoanTransferByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateExternalLoanTransferByIdResponse>>("updateExternalLoanTransferByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateHouseholdByIdResponse>> UpdateHouseholdById(AccountService.UpdateHouseholdByIdRequest payload) =>
    RequestAsync<AccountService.UpdateHouseholdByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateHouseholdByIdResponse>>("updateHouseholdByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateIrsByIdResponse>> UpdateIrsById(AccountService.UpdateIrsByIdRequest payload) =>
    RequestAsync<AccountService.UpdateIrsByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateIrsByIdResponse>>("updateIrsByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateIrsDistributionByIdResponse>> UpdateIrsDistributionById(AccountService.UpdateIrsDistributionByIdRequest payload) =>
    RequestAsync<AccountService.UpdateIrsDistributionByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateIrsDistributionByIdResponse>>("updateIrsDistributionByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateIrsNameByIdResponse>> UpdateIrsNameById(AccountService.UpdateIrsNameByIdRequest payload) =>
    RequestAsync<AccountService.UpdateIrsNameByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateIrsNameByIdResponse>>("updateIrsNameByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateLoanByIdResponse>> UpdateLoanById(AccountService.UpdateLoanByIdRequest payload) =>
    RequestAsync<AccountService.UpdateLoanByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateLoanByIdResponse>>("updateLoanByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateLoanBankruptcyByIdResponse>> UpdateLoanBankruptcyById(AccountService.UpdateLoanBankruptcyByIdRequest payload) =>
    RequestAsync<AccountService.UpdateLoanBankruptcyByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateLoanBankruptcyByIdResponse>>("updateLoanBankruptcyByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateLoanBankruptcyPrepetitionBalByIdResponse>> UpdateLoanBankruptcyPrepetitionBalById(AccountService.UpdateLoanBankruptcyPrepetitionBalByIdRequest payload) =>
    RequestAsync<AccountService.UpdateLoanBankruptcyPrepetitionBalByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateLoanBankruptcyPrepetitionBalByIdResponse>>("updateLoanBankruptcyPrepetitionBalByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateLoanBillingByIdResponse>> UpdateLoanBillingById(AccountService.UpdateLoanBillingByIdRequest payload) =>
    RequestAsync<AccountService.UpdateLoanBillingByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateLoanBillingByIdResponse>>("updateLoanBillingByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateLoanCheckOrderByIdResponse>> UpdateLoanCheckOrderById(AccountService.UpdateLoanCheckOrderByIdRequest payload) =>
    RequestAsync<AccountService.UpdateLoanCheckOrderByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateLoanCheckOrderByIdResponse>>("updateLoanCheckOrderByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateLoanEscrowByIdResponse>> UpdateLoanEscrowById(AccountService.UpdateLoanEscrowByIdRequest payload) =>
    RequestAsync<AccountService.UpdateLoanEscrowByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateLoanEscrowByIdResponse>>("updateLoanEscrowByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateLoanEscrowAnalysisByIdResponse>> UpdateLoanEscrowAnalysisById(AccountService.UpdateLoanEscrowAnalysisByIdRequest payload) =>
    RequestAsync<AccountService.UpdateLoanEscrowAnalysisByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateLoanEscrowAnalysisByIdResponse>>("updateLoanEscrowAnalysisByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateLoanHoldByIdResponse>> UpdateLoanHoldById(AccountService.UpdateLoanHoldByIdRequest payload) =>
    RequestAsync<AccountService.UpdateLoanHoldByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateLoanHoldByIdResponse>>("updateLoanHoldByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateLoanLnSegmentByIdResponse>> UpdateLoanLnSegmentById(AccountService.UpdateLoanLnSegmentByIdRequest payload) =>
    RequestAsync<AccountService.UpdateLoanLnSegmentByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateLoanLnSegmentByIdResponse>>("updateLoanLnSegmentByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateLoanLnSegmentBillingByIdResponse>> UpdateLoanLnSegmentBillingById(AccountService.UpdateLoanLnSegmentBillingByIdRequest payload) =>
    RequestAsync<AccountService.UpdateLoanLnSegmentBillingByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateLoanLnSegmentBillingByIdResponse>>("updateLoanLnSegmentBillingByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateLoanNameByIdResponse>> UpdateLoanNameById(AccountService.UpdateLoanNameByIdRequest payload) =>
    RequestAsync<AccountService.UpdateLoanNameByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateLoanNameByIdResponse>>("updateLoanNameByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateLoanNoteByIdResponse>> UpdateLoanNoteById(AccountService.UpdateLoanNoteByIdRequest payload) =>
    RequestAsync<AccountService.UpdateLoanNoteByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateLoanNoteByIdResponse>>("updateLoanNoteByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateLoanPledgeByIdResponse>> UpdateLoanPledgeById(AccountService.UpdateLoanPledgeByIdRequest payload) =>
    RequestAsync<AccountService.UpdateLoanPledgeByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateLoanPledgeByIdResponse>>("updateLoanPledgeByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateLoanPledgeNameByIdResponse>> UpdateLoanPledgeNameById(AccountService.UpdateLoanPledgeNameByIdRequest payload) =>
    RequestAsync<AccountService.UpdateLoanPledgeNameByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateLoanPledgeNameByIdResponse>>("updateLoanPledgeNameByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateLoanRateChangeByIdResponse>> UpdateLoanRateChangeById(AccountService.UpdateLoanRateChangeByIdRequest payload) =>
    RequestAsync<AccountService.UpdateLoanRateChangeByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateLoanRateChangeByIdResponse>>("updateLoanRateChangeByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateLoanScheduleByIdResponse>> UpdateLoanScheduleById(AccountService.UpdateLoanScheduleByIdRequest payload) =>
    RequestAsync<AccountService.UpdateLoanScheduleByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateLoanScheduleByIdResponse>>("updateLoanScheduleByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateLoanTrackingByIdResponse>> UpdateLoanTrackingById(AccountService.UpdateLoanTrackingByIdRequest payload) =>
    RequestAsync<AccountService.UpdateLoanTrackingByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateLoanTrackingByIdResponse>>("updateLoanTrackingByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateLoanTransferByIdResponse>> UpdateLoanTransferById(AccountService.UpdateLoanTransferByIdRequest payload) =>
    RequestAsync<AccountService.UpdateLoanTransferByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateLoanTransferByIdResponse>>("updateLoanTransferByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateLoanAppByIdResponse>> UpdateLoanAppById(AccountService.UpdateLoanAppByIdRequest payload) =>
    RequestAsync<AccountService.UpdateLoanAppByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateLoanAppByIdResponse>>("updateLoanAppByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateLoanAppEscrowByIdResponse>> UpdateLoanAppEscrowById(AccountService.UpdateLoanAppEscrowByIdRequest payload) =>
    RequestAsync<AccountService.UpdateLoanAppEscrowByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateLoanAppEscrowByIdResponse>>("updateLoanAppEscrowByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateLoanAppEscrowAnalysisByIdResponse>> UpdateLoanAppEscrowAnalysisById(AccountService.UpdateLoanAppEscrowAnalysisByIdRequest payload) =>
    RequestAsync<AccountService.UpdateLoanAppEscrowAnalysisByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateLoanAppEscrowAnalysisByIdResponse>>("updateLoanAppEscrowAnalysisByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateLoanAppFinanceByIdResponse>> UpdateLoanAppFinanceById(AccountService.UpdateLoanAppFinanceByIdRequest payload) =>
    RequestAsync<AccountService.UpdateLoanAppFinanceByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateLoanAppFinanceByIdResponse>>("updateLoanAppFinanceByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateLoanAppLnSegmentByIdResponse>> UpdateLoanAppLnSegmentById(AccountService.UpdateLoanAppLnSegmentByIdRequest payload) =>
    RequestAsync<AccountService.UpdateLoanAppLnSegmentByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateLoanAppLnSegmentByIdResponse>>("updateLoanAppLnSegmentByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateLoanAppNoteByIdResponse>> UpdateLoanAppNoteById(AccountService.UpdateLoanAppNoteByIdRequest payload) =>
    RequestAsync<AccountService.UpdateLoanAppNoteByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateLoanAppNoteByIdResponse>>("updateLoanAppNoteByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateLoanAppPersonByIdResponse>> UpdateLoanAppPersonById(AccountService.UpdateLoanAppPersonByIdRequest payload) =>
    RequestAsync<AccountService.UpdateLoanAppPersonByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateLoanAppPersonByIdResponse>>("updateLoanAppPersonByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateLoanAppPledgeByIdResponse>> UpdateLoanAppPledgeById(AccountService.UpdateLoanAppPledgeByIdRequest payload) =>
    RequestAsync<AccountService.UpdateLoanAppPledgeByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateLoanAppPledgeByIdResponse>>("updateLoanAppPledgeByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateLoanAppScheduleByIdResponse>> UpdateLoanAppScheduleById(AccountService.UpdateLoanAppScheduleByIdRequest payload) =>
    RequestAsync<AccountService.UpdateLoanAppScheduleByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateLoanAppScheduleByIdResponse>>("updateLoanAppScheduleByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateLoanAppTrackingByIdResponse>> UpdateLoanAppTrackingById(AccountService.UpdateLoanAppTrackingByIdRequest payload) =>
    RequestAsync<AccountService.UpdateLoanAppTrackingByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateLoanAppTrackingByIdResponse>>("updateLoanAppTrackingByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateLookupByIdResponse>> UpdateLookupById(AccountService.UpdateLookupByIdRequest payload) =>
    RequestAsync<AccountService.UpdateLookupByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateLookupByIdResponse>>("updateLookupByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateNameByIdResponse>> UpdateNameById(AccountService.UpdateNameByIdRequest payload) =>
    RequestAsync<AccountService.UpdateNameByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateNameByIdResponse>>("updateNameByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateNoteByIdResponse>> UpdateNoteById(AccountService.UpdateNoteByIdRequest payload) =>
    RequestAsync<AccountService.UpdateNoteByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateNoteByIdResponse>>("updateNoteByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdatePledgeByIdResponse>> UpdatePledgeById(AccountService.UpdatePledgeByIdRequest payload) =>
    RequestAsync<AccountService.UpdatePledgeByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdatePledgeByIdResponse>>("updatePledgeByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdatePortfolioByIdResponse>> UpdatePortfolioById(AccountService.UpdatePortfolioByIdRequest payload) =>
    RequestAsync<AccountService.UpdatePortfolioByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdatePortfolioByIdResponse>>("updatePortfolioByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdatePortfolioHoldByIdResponse>> UpdatePortfolioHoldById(AccountService.UpdatePortfolioHoldByIdRequest payload) =>
    RequestAsync<AccountService.UpdatePortfolioHoldByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdatePortfolioHoldByIdResponse>>("updatePortfolioHoldByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdatePortfolioNoteByIdResponse>> UpdatePortfolioNoteById(AccountService.UpdatePortfolioNoteByIdRequest payload) =>
    RequestAsync<AccountService.UpdatePortfolioNoteByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdatePortfolioNoteByIdResponse>>("updatePortfolioNoteByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdatePortfolioTrackingByIdResponse>> UpdatePortfolioTrackingById(AccountService.UpdatePortfolioTrackingByIdRequest payload) =>
    RequestAsync<AccountService.UpdatePortfolioTrackingByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdatePortfolioTrackingByIdResponse>>("updatePortfolioTrackingByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdatePreferenceByIdResponse>> UpdatePreferenceById(AccountService.UpdatePreferenceByIdRequest payload) =>
    RequestAsync<AccountService.UpdatePreferenceByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdatePreferenceByIdResponse>>("updatePreferenceByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdatePreferenceAccessByIdResponse>> UpdatePreferenceAccessById(AccountService.UpdatePreferenceAccessByIdRequest payload) =>
    RequestAsync<AccountService.UpdatePreferenceAccessByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdatePreferenceAccessByIdResponse>>("updatePreferenceAccessByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateShareByIdResponse>> UpdateShareById(AccountService.UpdateShareByIdRequest payload) =>
    RequestAsync<AccountService.UpdateShareByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateShareByIdResponse>>("updateShareByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateShareAnalysisByIdResponse>> UpdateShareAnalysisById(AccountService.UpdateShareAnalysisByIdRequest payload) =>
    RequestAsync<AccountService.UpdateShareAnalysisByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateShareAnalysisByIdResponse>>("updateShareAnalysisByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateShareAnalysisGroupByIdResponse>> UpdateShareAnalysisGroupById(AccountService.UpdateShareAnalysisGroupByIdRequest payload) =>
    RequestAsync<AccountService.UpdateShareAnalysisGroupByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateShareAnalysisGroupByIdResponse>>("updateShareAnalysisGroupByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateShareAnalysisPlanByIdResponse>> UpdateShareAnalysisPlanById(AccountService.UpdateShareAnalysisPlanByIdRequest payload) =>
    RequestAsync<AccountService.UpdateShareAnalysisPlanByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateShareAnalysisPlanByIdResponse>>("updateShareAnalysisPlanByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateShareCheckOrderByIdResponse>> UpdateShareCheckOrderById(AccountService.UpdateShareCheckOrderByIdRequest payload) =>
    RequestAsync<AccountService.UpdateShareCheckOrderByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateShareCheckOrderByIdResponse>>("updateShareCheckOrderByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateShareHoldByIdResponse>> UpdateShareHoldById(AccountService.UpdateShareHoldByIdRequest payload) =>
    RequestAsync<AccountService.UpdateShareHoldByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateShareHoldByIdResponse>>("updateShareHoldByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateShareNameByIdResponse>> UpdateShareNameById(AccountService.UpdateShareNameByIdRequest payload) =>
    RequestAsync<AccountService.UpdateShareNameByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateShareNameByIdResponse>>("updateShareNameByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateShareNoteByIdResponse>> UpdateShareNoteById(AccountService.UpdateShareNoteByIdRequest payload) =>
    RequestAsync<AccountService.UpdateShareNoteByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateShareNoteByIdResponse>>("updateShareNoteByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateShareTrackingByIdResponse>> UpdateShareTrackingById(AccountService.UpdateShareTrackingByIdRequest payload) =>
    RequestAsync<AccountService.UpdateShareTrackingByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateShareTrackingByIdResponse>>("updateShareTrackingByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateShareTransferByIdResponse>> UpdateShareTransferById(AccountService.UpdateShareTransferByIdRequest payload) =>
    RequestAsync<AccountService.UpdateShareTransferByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateShareTransferByIdResponse>>("updateShareTransferByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateSiteByIdResponse>> UpdateSiteById(AccountService.UpdateSiteByIdRequest payload) =>
    RequestAsync<AccountService.UpdateSiteByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateSiteByIdResponse>>("updateSiteByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateSiteCashOrderTypeByIdResponse>> UpdateSiteCashOrderTypeById(AccountService.UpdateSiteCashOrderTypeByIdRequest payload) =>
    RequestAsync<AccountService.UpdateSiteCashOrderTypeByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateSiteCashOrderTypeByIdResponse>>("updateSiteCashOrderTypeByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.UpdateTrackingByIdResponse>> UpdateTrackingById(AccountService.UpdateTrackingByIdRequest payload) =>
    RequestAsync<AccountService.UpdateTrackingByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.UpdateTrackingByIdResponse>>("updateTrackingByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateAccountResponse>> CreateAccount(AccountService.CreateAccountRequest payload) =>
    RequestAsync<AccountService.CreateAccountRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateAccountResponse>>("createAccount", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateBatchAchOrigResponse>> CreateBatchAchOrig(AccountService.CreateBatchAchOrigRequest payload) =>
    RequestAsync<AccountService.CreateBatchAchOrigRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateBatchAchOrigResponse>>("createBatchAchOrig", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateCardResponse>> CreateCard(AccountService.CreateCardRequest payload) =>
    RequestAsync<AccountService.CreateCardRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateCardResponse>>("createCard", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateCardAccessResponse>> CreateCardAccess(AccountService.CreateCardAccessRequest payload) =>
    RequestAsync<AccountService.CreateCardAccessRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateCardAccessResponse>>("createCardAccess", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateCardNameResponse>> CreateCardName(AccountService.CreateCardNameRequest payload) =>
    RequestAsync<AccountService.CreateCardNameRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateCardNameResponse>>("createCardName", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateCardNoteResponse>> CreateCardNote(AccountService.CreateCardNoteRequest payload) =>
    RequestAsync<AccountService.CreateCardNoteRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateCardNoteResponse>>("createCardNote", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateCommentResponse>> CreateComment(AccountService.CreateCommentRequest payload) =>
    RequestAsync<AccountService.CreateCommentRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateCommentResponse>>("createComment", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateCpWorkCardResponse>> CreateCpWorkCard(AccountService.CreateCpWorkCardRequest payload) =>
    RequestAsync<AccountService.CreateCpWorkCardRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateCpWorkCardResponse>>("createCpWorkCard", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateCpWorkCardNoteResponse>> CreateCpWorkCardNote(AccountService.CreateCpWorkCardNoteRequest payload) =>
    RequestAsync<AccountService.CreateCpWorkCardNoteRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateCpWorkCardNoteResponse>>("createCpWorkCardNote", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateCpWorkCardTrackingResponse>> CreateCpWorkCardTracking(AccountService.CreateCpWorkCardTrackingRequest payload) =>
    RequestAsync<AccountService.CreateCpWorkCardTrackingRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateCpWorkCardTrackingResponse>>("createCpWorkCardTracking", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateEftResponse>> CreateEft(AccountService.CreateEftRequest payload) =>
    RequestAsync<AccountService.CreateEftRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateEftResponse>>("createEft", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateEftAddendaInfoResponse>> CreateEftAddendaInfo(AccountService.CreateEftAddendaInfoRequest payload) =>
    RequestAsync<AccountService.CreateEftAddendaInfoRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateEftAddendaInfoResponse>>("createEftAddendaInfo", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateEftNameResponse>> CreateEftName(AccountService.CreateEftNameRequest payload) =>
    RequestAsync<AccountService.CreateEftNameRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateEftNameResponse>>("createEftName", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateEftTransferResponse>> CreateEftTransfer(AccountService.CreateEftTransferRequest payload) =>
    RequestAsync<AccountService.CreateEftTransferRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateEftTransferResponse>>("createEftTransfer", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateExternalAccountResponse>> CreateExternalAccount(AccountService.CreateExternalAccountRequest payload) =>
    RequestAsync<AccountService.CreateExternalAccountRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateExternalAccountResponse>>("createExternalAccount", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateExternalLoanResponse>> CreateExternalLoan(AccountService.CreateExternalLoanRequest payload) =>
    RequestAsync<AccountService.CreateExternalLoanRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateExternalLoanResponse>>("createExternalLoan", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateExternalLoanNameResponse>> CreateExternalLoanName(AccountService.CreateExternalLoanNameRequest payload) =>
    RequestAsync<AccountService.CreateExternalLoanNameRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateExternalLoanNameResponse>>("createExternalLoanName", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateExternalLoanNoteResponse>> CreateExternalLoanNote(AccountService.CreateExternalLoanNoteRequest payload) =>
    RequestAsync<AccountService.CreateExternalLoanNoteRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateExternalLoanNoteResponse>>("createExternalLoanNote", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateExternalLoanTrackingResponse>> CreateExternalLoanTracking(AccountService.CreateExternalLoanTrackingRequest payload) =>
    RequestAsync<AccountService.CreateExternalLoanTrackingRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateExternalLoanTrackingResponse>>("createExternalLoanTracking", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateExternalLoanTransferResponse>> CreateExternalLoanTransfer(AccountService.CreateExternalLoanTransferRequest payload) =>
    RequestAsync<AccountService.CreateExternalLoanTransferRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateExternalLoanTransferResponse>>("createExternalLoanTransfer", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateHouseholdResponse>> CreateHousehold(AccountService.CreateHouseholdRequest payload) =>
    RequestAsync<AccountService.CreateHouseholdRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateHouseholdResponse>>("createHousehold", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateIrsResponse>> CreateIrs(AccountService.CreateIrsRequest payload) =>
    RequestAsync<AccountService.CreateIrsRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateIrsResponse>>("createIrs", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateIrsDistributionResponse>> CreateIrsDistribution(AccountService.CreateIrsDistributionRequest payload) =>
    RequestAsync<AccountService.CreateIrsDistributionRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateIrsDistributionResponse>>("createIrsDistribution", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateIrsNameResponse>> CreateIrsName(AccountService.CreateIrsNameRequest payload) =>
    RequestAsync<AccountService.CreateIrsNameRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateIrsNameResponse>>("createIrsName", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateLoanResponse>> CreateLoan(AccountService.CreateLoanRequest payload) =>
    RequestAsync<AccountService.CreateLoanRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateLoanResponse>>("createLoan", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateLoanBankruptcyResponse>> CreateLoanBankruptcy(AccountService.CreateLoanBankruptcyRequest payload) =>
    RequestAsync<AccountService.CreateLoanBankruptcyRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateLoanBankruptcyResponse>>("createLoanBankruptcy", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateLoanBankruptcyPrepetitionBalResponse>> CreateLoanBankruptcyPrepetitionBal(AccountService.CreateLoanBankruptcyPrepetitionBalRequest payload) =>
    RequestAsync<AccountService.CreateLoanBankruptcyPrepetitionBalRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateLoanBankruptcyPrepetitionBalResponse>>("createLoanBankruptcyPrepetitionBal", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateLoanBillingResponse>> CreateLoanBilling(AccountService.CreateLoanBillingRequest payload) =>
    RequestAsync<AccountService.CreateLoanBillingRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateLoanBillingResponse>>("createLoanBilling", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateLoanCheckOrderResponse>> CreateLoanCheckOrder(AccountService.CreateLoanCheckOrderRequest payload) =>
    RequestAsync<AccountService.CreateLoanCheckOrderRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateLoanCheckOrderResponse>>("createLoanCheckOrder", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateLoanEscrowResponse>> CreateLoanEscrow(AccountService.CreateLoanEscrowRequest payload) =>
    RequestAsync<AccountService.CreateLoanEscrowRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateLoanEscrowResponse>>("createLoanEscrow", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateLoanEscrowAnalysisResponse>> CreateLoanEscrowAnalysis(AccountService.CreateLoanEscrowAnalysisRequest payload) =>
    RequestAsync<AccountService.CreateLoanEscrowAnalysisRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateLoanEscrowAnalysisResponse>>("createLoanEscrowAnalysis", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateLoanHoldResponse>> CreateLoanHold(AccountService.CreateLoanHoldRequest payload) =>
    RequestAsync<AccountService.CreateLoanHoldRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateLoanHoldResponse>>("createLoanHold", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateLoanLnSegmentResponse>> CreateLoanLnSegment(AccountService.CreateLoanLnSegmentRequest payload) =>
    RequestAsync<AccountService.CreateLoanLnSegmentRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateLoanLnSegmentResponse>>("createLoanLnSegment", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateLoanLnSegmentBillingResponse>> CreateLoanLnSegmentBilling(AccountService.CreateLoanLnSegmentBillingRequest payload) =>
    RequestAsync<AccountService.CreateLoanLnSegmentBillingRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateLoanLnSegmentBillingResponse>>("createLoanLnSegmentBilling", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateLoanNameResponse>> CreateLoanName(AccountService.CreateLoanNameRequest payload) =>
    RequestAsync<AccountService.CreateLoanNameRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateLoanNameResponse>>("createLoanName", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateLoanNoteResponse>> CreateLoanNote(AccountService.CreateLoanNoteRequest payload) =>
    RequestAsync<AccountService.CreateLoanNoteRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateLoanNoteResponse>>("createLoanNote", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateLoanPledgeResponse>> CreateLoanPledge(AccountService.CreateLoanPledgeRequest payload) =>
    RequestAsync<AccountService.CreateLoanPledgeRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateLoanPledgeResponse>>("createLoanPledge", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateLoanPledgeNameResponse>> CreateLoanPledgeName(AccountService.CreateLoanPledgeNameRequest payload) =>
    RequestAsync<AccountService.CreateLoanPledgeNameRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateLoanPledgeNameResponse>>("createLoanPledgeName", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateLoanRateChangeResponse>> CreateLoanRateChange(AccountService.CreateLoanRateChangeRequest payload) =>
    RequestAsync<AccountService.CreateLoanRateChangeRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateLoanRateChangeResponse>>("createLoanRateChange", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateLoanScheduleResponse>> CreateLoanSchedule(AccountService.CreateLoanScheduleRequest payload) =>
    RequestAsync<AccountService.CreateLoanScheduleRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateLoanScheduleResponse>>("createLoanSchedule", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateLoanTrackingResponse>> CreateLoanTracking(AccountService.CreateLoanTrackingRequest payload) =>
    RequestAsync<AccountService.CreateLoanTrackingRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateLoanTrackingResponse>>("createLoanTracking", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateLoanTransferResponse>> CreateLoanTransfer(AccountService.CreateLoanTransferRequest payload) =>
    RequestAsync<AccountService.CreateLoanTransferRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateLoanTransferResponse>>("createLoanTransfer", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateLoanAppResponse>> CreateLoanApp(AccountService.CreateLoanAppRequest payload) =>
    RequestAsync<AccountService.CreateLoanAppRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateLoanAppResponse>>("createLoanApp", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateLoanAppEscrowResponse>> CreateLoanAppEscrow(AccountService.CreateLoanAppEscrowRequest payload) =>
    RequestAsync<AccountService.CreateLoanAppEscrowRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateLoanAppEscrowResponse>>("createLoanAppEscrow", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateLoanAppEscrowAnalysisResponse>> CreateLoanAppEscrowAnalysis(AccountService.CreateLoanAppEscrowAnalysisRequest payload) =>
    RequestAsync<AccountService.CreateLoanAppEscrowAnalysisRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateLoanAppEscrowAnalysisResponse>>("createLoanAppEscrowAnalysis", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateLoanAppFinanceResponse>> CreateLoanAppFinance(AccountService.CreateLoanAppFinanceRequest payload) =>
    RequestAsync<AccountService.CreateLoanAppFinanceRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateLoanAppFinanceResponse>>("createLoanAppFinance", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateLoanAppLnSegmentResponse>> CreateLoanAppLnSegment(AccountService.CreateLoanAppLnSegmentRequest payload) =>
    RequestAsync<AccountService.CreateLoanAppLnSegmentRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateLoanAppLnSegmentResponse>>("createLoanAppLnSegment", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateLoanAppNoteResponse>> CreateLoanAppNote(AccountService.CreateLoanAppNoteRequest payload) =>
    RequestAsync<AccountService.CreateLoanAppNoteRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateLoanAppNoteResponse>>("createLoanAppNote", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateLoanAppPersonResponse>> CreateLoanAppPerson(AccountService.CreateLoanAppPersonRequest payload) =>
    RequestAsync<AccountService.CreateLoanAppPersonRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateLoanAppPersonResponse>>("createLoanAppPerson", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateLoanAppPledgeResponse>> CreateLoanAppPledge(AccountService.CreateLoanAppPledgeRequest payload) =>
    RequestAsync<AccountService.CreateLoanAppPledgeRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateLoanAppPledgeResponse>>("createLoanAppPledge", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateLoanAppScheduleResponse>> CreateLoanAppSchedule(AccountService.CreateLoanAppScheduleRequest payload) =>
    RequestAsync<AccountService.CreateLoanAppScheduleRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateLoanAppScheduleResponse>>("createLoanAppSchedule", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateLoanAppTrackingResponse>> CreateLoanAppTracking(AccountService.CreateLoanAppTrackingRequest payload) =>
    RequestAsync<AccountService.CreateLoanAppTrackingRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateLoanAppTrackingResponse>>("createLoanAppTracking", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateLookupResponse>> CreateLookup(AccountService.CreateLookupRequest payload) =>
    RequestAsync<AccountService.CreateLookupRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateLookupResponse>>("createLookup", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateNameResponse>> CreateName(AccountService.CreateNameRequest payload) =>
    RequestAsync<AccountService.CreateNameRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateNameResponse>>("createName", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateNoteResponse>> CreateNote(AccountService.CreateNoteRequest payload) =>
    RequestAsync<AccountService.CreateNoteRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateNoteResponse>>("createNote", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreatePledgeResponse>> CreatePledge(AccountService.CreatePledgeRequest payload) =>
    RequestAsync<AccountService.CreatePledgeRequest,  Memberwise.Symxify.Models.Result<AccountService.CreatePledgeResponse>>("createPledge", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreatePortfolioResponse>> CreatePortfolio(AccountService.CreatePortfolioRequest payload) =>
    RequestAsync<AccountService.CreatePortfolioRequest,  Memberwise.Symxify.Models.Result<AccountService.CreatePortfolioResponse>>("createPortfolio", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreatePortfolioNoteResponse>> CreatePortfolioNote(AccountService.CreatePortfolioNoteRequest payload) =>
    RequestAsync<AccountService.CreatePortfolioNoteRequest,  Memberwise.Symxify.Models.Result<AccountService.CreatePortfolioNoteResponse>>("createPortfolioNote", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreatePortfolioTrackingResponse>> CreatePortfolioTracking(AccountService.CreatePortfolioTrackingRequest payload) =>
    RequestAsync<AccountService.CreatePortfolioTrackingRequest,  Memberwise.Symxify.Models.Result<AccountService.CreatePortfolioTrackingResponse>>("createPortfolioTracking", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreatePreferenceResponse>> CreatePreference(AccountService.CreatePreferenceRequest payload) =>
    RequestAsync<AccountService.CreatePreferenceRequest,  Memberwise.Symxify.Models.Result<AccountService.CreatePreferenceResponse>>("createPreference", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreatePreferenceAccessResponse>> CreatePreferenceAccess(AccountService.CreatePreferenceAccessRequest payload) =>
    RequestAsync<AccountService.CreatePreferenceAccessRequest,  Memberwise.Symxify.Models.Result<AccountService.CreatePreferenceAccessResponse>>("createPreferenceAccess", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateShareResponse>> CreateShare(AccountService.CreateShareRequest payload) =>
    RequestAsync<AccountService.CreateShareRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateShareResponse>>("createShare", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateShareAnalysisResponse>> CreateShareAnalysis(AccountService.CreateShareAnalysisRequest payload) =>
    RequestAsync<AccountService.CreateShareAnalysisRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateShareAnalysisResponse>>("createShareAnalysis", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateShareAnalysisGroupResponse>> CreateShareAnalysisGroup(AccountService.CreateShareAnalysisGroupRequest payload) =>
    RequestAsync<AccountService.CreateShareAnalysisGroupRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateShareAnalysisGroupResponse>>("createShareAnalysisGroup", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateShareAnalysisPlanResponse>> CreateShareAnalysisPlan(AccountService.CreateShareAnalysisPlanRequest payload) =>
    RequestAsync<AccountService.CreateShareAnalysisPlanRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateShareAnalysisPlanResponse>>("createShareAnalysisPlan", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateShareCheckOrderResponse>> CreateShareCheckOrder(AccountService.CreateShareCheckOrderRequest payload) =>
    RequestAsync<AccountService.CreateShareCheckOrderRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateShareCheckOrderResponse>>("createShareCheckOrder", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateShareHoldResponse>> CreateShareHold(AccountService.CreateShareHoldRequest payload) =>
    RequestAsync<AccountService.CreateShareHoldRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateShareHoldResponse>>("createShareHold", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateShareNameResponse>> CreateShareName(AccountService.CreateShareNameRequest payload) =>
    RequestAsync<AccountService.CreateShareNameRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateShareNameResponse>>("createShareName", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateShareNoteResponse>> CreateShareNote(AccountService.CreateShareNoteRequest payload) =>
    RequestAsync<AccountService.CreateShareNoteRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateShareNoteResponse>>("createShareNote", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateShareTrackingResponse>> CreateShareTracking(AccountService.CreateShareTrackingRequest payload) =>
    RequestAsync<AccountService.CreateShareTrackingRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateShareTrackingResponse>>("createShareTracking", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateShareTransferResponse>> CreateShareTransfer(AccountService.CreateShareTransferRequest payload) =>
    RequestAsync<AccountService.CreateShareTransferRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateShareTransferResponse>>("createShareTransfer", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateSiteResponse>> CreateSite(AccountService.CreateSiteRequest payload) =>
    RequestAsync<AccountService.CreateSiteRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateSiteResponse>>("createSite", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateSiteCashOrderTypeResponse>> CreateSiteCashOrderType(AccountService.CreateSiteCashOrderTypeRequest payload) =>
    RequestAsync<AccountService.CreateSiteCashOrderTypeRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateSiteCashOrderTypeResponse>>("createSiteCashOrderType", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CreateTrackingResponse>> CreateTracking(AccountService.CreateTrackingRequest payload) =>
    RequestAsync<AccountService.CreateTrackingRequest,  Memberwise.Symxify.Models.Result<AccountService.CreateTrackingResponse>>("createTracking", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteBatchAchOrigResponse>> DeleteBatchAchOrig(AccountService.DeleteBatchAchOrigRequest payload) =>
    RequestAsync<AccountService.DeleteBatchAchOrigRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteBatchAchOrigResponse>>("deleteBatchAchOrig", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteCardResponse>> DeleteCard(AccountService.DeleteCardRequest payload) =>
    RequestAsync<AccountService.DeleteCardRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteCardResponse>>("deleteCard", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteCardAccessResponse>> DeleteCardAccess(AccountService.DeleteCardAccessRequest payload) =>
    RequestAsync<AccountService.DeleteCardAccessRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteCardAccessResponse>>("deleteCardAccess", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteCardNameResponse>> DeleteCardName(AccountService.DeleteCardNameRequest payload) =>
    RequestAsync<AccountService.DeleteCardNameRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteCardNameResponse>>("deleteCardName", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteCardNoteResponse>> DeleteCardNote(AccountService.DeleteCardNoteRequest payload) =>
    RequestAsync<AccountService.DeleteCardNoteRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteCardNoteResponse>>("deleteCardNote", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteCommentResponse>> DeleteComment(AccountService.DeleteCommentRequest payload) =>
    RequestAsync<AccountService.DeleteCommentRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteCommentResponse>>("deleteComment", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteCpWorkCardResponse>> DeleteCpWorkCard(AccountService.DeleteCpWorkCardRequest payload) =>
    RequestAsync<AccountService.DeleteCpWorkCardRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteCpWorkCardResponse>>("deleteCpWorkCard", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteCpWorkCardTrackingResponse>> DeleteCpWorkCardTracking(AccountService.DeleteCpWorkCardTrackingRequest payload) =>
    RequestAsync<AccountService.DeleteCpWorkCardTrackingRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteCpWorkCardTrackingResponse>>("deleteCpWorkCardTracking", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteEftResponse>> DeleteEft(AccountService.DeleteEftRequest payload) =>
    RequestAsync<AccountService.DeleteEftRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteEftResponse>>("deleteEft", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteEftAddendaInfoResponse>> DeleteEftAddendaInfo(AccountService.DeleteEftAddendaInfoRequest payload) =>
    RequestAsync<AccountService.DeleteEftAddendaInfoRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteEftAddendaInfoResponse>>("deleteEftAddendaInfo", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteEftNameResponse>> DeleteEftName(AccountService.DeleteEftNameRequest payload) =>
    RequestAsync<AccountService.DeleteEftNameRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteEftNameResponse>>("deleteEftName", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteEftTransferResponse>> DeleteEftTransfer(AccountService.DeleteEftTransferRequest payload) =>
    RequestAsync<AccountService.DeleteEftTransferRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteEftTransferResponse>>("deleteEftTransfer", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteExternalAccountResponse>> DeleteExternalAccount(AccountService.DeleteExternalAccountRequest payload) =>
    RequestAsync<AccountService.DeleteExternalAccountRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteExternalAccountResponse>>("deleteExternalAccount", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteExternalLoanResponse>> DeleteExternalLoan(AccountService.DeleteExternalLoanRequest payload) =>
    RequestAsync<AccountService.DeleteExternalLoanRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteExternalLoanResponse>>("deleteExternalLoan", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteExternalLoanNameResponse>> DeleteExternalLoanName(AccountService.DeleteExternalLoanNameRequest payload) =>
    RequestAsync<AccountService.DeleteExternalLoanNameRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteExternalLoanNameResponse>>("deleteExternalLoanName", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteExternalLoanNoteResponse>> DeleteExternalLoanNote(AccountService.DeleteExternalLoanNoteRequest payload) =>
    RequestAsync<AccountService.DeleteExternalLoanNoteRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteExternalLoanNoteResponse>>("deleteExternalLoanNote", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteExternalLoanTrackingResponse>> DeleteExternalLoanTracking(AccountService.DeleteExternalLoanTrackingRequest payload) =>
    RequestAsync<AccountService.DeleteExternalLoanTrackingRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteExternalLoanTrackingResponse>>("deleteExternalLoanTracking", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteExternalLoanTransferResponse>> DeleteExternalLoanTransfer(AccountService.DeleteExternalLoanTransferRequest payload) =>
    RequestAsync<AccountService.DeleteExternalLoanTransferRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteExternalLoanTransferResponse>>("deleteExternalLoanTransfer", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteHouseholdResponse>> DeleteHousehold(AccountService.DeleteHouseholdRequest payload) =>
    RequestAsync<AccountService.DeleteHouseholdRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteHouseholdResponse>>("deleteHousehold", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteIrsResponse>> DeleteIrs(AccountService.DeleteIrsRequest payload) =>
    RequestAsync<AccountService.DeleteIrsRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteIrsResponse>>("deleteIrs", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteIrsDistributionResponse>> DeleteIrsDistribution(AccountService.DeleteIrsDistributionRequest payload) =>
    RequestAsync<AccountService.DeleteIrsDistributionRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteIrsDistributionResponse>>("deleteIrsDistribution", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteIrsNameResponse>> DeleteIrsName(AccountService.DeleteIrsNameRequest payload) =>
    RequestAsync<AccountService.DeleteIrsNameRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteIrsNameResponse>>("deleteIrsName", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteLoanCheckOrderResponse>> DeleteLoanCheckOrder(AccountService.DeleteLoanCheckOrderRequest payload) =>
    RequestAsync<AccountService.DeleteLoanCheckOrderRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteLoanCheckOrderResponse>>("deleteLoanCheckOrder", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteLoanEscrowResponse>> DeleteLoanEscrow(AccountService.DeleteLoanEscrowRequest payload) =>
    RequestAsync<AccountService.DeleteLoanEscrowRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteLoanEscrowResponse>>("deleteLoanEscrow", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteLoanEscrowAnalysisResponse>> DeleteLoanEscrowAnalysis(AccountService.DeleteLoanEscrowAnalysisRequest payload) =>
    RequestAsync<AccountService.DeleteLoanEscrowAnalysisRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteLoanEscrowAnalysisResponse>>("deleteLoanEscrowAnalysis", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteLoanHoldResponse>> DeleteLoanHold(AccountService.DeleteLoanHoldRequest payload) =>
    RequestAsync<AccountService.DeleteLoanHoldRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteLoanHoldResponse>>("deleteLoanHold", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteLoanNameResponse>> DeleteLoanName(AccountService.DeleteLoanNameRequest payload) =>
    RequestAsync<AccountService.DeleteLoanNameRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteLoanNameResponse>>("deleteLoanName", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteLoanNoteResponse>> DeleteLoanNote(AccountService.DeleteLoanNoteRequest payload) =>
    RequestAsync<AccountService.DeleteLoanNoteRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteLoanNoteResponse>>("deleteLoanNote", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteLoanPledgeResponse>> DeleteLoanPledge(AccountService.DeleteLoanPledgeRequest payload) =>
    RequestAsync<AccountService.DeleteLoanPledgeRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteLoanPledgeResponse>>("deleteLoanPledge", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteLoanPledgeNameResponse>> DeleteLoanPledgeName(AccountService.DeleteLoanPledgeNameRequest payload) =>
    RequestAsync<AccountService.DeleteLoanPledgeNameRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteLoanPledgeNameResponse>>("deleteLoanPledgeName", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteLoanRateChangeResponse>> DeleteLoanRateChange(AccountService.DeleteLoanRateChangeRequest payload) =>
    RequestAsync<AccountService.DeleteLoanRateChangeRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteLoanRateChangeResponse>>("deleteLoanRateChange", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteLoanScheduleResponse>> DeleteLoanSchedule(AccountService.DeleteLoanScheduleRequest payload) =>
    RequestAsync<AccountService.DeleteLoanScheduleRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteLoanScheduleResponse>>("deleteLoanSchedule", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteLoanTrackingResponse>> DeleteLoanTracking(AccountService.DeleteLoanTrackingRequest payload) =>
    RequestAsync<AccountService.DeleteLoanTrackingRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteLoanTrackingResponse>>("deleteLoanTracking", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteLoanTransferResponse>> DeleteLoanTransfer(AccountService.DeleteLoanTransferRequest payload) =>
    RequestAsync<AccountService.DeleteLoanTransferRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteLoanTransferResponse>>("deleteLoanTransfer", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteLoanAppResponse>> DeleteLoanApp(AccountService.DeleteLoanAppRequest payload) =>
    RequestAsync<AccountService.DeleteLoanAppRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteLoanAppResponse>>("deleteLoanApp", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteLoanAppEscrowResponse>> DeleteLoanAppEscrow(AccountService.DeleteLoanAppEscrowRequest payload) =>
    RequestAsync<AccountService.DeleteLoanAppEscrowRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteLoanAppEscrowResponse>>("deleteLoanAppEscrow", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteLoanAppEscrowAnalysisResponse>> DeleteLoanAppEscrowAnalysis(AccountService.DeleteLoanAppEscrowAnalysisRequest payload) =>
    RequestAsync<AccountService.DeleteLoanAppEscrowAnalysisRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteLoanAppEscrowAnalysisResponse>>("deleteLoanAppEscrowAnalysis", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteLoanAppFinanceResponse>> DeleteLoanAppFinance(AccountService.DeleteLoanAppFinanceRequest payload) =>
    RequestAsync<AccountService.DeleteLoanAppFinanceRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteLoanAppFinanceResponse>>("deleteLoanAppFinance", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteLoanAppNoteResponse>> DeleteLoanAppNote(AccountService.DeleteLoanAppNoteRequest payload) =>
    RequestAsync<AccountService.DeleteLoanAppNoteRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteLoanAppNoteResponse>>("deleteLoanAppNote", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteLoanAppPersonResponse>> DeleteLoanAppPerson(AccountService.DeleteLoanAppPersonRequest payload) =>
    RequestAsync<AccountService.DeleteLoanAppPersonRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteLoanAppPersonResponse>>("deleteLoanAppPerson", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteLoanAppPledgeResponse>> DeleteLoanAppPledge(AccountService.DeleteLoanAppPledgeRequest payload) =>
    RequestAsync<AccountService.DeleteLoanAppPledgeRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteLoanAppPledgeResponse>>("deleteLoanAppPledge", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteLoanAppScheduleResponse>> DeleteLoanAppSchedule(AccountService.DeleteLoanAppScheduleRequest payload) =>
    RequestAsync<AccountService.DeleteLoanAppScheduleRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteLoanAppScheduleResponse>>("deleteLoanAppSchedule", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteLoanAppTrackingResponse>> DeleteLoanAppTracking(AccountService.DeleteLoanAppTrackingRequest payload) =>
    RequestAsync<AccountService.DeleteLoanAppTrackingRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteLoanAppTrackingResponse>>("deleteLoanAppTracking", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteLookupResponse>> DeleteLookup(AccountService.DeleteLookupRequest payload) =>
    RequestAsync<AccountService.DeleteLookupRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteLookupResponse>>("deleteLookup", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteNameResponse>> DeleteName(AccountService.DeleteNameRequest payload) =>
    RequestAsync<AccountService.DeleteNameRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteNameResponse>>("deleteName", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteNoteResponse>> DeleteNote(AccountService.DeleteNoteRequest payload) =>
    RequestAsync<AccountService.DeleteNoteRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteNoteResponse>>("deleteNote", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeletePledgeResponse>> DeletePledge(AccountService.DeletePledgeRequest payload) =>
    RequestAsync<AccountService.DeletePledgeRequest,  Memberwise.Symxify.Models.Result<AccountService.DeletePledgeResponse>>("deletePledge", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeletePortfolioResponse>> DeletePortfolio(AccountService.DeletePortfolioRequest payload) =>
    RequestAsync<AccountService.DeletePortfolioRequest,  Memberwise.Symxify.Models.Result<AccountService.DeletePortfolioResponse>>("deletePortfolio", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeletePortfolioNoteResponse>> DeletePortfolioNote(AccountService.DeletePortfolioNoteRequest payload) =>
    RequestAsync<AccountService.DeletePortfolioNoteRequest,  Memberwise.Symxify.Models.Result<AccountService.DeletePortfolioNoteResponse>>("deletePortfolioNote", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeletePortfolioTrackingResponse>> DeletePortfolioTracking(AccountService.DeletePortfolioTrackingRequest payload) =>
    RequestAsync<AccountService.DeletePortfolioTrackingRequest,  Memberwise.Symxify.Models.Result<AccountService.DeletePortfolioTrackingResponse>>("deletePortfolioTracking", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeletePreferenceResponse>> DeletePreference(AccountService.DeletePreferenceRequest payload) =>
    RequestAsync<AccountService.DeletePreferenceRequest,  Memberwise.Symxify.Models.Result<AccountService.DeletePreferenceResponse>>("deletePreference", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeletePreferenceAccessResponse>> DeletePreferenceAccess(AccountService.DeletePreferenceAccessRequest payload) =>
    RequestAsync<AccountService.DeletePreferenceAccessRequest,  Memberwise.Symxify.Models.Result<AccountService.DeletePreferenceAccessResponse>>("deletePreferenceAccess", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteShareAnalysisResponse>> DeleteShareAnalysis(AccountService.DeleteShareAnalysisRequest payload) =>
    RequestAsync<AccountService.DeleteShareAnalysisRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteShareAnalysisResponse>>("deleteShareAnalysis", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteShareAnalysisGroupResponse>> DeleteShareAnalysisGroup(AccountService.DeleteShareAnalysisGroupRequest payload) =>
    RequestAsync<AccountService.DeleteShareAnalysisGroupRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteShareAnalysisGroupResponse>>("deleteShareAnalysisGroup", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteShareAnalysisPlanResponse>> DeleteShareAnalysisPlan(AccountService.DeleteShareAnalysisPlanRequest payload) =>
    RequestAsync<AccountService.DeleteShareAnalysisPlanRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteShareAnalysisPlanResponse>>("deleteShareAnalysisPlan", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteShareCheckOrderResponse>> DeleteShareCheckOrder(AccountService.DeleteShareCheckOrderRequest payload) =>
    RequestAsync<AccountService.DeleteShareCheckOrderRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteShareCheckOrderResponse>>("deleteShareCheckOrder", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteShareHoldResponse>> DeleteShareHold(AccountService.DeleteShareHoldRequest payload) =>
    RequestAsync<AccountService.DeleteShareHoldRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteShareHoldResponse>>("deleteShareHold", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteShareNameResponse>> DeleteShareName(AccountService.DeleteShareNameRequest payload) =>
    RequestAsync<AccountService.DeleteShareNameRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteShareNameResponse>>("deleteShareName", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteShareNoteResponse>> DeleteShareNote(AccountService.DeleteShareNoteRequest payload) =>
    RequestAsync<AccountService.DeleteShareNoteRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteShareNoteResponse>>("deleteShareNote", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteShareTrackingResponse>> DeleteShareTracking(AccountService.DeleteShareTrackingRequest payload) =>
    RequestAsync<AccountService.DeleteShareTrackingRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteShareTrackingResponse>>("deleteShareTracking", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteShareTransferResponse>> DeleteShareTransfer(AccountService.DeleteShareTransferRequest payload) =>
    RequestAsync<AccountService.DeleteShareTransferRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteShareTransferResponse>>("deleteShareTransfer", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.DeleteTrackingResponse>> DeleteTracking(AccountService.DeleteTrackingRequest payload) =>
    RequestAsync<AccountService.DeleteTrackingRequest,  Memberwise.Symxify.Models.Result<AccountService.DeleteTrackingResponse>>("deleteTracking", payload, "account");


}
