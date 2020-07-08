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
    public class INT_PagesTxBal
    {
        private JArray RESTGet(ClientContext clientContext, string filter = "")
        {
            RestService restService = new RestService();
            JArray jArray = new JArray();
            RESTOption rESTOption = new RESTOption();
            rESTOption.filter = filter;
            rESTOption.select = "ID,Page_Name,Page_Title,Page_Type,Page_Content,Widget_Configuration,Active";
            rESTOption.top = "5000";

            jArray = restService.GetAllItemFromList(clientContext, "INT_PagesTx", rESTOption);
            return jArray;
        }
        public List<INT_PagesTxModel> GetPagesData(ClientContext clientContext, string pageName)
        {
            List<INT_PagesTxModel> PagesData = new List<INT_PagesTxModel>();
            string filter = "";
            if (pageName != null && pageName != "")
            {
                filter = "(Page_Name eq '" + pageName + "')";
            }
            
            JArray jArray = RESTGet(clientContext, filter);
            foreach (JObject j in jArray)
            {
                PagesData.Add(new INT_PagesTxModel
                {
                    ID = Convert.ToInt32(j["Id"]),
                    Page_Name = j["Page_Name"].ToString(),
                    Page_Title = j["Page_Title"].ToString(),
                    Page_Type = j["Page_Type"].ToString(),
                    Page_Content = j["Page_Content"].ToString(),
                    Widget_Configuration = j["Widget_Configuration"].ToString(),
                    Active = (bool)j["Active"],
                }); ;
            }
            return PagesData;
        }

        public string SavePages(ClientContext clientContext, string ItemData)
        {
            string response = RESTSave(clientContext, ItemData);
            return response;
        }

        public string UpdatePages(ClientContext clientContext, string ItemData, string ID)
        {
            string response = RESTUpdate(clientContext, ItemData, ID);
            return response;
        }

        private string RESTUpdate(ClientContext clientContext, string ItemData, string ID)
        {
            RestService restService = new RestService();
            return restService.UpdateItem(clientContext, "INT_PagesTx", ItemData, ID);
        }
        private string RESTSave(ClientContext clientContext, string ItemData)
        {
            RestService restService = new RestService();
            return restService.SaveItem(clientContext, "INT_PagesTx", ItemData);
        }
    }
}