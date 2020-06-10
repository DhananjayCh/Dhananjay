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
        public List<INT_HolidayListModel> GetHolidayListData(ClientContext clientContext)
        {
            List<INT_HolidayListModel> HolidayListData = new List<INT_HolidayListModel>();
            string filter = "";
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
    }
}