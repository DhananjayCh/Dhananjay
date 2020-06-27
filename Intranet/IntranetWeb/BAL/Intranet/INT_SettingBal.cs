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
            rESTOption.select = "ID,Setting_For,Before_Event,After_Event,Squence,Active,Fixed,Show_Card_Title,Background_Color,Font_Color,Card_Title";
            rESTOption.orderby = "Squence";
            rESTOption.top = "5000";


            jArray = restService.GetAllItemFromList(clientContext, "INT_Setting", rESTOption);
            return jArray;
        }
        public List<INT_SettingModel> GetSettingData(ClientContext clientContext, string settingFor)
        {
            List<INT_SettingModel> SettingData = new List<INT_SettingModel>();
            string filter = "";
            if (settingFor == "ALL" || settingFor == "")
            {
                filter = "(Fixed eq '0')";
            }
            else
            {
                filter = "(Fixed eq '0') and (Setting_For eq '"+ settingFor + "')";
            }
            JArray jArray = RESTGet(clientContext, filter);
            foreach (JObject j in jArray)
            {
                SettingData.Add(new INT_SettingModel
                {
                    ID = Convert.ToInt32(j["Id"]),
                    Setting_For = j["Setting_For"] == null ? "" : j["Setting_For"].ToString(),
                    Before_Event = j["Before_Event"].ToString() == "" ? 0:Convert.ToInt32(j["Before_Event"]),
                    After_Event = j["After_Event"].ToString() == "" ? 0 : Convert.ToInt32(j["After_Event"]),
                    Squence = j["Squence"].ToString() == "" ? 0 : Convert.ToInt32(j["Squence"]),
                    Card_Title = j["Card_Title"] == null ? "" :j["Card_Title"].ToString(),
                    Background_Color = j["Background_Color"] == null ? "" : j["Background_Color"].ToString(),
                    Font_Color = j["Font_Color"] == null ? "" : j["Font_Color"].ToString(),
                    Show_Card_Title = (bool)j["Show_Card_Title"],
                    Fixed = (bool)j["Fixed"],
                    Active = (bool)j["Active"],
                }); ;
            }
            return SettingData;
        }

        public string SaveSetting(ClientContext clientContext, string ItemData)
        {
            string response = RESTSave(clientContext, ItemData);
            return response;
        }

        public string UpdateSetting(ClientContext clientContext, string ItemData, string ID)
        {
            string response = RESTUpdate(clientContext, ItemData, ID);
            return response;
        }

        private string RESTUpdate(ClientContext clientContext, string ItemData, string ID)
        {
            RestService restService = new RestService();
            return restService.UpdateItem(clientContext, "INT_Setting", ItemData, ID);
        }
        private string RESTSave(ClientContext clientContext, string ItemData)
        {
            RestService restService = new RestService();
            return restService.SaveItem(clientContext, "INT_Setting", ItemData);
        }
    }
}