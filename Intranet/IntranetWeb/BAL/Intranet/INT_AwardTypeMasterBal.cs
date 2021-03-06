﻿using IntranetWeb.DAL;
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
    public class INT_AwardTypeMasterBal
    {
        private JArray RESTGet(ClientContext clientContext, string filter = "")
        {
            RestService restService = new RestService();
            JArray jArray = new JArray();
            RESTOption rESTOption = new RESTOption();
            rESTOption.filter = filter;
            rESTOption.select = "ID,Award_type,Active";
            rESTOption.top = "5000";



            jArray = restService.GetAllItemFromList(clientContext, "INT_AwardTypeMaster", rESTOption);
            return jArray;
        }
        public List<INT_AwardTypeMasterModel> GetAwardTypeData(ClientContext clientContext)
        {
            List<INT_AwardTypeMasterModel> AwardTypeData = new List<INT_AwardTypeMasterModel>();
            string filter = "";
            JArray jArray = RESTGet(clientContext, filter);
            foreach (JObject j in jArray)
            {
                AwardTypeData.Add(new INT_AwardTypeMasterModel
                {
                    ID = Convert.ToInt32(j["Id"]),
                    Award_type = j["Award_type"].ToString(),
                    Active = (bool)j["Active"],
                }); ;
            }
            return AwardTypeData;
        }

        public string SaveAwardType(ClientContext clientContext, string ItemData)
        {
            string response = RESTSave(clientContext, ItemData);
            return response;
        }

        public string UpdateAwardType(ClientContext clientContext, string ItemData, string ID)
        {
            string response = RESTUpdate(clientContext, ItemData, ID);
            return response;
        }

        private string RESTUpdate(ClientContext clientContext, string ItemData, string ID)
        {
            RestService restService = new RestService();
            return restService.UpdateItem(clientContext, "INT_AwardTypeMaster", ItemData, ID);
        }
        private string RESTSave(ClientContext clientContext, string ItemData)
        {
            RestService restService = new RestService();
            return restService.SaveItem(clientContext, "INT_AwardTypeMaster", ItemData);
        }
    }
}