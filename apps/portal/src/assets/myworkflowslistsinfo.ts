[
    {
        "WfName": "WorkshopProposal",
        "AcessPermission": "Private", 
        "AuthGroups": ["Berger Portal Owners"],
        "AuthUsersADId": [103, 174, 151, 21, 201, 208, 311, 309],
        "AuthUsersEmpId": [1270, 334],  
        "DisplayTxt": "Workshop Proposal Dashboard",
        "ViewUrl": { "siteUrl": "leaveauto/_layouts/15/WorkshopProposal.aspx?WP=", "qryStrKeyTyp": "GUID", "mode": "&mode=read", "titleTag": "WP-" },
        "MasterListInfo": { "name": "WorkshopProposalMaster", "select": "GUID,ID,Title,Created,Modified,Author/ID,Author/Title,Author/Office,Author/JobTitle,Status,EmployeeID,PendingWith/ID,PendingWith/Title&$expand=Author/ID,PendingWith/ID&$orderby=Created desc", "primaryKey": "Title"},
        "RenderDetListInfo": [{ "name": "WorkshopProposalInfo", "select": "ID,Title,Created,Modified,Author/ID,Author/Title,Author/Office,Author/JobTitle,ExpectedDate,WorkshopLocation,ExpectedParticipant,Purpose,TotalAmount,GLCode,CostCenter,IONumber,FoodCost,HallOrVenueRent,PromotionalItem,DecorationCost,OtherCost,BudgetedExpenditure,ActualLocation,ActualParticipant,ActualFoodCost,ActualDecorationCost,ActualHallOrVenueRent,ActualPromotionalItem,ActualExpenditure,ActualOtherCost"}],
        "DetailsListInfo": [{ "name": "WorkshopProposalInfo", "select": "ID,Title,Created,Modified,Author/ID,Author/Title,Author/Office,Author/JobTitle,ExpectedDate,WorkshopLocation,ExpectedParticipant,Purpose,TotalAmount,GLCode,CostCenter,IONumber,FoodCost,HallOrVenueRent,PromotionalItem,DecorationCost,OtherCost,BudgetedExpenditure,ActualLocation,ActualParticipant,ActualFoodCost,ActualDecorationCost,ActualHallOrVenueRent,ActualPromotionalItem,ActualExpenditure,ActualOtherCost&$expand=Author/ID&$orderby=Created desc", "primaryKey": "Title"}],
        "DbViewColDef": [
            { "fldType": "ViewLinkGuidField", "headerName": "Action", "field": "GUID", "editable":false, "minWidth": 100, "siteUrl": "leaveauto/SitePages/WorkshopProposal.aspx?UniqueId=", "qryStrKeyTyp": "GUID", "mode": "&mode=read"},            
            { "fldType": "TitleWitouthMDField", "headerName": "RequestID", "field": "Title", "editable":false, "minWidth": 120, "siteUrl": "leaveauto/SitePages/WorkshopProposal.aspx?UniqueId=", "qryStrKeyTyp": "GUID", "mode": "&mode=read"},
            { "fldType": "GetSetDateField", "headerName": "Created", "field": "Created", "valueGetter":"Created", "editable":false, "minWidth": 120 },
            { "fldType": "TextField", "headerName": "Status", "field": "Status", "editable":true, "minWidth": 165 },
            { "fldType": "TextField", "headerName": "Pending With", "field": "PendingWith.Title", "editable":false, "minWidth": 200 },
            { "fldType": "TextField", "headerName": "Requested by", "field": "Author.Title", "editable":false, "minWidth": 165 },
            { "fldType": "TextField", "headerName": "Office", "field": "Author.Office", "editable":false, "minWidth": 165 },
            { "fldType": "TextField", "headerName": "EmployeeId", "field": "EmployeeID", "editable":true, "minWidth": 140, "hide":true },
            { "fldType": "TextField", "headerName": "Requestor JobTitle", "field": "Author.JobTitle", "editable":false, "minWidth": 200, "hide":true }
        ],
        "MasterDetailViewColDef": [
            { "fldType": "ViewLinkGuidField", "headerName": "Action", "field": "GUID", "editable":false, "minWidth": 100, "siteUrl": "leaveauto/SitePages/WorkshopProposal.aspx?UniqueId=", "qryStrKeyTyp": "GUID", "mode": "&mode=read"},            
            { "fldType": "TitleWitouthMDField", "headerName": "RequestID", "field": "Title", "editable":false, "minWidth": 120, "siteUrl": "leaveauto/SitePages/WorkshopProposal.aspx?UniqueId=", "qryStrKeyTyp": "GUID", "mode": "&mode=read"},
            { "fldType": "GetSetDateField", "headerName": "Created", "field": "Created", "valueGetter":"Created", "editable":false, "minWidth": 120 },
            { "fldType": "TextField", "headerName": "Status", "field": "Status", "editable":true, "minWidth": 165 },
            { "fldType": "TextField", "headerName": "Pending With", "field": "PendingWith.Title", "editable":false, "minWidth": 200 },
            { "fldType": "TextField", "headerName": "Requested by", "field": "Author.Title", "editable":false, "minWidth": 165 },
            { "fldType": "TextField", "headerName": "Office", "field": "Author.Office", "editable":false, "minWidth": 165 },
            { "fldType": "TextField", "headerName": "EmployeeId", "field": "EmployeeID", "editable":true, "minWidth": 140, "hide":true },
            { "fldType": "TextField", "headerName": "Requestor JobTitle", "field": "Author.JobTitle", "editable":false, "minWidth": 200, "hide":true },
            { "fldType": "GetSetDateField", "headerName": "Workshop Date", "field": "ExpectedDate", "valueGetter":"ExpectedDate", "editable":false, "minWidth": 180 },
            { "fldType": "TextField", "headerName": "WorkshopLocation", "field": "WorkshopLocation", "editable":true, "minWidth": 200 },
            { "fldType": "TextField", "headerName": "Purpose", "field": "Purpose", "editable":false, "minWidth": 140 },
            { "fldType": "TextField", "headerName": "ExpectedParticipant", "field": "ExpectedParticipant", "editable":false, "minWidth": 200 },
            { "fldType": "TextField", "headerName": "ActualParticipant", "field": "ActualParticipant", "editable":false, "minWidth": 200 },
            { "fldType": "NumberField", "headerName": "FoodCost", "field": "FoodCost", "editable":true, "minWidth": 140, "hide":true },
            { "fldType": "NumberField", "headerName": "ActualFoodCost", "field": "ActualFoodCost", "editable":false, "minWidth": 200, "hide":true },
            { "fldType": "NumberField", "headerName": "ExpectedVenueRent", "field": "HallOrVenueRent", "editable":true, "minWidth": 200 },
            { "fldType": "NumberField", "headerName": "ActualVenueRent", "field": "ActualHallOrVenueRent", "editable":false, "minWidth": 200 },
            { "fldType": "NumberField", "headerName": "ExpDecorationCost", "field": "DecorationCost", "editable":false, "minWidth": 200 },
            { "fldType": "NumberField", "headerName": "ActualDecorationCost", "field": "ActualDecorationCost", "editable":false, "minWidth": 200 },
            { "fldType": "TextField", "headerName": "ExpPromotionalItem", "field": "PromotionalItem", "editable":true, "minWidth": 240, "hide":true },
            { "fldType": "TextField", "headerName": "ActualPromotionalItem", "field": "ActualPromotionalItem", "editable":false, "minWidth": 250, "hide":true },
            { "fldType": "NumberField", "headerName": "ExpOtherCost", "field": "OtherCost", "editable":true, "minWidth": 200 },
            { "fldType": "NumberField", "headerName": "ActualOtherCost", "field": "ActualOtherCost", "editable":false, "minWidth": 200 },
            { "fldType": "NumberField", "headerName": "ExpectedExpenditure", "field": "TotalAmount", "editable":false, "minWidth": 200 },
            { "fldType": "NumberField", "headerName": "ActualExpenditure", "field": "ActualExpenditure", "editable":false, "minWidth": 200 },
            { "fldType": "TextField", "headerName": "GLCode", "field": "GLCode", "editable":false, "minWidth": 120 },
            { "fldType": "TextField", "headerName": "CostCenter", "field": "CostCenter", "editable":true, "minWidth": 165 },
            { "fldType": "TextField", "headerName": "IONumber", "field": "IONumber", "editable":false, "minWidth": 140 }
        ]
    },
    {
        "WfName": "PendingApproval",
        "AcessPermission": "Public", 
        "AuthGroups": ["Berger Portal Owners"],
        "AuthUsersADId": [208, 296, 350, 21, 1026],
        "AuthUsersEmpId": [1270, 334],  
        "DisplayTxt": "Pending Approval",
        "ViewUrl": { "siteUrl": "leaveauto/SitePages/PendingApproval.aspx?UniqueId=", "qryStrKeyTyp": "GUID", "mode": "&mode=read", "titleTag": "ITSR-" },
        "MasterListInfo": { "name": "PendingApproval", "select": "GUID,ID,Title,ProcessName,RequestedByName,Status,EmployeeID,RequestedByEmail,RequestLink,PendingWith/ID,PendingWith/Title,Author/ID,Created,Author/Title,Author/Office,Author/JobTitle,Modified&$expand=PendingWith/ID,Author/ID&$orderby=Created desc", "primaryKey": "Title"},
        "RenderDetListInfo": [{ "name": "PendingApproval", "select": "GUID,ID,Title,ProcessName,RequestedByName,Status,EmployeeID,RequestedByEmail,RequestLink,PendingWith/ID,PendingWith/Title,Author/ID,Created,Author/Title,Author/Office,Author/JobTitle&$expand=PendingWith/ID,Author/ID&$orderby=Created desc"}],
        "DetailsListInfo": [{ "name": "PendingApproval", "select": "GUID,ID,Title,ProcessName,RequestedByName,Status,EmployeeID,RequestedByEmail,RequestLink,PendingWith/ID,PendingWith/Title,Author/ID,Created,Author/Title,Author/Office,Author/JobTitle&$expand=PendingWith/ID,Author/ID&$orderby=Created desc", "primaryKey": "Title"}],
        "DbViewColDef": [
            { "fldType": "ViewOnTitleUrlField", "headerName": "Request ID", "field": "RequestLink", "editable":false, "minWidth": 120, "maxWidth": 160 },
            { "fldType": "TextField", "headerName": "Process Name", "field": "ProcessName", "editable":false, "minWidth": 160, "maxWidth": 300 },            
            { "fldType": "TextField", "headerName": "Requested by", "field": "RequestedByName", "editable":false, "minWidth": 160, "maxWidth": 280 },
            { "fldType": "GetSetDateTimeField", "headerName": "Assigned Date Time", "field": "Modified", "valueGetter":"Modified", "editable":false, "minWidth": 150, "maxWidth": 250 },
            { "fldType": "TextField", "headerName": "Status", "field": "Status", "editable":false, "minWidth": 150, "maxWidth": 500 },
            { "fldType": "GetSetDateTimeField", "headerName": "Created Date Time", "field": "Created", "valueGetter":"Created", "editable":false, "minWidth": 150, "maxWidth": 250 }
        ],
        "MasterDetailViewColDef": []
    } 
]