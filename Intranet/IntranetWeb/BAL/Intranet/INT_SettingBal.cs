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
    public class INT_SettingBal
    {
        private JArray RESTGet(ClientContext clientContext, string filter = "")
        {
            RestService restService = new RestService();
            JArray jArray = new JArray();
            RESTOption rESTOption = new RESTOption();
            rESTOption.filter = filter;
            rESTOption.select = "ID,Setting_For,Before_Event,After_Event,Squence,Active";
            rESTOption.top = "5000";



            jArray = restService.GetAllItemFromList(clientContext, "INT_Setting", rESTOption);
            return jArray;
        }
        public List<INT_SettingModel> GetSettingData(ClientContext clientContext)
        {
            List<INT_SettingModel> SettingData = new List<INT_SettingModel>();
            string filter = "";
            JArray jArray = RESTGet(clientContext, filter);
            foreach (JObject j in jArray)
            {
                SettingData.Add(new INT_SettingModel
                {
                    ID = Convert.ToInt32(j["Id"]),
                    Setting_For = j["Setting_For"].ToString(),
                    Before_Event = Convert.ToInt32(j["Before_Event"]),
                    After_Event = Convert.ToInt32(j["After_Event"]),
                    Squence = Convert.ToInt32(j["Squence"]),
                    Active = (bool)j["Active"],
                }); ;
            }
            return SettingData;
        }
    }
}