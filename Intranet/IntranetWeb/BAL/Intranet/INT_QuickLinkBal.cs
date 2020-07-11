using IntranetWeb.DAL;
using IntranetWeb.Models;
using IntranetWeb.Models.Intranet;
using Microsoft.SharePoint.Client;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetWeb.BAL.Intranet
{
    public class INT_QuickLinkBal
    {
        private JArray RESTGet(ClientContext clientContext, string filter = "")
        {
            RestService restService = new RestService();
            JArray jArray = new JArray();
            RESTOption rESTOption = new RESTOption();
            rESTOption.filter = filter;
            rESTOption.select = "ID,Quick_Link_Title,Quick_Link_Url,Active,Created,Author/Title,Next_Tab,Is_Internal,Pinned_Homepage";
            rESTOption.expand = "Author";
            rESTOption.top = "5000";



            jArray = restService.GetAllItemFromList(clientContext, "INT_QuickLink", rESTOption);
            return jArray;
        }
        public List<INT_QuickLinkModel> GetQuickLinkData(ClientContext clientContext, string filterData)
        {
            List<INT_QuickLinkModel> QuickLinkData = new List<INT_QuickLinkModel>();
            string filter = "";
            if (filterData != null && filterData != "")
            {
                filter = filterData;
            }
            JArray jArray = RESTGet(clientContext, filter);
            foreach (JObject j in jArray)
            {
                QuickLinkData.Add(new INT_QuickLinkModel
                {
                    ID = Convert.ToInt32(j["Id"]),
                    Quick_Link_Title = j["Quick_Link_Title"].ToString(),
                    Quick_Link_Url = j["Quick_Link_Url"].ToString(),
                    Author = j["Author"]["Title"].ToString(),
                    CreatedDate = j["Created"].ToString(),
                    Pinned_Homepage = (bool)j["Pinned_Homepage"],
                    Is_Internal = (bool)j["Is_Internal"],
                    Next_Tab = (bool)j["Next_Tab"],
                    Active = (bool)j["Active"],
                }); ;
            }
            return QuickLinkData;
        }

        public string SaveQuickLink(ClientContext clientContext, string ItemData)
        {
            string response = RESTSave(clientContext, ItemData);
            return response;
        }

        public string UpdateQuickLink(ClientContext clientContext, string ItemData, string ID)
        {
            string response = RESTUpdate(clientContext, ItemData, ID);
            return response;
        }

        private string RESTUpdate(ClientContext clientContext, string ItemData, string ID)
        {
            RestService restService = new RestService();
            return restService.UpdateItem(clientContext, "INT_QuickLink", ItemData, ID);
        }
        private string RESTSave(ClientContext clientContext, string ItemData)
        {
            RestService restService = new RestService();
            return restService.SaveItem(clientContext, "INT_QuickLink", ItemData);
        }
    }
}