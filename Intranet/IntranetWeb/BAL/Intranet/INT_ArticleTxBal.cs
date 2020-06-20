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
    public class INT_ArticleTxBal
    {
        private JArray RESTGet(ClientContext clientContext, string filter = "")
        {
            RestService restService = new RestService();
            JArray jArray = new JArray();
            RESTOption rESTOption = new RESTOption();
            rESTOption.filter = filter;
            rESTOption.select = "ID,Title,Article_Title,Description,Pinned_Article,Active";
            rESTOption.orderby = "ID desc";
            rESTOption.top = "5000";



            jArray = restService.GetAllItemFromList(clientContext, "INT_ArticleTx", rESTOption);
            return jArray;
        }
        public List<INT_ArticleTxModel> GetArticleData(ClientContext clientContext)
        {
            List<INT_ArticleTxModel> articleData = new List<INT_ArticleTxModel>();
            string filter = "";
            JArray jArray = RESTGet(clientContext, filter);
            foreach (JObject j in jArray)
            {
                articleData.Add(new INT_ArticleTxModel
                {
                    ID = Convert.ToInt32(j["Id"]),
                    Article_Title = j["Article_Title"].ToString(),
                    Description = j["Description"].ToString(),
                    Pinned_Article = (bool)j["Pinned_Article"],
                    Active = (bool)j["Active"],
                }); ;
            }
            return articleData;
        }

        public string SaveArticle(ClientContext clientContext, string ItemData)
        {
            string response = RESTSave(clientContext, ItemData);
            return response;
        }

        public string UpdateArticle(ClientContext clientContext, string ItemData, string ID)
        {
            string response = RESTUpdate(clientContext, ItemData, ID);
            return response;
        }

        private string RESTUpdate(ClientContext clientContext, string ItemData, string ID)
        {
            RestService restService = new RestService();
            return restService.UpdateItem(clientContext, "INT_ArticleTx", ItemData, ID);
        }
        private string RESTSave(ClientContext clientContext, string ItemData)
        {
            RestService restService = new RestService();
            return restService.SaveItem(clientContext, "INT_ArticleTx", ItemData);
        }



    }

}