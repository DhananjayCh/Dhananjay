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
    public class INT_HolidayListBal
    {
        private JArray RESTGet(ClientContext clientContext, string filter = "")
        {
            RestService restService = new RestService();
            JArray jArray = new JArray();
            RESTOption rESTOption = new RESTOption();
            rESTOption.filter = filter;
            rESTOption.select = "ID,Holiday_Title,Holiday_Date,Active";
            rESTOption.top = "5000";

            jArray = restService.GetAllItemFromList(clientContext, "INT_HolidayList", rESTOption);
            return jArray;
        }
        public List<INT_HolidayListModel> GetHolidayListData(ClientContext clientContext, bool filterOn)
        {
            List<INT_HolidayListModel> HolidayListData = new List<INT_HolidayListModel>();
            string filter = "";
            if (filterOn)
            {
                string dateEnd = DateTime.Now.ToString("M/d/yyyy");
                filter = "(Holiday_Date eq '" + dateEnd + "' or Holiday_Date ge '" + dateEnd + "') and (Active eq '1')";
            }
            JArray jArray = RESTGet(clientContext, filter);
            foreach (JObject j in jArray)
            {
                HolidayListData.Add(new INT_HolidayListModel
                {
                    ID = Convert.ToInt32(j["Id"]),
                    Holiday_Title = j["Holiday_Title"].ToString(),
                    Holiday_Date = j["Holiday_Date"].ToString(),
                    Active = (bool)j["Active"],
                }); ;
            }
            return HolidayListData;
        }

        public string SaveHolidayList(ClientContext clientContext, string ItemData)
        {
            string response = RESTSave(clientContext, ItemData);
            return response;
        }

        public string UpdateHolidayList(ClientContext clientContext, string ItemData, string ID)
        {
            string response = RESTUpdate(clientContext, ItemData, ID);
            return response;
        }

        private string RESTUpdate(ClientContext clientContext, string ItemData, string ID)
        {
            RestService restService = new RestService();
            return restService.UpdateItem(clientContext, "INT_HolidayList", ItemData, ID);
        }
        private string RESTSave(ClientContext clientContext, string ItemData)
        {
            RestService restService = new RestService();
            return restService.SaveItem(clientContext, "INT_HolidayList", ItemData);
        }
    }
}