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
    public class INT_EventTxBal
    {
        private JArray RESTGet(ClientContext clientContext, string filter = "")
        {
            RestService restService = new RestService();
            JArray jArray = new JArray();
            RESTOption rESTOption = new RESTOption();
            rESTOption.filter = filter;
            rESTOption.select = "ID,Event_Name,Start_Date,End_Date,All_Day_Event,Pinned_Event,Active";
            rESTOption.top = "5000";



            jArray = restService.GetAllItemFromList(clientContext, "INT_EventTx", rESTOption);
            return jArray;
        }
        public List<INT_EventTxModel> GetEventData(ClientContext clientContext)
        {
            List<INT_EventTxModel> EventData = new List<INT_EventTxModel>();
            string filter = "";
            JArray jArray = RESTGet(clientContext, filter);
            foreach (JObject j in jArray)
            {
                EventData.Add(new INT_EventTxModel
                {
                    ID = Convert.ToInt32(j["Id"]),
                    Event_Name = j["Event_Name"].ToString(),
                    Start_Date = j["Start_Date"].ToString(),
                    End_Date = j["End_Date"].ToString(),
                    All_Day_Event = (bool)j["All_Day_Event"],
                    Pinned_Event = (bool)j["Pinned_Event"],
                    Active = (bool)j["Active"],
                }); ;
            }
            return EventData;
        }
    }
}