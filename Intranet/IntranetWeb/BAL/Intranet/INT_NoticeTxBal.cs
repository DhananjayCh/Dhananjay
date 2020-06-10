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
    public class INT_NoticeTxBal
    {
        private JArray RESTGet(ClientContext clientContext, string filter = "")
        {
            RestService restService = new RestService();
            JArray jArray = new JArray();
            RESTOption rESTOption = new RESTOption();
            rESTOption.filter = filter;
            rESTOption.select = "ID,Notice_Title,Notice_Type,Pinned_Notice,Description,DocUrl,Active";
            rESTOption.top = "5000";



            jArray = restService.GetAllItemFromList(clientContext, "INT_NoticeTx", rESTOption);
            return jArray;
        }
        public List<INT_NoticeTxModel> GetNoticeData(ClientContext clientContext)
        {
            List<INT_NoticeTxModel> noticeData = new List<INT_NoticeTxModel>();
            string filter = "";
            JArray jArray = RESTGet(clientContext, filter);
            foreach (JObject j in jArray)
            {
                noticeData.Add(new INT_NoticeTxModel
                {
                    ID = Convert.ToInt32(j["Id"]),
                    Notice_Title = j["Notice_Title"].ToString(),
                    Notice_Type = j["Notice_Type"].ToString(),
                    DocUrl = j["DocUrl"].ToString(),
                    Description = j["Description"].ToString(),
                    Pinned_Notice = (bool)j["Pinned_Notice"],
                    Active = (bool)j["Active"],
                }); ;
            }
            return noticeData;
        }

    }
}