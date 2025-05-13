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
    private readonly SymxifyClient _client;

    public SymxifyClient(SymxifyClient client)
    {
        _client = client;
    }

public Task<Memberwise.Symxify.Models.Result<ExceptionItemService.ExcpItemSelectFieldsResponse>> GetExcpItemSelectFields(ExceptionItemService.ExcpItemSelectFieldsRequest payload) =>
    _client.RequestAsync<ExceptionItemService.ExcpItemSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ExceptionItemService.ExcpItemSelectFieldsResponse>>("getExcpItemSelectFields", payload, "exceptionitem");


public Task<Memberwise.Symxify.Models.Result<ExceptionItemService.ExcpItemSelectFieldsFilterChildrenResponse>> GetExcpItemSelectFieldsFilterChildren(ExceptionItemService.ExcpItemSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<ExceptionItemService.ExcpItemSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<ExceptionItemService.ExcpItemSelectFieldsFilterChildrenResponse>>("getExcpItemSelectFieldsFilterChildren", payload, "exceptionitem");


public Task<Memberwise.Symxify.Models.Result<ExceptionItemService.ExcpAddInfoSelectFieldsResponse>> GetExcpAddInfoSelectFields(ExceptionItemService.ExcpAddInfoSelectFieldsRequest payload) =>
    _client.RequestAsync<ExceptionItemService.ExcpAddInfoSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ExceptionItemService.ExcpAddInfoSelectFieldsResponse>>("getExcpAddInfoSelectFields", payload, "exceptionitem");


public Task<Memberwise.Symxify.Models.Result<ExceptionItemService.ExcpAddInfoPagedListSelectFieldsResponse>> GetExcpAddInfoPagedListSelectFields(ExceptionItemService.ExcpAddInfoPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ExceptionItemService.ExcpAddInfoPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ExceptionItemService.ExcpAddInfoPagedListSelectFieldsResponse>>("getExcpAddInfoPagedListSelectFields", payload, "exceptionitem");


public Task<Memberwise.Symxify.Models.Result<ExceptionItemService.ExcpAddInfoSearchPagedSelectFieldsResponse>> SearchExcpAddInfoPagedSelectFields(ExceptionItemService.ExcpAddInfoSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ExceptionItemService.ExcpAddInfoSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ExceptionItemService.ExcpAddInfoSearchPagedSelectFieldsResponse>>("searchExcpAddInfoPagedSelectFields", payload, "exceptionitem");


public Task<Memberwise.Symxify.Models.Result<ExceptionItemService.ExcpAddendaSelectFieldsResponse>> GetExcpAddendaSelectFields(ExceptionItemService.ExcpAddendaSelectFieldsRequest payload) =>
    _client.RequestAsync<ExceptionItemService.ExcpAddendaSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ExceptionItemService.ExcpAddendaSelectFieldsResponse>>("getExcpAddendaSelectFields", payload, "exceptionitem");


public Task<Memberwise.Symxify.Models.Result<ExceptionItemService.ExcpAddendaPagedListSelectFieldsResponse>> GetExcpAddendaPagedListSelectFields(ExceptionItemService.ExcpAddendaPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ExceptionItemService.ExcpAddendaPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ExceptionItemService.ExcpAddendaPagedListSelectFieldsResponse>>("getExcpAddendaPagedListSelectFields", payload, "exceptionitem");


public Task<Memberwise.Symxify.Models.Result<ExceptionItemService.ExcpAddendaSearchPagedSelectFieldsResponse>> SearchExcpAddendaPagedSelectFields(ExceptionItemService.ExcpAddendaSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ExceptionItemService.ExcpAddendaSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ExceptionItemService.ExcpAddendaSearchPagedSelectFieldsResponse>>("searchExcpAddendaPagedSelectFields", payload, "exceptionitem");


public Task<Memberwise.Symxify.Models.Result<FinrepService.CtrSelectFieldsResponse>> GetCtrSelectFields(FinrepService.CtrSelectFieldsRequest payload) =>
    _client.RequestAsync<FinrepService.CtrSelectFieldsRequest,  Memberwise.Symxify.Models.Result<FinrepService.CtrSelectFieldsResponse>>("getCtrSelectFields", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.CtrSelectFieldsFilterChildrenResponse>> GetCtrSelectFieldsFilterChildren(FinrepService.CtrSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<FinrepService.CtrSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<FinrepService.CtrSelectFieldsFilterChildrenResponse>>("getCtrSelectFieldsFilterChildren", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.CtrAccountSelectFieldsResponse>> GetCtrAccountSelectFields(FinrepService.CtrAccountSelectFieldsRequest payload) =>
    _client.RequestAsync<FinrepService.CtrAccountSelectFieldsRequest,  Memberwise.Symxify.Models.Result<FinrepService.CtrAccountSelectFieldsResponse>>("getCtrAccountSelectFields", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.CtrAccountPagedListSelectFieldsResponse>> GetCtrAccountPagedListSelectFields(FinrepService.CtrAccountPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<FinrepService.CtrAccountPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<FinrepService.CtrAccountPagedListSelectFieldsResponse>>("getCtrAccountPagedListSelectFields", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.CtrAccountSearchPagedSelectFieldsResponse>> SearchCtrAccountPagedSelectFields(FinrepService.CtrAccountSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<FinrepService.CtrAccountSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<FinrepService.CtrAccountSearchPagedSelectFieldsResponse>>("searchCtrAccountPagedSelectFields", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.CtrBranchSelectFieldsResponse>> GetCtrBranchSelectFields(FinrepService.CtrBranchSelectFieldsRequest payload) =>
    _client.RequestAsync<FinrepService.CtrBranchSelectFieldsRequest,  Memberwise.Symxify.Models.Result<FinrepService.CtrBranchSelectFieldsResponse>>("getCtrBranchSelectFields", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.CtrBranchPagedListSelectFieldsResponse>> GetCtrBranchPagedListSelectFields(FinrepService.CtrBranchPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<FinrepService.CtrBranchPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<FinrepService.CtrBranchPagedListSelectFieldsResponse>>("getCtrBranchPagedListSelectFields", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.CtrBranchSearchPagedSelectFieldsResponse>> SearchCtrBranchPagedSelectFields(FinrepService.CtrBranchSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<FinrepService.CtrBranchSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<FinrepService.CtrBranchSearchPagedSelectFieldsResponse>>("searchCtrBranchPagedSelectFields", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.CtrFmHistoryPagedListSelectFieldsResponse>> GetCtrFmHistoryPagedListSelectFields(FinrepService.CtrFmHistoryPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<FinrepService.CtrFmHistoryPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<FinrepService.CtrFmHistoryPagedListSelectFieldsResponse>>("getCtrFmHistoryPagedListSelectFields", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.CtrFmHistorySearchPagedSelectFieldsResponse>> SearchCtrFmHistoryPagedSelectFields(FinrepService.CtrFmHistorySearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<FinrepService.CtrFmHistorySearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<FinrepService.CtrFmHistorySearchPagedSelectFieldsResponse>>("searchCtrFmHistoryPagedSelectFields", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.CtrForeignSelectFieldsResponse>> GetCtrForeignSelectFields(FinrepService.CtrForeignSelectFieldsRequest payload) =>
    _client.RequestAsync<FinrepService.CtrForeignSelectFieldsRequest,  Memberwise.Symxify.Models.Result<FinrepService.CtrForeignSelectFieldsResponse>>("getCtrForeignSelectFields", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.CtrForeignPagedListSelectFieldsResponse>> GetCtrForeignPagedListSelectFields(FinrepService.CtrForeignPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<FinrepService.CtrForeignPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<FinrepService.CtrForeignPagedListSelectFieldsResponse>>("getCtrForeignPagedListSelectFields", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.CtrForeignSearchPagedSelectFieldsResponse>> SearchCtrForeignPagedSelectFields(FinrepService.CtrForeignSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<FinrepService.CtrForeignSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<FinrepService.CtrForeignSearchPagedSelectFieldsResponse>>("searchCtrForeignPagedSelectFields", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.CtrNoteSelectFieldsResponse>> GetCtrNoteSelectFields(FinrepService.CtrNoteSelectFieldsRequest payload) =>
    _client.RequestAsync<FinrepService.CtrNoteSelectFieldsRequest,  Memberwise.Symxify.Models.Result<FinrepService.CtrNoteSelectFieldsResponse>>("getCtrNoteSelectFields", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.CtrNotePagedListSelectFieldsResponse>> GetCtrNotePagedListSelectFields(FinrepService.CtrNotePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<FinrepService.CtrNotePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<FinrepService.CtrNotePagedListSelectFieldsResponse>>("getCtrNotePagedListSelectFields", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.CtrNoteSearchPagedSelectFieldsResponse>> SearchCtrNotePagedSelectFields(FinrepService.CtrNoteSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<FinrepService.CtrNoteSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<FinrepService.CtrNoteSearchPagedSelectFieldsResponse>>("searchCtrNotePagedSelectFields", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.CtrPersonSelectFieldsResponse>> GetCtrPersonSelectFields(FinrepService.CtrPersonSelectFieldsRequest payload) =>
    _client.RequestAsync<FinrepService.CtrPersonSelectFieldsRequest,  Memberwise.Symxify.Models.Result<FinrepService.CtrPersonSelectFieldsResponse>>("getCtrPersonSelectFields", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.CtrPersonSelectFieldsFilterChildrenResponse>> GetCtrPersonSelectFieldsFilterChildren(FinrepService.CtrPersonSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<FinrepService.CtrPersonSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<FinrepService.CtrPersonSelectFieldsFilterChildrenResponse>>("getCtrPersonSelectFieldsFilterChildren", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.CtrPersonPagedListSelectFieldsResponse>> GetCtrPersonPagedListSelectFields(FinrepService.CtrPersonPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<FinrepService.CtrPersonPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<FinrepService.CtrPersonPagedListSelectFieldsResponse>>("getCtrPersonPagedListSelectFields", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.CtrPersonSearchPagedSelectFieldsResponse>> SearchCtrPersonPagedSelectFields(FinrepService.CtrPersonSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<FinrepService.CtrPersonSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<FinrepService.CtrPersonSearchPagedSelectFieldsResponse>>("searchCtrPersonPagedSelectFields", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.CtrPersonCtrTranInfoSelectFieldsResponse>> GetCtrPersonCtrTranInfoSelectFields(FinrepService.CtrPersonCtrTranInfoSelectFieldsRequest payload) =>
    _client.RequestAsync<FinrepService.CtrPersonCtrTranInfoSelectFieldsRequest,  Memberwise.Symxify.Models.Result<FinrepService.CtrPersonCtrTranInfoSelectFieldsResponse>>("getCtrPersonCtrTranInfoSelectFields", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.CtrPersonCtrTranInfoPagedListSelectFieldsResponse>> GetCtrPersonCtrTranInfoPagedListSelectFields(FinrepService.CtrPersonCtrTranInfoPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<FinrepService.CtrPersonCtrTranInfoPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<FinrepService.CtrPersonCtrTranInfoPagedListSelectFieldsResponse>>("getCtrPersonCtrTranInfoPagedListSelectFields", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.CtrPersonCtrTranInfoSearchPagedSelectFieldsResponse>> SearchCtrPersonCtrTranInfoPagedSelectFields(FinrepService.CtrPersonCtrTranInfoSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<FinrepService.CtrPersonCtrTranInfoSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<FinrepService.CtrPersonCtrTranInfoSearchPagedSelectFieldsResponse>>("searchCtrPersonCtrTranInfoPagedSelectFields", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.CtrUpdateByIdResponse>> UpdateCtrById(FinrepService.UpdateCtrByIdRequest payload) =>
    _client.RequestAsync<FinrepService.UpdateCtrByIdRequest,  Memberwise.Symxify.Models.Result<FinrepService.CtrUpdateByIdResponse>>("updateCtrByID", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.CtrAccountUpdateByIdResponse>> UpdateCtrAccountById(FinrepService.UpdateCtrAccountByIdRequest payload) =>
    _client.RequestAsync<FinrepService.UpdateCtrAccountByIdRequest,  Memberwise.Symxify.Models.Result<FinrepService.CtrAccountUpdateByIdResponse>>("updateCtrAccountByID", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.CtrBranchUpdateByIdResponse>> UpdateCtrBranchById(FinrepService.UpdateCtrBranchByIdRequest payload) =>
    _client.RequestAsync<FinrepService.UpdateCtrBranchByIdRequest,  Memberwise.Symxify.Models.Result<FinrepService.CtrBranchUpdateByIdResponse>>("updateCtrBranchByID", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.CtrForeignUpdateByIdResponse>> UpdateCtrForeignById(FinrepService.UpdateCtrForeignByIdRequest payload) =>
    _client.RequestAsync<FinrepService.UpdateCtrForeignByIdRequest,  Memberwise.Symxify.Models.Result<FinrepService.CtrForeignUpdateByIdResponse>>("updateCtrForeignByID", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.CtrNoteUpdateByIdResponse>> UpdateCtrNoteById(FinrepService.UpdateCtrNoteByIdRequest payload) =>
    _client.RequestAsync<FinrepService.UpdateCtrNoteByIdRequest,  Memberwise.Symxify.Models.Result<FinrepService.CtrNoteUpdateByIdResponse>>("updateCtrNoteByID", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.CtrPersonUpdateByIdResponse>> UpdateCtrPersonById(FinrepService.UpdateCtrPersonByIdRequest payload) =>
    _client.RequestAsync<FinrepService.UpdateCtrPersonByIdRequest,  Memberwise.Symxify.Models.Result<FinrepService.CtrPersonUpdateByIdResponse>>("updateCtrPersonByID", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.CtrPersonCtrTranInfoUpdateByIdResponse>> UpdateCtrPersonCtrTranInfoById(FinrepService.UpdateCtrPersonCtrTranInfoByIdRequest payload) =>
    _client.RequestAsync<FinrepService.UpdateCtrPersonCtrTranInfoByIdRequest,  Memberwise.Symxify.Models.Result<FinrepService.CtrPersonCtrTranInfoUpdateByIdResponse>>("updateCtrPersonCtrTranInfoByID", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.CtrBranchCreateResponse>> CreateCtrBranch(FinrepService.CreateCtrBranchRequest payload) =>
    _client.RequestAsync<FinrepService.CreateCtrBranchRequest,  Memberwise.Symxify.Models.Result<FinrepService.CtrBranchCreateResponse>>("createCtrBranch", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<FinrepService.CtrBranchDeleteResponse>> DeleteCtrBranch(FinrepService.DeleteCtrBranchRequest payload) =>
    _client.RequestAsync<FinrepService.DeleteCtrBranchRequest,  Memberwise.Symxify.Models.Result<FinrepService.CtrBranchDeleteResponse>>("deleteCtrBranch", payload, "finrep");


public Task<Memberwise.Symxify.Models.Result<ProjectionService.CalculatePaymentAmountResponse>> CalculatePaymentAmount(ProjectionService.CalculatePaymentAmountRequest payload) =>
    _client.RequestAsync<ProjectionService.CalculatePaymentAmountRequest,  Memberwise.Symxify.Models.Result<ProjectionService.CalculatePaymentAmountResponse>>("calculatePaymentAmount", payload, "projection");


public Task<Memberwise.Symxify.Models.Result<ProjectionService.CalculateLoanAmountResponse>> CalculateLoanAmount(ProjectionService.CalculateLoanAmountRequest payload) =>
    _client.RequestAsync<ProjectionService.CalculateLoanAmountRequest,  Memberwise.Symxify.Models.Result<ProjectionService.CalculateLoanAmountResponse>>("calculateLoanAmount", payload, "projection");


public Task<Memberwise.Symxify.Models.Result<ProjectionService.CalculateLoanTermResponse>> CalculateLoanTerm(ProjectionService.CalculateLoanTermRequest payload) =>
    _client.RequestAsync<ProjectionService.CalculateLoanTermRequest,  Memberwise.Symxify.Models.Result<ProjectionService.CalculateLoanTermResponse>>("calculateLoanTerm", payload, "projection");


public Task<Memberwise.Symxify.Models.Result<PowerOnService.PowerOnExecutionReturnArrayResponse>> ExecutePowerOnReturnArray(PowerOnService.PowerOnExecutionRequest payload) =>
    _client.RequestAsync<PowerOnService.PowerOnExecutionRequest,  Memberwise.Symxify.Models.Result<PowerOnService.PowerOnExecutionReturnArrayResponse>>("executePowerOnReturnArray", payload, "poweron");


public Task<Memberwise.Symxify.Models.Result<PowerOnService.PowerOnExecutionResponse>> ExecutePowerOn(PowerOnService.PowerOnExecutionRequest payload) =>
    _client.RequestAsync<PowerOnService.PowerOnExecutionRequest,  Memberwise.Symxify.Models.Result<PowerOnService.PowerOnExecutionResponse>>("executePowerOn", payload, "poweron");


public Task<Memberwise.Symxify.Models.Result<PowerOnService.McwPowerOnExecutionResponse>> ExecuteMcwPowerOn(PowerOnService.McwPowerOnExecutionRequest payload) =>
    _client.RequestAsync<PowerOnService.McwPowerOnExecutionRequest,  Memberwise.Symxify.Models.Result<PowerOnService.McwPowerOnExecutionResponse>>("executeMCWPowerOn", payload, "poweron");


public Task<Memberwise.Symxify.Models.Result<PowerOnService.McwPowerOnExecutionReturnArrayResponse>> ExecuteMcwPowerOnReturnArray(PowerOnService.McwPowerOnExecutionRequest payload) =>
    _client.RequestAsync<PowerOnService.McwPowerOnExecutionRequest,  Memberwise.Symxify.Models.Result<PowerOnService.McwPowerOnExecutionReturnArrayResponse>>("executeMCWPowerOnReturnArray", payload, "poweron");


public Task<Memberwise.Symxify.Models.Result<ContactEventMgmtService.GetEventSummariesByAccountResponse>> GetEventSummariesByAccount(ContactEventMgmtService.GetEventSummariesByAccountRequest payload) =>
    _client.RequestAsync<ContactEventMgmtService.GetEventSummariesByAccountRequest,  Memberwise.Symxify.Models.Result<ContactEventMgmtService.GetEventSummariesByAccountResponse>>("getEventSummariesByAccount", payload, "contacteventmgmt");


public Task<Memberwise.Symxify.Models.Result<FindByService.LookupByActiveCardResponse>> FindByActiveCard(FindByService.LookupByActiveCardRequest payload) =>
    _client.RequestAsync<FindByService.LookupByActiveCardRequest,  Memberwise.Symxify.Models.Result<FindByService.LookupByActiveCardResponse>>("findByActiveCard", payload, "findby");


public Task<Memberwise.Symxify.Models.Result<FindByService.LookupByAnyCardResponse>> FindByAnyCard(FindByService.LookupByAnyCardRequest payload) =>
    _client.RequestAsync<FindByService.LookupByAnyCardRequest,  Memberwise.Symxify.Models.Result<FindByService.LookupByAnyCardResponse>>("findByAnyCard", payload, "findby");


public Task<Memberwise.Symxify.Models.Result<FindByService.LookupByHomeUserResponse>> FindByHomeUser(FindByService.LookupByHomeUserRequest payload) =>
    _client.RequestAsync<FindByService.LookupByHomeUserRequest,  Memberwise.Symxify.Models.Result<FindByService.LookupByHomeUserResponse>>("findByHomeUser", payload, "findby");


public Task<Memberwise.Symxify.Models.Result<FindByService.LookupByMicrResponse>> FindByMicr(FindByService.LookupByMicrRequest payload) =>
    _client.RequestAsync<FindByService.LookupByMicrRequest,  Memberwise.Symxify.Models.Result<FindByService.LookupByMicrResponse>>("findByMICR", payload, "findby");


public Task<Memberwise.Symxify.Models.Result<FindByService.LookupByLookupResponse>> FindByLookup(FindByService.LookupByLookupRequest payload) =>
    _client.RequestAsync<FindByService.LookupByLookupRequest,  Memberwise.Symxify.Models.Result<FindByService.LookupByLookupResponse>>("findByLookup", payload, "findby");


public Task<Memberwise.Symxify.Models.Result<FindByService.LookupBySsnResponse>> FindBySsn(FindByService.LookupBySsnRequest payload) =>
    _client.RequestAsync<FindByService.LookupBySsnRequest,  Memberwise.Symxify.Models.Result<FindByService.LookupBySsnResponse>>("findBySSN", payload, "findby");


public Task<Memberwise.Symxify.Models.Result<FindByService.LookupByShortNameResponse>> FindByShortName(FindByService.LookupByShortNameRequest payload) =>
    _client.RequestAsync<FindByService.LookupByShortNameRequest,  Memberwise.Symxify.Models.Result<FindByService.LookupByShortNameResponse>>("findByShortName", payload, "findby");


public Task<Memberwise.Symxify.Models.Result<ReceivedItemService.ReceivedItemSelectFieldsResponse>> GetReceivedItemSelectFields(ReceivedItemService.ReceivedItemSelectFieldsRequest payload) =>
    _client.RequestAsync<ReceivedItemService.ReceivedItemSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ReceivedItemService.ReceivedItemSelectFieldsResponse>>("getReceivedItemSelectFields", payload, "receiveditem");


public Task<Memberwise.Symxify.Models.Result<ReceivedItemService.ReceivedItemUpdateByIdResponse>> UpdateReceivedItemById(ReceivedItemService.UpdateReceivedItemByIdRequest payload) =>
    _client.RequestAsync<ReceivedItemService.UpdateReceivedItemByIdRequest,  Memberwise.Symxify.Models.Result<ReceivedItemService.ReceivedItemUpdateByIdResponse>>("updateReceivedItemByID", payload, "receiveditem");


public Task<Memberwise.Symxify.Models.Result<ReceivedItemService.ReceivedItemCreateResponse>> CreateReceivedItem(ReceivedItemService.CreateReceivedItemRequest payload) =>
    _client.RequestAsync<ReceivedItemService.CreateReceivedItemRequest,  Memberwise.Symxify.Models.Result<ReceivedItemService.ReceivedItemCreateResponse>>("createReceivedItem", payload, "receiveditem");


public Task<Memberwise.Symxify.Models.Result<ReceivedItemService.ReceivedItemDeleteResponse>> DeleteReceivedItem(ReceivedItemService.DeleteReceivedItemRequest payload) =>
    _client.RequestAsync<ReceivedItemService.DeleteReceivedItemRequest,  Memberwise.Symxify.Models.Result<ReceivedItemService.ReceivedItemDeleteResponse>>("deleteReceivedItem", payload, "receiveditem");


public Task<Memberwise.Symxify.Models.Result<WireService.WireSelectFieldsResponse>> GetWireSelectFields(WireService.WireSelectFieldsRequest payload) =>
    _client.RequestAsync<WireService.WireSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.WireSelectFieldsResponse>>("getWireSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireSelectFieldsFilterChildrenResponse>> GetWireSelectFieldsFilterChildren(WireService.WireSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<WireService.WireSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<WireService.WireSelectFieldsFilterChildrenResponse>>("getWireSelectFieldsFilterChildren", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireBeneficiaryAdvSelectFieldsResponse>> GetWireBeneficiaryAdvSelectFields(WireService.WireBeneficiaryAdvSelectFieldsRequest payload) =>
    _client.RequestAsync<WireService.WireBeneficiaryAdvSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.WireBeneficiaryAdvSelectFieldsResponse>>("getWireBeneficiaryAdvSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireBeneficiaryAdvPagedListSelectFieldsResponse>> GetWireBeneficiaryAdvPagedListSelectFields(WireService.WireBeneficiaryAdvPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<WireService.WireBeneficiaryAdvPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.WireBeneficiaryAdvPagedListSelectFieldsResponse>>("getWireBeneficiaryAdvPagedListSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireBeneficiaryAdvSearchPagedSelectFieldsResponse>> SearchWireBeneficiaryAdvPagedSelectFields(WireService.WireBeneficiaryAdvSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<WireService.WireBeneficiaryAdvSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.WireBeneficiaryAdvSearchPagedSelectFieldsResponse>>("searchWireBeneficiaryAdvPagedSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireBeneficiaryFiAdvSelectFieldsResponse>> GetWireBeneficiaryFiAdvSelectFields(WireService.WireBeneficiaryFiAdvSelectFieldsRequest payload) =>
    _client.RequestAsync<WireService.WireBeneficiaryFiAdvSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.WireBeneficiaryFiAdvSelectFieldsResponse>>("getWireBeneficiaryFiAdvSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireBeneficiaryFiAdvPagedListSelectFieldsResponse>> GetWireBeneficiaryFiAdvPagedListSelectFields(WireService.WireBeneficiaryFiAdvPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<WireService.WireBeneficiaryFiAdvPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.WireBeneficiaryFiAdvPagedListSelectFieldsResponse>>("getWireBeneficiaryFiAdvPagedListSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireBeneficiaryFiAdvSearchPagedSelectFieldsResponse>> SearchWireBeneficiaryFiAdvPagedSelectFields(WireService.WireBeneficiaryFiAdvSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<WireService.WireBeneficiaryFiAdvSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.WireBeneficiaryFiAdvSearchPagedSelectFieldsResponse>>("searchWireBeneficiaryFiAdvPagedSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireBeneficiaryFiInfoSelectFieldsResponse>> GetWireBeneficiaryFiInfoSelectFields(WireService.WireBeneficiaryFiInfoSelectFieldsRequest payload) =>
    _client.RequestAsync<WireService.WireBeneficiaryFiInfoSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.WireBeneficiaryFiInfoSelectFieldsResponse>>("getWireBeneficiaryFiInfoSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireBeneficiaryFiInfoPagedListSelectFieldsResponse>> GetWireBeneficiaryFiInfoPagedListSelectFields(WireService.WireBeneficiaryFiInfoPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<WireService.WireBeneficiaryFiInfoPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.WireBeneficiaryFiInfoPagedListSelectFieldsResponse>>("getWireBeneficiaryFiInfoPagedListSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireBeneficiaryFiInfoSearchPagedSelectFieldsResponse>> SearchWireBeneficiaryFiInfoPagedSelectFields(WireService.WireBeneficiaryFiInfoSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<WireService.WireBeneficiaryFiInfoSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.WireBeneficiaryFiInfoSearchPagedSelectFieldsResponse>>("searchWireBeneficiaryFiInfoPagedSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireBeneficiaryInfoSelectFieldsResponse>> GetWireBeneficiaryInfoSelectFields(WireService.WireBeneficiaryInfoSelectFieldsRequest payload) =>
    _client.RequestAsync<WireService.WireBeneficiaryInfoSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.WireBeneficiaryInfoSelectFieldsResponse>>("getWireBeneficiaryInfoSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireBeneficiaryInfoPagedListSelectFieldsResponse>> GetWireBeneficiaryInfoPagedListSelectFields(WireService.WireBeneficiaryInfoPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<WireService.WireBeneficiaryInfoPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.WireBeneficiaryInfoPagedListSelectFieldsResponse>>("getWireBeneficiaryInfoPagedListSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireBeneficiaryInfoSearchPagedSelectFieldsResponse>> SearchWireBeneficiaryInfoPagedSelectFields(WireService.WireBeneficiaryInfoSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<WireService.WireBeneficiaryInfoSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.WireBeneficiaryInfoSearchPagedSelectFieldsResponse>>("searchWireBeneficiaryInfoPagedSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireDrawdownDebitAcctAdvSelectFieldsResponse>> GetWireDrawdownDebitAcctAdvSelectFields(WireService.WireDrawdownDebitAcctAdvSelectFieldsRequest payload) =>
    _client.RequestAsync<WireService.WireDrawdownDebitAcctAdvSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.WireDrawdownDebitAcctAdvSelectFieldsResponse>>("getWireDrawdownDebitAcctAdvSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireDrawdownDebitAcctAdvPagedListSelectFieldsResponse>> GetWireDrawdownDebitAcctAdvPagedListSelectFields(WireService.WireDrawdownDebitAcctAdvPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<WireService.WireDrawdownDebitAcctAdvPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.WireDrawdownDebitAcctAdvPagedListSelectFieldsResponse>>("getWireDrawdownDebitAcctAdvPagedListSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireDrawdownDebitAcctAdvSearchPagedSelectFieldsResponse>> SearchWireDrawdownDebitAcctAdvPagedSelectFields(WireService.WireDrawdownDebitAcctAdvSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<WireService.WireDrawdownDebitAcctAdvSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.WireDrawdownDebitAcctAdvSearchPagedSelectFieldsResponse>>("searchWireDrawdownDebitAcctAdvPagedSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireFiToFiInfoSelectFieldsResponse>> GetWireFiToFiInfoSelectFields(WireService.WireFiToFiInfoSelectFieldsRequest payload) =>
    _client.RequestAsync<WireService.WireFiToFiInfoSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.WireFiToFiInfoSelectFieldsResponse>>("getWireFiToFiInfoSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireFiToFiInfoPagedListSelectFieldsResponse>> GetWireFiToFiInfoPagedListSelectFields(WireService.WireFiToFiInfoPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<WireService.WireFiToFiInfoPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.WireFiToFiInfoPagedListSelectFieldsResponse>>("getWireFiToFiInfoPagedListSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireFiToFiInfoSearchPagedSelectFieldsResponse>> SearchWireFiToFiInfoPagedSelectFields(WireService.WireFiToFiInfoSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<WireService.WireFiToFiInfoSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.WireFiToFiInfoSearchPagedSelectFieldsResponse>>("searchWireFiToFiInfoPagedSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireFmHistoryPagedListSelectFieldsResponse>> GetWireFmHistoryPagedListSelectFields(WireService.WireFmHistoryPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<WireService.WireFmHistoryPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.WireFmHistoryPagedListSelectFieldsResponse>>("getWireFmHistoryPagedListSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireFmHistorySearchPagedSelectFieldsResponse>> SearchWireFmHistoryPagedSelectFields(WireService.WireFmHistorySearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<WireService.WireFmHistorySearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.WireFmHistorySearchPagedSelectFieldsResponse>>("searchWireFmHistoryPagedSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireIntermedFiAdvSelectFieldsResponse>> GetWireIntermedFiAdvSelectFields(WireService.WireIntermedFiAdvSelectFieldsRequest payload) =>
    _client.RequestAsync<WireService.WireIntermedFiAdvSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.WireIntermedFiAdvSelectFieldsResponse>>("getWireIntermedFiAdvSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireIntermedFiAdvPagedListSelectFieldsResponse>> GetWireIntermedFiAdvPagedListSelectFields(WireService.WireIntermedFiAdvPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<WireService.WireIntermedFiAdvPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.WireIntermedFiAdvPagedListSelectFieldsResponse>>("getWireIntermedFiAdvPagedListSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireIntermedFiAdvSearchPagedSelectFieldsResponse>> SearchWireIntermedFiAdvPagedSelectFields(WireService.WireIntermedFiAdvSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<WireService.WireIntermedFiAdvSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.WireIntermedFiAdvSearchPagedSelectFieldsResponse>>("searchWireIntermedFiAdvPagedSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireIntermedFiInfoSelectFieldsResponse>> GetWireIntermedFiInfoSelectFields(WireService.WireIntermedFiInfoSelectFieldsRequest payload) =>
    _client.RequestAsync<WireService.WireIntermedFiInfoSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.WireIntermedFiInfoSelectFieldsResponse>>("getWireIntermedFiInfoSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireIntermedFiInfoPagedListSelectFieldsResponse>> GetWireIntermedFiInfoPagedListSelectFields(WireService.WireIntermedFiInfoPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<WireService.WireIntermedFiInfoPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.WireIntermedFiInfoPagedListSelectFieldsResponse>>("getWireIntermedFiInfoPagedListSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireIntermedFiInfoSearchPagedSelectFieldsResponse>> SearchWireIntermedFiInfoPagedSelectFields(WireService.WireIntermedFiInfoSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<WireService.WireIntermedFiInfoSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.WireIntermedFiInfoSearchPagedSelectFieldsResponse>>("searchWireIntermedFiInfoPagedSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireOfacDetailsSelectFieldsResponse>> GetWireOfacDetailsSelectFields(WireService.WireOfacDetailsSelectFieldsRequest payload) =>
    _client.RequestAsync<WireService.WireOfacDetailsSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.WireOfacDetailsSelectFieldsResponse>>("getWireOfacDetailsSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireOfacDetailsPagedListSelectFieldsResponse>> GetWireOfacDetailsPagedListSelectFields(WireService.WireOfacDetailsPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<WireService.WireOfacDetailsPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.WireOfacDetailsPagedListSelectFieldsResponse>>("getWireOfacDetailsPagedListSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireOfacDetailsSearchPagedSelectFieldsResponse>> SearchWireOfacDetailsPagedSelectFields(WireService.WireOfacDetailsSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<WireService.WireOfacDetailsSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.WireOfacDetailsSearchPagedSelectFieldsResponse>>("searchWireOfacDetailsPagedSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireReceiverFiInfoSelectFieldsResponse>> GetWireReceiverFiInfoSelectFields(WireService.WireReceiverFiInfoSelectFieldsRequest payload) =>
    _client.RequestAsync<WireService.WireReceiverFiInfoSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.WireReceiverFiInfoSelectFieldsResponse>>("getWireReceiverFiInfoSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireReceiverFiInfoPagedListSelectFieldsResponse>> GetWireReceiverFiInfoPagedListSelectFields(WireService.WireReceiverFiInfoPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<WireService.WireReceiverFiInfoPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.WireReceiverFiInfoPagedListSelectFieldsResponse>>("getWireReceiverFiInfoPagedListSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireReceiverFiInfoSearchPagedSelectFieldsResponse>> SearchWireReceiverFiInfoPagedSelectFields(WireService.WireReceiverFiInfoSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<WireService.WireReceiverFiInfoSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.WireReceiverFiInfoSearchPagedSelectFieldsResponse>>("searchWireReceiverFiInfoPagedSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireServiceMessageSelectFieldsResponse>> GetWireServiceMessageSelectFields(WireService.WireServiceMessageSelectFieldsRequest payload) =>
    _client.RequestAsync<WireService.WireServiceMessageSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.WireServiceMessageSelectFieldsResponse>>("getWireServiceMessageSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireServiceMessagePagedListSelectFieldsResponse>> GetWireServiceMessagePagedListSelectFields(WireService.WireServiceMessagePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<WireService.WireServiceMessagePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.WireServiceMessagePagedListSelectFieldsResponse>>("getWireServiceMessagePagedListSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireServiceMessageSearchPagedSelectFieldsResponse>> SearchWireServiceMessagePagedSelectFields(WireService.WireServiceMessageSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<WireService.WireServiceMessageSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.WireServiceMessageSearchPagedSelectFieldsResponse>>("searchWireServiceMessagePagedSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireUscAuditInfoSelectFieldsResponse>> GetWireUscAuditInfoSelectFields(WireService.WireUscAuditInfoSelectFieldsRequest payload) =>
    _client.RequestAsync<WireService.WireUscAuditInfoSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.WireUscAuditInfoSelectFieldsResponse>>("getWireUscAuditInfoSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireUscAuditInfoPagedListSelectFieldsResponse>> GetWireUscAuditInfoPagedListSelectFields(WireService.WireUscAuditInfoPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<WireService.WireUscAuditInfoPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.WireUscAuditInfoPagedListSelectFieldsResponse>>("getWireUscAuditInfoPagedListSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireUscAuditInfoSearchPagedSelectFieldsResponse>> SearchWireUscAuditInfoPagedSelectFields(WireService.WireUscAuditInfoSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<WireService.WireUscAuditInfoSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<WireService.WireUscAuditInfoSearchPagedSelectFieldsResponse>>("searchWireUscAuditInfoPagedSelectFields", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireUpdateByIdResponse>> UpdateWireById(WireService.UpdateWireByIdRequest payload) =>
    _client.RequestAsync<WireService.UpdateWireByIdRequest,  Memberwise.Symxify.Models.Result<WireService.WireUpdateByIdResponse>>("updateWireByID", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireBeneficiaryAdvUpdateByIdResponse>> UpdateWireBeneficiaryAdvById(WireService.UpdateWireBeneficiaryAdvByIdRequest payload) =>
    _client.RequestAsync<WireService.UpdateWireBeneficiaryAdvByIdRequest,  Memberwise.Symxify.Models.Result<WireService.WireBeneficiaryAdvUpdateByIdResponse>>("updateWireBeneficiaryAdvByID", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireBeneficiaryFiAdvUpdateByIdResponse>> UpdateWireBeneficiaryFiAdvById(WireService.UpdateWireBeneficiaryFiAdvByIdRequest payload) =>
    _client.RequestAsync<WireService.UpdateWireBeneficiaryFiAdvByIdRequest,  Memberwise.Symxify.Models.Result<WireService.WireBeneficiaryFiAdvUpdateByIdResponse>>("updateWireBeneficiaryFiAdvByID", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireBeneficiaryFiInfoUpdateByIdResponse>> UpdateWireBeneficiaryFiInfoById(WireService.UpdateWireBeneficiaryFiInfoByIdRequest payload) =>
    _client.RequestAsync<WireService.UpdateWireBeneficiaryFiInfoByIdRequest,  Memberwise.Symxify.Models.Result<WireService.WireBeneficiaryFiInfoUpdateByIdResponse>>("updateWireBeneficiaryFiInfoByID", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireBeneficiaryInfoUpdateByIdResponse>> UpdateWireBeneficiaryInfoById(WireService.UpdateWireBeneficiaryInfoByIdRequest payload) =>
    _client.RequestAsync<WireService.UpdateWireBeneficiaryInfoByIdRequest,  Memberwise.Symxify.Models.Result<WireService.WireBeneficiaryInfoUpdateByIdResponse>>("updateWireBeneficiaryInfoByID", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireDrawdownDebitAcctAdvUpdateByIdResponse>> UpdateWireDrawdownDebitAcctAdvById(WireService.UpdateWireDrawdownDebitAcctAdvByIdRequest payload) =>
    _client.RequestAsync<WireService.UpdateWireDrawdownDebitAcctAdvByIdRequest,  Memberwise.Symxify.Models.Result<WireService.WireDrawdownDebitAcctAdvUpdateByIdResponse>>("updateWireDrawdownDebitAcctAdvByID", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireFiToFiInfoUpdateByIdResponse>> UpdateWireFiToFiInfoById(WireService.UpdateWireFiToFiInfoByIdRequest payload) =>
    _client.RequestAsync<WireService.UpdateWireFiToFiInfoByIdRequest,  Memberwise.Symxify.Models.Result<WireService.WireFiToFiInfoUpdateByIdResponse>>("updateWireFiToFiInfoByID", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireIntermedFiAdvUpdateByIdResponse>> UpdateWireIntermedFiAdvById(WireService.UpdateWireIntermedFiAdvByIdRequest payload) =>
    _client.RequestAsync<WireService.UpdateWireIntermedFiAdvByIdRequest,  Memberwise.Symxify.Models.Result<WireService.WireIntermedFiAdvUpdateByIdResponse>>("updateWireIntermedFiAdvByID", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireIntermedFiInfoUpdateByIdResponse>> UpdateWireIntermedFiInfoById(WireService.UpdateWireIntermedFiInfoByIdRequest payload) =>
    _client.RequestAsync<WireService.UpdateWireIntermedFiInfoByIdRequest,  Memberwise.Symxify.Models.Result<WireService.WireIntermedFiInfoUpdateByIdResponse>>("updateWireIntermedFiInfoByID", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireOfacDetailsUpdateByIdResponse>> UpdateWireOfacDetailsById(WireService.UpdateWireOfacDetailsByIdRequest payload) =>
    _client.RequestAsync<WireService.UpdateWireOfacDetailsByIdRequest,  Memberwise.Symxify.Models.Result<WireService.WireOfacDetailsUpdateByIdResponse>>("updateWireOfacDetailsByID", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireReceiverFiInfoUpdateByIdResponse>> UpdateWireReceiverFiInfoById(WireService.UpdateWireReceiverFiInfoByIdRequest payload) =>
    _client.RequestAsync<WireService.UpdateWireReceiverFiInfoByIdRequest,  Memberwise.Symxify.Models.Result<WireService.WireReceiverFiInfoUpdateByIdResponse>>("updateWireReceiverFiInfoByID", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireServiceMessageUpdateByIdResponse>> UpdateWireServiceMessageById(WireService.UpdateWireServiceMessageByIdRequest payload) =>
    _client.RequestAsync<WireService.UpdateWireServiceMessageByIdRequest,  Memberwise.Symxify.Models.Result<WireService.WireServiceMessageUpdateByIdResponse>>("updateWireServiceMessageByID", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireUscAuditInfoUpdateByIdResponse>> UpdateWireUscAuditInfoById(WireService.UpdateWireUscAuditInfoByIdRequest payload) =>
    _client.RequestAsync<WireService.UpdateWireUscAuditInfoByIdRequest,  Memberwise.Symxify.Models.Result<WireService.WireUscAuditInfoUpdateByIdResponse>>("updateWireUscAuditInfoByID", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<WireService.WireCreateResponse>> CreateWire(WireService.CreateWireRequest payload) =>
    _client.RequestAsync<WireService.CreateWireRequest,  Memberwise.Symxify.Models.Result<WireService.WireCreateResponse>>("createWire", payload, "wire");


public Task<Memberwise.Symxify.Models.Result<CheckVerificationService.CheckVerificationResponse>> VerifyCheck(CheckVerificationService.CheckVerificationRequest payload) =>
    _client.RequestAsync<CheckVerificationService.CheckVerificationRequest,  Memberwise.Symxify.Models.Result<CheckVerificationService.CheckVerificationResponse>>("verifyCheck", payload, "checkverification");


public Task<Memberwise.Symxify.Models.Result<MemberService.MemberRecSelectFieldsResponse>> GetMemberRecSelectFields(MemberService.MemberRecSelectFieldsRequest payload) =>
    _client.RequestAsync<MemberService.MemberRecSelectFieldsRequest,  Memberwise.Symxify.Models.Result<MemberService.MemberRecSelectFieldsResponse>>("getMemberRecSelectFields", payload, "member");


public Task<Memberwise.Symxify.Models.Result<MemberService.MemberRecSelectFieldsFilterChildrenResponse>> GetMemberRecSelectFieldsFilterChildren(MemberService.MemberRecSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<MemberService.MemberRecSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<MemberService.MemberRecSelectFieldsFilterChildrenResponse>>("getMemberRecSelectFieldsFilterChildren", payload, "member");


public Task<Memberwise.Symxify.Models.Result<MemberService.MemberRecFmHistoryPagedListSelectFieldsResponse>> GetMemberRecFmHistoryPagedListSelectFields(MemberService.MemberRecFmHistoryPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<MemberService.MemberRecFmHistoryPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<MemberService.MemberRecFmHistoryPagedListSelectFieldsResponse>>("getMemberRecFmHistoryPagedListSelectFields", payload, "member");


public Task<Memberwise.Symxify.Models.Result<MemberService.MemberRecFmHistorySearchPagedSelectFieldsResponse>> SearchMemberRecFmHistoryPagedSelectFields(MemberService.MemberRecFmHistorySearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<MemberService.MemberRecFmHistorySearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<MemberService.MemberRecFmHistorySearchPagedSelectFieldsResponse>>("searchMemberRecFmHistoryPagedSelectFields", payload, "member");


public Task<Memberwise.Symxify.Models.Result<MemberService.MemberRecUpdateByIdResponse>> UpdateMemberRecById(MemberService.UpdateMemberRecByIdRequest payload) =>
    _client.RequestAsync<MemberService.UpdateMemberRecByIdRequest,  Memberwise.Symxify.Models.Result<MemberService.MemberRecUpdateByIdResponse>>("updateMemberRecByID", payload, "member");


public Task<Memberwise.Symxify.Models.Result<MemberService.MemberRecCreateResponse>> CreateMemberRec(MemberService.CreateMemberRecRequest payload) =>
    _client.RequestAsync<MemberService.CreateMemberRecRequest,  Memberwise.Symxify.Models.Result<MemberService.MemberRecCreateResponse>>("createMemberRec", payload, "member");


public Task<Memberwise.Symxify.Models.Result<BatchJobsService.ListBatchJobsResponse>> ListBatchJobs(BatchJobsService.ListBatchJobsRequest payload) =>
    _client.RequestAsync<BatchJobsService.ListBatchJobsRequest,  Memberwise.Symxify.Models.Result<BatchJobsService.ListBatchJobsResponse>>("listBatchJobs", payload, "batchjobs");


public Task<Memberwise.Symxify.Models.Result<BatchJobsService.ExecuteBatchJobResponse>> ExecuteBatchJob(BatchJobsService.ExecuteBatchJobRequest payload) =>
    _client.RequestAsync<BatchJobsService.ExecuteBatchJobRequest,  Memberwise.Symxify.Models.Result<BatchJobsService.ExecuteBatchJobResponse>>("executeBatchJob", payload, "batchjobs");


public Task<Memberwise.Symxify.Models.Result<BatchJobsService.GetBatchJobStatusResponse>> GetBatchJobStatus(BatchJobsService.GetBatchJobStatusRequest payload) =>
    _client.RequestAsync<BatchJobsService.GetBatchJobStatusRequest,  Memberwise.Symxify.Models.Result<BatchJobsService.GetBatchJobStatusResponse>>("getBatchJobStatus", payload, "batchjobs");


public Task<Memberwise.Symxify.Models.Result<CollateralService.CollateralSelectFieldsResponse>> GetCollateralSelectFields(CollateralService.CollateralSelectFieldsRequest payload) =>
    _client.RequestAsync<CollateralService.CollateralSelectFieldsRequest,  Memberwise.Symxify.Models.Result<CollateralService.CollateralSelectFieldsResponse>>("getCollateralSelectFields", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.CollateralSelectFieldsFilterChildrenResponse>> GetCollateralSelectFieldsFilterChildren(CollateralService.CollateralSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<CollateralService.CollateralSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<CollateralService.CollateralSelectFieldsFilterChildrenResponse>>("getCollateralSelectFieldsFilterChildren", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.CollateralCollHoldSelectFieldsResponse>> GetCollateralCollHoldSelectFields(CollateralService.CollateralCollHoldSelectFieldsRequest payload) =>
    _client.RequestAsync<CollateralService.CollateralCollHoldSelectFieldsRequest,  Memberwise.Symxify.Models.Result<CollateralService.CollateralCollHoldSelectFieldsResponse>>("getCollateralCollHoldSelectFields", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.CollateralCollHoldPagedListSelectFieldsResponse>> GetCollateralCollHoldPagedListSelectFields(CollateralService.CollateralCollHoldPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<CollateralService.CollateralCollHoldPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<CollateralService.CollateralCollHoldPagedListSelectFieldsResponse>>("getCollateralCollHoldPagedListSelectFields", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.CollateralCollHoldSearchPagedSelectFieldsResponse>> SearchCollateralCollHoldPagedSelectFields(CollateralService.CollateralCollHoldSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<CollateralService.CollateralCollHoldSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<CollateralService.CollateralCollHoldSearchPagedSelectFieldsResponse>>("searchCollateralCollHoldPagedSelectFields", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.CollateralDocumentSelectFieldsResponse>> GetCollateralDocumentSelectFields(CollateralService.CollateralDocumentSelectFieldsRequest payload) =>
    _client.RequestAsync<CollateralService.CollateralDocumentSelectFieldsRequest,  Memberwise.Symxify.Models.Result<CollateralService.CollateralDocumentSelectFieldsResponse>>("getCollateralDocumentSelectFields", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.CollateralDocumentSelectFieldsFilterChildrenResponse>> GetCollateralDocumentSelectFieldsFilterChildren(CollateralService.CollateralDocumentSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<CollateralService.CollateralDocumentSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<CollateralService.CollateralDocumentSelectFieldsFilterChildrenResponse>>("getCollateralDocumentSelectFieldsFilterChildren", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.CollateralDocumentPagedListSelectFieldsResponse>> GetCollateralDocumentPagedListSelectFields(CollateralService.CollateralDocumentPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<CollateralService.CollateralDocumentPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<CollateralService.CollateralDocumentPagedListSelectFieldsResponse>>("getCollateralDocumentPagedListSelectFields", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.CollateralDocumentSearchPagedSelectFieldsResponse>> SearchCollateralDocumentPagedSelectFields(CollateralService.CollateralDocumentSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<CollateralService.CollateralDocumentSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<CollateralService.CollateralDocumentSearchPagedSelectFieldsResponse>>("searchCollateralDocumentPagedSelectFields", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.CollateralDocumentTrackingSelectFieldsResponse>> GetCollateralDocumentTrackingSelectFields(CollateralService.CollateralDocumentTrackingSelectFieldsRequest payload) =>
    _client.RequestAsync<CollateralService.CollateralDocumentTrackingSelectFieldsRequest,  Memberwise.Symxify.Models.Result<CollateralService.CollateralDocumentTrackingSelectFieldsResponse>>("getCollateralDocumentTrackingSelectFields", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.CollateralDocumentTrackingPagedListSelectFieldsResponse>> GetCollateralDocumentTrackingPagedListSelectFields(CollateralService.CollateralDocumentTrackingPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<CollateralService.CollateralDocumentTrackingPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<CollateralService.CollateralDocumentTrackingPagedListSelectFieldsResponse>>("getCollateralDocumentTrackingPagedListSelectFields", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.CollateralDocumentTrackingSearchPagedSelectFieldsResponse>> SearchCollateralDocumentTrackingPagedSelectFields(CollateralService.CollateralDocumentTrackingSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<CollateralService.CollateralDocumentTrackingSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<CollateralService.CollateralDocumentTrackingSearchPagedSelectFieldsResponse>>("searchCollateralDocumentTrackingPagedSelectFields", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.CollateralFmHistoryPagedListSelectFieldsResponse>> GetCollateralFmHistoryPagedListSelectFields(CollateralService.CollateralFmHistoryPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<CollateralService.CollateralFmHistoryPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<CollateralService.CollateralFmHistoryPagedListSelectFieldsResponse>>("getCollateralFmHistoryPagedListSelectFields", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.CollateralFmHistorySearchPagedSelectFieldsResponse>> SearchCollateralFmHistoryPagedSelectFields(CollateralService.CollateralFmHistorySearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<CollateralService.CollateralFmHistorySearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<CollateralService.CollateralFmHistorySearchPagedSelectFieldsResponse>>("searchCollateralFmHistoryPagedSelectFields", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.CollateralTrackingSelectFieldsResponse>> GetCollateralTrackingSelectFields(CollateralService.CollateralTrackingSelectFieldsRequest payload) =>
    _client.RequestAsync<CollateralService.CollateralTrackingSelectFieldsRequest,  Memberwise.Symxify.Models.Result<CollateralService.CollateralTrackingSelectFieldsResponse>>("getCollateralTrackingSelectFields", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.CollateralTrackingPagedListSelectFieldsResponse>> GetCollateralTrackingPagedListSelectFields(CollateralService.CollateralTrackingPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<CollateralService.CollateralTrackingPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<CollateralService.CollateralTrackingPagedListSelectFieldsResponse>>("getCollateralTrackingPagedListSelectFields", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.CollateralTrackingSearchPagedSelectFieldsResponse>> SearchCollateralTrackingPagedSelectFields(CollateralService.CollateralTrackingSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<CollateralService.CollateralTrackingSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<CollateralService.CollateralTrackingSearchPagedSelectFieldsResponse>>("searchCollateralTrackingPagedSelectFields", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.CollateralUpdateByIdResponse>> UpdateCollateralById(CollateralService.UpdateCollateralByIdRequest payload) =>
    _client.RequestAsync<CollateralService.UpdateCollateralByIdRequest,  Memberwise.Symxify.Models.Result<CollateralService.CollateralUpdateByIdResponse>>("updateCollateralByID", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.CollateralCollHoldUpdateByIdResponse>> UpdateCollateralCollHoldById(CollateralService.UpdateCollateralCollHoldByIdRequest payload) =>
    _client.RequestAsync<CollateralService.UpdateCollateralCollHoldByIdRequest,  Memberwise.Symxify.Models.Result<CollateralService.CollateralCollHoldUpdateByIdResponse>>("updateCollateralCollHoldByID", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.CollateralDocumentUpdateByIdResponse>> UpdateCollateralDocumentById(CollateralService.UpdateCollateralDocumentByIdRequest payload) =>
    _client.RequestAsync<CollateralService.UpdateCollateralDocumentByIdRequest,  Memberwise.Symxify.Models.Result<CollateralService.CollateralDocumentUpdateByIdResponse>>("updateCollateralDocumentByID", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.CollateralDocumentTrackingUpdateByIdResponse>> UpdateCollateralDocumentTrackingById(CollateralService.UpdateCollateralDocumentTrackingByIdRequest payload) =>
    _client.RequestAsync<CollateralService.UpdateCollateralDocumentTrackingByIdRequest,  Memberwise.Symxify.Models.Result<CollateralService.CollateralDocumentTrackingUpdateByIdResponse>>("updateCollateralDocumentTrackingByID", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.CollateralTrackingUpdateByIdResponse>> UpdateCollateralTrackingById(CollateralService.UpdateCollateralTrackingByIdRequest payload) =>
    _client.RequestAsync<CollateralService.UpdateCollateralTrackingByIdRequest,  Memberwise.Symxify.Models.Result<CollateralService.CollateralTrackingUpdateByIdResponse>>("updateCollateralTrackingByID", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.CollateralCreateResponse>> CreateCollateral(CollateralService.CreateCollateralRequest payload) =>
    _client.RequestAsync<CollateralService.CreateCollateralRequest,  Memberwise.Symxify.Models.Result<CollateralService.CollateralCreateResponse>>("createCollateral", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.CollateralCollHoldCreateResponse>> CreateCollateralCollHold(CollateralService.CreateCollateralCollHoldRequest payload) =>
    _client.RequestAsync<CollateralService.CreateCollateralCollHoldRequest,  Memberwise.Symxify.Models.Result<CollateralService.CollateralCollHoldCreateResponse>>("createCollateralCollHold", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.CollateralDocumentCreateResponse>> CreateCollateralDocument(CollateralService.CreateCollateralDocumentRequest payload) =>
    _client.RequestAsync<CollateralService.CreateCollateralDocumentRequest,  Memberwise.Symxify.Models.Result<CollateralService.CollateralDocumentCreateResponse>>("createCollateralDocument", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.CollateralDocumentTrackingCreateResponse>> CreateCollateralDocumentTracking(CollateralService.CreateCollateralDocumentTrackingRequest payload) =>
    _client.RequestAsync<CollateralService.CreateCollateralDocumentTrackingRequest,  Memberwise.Symxify.Models.Result<CollateralService.CollateralDocumentTrackingCreateResponse>>("createCollateralDocumentTracking", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.CollateralTrackingCreateResponse>> CreateCollateralTracking(CollateralService.CreateCollateralTrackingRequest payload) =>
    _client.RequestAsync<CollateralService.CreateCollateralTrackingRequest,  Memberwise.Symxify.Models.Result<CollateralService.CollateralTrackingCreateResponse>>("createCollateralTracking", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.CollateralCollHoldDeleteResponse>> DeleteCollateralCollHold(CollateralService.DeleteCollateralCollHoldRequest payload) =>
    _client.RequestAsync<CollateralService.DeleteCollateralCollHoldRequest,  Memberwise.Symxify.Models.Result<CollateralService.CollateralCollHoldDeleteResponse>>("deleteCollateralCollHold", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.CollateralDocumentDeleteResponse>> DeleteCollateralDocument(CollateralService.DeleteCollateralDocumentRequest payload) =>
    _client.RequestAsync<CollateralService.DeleteCollateralDocumentRequest,  Memberwise.Symxify.Models.Result<CollateralService.CollateralDocumentDeleteResponse>>("deleteCollateralDocument", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.CollateralDocumentTrackingDeleteResponse>> DeleteCollateralDocumentTracking(CollateralService.DeleteCollateralDocumentTrackingRequest payload) =>
    _client.RequestAsync<CollateralService.DeleteCollateralDocumentTrackingRequest,  Memberwise.Symxify.Models.Result<CollateralService.CollateralDocumentTrackingDeleteResponse>>("deleteCollateralDocumentTracking", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<CollateralService.CollateralTrackingDeleteResponse>> DeleteCollateralTracking(CollateralService.DeleteCollateralTrackingRequest payload) =>
    _client.RequestAsync<CollateralService.DeleteCollateralTrackingRequest,  Memberwise.Symxify.Models.Result<CollateralService.CollateralTrackingDeleteResponse>>("deleteCollateralTracking", payload, "collateral");


public Task<Memberwise.Symxify.Models.Result<MbraddressService.MbrAddressSelectFieldsResponse>> GetMbrAddressSelectFields(MbraddressService.MbrAddressSelectFieldsRequest payload) =>
    _client.RequestAsync<MbraddressService.MbrAddressSelectFieldsRequest,  Memberwise.Symxify.Models.Result<MbraddressService.MbrAddressSelectFieldsResponse>>("getMbrAddressSelectFields", payload, "mbraddress");


public Task<Memberwise.Symxify.Models.Result<MbraddressService.MbrAddressSelectFieldsFilterChildrenResponse>> GetMbrAddressSelectFieldsFilterChildren(MbraddressService.MbrAddressSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<MbraddressService.MbrAddressSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<MbraddressService.MbrAddressSelectFieldsFilterChildrenResponse>>("getMbrAddressSelectFieldsFilterChildren", payload, "mbraddress");


public Task<Memberwise.Symxify.Models.Result<MbraddressService.MbrAddressFmHistoryPagedListSelectFieldsResponse>> GetMbrAddressFmHistoryPagedListSelectFields(MbraddressService.MbrAddressFmHistoryPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<MbraddressService.MbrAddressFmHistoryPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<MbraddressService.MbrAddressFmHistoryPagedListSelectFieldsResponse>>("getMbrAddressFmHistoryPagedListSelectFields", payload, "mbraddress");


public Task<Memberwise.Symxify.Models.Result<MbraddressService.MbrAddressFmHistorySearchPagedSelectFieldsResponse>> SearchMbrAddressFmHistoryPagedSelectFields(MbraddressService.MbrAddressFmHistorySearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<MbraddressService.MbrAddressFmHistorySearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<MbraddressService.MbrAddressFmHistorySearchPagedSelectFieldsResponse>>("searchMbrAddressFmHistoryPagedSelectFields", payload, "mbraddress");


public Task<Memberwise.Symxify.Models.Result<MbraddressService.MbrAddressUpdateByIdResponse>> UpdateMbrAddressById(MbraddressService.UpdateMbrAddressByIdRequest payload) =>
    _client.RequestAsync<MbraddressService.UpdateMbrAddressByIdRequest,  Memberwise.Symxify.Models.Result<MbraddressService.MbrAddressUpdateByIdResponse>>("updateMbrAddressByID", payload, "mbraddress");


public Task<Memberwise.Symxify.Models.Result<MbraddressService.MbrAddressCreateResponse>> CreateMbrAddress(MbraddressService.CreateMbrAddressRequest payload) =>
    _client.RequestAsync<MbraddressService.CreateMbrAddressRequest,  Memberwise.Symxify.Models.Result<MbraddressService.MbrAddressCreateResponse>>("createMbrAddress", payload, "mbraddress");


public Task<Memberwise.Symxify.Models.Result<CashLetterService.CashLetterSelectFieldsResponse>> GetCashLetterSelectFields(CashLetterService.CashLetterSelectFieldsRequest payload) =>
    _client.RequestAsync<CashLetterService.CashLetterSelectFieldsRequest,  Memberwise.Symxify.Models.Result<CashLetterService.CashLetterSelectFieldsResponse>>("getCashLetterSelectFields", payload, "cashletter");


public Task<Memberwise.Symxify.Models.Result<BalancingService.ResetCashValueBalancesResponse>> ResetCashValueBalances(BalancingService.ResetCashValueBalancesRequest payload) =>
    _client.RequestAsync<BalancingService.ResetCashValueBalancesRequest,  Memberwise.Symxify.Models.Result<BalancingService.ResetCashValueBalancesResponse>>("resetCashValueBalances", payload, "balancing");


public Task<Memberwise.Symxify.Models.Result<BalancingService.ResetDepositBalancesResponse>> ResetDepositBalances(BalancingService.ResetDepositBalancesRequest payload) =>
    _client.RequestAsync<BalancingService.ResetDepositBalancesRequest,  Memberwise.Symxify.Models.Result<BalancingService.ResetDepositBalancesResponse>>("resetDepositBalances", payload, "balancing");


public Task<Memberwise.Symxify.Models.Result<BalancingService.ResetSecondPartyCheckBalancesResponse>> ResetSecondPartyCheckBalances(BalancingService.ResetSecondPartyCheckBalancesRequest payload) =>
    _client.RequestAsync<BalancingService.ResetSecondPartyCheckBalancesRequest,  Memberwise.Symxify.Models.Result<BalancingService.ResetSecondPartyCheckBalancesResponse>>("resetSecondPartyCheckBalances", payload, "balancing");


public Task<Memberwise.Symxify.Models.Result<BalancingService.CashValueAdjustResponse>> CashValueAdjust(BalancingService.CashValueAdjustRequest payload) =>
    _client.RequestAsync<BalancingService.CashValueAdjustRequest,  Memberwise.Symxify.Models.Result<BalancingService.CashValueAdjustResponse>>("cashValueAdjust", payload, "balancing");


public Task<Memberwise.Symxify.Models.Result<BalancingService.SecondPartyCheckAdjustResponse>> SecondPartyCheckAdjust(BalancingService.SecondPartyCheckAdjustRequest payload) =>
    _client.RequestAsync<BalancingService.SecondPartyCheckAdjustRequest,  Memberwise.Symxify.Models.Result<BalancingService.SecondPartyCheckAdjustResponse>>("secondPartyCheckAdjust", payload, "balancing");


public Task<Memberwise.Symxify.Models.Result<BalancingService.CashValueReportResponse>> CashValueReport(BalancingService.CashValueReportRequest payload) =>
    _client.RequestAsync<BalancingService.CashValueReportRequest,  Memberwise.Symxify.Models.Result<BalancingService.CashValueReportResponse>>("cashValueReport", payload, "balancing");


public Task<Memberwise.Symxify.Models.Result<BalancingService.VerifyDepositReportResponse>> VerifyDepositReport(BalancingService.VerifyDepositReportRequest payload) =>
    _client.RequestAsync<BalancingService.VerifyDepositReportRequest,  Memberwise.Symxify.Models.Result<BalancingService.VerifyDepositReportResponse>>("verifyDepositReport", payload, "balancing");


public Task<Memberwise.Symxify.Models.Result<BalancingService.CheckDisbursedReportResponse>> CheckDisbursedReport(BalancingService.CheckDisbursedReportRequest payload) =>
    _client.RequestAsync<BalancingService.CheckDisbursedReportRequest,  Memberwise.Symxify.Models.Result<BalancingService.CheckDisbursedReportResponse>>("checkDisbursedReport", payload, "balancing");


public Task<Memberwise.Symxify.Models.Result<FileManagementService.DownloadResponse>> DownloadLetterFile(FileManagementService.DownloadRequest payload) =>
    _client.RequestAsync<FileManagementService.DownloadRequest,  Memberwise.Symxify.Models.Result<FileManagementService.DownloadResponse>>("downloadLetterFile", payload, "filemanagement");


public Task<Memberwise.Symxify.Models.Result<FileManagementService.UploadResponse>> UploadLetterFile(FileManagementService.UploadRequest payload) =>
    _client.RequestAsync<FileManagementService.UploadRequest,  Memberwise.Symxify.Models.Result<FileManagementService.UploadResponse>>("uploadLetterFile", payload, "filemanagement");


public Task<Memberwise.Symxify.Models.Result<FileManagementService.DeleteResponse>> DeleteLetterFile(FileManagementService.DeleteRequest payload) =>
    _client.RequestAsync<FileManagementService.DeleteRequest,  Memberwise.Symxify.Models.Result<FileManagementService.DeleteResponse>>("deleteLetterFile", payload, "filemanagement");


public Task<Memberwise.Symxify.Models.Result<FileManagementService.UploadResponse>> UploadDataFile(FileManagementService.UploadRequest payload) =>
    _client.RequestAsync<FileManagementService.UploadRequest,  Memberwise.Symxify.Models.Result<FileManagementService.UploadResponse>>("uploadDataFile", payload, "filemanagement");


public Task<Memberwise.Symxify.Models.Result<FileManagementService.DownloadResponse>> DownloadDataFile(FileManagementService.DownloadRequest payload) =>
    _client.RequestAsync<FileManagementService.DownloadRequest,  Memberwise.Symxify.Models.Result<FileManagementService.DownloadResponse>>("downloadDataFile", payload, "filemanagement");


public Task<Memberwise.Symxify.Models.Result<FileManagementService.DeleteResponse>> DeleteDataFile(FileManagementService.DeleteRequest payload) =>
    _client.RequestAsync<FileManagementService.DeleteRequest,  Memberwise.Symxify.Models.Result<FileManagementService.DeleteResponse>>("deleteDataFile", payload, "filemanagement");


public Task<Memberwise.Symxify.Models.Result<CheckService.CheckSelectFieldsResponse>> GetCheckSelectFields(CheckService.CheckSelectFieldsRequest payload) =>
    _client.RequestAsync<CheckService.CheckSelectFieldsRequest,  Memberwise.Symxify.Models.Result<CheckService.CheckSelectFieldsResponse>>("getCheckSelectFields", payload, "check");


public Task<Memberwise.Symxify.Models.Result<CheckService.CheckSelectFieldsFilterChildrenResponse>> GetCheckSelectFieldsFilterChildren(CheckService.CheckSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<CheckService.CheckSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<CheckService.CheckSelectFieldsFilterChildrenResponse>>("getCheckSelectFieldsFilterChildren", payload, "check");


public Task<Memberwise.Symxify.Models.Result<CheckService.CheckFmHistoryPagedListSelectFieldsResponse>> GetCheckFmHistoryPagedListSelectFields(CheckService.CheckFmHistoryPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<CheckService.CheckFmHistoryPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<CheckService.CheckFmHistoryPagedListSelectFieldsResponse>>("getCheckFmHistoryPagedListSelectFields", payload, "check");


public Task<Memberwise.Symxify.Models.Result<CheckService.CheckFmHistorySearchPagedSelectFieldsResponse>> SearchCheckFmHistoryPagedSelectFields(CheckService.CheckFmHistorySearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<CheckService.CheckFmHistorySearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<CheckService.CheckFmHistorySearchPagedSelectFieldsResponse>>("searchCheckFmHistoryPagedSelectFields", payload, "check");


public Task<Memberwise.Symxify.Models.Result<CheckService.CheckUpdateByIdResponse>> UpdateCheckById(CheckService.UpdateCheckByIdRequest payload) =>
    _client.RequestAsync<CheckService.UpdateCheckByIdRequest,  Memberwise.Symxify.Models.Result<CheckService.CheckUpdateByIdResponse>>("updateCheckByID", payload, "check");


public Task<Memberwise.Symxify.Models.Result<CheckService.CheckCreateResponse>> CreateCheck(CheckService.CreateCheckRequest payload) =>
    _client.RequestAsync<CheckService.CreateCheckRequest,  Memberwise.Symxify.Models.Result<CheckService.CheckCreateResponse>>("createCheck", payload, "check");


public Task<Memberwise.Symxify.Models.Result<CheckService.CheckDeleteResponse>> DeleteCheck(CheckService.DeleteCheckRequest payload) =>
    _client.RequestAsync<CheckService.DeleteCheckRequest,  Memberwise.Symxify.Models.Result<CheckService.CheckDeleteResponse>>("deleteCheck", payload, "check");


public Task<Memberwise.Symxify.Models.Result<ParameterService.ParameterSelectFieldsResponse>> GetParameterSelectFields(ParameterService.ParameterSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.ParameterSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.ParameterSelectFieldsResponse>>("getParameterSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.ParameterSelectFieldsFilterChildrenResponse>> GetParameterSelectFieldsFilterChildren(ParameterService.ParameterSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<ParameterService.ParameterSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<ParameterService.ParameterSelectFieldsFilterChildrenResponse>>("getParameterSelectFieldsFilterChildren", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.AccountDefaultSelectFieldsResponse>> GetAccountDefaultSelectFields(ParameterService.AccountDefaultSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.AccountDefaultSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.AccountDefaultSelectFieldsResponse>>("getAccountDefaultSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.AccountDefaultPagedListSelectFieldsResponse>> GetAccountDefaultPagedListSelectFields(ParameterService.AccountDefaultPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.AccountDefaultPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.AccountDefaultPagedListSelectFieldsResponse>>("getAccountDefaultPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.AccountDefaultSearchPagedSelectFieldsResponse>> SearchAccountDefaultPagedSelectFields(ParameterService.AccountDefaultSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.AccountDefaultSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.AccountDefaultSearchPagedSelectFieldsResponse>>("searchAccountDefaultPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.AccountFieldNameSelectFieldsResponse>> GetAccountFieldNameSelectFields(ParameterService.AccountFieldNameSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.AccountFieldNameSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.AccountFieldNameSelectFieldsResponse>>("getAccountFieldNameSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.AccountFieldNamePagedListSelectFieldsResponse>> GetAccountFieldNamePagedListSelectFields(ParameterService.AccountFieldNamePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.AccountFieldNamePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.AccountFieldNamePagedListSelectFieldsResponse>>("getAccountFieldNamePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.AccountFieldNameSearchPagedSelectFieldsResponse>> SearchAccountFieldNamePagedSelectFields(ParameterService.AccountFieldNameSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.AccountFieldNameSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.AccountFieldNameSearchPagedSelectFieldsResponse>>("searchAccountFieldNamePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.AcctLimitSelectFieldsResponse>> GetAcctLimitSelectFields(ParameterService.AcctLimitSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.AcctLimitSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.AcctLimitSelectFieldsResponse>>("getAcctLimitSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.AcctMembGrpDescSelectFieldsResponse>> GetAcctMembGrpDescSelectFields(ParameterService.AcctMembGrpDescSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.AcctMembGrpDescSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.AcctMembGrpDescSelectFieldsResponse>>("getAcctMembGrpDescSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.AcctMembGrpDescPagedListSelectFieldsResponse>> GetAcctMembGrpDescPagedListSelectFields(ParameterService.AcctMembGrpDescPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.AcctMembGrpDescPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.AcctMembGrpDescPagedListSelectFieldsResponse>>("getAcctMembGrpDescPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.AcctMembGrpDescSearchPagedSelectFieldsResponse>> SearchAcctMembGrpDescPagedSelectFields(ParameterService.AcctMembGrpDescSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.AcctMembGrpDescSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.AcctMembGrpDescSearchPagedSelectFieldsResponse>>("searchAcctMembGrpDescPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.AcctRelCodeDescSelectFieldsResponse>> GetAcctRelCodeDescSelectFields(ParameterService.AcctRelCodeDescSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.AcctRelCodeDescSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.AcctRelCodeDescSelectFieldsResponse>>("getAcctRelCodeDescSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.AcctTrackingTypeSelectFieldsResponse>> GetAcctTrackingTypeSelectFields(ParameterService.AcctTrackingTypeSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.AcctTrackingTypeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.AcctTrackingTypeSelectFieldsResponse>>("getAcctTrackingTypeSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.AcctTrackingTypePagedListSelectFieldsResponse>> GetAcctTrackingTypePagedListSelectFields(ParameterService.AcctTrackingTypePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.AcctTrackingTypePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.AcctTrackingTypePagedListSelectFieldsResponse>>("getAcctTrackingTypePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.AcctTrackingTypeSearchPagedSelectFieldsResponse>> SearchAcctTrackingTypePagedSelectFields(ParameterService.AcctTrackingTypeSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.AcctTrackingTypeSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.AcctTrackingTypeSearchPagedSelectFieldsResponse>>("searchAcctTrackingTypePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.AcctTypeNameSelectFieldsResponse>> GetAcctTypeNameSelectFields(ParameterService.AcctTypeNameSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.AcctTypeNameSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.AcctTypeNameSelectFieldsResponse>>("getAcctTypeNameSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.AcctTypeNamePagedListSelectFieldsResponse>> GetAcctTypeNamePagedListSelectFields(ParameterService.AcctTypeNamePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.AcctTypeNamePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.AcctTypeNamePagedListSelectFieldsResponse>>("getAcctTypeNamePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.AcctTypeNameSearchPagedSelectFieldsResponse>> SearchAcctTypeNamePagedSelectFields(ParameterService.AcctTypeNameSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.AcctTypeNameSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.AcctTypeNameSearchPagedSelectFieldsResponse>>("searchAcctTypeNamePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.AcsGlobalSelectFieldsResponse>> GetAcsGlobalSelectFields(ParameterService.AcsGlobalSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.AcsGlobalSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.AcsGlobalSelectFieldsResponse>>("getAcsGlobalSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.AcsServiceSelectFieldsResponse>> GetAcsServiceSelectFields(ParameterService.AcsServiceSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.AcsServiceSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.AcsServiceSelectFieldsResponse>>("getAcsServiceSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.AcsServicePagedListSelectFieldsResponse>> GetAcsServicePagedListSelectFields(ParameterService.AcsServicePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.AcsServicePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.AcsServicePagedListSelectFieldsResponse>>("getAcsServicePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.AcsServiceSearchPagedSelectFieldsResponse>> SearchAcsServicePagedSelectFields(ParameterService.AcsServiceSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.AcsServiceSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.AcsServiceSearchPagedSelectFieldsResponse>>("searchAcsServicePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.ActivityFmSelectFieldsResponse>> GetActivityFmSelectFields(ParameterService.ActivityFmSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.ActivityFmSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.ActivityFmSelectFieldsResponse>>("getActivityFmSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.AnalysisFloatSelectFieldsResponse>> GetAnalysisFloatSelectFields(ParameterService.AnalysisFloatSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.AnalysisFloatSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.AnalysisFloatSelectFieldsResponse>>("getAnalysisFloatSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.AnalysisFloatPagedListSelectFieldsResponse>> GetAnalysisFloatPagedListSelectFields(ParameterService.AnalysisFloatPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.AnalysisFloatPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.AnalysisFloatPagedListSelectFieldsResponse>>("getAnalysisFloatPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.AnalysisFloatSearchPagedSelectFieldsResponse>> SearchAnalysisFloatPagedSelectFields(ParameterService.AnalysisFloatSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.AnalysisFloatSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.AnalysisFloatSearchPagedSelectFieldsResponse>>("searchAnalysisFloatPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.AnalysisGlobalSelectFieldsResponse>> GetAnalysisGlobalSelectFields(ParameterService.AnalysisGlobalSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.AnalysisGlobalSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.AnalysisGlobalSelectFieldsResponse>>("getAnalysisGlobalSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.AnalysisPlanSelectFieldsResponse>> GetAnalysisPlanSelectFields(ParameterService.AnalysisPlanSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.AnalysisPlanSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.AnalysisPlanSelectFieldsResponse>>("getAnalysisPlanSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.AnalysisPlanPagedListSelectFieldsResponse>> GetAnalysisPlanPagedListSelectFields(ParameterService.AnalysisPlanPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.AnalysisPlanPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.AnalysisPlanPagedListSelectFieldsResponse>>("getAnalysisPlanPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.AnalysisPlanSearchPagedSelectFieldsResponse>> SearchAnalysisPlanPagedSelectFields(ParameterService.AnalysisPlanSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.AnalysisPlanSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.AnalysisPlanSearchPagedSelectFieldsResponse>>("searchAnalysisPlanPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.ApMiscSelectFieldsResponse>> GetApMiscSelectFields(ParameterService.ApMiscSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.ApMiscSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.ApMiscSelectFieldsResponse>>("getApMiscSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.ApPmtTermsTablePagedListSelectFieldsResponse>> GetApPmtTermsTablePagedListSelectFields(ParameterService.ApPmtTermsTablePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.ApPmtTermsTablePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.ApPmtTermsTablePagedListSelectFieldsResponse>>("getApPmtTermsTablePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.ApPmtTermsTableSearchPagedSelectFieldsResponse>> SearchApPmtTermsTablePagedSelectFields(ParameterService.ApPmtTermsTableSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.ApPmtTermsTableSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.ApPmtTermsTableSearchPagedSelectFieldsResponse>>("searchApPmtTermsTablePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.ApWorkFlowSelectFieldsResponse>> GetApWorkFlowSelectFields(ParameterService.ApWorkFlowSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.ApWorkFlowSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.ApWorkFlowSelectFieldsResponse>>("getApWorkFlowSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.ApWorkFlowPagedListSelectFieldsResponse>> GetApWorkFlowPagedListSelectFields(ParameterService.ApWorkFlowPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.ApWorkFlowPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.ApWorkFlowPagedListSelectFieldsResponse>>("getApWorkFlowPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.ApWorkFlowSearchPagedSelectFieldsResponse>> SearchApWorkFlowPagedSelectFields(ParameterService.ApWorkFlowSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.ApWorkFlowSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.ApWorkFlowSearchPagedSelectFieldsResponse>>("searchApWorkFlowPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.AtmSelectFieldsResponse>> GetAtmSelectFields(ParameterService.AtmSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.AtmSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.AtmSelectFieldsResponse>>("getAtmSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.BatchRcSelectFieldsResponse>> GetBatchRcSelectFields(ParameterService.BatchRcSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.BatchRcSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.BatchRcSelectFieldsResponse>>("getBatchRcSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.BatchRcPagedListSelectFieldsResponse>> GetBatchRcPagedListSelectFields(ParameterService.BatchRcPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.BatchRcPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.BatchRcPagedListSelectFieldsResponse>>("getBatchRcPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.BatchRcSearchPagedSelectFieldsResponse>> SearchBatchRcPagedSelectFields(ParameterService.BatchRcSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.BatchRcSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.BatchRcSearchPagedSelectFieldsResponse>>("searchBatchRcPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.CardDefaultSelectFieldsResponse>> GetCardDefaultSelectFields(ParameterService.CardDefaultSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.CardDefaultSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.CardDefaultSelectFieldsResponse>>("getCardDefaultSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.CardDefaultPagedListSelectFieldsResponse>> GetCardDefaultPagedListSelectFields(ParameterService.CardDefaultPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.CardDefaultPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.CardDefaultPagedListSelectFieldsResponse>>("getCardDefaultPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.CardDefaultSearchPagedSelectFieldsResponse>> SearchCardDefaultPagedSelectFields(ParameterService.CardDefaultSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.CardDefaultSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.CardDefaultSearchPagedSelectFieldsResponse>>("searchCardDefaultPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.CardWizSelectFieldsResponse>> GetCardWizSelectFields(ParameterService.CardWizSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.CardWizSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.CardWizSelectFieldsResponse>>("getCardWizSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.CardWizPagedListSelectFieldsResponse>> GetCardWizPagedListSelectFields(ParameterService.CardWizPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.CardWizPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.CardWizPagedListSelectFieldsResponse>>("getCardWizPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.CardWizSearchPagedSelectFieldsResponse>> SearchCardWizPagedSelectFields(ParameterService.CardWizSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.CardWizSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.CardWizSearchPagedSelectFieldsResponse>>("searchCardWizPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.CdmSelectFieldsResponse>> GetCdmSelectFields(ParameterService.CdmSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.CdmSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.CdmSelectFieldsResponse>>("getCdmSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.CdmPagedListSelectFieldsResponse>> GetCdmPagedListSelectFields(ParameterService.CdmPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.CdmPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.CdmPagedListSelectFieldsResponse>>("getCdmPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.CdmSearchPagedSelectFieldsResponse>> SearchCdmPagedSelectFields(ParameterService.CdmSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.CdmSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.CdmSearchPagedSelectFieldsResponse>>("searchCdmPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.CdmCommonSelectFieldsResponse>> GetCdmCommonSelectFields(ParameterService.CdmCommonSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.CdmCommonSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.CdmCommonSelectFieldsResponse>>("getCdmCommonSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.CheckOrderDefaultSelectFieldsResponse>> GetCheckOrderDefaultSelectFields(ParameterService.CheckOrderDefaultSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.CheckOrderDefaultSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.CheckOrderDefaultSelectFieldsResponse>>("getCheckOrderDefaultSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.CheckOrderDefaultPagedListSelectFieldsResponse>> GetCheckOrderDefaultPagedListSelectFields(ParameterService.CheckOrderDefaultPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.CheckOrderDefaultPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.CheckOrderDefaultPagedListSelectFieldsResponse>>("getCheckOrderDefaultPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.CheckOrderDefaultSearchPagedSelectFieldsResponse>> SearchCheckOrderDefaultPagedSelectFields(ParameterService.CheckOrderDefaultSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.CheckOrderDefaultSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.CheckOrderDefaultSearchPagedSelectFieldsResponse>>("searchCheckOrderDefaultPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.CollateralTypeSelectFieldsResponse>> GetCollateralTypeSelectFields(ParameterService.CollateralTypeSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.CollateralTypeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.CollateralTypeSelectFieldsResponse>>("getCollateralTypeSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.CollateralTypePagedListSelectFieldsResponse>> GetCollateralTypePagedListSelectFields(ParameterService.CollateralTypePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.CollateralTypePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.CollateralTypePagedListSelectFieldsResponse>>("getCollateralTypePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.CollateralTypeSearchPagedSelectFieldsResponse>> SearchCollateralTypePagedSelectFields(ParameterService.CollateralTypeSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.CollateralTypeSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.CollateralTypeSearchPagedSelectFieldsResponse>>("searchCollateralTypePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.CollatrlTrackingTypeSelectFieldsResponse>> GetCollatrlTrackingTypeSelectFields(ParameterService.CollatrlTrackingTypeSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.CollatrlTrackingTypeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.CollatrlTrackingTypeSelectFieldsResponse>>("getCollatrlTrackingTypeSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.CollatrlTrackingTypePagedListSelectFieldsResponse>> GetCollatrlTrackingTypePagedListSelectFields(ParameterService.CollatrlTrackingTypePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.CollatrlTrackingTypePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.CollatrlTrackingTypePagedListSelectFieldsResponse>>("getCollatrlTrackingTypePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.CollatrlTrackingTypeSearchPagedSelectFieldsResponse>> SearchCollatrlTrackingTypePagedSelectFields(ParameterService.CollatrlTrackingTypeSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.CollatrlTrackingTypeSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.CollatrlTrackingTypeSearchPagedSelectFieldsResponse>>("searchCollatrlTrackingTypePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.CommentSelectFieldsResponse>> GetCommentSelectFields(ParameterService.CommentSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.CommentSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.CommentSelectFieldsResponse>>("getCommentSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.CommentPagedListSelectFieldsResponse>> GetCommentPagedListSelectFields(ParameterService.CommentPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.CommentPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.CommentPagedListSelectFieldsResponse>>("getCommentPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.CommentSearchPagedSelectFieldsResponse>> SearchCommentPagedSelectFields(ParameterService.CommentSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.CommentSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.CommentSearchPagedSelectFieldsResponse>>("searchCommentPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.ConsoleFmSelectFieldsResponse>> GetConsoleFmSelectFields(ParameterService.ConsoleFmSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.ConsoleFmSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.ConsoleFmSelectFieldsResponse>>("getConsoleFmSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.CpLetterSelectFieldsResponse>> GetCpLetterSelectFields(ParameterService.CpLetterSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.CpLetterSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.CpLetterSelectFieldsResponse>>("getCpLetterSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.CpLetterPagedListSelectFieldsResponse>> GetCpLetterPagedListSelectFields(ParameterService.CpLetterPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.CpLetterPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.CpLetterPagedListSelectFieldsResponse>>("getCpLetterPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.CpLetterSearchPagedSelectFieldsResponse>> SearchCpLetterPagedSelectFields(ParameterService.CpLetterSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.CpLetterSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.CpLetterSearchPagedSelectFieldsResponse>>("searchCpLetterPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.CpWorkCardSelectFieldsResponse>> GetCpWorkCardSelectFields(ParameterService.CpWorkCardSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.CpWorkCardSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.CpWorkCardSelectFieldsResponse>>("getCpWorkCardSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.CreditReportSelectFieldsResponse>> GetCreditReportSelectFields(ParameterService.CreditReportSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.CreditReportSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.CreditReportSelectFieldsResponse>>("getCreditReportSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.CrsSelectFieldsResponse>> GetCrsSelectFields(ParameterService.CrsSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.CrsSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.CrsSelectFieldsResponse>>("getCrsSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.CurrencyCtrlSelectFieldsResponse>> GetCurrencyCtrlSelectFields(ParameterService.CurrencyCtrlSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.CurrencyCtrlSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.CurrencyCtrlSelectFieldsResponse>>("getCurrencyCtrlSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.DailyPostSelectFieldsResponse>> GetDailyPostSelectFields(ParameterService.DailyPostSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.DailyPostSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.DailyPostSelectFieldsResponse>>("getDailyPostSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.DealerStatementSelectFieldsResponse>> GetDealerStatementSelectFields(ParameterService.DealerStatementSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.DealerStatementSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.DealerStatementSelectFieldsResponse>>("getDealerStatementSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.DebtRatioSelectFieldsResponse>> GetDebtRatioSelectFields(ParameterService.DebtRatioSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.DebtRatioSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.DebtRatioSelectFieldsResponse>>("getDebtRatioSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.DebtRatioPagedListSelectFieldsResponse>> GetDebtRatioPagedListSelectFields(ParameterService.DebtRatioPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.DebtRatioPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.DebtRatioPagedListSelectFieldsResponse>>("getDebtRatioPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.DebtRatioSearchPagedSelectFieldsResponse>> SearchDebtRatioPagedSelectFields(ParameterService.DebtRatioSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.DebtRatioSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.DebtRatioSearchPagedSelectFieldsResponse>>("searchDebtRatioPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.DisclosureSelectFieldsResponse>> GetDisclosureSelectFields(ParameterService.DisclosureSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.DisclosureSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.DisclosureSelectFieldsResponse>>("getDisclosureSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.DivIndexLocalSelectFieldsResponse>> GetDivIndexLocalSelectFields(ParameterService.DivIndexLocalSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.DivIndexLocalSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.DivIndexLocalSelectFieldsResponse>>("getDivIndexLocalSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.DivIndexLocalPagedListSelectFieldsResponse>> GetDivIndexLocalPagedListSelectFields(ParameterService.DivIndexLocalPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.DivIndexLocalPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.DivIndexLocalPagedListSelectFieldsResponse>>("getDivIndexLocalPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.DivIndexLocalSearchPagedSelectFieldsResponse>> SearchDivIndexLocalPagedSelectFields(ParameterService.DivIndexLocalSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.DivIndexLocalSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.DivIndexLocalSearchPagedSelectFieldsResponse>>("searchDivIndexLocalPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.DivTableSelectFieldsResponse>> GetDivTableSelectFields(ParameterService.DivTableSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.DivTableSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.DivTableSelectFieldsResponse>>("getDivTableSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.DivTablePagedListSelectFieldsResponse>> GetDivTablePagedListSelectFields(ParameterService.DivTablePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.DivTablePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.DivTablePagedListSelectFieldsResponse>>("getDivTablePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.DivTableSearchPagedSelectFieldsResponse>> SearchDivTablePagedSelectFields(ParameterService.DivTableSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.DivTableSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.DivTableSearchPagedSelectFieldsResponse>>("searchDivTablePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.DocExcpNoticeSelectFieldsResponse>> GetDocExcpNoticeSelectFields(ParameterService.DocExcpNoticeSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.DocExcpNoticeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.DocExcpNoticeSelectFieldsResponse>>("getDocExcpNoticeSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.DocExcpNoticePagedListSelectFieldsResponse>> GetDocExcpNoticePagedListSelectFields(ParameterService.DocExcpNoticePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.DocExcpNoticePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.DocExcpNoticePagedListSelectFieldsResponse>>("getDocExcpNoticePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.DocExcpNoticeSearchPagedSelectFieldsResponse>> SearchDocExcpNoticePagedSelectFields(ParameterService.DocExcpNoticeSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.DocExcpNoticeSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.DocExcpNoticeSearchPagedSelectFieldsResponse>>("searchDocExcpNoticePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.DocTypeDefaultSelectFieldsResponse>> GetDocTypeDefaultSelectFields(ParameterService.DocTypeDefaultSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.DocTypeDefaultSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.DocTypeDefaultSelectFieldsResponse>>("getDocTypeDefaultSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.DocTypeDefaultPagedListSelectFieldsResponse>> GetDocTypeDefaultPagedListSelectFields(ParameterService.DocTypeDefaultPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.DocTypeDefaultPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.DocTypeDefaultPagedListSelectFieldsResponse>>("getDocTypeDefaultPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.DocTypeDefaultSearchPagedSelectFieldsResponse>> SearchDocTypeDefaultPagedSelectFields(ParameterService.DocTypeDefaultSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.DocTypeDefaultSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.DocTypeDefaultSearchPagedSelectFieldsResponse>>("searchDocTypeDefaultPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.DocumentNumberSelectFieldsResponse>> GetDocumentNumberSelectFields(ParameterService.DocumentNumberSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.DocumentNumberSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.DocumentNumberSelectFieldsResponse>>("getDocumentNumberSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.EpisysDbExtractSelectFieldsResponse>> GetEpisysDbExtractSelectFields(ParameterService.EpisysDbExtractSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.EpisysDbExtractSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.EpisysDbExtractSelectFieldsResponse>>("getEpisysDbExtractSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.EscrowAnalysisSelectFieldsResponse>> GetEscrowAnalysisSelectFields(ParameterService.EscrowAnalysisSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.EscrowAnalysisSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.EscrowAnalysisSelectFieldsResponse>>("getEscrowAnalysisSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.EscrowTypeSelectFieldsResponse>> GetEscrowTypeSelectFields(ParameterService.EscrowTypeSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.EscrowTypeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.EscrowTypeSelectFieldsResponse>>("getEscrowTypeSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.EscrowTypePagedListSelectFieldsResponse>> GetEscrowTypePagedListSelectFields(ParameterService.EscrowTypePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.EscrowTypePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.EscrowTypePagedListSelectFieldsResponse>>("getEscrowTypePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.EscrowTypeSearchPagedSelectFieldsResponse>> SearchEscrowTypePagedSelectFields(ParameterService.EscrowTypeSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.EscrowTypeSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.EscrowTypeSearchPagedSelectFieldsResponse>>("searchEscrowTypePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.ExtLoanSelectFieldsResponse>> GetExtLoanSelectFields(ParameterService.ExtLoanSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.ExtLoanSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.ExtLoanSelectFieldsResponse>>("getExtLoanSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.ExtLoanPagedListSelectFieldsResponse>> GetExtLoanPagedListSelectFields(ParameterService.ExtLoanPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.ExtLoanPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.ExtLoanPagedListSelectFieldsResponse>>("getExtLoanPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.ExtLoanSearchPagedSelectFieldsResponse>> SearchExtLoanPagedSelectFields(ParameterService.ExtLoanSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.ExtLoanSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.ExtLoanSearchPagedSelectFieldsResponse>>("searchExtLoanPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GlCategorySelectFieldsResponse>> GetGlCategorySelectFields(ParameterService.GlCategorySelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.GlCategorySelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GlCategorySelectFieldsResponse>>("getGlCategorySelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GlCategoryPagedListSelectFieldsResponse>> GetGlCategoryPagedListSelectFields(ParameterService.GlCategoryPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.GlCategoryPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GlCategoryPagedListSelectFieldsResponse>>("getGlCategoryPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GlCategorySearchPagedSelectFieldsResponse>> SearchGlCategoryPagedSelectFields(ParameterService.GlCategorySearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.GlCategorySearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GlCategorySearchPagedSelectFieldsResponse>>("searchGlCategoryPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GlCodeSelectFieldsResponse>> GetGlCodeSelectFields(ParameterService.GlCodeSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.GlCodeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GlCodeSelectFieldsResponse>>("getGlCodeSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GlCodePagedListSelectFieldsResponse>> GetGlCodePagedListSelectFields(ParameterService.GlCodePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.GlCodePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GlCodePagedListSelectFieldsResponse>>("getGlCodePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GlCodeSearchPagedSelectFieldsResponse>> SearchGlCodePagedSelectFields(ParameterService.GlCodeSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.GlCodeSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GlCodeSearchPagedSelectFieldsResponse>>("searchGlCodePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GlTableSelectFieldsResponse>> GetGlTableSelectFields(ParameterService.GlTableSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.GlTableSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GlTableSelectFieldsResponse>>("getGlTableSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GlTablePagedListSelectFieldsResponse>> GetGlTablePagedListSelectFields(ParameterService.GlTablePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.GlTablePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GlTablePagedListSelectFieldsResponse>>("getGlTablePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GlTableSearchPagedSelectFieldsResponse>> SearchGlTablePagedSelectFields(ParameterService.GlTableSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.GlTableSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GlTableSearchPagedSelectFieldsResponse>>("searchGlTablePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GlTrackingTypeSelectFieldsResponse>> GetGlTrackingTypeSelectFields(ParameterService.GlTrackingTypeSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.GlTrackingTypeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GlTrackingTypeSelectFieldsResponse>>("getGlTrackingTypeSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GlTrackingTypePagedListSelectFieldsResponse>> GetGlTrackingTypePagedListSelectFields(ParameterService.GlTrackingTypePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.GlTrackingTypePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GlTrackingTypePagedListSelectFieldsResponse>>("getGlTrackingTypePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GlTrackingTypeSearchPagedSelectFieldsResponse>> SearchGlTrackingTypePagedSelectFields(ParameterService.GlTrackingTypeSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.GlTrackingTypeSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GlTrackingTypeSearchPagedSelectFieldsResponse>>("searchGlTrackingTypePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GlxLateSelectFieldsResponse>> GetGlxLateSelectFields(ParameterService.GlxLateSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.GlxLateSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GlxLateSelectFieldsResponse>>("getGlxLateSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GlxLatePagedListSelectFieldsResponse>> GetGlxLatePagedListSelectFields(ParameterService.GlxLatePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.GlxLatePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GlxLatePagedListSelectFieldsResponse>>("getGlxLatePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GlxLateSearchPagedSelectFieldsResponse>> SearchGlxLatePagedSelectFields(ParameterService.GlxLateSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.GlxLateSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.GlxLateSearchPagedSelectFieldsResponse>>("searchGlxLatePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.IdentIdTypeDescSelectFieldsResponse>> GetIdentIdTypeDescSelectFields(ParameterService.IdentIdTypeDescSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.IdentIdTypeDescSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.IdentIdTypeDescSelectFieldsResponse>>("getIdentIdTypeDescSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.ImagingSelectFieldsResponse>> GetImagingSelectFields(ParameterService.ImagingSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.ImagingSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.ImagingSelectFieldsResponse>>("getImagingSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.InqDefinitionSelectFieldsResponse>> GetInqDefinitionSelectFields(ParameterService.InqDefinitionSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.InqDefinitionSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.InqDefinitionSelectFieldsResponse>>("getInqDefinitionSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.InqDefinitionPagedListSelectFieldsResponse>> GetInqDefinitionPagedListSelectFields(ParameterService.InqDefinitionPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.InqDefinitionPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.InqDefinitionPagedListSelectFieldsResponse>>("getInqDefinitionPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.InqDefinitionSearchPagedSelectFieldsResponse>> SearchInqDefinitionPagedSelectFields(ParameterService.InqDefinitionSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.InqDefinitionSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.InqDefinitionSearchPagedSelectFieldsResponse>>("searchInqDefinitionPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.InsTableSelectFieldsResponse>> GetInsTableSelectFields(ParameterService.InsTableSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.InsTableSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.InsTableSelectFieldsResponse>>("getInsTableSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.InsTablePagedListSelectFieldsResponse>> GetInsTablePagedListSelectFields(ParameterService.InsTablePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.InsTablePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.InsTablePagedListSelectFieldsResponse>>("getInsTablePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.InsTableSearchPagedSelectFieldsResponse>> SearchInsTablePagedSelectFields(ParameterService.InsTableSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.InsTableSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.InsTableSearchPagedSelectFieldsResponse>>("searchInsTablePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.InsTypeSelectFieldsResponse>> GetInsTypeSelectFields(ParameterService.InsTypeSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.InsTypeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.InsTypeSelectFieldsResponse>>("getInsTypeSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.InsTypePagedListSelectFieldsResponse>> GetInsTypePagedListSelectFields(ParameterService.InsTypePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.InsTypePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.InsTypePagedListSelectFieldsResponse>>("getInsTypePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.InsTypeSearchPagedSelectFieldsResponse>> SearchInsTypePagedSelectFields(ParameterService.InsTypeSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.InsTypeSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.InsTypeSearchPagedSelectFieldsResponse>>("searchInsTypePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.InstitutionSelectFieldsResponse>> GetInstitutionSelectFields(ParameterService.InstitutionSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.InstitutionSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.InstitutionSelectFieldsResponse>>("getInstitutionSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.InstitutionPagedListSelectFieldsResponse>> GetInstitutionPagedListSelectFields(ParameterService.InstitutionPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.InstitutionPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.InstitutionPagedListSelectFieldsResponse>>("getInstitutionPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.InstitutionSearchPagedSelectFieldsResponse>> SearchInstitutionPagedSelectFields(ParameterService.InstitutionSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.InstitutionSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.InstitutionSearchPagedSelectFieldsResponse>>("searchInstitutionPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.IntIndexSelectFieldsResponse>> GetIntIndexSelectFields(ParameterService.IntIndexSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.IntIndexSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.IntIndexSelectFieldsResponse>>("getIntIndexSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.IntIndexPagedListSelectFieldsResponse>> GetIntIndexPagedListSelectFields(ParameterService.IntIndexPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.IntIndexPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.IntIndexPagedListSelectFieldsResponse>>("getIntIndexPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.IntIndexSearchPagedSelectFieldsResponse>> SearchIntIndexPagedSelectFields(ParameterService.IntIndexSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.IntIndexSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.IntIndexSearchPagedSelectFieldsResponse>>("searchIntIndexPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.IntTypeSelectFieldsResponse>> GetIntTypeSelectFields(ParameterService.IntTypeSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.IntTypeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.IntTypeSelectFieldsResponse>>("getIntTypeSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.IntTypePagedListSelectFieldsResponse>> GetIntTypePagedListSelectFields(ParameterService.IntTypePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.IntTypePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.IntTypePagedListSelectFieldsResponse>>("getIntTypePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.IntTypeSearchPagedSelectFieldsResponse>> SearchIntTypePagedSelectFields(ParameterService.IntTypeSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.IntTypeSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.IntTypeSearchPagedSelectFieldsResponse>>("searchIntTypePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.InventoryCopiedFldsSelectFieldsResponse>> GetInventoryCopiedFldsSelectFields(ParameterService.InventoryCopiedFldsSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.InventoryCopiedFldsSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.InventoryCopiedFldsSelectFieldsResponse>>("getInventoryCopiedFldsSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.InventoryCopiedFldsPagedListSelectFieldsResponse>> GetInventoryCopiedFldsPagedListSelectFields(ParameterService.InventoryCopiedFldsPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.InventoryCopiedFldsPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.InventoryCopiedFldsPagedListSelectFieldsResponse>>("getInventoryCopiedFldsPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.InventoryCopiedFldsSearchPagedSelectFieldsResponse>> SearchInventoryCopiedFldsPagedSelectFields(ParameterService.InventoryCopiedFldsSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.InventoryCopiedFldsSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.InventoryCopiedFldsSearchPagedSelectFieldsResponse>>("searchInventoryCopiedFldsPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.InventoryDefaultSelectFieldsResponse>> GetInventoryDefaultSelectFields(ParameterService.InventoryDefaultSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.InventoryDefaultSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.InventoryDefaultSelectFieldsResponse>>("getInventoryDefaultSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.InventoryDefaultPagedListSelectFieldsResponse>> GetInventoryDefaultPagedListSelectFields(ParameterService.InventoryDefaultPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.InventoryDefaultPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.InventoryDefaultPagedListSelectFieldsResponse>>("getInventoryDefaultPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.InventoryDefaultSearchPagedSelectFieldsResponse>> SearchInventoryDefaultPagedSelectFields(ParameterService.InventoryDefaultSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.InventoryDefaultSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.InventoryDefaultSearchPagedSelectFieldsResponse>>("searchInventoryDefaultPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.InventoryFieldNameSelectFieldsResponse>> GetInventoryFieldNameSelectFields(ParameterService.InventoryFieldNameSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.InventoryFieldNameSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.InventoryFieldNameSelectFieldsResponse>>("getInventoryFieldNameSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.InventoryFieldNamePagedListSelectFieldsResponse>> GetInventoryFieldNamePagedListSelectFields(ParameterService.InventoryFieldNamePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.InventoryFieldNamePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.InventoryFieldNamePagedListSelectFieldsResponse>>("getInventoryFieldNamePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.InventoryFieldNameSearchPagedSelectFieldsResponse>> SearchInventoryFieldNamePagedSelectFields(ParameterService.InventoryFieldNameSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.InventoryFieldNameSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.InventoryFieldNameSearchPagedSelectFieldsResponse>>("searchInventoryFieldNamePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.InventoryGeneralSelectFieldsResponse>> GetInventoryGeneralSelectFields(ParameterService.InventoryGeneralSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.InventoryGeneralSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.InventoryGeneralSelectFieldsResponse>>("getInventoryGeneralSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.InventoryTypeSelectFieldsResponse>> GetInventoryTypeSelectFields(ParameterService.InventoryTypeSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.InventoryTypeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.InventoryTypeSelectFieldsResponse>>("getInventoryTypeSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.InventoryTypePagedListSelectFieldsResponse>> GetInventoryTypePagedListSelectFields(ParameterService.InventoryTypePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.InventoryTypePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.InventoryTypePagedListSelectFieldsResponse>>("getInventoryTypePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.InventoryTypeSearchPagedSelectFieldsResponse>> SearchInventoryTypePagedSelectFields(ParameterService.InventoryTypeSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.InventoryTypeSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.InventoryTypeSearchPagedSelectFieldsResponse>>("searchInventoryTypePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.IrsBkupWithholdSelectFieldsResponse>> GetIrsBkupWithholdSelectFields(ParameterService.IrsBkupWithholdSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.IrsBkupWithholdSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.IrsBkupWithholdSelectFieldsResponse>>("getIrsBkupWithholdSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.IrsContriLimitSelectFieldsResponse>> GetIrsContriLimitSelectFields(ParameterService.IrsContriLimitSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.IrsContriLimitSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.IrsContriLimitSelectFieldsResponse>>("getIrsContriLimitSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.ItcFraudSelectFieldsResponse>> GetItcFraudSelectFields(ParameterService.ItcFraudSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.ItcFraudSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.ItcFraudSelectFieldsResponse>>("getItcFraudSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.ItcFraudPagedListSelectFieldsResponse>> GetItcFraudPagedListSelectFields(ParameterService.ItcFraudPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.ItcFraudPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.ItcFraudPagedListSelectFieldsResponse>>("getItcFraudPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.ItcFraudSearchPagedSelectFieldsResponse>> SearchItcFraudPagedSelectFields(ParameterService.ItcFraudSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.ItcFraudSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.ItcFraudSearchPagedSelectFieldsResponse>>("searchItcFraudPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.ItcInstallationSelectFieldsResponse>> GetItcInstallationSelectFields(ParameterService.ItcInstallationSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.ItcInstallationSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.ItcInstallationSelectFieldsResponse>>("getItcInstallationSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.ItcInstallationPagedListSelectFieldsResponse>> GetItcInstallationPagedListSelectFields(ParameterService.ItcInstallationPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.ItcInstallationPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.ItcInstallationPagedListSelectFieldsResponse>>("getItcInstallationPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.ItcInstallationSearchPagedSelectFieldsResponse>> SearchItcInstallationPagedSelectFields(ParameterService.ItcInstallationSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.ItcInstallationSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.ItcInstallationSearchPagedSelectFieldsResponse>>("searchItcInstallationPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LateChgSelectFieldsResponse>> GetLateChgSelectFields(ParameterService.LateChgSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.LateChgSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.LateChgSelectFieldsResponse>>("getLateChgSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LateChgPagedListSelectFieldsResponse>> GetLateChgPagedListSelectFields(ParameterService.LateChgPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.LateChgPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.LateChgPagedListSelectFieldsResponse>>("getLateChgPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LateChgSearchPagedSelectFieldsResponse>> SearchLateChgPagedSelectFields(ParameterService.LateChgSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.LateChgSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.LateChgSearchPagedSelectFieldsResponse>>("searchLateChgPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LnSegmentDefaultSelectFieldsResponse>> GetLnSegmentDefaultSelectFields(ParameterService.LnSegmentDefaultSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.LnSegmentDefaultSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.LnSegmentDefaultSelectFieldsResponse>>("getLnSegmentDefaultSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LnSegmentDefaultPagedListSelectFieldsResponse>> GetLnSegmentDefaultPagedListSelectFields(ParameterService.LnSegmentDefaultPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.LnSegmentDefaultPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.LnSegmentDefaultPagedListSelectFieldsResponse>>("getLnSegmentDefaultPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LnSegmentDefaultSearchPagedSelectFieldsResponse>> SearchLnSegmentDefaultPagedSelectFields(ParameterService.LnSegmentDefaultSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.LnSegmentDefaultSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.LnSegmentDefaultSearchPagedSelectFieldsResponse>>("searchLnSegmentDefaultPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanAppCopiedFldsSelectFieldsResponse>> GetLoanAppCopiedFldsSelectFields(ParameterService.LoanAppCopiedFldsSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.LoanAppCopiedFldsSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanAppCopiedFldsSelectFieldsResponse>>("getLoanAppCopiedFldsSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanAppCopiedFldsPagedListSelectFieldsResponse>> GetLoanAppCopiedFldsPagedListSelectFields(ParameterService.LoanAppCopiedFldsPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.LoanAppCopiedFldsPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanAppCopiedFldsPagedListSelectFieldsResponse>>("getLoanAppCopiedFldsPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanAppCopiedFldsSearchPagedSelectFieldsResponse>> SearchLoanAppCopiedFldsPagedSelectFields(ParameterService.LoanAppCopiedFldsSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.LoanAppCopiedFldsSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanAppCopiedFldsSearchPagedSelectFieldsResponse>>("searchLoanAppCopiedFldsPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanAppDefaultSelectFieldsResponse>> GetLoanAppDefaultSelectFields(ParameterService.LoanAppDefaultSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.LoanAppDefaultSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanAppDefaultSelectFieldsResponse>>("getLoanAppDefaultSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanAppDefaultPagedListSelectFieldsResponse>> GetLoanAppDefaultPagedListSelectFields(ParameterService.LoanAppDefaultPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.LoanAppDefaultPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanAppDefaultPagedListSelectFieldsResponse>>("getLoanAppDefaultPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanAppDefaultSearchPagedSelectFieldsResponse>> SearchLoanAppDefaultPagedSelectFields(ParameterService.LoanAppDefaultSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.LoanAppDefaultSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanAppDefaultSearchPagedSelectFieldsResponse>>("searchLoanAppDefaultPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanAppDenialSelectFieldsResponse>> GetLoanAppDenialSelectFields(ParameterService.LoanAppDenialSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.LoanAppDenialSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanAppDenialSelectFieldsResponse>>("getLoanAppDenialSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanAppDenialPagedListSelectFieldsResponse>> GetLoanAppDenialPagedListSelectFields(ParameterService.LoanAppDenialPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.LoanAppDenialPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanAppDenialPagedListSelectFieldsResponse>>("getLoanAppDenialPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanAppDenialSearchPagedSelectFieldsResponse>> SearchLoanAppDenialPagedSelectFields(ParameterService.LoanAppDenialSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.LoanAppDenialSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanAppDenialSearchPagedSelectFieldsResponse>>("searchLoanAppDenialPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanAppFieldNameSelectFieldsResponse>> GetLoanAppFieldNameSelectFields(ParameterService.LoanAppFieldNameSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.LoanAppFieldNameSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanAppFieldNameSelectFieldsResponse>>("getLoanAppFieldNameSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanAppFieldNamePagedListSelectFieldsResponse>> GetLoanAppFieldNamePagedListSelectFields(ParameterService.LoanAppFieldNamePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.LoanAppFieldNamePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanAppFieldNamePagedListSelectFieldsResponse>>("getLoanAppFieldNamePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanAppFieldNameSearchPagedSelectFieldsResponse>> SearchLoanAppFieldNamePagedSelectFields(ParameterService.LoanAppFieldNameSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.LoanAppFieldNameSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanAppFieldNameSearchPagedSelectFieldsResponse>>("searchLoanAppFieldNamePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanAppFormPktSelectFieldsResponse>> GetLoanAppFormPktSelectFields(ParameterService.LoanAppFormPktSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.LoanAppFormPktSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanAppFormPktSelectFieldsResponse>>("getLoanAppFormPktSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanAppFormPktPagedListSelectFieldsResponse>> GetLoanAppFormPktPagedListSelectFields(ParameterService.LoanAppFormPktPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.LoanAppFormPktPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanAppFormPktPagedListSelectFieldsResponse>>("getLoanAppFormPktPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanAppFormPktSearchPagedSelectFieldsResponse>> SearchLoanAppFormPktPagedSelectFields(ParameterService.LoanAppFormPktSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.LoanAppFormPktSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanAppFormPktSearchPagedSelectFieldsResponse>>("searchLoanAppFormPktPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanAppMiscSelectFieldsResponse>> GetLoanAppMiscSelectFields(ParameterService.LoanAppMiscSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.LoanAppMiscSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanAppMiscSelectFieldsResponse>>("getLoanAppMiscSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanAppPrintAppSelectFieldsResponse>> GetLoanAppPrintAppSelectFields(ParameterService.LoanAppPrintAppSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.LoanAppPrintAppSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanAppPrintAppSelectFieldsResponse>>("getLoanAppPrintAppSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanAppPrintAppPagedListSelectFieldsResponse>> GetLoanAppPrintAppPagedListSelectFields(ParameterService.LoanAppPrintAppPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.LoanAppPrintAppPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanAppPrintAppPagedListSelectFieldsResponse>>("getLoanAppPrintAppPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanAppPrintAppSearchPagedSelectFieldsResponse>> SearchLoanAppPrintAppPagedSelectFields(ParameterService.LoanAppPrintAppSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.LoanAppPrintAppSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanAppPrintAppSearchPagedSelectFieldsResponse>>("searchLoanAppPrintAppPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanAppReusedFldsSelectFieldsResponse>> GetLoanAppReusedFldsSelectFields(ParameterService.LoanAppReusedFldsSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.LoanAppReusedFldsSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanAppReusedFldsSelectFieldsResponse>>("getLoanAppReusedFldsSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanAppReusedFldsPagedListSelectFieldsResponse>> GetLoanAppReusedFldsPagedListSelectFields(ParameterService.LoanAppReusedFldsPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.LoanAppReusedFldsPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanAppReusedFldsPagedListSelectFieldsResponse>>("getLoanAppReusedFldsPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanAppReusedFldsSearchPagedSelectFieldsResponse>> SearchLoanAppReusedFldsPagedSelectFields(ParameterService.LoanAppReusedFldsSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.LoanAppReusedFldsSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanAppReusedFldsSearchPagedSelectFieldsResponse>>("searchLoanAppReusedFldsPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanAppVerFormSelectFieldsResponse>> GetLoanAppVerFormSelectFields(ParameterService.LoanAppVerFormSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.LoanAppVerFormSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanAppVerFormSelectFieldsResponse>>("getLoanAppVerFormSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanAppVerFormPagedListSelectFieldsResponse>> GetLoanAppVerFormPagedListSelectFields(ParameterService.LoanAppVerFormPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.LoanAppVerFormPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanAppVerFormPagedListSelectFieldsResponse>>("getLoanAppVerFormPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanAppVerFormSearchPagedSelectFieldsResponse>> SearchLoanAppVerFormPagedSelectFields(ParameterService.LoanAppVerFormSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.LoanAppVerFormSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanAppVerFormSearchPagedSelectFieldsResponse>>("searchLoanAppVerFormPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanAppViewAppSelectFieldsResponse>> GetLoanAppViewAppSelectFields(ParameterService.LoanAppViewAppSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.LoanAppViewAppSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanAppViewAppSelectFieldsResponse>>("getLoanAppViewAppSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanAppViewAppPagedListSelectFieldsResponse>> GetLoanAppViewAppPagedListSelectFields(ParameterService.LoanAppViewAppPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.LoanAppViewAppPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanAppViewAppPagedListSelectFieldsResponse>>("getLoanAppViewAppPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanAppViewAppSearchPagedSelectFieldsResponse>> SearchLoanAppViewAppPagedSelectFields(ParameterService.LoanAppViewAppSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.LoanAppViewAppSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanAppViewAppSearchPagedSelectFieldsResponse>>("searchLoanAppViewAppPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanAppWorkFlowSelectFieldsResponse>> GetLoanAppWorkFlowSelectFields(ParameterService.LoanAppWorkFlowSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.LoanAppWorkFlowSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanAppWorkFlowSelectFieldsResponse>>("getLoanAppWorkFlowSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanAppWorkFlowPagedListSelectFieldsResponse>> GetLoanAppWorkFlowPagedListSelectFields(ParameterService.LoanAppWorkFlowPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.LoanAppWorkFlowPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanAppWorkFlowPagedListSelectFieldsResponse>>("getLoanAppWorkFlowPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanAppWorkFlowSearchPagedSelectFieldsResponse>> SearchLoanAppWorkFlowPagedSelectFields(ParameterService.LoanAppWorkFlowSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.LoanAppWorkFlowSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanAppWorkFlowSearchPagedSelectFieldsResponse>>("searchLoanAppWorkFlowPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanDefaultSelectFieldsResponse>> GetLoanDefaultSelectFields(ParameterService.LoanDefaultSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.LoanDefaultSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanDefaultSelectFieldsResponse>>("getLoanDefaultSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanDefaultPagedListSelectFieldsResponse>> GetLoanDefaultPagedListSelectFields(ParameterService.LoanDefaultPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.LoanDefaultPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanDefaultPagedListSelectFieldsResponse>>("getLoanDefaultPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanDefaultSearchPagedSelectFieldsResponse>> SearchLoanDefaultPagedSelectFields(ParameterService.LoanDefaultSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.LoanDefaultSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanDefaultSearchPagedSelectFieldsResponse>>("searchLoanDefaultPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanFieldNameSelectFieldsResponse>> GetLoanFieldNameSelectFields(ParameterService.LoanFieldNameSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.LoanFieldNameSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanFieldNameSelectFieldsResponse>>("getLoanFieldNameSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanFieldNamePagedListSelectFieldsResponse>> GetLoanFieldNamePagedListSelectFields(ParameterService.LoanFieldNamePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.LoanFieldNamePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanFieldNamePagedListSelectFieldsResponse>>("getLoanFieldNamePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanFieldNameSearchPagedSelectFieldsResponse>> SearchLoanFieldNamePagedSelectFields(ParameterService.LoanFieldNameSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.LoanFieldNameSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanFieldNameSearchPagedSelectFieldsResponse>>("searchLoanFieldNamePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanTypeIdRangeSelectFieldsResponse>> GetLoanTypeIdRangeSelectFields(ParameterService.LoanTypeIdRangeSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.LoanTypeIdRangeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanTypeIdRangeSelectFieldsResponse>>("getLoanTypeIdRangeSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanTypeIdRangePagedListSelectFieldsResponse>> GetLoanTypeIdRangePagedListSelectFields(ParameterService.LoanTypeIdRangePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.LoanTypeIdRangePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanTypeIdRangePagedListSelectFieldsResponse>>("getLoanTypeIdRangePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanTypeIdRangeSearchPagedSelectFieldsResponse>> SearchLoanTypeIdRangePagedSelectFields(ParameterService.LoanTypeIdRangeSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.LoanTypeIdRangeSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanTypeIdRangeSearchPagedSelectFieldsResponse>>("searchLoanTypeIdRangePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LookupTypeNameSelectFieldsResponse>> GetLookupTypeNameSelectFields(ParameterService.LookupTypeNameSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.LookupTypeNameSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.LookupTypeNameSelectFieldsResponse>>("getLookupTypeNameSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LookupTypeNamePagedListSelectFieldsResponse>> GetLookupTypeNamePagedListSelectFields(ParameterService.LookupTypeNamePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.LookupTypeNamePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.LookupTypeNamePagedListSelectFieldsResponse>>("getLookupTypeNamePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LookupTypeNameSearchPagedSelectFieldsResponse>> SearchLookupTypeNamePagedSelectFields(ParameterService.LookupTypeNameSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.LookupTypeNameSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.LookupTypeNameSearchPagedSelectFieldsResponse>>("searchLookupTypeNamePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.MiscSelectFieldsResponse>> GetMiscSelectFields(ParameterService.MiscSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.MiscSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.MiscSelectFieldsResponse>>("getMiscSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.MiscPmtSelectFieldsResponse>> GetMiscPmtSelectFields(ParameterService.MiscPmtSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.MiscPmtSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.MiscPmtSelectFieldsResponse>>("getMiscPmtSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.MoProductSelectFieldsResponse>> GetMoProductSelectFields(ParameterService.MoProductSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.MoProductSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.MoProductSelectFieldsResponse>>("getMoProductSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.NameFieldNameSelectFieldsResponse>> GetNameFieldNameSelectFields(ParameterService.NameFieldNameSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.NameFieldNameSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.NameFieldNameSelectFieldsResponse>>("getNameFieldNameSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.NameFieldNamePagedListSelectFieldsResponse>> GetNameFieldNamePagedListSelectFields(ParameterService.NameFieldNamePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.NameFieldNamePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.NameFieldNamePagedListSelectFieldsResponse>>("getNameFieldNamePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.NameFieldNameSearchPagedSelectFieldsResponse>> SearchNameFieldNamePagedSelectFields(ParameterService.NameFieldNameSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.NameFieldNameSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.NameFieldNameSearchPagedSelectFieldsResponse>>("searchNameFieldNamePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.Ncua5300SelectFieldsResponse>> GetNcua5300SelectFields(ParameterService.Ncua5300SelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.Ncua5300SelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.Ncua5300SelectFieldsResponse>>("getNcua5300SelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.NonRegCcSelectFieldsResponse>> GetNonRegCcSelectFields(ParameterService.NonRegCcSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.NonRegCcSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.NonRegCcSelectFieldsResponse>>("getNonRegCcSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.NoticeSelectFieldsResponse>> GetNoticeSelectFields(ParameterService.NoticeSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.NoticeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.NoticeSelectFieldsResponse>>("getNoticeSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.NoticePagedListSelectFieldsResponse>> GetNoticePagedListSelectFields(ParameterService.NoticePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.NoticePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.NoticePagedListSelectFieldsResponse>>("getNoticePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.NoticeSearchPagedSelectFieldsResponse>> SearchNoticePagedSelectFields(ParameterService.NoticeSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.NoticeSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.NoticeSearchPagedSelectFieldsResponse>>("searchNoticePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.OnlineBlockSelectFieldsResponse>> GetOnlineBlockSelectFields(ParameterService.OnlineBlockSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.OnlineBlockSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.OnlineBlockSelectFieldsResponse>>("getOnlineBlockSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.OnlineBlockPagedListSelectFieldsResponse>> GetOnlineBlockPagedListSelectFields(ParameterService.OnlineBlockPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.OnlineBlockPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.OnlineBlockPagedListSelectFieldsResponse>>("getOnlineBlockPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.OnlineBlockSearchPagedSelectFieldsResponse>> SearchOnlineBlockPagedSelectFields(ParameterService.OnlineBlockSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.OnlineBlockSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.OnlineBlockSearchPagedSelectFieldsResponse>>("searchOnlineBlockPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.OnlineCardSelectFieldsResponse>> GetOnlineCardSelectFields(ParameterService.OnlineCardSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.OnlineCardSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.OnlineCardSelectFieldsResponse>>("getOnlineCardSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.OnlineCardPagedListSelectFieldsResponse>> GetOnlineCardPagedListSelectFields(ParameterService.OnlineCardPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.OnlineCardPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.OnlineCardPagedListSelectFieldsResponse>>("getOnlineCardPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.OnlineCardSearchPagedSelectFieldsResponse>> SearchOnlineCardPagedSelectFields(ParameterService.OnlineCardSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.OnlineCardSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.OnlineCardSearchPagedSelectFieldsResponse>>("searchOnlineCardPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.OnlineFeeSelectFieldsResponse>> GetOnlineFeeSelectFields(ParameterService.OnlineFeeSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.OnlineFeeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.OnlineFeeSelectFieldsResponse>>("getOnlineFeeSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.OnlineFeePagedListSelectFieldsResponse>> GetOnlineFeePagedListSelectFields(ParameterService.OnlineFeePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.OnlineFeePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.OnlineFeePagedListSelectFieldsResponse>>("getOnlineFeePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.OnlineFeeSearchPagedSelectFieldsResponse>> SearchOnlineFeePagedSelectFields(ParameterService.OnlineFeeSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.OnlineFeeSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.OnlineFeeSearchPagedSelectFieldsResponse>>("searchOnlineFeePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.OnlineFileSelectFieldsResponse>> GetOnlineFileSelectFields(ParameterService.OnlineFileSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.OnlineFileSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.OnlineFileSelectFieldsResponse>>("getOnlineFileSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.OnlineFilePagedListSelectFieldsResponse>> GetOnlineFilePagedListSelectFields(ParameterService.OnlineFilePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.OnlineFilePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.OnlineFilePagedListSelectFieldsResponse>>("getOnlineFilePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.OnlineFileSearchPagedSelectFieldsResponse>> SearchOnlineFilePagedSelectFields(ParameterService.OnlineFileSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.OnlineFileSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.OnlineFileSearchPagedSelectFieldsResponse>>("searchOnlineFilePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.OnlineFileMgrSelectFieldsResponse>> GetOnlineFileMgrSelectFields(ParameterService.OnlineFileMgrSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.OnlineFileMgrSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.OnlineFileMgrSelectFieldsResponse>>("getOnlineFileMgrSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.OnlineMainSelectFieldsResponse>> GetOnlineMainSelectFields(ParameterService.OnlineMainSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.OnlineMainSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.OnlineMainSelectFieldsResponse>>("getOnlineMainSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.OnlineNetSelectFieldsResponse>> GetOnlineNetSelectFields(ParameterService.OnlineNetSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.OnlineNetSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.OnlineNetSelectFieldsResponse>>("getOnlineNetSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.OnlineNetPagedListSelectFieldsResponse>> GetOnlineNetPagedListSelectFields(ParameterService.OnlineNetPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.OnlineNetPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.OnlineNetPagedListSelectFieldsResponse>>("getOnlineNetPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.OnlineNetSearchPagedSelectFieldsResponse>> SearchOnlineNetPagedSelectFields(ParameterService.OnlineNetSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.OnlineNetSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.OnlineNetSearchPagedSelectFieldsResponse>>("searchOnlineNetPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.OnlineOutletSelectFieldsResponse>> GetOnlineOutletSelectFields(ParameterService.OnlineOutletSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.OnlineOutletSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.OnlineOutletSelectFieldsResponse>>("getOnlineOutletSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.OnlineOutletPagedListSelectFieldsResponse>> GetOnlineOutletPagedListSelectFields(ParameterService.OnlineOutletPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.OnlineOutletPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.OnlineOutletPagedListSelectFieldsResponse>>("getOnlineOutletPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.OnlineOutletSearchPagedSelectFieldsResponse>> SearchOnlineOutletPagedSelectFields(ParameterService.OnlineOutletSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.OnlineOutletSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.OnlineOutletSearchPagedSelectFieldsResponse>>("searchOnlineOutletPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.OnlineSbAddOnSelectFieldsResponse>> GetOnlineSbAddOnSelectFields(ParameterService.OnlineSbAddOnSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.OnlineSbAddOnSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.OnlineSbAddOnSelectFieldsResponse>>("getOnlineSbAddOnSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.OnlineSbAddOnPagedListSelectFieldsResponse>> GetOnlineSbAddOnPagedListSelectFields(ParameterService.OnlineSbAddOnPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.OnlineSbAddOnPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.OnlineSbAddOnPagedListSelectFieldsResponse>>("getOnlineSbAddOnPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.OnlineSbAddOnSearchPagedSelectFieldsResponse>> SearchOnlineSbAddOnPagedSelectFields(ParameterService.OnlineSbAddOnSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.OnlineSbAddOnSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.OnlineSbAddOnSearchPagedSelectFieldsResponse>>("searchOnlineSbAddOnPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.OnlineSbaSelectFieldsResponse>> GetOnlineSbaSelectFields(ParameterService.OnlineSbaSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.OnlineSbaSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.OnlineSbaSelectFieldsResponse>>("getOnlineSbaSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.OnlineSbiSelectFieldsResponse>> GetOnlineSbiSelectFields(ParameterService.OnlineSbiSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.OnlineSbiSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.OnlineSbiSelectFieldsResponse>>("getOnlineSbiSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.Param360ViewSelectFieldsResponse>> GetParam360ViewSelectFields(ParameterService.Param360ViewSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.Param360ViewSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.Param360ViewSelectFieldsResponse>>("getParam360ViewSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.PartStatementSelectFieldsResponse>> GetPartStatementSelectFields(ParameterService.PartStatementSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.PartStatementSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.PartStatementSelectFieldsResponse>>("getPartStatementSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.PartTrackingTypeSelectFieldsResponse>> GetPartTrackingTypeSelectFields(ParameterService.PartTrackingTypeSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.PartTrackingTypeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.PartTrackingTypeSelectFieldsResponse>>("getPartTrackingTypeSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.PartTrackingTypePagedListSelectFieldsResponse>> GetPartTrackingTypePagedListSelectFields(ParameterService.PartTrackingTypePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.PartTrackingTypePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.PartTrackingTypePagedListSelectFieldsResponse>>("getPartTrackingTypePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.PartTrackingTypeSearchPagedSelectFieldsResponse>> SearchPartTrackingTypePagedSelectFields(ParameterService.PartTrackingTypeSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.PartTrackingTypeSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.PartTrackingTypeSearchPagedSelectFieldsResponse>>("searchPartTrackingTypePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.ParticipantFieldNameSelectFieldsResponse>> GetParticipantFieldNameSelectFields(ParameterService.ParticipantFieldNameSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.ParticipantFieldNameSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.ParticipantFieldNameSelectFieldsResponse>>("getParticipantFieldNameSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.ParticipantFieldNamePagedListSelectFieldsResponse>> GetParticipantFieldNamePagedListSelectFields(ParameterService.ParticipantFieldNamePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.ParticipantFieldNamePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.ParticipantFieldNamePagedListSelectFieldsResponse>>("getParticipantFieldNamePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.ParticipantFieldNameSearchPagedSelectFieldsResponse>> SearchParticipantFieldNamePagedSelectFields(ParameterService.ParticipantFieldNameSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.ParticipantFieldNameSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.ParticipantFieldNameSearchPagedSelectFieldsResponse>>("searchParticipantFieldNamePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.PayCalcSelectFieldsResponse>> GetPayCalcSelectFields(ParameterService.PayCalcSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.PayCalcSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.PayCalcSelectFieldsResponse>>("getPayCalcSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.PayCalcPagedListSelectFieldsResponse>> GetPayCalcPagedListSelectFields(ParameterService.PayCalcPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.PayCalcPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.PayCalcPagedListSelectFieldsResponse>>("getPayCalcPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.PayCalcSearchPagedSelectFieldsResponse>> SearchPayCalcPagedSelectFields(ParameterService.PayCalcSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.PayCalcSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.PayCalcSearchPagedSelectFieldsResponse>>("searchPayCalcPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.PeriodicMtgSelectFieldsResponse>> GetPeriodicMtgSelectFields(ParameterService.PeriodicMtgSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.PeriodicMtgSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.PeriodicMtgSelectFieldsResponse>>("getPeriodicMtgSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.PlanDefaultSelectFieldsResponse>> GetPlanDefaultSelectFields(ParameterService.PlanDefaultSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.PlanDefaultSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.PlanDefaultSelectFieldsResponse>>("getPlanDefaultSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.PlanDefaultPagedListSelectFieldsResponse>> GetPlanDefaultPagedListSelectFields(ParameterService.PlanDefaultPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.PlanDefaultPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.PlanDefaultPagedListSelectFieldsResponse>>("getPlanDefaultPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.PlanDefaultSearchPagedSelectFieldsResponse>> SearchPlanDefaultPagedSelectFields(ParameterService.PlanDefaultSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.PlanDefaultSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.PlanDefaultSearchPagedSelectFieldsResponse>>("searchPlanDefaultPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.PlanFieldNameSelectFieldsResponse>> GetPlanFieldNameSelectFields(ParameterService.PlanFieldNameSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.PlanFieldNameSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.PlanFieldNameSelectFieldsResponse>>("getPlanFieldNameSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.PlanFieldNamePagedListSelectFieldsResponse>> GetPlanFieldNamePagedListSelectFields(ParameterService.PlanFieldNamePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.PlanFieldNamePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.PlanFieldNamePagedListSelectFieldsResponse>>("getPlanFieldNamePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.PlanFieldNameSearchPagedSelectFieldsResponse>> SearchPlanFieldNamePagedSelectFields(ParameterService.PlanFieldNameSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.PlanFieldNameSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.PlanFieldNameSearchPagedSelectFieldsResponse>>("searchPlanFieldNamePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.PmtAppMethodSelectFieldsResponse>> GetPmtAppMethodSelectFields(ParameterService.PmtAppMethodSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.PmtAppMethodSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.PmtAppMethodSelectFieldsResponse>>("getPmtAppMethodSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.PmtAppMethodPagedListSelectFieldsResponse>> GetPmtAppMethodPagedListSelectFields(ParameterService.PmtAppMethodPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.PmtAppMethodPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.PmtAppMethodPagedListSelectFieldsResponse>>("getPmtAppMethodPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.PmtAppMethodSearchPagedSelectFieldsResponse>> SearchPmtAppMethodPagedSelectFields(ParameterService.PmtAppMethodSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.PmtAppMethodSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.PmtAppMethodSearchPagedSelectFieldsResponse>>("searchPmtAppMethodPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.PositivePaySelectFieldsResponse>> GetPositivePaySelectFields(ParameterService.PositivePaySelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.PositivePaySelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.PositivePaySelectFieldsResponse>>("getPositivePaySelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.PositivePayPagedListSelectFieldsResponse>> GetPositivePayPagedListSelectFields(ParameterService.PositivePayPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.PositivePayPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.PositivePayPagedListSelectFieldsResponse>>("getPositivePayPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.PositivePaySearchPagedSelectFieldsResponse>> SearchPositivePayPagedSelectFields(ParameterService.PositivePaySearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.PositivePaySearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.PositivePaySearchPagedSelectFieldsResponse>>("searchPositivePayPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.PreferenceDefaultSelectFieldsResponse>> GetPreferenceDefaultSelectFields(ParameterService.PreferenceDefaultSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.PreferenceDefaultSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.PreferenceDefaultSelectFieldsResponse>>("getPreferenceDefaultSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.PrivGroupSelectFieldsResponse>> GetPrivGroupSelectFields(ParameterService.PrivGroupSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.PrivGroupSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.PrivGroupSelectFieldsResponse>>("getPrivGroupSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.PrivGroupPagedListSelectFieldsResponse>> GetPrivGroupPagedListSelectFields(ParameterService.PrivGroupPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.PrivGroupPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.PrivGroupPagedListSelectFieldsResponse>>("getPrivGroupPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.PrivGroupSearchPagedSelectFieldsResponse>> SearchPrivGroupPagedSelectFields(ParameterService.PrivGroupSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.PrivGroupSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.PrivGroupSearchPagedSelectFieldsResponse>>("searchPrivGroupPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.RegCcSelectFieldsResponse>> GetRegCcSelectFields(ParameterService.RegCcSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.RegCcSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.RegCcSelectFieldsResponse>>("getRegCcSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.RegCcPagedListSelectFieldsResponse>> GetRegCcPagedListSelectFields(ParameterService.RegCcPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.RegCcPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.RegCcPagedListSelectFieldsResponse>>("getRegCcPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.RegCcSearchPagedSelectFieldsResponse>> SearchRegCcPagedSelectFields(ParameterService.RegCcSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.RegCcSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.RegCcSearchPagedSelectFieldsResponse>>("searchRegCcPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.ScreenDefinitionSelectFieldsResponse>> GetScreenDefinitionSelectFields(ParameterService.ScreenDefinitionSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.ScreenDefinitionSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.ScreenDefinitionSelectFieldsResponse>>("getScreenDefinitionSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.ScreenDefinitionPagedListSelectFieldsResponse>> GetScreenDefinitionPagedListSelectFields(ParameterService.ScreenDefinitionPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.ScreenDefinitionPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.ScreenDefinitionPagedListSelectFieldsResponse>>("getScreenDefinitionPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.ScreenDefinitionSearchPagedSelectFieldsResponse>> SearchScreenDefinitionPagedSelectFields(ParameterService.ScreenDefinitionSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.ScreenDefinitionSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.ScreenDefinitionSearchPagedSelectFieldsResponse>>("searchScreenDefinitionPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SecFieldSelectFieldsResponse>> GetSecFieldSelectFields(ParameterService.SecFieldSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.SecFieldSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SecFieldSelectFieldsResponse>>("getSecFieldSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SecFieldPagedListSelectFieldsResponse>> GetSecFieldPagedListSelectFields(ParameterService.SecFieldPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.SecFieldPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SecFieldPagedListSelectFieldsResponse>>("getSecFieldPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SecFieldSearchPagedSelectFieldsResponse>> SearchSecFieldPagedSelectFields(ParameterService.SecFieldSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.SecFieldSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SecFieldSearchPagedSelectFieldsResponse>>("searchSecFieldPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SecuritySelectFieldsResponse>> GetSecuritySelectFields(ParameterService.SecuritySelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.SecuritySelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SecuritySelectFieldsResponse>>("getSecuritySelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SecurityPagedListSelectFieldsResponse>> GetSecurityPagedListSelectFields(ParameterService.SecurityPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.SecurityPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SecurityPagedListSelectFieldsResponse>>("getSecurityPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SecuritySearchPagedSelectFieldsResponse>> SearchSecurityPagedSelectFields(ParameterService.SecuritySearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.SecuritySearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SecuritySearchPagedSelectFieldsResponse>>("searchSecurityPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.ShareDefaultSelectFieldsResponse>> GetShareDefaultSelectFields(ParameterService.ShareDefaultSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.ShareDefaultSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.ShareDefaultSelectFieldsResponse>>("getShareDefaultSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.ShareDefaultPagedListSelectFieldsResponse>> GetShareDefaultPagedListSelectFields(ParameterService.ShareDefaultPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.ShareDefaultPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.ShareDefaultPagedListSelectFieldsResponse>>("getShareDefaultPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.ShareDefaultSearchPagedSelectFieldsResponse>> SearchShareDefaultPagedSelectFields(ParameterService.ShareDefaultSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.ShareDefaultSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.ShareDefaultSearchPagedSelectFieldsResponse>>("searchShareDefaultPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.ShareFieldNameSelectFieldsResponse>> GetShareFieldNameSelectFields(ParameterService.ShareFieldNameSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.ShareFieldNameSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.ShareFieldNameSelectFieldsResponse>>("getShareFieldNameSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.ShareFieldNamePagedListSelectFieldsResponse>> GetShareFieldNamePagedListSelectFields(ParameterService.ShareFieldNamePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.ShareFieldNamePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.ShareFieldNamePagedListSelectFieldsResponse>>("getShareFieldNamePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.ShareFieldNameSearchPagedSelectFieldsResponse>> SearchShareFieldNamePagedSelectFields(ParameterService.ShareFieldNameSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.ShareFieldNameSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.ShareFieldNameSearchPagedSelectFieldsResponse>>("searchShareFieldNamePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.StatementSelectFieldsResponse>> GetStatementSelectFields(ParameterService.StatementSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.StatementSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.StatementSelectFieldsResponse>>("getStatementSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.StmtMailNameSelectFieldsResponse>> GetStmtMailNameSelectFields(ParameterService.StmtMailNameSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.StmtMailNameSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.StmtMailNameSelectFieldsResponse>>("getStmtMailNameSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.StmtMailNamePagedListSelectFieldsResponse>> GetStmtMailNamePagedListSelectFields(ParameterService.StmtMailNamePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.StmtMailNamePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.StmtMailNamePagedListSelectFieldsResponse>>("getStmtMailNamePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.StmtMailNameSearchPagedSelectFieldsResponse>> SearchStmtMailNamePagedSelectFields(ParameterService.StmtMailNameSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.StmtMailNameSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.StmtMailNameSearchPagedSelectFieldsResponse>>("searchStmtMailNamePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.StmtMessagesSelectFieldsResponse>> GetStmtMessagesSelectFields(ParameterService.StmtMessagesSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.StmtMessagesSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.StmtMessagesSelectFieldsResponse>>("getStmtMessagesSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.StmtMessagesPagedListSelectFieldsResponse>> GetStmtMessagesPagedListSelectFields(ParameterService.StmtMessagesPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.StmtMessagesPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.StmtMessagesPagedListSelectFieldsResponse>>("getStmtMessagesPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.StmtMessagesSearchPagedSelectFieldsResponse>> SearchStmtMessagesPagedSelectFields(ParameterService.StmtMessagesSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.StmtMessagesSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.StmtMessagesSearchPagedSelectFieldsResponse>>("searchStmtMessagesPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.StockSelectFieldsResponse>> GetStockSelectFields(ParameterService.StockSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.StockSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.StockSelectFieldsResponse>>("getStockSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.StockPagedListSelectFieldsResponse>> GetStockPagedListSelectFields(ParameterService.StockPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.StockPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.StockPagedListSelectFieldsResponse>>("getStockPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.StockSearchPagedSelectFieldsResponse>> SearchStockPagedSelectFields(ParameterService.StockSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.StockSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.StockSearchPagedSelectFieldsResponse>>("searchStockPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SymXClientSelectFieldsResponse>> GetSymXClientSelectFields(ParameterService.SymXClientSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.SymXClientSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SymXClientSelectFieldsResponse>>("getSymXClientSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SymXDeviceMapSelectFieldsResponse>> GetSymXDeviceMapSelectFields(ParameterService.SymXDeviceMapSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.SymXDeviceMapSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SymXDeviceMapSelectFieldsResponse>>("getSymXDeviceMapSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SymXDeviceMapPagedListSelectFieldsResponse>> GetSymXDeviceMapPagedListSelectFields(ParameterService.SymXDeviceMapPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.SymXDeviceMapPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SymXDeviceMapPagedListSelectFieldsResponse>>("getSymXDeviceMapPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SymXDeviceMapSearchPagedSelectFieldsResponse>> SearchSymXDeviceMapPagedSelectFields(ParameterService.SymXDeviceMapSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.SymXDeviceMapSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SymXDeviceMapSearchPagedSelectFieldsResponse>>("searchSymXDeviceMapPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SymXGeneralSelectFieldsResponse>> GetSymXGeneralSelectFields(ParameterService.SymXGeneralSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.SymXGeneralSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SymXGeneralSelectFieldsResponse>>("getSymXGeneralSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SymXGeneralPagedListSelectFieldsResponse>> GetSymXGeneralPagedListSelectFields(ParameterService.SymXGeneralPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.SymXGeneralPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SymXGeneralPagedListSelectFieldsResponse>>("getSymXGeneralPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SymXGeneralSearchPagedSelectFieldsResponse>> SearchSymXGeneralPagedSelectFields(ParameterService.SymXGeneralSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.SymXGeneralSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SymXGeneralSearchPagedSelectFieldsResponse>>("searchSymXGeneralPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SymXInstanceSelectFieldsResponse>> GetSymXInstanceSelectFields(ParameterService.SymXInstanceSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.SymXInstanceSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SymXInstanceSelectFieldsResponse>>("getSymXInstanceSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SymXInstancePagedListSelectFieldsResponse>> GetSymXInstancePagedListSelectFields(ParameterService.SymXInstancePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.SymXInstancePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SymXInstancePagedListSelectFieldsResponse>>("getSymXInstancePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SymXInstanceSearchPagedSelectFieldsResponse>> SearchSymXInstancePagedSelectFields(ParameterService.SymXInstanceSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.SymXInstanceSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SymXInstanceSearchPagedSelectFieldsResponse>>("searchSymXInstancePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SynapsysMrmSelectFieldsResponse>> GetSynapsysMrmSelectFields(ParameterService.SynapsysMrmSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.SynapsysMrmSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.SynapsysMrmSelectFieldsResponse>>("getSynapsysMrmSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.TcProductSelectFieldsResponse>> GetTcProductSelectFields(ParameterService.TcProductSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.TcProductSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.TcProductSelectFieldsResponse>>("getTcProductSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.TellerFeeSelectFieldsResponse>> GetTellerFeeSelectFields(ParameterService.TellerFeeSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.TellerFeeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.TellerFeeSelectFieldsResponse>>("getTellerFeeSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.TellerFeePagedListSelectFieldsResponse>> GetTellerFeePagedListSelectFields(ParameterService.TellerFeePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.TellerFeePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.TellerFeePagedListSelectFieldsResponse>>("getTellerFeePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.TellerFeeSearchPagedSelectFieldsResponse>> SearchTellerFeePagedSelectFields(ParameterService.TellerFeeSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.TellerFeeSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.TellerFeeSearchPagedSelectFieldsResponse>>("searchTellerFeePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.TellerTranFeeSelectFieldsResponse>> GetTellerTranFeeSelectFields(ParameterService.TellerTranFeeSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.TellerTranFeeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.TellerTranFeeSelectFieldsResponse>>("getTellerTranFeeSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.TellerTranValidateSelectFieldsResponse>> GetTellerTranValidateSelectFields(ParameterService.TellerTranValidateSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.TellerTranValidateSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.TellerTranValidateSelectFieldsResponse>>("getTellerTranValidateSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.TptSelectFieldsResponse>> GetTptSelectFields(ParameterService.TptSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.TptSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.TptSelectFieldsResponse>>("getTptSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.TptPagedListSelectFieldsResponse>> GetTptPagedListSelectFields(ParameterService.TptPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.TptPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.TptPagedListSelectFieldsResponse>>("getTptPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.TptSearchPagedSelectFieldsResponse>> SearchTptPagedSelectFields(ParameterService.TptSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.TptSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.TptSearchPagedSelectFieldsResponse>>("searchTptPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.TrackingCodeSelectFieldsResponse>> GetTrackingCodeSelectFields(ParameterService.TrackingCodeSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.TrackingCodeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.TrackingCodeSelectFieldsResponse>>("getTrackingCodeSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.TrackingCodePagedListSelectFieldsResponse>> GetTrackingCodePagedListSelectFields(ParameterService.TrackingCodePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.TrackingCodePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.TrackingCodePagedListSelectFieldsResponse>>("getTrackingCodePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.TrackingCodeSearchPagedSelectFieldsResponse>> SearchTrackingCodePagedSelectFields(ParameterService.TrackingCodeSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.TrackingCodeSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.TrackingCodeSearchPagedSelectFieldsResponse>>("searchTrackingCodePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UserFmSelectFieldsResponse>> GetUserFmSelectFields(ParameterService.UserFmSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.UserFmSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.UserFmSelectFieldsResponse>>("getUserFmSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UserTrackingFmSelectFieldsResponse>> GetUserTrackingFmSelectFields(ParameterService.UserTrackingFmSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.UserTrackingFmSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.UserTrackingFmSelectFieldsResponse>>("getUserTrackingFmSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UserTrackingTypeSelectFieldsResponse>> GetUserTrackingTypeSelectFields(ParameterService.UserTrackingTypeSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.UserTrackingTypeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.UserTrackingTypeSelectFieldsResponse>>("getUserTrackingTypeSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UserTrackingTypePagedListSelectFieldsResponse>> GetUserTrackingTypePagedListSelectFields(ParameterService.UserTrackingTypePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.UserTrackingTypePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.UserTrackingTypePagedListSelectFieldsResponse>>("getUserTrackingTypePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UserTrackingTypeSearchPagedSelectFieldsResponse>> SearchUserTrackingTypePagedSelectFields(ParameterService.UserTrackingTypeSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.UserTrackingTypeSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.UserTrackingTypeSearchPagedSelectFieldsResponse>>("searchUserTrackingTypePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.WarningsSelectFieldsResponse>> GetWarningsSelectFields(ParameterService.WarningsSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.WarningsSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.WarningsSelectFieldsResponse>>("getWarningsSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.WarningsPagedListSelectFieldsResponse>> GetWarningsPagedListSelectFields(ParameterService.WarningsPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.WarningsPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.WarningsPagedListSelectFieldsResponse>>("getWarningsPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.WarningsSearchPagedSelectFieldsResponse>> SearchWarningsPagedSelectFields(ParameterService.WarningsSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.WarningsSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.WarningsSearchPagedSelectFieldsResponse>>("searchWarningsPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.WdFeeSelectFieldsResponse>> GetWdFeeSelectFields(ParameterService.WdFeeSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.WdFeeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.WdFeeSelectFieldsResponse>>("getWdFeeSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.WdFeePagedListSelectFieldsResponse>> GetWdFeePagedListSelectFields(ParameterService.WdFeePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.WdFeePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.WdFeePagedListSelectFieldsResponse>>("getWdFeePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.WdFeeSearchPagedSelectFieldsResponse>> SearchWdFeePagedSelectFields(ParameterService.WdFeeSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.WdFeeSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.WdFeeSearchPagedSelectFieldsResponse>>("searchWdFeePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.WireBfcSelectFieldsResponse>> GetWireBfcSelectFields(ParameterService.WireBfcSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.WireBfcSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.WireBfcSelectFieldsResponse>>("getWireBfcSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.WireCorpVerSelectFieldsResponse>> GetWireCorpVerSelectFields(ParameterService.WireCorpVerSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.WireCorpVerSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.WireCorpVerSelectFieldsResponse>>("getWireCorpVerSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.WireIdCodeSelectFieldsResponse>> GetWireIdCodeSelectFields(ParameterService.WireIdCodeSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.WireIdCodeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.WireIdCodeSelectFieldsResponse>>("getWireIdCodeSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.WireInCmtCodeSelectFieldsResponse>> GetWireInCmtCodeSelectFields(ParameterService.WireInCmtCodeSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.WireInCmtCodeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.WireInCmtCodeSelectFieldsResponse>>("getWireInCmtCodeSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.WireInCmtCodePagedListSelectFieldsResponse>> GetWireInCmtCodePagedListSelectFields(ParameterService.WireInCmtCodePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.WireInCmtCodePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.WireInCmtCodePagedListSelectFieldsResponse>>("getWireInCmtCodePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.WireInCmtCodeSearchPagedSelectFieldsResponse>> SearchWireInCmtCodePagedSelectFields(ParameterService.WireInCmtCodeSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.WireInCmtCodeSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.WireInCmtCodeSearchPagedSelectFieldsResponse>>("searchWireInCmtCodePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.WireMiscSelectFieldsResponse>> GetWireMiscSelectFields(ParameterService.WireMiscSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.WireMiscSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.WireMiscSelectFieldsResponse>>("getWireMiscSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.WireOutCmtCodeSelectFieldsResponse>> GetWireOutCmtCodeSelectFields(ParameterService.WireOutCmtCodeSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.WireOutCmtCodeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.WireOutCmtCodeSelectFieldsResponse>>("getWireOutCmtCodeSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.WireOutCmtCodePagedListSelectFieldsResponse>> GetWireOutCmtCodePagedListSelectFields(ParameterService.WireOutCmtCodePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.WireOutCmtCodePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.WireOutCmtCodePagedListSelectFieldsResponse>>("getWireOutCmtCodePagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.WireOutCmtCodeSearchPagedSelectFieldsResponse>> SearchWireOutCmtCodePagedSelectFields(ParameterService.WireOutCmtCodeSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.WireOutCmtCodeSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.WireOutCmtCodeSearchPagedSelectFieldsResponse>>("searchWireOutCmtCodePagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.WireTypeCodeSelectFieldsResponse>> GetWireTypeCodeSelectFields(ParameterService.WireTypeCodeSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.WireTypeCodeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.WireTypeCodeSelectFieldsResponse>>("getWireTypeCodeSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.WorkFlowRepGenSelectFieldsResponse>> GetWorkFlowRepGenSelectFields(ParameterService.WorkFlowRepGenSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.WorkFlowRepGenSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.WorkFlowRepGenSelectFieldsResponse>>("getWorkFlowRepGenSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.WorkFlowRepGenPagedListSelectFieldsResponse>> GetWorkFlowRepGenPagedListSelectFields(ParameterService.WorkFlowRepGenPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.WorkFlowRepGenPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.WorkFlowRepGenPagedListSelectFieldsResponse>>("getWorkFlowRepGenPagedListSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.WorkFlowRepGenSearchPagedSelectFieldsResponse>> SearchWorkFlowRepGenPagedSelectFields(ParameterService.WorkFlowRepGenSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.WorkFlowRepGenSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.WorkFlowRepGenSearchPagedSelectFieldsResponse>>("searchWorkFlowRepGenPagedSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.YellowHammerSelectFieldsResponse>> GetYellowHammerSelectFields(ParameterService.YellowHammerSelectFieldsRequest payload) =>
    _client.RequestAsync<ParameterService.YellowHammerSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParameterService.YellowHammerSelectFieldsResponse>>("getYellowHammerSelectFields", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.AccountDefaultUpdateByIdResponse>> UpdateAccountDefaultById(ParameterService.UpdateAccountDefaultByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateAccountDefaultByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.AccountDefaultUpdateByIdResponse>>("updateAccountDefaultByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.AccountFieldNameUpdateByIdResponse>> UpdateAccountFieldNameById(ParameterService.UpdateAccountFieldNameByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateAccountFieldNameByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.AccountFieldNameUpdateByIdResponse>>("updateAccountFieldNameByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.AcctLimitUpdateByIdResponse>> UpdateAcctLimitById(ParameterService.UpdateAcctLimitByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateAcctLimitByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.AcctLimitUpdateByIdResponse>>("updateAcctLimitByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.AcctMembGrpDescUpdateByIdResponse>> UpdateAcctMembGrpDescById(ParameterService.UpdateAcctMembGrpDescByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateAcctMembGrpDescByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.AcctMembGrpDescUpdateByIdResponse>>("updateAcctMembGrpDescByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.AcctRelCodeDescUpdateByIdResponse>> UpdateAcctRelCodeDescById(ParameterService.UpdateAcctRelCodeDescByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateAcctRelCodeDescByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.AcctRelCodeDescUpdateByIdResponse>>("updateAcctRelCodeDescByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.AcctTrackingTypeUpdateByIdResponse>> UpdateAcctTrackingTypeById(ParameterService.UpdateAcctTrackingTypeByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateAcctTrackingTypeByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.AcctTrackingTypeUpdateByIdResponse>>("updateAcctTrackingTypeByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.AcctTypeNameUpdateByIdResponse>> UpdateAcctTypeNameById(ParameterService.UpdateAcctTypeNameByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateAcctTypeNameByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.AcctTypeNameUpdateByIdResponse>>("updateAcctTypeNameByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.AcsGlobalUpdateByIdResponse>> UpdateAcsGlobalById(ParameterService.UpdateAcsGlobalByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateAcsGlobalByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.AcsGlobalUpdateByIdResponse>>("updateAcsGlobalByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.AcsServiceUpdateByIdResponse>> UpdateAcsServiceById(ParameterService.UpdateAcsServiceByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateAcsServiceByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.AcsServiceUpdateByIdResponse>>("updateAcsServiceByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.AnalysisFloatUpdateByIdResponse>> UpdateAnalysisFloatById(ParameterService.UpdateAnalysisFloatByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateAnalysisFloatByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.AnalysisFloatUpdateByIdResponse>>("updateAnalysisFloatByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.AnalysisGlobalUpdateByIdResponse>> UpdateAnalysisGlobalById(ParameterService.UpdateAnalysisGlobalByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateAnalysisGlobalByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.AnalysisGlobalUpdateByIdResponse>>("updateAnalysisGlobalByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.AnalysisPlanUpdateByIdResponse>> UpdateAnalysisPlanById(ParameterService.UpdateAnalysisPlanByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateAnalysisPlanByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.AnalysisPlanUpdateByIdResponse>>("updateAnalysisPlanByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.ApMiscUpdateByIdResponse>> UpdateApMiscById(ParameterService.UpdateApMiscByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateApMiscByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.ApMiscUpdateByIdResponse>>("updateApMiscByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.ApWorkFlowUpdateByIdResponse>> UpdateApWorkFlowById(ParameterService.UpdateApWorkFlowByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateApWorkFlowByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.ApWorkFlowUpdateByIdResponse>>("updateApWorkFlowByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.BatchRcUpdateByIdResponse>> UpdateBatchRcById(ParameterService.UpdateBatchRcByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateBatchRcByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.BatchRcUpdateByIdResponse>>("updateBatchRcByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.CardDefaultUpdateByIdResponse>> UpdateCardDefaultById(ParameterService.UpdateCardDefaultByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateCardDefaultByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.CardDefaultUpdateByIdResponse>>("updateCardDefaultByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.CardWizUpdateByIdResponse>> UpdateCardWizById(ParameterService.UpdateCardWizByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateCardWizByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.CardWizUpdateByIdResponse>>("updateCardWizByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.CdmUpdateByIdResponse>> UpdateCdmById(ParameterService.UpdateCdmByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateCdmByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.CdmUpdateByIdResponse>>("updateCdmByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.CdmCommonUpdateByIdResponse>> UpdateCdmCommonById(ParameterService.UpdateCdmCommonByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateCdmCommonByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.CdmCommonUpdateByIdResponse>>("updateCdmCommonByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.CheckOrderDefaultUpdateByIdResponse>> UpdateCheckOrderDefaultById(ParameterService.UpdateCheckOrderDefaultByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateCheckOrderDefaultByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.CheckOrderDefaultUpdateByIdResponse>>("updateCheckOrderDefaultByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.CollateralTypeUpdateByIdResponse>> UpdateCollateralTypeById(ParameterService.UpdateCollateralTypeByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateCollateralTypeByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.CollateralTypeUpdateByIdResponse>>("updateCollateralTypeByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.CollatrlTrackingTypeUpdateByIdResponse>> UpdateCollatrlTrackingTypeById(ParameterService.UpdateCollatrlTrackingTypeByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateCollatrlTrackingTypeByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.CollatrlTrackingTypeUpdateByIdResponse>>("updateCollatrlTrackingTypeByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.CommentUpdateByIdResponse>> UpdateCommentById(ParameterService.UpdateCommentByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateCommentByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.CommentUpdateByIdResponse>>("updateCommentByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.CpLetterUpdateByIdResponse>> UpdateCpLetterById(ParameterService.UpdateCpLetterByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateCpLetterByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.CpLetterUpdateByIdResponse>>("updateCpLetterByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.CpWorkCardUpdateByIdResponse>> UpdateCpWorkCardById(ParameterService.UpdateCpWorkCardByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateCpWorkCardByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.CpWorkCardUpdateByIdResponse>>("updateCpWorkCardByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.CrsUpdateByIdResponse>> UpdateCrsById(ParameterService.UpdateCrsByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateCrsByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.CrsUpdateByIdResponse>>("updateCrsByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.CurrencyCtrlUpdateByIdResponse>> UpdateCurrencyCtrlById(ParameterService.UpdateCurrencyCtrlByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateCurrencyCtrlByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.CurrencyCtrlUpdateByIdResponse>>("updateCurrencyCtrlByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.DealerStatementUpdateByIdResponse>> UpdateDealerStatementById(ParameterService.UpdateDealerStatementByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateDealerStatementByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.DealerStatementUpdateByIdResponse>>("updateDealerStatementByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.DebtRatioUpdateByIdResponse>> UpdateDebtRatioById(ParameterService.UpdateDebtRatioByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateDebtRatioByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.DebtRatioUpdateByIdResponse>>("updateDebtRatioByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.DisclosureUpdateByIdResponse>> UpdateDisclosureById(ParameterService.UpdateDisclosureByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateDisclosureByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.DisclosureUpdateByIdResponse>>("updateDisclosureByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.DivIndexLocalUpdateByIdResponse>> UpdateDivIndexLocalById(ParameterService.UpdateDivIndexLocalByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateDivIndexLocalByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.DivIndexLocalUpdateByIdResponse>>("updateDivIndexLocalByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.DivTableUpdateByIdResponse>> UpdateDivTableById(ParameterService.UpdateDivTableByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateDivTableByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.DivTableUpdateByIdResponse>>("updateDivTableByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.DocExcpNoticeUpdateByIdResponse>> UpdateDocExcpNoticeById(ParameterService.UpdateDocExcpNoticeByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateDocExcpNoticeByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.DocExcpNoticeUpdateByIdResponse>>("updateDocExcpNoticeByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.DocTypeDefaultUpdateByIdResponse>> UpdateDocTypeDefaultById(ParameterService.UpdateDocTypeDefaultByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateDocTypeDefaultByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.DocTypeDefaultUpdateByIdResponse>>("updateDocTypeDefaultByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.DocumentNumberUpdateByIdResponse>> UpdateDocumentNumberById(ParameterService.UpdateDocumentNumberByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateDocumentNumberByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.DocumentNumberUpdateByIdResponse>>("updateDocumentNumberByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.EpisysDbExtractUpdateByIdResponse>> UpdateEpisysDbExtractById(ParameterService.UpdateEpisysDbExtractByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateEpisysDbExtractByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.EpisysDbExtractUpdateByIdResponse>>("updateEpisysDbExtractByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.EscrowAnalysisUpdateByIdResponse>> UpdateEscrowAnalysisById(ParameterService.UpdateEscrowAnalysisByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateEscrowAnalysisByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.EscrowAnalysisUpdateByIdResponse>>("updateEscrowAnalysisByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.EscrowTypeUpdateByIdResponse>> UpdateEscrowTypeById(ParameterService.UpdateEscrowTypeByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateEscrowTypeByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.EscrowTypeUpdateByIdResponse>>("updateEscrowTypeByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.ExtLoanUpdateByIdResponse>> UpdateExtLoanById(ParameterService.UpdateExtLoanByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateExtLoanByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.ExtLoanUpdateByIdResponse>>("updateExtLoanByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GlCategoryUpdateByIdResponse>> UpdateGlCategoryById(ParameterService.UpdateGlCategoryByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateGlCategoryByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.GlCategoryUpdateByIdResponse>>("updateGlCategoryByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GlCodeUpdateByIdResponse>> UpdateGlCodeById(ParameterService.UpdateGlCodeByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateGlCodeByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.GlCodeUpdateByIdResponse>>("updateGlCodeByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GlTableUpdateByIdResponse>> UpdateGlTableById(ParameterService.UpdateGlTableByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateGlTableByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.GlTableUpdateByIdResponse>>("updateGlTableByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GlTrackingTypeUpdateByIdResponse>> UpdateGlTrackingTypeById(ParameterService.UpdateGlTrackingTypeByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateGlTrackingTypeByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.GlTrackingTypeUpdateByIdResponse>>("updateGlTrackingTypeByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.GlxLateUpdateByIdResponse>> UpdateGlxLateById(ParameterService.UpdateGlxLateByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateGlxLateByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.GlxLateUpdateByIdResponse>>("updateGlxLateByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.IdentIdTypeDescUpdateByIdResponse>> UpdateIdentIdTypeDescById(ParameterService.UpdateIdentIdTypeDescByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateIdentIdTypeDescByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.IdentIdTypeDescUpdateByIdResponse>>("updateIdentIdTypeDescByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.ImagingUpdateByIdResponse>> UpdateImagingById(ParameterService.UpdateImagingByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateImagingByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.ImagingUpdateByIdResponse>>("updateImagingByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.InqDefinitionUpdateByIdResponse>> UpdateInqDefinitionById(ParameterService.UpdateInqDefinitionByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateInqDefinitionByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.InqDefinitionUpdateByIdResponse>>("updateInqDefinitionByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.InsTableUpdateByIdResponse>> UpdateInsTableById(ParameterService.UpdateInsTableByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateInsTableByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.InsTableUpdateByIdResponse>>("updateInsTableByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.InsTypeUpdateByIdResponse>> UpdateInsTypeById(ParameterService.UpdateInsTypeByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateInsTypeByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.InsTypeUpdateByIdResponse>>("updateInsTypeByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.InstitutionUpdateByIdResponse>> UpdateInstitutionById(ParameterService.UpdateInstitutionByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateInstitutionByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.InstitutionUpdateByIdResponse>>("updateInstitutionByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.IntIndexUpdateByIdResponse>> UpdateIntIndexById(ParameterService.UpdateIntIndexByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateIntIndexByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.IntIndexUpdateByIdResponse>>("updateIntIndexByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.IntTypeUpdateByIdResponse>> UpdateIntTypeById(ParameterService.UpdateIntTypeByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateIntTypeByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.IntTypeUpdateByIdResponse>>("updateIntTypeByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.InventoryCopiedFldsUpdateByIdResponse>> UpdateInventoryCopiedFldsById(ParameterService.UpdateInventoryCopiedFldsByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateInventoryCopiedFldsByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.InventoryCopiedFldsUpdateByIdResponse>>("updateInventoryCopiedFldsByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.InventoryDefaultUpdateByIdResponse>> UpdateInventoryDefaultById(ParameterService.UpdateInventoryDefaultByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateInventoryDefaultByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.InventoryDefaultUpdateByIdResponse>>("updateInventoryDefaultByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.InventoryFieldNameUpdateByIdResponse>> UpdateInventoryFieldNameById(ParameterService.UpdateInventoryFieldNameByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateInventoryFieldNameByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.InventoryFieldNameUpdateByIdResponse>>("updateInventoryFieldNameByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.InventoryGeneralUpdateByIdResponse>> UpdateInventoryGeneralById(ParameterService.UpdateInventoryGeneralByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateInventoryGeneralByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.InventoryGeneralUpdateByIdResponse>>("updateInventoryGeneralByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.InventoryTypeUpdateByIdResponse>> UpdateInventoryTypeById(ParameterService.UpdateInventoryTypeByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateInventoryTypeByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.InventoryTypeUpdateByIdResponse>>("updateInventoryTypeByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.IrsBkupWithholdUpdateByIdResponse>> UpdateIrsBkupWithholdById(ParameterService.UpdateIrsBkupWithholdByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateIrsBkupWithholdByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.IrsBkupWithholdUpdateByIdResponse>>("updateIrsBkupWithholdByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.IrsContriLimitUpdateByIdResponse>> UpdateIrsContriLimitById(ParameterService.UpdateIrsContriLimitByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateIrsContriLimitByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.IrsContriLimitUpdateByIdResponse>>("updateIrsContriLimitByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.ItcFraudUpdateByIdResponse>> UpdateItcFraudById(ParameterService.UpdateItcFraudByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateItcFraudByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.ItcFraudUpdateByIdResponse>>("updateItcFraudByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.ItcInstallationUpdateByIdResponse>> UpdateItcInstallationById(ParameterService.UpdateItcInstallationByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateItcInstallationByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.ItcInstallationUpdateByIdResponse>>("updateItcInstallationByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LateChgUpdateByIdResponse>> UpdateLateChgById(ParameterService.UpdateLateChgByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateLateChgByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.LateChgUpdateByIdResponse>>("updateLateChgByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LnSegmentDefaultUpdateByIdResponse>> UpdateLnSegmentDefaultById(ParameterService.UpdateLnSegmentDefaultByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateLnSegmentDefaultByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.LnSegmentDefaultUpdateByIdResponse>>("updateLnSegmentDefaultByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanAppCopiedFldsUpdateByIdResponse>> UpdateLoanAppCopiedFldsById(ParameterService.UpdateLoanAppCopiedFldsByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateLoanAppCopiedFldsByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanAppCopiedFldsUpdateByIdResponse>>("updateLoanAppCopiedFldsByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanAppDefaultUpdateByIdResponse>> UpdateLoanAppDefaultById(ParameterService.UpdateLoanAppDefaultByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateLoanAppDefaultByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanAppDefaultUpdateByIdResponse>>("updateLoanAppDefaultByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanAppDenialUpdateByIdResponse>> UpdateLoanAppDenialById(ParameterService.UpdateLoanAppDenialByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateLoanAppDenialByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanAppDenialUpdateByIdResponse>>("updateLoanAppDenialByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanAppFieldNameUpdateByIdResponse>> UpdateLoanAppFieldNameById(ParameterService.UpdateLoanAppFieldNameByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateLoanAppFieldNameByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanAppFieldNameUpdateByIdResponse>>("updateLoanAppFieldNameByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanAppFormPktUpdateByIdResponse>> UpdateLoanAppFormPktById(ParameterService.UpdateLoanAppFormPktByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateLoanAppFormPktByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanAppFormPktUpdateByIdResponse>>("updateLoanAppFormPktByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanAppMiscUpdateByIdResponse>> UpdateLoanAppMiscById(ParameterService.UpdateLoanAppMiscByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateLoanAppMiscByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanAppMiscUpdateByIdResponse>>("updateLoanAppMiscByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanAppPrintAppUpdateByIdResponse>> UpdateLoanAppPrintAppById(ParameterService.UpdateLoanAppPrintAppByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateLoanAppPrintAppByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanAppPrintAppUpdateByIdResponse>>("updateLoanAppPrintAppByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanAppReusedFldsUpdateByIdResponse>> UpdateLoanAppReusedFldsById(ParameterService.UpdateLoanAppReusedFldsByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateLoanAppReusedFldsByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanAppReusedFldsUpdateByIdResponse>>("updateLoanAppReusedFldsByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanAppVerFormUpdateByIdResponse>> UpdateLoanAppVerFormById(ParameterService.UpdateLoanAppVerFormByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateLoanAppVerFormByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanAppVerFormUpdateByIdResponse>>("updateLoanAppVerFormByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanAppViewAppUpdateByIdResponse>> UpdateLoanAppViewAppById(ParameterService.UpdateLoanAppViewAppByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateLoanAppViewAppByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanAppViewAppUpdateByIdResponse>>("updateLoanAppViewAppByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanAppWorkFlowUpdateByIdResponse>> UpdateLoanAppWorkFlowById(ParameterService.UpdateLoanAppWorkFlowByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateLoanAppWorkFlowByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanAppWorkFlowUpdateByIdResponse>>("updateLoanAppWorkFlowByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanDefaultUpdateByIdResponse>> UpdateLoanDefaultById(ParameterService.UpdateLoanDefaultByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateLoanDefaultByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanDefaultUpdateByIdResponse>>("updateLoanDefaultByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanFieldNameUpdateByIdResponse>> UpdateLoanFieldNameById(ParameterService.UpdateLoanFieldNameByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateLoanFieldNameByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanFieldNameUpdateByIdResponse>>("updateLoanFieldNameByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LoanTypeIdRangeUpdateByIdResponse>> UpdateLoanTypeIdRangeById(ParameterService.UpdateLoanTypeIdRangeByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateLoanTypeIdRangeByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.LoanTypeIdRangeUpdateByIdResponse>>("updateLoanTypeIdRangeByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.LookupTypeNameUpdateByIdResponse>> UpdateLookupTypeNameById(ParameterService.UpdateLookupTypeNameByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateLookupTypeNameByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.LookupTypeNameUpdateByIdResponse>>("updateLookupTypeNameByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.MiscUpdateByIdResponse>> UpdateMiscById(ParameterService.UpdateMiscByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateMiscByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.MiscUpdateByIdResponse>>("updateMiscByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.MiscPmtUpdateByIdResponse>> UpdateMiscPmtById(ParameterService.UpdateMiscPmtByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateMiscPmtByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.MiscPmtUpdateByIdResponse>>("updateMiscPmtByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.MoProductUpdateByIdResponse>> UpdateMoProductById(ParameterService.UpdateMoProductByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateMoProductByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.MoProductUpdateByIdResponse>>("updateMoProductByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.NameFieldNameUpdateByIdResponse>> UpdateNameFieldNameById(ParameterService.UpdateNameFieldNameByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateNameFieldNameByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.NameFieldNameUpdateByIdResponse>>("updateNameFieldNameByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.Ncua5300UpdateByIdResponse>> UpdateNcua5300ById(ParameterService.UpdateNcua5300ByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateNcua5300ByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.Ncua5300UpdateByIdResponse>>("updateNcua5300ByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.NonRegCcUpdateByIdResponse>> UpdateNonRegCcById(ParameterService.UpdateNonRegCcByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateNonRegCcByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.NonRegCcUpdateByIdResponse>>("updateNonRegCcByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.NoticeUpdateByIdResponse>> UpdateNoticeById(ParameterService.UpdateNoticeByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateNoticeByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.NoticeUpdateByIdResponse>>("updateNoticeByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.OnlineBlockUpdateByIdResponse>> UpdateOnlineBlockById(ParameterService.UpdateOnlineBlockByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateOnlineBlockByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.OnlineBlockUpdateByIdResponse>>("updateOnlineBlockByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.OnlineCardUpdateByIdResponse>> UpdateOnlineCardById(ParameterService.UpdateOnlineCardByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateOnlineCardByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.OnlineCardUpdateByIdResponse>>("updateOnlineCardByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.OnlineFeeUpdateByIdResponse>> UpdateOnlineFeeById(ParameterService.UpdateOnlineFeeByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateOnlineFeeByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.OnlineFeeUpdateByIdResponse>>("updateOnlineFeeByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.OnlineFileUpdateByIdResponse>> UpdateOnlineFileById(ParameterService.UpdateOnlineFileByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateOnlineFileByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.OnlineFileUpdateByIdResponse>>("updateOnlineFileByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.OnlineFileMgrUpdateByIdResponse>> UpdateOnlineFileMgrById(ParameterService.UpdateOnlineFileMgrByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateOnlineFileMgrByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.OnlineFileMgrUpdateByIdResponse>>("updateOnlineFileMgrByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.OnlineMainUpdateByIdResponse>> UpdateOnlineMainById(ParameterService.UpdateOnlineMainByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateOnlineMainByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.OnlineMainUpdateByIdResponse>>("updateOnlineMainByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.OnlineNetUpdateByIdResponse>> UpdateOnlineNetById(ParameterService.UpdateOnlineNetByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateOnlineNetByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.OnlineNetUpdateByIdResponse>>("updateOnlineNetByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.OnlineOutletUpdateByIdResponse>> UpdateOnlineOutletById(ParameterService.UpdateOnlineOutletByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateOnlineOutletByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.OnlineOutletUpdateByIdResponse>>("updateOnlineOutletByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.OnlineSbAddOnUpdateByIdResponse>> UpdateOnlineSbAddOnById(ParameterService.UpdateOnlineSbAddOnByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateOnlineSbAddOnByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.OnlineSbAddOnUpdateByIdResponse>>("updateOnlineSbAddOnByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.OnlineSbaUpdateByIdResponse>> UpdateOnlineSbaById(ParameterService.UpdateOnlineSbaByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateOnlineSbaByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.OnlineSbaUpdateByIdResponse>>("updateOnlineSbaByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.OnlineSbiUpdateByIdResponse>> UpdateOnlineSbiById(ParameterService.UpdateOnlineSbiByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateOnlineSbiByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.OnlineSbiUpdateByIdResponse>>("updateOnlineSbiByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.Param360ViewUpdateByIdResponse>> UpdateParam360ViewById(ParameterService.UpdateParam360ViewByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateParam360ViewByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.Param360ViewUpdateByIdResponse>>("updateParam360ViewByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.PartStatementUpdateByIdResponse>> UpdatePartStatementById(ParameterService.UpdatePartStatementByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdatePartStatementByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.PartStatementUpdateByIdResponse>>("updatePartStatementByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.PartTrackingTypeUpdateByIdResponse>> UpdatePartTrackingTypeById(ParameterService.UpdatePartTrackingTypeByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdatePartTrackingTypeByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.PartTrackingTypeUpdateByIdResponse>>("updatePartTrackingTypeByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.ParticipantFieldNameUpdateByIdResponse>> UpdateParticipantFieldNameById(ParameterService.UpdateParticipantFieldNameByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateParticipantFieldNameByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.ParticipantFieldNameUpdateByIdResponse>>("updateParticipantFieldNameByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.PayCalcUpdateByIdResponse>> UpdatePayCalcById(ParameterService.UpdatePayCalcByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdatePayCalcByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.PayCalcUpdateByIdResponse>>("updatePayCalcByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.PeriodicMtgUpdateByIdResponse>> UpdatePeriodicMtgById(ParameterService.UpdatePeriodicMtgByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdatePeriodicMtgByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.PeriodicMtgUpdateByIdResponse>>("updatePeriodicMtgByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.PlanDefaultUpdateByIdResponse>> UpdatePlanDefaultById(ParameterService.UpdatePlanDefaultByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdatePlanDefaultByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.PlanDefaultUpdateByIdResponse>>("updatePlanDefaultByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.PlanFieldNameUpdateByIdResponse>> UpdatePlanFieldNameById(ParameterService.UpdatePlanFieldNameByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdatePlanFieldNameByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.PlanFieldNameUpdateByIdResponse>>("updatePlanFieldNameByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.PmtAppMethodUpdateByIdResponse>> UpdatePmtAppMethodById(ParameterService.UpdatePmtAppMethodByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdatePmtAppMethodByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.PmtAppMethodUpdateByIdResponse>>("updatePmtAppMethodByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.PositivePayUpdateByIdResponse>> UpdatePositivePayById(ParameterService.UpdatePositivePayByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdatePositivePayByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.PositivePayUpdateByIdResponse>>("updatePositivePayByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.PreferenceDefaultUpdateByIdResponse>> UpdatePreferenceDefaultById(ParameterService.UpdatePreferenceDefaultByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdatePreferenceDefaultByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.PreferenceDefaultUpdateByIdResponse>>("updatePreferenceDefaultByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.PrivGroupUpdateByIdResponse>> UpdatePrivGroupById(ParameterService.UpdatePrivGroupByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdatePrivGroupByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.PrivGroupUpdateByIdResponse>>("updatePrivGroupByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.RegCcUpdateByIdResponse>> UpdateRegCcById(ParameterService.UpdateRegCcByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateRegCcByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.RegCcUpdateByIdResponse>>("updateRegCcByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.ScreenDefinitionUpdateByIdResponse>> UpdateScreenDefinitionById(ParameterService.UpdateScreenDefinitionByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateScreenDefinitionByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.ScreenDefinitionUpdateByIdResponse>>("updateScreenDefinitionByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SecFieldUpdateByIdResponse>> UpdateSecFieldById(ParameterService.UpdateSecFieldByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateSecFieldByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.SecFieldUpdateByIdResponse>>("updateSecFieldByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SecurityUpdateByIdResponse>> UpdateSecurityById(ParameterService.UpdateSecurityByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateSecurityByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.SecurityUpdateByIdResponse>>("updateSecurityByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.ShareDefaultUpdateByIdResponse>> UpdateShareDefaultById(ParameterService.UpdateShareDefaultByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateShareDefaultByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.ShareDefaultUpdateByIdResponse>>("updateShareDefaultByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.ShareFieldNameUpdateByIdResponse>> UpdateShareFieldNameById(ParameterService.UpdateShareFieldNameByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateShareFieldNameByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.ShareFieldNameUpdateByIdResponse>>("updateShareFieldNameByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.StatementUpdateByIdResponse>> UpdateStatementById(ParameterService.UpdateStatementByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateStatementByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.StatementUpdateByIdResponse>>("updateStatementByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.StmtMailNameUpdateByIdResponse>> UpdateStmtMailNameById(ParameterService.UpdateStmtMailNameByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateStmtMailNameByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.StmtMailNameUpdateByIdResponse>>("updateStmtMailNameByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.StmtMessagesUpdateByIdResponse>> UpdateStmtMessagesById(ParameterService.UpdateStmtMessagesByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateStmtMessagesByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.StmtMessagesUpdateByIdResponse>>("updateStmtMessagesByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.StockUpdateByIdResponse>> UpdateStockById(ParameterService.UpdateStockByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateStockByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.StockUpdateByIdResponse>>("updateStockByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SymXClientUpdateByIdResponse>> UpdateSymXClientById(ParameterService.UpdateSymXClientByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateSymXClientByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.SymXClientUpdateByIdResponse>>("updateSymXClientByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SymXGeneralUpdateByIdResponse>> UpdateSymXGeneralById(ParameterService.UpdateSymXGeneralByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateSymXGeneralByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.SymXGeneralUpdateByIdResponse>>("updateSymXGeneralByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.SynapsysMrmUpdateByIdResponse>> UpdateSynapsysMrmById(ParameterService.UpdateSynapsysMrmByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateSynapsysMrmByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.SynapsysMrmUpdateByIdResponse>>("updateSynapsysMrmByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.TcProductUpdateByIdResponse>> UpdateTcProductById(ParameterService.UpdateTcProductByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateTcProductByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.TcProductUpdateByIdResponse>>("updateTcProductByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.TellerFeeUpdateByIdResponse>> UpdateTellerFeeById(ParameterService.UpdateTellerFeeByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateTellerFeeByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.TellerFeeUpdateByIdResponse>>("updateTellerFeeByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.TellerTranFeeUpdateByIdResponse>> UpdateTellerTranFeeById(ParameterService.UpdateTellerTranFeeByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateTellerTranFeeByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.TellerTranFeeUpdateByIdResponse>>("updateTellerTranFeeByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.TellerTranValidateUpdateByIdResponse>> UpdateTellerTranValidateById(ParameterService.UpdateTellerTranValidateByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateTellerTranValidateByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.TellerTranValidateUpdateByIdResponse>>("updateTellerTranValidateByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.TrackingCodeUpdateByIdResponse>> UpdateTrackingCodeById(ParameterService.UpdateTrackingCodeByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateTrackingCodeByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.TrackingCodeUpdateByIdResponse>>("updateTrackingCodeByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UserTrackingFmUpdateByIdResponse>> UpdateUserTrackingFmById(ParameterService.UpdateUserTrackingFmByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateUserTrackingFmByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UserTrackingFmUpdateByIdResponse>>("updateUserTrackingFmByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.UserTrackingTypeUpdateByIdResponse>> UpdateUserTrackingTypeById(ParameterService.UpdateUserTrackingTypeByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateUserTrackingTypeByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.UserTrackingTypeUpdateByIdResponse>>("updateUserTrackingTypeByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.WarningsUpdateByIdResponse>> UpdateWarningsById(ParameterService.UpdateWarningsByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateWarningsByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.WarningsUpdateByIdResponse>>("updateWarningsByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.WdFeeUpdateByIdResponse>> UpdateWdFeeById(ParameterService.UpdateWdFeeByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateWdFeeByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.WdFeeUpdateByIdResponse>>("updateWdFeeByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.WireBfcUpdateByIdResponse>> UpdateWireBfcById(ParameterService.UpdateWireBfcByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateWireBfcByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.WireBfcUpdateByIdResponse>>("updateWireBfcByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.WireCorpVerUpdateByIdResponse>> UpdateWireCorpVerById(ParameterService.UpdateWireCorpVerByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateWireCorpVerByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.WireCorpVerUpdateByIdResponse>>("updateWireCorpVerByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.WireIdCodeUpdateByIdResponse>> UpdateWireIdCodeById(ParameterService.UpdateWireIdCodeByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateWireIdCodeByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.WireIdCodeUpdateByIdResponse>>("updateWireIdCodeByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.WireInCmtCodeUpdateByIdResponse>> UpdateWireInCmtCodeById(ParameterService.UpdateWireInCmtCodeByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateWireInCmtCodeByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.WireInCmtCodeUpdateByIdResponse>>("updateWireInCmtCodeByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.WireMiscUpdateByIdResponse>> UpdateWireMiscById(ParameterService.UpdateWireMiscByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateWireMiscByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.WireMiscUpdateByIdResponse>>("updateWireMiscByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.WireOutCmtCodeUpdateByIdResponse>> UpdateWireOutCmtCodeById(ParameterService.UpdateWireOutCmtCodeByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateWireOutCmtCodeByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.WireOutCmtCodeUpdateByIdResponse>>("updateWireOutCmtCodeByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.WireTypeCodeUpdateByIdResponse>> UpdateWireTypeCodeById(ParameterService.UpdateWireTypeCodeByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateWireTypeCodeByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.WireTypeCodeUpdateByIdResponse>>("updateWireTypeCodeByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.WorkFlowRepGenUpdateByIdResponse>> UpdateWorkFlowRepGenById(ParameterService.UpdateWorkFlowRepGenByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateWorkFlowRepGenByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.WorkFlowRepGenUpdateByIdResponse>>("updateWorkFlowRepGenByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<ParameterService.YellowHammerUpdateByIdResponse>> UpdateYellowHammerById(ParameterService.UpdateYellowHammerByIdRequest payload) =>
    _client.RequestAsync<ParameterService.UpdateYellowHammerByIdRequest,  Memberwise.Symxify.Models.Result<ParameterService.YellowHammerUpdateByIdResponse>>("updateYellowHammerByID", payload, "parameter");


public Task<Memberwise.Symxify.Models.Result<RemittanceService.RemittanceSelectFieldsResponse>> GetRemittanceSelectFields(RemittanceService.RemittanceSelectFieldsRequest payload) =>
    _client.RequestAsync<RemittanceService.RemittanceSelectFieldsRequest,  Memberwise.Symxify.Models.Result<RemittanceService.RemittanceSelectFieldsResponse>>("getRemittanceSelectFields", payload, "remittance");


public Task<Memberwise.Symxify.Models.Result<RemittanceService.RemittanceUpdateByIdResponse>> UpdateRemittanceById(RemittanceService.UpdateRemittanceByIdRequest payload) =>
    _client.RequestAsync<RemittanceService.UpdateRemittanceByIdRequest,  Memberwise.Symxify.Models.Result<RemittanceService.RemittanceUpdateByIdResponse>>("updateRemittanceByID", payload, "remittance");


public Task<Memberwise.Symxify.Models.Result<RemittanceService.RemittanceCreateResponse>> CreateRemittance(RemittanceService.CreateRemittanceRequest payload) =>
    _client.RequestAsync<RemittanceService.CreateRemittanceRequest,  Memberwise.Symxify.Models.Result<RemittanceService.RemittanceCreateResponse>>("createRemittance", payload, "remittance");


public Task<Memberwise.Symxify.Models.Result<RemittanceService.RemittanceDeleteResponse>> DeleteRemittance(RemittanceService.DeleteRemittanceRequest payload) =>
    _client.RequestAsync<RemittanceService.DeleteRemittanceRequest,  Memberwise.Symxify.Models.Result<RemittanceService.RemittanceDeleteResponse>>("deleteRemittance", payload, "remittance");


public Task<Memberwise.Symxify.Models.Result<CreditReportService.CreditReportResponse>> OrderReport(CreditReportService.OrderReportRequest payload) =>
    _client.RequestAsync<CreditReportService.OrderReportRequest,  Memberwise.Symxify.Models.Result<CreditReportService.CreditReportResponse>>("orderReport", payload, "creditreport");


public Task<Memberwise.Symxify.Models.Result<CreditReportService.CreditReportResponse>> ImportReport(CreditReportService.ImportReportRequest payload) =>
    _client.RequestAsync<CreditReportService.ImportReportRequest,  Memberwise.Symxify.Models.Result<CreditReportService.CreditReportResponse>>("importReport", payload, "creditreport");


public Task<Memberwise.Symxify.Models.Result<CorpTransferService.CorpTransferSelectFieldsResponse>> GetCorpTransferSelectFields(CorpTransferService.CorpTransferSelectFieldsRequest payload) =>
    _client.RequestAsync<CorpTransferService.CorpTransferSelectFieldsRequest,  Memberwise.Symxify.Models.Result<CorpTransferService.CorpTransferSelectFieldsResponse>>("getCorpTransferSelectFields", payload, "corptransfer");


public Task<Memberwise.Symxify.Models.Result<UserService.UserSelectFieldsResponse>> GetUserSelectFields(UserService.UserSelectFieldsRequest payload) =>
    _client.RequestAsync<UserService.UserSelectFieldsRequest,  Memberwise.Symxify.Models.Result<UserService.UserSelectFieldsResponse>>("getUserSelectFields", payload, "user");


public Task<Memberwise.Symxify.Models.Result<UserService.UserSelectFieldsFilterChildrenResponse>> GetUserSelectFieldsFilterChildren(UserService.UserSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<UserService.UserSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<UserService.UserSelectFieldsFilterChildrenResponse>>("getUserSelectFieldsFilterChildren", payload, "user");


public Task<Memberwise.Symxify.Models.Result<UserService.ActivityPagedListSelectFieldsResponse>> GetActivityPagedListSelectFields(UserService.ActivityPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<UserService.ActivityPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<UserService.ActivityPagedListSelectFieldsResponse>>("getActivityPagedListSelectFields", payload, "user");


public Task<Memberwise.Symxify.Models.Result<UserService.ActivitySearchPagedSelectFieldsResponse>> SearchActivityPagedSelectFields(UserService.ActivitySearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<UserService.ActivitySearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<UserService.ActivitySearchPagedSelectFieldsResponse>>("searchActivityPagedSelectFields", payload, "user");


public Task<Memberwise.Symxify.Models.Result<UserService.UserTrackingSelectFieldsResponse>> GetUserTrackingSelectFields(UserService.UserTrackingSelectFieldsRequest payload) =>
    _client.RequestAsync<UserService.UserTrackingSelectFieldsRequest,  Memberwise.Symxify.Models.Result<UserService.UserTrackingSelectFieldsResponse>>("getUserTrackingSelectFields", payload, "user");


public Task<Memberwise.Symxify.Models.Result<UserService.UserTrackingPagedListSelectFieldsResponse>> GetUserTrackingPagedListSelectFields(UserService.UserTrackingPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<UserService.UserTrackingPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<UserService.UserTrackingPagedListSelectFieldsResponse>>("getUserTrackingPagedListSelectFields", payload, "user");


public Task<Memberwise.Symxify.Models.Result<UserService.UserTrackingSearchPagedSelectFieldsResponse>> SearchUserTrackingPagedSelectFields(UserService.UserTrackingSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<UserService.UserTrackingSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<UserService.UserTrackingSearchPagedSelectFieldsResponse>>("searchUserTrackingPagedSelectFields", payload, "user");


public Task<Memberwise.Symxify.Models.Result<UserService.UserUpdateByIdResponse>> UpdateUserById(UserService.UpdateUserByIdRequest payload) =>
    _client.RequestAsync<UserService.UpdateUserByIdRequest,  Memberwise.Symxify.Models.Result<UserService.UserUpdateByIdResponse>>("updateUserByID", payload, "user");


public Task<Memberwise.Symxify.Models.Result<UserService.UserTrackingUpdateByIdResponse>> UpdateUserTrackingById(UserService.UpdateUserTrackingByIdRequest payload) =>
    _client.RequestAsync<UserService.UpdateUserTrackingByIdRequest,  Memberwise.Symxify.Models.Result<UserService.UserTrackingUpdateByIdResponse>>("updateUserTrackingByID", payload, "user");


public Task<Memberwise.Symxify.Models.Result<UserService.UserTrackingCreateResponse>> CreateUserTracking(UserService.CreateUserTrackingRequest payload) =>
    _client.RequestAsync<UserService.CreateUserTrackingRequest,  Memberwise.Symxify.Models.Result<UserService.UserTrackingCreateResponse>>("createUserTracking", payload, "user");


public Task<Memberwise.Symxify.Models.Result<UserService.UserTrackingDeleteResponse>> DeleteUserTracking(UserService.DeleteUserTrackingRequest payload) =>
    _client.RequestAsync<UserService.DeleteUserTrackingRequest,  Memberwise.Symxify.Models.Result<UserService.UserTrackingDeleteResponse>>("deleteUserTracking", payload, "user");


public Task<Memberwise.Symxify.Models.Result<GeneralLedgerService.GlAccountSelectFieldsResponse>> GetGlAccountSelectFields(GeneralLedgerService.GlAccountSelectFieldsRequest payload) =>
    _client.RequestAsync<GeneralLedgerService.GlAccountSelectFieldsRequest,  Memberwise.Symxify.Models.Result<GeneralLedgerService.GlAccountSelectFieldsResponse>>("getGlAccountSelectFields", payload, "generalledger");


public Task<Memberwise.Symxify.Models.Result<GeneralLedgerService.GlAccountSelectFieldsFilterChildrenResponse>> GetGlAccountSelectFieldsFilterChildren(GeneralLedgerService.GlAccountSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<GeneralLedgerService.GlAccountSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<GeneralLedgerService.GlAccountSelectFieldsFilterChildrenResponse>>("getGlAccountSelectFieldsFilterChildren", payload, "generalledger");


public Task<Memberwise.Symxify.Models.Result<GeneralLedgerService.GlAccountFmHistoryPagedListSelectFieldsResponse>> GetGlAccountFmHistoryPagedListSelectFields(GeneralLedgerService.GlAccountFmHistoryPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<GeneralLedgerService.GlAccountFmHistoryPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<GeneralLedgerService.GlAccountFmHistoryPagedListSelectFieldsResponse>>("getGlAccountFmHistoryPagedListSelectFields", payload, "generalledger");


public Task<Memberwise.Symxify.Models.Result<GeneralLedgerService.GlAccountFmHistorySearchPagedSelectFieldsResponse>> SearchGlAccountFmHistoryPagedSelectFields(GeneralLedgerService.GlAccountFmHistorySearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<GeneralLedgerService.GlAccountFmHistorySearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<GeneralLedgerService.GlAccountFmHistorySearchPagedSelectFieldsResponse>>("searchGlAccountFmHistoryPagedSelectFields", payload, "generalledger");


public Task<Memberwise.Symxify.Models.Result<GeneralLedgerService.GlAccountTrackingSelectFieldsResponse>> GetGlAccountTrackingSelectFields(GeneralLedgerService.GlAccountTrackingSelectFieldsRequest payload) =>
    _client.RequestAsync<GeneralLedgerService.GlAccountTrackingSelectFieldsRequest,  Memberwise.Symxify.Models.Result<GeneralLedgerService.GlAccountTrackingSelectFieldsResponse>>("getGlAccountTrackingSelectFields", payload, "generalledger");


public Task<Memberwise.Symxify.Models.Result<GeneralLedgerService.GlAccountTrackingPagedListSelectFieldsResponse>> GetGlAccountTrackingPagedListSelectFields(GeneralLedgerService.GlAccountTrackingPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<GeneralLedgerService.GlAccountTrackingPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<GeneralLedgerService.GlAccountTrackingPagedListSelectFieldsResponse>>("getGlAccountTrackingPagedListSelectFields", payload, "generalledger");


public Task<Memberwise.Symxify.Models.Result<GeneralLedgerService.GlAccountTrackingSearchPagedSelectFieldsResponse>> SearchGlAccountTrackingPagedSelectFields(GeneralLedgerService.GlAccountTrackingSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<GeneralLedgerService.GlAccountTrackingSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<GeneralLedgerService.GlAccountTrackingSearchPagedSelectFieldsResponse>>("searchGlAccountTrackingPagedSelectFields", payload, "generalledger");


public Task<Memberwise.Symxify.Models.Result<GeneralLedgerService.GlHistoryPagedListSelectFieldsResponse>> GetGlHistoryPagedListSelectFields(GeneralLedgerService.GlHistoryPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<GeneralLedgerService.GlHistoryPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<GeneralLedgerService.GlHistoryPagedListSelectFieldsResponse>>("getGlHistoryPagedListSelectFields", payload, "generalledger");


public Task<Memberwise.Symxify.Models.Result<GeneralLedgerService.GlHistorySearchPagedSelectFieldsResponse>> SearchGlHistoryPagedSelectFields(GeneralLedgerService.GlHistorySearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<GeneralLedgerService.GlHistorySearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<GeneralLedgerService.GlHistorySearchPagedSelectFieldsResponse>>("searchGlHistoryPagedSelectFields", payload, "generalledger");


public Task<Memberwise.Symxify.Models.Result<GeneralLedgerService.GlSubaccountSelectFieldsResponse>> GetGlSubaccountSelectFields(GeneralLedgerService.GlSubaccountSelectFieldsRequest payload) =>
    _client.RequestAsync<GeneralLedgerService.GlSubaccountSelectFieldsRequest,  Memberwise.Symxify.Models.Result<GeneralLedgerService.GlSubaccountSelectFieldsResponse>>("getGlSubaccountSelectFields", payload, "generalledger");


public Task<Memberwise.Symxify.Models.Result<GeneralLedgerService.GlSubaccountPagedListSelectFieldsResponse>> GetGlSubaccountPagedListSelectFields(GeneralLedgerService.GlSubaccountPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<GeneralLedgerService.GlSubaccountPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<GeneralLedgerService.GlSubaccountPagedListSelectFieldsResponse>>("getGlSubaccountPagedListSelectFields", payload, "generalledger");


public Task<Memberwise.Symxify.Models.Result<GeneralLedgerService.GlSubaccountSearchPagedSelectFieldsResponse>> SearchGlSubaccountPagedSelectFields(GeneralLedgerService.GlSubaccountSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<GeneralLedgerService.GlSubaccountSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<GeneralLedgerService.GlSubaccountSearchPagedSelectFieldsResponse>>("searchGlSubaccountPagedSelectFields", payload, "generalledger");


public Task<Memberwise.Symxify.Models.Result<GeneralLedgerService.GlAccountUpdateByIdResponse>> UpdateGlAccountById(GeneralLedgerService.UpdateGlAccountByIdRequest payload) =>
    _client.RequestAsync<GeneralLedgerService.UpdateGlAccountByIdRequest,  Memberwise.Symxify.Models.Result<GeneralLedgerService.GlAccountUpdateByIdResponse>>("updateGlAccountByID", payload, "generalledger");


public Task<Memberwise.Symxify.Models.Result<GeneralLedgerService.GlAccountTrackingUpdateByIdResponse>> UpdateGlAccountTrackingById(GeneralLedgerService.UpdateGlAccountTrackingByIdRequest payload) =>
    _client.RequestAsync<GeneralLedgerService.UpdateGlAccountTrackingByIdRequest,  Memberwise.Symxify.Models.Result<GeneralLedgerService.GlAccountTrackingUpdateByIdResponse>>("updateGlAccountTrackingByID", payload, "generalledger");


public Task<Memberwise.Symxify.Models.Result<GeneralLedgerService.GlSubaccountUpdateByIdResponse>> UpdateGlSubaccountById(GeneralLedgerService.UpdateGlSubaccountByIdRequest payload) =>
    _client.RequestAsync<GeneralLedgerService.UpdateGlSubaccountByIdRequest,  Memberwise.Symxify.Models.Result<GeneralLedgerService.GlSubaccountUpdateByIdResponse>>("updateGlSubaccountByID", payload, "generalledger");


public Task<Memberwise.Symxify.Models.Result<GeneralLedgerService.GlAccountCreateResponse>> CreateGlAccount(GeneralLedgerService.CreateGlAccountRequest payload) =>
    _client.RequestAsync<GeneralLedgerService.CreateGlAccountRequest,  Memberwise.Symxify.Models.Result<GeneralLedgerService.GlAccountCreateResponse>>("createGlAccount", payload, "generalledger");


public Task<Memberwise.Symxify.Models.Result<GeneralLedgerService.GlAccountTrackingCreateResponse>> CreateGlAccountTracking(GeneralLedgerService.CreateGlAccountTrackingRequest payload) =>
    _client.RequestAsync<GeneralLedgerService.CreateGlAccountTrackingRequest,  Memberwise.Symxify.Models.Result<GeneralLedgerService.GlAccountTrackingCreateResponse>>("createGlAccountTracking", payload, "generalledger");


public Task<Memberwise.Symxify.Models.Result<GeneralLedgerService.GlSubaccountCreateResponse>> CreateGlSubaccount(GeneralLedgerService.CreateGlSubaccountRequest payload) =>
    _client.RequestAsync<GeneralLedgerService.CreateGlSubaccountRequest,  Memberwise.Symxify.Models.Result<GeneralLedgerService.GlSubaccountCreateResponse>>("createGlSubaccount", payload, "generalledger");


public Task<Memberwise.Symxify.Models.Result<GeneralLedgerService.GlAccountTrackingDeleteResponse>> DeleteGlAccountTracking(GeneralLedgerService.DeleteGlAccountTrackingRequest payload) =>
    _client.RequestAsync<GeneralLedgerService.DeleteGlAccountTrackingRequest,  Memberwise.Symxify.Models.Result<GeneralLedgerService.GlAccountTrackingDeleteResponse>>("deleteGlAccountTracking", payload, "generalledger");


public Task<Memberwise.Symxify.Models.Result<GeneralLedgerService.GlSubaccountDeleteResponse>> DeleteGlSubaccount(GeneralLedgerService.DeleteGlSubaccountRequest payload) =>
    _client.RequestAsync<GeneralLedgerService.DeleteGlSubaccountRequest,  Memberwise.Symxify.Models.Result<GeneralLedgerService.GlSubaccountDeleteResponse>>("deleteGlSubaccount", payload, "generalledger");


public Task<Memberwise.Symxify.Models.Result<NonAccountNameService.NonAcctNameSelectFieldsResponse>> GetNonAcctNameSelectFields(NonAccountNameService.NonAcctNameSelectFieldsRequest payload) =>
    _client.RequestAsync<NonAccountNameService.NonAcctNameSelectFieldsRequest,  Memberwise.Symxify.Models.Result<NonAccountNameService.NonAcctNameSelectFieldsResponse>>("getNonAcctNameSelectFields", payload, "nonaccountname");


public Task<Memberwise.Symxify.Models.Result<NonAccountNameService.NonAcctNameSelectFieldsFilterChildrenResponse>> GetNonAcctNameSelectFieldsFilterChildren(NonAccountNameService.NonAcctNameSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<NonAccountNameService.NonAcctNameSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<NonAccountNameService.NonAcctNameSelectFieldsFilterChildrenResponse>>("getNonAcctNameSelectFieldsFilterChildren", payload, "nonaccountname");


public Task<Memberwise.Symxify.Models.Result<NonAccountNameService.NonAcctNameFmHistoryPagedListSelectFieldsResponse>> GetNonAcctNameFmHistoryPagedListSelectFields(NonAccountNameService.NonAcctNameFmHistoryPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<NonAccountNameService.NonAcctNameFmHistoryPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<NonAccountNameService.NonAcctNameFmHistoryPagedListSelectFieldsResponse>>("getNonAcctNameFmHistoryPagedListSelectFields", payload, "nonaccountname");


public Task<Memberwise.Symxify.Models.Result<NonAccountNameService.NonAcctNameFmHistorySearchPagedSelectFieldsResponse>> SearchNonAcctNameFmHistoryPagedSelectFields(NonAccountNameService.NonAcctNameFmHistorySearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<NonAccountNameService.NonAcctNameFmHistorySearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<NonAccountNameService.NonAcctNameFmHistorySearchPagedSelectFieldsResponse>>("searchNonAcctNameFmHistoryPagedSelectFields", payload, "nonaccountname");


public Task<Memberwise.Symxify.Models.Result<NonAccountNameService.NonAcctNameUpdateByIdResponse>> UpdateNonAcctNameById(NonAccountNameService.UpdateNonAcctNameByIdRequest payload) =>
    _client.RequestAsync<NonAccountNameService.UpdateNonAcctNameByIdRequest,  Memberwise.Symxify.Models.Result<NonAccountNameService.NonAcctNameUpdateByIdResponse>>("updateNonAcctNameByID", payload, "nonaccountname");


public Task<Memberwise.Symxify.Models.Result<NonAccountNameService.NonAcctNameCreateResponse>> CreateNonAcctName(NonAccountNameService.CreateNonAcctNameRequest payload) =>
    _client.RequestAsync<NonAccountNameService.CreateNonAcctNameRequest,  Memberwise.Symxify.Models.Result<NonAccountNameService.NonAcctNameCreateResponse>>("createNonAcctName", payload, "nonaccountname");


public Task<Memberwise.Symxify.Models.Result<NonAccountNameService.NonAcctNameDeleteResponse>> DeleteNonAcctName(NonAccountNameService.DeleteNonAcctNameRequest payload) =>
    _client.RequestAsync<NonAccountNameService.DeleteNonAcctNameRequest,  Memberwise.Symxify.Models.Result<NonAccountNameService.NonAcctNameDeleteResponse>>("deleteNonAcctName", payload, "nonaccountname");


public Task<Memberwise.Symxify.Models.Result<DealerService.DealerSelectFieldsResponse>> GetDealerSelectFields(DealerService.DealerSelectFieldsRequest payload) =>
    _client.RequestAsync<DealerService.DealerSelectFieldsRequest,  Memberwise.Symxify.Models.Result<DealerService.DealerSelectFieldsResponse>>("getDealerSelectFields", payload, "dealer");


public Task<Memberwise.Symxify.Models.Result<DealerService.DealerSelectFieldsFilterChildrenResponse>> GetDealerSelectFieldsFilterChildren(DealerService.DealerSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<DealerService.DealerSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<DealerService.DealerSelectFieldsFilterChildrenResponse>>("getDealerSelectFieldsFilterChildren", payload, "dealer");


public Task<Memberwise.Symxify.Models.Result<DealerService.DealerCommentSelectFieldsResponse>> GetDealerCommentSelectFields(DealerService.DealerCommentSelectFieldsRequest payload) =>
    _client.RequestAsync<DealerService.DealerCommentSelectFieldsRequest,  Memberwise.Symxify.Models.Result<DealerService.DealerCommentSelectFieldsResponse>>("getDealerCommentSelectFields", payload, "dealer");


public Task<Memberwise.Symxify.Models.Result<DealerService.DealerCommentPagedListSelectFieldsResponse>> GetDealerCommentPagedListSelectFields(DealerService.DealerCommentPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<DealerService.DealerCommentPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<DealerService.DealerCommentPagedListSelectFieldsResponse>>("getDealerCommentPagedListSelectFields", payload, "dealer");


public Task<Memberwise.Symxify.Models.Result<DealerService.DealerCommentSearchPagedSelectFieldsResponse>> SearchDealerCommentPagedSelectFields(DealerService.DealerCommentSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<DealerService.DealerCommentSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<DealerService.DealerCommentSearchPagedSelectFieldsResponse>>("searchDealerCommentPagedSelectFields", payload, "dealer");


public Task<Memberwise.Symxify.Models.Result<DealerService.DealerFmHistoryPagedListSelectFieldsResponse>> GetDealerFmHistoryPagedListSelectFields(DealerService.DealerFmHistoryPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<DealerService.DealerFmHistoryPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<DealerService.DealerFmHistoryPagedListSelectFieldsResponse>>("getDealerFmHistoryPagedListSelectFields", payload, "dealer");


public Task<Memberwise.Symxify.Models.Result<DealerService.DealerFmHistorySearchPagedSelectFieldsResponse>> SearchDealerFmHistoryPagedSelectFields(DealerService.DealerFmHistorySearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<DealerService.DealerFmHistorySearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<DealerService.DealerFmHistorySearchPagedSelectFieldsResponse>>("searchDealerFmHistoryPagedSelectFields", payload, "dealer");


public Task<Memberwise.Symxify.Models.Result<DealerService.DealerNoteSelectFieldsResponse>> GetDealerNoteSelectFields(DealerService.DealerNoteSelectFieldsRequest payload) =>
    _client.RequestAsync<DealerService.DealerNoteSelectFieldsRequest,  Memberwise.Symxify.Models.Result<DealerService.DealerNoteSelectFieldsResponse>>("getDealerNoteSelectFields", payload, "dealer");


public Task<Memberwise.Symxify.Models.Result<DealerService.DealerNotePagedListSelectFieldsResponse>> GetDealerNotePagedListSelectFields(DealerService.DealerNotePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<DealerService.DealerNotePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<DealerService.DealerNotePagedListSelectFieldsResponse>>("getDealerNotePagedListSelectFields", payload, "dealer");


public Task<Memberwise.Symxify.Models.Result<DealerService.DealerNoteSearchPagedSelectFieldsResponse>> SearchDealerNotePagedSelectFields(DealerService.DealerNoteSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<DealerService.DealerNoteSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<DealerService.DealerNoteSearchPagedSelectFieldsResponse>>("searchDealerNotePagedSelectFields", payload, "dealer");


public Task<Memberwise.Symxify.Models.Result<DealerService.DealerTrackingSelectFieldsResponse>> GetDealerTrackingSelectFields(DealerService.DealerTrackingSelectFieldsRequest payload) =>
    _client.RequestAsync<DealerService.DealerTrackingSelectFieldsRequest,  Memberwise.Symxify.Models.Result<DealerService.DealerTrackingSelectFieldsResponse>>("getDealerTrackingSelectFields", payload, "dealer");


public Task<Memberwise.Symxify.Models.Result<DealerService.DealerTrackingPagedListSelectFieldsResponse>> GetDealerTrackingPagedListSelectFields(DealerService.DealerTrackingPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<DealerService.DealerTrackingPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<DealerService.DealerTrackingPagedListSelectFieldsResponse>>("getDealerTrackingPagedListSelectFields", payload, "dealer");


public Task<Memberwise.Symxify.Models.Result<DealerService.DealerTrackingSearchPagedSelectFieldsResponse>> SearchDealerTrackingPagedSelectFields(DealerService.DealerTrackingSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<DealerService.DealerTrackingSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<DealerService.DealerTrackingSearchPagedSelectFieldsResponse>>("searchDealerTrackingPagedSelectFields", payload, "dealer");


public Task<Memberwise.Symxify.Models.Result<DealerService.ReservePlanSelectFieldsResponse>> GetReservePlanSelectFields(DealerService.ReservePlanSelectFieldsRequest payload) =>
    _client.RequestAsync<DealerService.ReservePlanSelectFieldsRequest,  Memberwise.Symxify.Models.Result<DealerService.ReservePlanSelectFieldsResponse>>("getReservePlanSelectFields", payload, "dealer");


public Task<Memberwise.Symxify.Models.Result<DealerService.ReservePlanSelectFieldsFilterChildrenResponse>> GetReservePlanSelectFieldsFilterChildren(DealerService.ReservePlanSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<DealerService.ReservePlanSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<DealerService.ReservePlanSelectFieldsFilterChildrenResponse>>("getReservePlanSelectFieldsFilterChildren", payload, "dealer");


public Task<Memberwise.Symxify.Models.Result<DealerService.ReservePlanPagedListSelectFieldsResponse>> GetReservePlanPagedListSelectFields(DealerService.ReservePlanPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<DealerService.ReservePlanPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<DealerService.ReservePlanPagedListSelectFieldsResponse>>("getReservePlanPagedListSelectFields", payload, "dealer");


public Task<Memberwise.Symxify.Models.Result<DealerService.ReservePlanSearchPagedSelectFieldsResponse>> SearchReservePlanPagedSelectFields(DealerService.ReservePlanSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<DealerService.ReservePlanSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<DealerService.ReservePlanSearchPagedSelectFieldsResponse>>("searchReservePlanPagedSelectFields", payload, "dealer");


public Task<Memberwise.Symxify.Models.Result<DealerService.ReservePlanLoanSelectFieldsResponse>> GetReservePlanLoanSelectFields(DealerService.ReservePlanLoanSelectFieldsRequest payload) =>
    _client.RequestAsync<DealerService.ReservePlanLoanSelectFieldsRequest,  Memberwise.Symxify.Models.Result<DealerService.ReservePlanLoanSelectFieldsResponse>>("getReservePlanLoanSelectFields", payload, "dealer");


public Task<Memberwise.Symxify.Models.Result<DealerService.ReservePlanLoanPagedListSelectFieldsResponse>> GetReservePlanLoanPagedListSelectFields(DealerService.ReservePlanLoanPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<DealerService.ReservePlanLoanPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<DealerService.ReservePlanLoanPagedListSelectFieldsResponse>>("getReservePlanLoanPagedListSelectFields", payload, "dealer");


public Task<Memberwise.Symxify.Models.Result<DealerService.ReservePlanLoanSearchPagedSelectFieldsResponse>> SearchReservePlanLoanPagedSelectFields(DealerService.ReservePlanLoanSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<DealerService.ReservePlanLoanSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<DealerService.ReservePlanLoanSearchPagedSelectFieldsResponse>>("searchReservePlanLoanPagedSelectFields", payload, "dealer");


public Task<Memberwise.Symxify.Models.Result<DealerService.ReservePlanTrackingSelectFieldsResponse>> GetReservePlanTrackingSelectFields(DealerService.ReservePlanTrackingSelectFieldsRequest payload) =>
    _client.RequestAsync<DealerService.ReservePlanTrackingSelectFieldsRequest,  Memberwise.Symxify.Models.Result<DealerService.ReservePlanTrackingSelectFieldsResponse>>("getReservePlanTrackingSelectFields", payload, "dealer");


public Task<Memberwise.Symxify.Models.Result<DealerService.ReservePlanTrackingPagedListSelectFieldsResponse>> GetReservePlanTrackingPagedListSelectFields(DealerService.ReservePlanTrackingPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<DealerService.ReservePlanTrackingPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<DealerService.ReservePlanTrackingPagedListSelectFieldsResponse>>("getReservePlanTrackingPagedListSelectFields", payload, "dealer");


public Task<Memberwise.Symxify.Models.Result<DealerService.ReservePlanTrackingSearchPagedSelectFieldsResponse>> SearchReservePlanTrackingPagedSelectFields(DealerService.ReservePlanTrackingSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<DealerService.ReservePlanTrackingSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<DealerService.ReservePlanTrackingSearchPagedSelectFieldsResponse>>("searchReservePlanTrackingPagedSelectFields", payload, "dealer");


public Task<Memberwise.Symxify.Models.Result<DealerService.ReservePlanTransactionPagedListSelectFieldsResponse>> GetReservePlanTransactionPagedListSelectFields(DealerService.ReservePlanTransactionPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<DealerService.ReservePlanTransactionPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<DealerService.ReservePlanTransactionPagedListSelectFieldsResponse>>("getReservePlanTransactionPagedListSelectFields", payload, "dealer");


public Task<Memberwise.Symxify.Models.Result<DealerService.ReservePlanTransactionSearchPagedSelectFieldsResponse>> SearchReservePlanTransactionPagedSelectFields(DealerService.ReservePlanTransactionSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<DealerService.ReservePlanTransactionSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<DealerService.ReservePlanTransactionSearchPagedSelectFieldsResponse>>("searchReservePlanTransactionPagedSelectFields", payload, "dealer");


public Task<Memberwise.Symxify.Models.Result<AccountsPayableService.VendorSelectFieldsResponse>> GetVendorSelectFields(AccountsPayableService.VendorSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountsPayableService.VendorSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountsPayableService.VendorSelectFieldsResponse>>("getVendorSelectFields", payload, "accountspayable");


public Task<Memberwise.Symxify.Models.Result<AccountsPayableService.VendorSelectFieldsFilterChildrenResponse>> GetVendorSelectFieldsFilterChildren(AccountsPayableService.VendorSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<AccountsPayableService.VendorSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<AccountsPayableService.VendorSelectFieldsFilterChildrenResponse>>("getVendorSelectFieldsFilterChildren", payload, "accountspayable");


public Task<Memberwise.Symxify.Models.Result<AccountsPayableService.InvoiceSelectFieldsResponse>> GetInvoiceSelectFields(AccountsPayableService.InvoiceSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountsPayableService.InvoiceSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountsPayableService.InvoiceSelectFieldsResponse>>("getInvoiceSelectFields", payload, "accountspayable");


public Task<Memberwise.Symxify.Models.Result<AccountsPayableService.InvoiceSelectFieldsFilterChildrenResponse>> GetInvoiceSelectFieldsFilterChildren(AccountsPayableService.InvoiceSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<AccountsPayableService.InvoiceSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<AccountsPayableService.InvoiceSelectFieldsFilterChildrenResponse>>("getInvoiceSelectFieldsFilterChildren", payload, "accountspayable");


public Task<Memberwise.Symxify.Models.Result<AccountsPayableService.InvoicePagedListSelectFieldsResponse>> GetInvoicePagedListSelectFields(AccountsPayableService.InvoicePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountsPayableService.InvoicePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountsPayableService.InvoicePagedListSelectFieldsResponse>>("getInvoicePagedListSelectFields", payload, "accountspayable");


public Task<Memberwise.Symxify.Models.Result<AccountsPayableService.InvoiceSearchPagedSelectFieldsResponse>> SearchInvoicePagedSelectFields(AccountsPayableService.InvoiceSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountsPayableService.InvoiceSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountsPayableService.InvoiceSearchPagedSelectFieldsResponse>>("searchInvoicePagedSelectFields", payload, "accountspayable");


public Task<Memberwise.Symxify.Models.Result<AccountsPayableService.InvoiceNoteSelectFieldsResponse>> GetInvoiceNoteSelectFields(AccountsPayableService.InvoiceNoteSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountsPayableService.InvoiceNoteSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountsPayableService.InvoiceNoteSelectFieldsResponse>>("getInvoiceNoteSelectFields", payload, "accountspayable");


public Task<Memberwise.Symxify.Models.Result<AccountsPayableService.InvoiceNotePagedListSelectFieldsResponse>> GetInvoiceNotePagedListSelectFields(AccountsPayableService.InvoiceNotePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountsPayableService.InvoiceNotePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountsPayableService.InvoiceNotePagedListSelectFieldsResponse>>("getInvoiceNotePagedListSelectFields", payload, "accountspayable");


public Task<Memberwise.Symxify.Models.Result<AccountsPayableService.InvoiceNoteSearchPagedSelectFieldsResponse>> SearchInvoiceNotePagedSelectFields(AccountsPayableService.InvoiceNoteSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountsPayableService.InvoiceNoteSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountsPayableService.InvoiceNoteSearchPagedSelectFieldsResponse>>("searchInvoiceNotePagedSelectFields", payload, "accountspayable");


public Task<Memberwise.Symxify.Models.Result<AccountsPayableService.VendorFmHistoryPagedListSelectFieldsResponse>> GetVendorFmHistoryPagedListSelectFields(AccountsPayableService.VendorFmHistoryPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountsPayableService.VendorFmHistoryPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountsPayableService.VendorFmHistoryPagedListSelectFieldsResponse>>("getVendorFmHistoryPagedListSelectFields", payload, "accountspayable");


public Task<Memberwise.Symxify.Models.Result<AccountsPayableService.VendorFmHistorySearchPagedSelectFieldsResponse>> SearchVendorFmHistoryPagedSelectFields(AccountsPayableService.VendorFmHistorySearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountsPayableService.VendorFmHistorySearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountsPayableService.VendorFmHistorySearchPagedSelectFieldsResponse>>("searchVendorFmHistoryPagedSelectFields", payload, "accountspayable");


public Task<Memberwise.Symxify.Models.Result<AccountsPayableService.VendorUpdateByIdResponse>> UpdateVendorById(AccountsPayableService.UpdateVendorByIdRequest payload) =>
    _client.RequestAsync<AccountsPayableService.UpdateVendorByIdRequest,  Memberwise.Symxify.Models.Result<AccountsPayableService.VendorUpdateByIdResponse>>("updateVendorByID", payload, "accountspayable");


public Task<Memberwise.Symxify.Models.Result<AccountsPayableService.InvoiceUpdateByIdResponse>> UpdateInvoiceById(AccountsPayableService.UpdateInvoiceByIdRequest payload) =>
    _client.RequestAsync<AccountsPayableService.UpdateInvoiceByIdRequest,  Memberwise.Symxify.Models.Result<AccountsPayableService.InvoiceUpdateByIdResponse>>("updateInvoiceByID", payload, "accountspayable");


public Task<Memberwise.Symxify.Models.Result<AccountsPayableService.InvoiceNoteUpdateByIdResponse>> UpdateInvoiceNoteById(AccountsPayableService.UpdateInvoiceNoteByIdRequest payload) =>
    _client.RequestAsync<AccountsPayableService.UpdateInvoiceNoteByIdRequest,  Memberwise.Symxify.Models.Result<AccountsPayableService.InvoiceNoteUpdateByIdResponse>>("updateInvoiceNoteByID", payload, "accountspayable");


public Task<Memberwise.Symxify.Models.Result<AccountsPayableService.VendorCreateResponse>> CreateVendor(AccountsPayableService.CreateVendorRequest payload) =>
    _client.RequestAsync<AccountsPayableService.CreateVendorRequest,  Memberwise.Symxify.Models.Result<AccountsPayableService.VendorCreateResponse>>("createVendor", payload, "accountspayable");


public Task<Memberwise.Symxify.Models.Result<AccountsPayableService.InvoiceCreateResponse>> CreateInvoice(AccountsPayableService.CreateInvoiceRequest payload) =>
    _client.RequestAsync<AccountsPayableService.CreateInvoiceRequest,  Memberwise.Symxify.Models.Result<AccountsPayableService.InvoiceCreateResponse>>("createInvoice", payload, "accountspayable");


public Task<Memberwise.Symxify.Models.Result<AccountsPayableService.InvoiceNoteCreateResponse>> CreateInvoiceNote(AccountsPayableService.CreateInvoiceNoteRequest payload) =>
    _client.RequestAsync<AccountsPayableService.CreateInvoiceNoteRequest,  Memberwise.Symxify.Models.Result<AccountsPayableService.InvoiceNoteCreateResponse>>("createInvoiceNote", payload, "accountspayable");


public Task<Memberwise.Symxify.Models.Result<AccountsPayableService.VendorDeleteResponse>> DeleteVendor(AccountsPayableService.DeleteVendorRequest payload) =>
    _client.RequestAsync<AccountsPayableService.DeleteVendorRequest,  Memberwise.Symxify.Models.Result<AccountsPayableService.VendorDeleteResponse>>("deleteVendor", payload, "accountspayable");


public Task<Memberwise.Symxify.Models.Result<AccountsPayableService.InvoiceDeleteResponse>> DeleteInvoice(AccountsPayableService.DeleteInvoiceRequest payload) =>
    _client.RequestAsync<AccountsPayableService.DeleteInvoiceRequest,  Memberwise.Symxify.Models.Result<AccountsPayableService.InvoiceDeleteResponse>>("deleteInvoice", payload, "accountspayable");


public Task<Memberwise.Symxify.Models.Result<AccountsPayableService.InvoiceNoteDeleteResponse>> DeleteInvoiceNote(AccountsPayableService.DeleteInvoiceNoteRequest payload) =>
    _client.RequestAsync<AccountsPayableService.DeleteInvoiceNoteRequest,  Memberwise.Symxify.Models.Result<AccountsPayableService.InvoiceNoteDeleteResponse>>("deleteInvoiceNote", payload, "accountspayable");


public Task<Memberwise.Symxify.Models.Result<EcaaService.AuthenticateResponse>> Authenticate(EcaaService.AuthenticateRequest payload) =>
    _client.RequestAsync<EcaaService.AuthenticateRequest,  Memberwise.Symxify.Models.Result<EcaaService.AuthenticateResponse>>("authenticate", payload, "ecaa");


public Task<Memberwise.Symxify.Models.Result<EcaaService.AuthenticateWithAuthorizationResponse>> AuthenticateWithAuthorization(EcaaService.AuthenticateWithAuthorizationRequest payload) =>
    _client.RequestAsync<EcaaService.AuthenticateWithAuthorizationRequest,  Memberwise.Symxify.Models.Result<EcaaService.AuthenticateWithAuthorizationResponse>>("authenticateWithAuthorization", payload, "ecaa");


public Task<Memberwise.Symxify.Models.Result<EcaaService.GetPrincipalsResponse>> GetPrincipals(EcaaService.GetPrincipalsRequest payload) =>
    _client.RequestAsync<EcaaService.GetPrincipalsRequest,  Memberwise.Symxify.Models.Result<EcaaService.GetPrincipalsResponse>>("getPrincipals", payload, "ecaa");


public Task<Memberwise.Symxify.Models.Result<EcaaService.InitKerberosAuthenticationResponse>> InitKerberosAuthentication(EcaaService.InitKerberosAuthenticationRequest payload) =>
    _client.RequestAsync<EcaaService.InitKerberosAuthenticationRequest,  Memberwise.Symxify.Models.Result<EcaaService.InitKerberosAuthenticationResponse>>("initKerberosAuthentication", payload, "ecaa");


public Task<Memberwise.Symxify.Models.Result<EcaaService.AuthorizeSymResponse>> AuthorizeSym(EcaaService.AuthorizeSymRequest payload) =>
    _client.RequestAsync<EcaaService.AuthorizeSymRequest,  Memberwise.Symxify.Models.Result<EcaaService.AuthorizeSymResponse>>("authorizeSym", payload, "ecaa");


public Task<Memberwise.Symxify.Models.Result<EcaaService.ChangeSymitarPasswordResponse>> ChangeSymitarPassword(EcaaService.ChangeSymitarPasswordRequest payload) =>
    _client.RequestAsync<EcaaService.ChangeSymitarPasswordRequest,  Memberwise.Symxify.Models.Result<EcaaService.ChangeSymitarPasswordResponse>>("changeSymitarPassword", payload, "ecaa");


public Task<Memberwise.Symxify.Models.Result<EcaaService.AuthenticateMemberResponse>> AuthenticateMember(EcaaService.AuthenticateMemberRequest payload) =>
    _client.RequestAsync<EcaaService.AuthenticateMemberRequest,  Memberwise.Symxify.Models.Result<EcaaService.AuthenticateMemberResponse>>("authenticateMember", payload, "ecaa");


public Task<Memberwise.Symxify.Models.Result<EcaaService.AuthenticateServiceResponse>> AuthenticateService(EcaaService.AuthenticateServiceRequest payload) =>
    _client.RequestAsync<EcaaService.AuthenticateServiceRequest,  Memberwise.Symxify.Models.Result<EcaaService.AuthenticateServiceResponse>>("authenticateService", payload, "ecaa");


public Task<Memberwise.Symxify.Models.Result<EcaaService.ChangeMemberHbPasswordResponse>> ChangeMemberHbPassword(EcaaService.ChangeMemberHbPasswordRequest payload) =>
    _client.RequestAsync<EcaaService.ChangeMemberHbPasswordRequest,  Memberwise.Symxify.Models.Result<EcaaService.ChangeMemberHbPasswordResponse>>("changeMemberHBPassword", payload, "ecaa");


public Task<Memberwise.Symxify.Models.Result<EcaaService.ConvertToJwtResponse>> ConvertToJwt(EcaaService.ConvertToJwtRequest payload) =>
    _client.RequestAsync<EcaaService.ConvertToJwtRequest,  Memberwise.Symxify.Models.Result<EcaaService.ConvertToJwtResponse>>("convertToJWT", payload, "ecaa");


public Task<Memberwise.Symxify.Models.Result<EcaaService.ConvertToSamlResponse>> ConvertToSaml(EcaaService.ConvertToSamlRequest payload) =>
    _client.RequestAsync<EcaaService.ConvertToSamlRequest,  Memberwise.Symxify.Models.Result<EcaaService.ConvertToSamlResponse>>("convertToSAML", payload, "ecaa");


public Task<Memberwise.Symxify.Models.Result<TransactionsService.TransactionsResponse>> Deposit(TransactionsService.ShareDepositRequest payload) =>
    _client.RequestAsync<TransactionsService.ShareDepositRequest,  Memberwise.Symxify.Models.Result<TransactionsService.TransactionsResponse>>("deposit", payload, "transactions");


public Task<Memberwise.Symxify.Models.Result<TransactionsService.TransactionsResponse>> Withdraw(TransactionsService.WithdrawalRequest payload) =>
    _client.RequestAsync<TransactionsService.WithdrawalRequest,  Memberwise.Symxify.Models.Result<TransactionsService.TransactionsResponse>>("withdraw", payload, "transactions");


public Task<Memberwise.Symxify.Models.Result<TransactionsService.TransactionsResponse>> NewLoan(TransactionsService.NewLoanRequest payload) =>
    _client.RequestAsync<TransactionsService.NewLoanRequest,  Memberwise.Symxify.Models.Result<TransactionsService.TransactionsResponse>>("newLoan", payload, "transactions");


public Task<Memberwise.Symxify.Models.Result<TransactionsService.TransactionsResponse>> PayBill(TransactionsService.BillPaymentRequest payload) =>
    _client.RequestAsync<TransactionsService.BillPaymentRequest,  Memberwise.Symxify.Models.Result<TransactionsService.TransactionsResponse>>("payBill", payload, "transactions");


public Task<Memberwise.Symxify.Models.Result<TransactionsService.TransactionsResponse>> WithdrawFee(TransactionsService.WithdrawFeeRequest payload) =>
    _client.RequestAsync<TransactionsService.WithdrawFeeRequest,  Memberwise.Symxify.Models.Result<TransactionsService.TransactionsResponse>>("withdrawFee", payload, "transactions");


public Task<Memberwise.Symxify.Models.Result<TransactionsService.TransactionsResponse>> Transfer(TransactionsService.TransferRequest payload) =>
    _client.RequestAsync<TransactionsService.TransferRequest,  Memberwise.Symxify.Models.Result<TransactionsService.TransactionsResponse>>("transfer", payload, "transactions");


public Task<Memberwise.Symxify.Models.Result<TransactionsService.TransactionsResponse>> StopCheckPayment(TransactionsService.StopCheckPaymentRequest payload) =>
    _client.RequestAsync<TransactionsService.StopCheckPaymentRequest,  Memberwise.Symxify.Models.Result<TransactionsService.TransactionsResponse>>("stopCheckPayment", payload, "transactions");


public Task<Memberwise.Symxify.Models.Result<TransactionsService.TransactionsResponse>> LoanAddon(TransactionsService.LoanAddonRequest payload) =>
    _client.RequestAsync<TransactionsService.LoanAddonRequest,  Memberwise.Symxify.Models.Result<TransactionsService.TransactionsResponse>>("loanAddon", payload, "transactions");


public Task<Memberwise.Symxify.Models.Result<TransactionsService.TransactionsResponse>> PayLoan(TransactionsService.LoanPaymentRequest payload) =>
    _client.RequestAsync<TransactionsService.LoanPaymentRequest,  Memberwise.Symxify.Models.Result<TransactionsService.TransactionsResponse>>("payLoan", payload, "transactions");


public Task<Memberwise.Symxify.Models.Result<TransactionsService.TransactionsResponse>> GlToGlPost(TransactionsService.GlToGlPostingRequest payload) =>
    _client.RequestAsync<TransactionsService.GlToGlPostingRequest,  Memberwise.Symxify.Models.Result<TransactionsService.TransactionsResponse>>("glToGlPost", payload, "transactions");


public Task<Memberwise.Symxify.Models.Result<TransactionsService.GetDonorRecipientAccountsResponse>> GetDonorRecipientAccounts(TransactionsService.GetDonorRecipientAccountsRequest payload) =>
    _client.RequestAsync<TransactionsService.GetDonorRecipientAccountsRequest,  Memberwise.Symxify.Models.Result<TransactionsService.GetDonorRecipientAccountsResponse>>("getDonorRecipientAccounts", payload, "transactions");


public Task<Memberwise.Symxify.Models.Result<ParticipantService.ParticipantSelectFieldsResponse>> GetParticipantSelectFields(ParticipantService.ParticipantSelectFieldsRequest payload) =>
    _client.RequestAsync<ParticipantService.ParticipantSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParticipantService.ParticipantSelectFieldsResponse>>("getParticipantSelectFields", payload, "participant");


public Task<Memberwise.Symxify.Models.Result<ParticipantService.ParticipantSelectFieldsFilterChildrenResponse>> GetParticipantSelectFieldsFilterChildren(ParticipantService.ParticipantSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<ParticipantService.ParticipantSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<ParticipantService.ParticipantSelectFieldsFilterChildrenResponse>>("getParticipantSelectFieldsFilterChildren", payload, "participant");


public Task<Memberwise.Symxify.Models.Result<ParticipantService.ParticipantFmHistoryPagedListSelectFieldsResponse>> GetParticipantFmHistoryPagedListSelectFields(ParticipantService.ParticipantFmHistoryPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParticipantService.ParticipantFmHistoryPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParticipantService.ParticipantFmHistoryPagedListSelectFieldsResponse>>("getParticipantFmHistoryPagedListSelectFields", payload, "participant");


public Task<Memberwise.Symxify.Models.Result<ParticipantService.ParticipantFmHistorySearchPagedSelectFieldsResponse>> SearchParticipantFmHistoryPagedSelectFields(ParticipantService.ParticipantFmHistorySearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParticipantService.ParticipantFmHistorySearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParticipantService.ParticipantFmHistorySearchPagedSelectFieldsResponse>>("searchParticipantFmHistoryPagedSelectFields", payload, "participant");


public Task<Memberwise.Symxify.Models.Result<ParticipantService.ParticipantNoteSelectFieldsResponse>> GetParticipantNoteSelectFields(ParticipantService.ParticipantNoteSelectFieldsRequest payload) =>
    _client.RequestAsync<ParticipantService.ParticipantNoteSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParticipantService.ParticipantNoteSelectFieldsResponse>>("getParticipantNoteSelectFields", payload, "participant");


public Task<Memberwise.Symxify.Models.Result<ParticipantService.ParticipantNotePagedListSelectFieldsResponse>> GetParticipantNotePagedListSelectFields(ParticipantService.ParticipantNotePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParticipantService.ParticipantNotePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParticipantService.ParticipantNotePagedListSelectFieldsResponse>>("getParticipantNotePagedListSelectFields", payload, "participant");


public Task<Memberwise.Symxify.Models.Result<ParticipantService.ParticipantNoteSearchPagedSelectFieldsResponse>> SearchParticipantNotePagedSelectFields(ParticipantService.ParticipantNoteSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParticipantService.ParticipantNoteSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParticipantService.ParticipantNoteSearchPagedSelectFieldsResponse>>("searchParticipantNotePagedSelectFields", payload, "participant");


public Task<Memberwise.Symxify.Models.Result<ParticipantService.ParticipantTransactionPagedListSelectFieldsResponse>> GetParticipantTransactionPagedListSelectFields(ParticipantService.ParticipantTransactionPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<ParticipantService.ParticipantTransactionPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParticipantService.ParticipantTransactionPagedListSelectFieldsResponse>>("getParticipantTransactionPagedListSelectFields", payload, "participant");


public Task<Memberwise.Symxify.Models.Result<ParticipantService.ParticipantTransactionSearchPagedSelectFieldsResponse>> SearchParticipantTransactionPagedSelectFields(ParticipantService.ParticipantTransactionSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<ParticipantService.ParticipantTransactionSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<ParticipantService.ParticipantTransactionSearchPagedSelectFieldsResponse>>("searchParticipantTransactionPagedSelectFields", payload, "participant");


public Task<Memberwise.Symxify.Models.Result<AccountService.AccountSelectFieldsResponse>> GetAccountSelectFields(AccountService.AccountSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.AccountSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.AccountSelectFieldsResponse>>("getAccountSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.AccountSelectFieldsFilterChildrenResponse>> GetAccountSelectFieldsFilterChildren(AccountService.AccountSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<AccountService.AccountSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<AccountService.AccountSelectFieldsFilterChildrenResponse>>("getAccountSelectFieldsFilterChildren", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.BatchAchOrigSelectFieldsResponse>> GetBatchAchOrigSelectFields(AccountService.BatchAchOrigSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.BatchAchOrigSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.BatchAchOrigSelectFieldsResponse>>("getBatchAchOrigSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.BatchAchOrigPagedListSelectFieldsResponse>> GetBatchAchOrigPagedListSelectFields(AccountService.BatchAchOrigPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.BatchAchOrigPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.BatchAchOrigPagedListSelectFieldsResponse>>("getBatchAchOrigPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.BatchAchOrigSearchPagedSelectFieldsResponse>> SearchBatchAchOrigPagedSelectFields(AccountService.BatchAchOrigSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.BatchAchOrigSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.BatchAchOrigSearchPagedSelectFieldsResponse>>("searchBatchAchOrigPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CardSelectFieldsResponse>> GetCardSelectFields(AccountService.CardSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.CardSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.CardSelectFieldsResponse>>("getCardSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CardSelectFieldsFilterChildrenResponse>> GetCardSelectFieldsFilterChildren(AccountService.CardSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<AccountService.CardSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<AccountService.CardSelectFieldsFilterChildrenResponse>>("getCardSelectFieldsFilterChildren", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CardPagedListSelectFieldsResponse>> GetCardPagedListSelectFields(AccountService.CardPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.CardPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.CardPagedListSelectFieldsResponse>>("getCardPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CardSearchPagedSelectFieldsResponse>> SearchCardPagedSelectFields(AccountService.CardSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.CardSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.CardSearchPagedSelectFieldsResponse>>("searchCardPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CardAccessSelectFieldsResponse>> GetCardAccessSelectFields(AccountService.CardAccessSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.CardAccessSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.CardAccessSelectFieldsResponse>>("getCardAccessSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CardAccessPagedListSelectFieldsResponse>> GetCardAccessPagedListSelectFields(AccountService.CardAccessPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.CardAccessPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.CardAccessPagedListSelectFieldsResponse>>("getCardAccessPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CardAccessSearchPagedSelectFieldsResponse>> SearchCardAccessPagedSelectFields(AccountService.CardAccessSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.CardAccessSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.CardAccessSearchPagedSelectFieldsResponse>>("searchCardAccessPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CardNameSelectFieldsResponse>> GetCardNameSelectFields(AccountService.CardNameSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.CardNameSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.CardNameSelectFieldsResponse>>("getCardNameSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CardNamePagedListSelectFieldsResponse>> GetCardNamePagedListSelectFields(AccountService.CardNamePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.CardNamePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.CardNamePagedListSelectFieldsResponse>>("getCardNamePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CardNameSearchPagedSelectFieldsResponse>> SearchCardNamePagedSelectFields(AccountService.CardNameSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.CardNameSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.CardNameSearchPagedSelectFieldsResponse>>("searchCardNamePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CardNoteSelectFieldsResponse>> GetCardNoteSelectFields(AccountService.CardNoteSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.CardNoteSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.CardNoteSelectFieldsResponse>>("getCardNoteSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CardNotePagedListSelectFieldsResponse>> GetCardNotePagedListSelectFields(AccountService.CardNotePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.CardNotePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.CardNotePagedListSelectFieldsResponse>>("getCardNotePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CardNoteSearchPagedSelectFieldsResponse>> SearchCardNotePagedSelectFields(AccountService.CardNoteSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.CardNoteSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.CardNoteSearchPagedSelectFieldsResponse>>("searchCardNotePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CpWorkCardSelectFieldsFilterChildrenResponse>> GetCpWorkCardSelectFieldsFilterChildren(AccountService.CpWorkCardSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<AccountService.CpWorkCardSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<AccountService.CpWorkCardSelectFieldsFilterChildrenResponse>>("getCpWorkCardSelectFieldsFilterChildren", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CpWorkCardPagedListSelectFieldsResponse>> GetCpWorkCardPagedListSelectFields(AccountService.CpWorkCardPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.CpWorkCardPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.CpWorkCardPagedListSelectFieldsResponse>>("getCpWorkCardPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CpWorkCardSearchPagedSelectFieldsResponse>> SearchCpWorkCardPagedSelectFields(AccountService.CpWorkCardSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.CpWorkCardSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.CpWorkCardSearchPagedSelectFieldsResponse>>("searchCpWorkCardPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CpWorkCardNoteSelectFieldsResponse>> GetCpWorkCardNoteSelectFields(AccountService.CpWorkCardNoteSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.CpWorkCardNoteSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.CpWorkCardNoteSelectFieldsResponse>>("getCpWorkCardNoteSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CpWorkCardNotePagedListSelectFieldsResponse>> GetCpWorkCardNotePagedListSelectFields(AccountService.CpWorkCardNotePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.CpWorkCardNotePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.CpWorkCardNotePagedListSelectFieldsResponse>>("getCpWorkCardNotePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CpWorkCardNoteSearchPagedSelectFieldsResponse>> SearchCpWorkCardNotePagedSelectFields(AccountService.CpWorkCardNoteSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.CpWorkCardNoteSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.CpWorkCardNoteSearchPagedSelectFieldsResponse>>("searchCpWorkCardNotePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CpWorkCardTrackingSelectFieldsResponse>> GetCpWorkCardTrackingSelectFields(AccountService.CpWorkCardTrackingSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.CpWorkCardTrackingSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.CpWorkCardTrackingSelectFieldsResponse>>("getCpWorkCardTrackingSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CpWorkCardTrackingPagedListSelectFieldsResponse>> GetCpWorkCardTrackingPagedListSelectFields(AccountService.CpWorkCardTrackingPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.CpWorkCardTrackingPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.CpWorkCardTrackingPagedListSelectFieldsResponse>>("getCpWorkCardTrackingPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CpWorkCardTrackingSearchPagedSelectFieldsResponse>> SearchCpWorkCardTrackingPagedSelectFields(AccountService.CpWorkCardTrackingSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.CpWorkCardTrackingSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.CpWorkCardTrackingSearchPagedSelectFieldsResponse>>("searchCpWorkCardTrackingPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CredRepSelectFieldsResponse>> GetCredRepSelectFields(AccountService.CredRepSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.CredRepSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.CredRepSelectFieldsResponse>>("getCredRepSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CredRepSelectFieldsFilterChildrenResponse>> GetCredRepSelectFieldsFilterChildren(AccountService.CredRepSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<AccountService.CredRepSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<AccountService.CredRepSelectFieldsFilterChildrenResponse>>("getCredRepSelectFieldsFilterChildren", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CredRepPagedListSelectFieldsResponse>> GetCredRepPagedListSelectFields(AccountService.CredRepPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.CredRepPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.CredRepPagedListSelectFieldsResponse>>("getCredRepPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CredRepSearchPagedSelectFieldsResponse>> SearchCredRepPagedSelectFields(AccountService.CredRepSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.CredRepSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.CredRepSearchPagedSelectFieldsResponse>>("searchCredRepPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CredRepItemPagedListSelectFieldsResponse>> GetCredRepItemPagedListSelectFields(AccountService.CredRepItemPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.CredRepItemPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.CredRepItemPagedListSelectFieldsResponse>>("getCredRepItemPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CredRepItemSearchPagedSelectFieldsResponse>> SearchCredRepItemPagedSelectFields(AccountService.CredRepItemSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.CredRepItemSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.CredRepItemSearchPagedSelectFieldsResponse>>("searchCredRepItemPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.EftSelectFieldsResponse>> GetEftSelectFields(AccountService.EftSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.EftSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.EftSelectFieldsResponse>>("getEftSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.EftSelectFieldsFilterChildrenResponse>> GetEftSelectFieldsFilterChildren(AccountService.EftSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<AccountService.EftSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<AccountService.EftSelectFieldsFilterChildrenResponse>>("getEftSelectFieldsFilterChildren", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.EftPagedListSelectFieldsResponse>> GetEftPagedListSelectFields(AccountService.EftPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.EftPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.EftPagedListSelectFieldsResponse>>("getEftPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.EftSearchPagedSelectFieldsResponse>> SearchEftPagedSelectFields(AccountService.EftSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.EftSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.EftSearchPagedSelectFieldsResponse>>("searchEftPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.EftAddendaInfoSelectFieldsResponse>> GetEftAddendaInfoSelectFields(AccountService.EftAddendaInfoSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.EftAddendaInfoSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.EftAddendaInfoSelectFieldsResponse>>("getEftAddendaInfoSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.EftAddendaInfoPagedListSelectFieldsResponse>> GetEftAddendaInfoPagedListSelectFields(AccountService.EftAddendaInfoPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.EftAddendaInfoPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.EftAddendaInfoPagedListSelectFieldsResponse>>("getEftAddendaInfoPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.EftAddendaInfoSearchPagedSelectFieldsResponse>> SearchEftAddendaInfoPagedSelectFields(AccountService.EftAddendaInfoSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.EftAddendaInfoSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.EftAddendaInfoSearchPagedSelectFieldsResponse>>("searchEftAddendaInfoPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.EftNameSelectFieldsResponse>> GetEftNameSelectFields(AccountService.EftNameSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.EftNameSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.EftNameSelectFieldsResponse>>("getEftNameSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.EftNamePagedListSelectFieldsResponse>> GetEftNamePagedListSelectFields(AccountService.EftNamePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.EftNamePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.EftNamePagedListSelectFieldsResponse>>("getEftNamePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.EftNameSearchPagedSelectFieldsResponse>> SearchEftNamePagedSelectFields(AccountService.EftNameSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.EftNameSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.EftNameSearchPagedSelectFieldsResponse>>("searchEftNamePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.EftTransferSelectFieldsResponse>> GetEftTransferSelectFields(AccountService.EftTransferSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.EftTransferSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.EftTransferSelectFieldsResponse>>("getEftTransferSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.EftTransferPagedListSelectFieldsResponse>> GetEftTransferPagedListSelectFields(AccountService.EftTransferPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.EftTransferPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.EftTransferPagedListSelectFieldsResponse>>("getEftTransferPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.EftTransferSearchPagedSelectFieldsResponse>> SearchEftTransferPagedSelectFields(AccountService.EftTransferSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.EftTransferSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.EftTransferSearchPagedSelectFieldsResponse>>("searchEftTransferPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ExternalAccountSelectFieldsResponse>> GetExternalAccountSelectFields(AccountService.ExternalAccountSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.ExternalAccountSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.ExternalAccountSelectFieldsResponse>>("getExternalAccountSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ExternalAccountPagedListSelectFieldsResponse>> GetExternalAccountPagedListSelectFields(AccountService.ExternalAccountPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.ExternalAccountPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.ExternalAccountPagedListSelectFieldsResponse>>("getExternalAccountPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ExternalAccountSearchPagedSelectFieldsResponse>> SearchExternalAccountPagedSelectFields(AccountService.ExternalAccountSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.ExternalAccountSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.ExternalAccountSearchPagedSelectFieldsResponse>>("searchExternalAccountPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ExternalLoanSelectFieldsResponse>> GetExternalLoanSelectFields(AccountService.ExternalLoanSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.ExternalLoanSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.ExternalLoanSelectFieldsResponse>>("getExternalLoanSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ExternalLoanSelectFieldsFilterChildrenResponse>> GetExternalLoanSelectFieldsFilterChildren(AccountService.ExternalLoanSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<AccountService.ExternalLoanSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<AccountService.ExternalLoanSelectFieldsFilterChildrenResponse>>("getExternalLoanSelectFieldsFilterChildren", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ExternalLoanPagedListSelectFieldsResponse>> GetExternalLoanPagedListSelectFields(AccountService.ExternalLoanPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.ExternalLoanPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.ExternalLoanPagedListSelectFieldsResponse>>("getExternalLoanPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ExternalLoanSearchPagedSelectFieldsResponse>> SearchExternalLoanPagedSelectFields(AccountService.ExternalLoanSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.ExternalLoanSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.ExternalLoanSearchPagedSelectFieldsResponse>>("searchExternalLoanPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ExternalLoanNameSelectFieldsResponse>> GetExternalLoanNameSelectFields(AccountService.ExternalLoanNameSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.ExternalLoanNameSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.ExternalLoanNameSelectFieldsResponse>>("getExternalLoanNameSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ExternalLoanNamePagedListSelectFieldsResponse>> GetExternalLoanNamePagedListSelectFields(AccountService.ExternalLoanNamePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.ExternalLoanNamePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.ExternalLoanNamePagedListSelectFieldsResponse>>("getExternalLoanNamePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ExternalLoanNameSearchPagedSelectFieldsResponse>> SearchExternalLoanNamePagedSelectFields(AccountService.ExternalLoanNameSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.ExternalLoanNameSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.ExternalLoanNameSearchPagedSelectFieldsResponse>>("searchExternalLoanNamePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ExternalLoanNoteSelectFieldsResponse>> GetExternalLoanNoteSelectFields(AccountService.ExternalLoanNoteSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.ExternalLoanNoteSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.ExternalLoanNoteSelectFieldsResponse>>("getExternalLoanNoteSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ExternalLoanNotePagedListSelectFieldsResponse>> GetExternalLoanNotePagedListSelectFields(AccountService.ExternalLoanNotePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.ExternalLoanNotePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.ExternalLoanNotePagedListSelectFieldsResponse>>("getExternalLoanNotePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ExternalLoanNoteSearchPagedSelectFieldsResponse>> SearchExternalLoanNotePagedSelectFields(AccountService.ExternalLoanNoteSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.ExternalLoanNoteSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.ExternalLoanNoteSearchPagedSelectFieldsResponse>>("searchExternalLoanNotePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ExternalLoanTrackingSelectFieldsResponse>> GetExternalLoanTrackingSelectFields(AccountService.ExternalLoanTrackingSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.ExternalLoanTrackingSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.ExternalLoanTrackingSelectFieldsResponse>>("getExternalLoanTrackingSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ExternalLoanTrackingPagedListSelectFieldsResponse>> GetExternalLoanTrackingPagedListSelectFields(AccountService.ExternalLoanTrackingPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.ExternalLoanTrackingPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.ExternalLoanTrackingPagedListSelectFieldsResponse>>("getExternalLoanTrackingPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ExternalLoanTrackingSearchPagedSelectFieldsResponse>> SearchExternalLoanTrackingPagedSelectFields(AccountService.ExternalLoanTrackingSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.ExternalLoanTrackingSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.ExternalLoanTrackingSearchPagedSelectFieldsResponse>>("searchExternalLoanTrackingPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ExternalLoanTransferSelectFieldsResponse>> GetExternalLoanTransferSelectFields(AccountService.ExternalLoanTransferSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.ExternalLoanTransferSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.ExternalLoanTransferSelectFieldsResponse>>("getExternalLoanTransferSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ExternalLoanTransferPagedListSelectFieldsResponse>> GetExternalLoanTransferPagedListSelectFields(AccountService.ExternalLoanTransferPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.ExternalLoanTransferPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.ExternalLoanTransferPagedListSelectFieldsResponse>>("getExternalLoanTransferPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ExternalLoanTransferSearchPagedSelectFieldsResponse>> SearchExternalLoanTransferPagedSelectFields(AccountService.ExternalLoanTransferSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.ExternalLoanTransferSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.ExternalLoanTransferSearchPagedSelectFieldsResponse>>("searchExternalLoanTransferPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.FmHistoryPagedListSelectFieldsResponse>> GetFmHistoryPagedListSelectFields(AccountService.FmHistoryPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.FmHistoryPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.FmHistoryPagedListSelectFieldsResponse>>("getFmHistoryPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.FmHistorySearchPagedSelectFieldsResponse>> SearchFmHistoryPagedSelectFields(AccountService.FmHistorySearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.FmHistorySearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.FmHistorySearchPagedSelectFieldsResponse>>("searchFmHistoryPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.HouseholdSelectFieldsResponse>> GetHouseholdSelectFields(AccountService.HouseholdSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.HouseholdSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.HouseholdSelectFieldsResponse>>("getHouseholdSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.HouseholdPagedListSelectFieldsResponse>> GetHouseholdPagedListSelectFields(AccountService.HouseholdPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.HouseholdPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.HouseholdPagedListSelectFieldsResponse>>("getHouseholdPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.HouseholdSearchPagedSelectFieldsResponse>> SearchHouseholdPagedSelectFields(AccountService.HouseholdSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.HouseholdSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.HouseholdSearchPagedSelectFieldsResponse>>("searchHouseholdPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.IrsSelectFieldsResponse>> GetIrsSelectFields(AccountService.IrsSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.IrsSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.IrsSelectFieldsResponse>>("getIrsSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.IrsSelectFieldsFilterChildrenResponse>> GetIrsSelectFieldsFilterChildren(AccountService.IrsSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<AccountService.IrsSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<AccountService.IrsSelectFieldsFilterChildrenResponse>>("getIrsSelectFieldsFilterChildren", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.IrsPagedListSelectFieldsResponse>> GetIrsPagedListSelectFields(AccountService.IrsPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.IrsPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.IrsPagedListSelectFieldsResponse>>("getIrsPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.IrsSearchPagedSelectFieldsResponse>> SearchIrsPagedSelectFields(AccountService.IrsSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.IrsSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.IrsSearchPagedSelectFieldsResponse>>("searchIrsPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.IrsDistributionSelectFieldsResponse>> GetIrsDistributionSelectFields(AccountService.IrsDistributionSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.IrsDistributionSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.IrsDistributionSelectFieldsResponse>>("getIrsDistributionSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.IrsDistributionPagedListSelectFieldsResponse>> GetIrsDistributionPagedListSelectFields(AccountService.IrsDistributionPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.IrsDistributionPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.IrsDistributionPagedListSelectFieldsResponse>>("getIrsDistributionPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.IrsDistributionSearchPagedSelectFieldsResponse>> SearchIrsDistributionPagedSelectFields(AccountService.IrsDistributionSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.IrsDistributionSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.IrsDistributionSearchPagedSelectFieldsResponse>>("searchIrsDistributionPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.IrsNameSelectFieldsResponse>> GetIrsNameSelectFields(AccountService.IrsNameSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.IrsNameSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.IrsNameSelectFieldsResponse>>("getIrsNameSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.IrsNamePagedListSelectFieldsResponse>> GetIrsNamePagedListSelectFields(AccountService.IrsNamePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.IrsNamePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.IrsNamePagedListSelectFieldsResponse>>("getIrsNamePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.IrsNameSearchPagedSelectFieldsResponse>> SearchIrsNamePagedSelectFields(AccountService.IrsNameSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.IrsNameSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.IrsNameSearchPagedSelectFieldsResponse>>("searchIrsNamePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanSelectFieldsResponse>> GetLoanSelectFields(AccountService.LoanSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanSelectFieldsResponse>>("getLoanSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanSelectFieldsFilterChildrenResponse>> GetLoanSelectFieldsFilterChildren(AccountService.LoanSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<AccountService.LoanSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanSelectFieldsFilterChildrenResponse>>("getLoanSelectFieldsFilterChildren", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanPagedListSelectFieldsResponse>> GetLoanPagedListSelectFields(AccountService.LoanPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanPagedListSelectFieldsResponse>>("getLoanPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanSearchPagedSelectFieldsResponse>> SearchLoanPagedSelectFields(AccountService.LoanSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanSearchPagedSelectFieldsResponse>>("searchLoanPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanBankruptcySelectFieldsResponse>> GetLoanBankruptcySelectFields(AccountService.LoanBankruptcySelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanBankruptcySelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanBankruptcySelectFieldsResponse>>("getLoanBankruptcySelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanBankruptcySelectFieldsFilterChildrenResponse>> GetLoanBankruptcySelectFieldsFilterChildren(AccountService.LoanBankruptcySelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<AccountService.LoanBankruptcySelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanBankruptcySelectFieldsFilterChildrenResponse>>("getLoanBankruptcySelectFieldsFilterChildren", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanBankruptcyPagedListSelectFieldsResponse>> GetLoanBankruptcyPagedListSelectFields(AccountService.LoanBankruptcyPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanBankruptcyPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanBankruptcyPagedListSelectFieldsResponse>>("getLoanBankruptcyPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanBankruptcySearchPagedSelectFieldsResponse>> SearchLoanBankruptcyPagedSelectFields(AccountService.LoanBankruptcySearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanBankruptcySearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanBankruptcySearchPagedSelectFieldsResponse>>("searchLoanBankruptcyPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanBankruptcyPrepetitionBalSelectFieldsResponse>> GetLoanBankruptcyPrepetitionBalSelectFields(AccountService.LoanBankruptcyPrepetitionBalSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanBankruptcyPrepetitionBalSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanBankruptcyPrepetitionBalSelectFieldsResponse>>("getLoanBankruptcyPrepetitionBalSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanBankruptcyPrepetitionBalPagedListSelectFieldsResponse>> GetLoanBankruptcyPrepetitionBalPagedListSelectFields(AccountService.LoanBankruptcyPrepetitionBalPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanBankruptcyPrepetitionBalPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanBankruptcyPrepetitionBalPagedListSelectFieldsResponse>>("getLoanBankruptcyPrepetitionBalPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanBankruptcyPrepetitionBalSearchPagedSelectFieldsResponse>> SearchLoanBankruptcyPrepetitionBalPagedSelectFields(AccountService.LoanBankruptcyPrepetitionBalSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanBankruptcyPrepetitionBalSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanBankruptcyPrepetitionBalSearchPagedSelectFieldsResponse>>("searchLoanBankruptcyPrepetitionBalPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanBillingSelectFieldsResponse>> GetLoanBillingSelectFields(AccountService.LoanBillingSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanBillingSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanBillingSelectFieldsResponse>>("getLoanBillingSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanBillingPagedListSelectFieldsResponse>> GetLoanBillingPagedListSelectFields(AccountService.LoanBillingPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanBillingPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanBillingPagedListSelectFieldsResponse>>("getLoanBillingPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanBillingSearchPagedSelectFieldsResponse>> SearchLoanBillingPagedSelectFields(AccountService.LoanBillingSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanBillingSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanBillingSearchPagedSelectFieldsResponse>>("searchLoanBillingPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanCheckOrderSelectFieldsResponse>> GetLoanCheckOrderSelectFields(AccountService.LoanCheckOrderSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanCheckOrderSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanCheckOrderSelectFieldsResponse>>("getLoanCheckOrderSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanCheckOrderPagedListSelectFieldsResponse>> GetLoanCheckOrderPagedListSelectFields(AccountService.LoanCheckOrderPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanCheckOrderPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanCheckOrderPagedListSelectFieldsResponse>>("getLoanCheckOrderPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanCheckOrderSearchPagedSelectFieldsResponse>> SearchLoanCheckOrderPagedSelectFields(AccountService.LoanCheckOrderSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanCheckOrderSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanCheckOrderSearchPagedSelectFieldsResponse>>("searchLoanCheckOrderPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanEscrowSelectFieldsResponse>> GetLoanEscrowSelectFields(AccountService.LoanEscrowSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanEscrowSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanEscrowSelectFieldsResponse>>("getLoanEscrowSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanEscrowPagedListSelectFieldsResponse>> GetLoanEscrowPagedListSelectFields(AccountService.LoanEscrowPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanEscrowPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanEscrowPagedListSelectFieldsResponse>>("getLoanEscrowPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanEscrowSearchPagedSelectFieldsResponse>> SearchLoanEscrowPagedSelectFields(AccountService.LoanEscrowSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanEscrowSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanEscrowSearchPagedSelectFieldsResponse>>("searchLoanEscrowPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanEscrowAnalysisSelectFieldsResponse>> GetLoanEscrowAnalysisSelectFields(AccountService.LoanEscrowAnalysisSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanEscrowAnalysisSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanEscrowAnalysisSelectFieldsResponse>>("getLoanEscrowAnalysisSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanEscrowAnalysisPagedListSelectFieldsResponse>> GetLoanEscrowAnalysisPagedListSelectFields(AccountService.LoanEscrowAnalysisPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanEscrowAnalysisPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanEscrowAnalysisPagedListSelectFieldsResponse>>("getLoanEscrowAnalysisPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanEscrowAnalysisSearchPagedSelectFieldsResponse>> SearchLoanEscrowAnalysisPagedSelectFields(AccountService.LoanEscrowAnalysisSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanEscrowAnalysisSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanEscrowAnalysisSearchPagedSelectFieldsResponse>>("searchLoanEscrowAnalysisPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanHoldSelectFieldsResponse>> GetLoanHoldSelectFields(AccountService.LoanHoldSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanHoldSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanHoldSelectFieldsResponse>>("getLoanHoldSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanHoldPagedListSelectFieldsResponse>> GetLoanHoldPagedListSelectFields(AccountService.LoanHoldPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanHoldPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanHoldPagedListSelectFieldsResponse>>("getLoanHoldPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanHoldSearchPagedSelectFieldsResponse>> SearchLoanHoldPagedSelectFields(AccountService.LoanHoldSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanHoldSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanHoldSearchPagedSelectFieldsResponse>>("searchLoanHoldPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanLnSegmentSelectFieldsResponse>> GetLoanLnSegmentSelectFields(AccountService.LoanLnSegmentSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanLnSegmentSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanLnSegmentSelectFieldsResponse>>("getLoanLnSegmentSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanLnSegmentSelectFieldsFilterChildrenResponse>> GetLoanLnSegmentSelectFieldsFilterChildren(AccountService.LoanLnSegmentSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<AccountService.LoanLnSegmentSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanLnSegmentSelectFieldsFilterChildrenResponse>>("getLoanLnSegmentSelectFieldsFilterChildren", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanLnSegmentPagedListSelectFieldsResponse>> GetLoanLnSegmentPagedListSelectFields(AccountService.LoanLnSegmentPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanLnSegmentPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanLnSegmentPagedListSelectFieldsResponse>>("getLoanLnSegmentPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanLnSegmentSearchPagedSelectFieldsResponse>> SearchLoanLnSegmentPagedSelectFields(AccountService.LoanLnSegmentSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanLnSegmentSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanLnSegmentSearchPagedSelectFieldsResponse>>("searchLoanLnSegmentPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanLnSegmentBillingSelectFieldsResponse>> GetLoanLnSegmentBillingSelectFields(AccountService.LoanLnSegmentBillingSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanLnSegmentBillingSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanLnSegmentBillingSelectFieldsResponse>>("getLoanLnSegmentBillingSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanLnSegmentBillingPagedListSelectFieldsResponse>> GetLoanLnSegmentBillingPagedListSelectFields(AccountService.LoanLnSegmentBillingPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanLnSegmentBillingPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanLnSegmentBillingPagedListSelectFieldsResponse>>("getLoanLnSegmentBillingPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanLnSegmentBillingSearchPagedSelectFieldsResponse>> SearchLoanLnSegmentBillingPagedSelectFields(AccountService.LoanLnSegmentBillingSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanLnSegmentBillingSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanLnSegmentBillingSearchPagedSelectFieldsResponse>>("searchLoanLnSegmentBillingPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanNameSelectFieldsResponse>> GetLoanNameSelectFields(AccountService.LoanNameSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanNameSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanNameSelectFieldsResponse>>("getLoanNameSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanNamePagedListSelectFieldsResponse>> GetLoanNamePagedListSelectFields(AccountService.LoanNamePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanNamePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanNamePagedListSelectFieldsResponse>>("getLoanNamePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanNameSearchPagedSelectFieldsResponse>> SearchLoanNamePagedSelectFields(AccountService.LoanNameSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanNameSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanNameSearchPagedSelectFieldsResponse>>("searchLoanNamePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanNoteSelectFieldsResponse>> GetLoanNoteSelectFields(AccountService.LoanNoteSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanNoteSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanNoteSelectFieldsResponse>>("getLoanNoteSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanNotePagedListSelectFieldsResponse>> GetLoanNotePagedListSelectFields(AccountService.LoanNotePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanNotePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanNotePagedListSelectFieldsResponse>>("getLoanNotePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanNoteSearchPagedSelectFieldsResponse>> SearchLoanNotePagedSelectFields(AccountService.LoanNoteSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanNoteSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanNoteSearchPagedSelectFieldsResponse>>("searchLoanNotePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanPledgeSelectFieldsResponse>> GetLoanPledgeSelectFields(AccountService.LoanPledgeSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanPledgeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanPledgeSelectFieldsResponse>>("getLoanPledgeSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanPledgeSelectFieldsFilterChildrenResponse>> GetLoanPledgeSelectFieldsFilterChildren(AccountService.LoanPledgeSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<AccountService.LoanPledgeSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanPledgeSelectFieldsFilterChildrenResponse>>("getLoanPledgeSelectFieldsFilterChildren", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanPledgePagedListSelectFieldsResponse>> GetLoanPledgePagedListSelectFields(AccountService.LoanPledgePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanPledgePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanPledgePagedListSelectFieldsResponse>>("getLoanPledgePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanPledgeSearchPagedSelectFieldsResponse>> SearchLoanPledgePagedSelectFields(AccountService.LoanPledgeSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanPledgeSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanPledgeSearchPagedSelectFieldsResponse>>("searchLoanPledgePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanPledgeNameSelectFieldsResponse>> GetLoanPledgeNameSelectFields(AccountService.LoanPledgeNameSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanPledgeNameSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanPledgeNameSelectFieldsResponse>>("getLoanPledgeNameSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanPledgeNamePagedListSelectFieldsResponse>> GetLoanPledgeNamePagedListSelectFields(AccountService.LoanPledgeNamePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanPledgeNamePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanPledgeNamePagedListSelectFieldsResponse>>("getLoanPledgeNamePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanPledgeNameSearchPagedSelectFieldsResponse>> SearchLoanPledgeNamePagedSelectFields(AccountService.LoanPledgeNameSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanPledgeNameSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanPledgeNameSearchPagedSelectFieldsResponse>>("searchLoanPledgeNamePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanRateChangeSelectFieldsResponse>> GetLoanRateChangeSelectFields(AccountService.LoanRateChangeSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanRateChangeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanRateChangeSelectFieldsResponse>>("getLoanRateChangeSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanRateChangePagedListSelectFieldsResponse>> GetLoanRateChangePagedListSelectFields(AccountService.LoanRateChangePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanRateChangePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanRateChangePagedListSelectFieldsResponse>>("getLoanRateChangePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanRateChangeSearchPagedSelectFieldsResponse>> SearchLoanRateChangePagedSelectFields(AccountService.LoanRateChangeSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanRateChangeSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanRateChangeSearchPagedSelectFieldsResponse>>("searchLoanRateChangePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanScheduleSelectFieldsResponse>> GetLoanScheduleSelectFields(AccountService.LoanScheduleSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanScheduleSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanScheduleSelectFieldsResponse>>("getLoanScheduleSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanSchedulePagedListSelectFieldsResponse>> GetLoanSchedulePagedListSelectFields(AccountService.LoanSchedulePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanSchedulePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanSchedulePagedListSelectFieldsResponse>>("getLoanSchedulePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanScheduleSearchPagedSelectFieldsResponse>> SearchLoanSchedulePagedSelectFields(AccountService.LoanScheduleSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanScheduleSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanScheduleSearchPagedSelectFieldsResponse>>("searchLoanSchedulePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanTrackingSelectFieldsResponse>> GetLoanTrackingSelectFields(AccountService.LoanTrackingSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanTrackingSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanTrackingSelectFieldsResponse>>("getLoanTrackingSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanTrackingPagedListSelectFieldsResponse>> GetLoanTrackingPagedListSelectFields(AccountService.LoanTrackingPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanTrackingPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanTrackingPagedListSelectFieldsResponse>>("getLoanTrackingPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanTrackingSearchPagedSelectFieldsResponse>> SearchLoanTrackingPagedSelectFields(AccountService.LoanTrackingSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanTrackingSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanTrackingSearchPagedSelectFieldsResponse>>("searchLoanTrackingPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanTransactionPagedListSelectFieldsResponse>> GetLoanTransactionPagedListSelectFields(AccountService.LoanTransactionPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanTransactionPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanTransactionPagedListSelectFieldsResponse>>("getLoanTransactionPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanTransactionSearchPagedSelectFieldsResponse>> SearchLoanTransactionPagedSelectFields(AccountService.LoanTransactionSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanTransactionSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanTransactionSearchPagedSelectFieldsResponse>>("searchLoanTransactionPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanTransferSelectFieldsResponse>> GetLoanTransferSelectFields(AccountService.LoanTransferSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanTransferSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanTransferSelectFieldsResponse>>("getLoanTransferSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanTransferPagedListSelectFieldsResponse>> GetLoanTransferPagedListSelectFields(AccountService.LoanTransferPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanTransferPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanTransferPagedListSelectFieldsResponse>>("getLoanTransferPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanTransferSearchPagedSelectFieldsResponse>> SearchLoanTransferPagedSelectFields(AccountService.LoanTransferSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanTransferSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanTransferSearchPagedSelectFieldsResponse>>("searchLoanTransferPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppSelectFieldsResponse>> GetLoanAppSelectFields(AccountService.LoanAppSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanAppSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppSelectFieldsResponse>>("getLoanAppSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppSelectFieldsFilterChildrenResponse>> GetLoanAppSelectFieldsFilterChildren(AccountService.LoanAppSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<AccountService.LoanAppSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppSelectFieldsFilterChildrenResponse>>("getLoanAppSelectFieldsFilterChildren", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppPagedListSelectFieldsResponse>> GetLoanAppPagedListSelectFields(AccountService.LoanAppPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanAppPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppPagedListSelectFieldsResponse>>("getLoanAppPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppSearchPagedSelectFieldsResponse>> SearchLoanAppPagedSelectFields(AccountService.LoanAppSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanAppSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppSearchPagedSelectFieldsResponse>>("searchLoanAppPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppEscrowSelectFieldsResponse>> GetLoanAppEscrowSelectFields(AccountService.LoanAppEscrowSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanAppEscrowSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppEscrowSelectFieldsResponse>>("getLoanAppEscrowSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppEscrowPagedListSelectFieldsResponse>> GetLoanAppEscrowPagedListSelectFields(AccountService.LoanAppEscrowPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanAppEscrowPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppEscrowPagedListSelectFieldsResponse>>("getLoanAppEscrowPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppEscrowSearchPagedSelectFieldsResponse>> SearchLoanAppEscrowPagedSelectFields(AccountService.LoanAppEscrowSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanAppEscrowSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppEscrowSearchPagedSelectFieldsResponse>>("searchLoanAppEscrowPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppEscrowAnalysisSelectFieldsResponse>> GetLoanAppEscrowAnalysisSelectFields(AccountService.LoanAppEscrowAnalysisSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanAppEscrowAnalysisSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppEscrowAnalysisSelectFieldsResponse>>("getLoanAppEscrowAnalysisSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppEscrowAnalysisPagedListSelectFieldsResponse>> GetLoanAppEscrowAnalysisPagedListSelectFields(AccountService.LoanAppEscrowAnalysisPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanAppEscrowAnalysisPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppEscrowAnalysisPagedListSelectFieldsResponse>>("getLoanAppEscrowAnalysisPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppEscrowAnalysisSearchPagedSelectFieldsResponse>> SearchLoanAppEscrowAnalysisPagedSelectFields(AccountService.LoanAppEscrowAnalysisSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanAppEscrowAnalysisSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppEscrowAnalysisSearchPagedSelectFieldsResponse>>("searchLoanAppEscrowAnalysisPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppFinanceSelectFieldsResponse>> GetLoanAppFinanceSelectFields(AccountService.LoanAppFinanceSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanAppFinanceSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppFinanceSelectFieldsResponse>>("getLoanAppFinanceSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppFinancePagedListSelectFieldsResponse>> GetLoanAppFinancePagedListSelectFields(AccountService.LoanAppFinancePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanAppFinancePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppFinancePagedListSelectFieldsResponse>>("getLoanAppFinancePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppFinanceSearchPagedSelectFieldsResponse>> SearchLoanAppFinancePagedSelectFields(AccountService.LoanAppFinanceSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanAppFinanceSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppFinanceSearchPagedSelectFieldsResponse>>("searchLoanAppFinancePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppLnSegmentSelectFieldsResponse>> GetLoanAppLnSegmentSelectFields(AccountService.LoanAppLnSegmentSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanAppLnSegmentSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppLnSegmentSelectFieldsResponse>>("getLoanAppLnSegmentSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppLnSegmentPagedListSelectFieldsResponse>> GetLoanAppLnSegmentPagedListSelectFields(AccountService.LoanAppLnSegmentPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanAppLnSegmentPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppLnSegmentPagedListSelectFieldsResponse>>("getLoanAppLnSegmentPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppLnSegmentSearchPagedSelectFieldsResponse>> SearchLoanAppLnSegmentPagedSelectFields(AccountService.LoanAppLnSegmentSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanAppLnSegmentSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppLnSegmentSearchPagedSelectFieldsResponse>>("searchLoanAppLnSegmentPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppNoteSelectFieldsResponse>> GetLoanAppNoteSelectFields(AccountService.LoanAppNoteSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanAppNoteSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppNoteSelectFieldsResponse>>("getLoanAppNoteSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppNotePagedListSelectFieldsResponse>> GetLoanAppNotePagedListSelectFields(AccountService.LoanAppNotePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanAppNotePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppNotePagedListSelectFieldsResponse>>("getLoanAppNotePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppNoteSearchPagedSelectFieldsResponse>> SearchLoanAppNotePagedSelectFields(AccountService.LoanAppNoteSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanAppNoteSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppNoteSearchPagedSelectFieldsResponse>>("searchLoanAppNotePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppPersonSelectFieldsResponse>> GetLoanAppPersonSelectFields(AccountService.LoanAppPersonSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanAppPersonSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppPersonSelectFieldsResponse>>("getLoanAppPersonSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppPersonPagedListSelectFieldsResponse>> GetLoanAppPersonPagedListSelectFields(AccountService.LoanAppPersonPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanAppPersonPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppPersonPagedListSelectFieldsResponse>>("getLoanAppPersonPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppPersonSearchPagedSelectFieldsResponse>> SearchLoanAppPersonPagedSelectFields(AccountService.LoanAppPersonSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanAppPersonSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppPersonSearchPagedSelectFieldsResponse>>("searchLoanAppPersonPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppPledgeSelectFieldsResponse>> GetLoanAppPledgeSelectFields(AccountService.LoanAppPledgeSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanAppPledgeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppPledgeSelectFieldsResponse>>("getLoanAppPledgeSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppPledgePagedListSelectFieldsResponse>> GetLoanAppPledgePagedListSelectFields(AccountService.LoanAppPledgePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanAppPledgePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppPledgePagedListSelectFieldsResponse>>("getLoanAppPledgePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppPledgeSearchPagedSelectFieldsResponse>> SearchLoanAppPledgePagedSelectFields(AccountService.LoanAppPledgeSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanAppPledgeSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppPledgeSearchPagedSelectFieldsResponse>>("searchLoanAppPledgePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppScheduleSelectFieldsResponse>> GetLoanAppScheduleSelectFields(AccountService.LoanAppScheduleSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanAppScheduleSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppScheduleSelectFieldsResponse>>("getLoanAppScheduleSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppSchedulePagedListSelectFieldsResponse>> GetLoanAppSchedulePagedListSelectFields(AccountService.LoanAppSchedulePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanAppSchedulePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppSchedulePagedListSelectFieldsResponse>>("getLoanAppSchedulePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppScheduleSearchPagedSelectFieldsResponse>> SearchLoanAppSchedulePagedSelectFields(AccountService.LoanAppScheduleSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanAppScheduleSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppScheduleSearchPagedSelectFieldsResponse>>("searchLoanAppSchedulePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppTrackingSelectFieldsResponse>> GetLoanAppTrackingSelectFields(AccountService.LoanAppTrackingSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanAppTrackingSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppTrackingSelectFieldsResponse>>("getLoanAppTrackingSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppTrackingPagedListSelectFieldsResponse>> GetLoanAppTrackingPagedListSelectFields(AccountService.LoanAppTrackingPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanAppTrackingPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppTrackingPagedListSelectFieldsResponse>>("getLoanAppTrackingPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppTrackingSearchPagedSelectFieldsResponse>> SearchLoanAppTrackingPagedSelectFields(AccountService.LoanAppTrackingSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LoanAppTrackingSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppTrackingSearchPagedSelectFieldsResponse>>("searchLoanAppTrackingPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LookupSelectFieldsResponse>> GetLookupSelectFields(AccountService.LookupSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LookupSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LookupSelectFieldsResponse>>("getLookupSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LookupPagedListSelectFieldsResponse>> GetLookupPagedListSelectFields(AccountService.LookupPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LookupPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LookupPagedListSelectFieldsResponse>>("getLookupPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LookupSearchPagedSelectFieldsResponse>> SearchLookupPagedSelectFields(AccountService.LookupSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.LookupSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.LookupSearchPagedSelectFieldsResponse>>("searchLookupPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.NameSelectFieldsResponse>> GetNameSelectFields(AccountService.NameSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.NameSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.NameSelectFieldsResponse>>("getNameSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.NamePagedListSelectFieldsResponse>> GetNamePagedListSelectFields(AccountService.NamePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.NamePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.NamePagedListSelectFieldsResponse>>("getNamePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.NameSearchPagedSelectFieldsResponse>> SearchNamePagedSelectFields(AccountService.NameSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.NameSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.NameSearchPagedSelectFieldsResponse>>("searchNamePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.NoteSelectFieldsResponse>> GetNoteSelectFields(AccountService.NoteSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.NoteSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.NoteSelectFieldsResponse>>("getNoteSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.NotePagedListSelectFieldsResponse>> GetNotePagedListSelectFields(AccountService.NotePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.NotePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.NotePagedListSelectFieldsResponse>>("getNotePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.NoteSearchPagedSelectFieldsResponse>> SearchNotePagedSelectFields(AccountService.NoteSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.NoteSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.NoteSearchPagedSelectFieldsResponse>>("searchNotePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.PledgeSelectFieldsResponse>> GetPledgeSelectFields(AccountService.PledgeSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.PledgeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.PledgeSelectFieldsResponse>>("getPledgeSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.PledgePagedListSelectFieldsResponse>> GetPledgePagedListSelectFields(AccountService.PledgePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.PledgePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.PledgePagedListSelectFieldsResponse>>("getPledgePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.PledgeSearchPagedSelectFieldsResponse>> SearchPledgePagedSelectFields(AccountService.PledgeSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.PledgeSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.PledgeSearchPagedSelectFieldsResponse>>("searchPledgePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.PortfolioSelectFieldsResponse>> GetPortfolioSelectFields(AccountService.PortfolioSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.PortfolioSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.PortfolioSelectFieldsResponse>>("getPortfolioSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.PortfolioSelectFieldsFilterChildrenResponse>> GetPortfolioSelectFieldsFilterChildren(AccountService.PortfolioSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<AccountService.PortfolioSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<AccountService.PortfolioSelectFieldsFilterChildrenResponse>>("getPortfolioSelectFieldsFilterChildren", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.PortfolioPagedListSelectFieldsResponse>> GetPortfolioPagedListSelectFields(AccountService.PortfolioPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.PortfolioPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.PortfolioPagedListSelectFieldsResponse>>("getPortfolioPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.PortfolioSearchPagedSelectFieldsResponse>> SearchPortfolioPagedSelectFields(AccountService.PortfolioSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.PortfolioSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.PortfolioSearchPagedSelectFieldsResponse>>("searchPortfolioPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.PortfolioHoldSelectFieldsResponse>> GetPortfolioHoldSelectFields(AccountService.PortfolioHoldSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.PortfolioHoldSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.PortfolioHoldSelectFieldsResponse>>("getPortfolioHoldSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.PortfolioHoldPagedListSelectFieldsResponse>> GetPortfolioHoldPagedListSelectFields(AccountService.PortfolioHoldPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.PortfolioHoldPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.PortfolioHoldPagedListSelectFieldsResponse>>("getPortfolioHoldPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.PortfolioHoldSearchPagedSelectFieldsResponse>> SearchPortfolioHoldPagedSelectFields(AccountService.PortfolioHoldSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.PortfolioHoldSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.PortfolioHoldSearchPagedSelectFieldsResponse>>("searchPortfolioHoldPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.PortfolioNoteSelectFieldsResponse>> GetPortfolioNoteSelectFields(AccountService.PortfolioNoteSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.PortfolioNoteSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.PortfolioNoteSelectFieldsResponse>>("getPortfolioNoteSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.PortfolioNotePagedListSelectFieldsResponse>> GetPortfolioNotePagedListSelectFields(AccountService.PortfolioNotePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.PortfolioNotePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.PortfolioNotePagedListSelectFieldsResponse>>("getPortfolioNotePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.PortfolioNoteSearchPagedSelectFieldsResponse>> SearchPortfolioNotePagedSelectFields(AccountService.PortfolioNoteSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.PortfolioNoteSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.PortfolioNoteSearchPagedSelectFieldsResponse>>("searchPortfolioNotePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.PortfolioTrackingSelectFieldsResponse>> GetPortfolioTrackingSelectFields(AccountService.PortfolioTrackingSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.PortfolioTrackingSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.PortfolioTrackingSelectFieldsResponse>>("getPortfolioTrackingSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.PortfolioTrackingPagedListSelectFieldsResponse>> GetPortfolioTrackingPagedListSelectFields(AccountService.PortfolioTrackingPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.PortfolioTrackingPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.PortfolioTrackingPagedListSelectFieldsResponse>>("getPortfolioTrackingPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.PortfolioTrackingSearchPagedSelectFieldsResponse>> SearchPortfolioTrackingPagedSelectFields(AccountService.PortfolioTrackingSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.PortfolioTrackingSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.PortfolioTrackingSearchPagedSelectFieldsResponse>>("searchPortfolioTrackingPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.PreferenceSelectFieldsResponse>> GetPreferenceSelectFields(AccountService.PreferenceSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.PreferenceSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.PreferenceSelectFieldsResponse>>("getPreferenceSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.PreferenceSelectFieldsFilterChildrenResponse>> GetPreferenceSelectFieldsFilterChildren(AccountService.PreferenceSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<AccountService.PreferenceSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<AccountService.PreferenceSelectFieldsFilterChildrenResponse>>("getPreferenceSelectFieldsFilterChildren", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.PreferencePagedListSelectFieldsResponse>> GetPreferencePagedListSelectFields(AccountService.PreferencePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.PreferencePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.PreferencePagedListSelectFieldsResponse>>("getPreferencePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.PreferenceSearchPagedSelectFieldsResponse>> SearchPreferencePagedSelectFields(AccountService.PreferenceSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.PreferenceSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.PreferenceSearchPagedSelectFieldsResponse>>("searchPreferencePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.PreferenceAccessSelectFieldsResponse>> GetPreferenceAccessSelectFields(AccountService.PreferenceAccessSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.PreferenceAccessSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.PreferenceAccessSelectFieldsResponse>>("getPreferenceAccessSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.PreferenceAccessPagedListSelectFieldsResponse>> GetPreferenceAccessPagedListSelectFields(AccountService.PreferenceAccessPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.PreferenceAccessPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.PreferenceAccessPagedListSelectFieldsResponse>>("getPreferenceAccessPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.PreferenceAccessSearchPagedSelectFieldsResponse>> SearchPreferenceAccessPagedSelectFields(AccountService.PreferenceAccessSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.PreferenceAccessSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.PreferenceAccessSearchPagedSelectFieldsResponse>>("searchPreferenceAccessPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareSelectFieldsResponse>> GetShareSelectFields(AccountService.ShareSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.ShareSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareSelectFieldsResponse>>("getShareSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareSelectFieldsFilterChildrenResponse>> GetShareSelectFieldsFilterChildren(AccountService.ShareSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<AccountService.ShareSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareSelectFieldsFilterChildrenResponse>>("getShareSelectFieldsFilterChildren", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SharePagedListSelectFieldsResponse>> GetSharePagedListSelectFields(AccountService.SharePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.SharePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SharePagedListSelectFieldsResponse>>("getSharePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareSearchPagedSelectFieldsResponse>> SearchSharePagedSelectFields(AccountService.ShareSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.ShareSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareSearchPagedSelectFieldsResponse>>("searchSharePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareAnalysisSelectFieldsResponse>> GetShareAnalysisSelectFields(AccountService.ShareAnalysisSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.ShareAnalysisSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareAnalysisSelectFieldsResponse>>("getShareAnalysisSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareAnalysisPagedListSelectFieldsResponse>> GetShareAnalysisPagedListSelectFields(AccountService.ShareAnalysisPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.ShareAnalysisPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareAnalysisPagedListSelectFieldsResponse>>("getShareAnalysisPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareAnalysisSearchPagedSelectFieldsResponse>> SearchShareAnalysisPagedSelectFields(AccountService.ShareAnalysisSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.ShareAnalysisSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareAnalysisSearchPagedSelectFieldsResponse>>("searchShareAnalysisPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareAnalysisGroupSelectFieldsResponse>> GetShareAnalysisGroupSelectFields(AccountService.ShareAnalysisGroupSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.ShareAnalysisGroupSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareAnalysisGroupSelectFieldsResponse>>("getShareAnalysisGroupSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareAnalysisGroupPagedListSelectFieldsResponse>> GetShareAnalysisGroupPagedListSelectFields(AccountService.ShareAnalysisGroupPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.ShareAnalysisGroupPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareAnalysisGroupPagedListSelectFieldsResponse>>("getShareAnalysisGroupPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareAnalysisGroupSearchPagedSelectFieldsResponse>> SearchShareAnalysisGroupPagedSelectFields(AccountService.ShareAnalysisGroupSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.ShareAnalysisGroupSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareAnalysisGroupSearchPagedSelectFieldsResponse>>("searchShareAnalysisGroupPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareAnalysisPlanSelectFieldsResponse>> GetShareAnalysisPlanSelectFields(AccountService.ShareAnalysisPlanSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.ShareAnalysisPlanSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareAnalysisPlanSelectFieldsResponse>>("getShareAnalysisPlanSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareAnalysisPlanPagedListSelectFieldsResponse>> GetShareAnalysisPlanPagedListSelectFields(AccountService.ShareAnalysisPlanPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.ShareAnalysisPlanPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareAnalysisPlanPagedListSelectFieldsResponse>>("getShareAnalysisPlanPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareAnalysisPlanSearchPagedSelectFieldsResponse>> SearchShareAnalysisPlanPagedSelectFields(AccountService.ShareAnalysisPlanSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.ShareAnalysisPlanSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareAnalysisPlanSearchPagedSelectFieldsResponse>>("searchShareAnalysisPlanPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareCheckOrderSelectFieldsResponse>> GetShareCheckOrderSelectFields(AccountService.ShareCheckOrderSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.ShareCheckOrderSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareCheckOrderSelectFieldsResponse>>("getShareCheckOrderSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareCheckOrderPagedListSelectFieldsResponse>> GetShareCheckOrderPagedListSelectFields(AccountService.ShareCheckOrderPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.ShareCheckOrderPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareCheckOrderPagedListSelectFieldsResponse>>("getShareCheckOrderPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareCheckOrderSearchPagedSelectFieldsResponse>> SearchShareCheckOrderPagedSelectFields(AccountService.ShareCheckOrderSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.ShareCheckOrderSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareCheckOrderSearchPagedSelectFieldsResponse>>("searchShareCheckOrderPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareHoldSelectFieldsResponse>> GetShareHoldSelectFields(AccountService.ShareHoldSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.ShareHoldSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareHoldSelectFieldsResponse>>("getShareHoldSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareHoldPagedListSelectFieldsResponse>> GetShareHoldPagedListSelectFields(AccountService.ShareHoldPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.ShareHoldPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareHoldPagedListSelectFieldsResponse>>("getShareHoldPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareHoldSearchPagedSelectFieldsResponse>> SearchShareHoldPagedSelectFields(AccountService.ShareHoldSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.ShareHoldSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareHoldSearchPagedSelectFieldsResponse>>("searchShareHoldPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareNameSelectFieldsResponse>> GetShareNameSelectFields(AccountService.ShareNameSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.ShareNameSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareNameSelectFieldsResponse>>("getShareNameSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareNamePagedListSelectFieldsResponse>> GetShareNamePagedListSelectFields(AccountService.ShareNamePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.ShareNamePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareNamePagedListSelectFieldsResponse>>("getShareNamePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareNameSearchPagedSelectFieldsResponse>> SearchShareNamePagedSelectFields(AccountService.ShareNameSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.ShareNameSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareNameSearchPagedSelectFieldsResponse>>("searchShareNamePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareNoteSelectFieldsResponse>> GetShareNoteSelectFields(AccountService.ShareNoteSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.ShareNoteSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareNoteSelectFieldsResponse>>("getShareNoteSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareNotePagedListSelectFieldsResponse>> GetShareNotePagedListSelectFields(AccountService.ShareNotePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.ShareNotePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareNotePagedListSelectFieldsResponse>>("getShareNotePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareNoteSearchPagedSelectFieldsResponse>> SearchShareNotePagedSelectFields(AccountService.ShareNoteSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.ShareNoteSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareNoteSearchPagedSelectFieldsResponse>>("searchShareNotePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareTrackingSelectFieldsResponse>> GetShareTrackingSelectFields(AccountService.ShareTrackingSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.ShareTrackingSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareTrackingSelectFieldsResponse>>("getShareTrackingSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareTrackingPagedListSelectFieldsResponse>> GetShareTrackingPagedListSelectFields(AccountService.ShareTrackingPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.ShareTrackingPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareTrackingPagedListSelectFieldsResponse>>("getShareTrackingPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareTrackingSearchPagedSelectFieldsResponse>> SearchShareTrackingPagedSelectFields(AccountService.ShareTrackingSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.ShareTrackingSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareTrackingSearchPagedSelectFieldsResponse>>("searchShareTrackingPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareTransactionPagedListSelectFieldsResponse>> GetShareTransactionPagedListSelectFields(AccountService.ShareTransactionPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.ShareTransactionPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareTransactionPagedListSelectFieldsResponse>>("getShareTransactionPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareTransactionSearchPagedSelectFieldsResponse>> SearchShareTransactionPagedSelectFields(AccountService.ShareTransactionSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.ShareTransactionSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareTransactionSearchPagedSelectFieldsResponse>>("searchShareTransactionPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareTransferSelectFieldsResponse>> GetShareTransferSelectFields(AccountService.ShareTransferSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.ShareTransferSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareTransferSelectFieldsResponse>>("getShareTransferSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareTransferPagedListSelectFieldsResponse>> GetShareTransferPagedListSelectFields(AccountService.ShareTransferPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.ShareTransferPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareTransferPagedListSelectFieldsResponse>>("getShareTransferPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareTransferSearchPagedSelectFieldsResponse>> SearchShareTransferPagedSelectFields(AccountService.ShareTransferSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.ShareTransferSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareTransferSearchPagedSelectFieldsResponse>>("searchShareTransferPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SiteSelectFieldsResponse>> GetSiteSelectFields(AccountService.SiteSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.SiteSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SiteSelectFieldsResponse>>("getSiteSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SiteSelectFieldsFilterChildrenResponse>> GetSiteSelectFieldsFilterChildren(AccountService.SiteSelectFieldsFilterChildrenRequest payload) =>
    _client.RequestAsync<AccountService.SiteSelectFieldsFilterChildrenRequest,  Memberwise.Symxify.Models.Result<AccountService.SiteSelectFieldsFilterChildrenResponse>>("getSiteSelectFieldsFilterChildren", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SitePagedListSelectFieldsResponse>> GetSitePagedListSelectFields(AccountService.SitePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.SitePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SitePagedListSelectFieldsResponse>>("getSitePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SiteSearchPagedSelectFieldsResponse>> SearchSitePagedSelectFields(AccountService.SiteSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.SiteSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SiteSearchPagedSelectFieldsResponse>>("searchSitePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SiteCashOrderTypeSelectFieldsResponse>> GetSiteCashOrderTypeSelectFields(AccountService.SiteCashOrderTypeSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.SiteCashOrderTypeSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SiteCashOrderTypeSelectFieldsResponse>>("getSiteCashOrderTypeSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SiteCashOrderTypePagedListSelectFieldsResponse>> GetSiteCashOrderTypePagedListSelectFields(AccountService.SiteCashOrderTypePagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.SiteCashOrderTypePagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SiteCashOrderTypePagedListSelectFieldsResponse>>("getSiteCashOrderTypePagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SiteCashOrderTypeSearchPagedSelectFieldsResponse>> SearchSiteCashOrderTypePagedSelectFields(AccountService.SiteCashOrderTypeSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.SiteCashOrderTypeSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.SiteCashOrderTypeSearchPagedSelectFieldsResponse>>("searchSiteCashOrderTypePagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.TrackingSelectFieldsResponse>> GetTrackingSelectFields(AccountService.TrackingSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.TrackingSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.TrackingSelectFieldsResponse>>("getTrackingSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.TrackingPagedListSelectFieldsResponse>> GetTrackingPagedListSelectFields(AccountService.TrackingPagedListSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.TrackingPagedListSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.TrackingPagedListSelectFieldsResponse>>("getTrackingPagedListSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.TrackingSearchPagedSelectFieldsResponse>> SearchTrackingPagedSelectFields(AccountService.TrackingSearchPagedSelectFieldsRequest payload) =>
    _client.RequestAsync<AccountService.TrackingSearchPagedSelectFieldsRequest,  Memberwise.Symxify.Models.Result<AccountService.TrackingSearchPagedSelectFieldsResponse>>("searchTrackingPagedSelectFields", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.AccountUpdateByIdResponse>> UpdateAccountById(AccountService.UpdateAccountByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateAccountByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.AccountUpdateByIdResponse>>("updateAccountByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.BatchAchOrigUpdateByIdResponse>> UpdateBatchAchOrigById(AccountService.UpdateBatchAchOrigByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateBatchAchOrigByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.BatchAchOrigUpdateByIdResponse>>("updateBatchAchOrigByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CardUpdateByIdResponse>> UpdateCardById(AccountService.UpdateCardByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateCardByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.CardUpdateByIdResponse>>("updateCardByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CardAccessUpdateByIdResponse>> UpdateCardAccessById(AccountService.UpdateCardAccessByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateCardAccessByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.CardAccessUpdateByIdResponse>>("updateCardAccessByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CardNameUpdateByIdResponse>> UpdateCardNameById(AccountService.UpdateCardNameByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateCardNameByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.CardNameUpdateByIdResponse>>("updateCardNameByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CardNoteUpdateByIdResponse>> UpdateCardNoteById(AccountService.UpdateCardNoteByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateCardNoteByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.CardNoteUpdateByIdResponse>>("updateCardNoteByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CpWorkCardTrackingUpdateByIdResponse>> UpdateCpWorkCardTrackingById(AccountService.UpdateCpWorkCardTrackingByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateCpWorkCardTrackingByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.CpWorkCardTrackingUpdateByIdResponse>>("updateCpWorkCardTrackingByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.EftUpdateByIdResponse>> UpdateEftById(AccountService.UpdateEftByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateEftByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.EftUpdateByIdResponse>>("updateEftByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.EftAddendaInfoUpdateByIdResponse>> UpdateEftAddendaInfoById(AccountService.UpdateEftAddendaInfoByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateEftAddendaInfoByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.EftAddendaInfoUpdateByIdResponse>>("updateEftAddendaInfoByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.EftNameUpdateByIdResponse>> UpdateEftNameById(AccountService.UpdateEftNameByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateEftNameByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.EftNameUpdateByIdResponse>>("updateEftNameByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.EftTransferUpdateByIdResponse>> UpdateEftTransferById(AccountService.UpdateEftTransferByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateEftTransferByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.EftTransferUpdateByIdResponse>>("updateEftTransferByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ExternalAccountUpdateByIdResponse>> UpdateExternalAccountById(AccountService.UpdateExternalAccountByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateExternalAccountByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.ExternalAccountUpdateByIdResponse>>("updateExternalAccountByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ExternalLoanUpdateByIdResponse>> UpdateExternalLoanById(AccountService.UpdateExternalLoanByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateExternalLoanByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.ExternalLoanUpdateByIdResponse>>("updateExternalLoanByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ExternalLoanNameUpdateByIdResponse>> UpdateExternalLoanNameById(AccountService.UpdateExternalLoanNameByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateExternalLoanNameByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.ExternalLoanNameUpdateByIdResponse>>("updateExternalLoanNameByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ExternalLoanNoteUpdateByIdResponse>> UpdateExternalLoanNoteById(AccountService.UpdateExternalLoanNoteByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateExternalLoanNoteByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.ExternalLoanNoteUpdateByIdResponse>>("updateExternalLoanNoteByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ExternalLoanTrackingUpdateByIdResponse>> UpdateExternalLoanTrackingById(AccountService.UpdateExternalLoanTrackingByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateExternalLoanTrackingByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.ExternalLoanTrackingUpdateByIdResponse>>("updateExternalLoanTrackingByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ExternalLoanTransferUpdateByIdResponse>> UpdateExternalLoanTransferById(AccountService.UpdateExternalLoanTransferByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateExternalLoanTransferByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.ExternalLoanTransferUpdateByIdResponse>>("updateExternalLoanTransferByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.HouseholdUpdateByIdResponse>> UpdateHouseholdById(AccountService.UpdateHouseholdByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateHouseholdByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.HouseholdUpdateByIdResponse>>("updateHouseholdByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.IrsUpdateByIdResponse>> UpdateIrsById(AccountService.UpdateIrsByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateIrsByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.IrsUpdateByIdResponse>>("updateIrsByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.IrsDistributionUpdateByIdResponse>> UpdateIrsDistributionById(AccountService.UpdateIrsDistributionByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateIrsDistributionByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.IrsDistributionUpdateByIdResponse>>("updateIrsDistributionByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.IrsNameUpdateByIdResponse>> UpdateIrsNameById(AccountService.UpdateIrsNameByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateIrsNameByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.IrsNameUpdateByIdResponse>>("updateIrsNameByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanUpdateByIdResponse>> UpdateLoanById(AccountService.UpdateLoanByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateLoanByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanUpdateByIdResponse>>("updateLoanByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanBankruptcyUpdateByIdResponse>> UpdateLoanBankruptcyById(AccountService.UpdateLoanBankruptcyByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateLoanBankruptcyByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanBankruptcyUpdateByIdResponse>>("updateLoanBankruptcyByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanBankruptcyPrepetitionBalUpdateByIdResponse>> UpdateLoanBankruptcyPrepetitionBalById(AccountService.UpdateLoanBankruptcyPrepetitionBalByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateLoanBankruptcyPrepetitionBalByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanBankruptcyPrepetitionBalUpdateByIdResponse>>("updateLoanBankruptcyPrepetitionBalByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanBillingUpdateByIdResponse>> UpdateLoanBillingById(AccountService.UpdateLoanBillingByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateLoanBillingByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanBillingUpdateByIdResponse>>("updateLoanBillingByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanCheckOrderUpdateByIdResponse>> UpdateLoanCheckOrderById(AccountService.UpdateLoanCheckOrderByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateLoanCheckOrderByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanCheckOrderUpdateByIdResponse>>("updateLoanCheckOrderByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanEscrowUpdateByIdResponse>> UpdateLoanEscrowById(AccountService.UpdateLoanEscrowByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateLoanEscrowByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanEscrowUpdateByIdResponse>>("updateLoanEscrowByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanEscrowAnalysisUpdateByIdResponse>> UpdateLoanEscrowAnalysisById(AccountService.UpdateLoanEscrowAnalysisByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateLoanEscrowAnalysisByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanEscrowAnalysisUpdateByIdResponse>>("updateLoanEscrowAnalysisByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanHoldUpdateByIdResponse>> UpdateLoanHoldById(AccountService.UpdateLoanHoldByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateLoanHoldByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanHoldUpdateByIdResponse>>("updateLoanHoldByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanLnSegmentUpdateByIdResponse>> UpdateLoanLnSegmentById(AccountService.UpdateLoanLnSegmentByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateLoanLnSegmentByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanLnSegmentUpdateByIdResponse>>("updateLoanLnSegmentByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanLnSegmentBillingUpdateByIdResponse>> UpdateLoanLnSegmentBillingById(AccountService.UpdateLoanLnSegmentBillingByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateLoanLnSegmentBillingByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanLnSegmentBillingUpdateByIdResponse>>("updateLoanLnSegmentBillingByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanNameUpdateByIdResponse>> UpdateLoanNameById(AccountService.UpdateLoanNameByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateLoanNameByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanNameUpdateByIdResponse>>("updateLoanNameByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanNoteUpdateByIdResponse>> UpdateLoanNoteById(AccountService.UpdateLoanNoteByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateLoanNoteByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanNoteUpdateByIdResponse>>("updateLoanNoteByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanPledgeUpdateByIdResponse>> UpdateLoanPledgeById(AccountService.UpdateLoanPledgeByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateLoanPledgeByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanPledgeUpdateByIdResponse>>("updateLoanPledgeByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanPledgeNameUpdateByIdResponse>> UpdateLoanPledgeNameById(AccountService.UpdateLoanPledgeNameByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateLoanPledgeNameByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanPledgeNameUpdateByIdResponse>>("updateLoanPledgeNameByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanRateChangeUpdateByIdResponse>> UpdateLoanRateChangeById(AccountService.UpdateLoanRateChangeByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateLoanRateChangeByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanRateChangeUpdateByIdResponse>>("updateLoanRateChangeByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanScheduleUpdateByIdResponse>> UpdateLoanScheduleById(AccountService.UpdateLoanScheduleByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateLoanScheduleByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanScheduleUpdateByIdResponse>>("updateLoanScheduleByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanTrackingUpdateByIdResponse>> UpdateLoanTrackingById(AccountService.UpdateLoanTrackingByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateLoanTrackingByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanTrackingUpdateByIdResponse>>("updateLoanTrackingByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanTransferUpdateByIdResponse>> UpdateLoanTransferById(AccountService.UpdateLoanTransferByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateLoanTransferByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanTransferUpdateByIdResponse>>("updateLoanTransferByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppUpdateByIdResponse>> UpdateLoanAppById(AccountService.UpdateLoanAppByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateLoanAppByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppUpdateByIdResponse>>("updateLoanAppByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppEscrowUpdateByIdResponse>> UpdateLoanAppEscrowById(AccountService.UpdateLoanAppEscrowByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateLoanAppEscrowByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppEscrowUpdateByIdResponse>>("updateLoanAppEscrowByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppEscrowAnalysisUpdateByIdResponse>> UpdateLoanAppEscrowAnalysisById(AccountService.UpdateLoanAppEscrowAnalysisByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateLoanAppEscrowAnalysisByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppEscrowAnalysisUpdateByIdResponse>>("updateLoanAppEscrowAnalysisByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppFinanceUpdateByIdResponse>> UpdateLoanAppFinanceById(AccountService.UpdateLoanAppFinanceByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateLoanAppFinanceByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppFinanceUpdateByIdResponse>>("updateLoanAppFinanceByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppLnSegmentUpdateByIdResponse>> UpdateLoanAppLnSegmentById(AccountService.UpdateLoanAppLnSegmentByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateLoanAppLnSegmentByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppLnSegmentUpdateByIdResponse>>("updateLoanAppLnSegmentByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppNoteUpdateByIdResponse>> UpdateLoanAppNoteById(AccountService.UpdateLoanAppNoteByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateLoanAppNoteByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppNoteUpdateByIdResponse>>("updateLoanAppNoteByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppPersonUpdateByIdResponse>> UpdateLoanAppPersonById(AccountService.UpdateLoanAppPersonByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateLoanAppPersonByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppPersonUpdateByIdResponse>>("updateLoanAppPersonByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppPledgeUpdateByIdResponse>> UpdateLoanAppPledgeById(AccountService.UpdateLoanAppPledgeByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateLoanAppPledgeByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppPledgeUpdateByIdResponse>>("updateLoanAppPledgeByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppScheduleUpdateByIdResponse>> UpdateLoanAppScheduleById(AccountService.UpdateLoanAppScheduleByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateLoanAppScheduleByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppScheduleUpdateByIdResponse>>("updateLoanAppScheduleByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppTrackingUpdateByIdResponse>> UpdateLoanAppTrackingById(AccountService.UpdateLoanAppTrackingByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateLoanAppTrackingByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppTrackingUpdateByIdResponse>>("updateLoanAppTrackingByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LookupUpdateByIdResponse>> UpdateLookupById(AccountService.UpdateLookupByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateLookupByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.LookupUpdateByIdResponse>>("updateLookupByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.NameUpdateByIdResponse>> UpdateNameById(AccountService.UpdateNameByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateNameByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.NameUpdateByIdResponse>>("updateNameByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.NoteUpdateByIdResponse>> UpdateNoteById(AccountService.UpdateNoteByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateNoteByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.NoteUpdateByIdResponse>>("updateNoteByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.PledgeUpdateByIdResponse>> UpdatePledgeById(AccountService.UpdatePledgeByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdatePledgeByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.PledgeUpdateByIdResponse>>("updatePledgeByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.PortfolioUpdateByIdResponse>> UpdatePortfolioById(AccountService.UpdatePortfolioByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdatePortfolioByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.PortfolioUpdateByIdResponse>>("updatePortfolioByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.PortfolioHoldUpdateByIdResponse>> UpdatePortfolioHoldById(AccountService.UpdatePortfolioHoldByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdatePortfolioHoldByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.PortfolioHoldUpdateByIdResponse>>("updatePortfolioHoldByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.PortfolioNoteUpdateByIdResponse>> UpdatePortfolioNoteById(AccountService.UpdatePortfolioNoteByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdatePortfolioNoteByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.PortfolioNoteUpdateByIdResponse>>("updatePortfolioNoteByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.PortfolioTrackingUpdateByIdResponse>> UpdatePortfolioTrackingById(AccountService.UpdatePortfolioTrackingByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdatePortfolioTrackingByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.PortfolioTrackingUpdateByIdResponse>>("updatePortfolioTrackingByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.PreferenceUpdateByIdResponse>> UpdatePreferenceById(AccountService.UpdatePreferenceByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdatePreferenceByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.PreferenceUpdateByIdResponse>>("updatePreferenceByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.PreferenceAccessUpdateByIdResponse>> UpdatePreferenceAccessById(AccountService.UpdatePreferenceAccessByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdatePreferenceAccessByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.PreferenceAccessUpdateByIdResponse>>("updatePreferenceAccessByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareUpdateByIdResponse>> UpdateShareById(AccountService.UpdateShareByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateShareByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareUpdateByIdResponse>>("updateShareByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareAnalysisUpdateByIdResponse>> UpdateShareAnalysisById(AccountService.UpdateShareAnalysisByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateShareAnalysisByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareAnalysisUpdateByIdResponse>>("updateShareAnalysisByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareAnalysisGroupUpdateByIdResponse>> UpdateShareAnalysisGroupById(AccountService.UpdateShareAnalysisGroupByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateShareAnalysisGroupByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareAnalysisGroupUpdateByIdResponse>>("updateShareAnalysisGroupByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareAnalysisPlanUpdateByIdResponse>> UpdateShareAnalysisPlanById(AccountService.UpdateShareAnalysisPlanByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateShareAnalysisPlanByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareAnalysisPlanUpdateByIdResponse>>("updateShareAnalysisPlanByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareCheckOrderUpdateByIdResponse>> UpdateShareCheckOrderById(AccountService.UpdateShareCheckOrderByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateShareCheckOrderByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareCheckOrderUpdateByIdResponse>>("updateShareCheckOrderByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareHoldUpdateByIdResponse>> UpdateShareHoldById(AccountService.UpdateShareHoldByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateShareHoldByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareHoldUpdateByIdResponse>>("updateShareHoldByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareNameUpdateByIdResponse>> UpdateShareNameById(AccountService.UpdateShareNameByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateShareNameByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareNameUpdateByIdResponse>>("updateShareNameByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareNoteUpdateByIdResponse>> UpdateShareNoteById(AccountService.UpdateShareNoteByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateShareNoteByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareNoteUpdateByIdResponse>>("updateShareNoteByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareTrackingUpdateByIdResponse>> UpdateShareTrackingById(AccountService.UpdateShareTrackingByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateShareTrackingByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareTrackingUpdateByIdResponse>>("updateShareTrackingByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareTransferUpdateByIdResponse>> UpdateShareTransferById(AccountService.UpdateShareTransferByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateShareTransferByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareTransferUpdateByIdResponse>>("updateShareTransferByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SiteUpdateByIdResponse>> UpdateSiteById(AccountService.UpdateSiteByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateSiteByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.SiteUpdateByIdResponse>>("updateSiteByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SiteCashOrderTypeUpdateByIdResponse>> UpdateSiteCashOrderTypeById(AccountService.UpdateSiteCashOrderTypeByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateSiteCashOrderTypeByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.SiteCashOrderTypeUpdateByIdResponse>>("updateSiteCashOrderTypeByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.TrackingUpdateByIdResponse>> UpdateTrackingById(AccountService.UpdateTrackingByIdRequest payload) =>
    _client.RequestAsync<AccountService.UpdateTrackingByIdRequest,  Memberwise.Symxify.Models.Result<AccountService.TrackingUpdateByIdResponse>>("updateTrackingByID", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.AccountCreateResponse>> CreateAccount(AccountService.CreateAccountRequest payload) =>
    _client.RequestAsync<AccountService.CreateAccountRequest,  Memberwise.Symxify.Models.Result<AccountService.AccountCreateResponse>>("createAccount", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.BatchAchOrigCreateResponse>> CreateBatchAchOrig(AccountService.CreateBatchAchOrigRequest payload) =>
    _client.RequestAsync<AccountService.CreateBatchAchOrigRequest,  Memberwise.Symxify.Models.Result<AccountService.BatchAchOrigCreateResponse>>("createBatchAchOrig", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CardCreateResponse>> CreateCard(AccountService.CreateCardRequest payload) =>
    _client.RequestAsync<AccountService.CreateCardRequest,  Memberwise.Symxify.Models.Result<AccountService.CardCreateResponse>>("createCard", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CardAccessCreateResponse>> CreateCardAccess(AccountService.CreateCardAccessRequest payload) =>
    _client.RequestAsync<AccountService.CreateCardAccessRequest,  Memberwise.Symxify.Models.Result<AccountService.CardAccessCreateResponse>>("createCardAccess", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CardNameCreateResponse>> CreateCardName(AccountService.CreateCardNameRequest payload) =>
    _client.RequestAsync<AccountService.CreateCardNameRequest,  Memberwise.Symxify.Models.Result<AccountService.CardNameCreateResponse>>("createCardName", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CardNoteCreateResponse>> CreateCardNote(AccountService.CreateCardNoteRequest payload) =>
    _client.RequestAsync<AccountService.CreateCardNoteRequest,  Memberwise.Symxify.Models.Result<AccountService.CardNoteCreateResponse>>("createCardNote", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CommentCreateResponse>> CreateComment(AccountService.CreateCommentRequest payload) =>
    _client.RequestAsync<AccountService.CreateCommentRequest,  Memberwise.Symxify.Models.Result<AccountService.CommentCreateResponse>>("createComment", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CpWorkCardCreateResponse>> CreateCpWorkCard(AccountService.CreateCpWorkCardRequest payload) =>
    _client.RequestAsync<AccountService.CreateCpWorkCardRequest,  Memberwise.Symxify.Models.Result<AccountService.CpWorkCardCreateResponse>>("createCpWorkCard", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CpWorkCardNoteCreateResponse>> CreateCpWorkCardNote(AccountService.CreateCpWorkCardNoteRequest payload) =>
    _client.RequestAsync<AccountService.CreateCpWorkCardNoteRequest,  Memberwise.Symxify.Models.Result<AccountService.CpWorkCardNoteCreateResponse>>("createCpWorkCardNote", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CpWorkCardTrackingCreateResponse>> CreateCpWorkCardTracking(AccountService.CreateCpWorkCardTrackingRequest payload) =>
    _client.RequestAsync<AccountService.CreateCpWorkCardTrackingRequest,  Memberwise.Symxify.Models.Result<AccountService.CpWorkCardTrackingCreateResponse>>("createCpWorkCardTracking", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.EftCreateResponse>> CreateEft(AccountService.CreateEftRequest payload) =>
    _client.RequestAsync<AccountService.CreateEftRequest,  Memberwise.Symxify.Models.Result<AccountService.EftCreateResponse>>("createEft", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.EftAddendaInfoCreateResponse>> CreateEftAddendaInfo(AccountService.CreateEftAddendaInfoRequest payload) =>
    _client.RequestAsync<AccountService.CreateEftAddendaInfoRequest,  Memberwise.Symxify.Models.Result<AccountService.EftAddendaInfoCreateResponse>>("createEftAddendaInfo", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.EftNameCreateResponse>> CreateEftName(AccountService.CreateEftNameRequest payload) =>
    _client.RequestAsync<AccountService.CreateEftNameRequest,  Memberwise.Symxify.Models.Result<AccountService.EftNameCreateResponse>>("createEftName", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.EftTransferCreateResponse>> CreateEftTransfer(AccountService.CreateEftTransferRequest payload) =>
    _client.RequestAsync<AccountService.CreateEftTransferRequest,  Memberwise.Symxify.Models.Result<AccountService.EftTransferCreateResponse>>("createEftTransfer", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ExternalAccountCreateResponse>> CreateExternalAccount(AccountService.CreateExternalAccountRequest payload) =>
    _client.RequestAsync<AccountService.CreateExternalAccountRequest,  Memberwise.Symxify.Models.Result<AccountService.ExternalAccountCreateResponse>>("createExternalAccount", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ExternalLoanCreateResponse>> CreateExternalLoan(AccountService.CreateExternalLoanRequest payload) =>
    _client.RequestAsync<AccountService.CreateExternalLoanRequest,  Memberwise.Symxify.Models.Result<AccountService.ExternalLoanCreateResponse>>("createExternalLoan", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ExternalLoanNameCreateResponse>> CreateExternalLoanName(AccountService.CreateExternalLoanNameRequest payload) =>
    _client.RequestAsync<AccountService.CreateExternalLoanNameRequest,  Memberwise.Symxify.Models.Result<AccountService.ExternalLoanNameCreateResponse>>("createExternalLoanName", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ExternalLoanNoteCreateResponse>> CreateExternalLoanNote(AccountService.CreateExternalLoanNoteRequest payload) =>
    _client.RequestAsync<AccountService.CreateExternalLoanNoteRequest,  Memberwise.Symxify.Models.Result<AccountService.ExternalLoanNoteCreateResponse>>("createExternalLoanNote", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ExternalLoanTrackingCreateResponse>> CreateExternalLoanTracking(AccountService.CreateExternalLoanTrackingRequest payload) =>
    _client.RequestAsync<AccountService.CreateExternalLoanTrackingRequest,  Memberwise.Symxify.Models.Result<AccountService.ExternalLoanTrackingCreateResponse>>("createExternalLoanTracking", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ExternalLoanTransferCreateResponse>> CreateExternalLoanTransfer(AccountService.CreateExternalLoanTransferRequest payload) =>
    _client.RequestAsync<AccountService.CreateExternalLoanTransferRequest,  Memberwise.Symxify.Models.Result<AccountService.ExternalLoanTransferCreateResponse>>("createExternalLoanTransfer", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.HouseholdCreateResponse>> CreateHousehold(AccountService.CreateHouseholdRequest payload) =>
    _client.RequestAsync<AccountService.CreateHouseholdRequest,  Memberwise.Symxify.Models.Result<AccountService.HouseholdCreateResponse>>("createHousehold", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.IrsCreateResponse>> CreateIrs(AccountService.CreateIrsRequest payload) =>
    _client.RequestAsync<AccountService.CreateIrsRequest,  Memberwise.Symxify.Models.Result<AccountService.IrsCreateResponse>>("createIrs", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.IrsDistributionCreateResponse>> CreateIrsDistribution(AccountService.CreateIrsDistributionRequest payload) =>
    _client.RequestAsync<AccountService.CreateIrsDistributionRequest,  Memberwise.Symxify.Models.Result<AccountService.IrsDistributionCreateResponse>>("createIrsDistribution", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.IrsNameCreateResponse>> CreateIrsName(AccountService.CreateIrsNameRequest payload) =>
    _client.RequestAsync<AccountService.CreateIrsNameRequest,  Memberwise.Symxify.Models.Result<AccountService.IrsNameCreateResponse>>("createIrsName", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanCreateResponse>> CreateLoan(AccountService.CreateLoanRequest payload) =>
    _client.RequestAsync<AccountService.CreateLoanRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanCreateResponse>>("createLoan", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanBankruptcyCreateResponse>> CreateLoanBankruptcy(AccountService.CreateLoanBankruptcyRequest payload) =>
    _client.RequestAsync<AccountService.CreateLoanBankruptcyRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanBankruptcyCreateResponse>>("createLoanBankruptcy", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanBankruptcyPrepetitionBalCreateResponse>> CreateLoanBankruptcyPrepetitionBal(AccountService.CreateLoanBankruptcyPrepetitionBalRequest payload) =>
    _client.RequestAsync<AccountService.CreateLoanBankruptcyPrepetitionBalRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanBankruptcyPrepetitionBalCreateResponse>>("createLoanBankruptcyPrepetitionBal", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanBillingCreateResponse>> CreateLoanBilling(AccountService.CreateLoanBillingRequest payload) =>
    _client.RequestAsync<AccountService.CreateLoanBillingRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanBillingCreateResponse>>("createLoanBilling", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanCheckOrderCreateResponse>> CreateLoanCheckOrder(AccountService.CreateLoanCheckOrderRequest payload) =>
    _client.RequestAsync<AccountService.CreateLoanCheckOrderRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanCheckOrderCreateResponse>>("createLoanCheckOrder", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanEscrowCreateResponse>> CreateLoanEscrow(AccountService.CreateLoanEscrowRequest payload) =>
    _client.RequestAsync<AccountService.CreateLoanEscrowRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanEscrowCreateResponse>>("createLoanEscrow", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanEscrowAnalysisCreateResponse>> CreateLoanEscrowAnalysis(AccountService.CreateLoanEscrowAnalysisRequest payload) =>
    _client.RequestAsync<AccountService.CreateLoanEscrowAnalysisRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanEscrowAnalysisCreateResponse>>("createLoanEscrowAnalysis", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanHoldCreateResponse>> CreateLoanHold(AccountService.CreateLoanHoldRequest payload) =>
    _client.RequestAsync<AccountService.CreateLoanHoldRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanHoldCreateResponse>>("createLoanHold", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanLnSegmentCreateResponse>> CreateLoanLnSegment(AccountService.CreateLoanLnSegmentRequest payload) =>
    _client.RequestAsync<AccountService.CreateLoanLnSegmentRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanLnSegmentCreateResponse>>("createLoanLnSegment", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanLnSegmentBillingCreateResponse>> CreateLoanLnSegmentBilling(AccountService.CreateLoanLnSegmentBillingRequest payload) =>
    _client.RequestAsync<AccountService.CreateLoanLnSegmentBillingRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanLnSegmentBillingCreateResponse>>("createLoanLnSegmentBilling", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanNameCreateResponse>> CreateLoanName(AccountService.CreateLoanNameRequest payload) =>
    _client.RequestAsync<AccountService.CreateLoanNameRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanNameCreateResponse>>("createLoanName", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanNoteCreateResponse>> CreateLoanNote(AccountService.CreateLoanNoteRequest payload) =>
    _client.RequestAsync<AccountService.CreateLoanNoteRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanNoteCreateResponse>>("createLoanNote", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanPledgeCreateResponse>> CreateLoanPledge(AccountService.CreateLoanPledgeRequest payload) =>
    _client.RequestAsync<AccountService.CreateLoanPledgeRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanPledgeCreateResponse>>("createLoanPledge", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanPledgeNameCreateResponse>> CreateLoanPledgeName(AccountService.CreateLoanPledgeNameRequest payload) =>
    _client.RequestAsync<AccountService.CreateLoanPledgeNameRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanPledgeNameCreateResponse>>("createLoanPledgeName", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanRateChangeCreateResponse>> CreateLoanRateChange(AccountService.CreateLoanRateChangeRequest payload) =>
    _client.RequestAsync<AccountService.CreateLoanRateChangeRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanRateChangeCreateResponse>>("createLoanRateChange", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanScheduleCreateResponse>> CreateLoanSchedule(AccountService.CreateLoanScheduleRequest payload) =>
    _client.RequestAsync<AccountService.CreateLoanScheduleRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanScheduleCreateResponse>>("createLoanSchedule", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanTrackingCreateResponse>> CreateLoanTracking(AccountService.CreateLoanTrackingRequest payload) =>
    _client.RequestAsync<AccountService.CreateLoanTrackingRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanTrackingCreateResponse>>("createLoanTracking", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanTransferCreateResponse>> CreateLoanTransfer(AccountService.CreateLoanTransferRequest payload) =>
    _client.RequestAsync<AccountService.CreateLoanTransferRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanTransferCreateResponse>>("createLoanTransfer", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppCreateResponse>> CreateLoanApp(AccountService.CreateLoanAppRequest payload) =>
    _client.RequestAsync<AccountService.CreateLoanAppRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppCreateResponse>>("createLoanApp", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppEscrowCreateResponse>> CreateLoanAppEscrow(AccountService.CreateLoanAppEscrowRequest payload) =>
    _client.RequestAsync<AccountService.CreateLoanAppEscrowRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppEscrowCreateResponse>>("createLoanAppEscrow", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppEscrowAnalysisCreateResponse>> CreateLoanAppEscrowAnalysis(AccountService.CreateLoanAppEscrowAnalysisRequest payload) =>
    _client.RequestAsync<AccountService.CreateLoanAppEscrowAnalysisRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppEscrowAnalysisCreateResponse>>("createLoanAppEscrowAnalysis", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppFinanceCreateResponse>> CreateLoanAppFinance(AccountService.CreateLoanAppFinanceRequest payload) =>
    _client.RequestAsync<AccountService.CreateLoanAppFinanceRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppFinanceCreateResponse>>("createLoanAppFinance", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppLnSegmentCreateResponse>> CreateLoanAppLnSegment(AccountService.CreateLoanAppLnSegmentRequest payload) =>
    _client.RequestAsync<AccountService.CreateLoanAppLnSegmentRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppLnSegmentCreateResponse>>("createLoanAppLnSegment", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppNoteCreateResponse>> CreateLoanAppNote(AccountService.CreateLoanAppNoteRequest payload) =>
    _client.RequestAsync<AccountService.CreateLoanAppNoteRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppNoteCreateResponse>>("createLoanAppNote", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppPersonCreateResponse>> CreateLoanAppPerson(AccountService.CreateLoanAppPersonRequest payload) =>
    _client.RequestAsync<AccountService.CreateLoanAppPersonRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppPersonCreateResponse>>("createLoanAppPerson", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppPledgeCreateResponse>> CreateLoanAppPledge(AccountService.CreateLoanAppPledgeRequest payload) =>
    _client.RequestAsync<AccountService.CreateLoanAppPledgeRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppPledgeCreateResponse>>("createLoanAppPledge", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppScheduleCreateResponse>> CreateLoanAppSchedule(AccountService.CreateLoanAppScheduleRequest payload) =>
    _client.RequestAsync<AccountService.CreateLoanAppScheduleRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppScheduleCreateResponse>>("createLoanAppSchedule", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppTrackingCreateResponse>> CreateLoanAppTracking(AccountService.CreateLoanAppTrackingRequest payload) =>
    _client.RequestAsync<AccountService.CreateLoanAppTrackingRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppTrackingCreateResponse>>("createLoanAppTracking", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LookupCreateResponse>> CreateLookup(AccountService.CreateLookupRequest payload) =>
    _client.RequestAsync<AccountService.CreateLookupRequest,  Memberwise.Symxify.Models.Result<AccountService.LookupCreateResponse>>("createLookup", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.NameCreateResponse>> CreateName(AccountService.CreateNameRequest payload) =>
    _client.RequestAsync<AccountService.CreateNameRequest,  Memberwise.Symxify.Models.Result<AccountService.NameCreateResponse>>("createName", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.NoteCreateResponse>> CreateNote(AccountService.CreateNoteRequest payload) =>
    _client.RequestAsync<AccountService.CreateNoteRequest,  Memberwise.Symxify.Models.Result<AccountService.NoteCreateResponse>>("createNote", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.PledgeCreateResponse>> CreatePledge(AccountService.CreatePledgeRequest payload) =>
    _client.RequestAsync<AccountService.CreatePledgeRequest,  Memberwise.Symxify.Models.Result<AccountService.PledgeCreateResponse>>("createPledge", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.PortfolioCreateResponse>> CreatePortfolio(AccountService.CreatePortfolioRequest payload) =>
    _client.RequestAsync<AccountService.CreatePortfolioRequest,  Memberwise.Symxify.Models.Result<AccountService.PortfolioCreateResponse>>("createPortfolio", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.PortfolioNoteCreateResponse>> CreatePortfolioNote(AccountService.CreatePortfolioNoteRequest payload) =>
    _client.RequestAsync<AccountService.CreatePortfolioNoteRequest,  Memberwise.Symxify.Models.Result<AccountService.PortfolioNoteCreateResponse>>("createPortfolioNote", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.PortfolioTrackingCreateResponse>> CreatePortfolioTracking(AccountService.CreatePortfolioTrackingRequest payload) =>
    _client.RequestAsync<AccountService.CreatePortfolioTrackingRequest,  Memberwise.Symxify.Models.Result<AccountService.PortfolioTrackingCreateResponse>>("createPortfolioTracking", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.PreferenceCreateResponse>> CreatePreference(AccountService.CreatePreferenceRequest payload) =>
    _client.RequestAsync<AccountService.CreatePreferenceRequest,  Memberwise.Symxify.Models.Result<AccountService.PreferenceCreateResponse>>("createPreference", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.PreferenceAccessCreateResponse>> CreatePreferenceAccess(AccountService.CreatePreferenceAccessRequest payload) =>
    _client.RequestAsync<AccountService.CreatePreferenceAccessRequest,  Memberwise.Symxify.Models.Result<AccountService.PreferenceAccessCreateResponse>>("createPreferenceAccess", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareCreateResponse>> CreateShare(AccountService.CreateShareRequest payload) =>
    _client.RequestAsync<AccountService.CreateShareRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareCreateResponse>>("createShare", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareAnalysisCreateResponse>> CreateShareAnalysis(AccountService.CreateShareAnalysisRequest payload) =>
    _client.RequestAsync<AccountService.CreateShareAnalysisRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareAnalysisCreateResponse>>("createShareAnalysis", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareAnalysisGroupCreateResponse>> CreateShareAnalysisGroup(AccountService.CreateShareAnalysisGroupRequest payload) =>
    _client.RequestAsync<AccountService.CreateShareAnalysisGroupRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareAnalysisGroupCreateResponse>>("createShareAnalysisGroup", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareAnalysisPlanCreateResponse>> CreateShareAnalysisPlan(AccountService.CreateShareAnalysisPlanRequest payload) =>
    _client.RequestAsync<AccountService.CreateShareAnalysisPlanRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareAnalysisPlanCreateResponse>>("createShareAnalysisPlan", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareCheckOrderCreateResponse>> CreateShareCheckOrder(AccountService.CreateShareCheckOrderRequest payload) =>
    _client.RequestAsync<AccountService.CreateShareCheckOrderRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareCheckOrderCreateResponse>>("createShareCheckOrder", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareHoldCreateResponse>> CreateShareHold(AccountService.CreateShareHoldRequest payload) =>
    _client.RequestAsync<AccountService.CreateShareHoldRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareHoldCreateResponse>>("createShareHold", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareNameCreateResponse>> CreateShareName(AccountService.CreateShareNameRequest payload) =>
    _client.RequestAsync<AccountService.CreateShareNameRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareNameCreateResponse>>("createShareName", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareNoteCreateResponse>> CreateShareNote(AccountService.CreateShareNoteRequest payload) =>
    _client.RequestAsync<AccountService.CreateShareNoteRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareNoteCreateResponse>>("createShareNote", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareTrackingCreateResponse>> CreateShareTracking(AccountService.CreateShareTrackingRequest payload) =>
    _client.RequestAsync<AccountService.CreateShareTrackingRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareTrackingCreateResponse>>("createShareTracking", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareTransferCreateResponse>> CreateShareTransfer(AccountService.CreateShareTransferRequest payload) =>
    _client.RequestAsync<AccountService.CreateShareTransferRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareTransferCreateResponse>>("createShareTransfer", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SiteCreateResponse>> CreateSite(AccountService.CreateSiteRequest payload) =>
    _client.RequestAsync<AccountService.CreateSiteRequest,  Memberwise.Symxify.Models.Result<AccountService.SiteCreateResponse>>("createSite", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.SiteCashOrderTypeCreateResponse>> CreateSiteCashOrderType(AccountService.CreateSiteCashOrderTypeRequest payload) =>
    _client.RequestAsync<AccountService.CreateSiteCashOrderTypeRequest,  Memberwise.Symxify.Models.Result<AccountService.SiteCashOrderTypeCreateResponse>>("createSiteCashOrderType", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.TrackingCreateResponse>> CreateTracking(AccountService.CreateTrackingRequest payload) =>
    _client.RequestAsync<AccountService.CreateTrackingRequest,  Memberwise.Symxify.Models.Result<AccountService.TrackingCreateResponse>>("createTracking", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.BatchAchOrigDeleteResponse>> DeleteBatchAchOrig(AccountService.DeleteBatchAchOrigRequest payload) =>
    _client.RequestAsync<AccountService.DeleteBatchAchOrigRequest,  Memberwise.Symxify.Models.Result<AccountService.BatchAchOrigDeleteResponse>>("deleteBatchAchOrig", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CardDeleteResponse>> DeleteCard(AccountService.DeleteCardRequest payload) =>
    _client.RequestAsync<AccountService.DeleteCardRequest,  Memberwise.Symxify.Models.Result<AccountService.CardDeleteResponse>>("deleteCard", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CardAccessDeleteResponse>> DeleteCardAccess(AccountService.DeleteCardAccessRequest payload) =>
    _client.RequestAsync<AccountService.DeleteCardAccessRequest,  Memberwise.Symxify.Models.Result<AccountService.CardAccessDeleteResponse>>("deleteCardAccess", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CardNameDeleteResponse>> DeleteCardName(AccountService.DeleteCardNameRequest payload) =>
    _client.RequestAsync<AccountService.DeleteCardNameRequest,  Memberwise.Symxify.Models.Result<AccountService.CardNameDeleteResponse>>("deleteCardName", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CardNoteDeleteResponse>> DeleteCardNote(AccountService.DeleteCardNoteRequest payload) =>
    _client.RequestAsync<AccountService.DeleteCardNoteRequest,  Memberwise.Symxify.Models.Result<AccountService.CardNoteDeleteResponse>>("deleteCardNote", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CommentDeleteResponse>> DeleteComment(AccountService.DeleteCommentRequest payload) =>
    _client.RequestAsync<AccountService.DeleteCommentRequest,  Memberwise.Symxify.Models.Result<AccountService.CommentDeleteResponse>>("deleteComment", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CpWorkCardDeleteResponse>> DeleteCpWorkCard(AccountService.DeleteCpWorkCardRequest payload) =>
    _client.RequestAsync<AccountService.DeleteCpWorkCardRequest,  Memberwise.Symxify.Models.Result<AccountService.CpWorkCardDeleteResponse>>("deleteCpWorkCard", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.CpWorkCardTrackingDeleteResponse>> DeleteCpWorkCardTracking(AccountService.DeleteCpWorkCardTrackingRequest payload) =>
    _client.RequestAsync<AccountService.DeleteCpWorkCardTrackingRequest,  Memberwise.Symxify.Models.Result<AccountService.CpWorkCardTrackingDeleteResponse>>("deleteCpWorkCardTracking", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.EftDeleteResponse>> DeleteEft(AccountService.DeleteEftRequest payload) =>
    _client.RequestAsync<AccountService.DeleteEftRequest,  Memberwise.Symxify.Models.Result<AccountService.EftDeleteResponse>>("deleteEft", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.EftAddendaInfoDeleteResponse>> DeleteEftAddendaInfo(AccountService.DeleteEftAddendaInfoRequest payload) =>
    _client.RequestAsync<AccountService.DeleteEftAddendaInfoRequest,  Memberwise.Symxify.Models.Result<AccountService.EftAddendaInfoDeleteResponse>>("deleteEftAddendaInfo", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.EftNameDeleteResponse>> DeleteEftName(AccountService.DeleteEftNameRequest payload) =>
    _client.RequestAsync<AccountService.DeleteEftNameRequest,  Memberwise.Symxify.Models.Result<AccountService.EftNameDeleteResponse>>("deleteEftName", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.EftTransferDeleteResponse>> DeleteEftTransfer(AccountService.DeleteEftTransferRequest payload) =>
    _client.RequestAsync<AccountService.DeleteEftTransferRequest,  Memberwise.Symxify.Models.Result<AccountService.EftTransferDeleteResponse>>("deleteEftTransfer", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ExternalAccountDeleteResponse>> DeleteExternalAccount(AccountService.DeleteExternalAccountRequest payload) =>
    _client.RequestAsync<AccountService.DeleteExternalAccountRequest,  Memberwise.Symxify.Models.Result<AccountService.ExternalAccountDeleteResponse>>("deleteExternalAccount", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ExternalLoanDeleteResponse>> DeleteExternalLoan(AccountService.DeleteExternalLoanRequest payload) =>
    _client.RequestAsync<AccountService.DeleteExternalLoanRequest,  Memberwise.Symxify.Models.Result<AccountService.ExternalLoanDeleteResponse>>("deleteExternalLoan", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ExternalLoanNameDeleteResponse>> DeleteExternalLoanName(AccountService.DeleteExternalLoanNameRequest payload) =>
    _client.RequestAsync<AccountService.DeleteExternalLoanNameRequest,  Memberwise.Symxify.Models.Result<AccountService.ExternalLoanNameDeleteResponse>>("deleteExternalLoanName", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ExternalLoanNoteDeleteResponse>> DeleteExternalLoanNote(AccountService.DeleteExternalLoanNoteRequest payload) =>
    _client.RequestAsync<AccountService.DeleteExternalLoanNoteRequest,  Memberwise.Symxify.Models.Result<AccountService.ExternalLoanNoteDeleteResponse>>("deleteExternalLoanNote", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ExternalLoanTrackingDeleteResponse>> DeleteExternalLoanTracking(AccountService.DeleteExternalLoanTrackingRequest payload) =>
    _client.RequestAsync<AccountService.DeleteExternalLoanTrackingRequest,  Memberwise.Symxify.Models.Result<AccountService.ExternalLoanTrackingDeleteResponse>>("deleteExternalLoanTracking", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ExternalLoanTransferDeleteResponse>> DeleteExternalLoanTransfer(AccountService.DeleteExternalLoanTransferRequest payload) =>
    _client.RequestAsync<AccountService.DeleteExternalLoanTransferRequest,  Memberwise.Symxify.Models.Result<AccountService.ExternalLoanTransferDeleteResponse>>("deleteExternalLoanTransfer", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.HouseholdDeleteResponse>> DeleteHousehold(AccountService.DeleteHouseholdRequest payload) =>
    _client.RequestAsync<AccountService.DeleteHouseholdRequest,  Memberwise.Symxify.Models.Result<AccountService.HouseholdDeleteResponse>>("deleteHousehold", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.IrsDeleteResponse>> DeleteIrs(AccountService.DeleteIrsRequest payload) =>
    _client.RequestAsync<AccountService.DeleteIrsRequest,  Memberwise.Symxify.Models.Result<AccountService.IrsDeleteResponse>>("deleteIrs", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.IrsDistributionDeleteResponse>> DeleteIrsDistribution(AccountService.DeleteIrsDistributionRequest payload) =>
    _client.RequestAsync<AccountService.DeleteIrsDistributionRequest,  Memberwise.Symxify.Models.Result<AccountService.IrsDistributionDeleteResponse>>("deleteIrsDistribution", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.IrsNameDeleteResponse>> DeleteIrsName(AccountService.DeleteIrsNameRequest payload) =>
    _client.RequestAsync<AccountService.DeleteIrsNameRequest,  Memberwise.Symxify.Models.Result<AccountService.IrsNameDeleteResponse>>("deleteIrsName", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanCheckOrderDeleteResponse>> DeleteLoanCheckOrder(AccountService.DeleteLoanCheckOrderRequest payload) =>
    _client.RequestAsync<AccountService.DeleteLoanCheckOrderRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanCheckOrderDeleteResponse>>("deleteLoanCheckOrder", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanEscrowDeleteResponse>> DeleteLoanEscrow(AccountService.DeleteLoanEscrowRequest payload) =>
    _client.RequestAsync<AccountService.DeleteLoanEscrowRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanEscrowDeleteResponse>>("deleteLoanEscrow", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanEscrowAnalysisDeleteResponse>> DeleteLoanEscrowAnalysis(AccountService.DeleteLoanEscrowAnalysisRequest payload) =>
    _client.RequestAsync<AccountService.DeleteLoanEscrowAnalysisRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanEscrowAnalysisDeleteResponse>>("deleteLoanEscrowAnalysis", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanHoldDeleteResponse>> DeleteLoanHold(AccountService.DeleteLoanHoldRequest payload) =>
    _client.RequestAsync<AccountService.DeleteLoanHoldRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanHoldDeleteResponse>>("deleteLoanHold", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanNameDeleteResponse>> DeleteLoanName(AccountService.DeleteLoanNameRequest payload) =>
    _client.RequestAsync<AccountService.DeleteLoanNameRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanNameDeleteResponse>>("deleteLoanName", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanNoteDeleteResponse>> DeleteLoanNote(AccountService.DeleteLoanNoteRequest payload) =>
    _client.RequestAsync<AccountService.DeleteLoanNoteRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanNoteDeleteResponse>>("deleteLoanNote", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanPledgeDeleteResponse>> DeleteLoanPledge(AccountService.DeleteLoanPledgeRequest payload) =>
    _client.RequestAsync<AccountService.DeleteLoanPledgeRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanPledgeDeleteResponse>>("deleteLoanPledge", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanPledgeNameDeleteResponse>> DeleteLoanPledgeName(AccountService.DeleteLoanPledgeNameRequest payload) =>
    _client.RequestAsync<AccountService.DeleteLoanPledgeNameRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanPledgeNameDeleteResponse>>("deleteLoanPledgeName", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanRateChangeDeleteResponse>> DeleteLoanRateChange(AccountService.DeleteLoanRateChangeRequest payload) =>
    _client.RequestAsync<AccountService.DeleteLoanRateChangeRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanRateChangeDeleteResponse>>("deleteLoanRateChange", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanScheduleDeleteResponse>> DeleteLoanSchedule(AccountService.DeleteLoanScheduleRequest payload) =>
    _client.RequestAsync<AccountService.DeleteLoanScheduleRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanScheduleDeleteResponse>>("deleteLoanSchedule", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanTrackingDeleteResponse>> DeleteLoanTracking(AccountService.DeleteLoanTrackingRequest payload) =>
    _client.RequestAsync<AccountService.DeleteLoanTrackingRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanTrackingDeleteResponse>>("deleteLoanTracking", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanTransferDeleteResponse>> DeleteLoanTransfer(AccountService.DeleteLoanTransferRequest payload) =>
    _client.RequestAsync<AccountService.DeleteLoanTransferRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanTransferDeleteResponse>>("deleteLoanTransfer", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppDeleteResponse>> DeleteLoanApp(AccountService.DeleteLoanAppRequest payload) =>
    _client.RequestAsync<AccountService.DeleteLoanAppRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppDeleteResponse>>("deleteLoanApp", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppEscrowDeleteResponse>> DeleteLoanAppEscrow(AccountService.DeleteLoanAppEscrowRequest payload) =>
    _client.RequestAsync<AccountService.DeleteLoanAppEscrowRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppEscrowDeleteResponse>>("deleteLoanAppEscrow", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppEscrowAnalysisDeleteResponse>> DeleteLoanAppEscrowAnalysis(AccountService.DeleteLoanAppEscrowAnalysisRequest payload) =>
    _client.RequestAsync<AccountService.DeleteLoanAppEscrowAnalysisRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppEscrowAnalysisDeleteResponse>>("deleteLoanAppEscrowAnalysis", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppFinanceDeleteResponse>> DeleteLoanAppFinance(AccountService.DeleteLoanAppFinanceRequest payload) =>
    _client.RequestAsync<AccountService.DeleteLoanAppFinanceRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppFinanceDeleteResponse>>("deleteLoanAppFinance", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppNoteDeleteResponse>> DeleteLoanAppNote(AccountService.DeleteLoanAppNoteRequest payload) =>
    _client.RequestAsync<AccountService.DeleteLoanAppNoteRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppNoteDeleteResponse>>("deleteLoanAppNote", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppPersonDeleteResponse>> DeleteLoanAppPerson(AccountService.DeleteLoanAppPersonRequest payload) =>
    _client.RequestAsync<AccountService.DeleteLoanAppPersonRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppPersonDeleteResponse>>("deleteLoanAppPerson", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppPledgeDeleteResponse>> DeleteLoanAppPledge(AccountService.DeleteLoanAppPledgeRequest payload) =>
    _client.RequestAsync<AccountService.DeleteLoanAppPledgeRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppPledgeDeleteResponse>>("deleteLoanAppPledge", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppScheduleDeleteResponse>> DeleteLoanAppSchedule(AccountService.DeleteLoanAppScheduleRequest payload) =>
    _client.RequestAsync<AccountService.DeleteLoanAppScheduleRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppScheduleDeleteResponse>>("deleteLoanAppSchedule", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LoanAppTrackingDeleteResponse>> DeleteLoanAppTracking(AccountService.DeleteLoanAppTrackingRequest payload) =>
    _client.RequestAsync<AccountService.DeleteLoanAppTrackingRequest,  Memberwise.Symxify.Models.Result<AccountService.LoanAppTrackingDeleteResponse>>("deleteLoanAppTracking", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.LookupDeleteResponse>> DeleteLookup(AccountService.DeleteLookupRequest payload) =>
    _client.RequestAsync<AccountService.DeleteLookupRequest,  Memberwise.Symxify.Models.Result<AccountService.LookupDeleteResponse>>("deleteLookup", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.NameDeleteResponse>> DeleteName(AccountService.DeleteNameRequest payload) =>
    _client.RequestAsync<AccountService.DeleteNameRequest,  Memberwise.Symxify.Models.Result<AccountService.NameDeleteResponse>>("deleteName", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.NoteDeleteResponse>> DeleteNote(AccountService.DeleteNoteRequest payload) =>
    _client.RequestAsync<AccountService.DeleteNoteRequest,  Memberwise.Symxify.Models.Result<AccountService.NoteDeleteResponse>>("deleteNote", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.PledgeDeleteResponse>> DeletePledge(AccountService.DeletePledgeRequest payload) =>
    _client.RequestAsync<AccountService.DeletePledgeRequest,  Memberwise.Symxify.Models.Result<AccountService.PledgeDeleteResponse>>("deletePledge", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.PortfolioDeleteResponse>> DeletePortfolio(AccountService.DeletePortfolioRequest payload) =>
    _client.RequestAsync<AccountService.DeletePortfolioRequest,  Memberwise.Symxify.Models.Result<AccountService.PortfolioDeleteResponse>>("deletePortfolio", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.PortfolioNoteDeleteResponse>> DeletePortfolioNote(AccountService.DeletePortfolioNoteRequest payload) =>
    _client.RequestAsync<AccountService.DeletePortfolioNoteRequest,  Memberwise.Symxify.Models.Result<AccountService.PortfolioNoteDeleteResponse>>("deletePortfolioNote", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.PortfolioTrackingDeleteResponse>> DeletePortfolioTracking(AccountService.DeletePortfolioTrackingRequest payload) =>
    _client.RequestAsync<AccountService.DeletePortfolioTrackingRequest,  Memberwise.Symxify.Models.Result<AccountService.PortfolioTrackingDeleteResponse>>("deletePortfolioTracking", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.PreferenceDeleteResponse>> DeletePreference(AccountService.DeletePreferenceRequest payload) =>
    _client.RequestAsync<AccountService.DeletePreferenceRequest,  Memberwise.Symxify.Models.Result<AccountService.PreferenceDeleteResponse>>("deletePreference", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.PreferenceAccessDeleteResponse>> DeletePreferenceAccess(AccountService.DeletePreferenceAccessRequest payload) =>
    _client.RequestAsync<AccountService.DeletePreferenceAccessRequest,  Memberwise.Symxify.Models.Result<AccountService.PreferenceAccessDeleteResponse>>("deletePreferenceAccess", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareAnalysisDeleteResponse>> DeleteShareAnalysis(AccountService.DeleteShareAnalysisRequest payload) =>
    _client.RequestAsync<AccountService.DeleteShareAnalysisRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareAnalysisDeleteResponse>>("deleteShareAnalysis", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareAnalysisGroupDeleteResponse>> DeleteShareAnalysisGroup(AccountService.DeleteShareAnalysisGroupRequest payload) =>
    _client.RequestAsync<AccountService.DeleteShareAnalysisGroupRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareAnalysisGroupDeleteResponse>>("deleteShareAnalysisGroup", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareAnalysisPlanDeleteResponse>> DeleteShareAnalysisPlan(AccountService.DeleteShareAnalysisPlanRequest payload) =>
    _client.RequestAsync<AccountService.DeleteShareAnalysisPlanRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareAnalysisPlanDeleteResponse>>("deleteShareAnalysisPlan", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareCheckOrderDeleteResponse>> DeleteShareCheckOrder(AccountService.DeleteShareCheckOrderRequest payload) =>
    _client.RequestAsync<AccountService.DeleteShareCheckOrderRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareCheckOrderDeleteResponse>>("deleteShareCheckOrder", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareHoldDeleteResponse>> DeleteShareHold(AccountService.DeleteShareHoldRequest payload) =>
    _client.RequestAsync<AccountService.DeleteShareHoldRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareHoldDeleteResponse>>("deleteShareHold", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareNameDeleteResponse>> DeleteShareName(AccountService.DeleteShareNameRequest payload) =>
    _client.RequestAsync<AccountService.DeleteShareNameRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareNameDeleteResponse>>("deleteShareName", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareNoteDeleteResponse>> DeleteShareNote(AccountService.DeleteShareNoteRequest payload) =>
    _client.RequestAsync<AccountService.DeleteShareNoteRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareNoteDeleteResponse>>("deleteShareNote", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareTrackingDeleteResponse>> DeleteShareTracking(AccountService.DeleteShareTrackingRequest payload) =>
    _client.RequestAsync<AccountService.DeleteShareTrackingRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareTrackingDeleteResponse>>("deleteShareTracking", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.ShareTransferDeleteResponse>> DeleteShareTransfer(AccountService.DeleteShareTransferRequest payload) =>
    _client.RequestAsync<AccountService.DeleteShareTransferRequest,  Memberwise.Symxify.Models.Result<AccountService.ShareTransferDeleteResponse>>("deleteShareTransfer", payload, "account");


public Task<Memberwise.Symxify.Models.Result<AccountService.TrackingDeleteResponse>> DeleteTracking(AccountService.DeleteTrackingRequest payload) =>
    _client.RequestAsync<AccountService.DeleteTrackingRequest,  Memberwise.Symxify.Models.Result<AccountService.TrackingDeleteResponse>>("deleteTracking", payload, "account");


}
