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
    public class INT_PhotoGalleryTxBal
    {
        private JArray RESTGet(ClientContext clientContext, string filter = "")
        {
            RestService restService = new RestService();
            JArray jArray = new JArray();
            RESTOption rESTOption = new RESTOption();
            rESTOption.filter = filter;
            rESTOption.select = "ID,Album_Title,Pinned_Album,Active";
            rESTOption.top = "5000";



            jArray = restService.GetAllItemFromList(clientContext, "INT_PhotoGalleryTx", rESTOption);
            return jArray;
        }
        public List<INT_PhotoGalleryTxModel> GetPhotoGalleryData(ClientContext clientContext)
        {
            List<INT_PhotoGalleryTxModel> PhotoGalleryData = new List<INT_PhotoGalleryTxModel>();
            string filter = "";
            JArray jArray = RESTGet(clientContext, filter);
            foreach (JObject j in jArray)
            {
                PhotoGalleryData.Add(new INT_PhotoGalleryTxModel
                {
                    ID = Convert.ToInt32(j["Id"]),
                    Album_Title = j["Album_Title"].ToString(),
                    Pinned_Album = (bool)j["Pinned_Album"],
                    Active = (bool)j["Active"],
                }); ;
            }
            return PhotoGalleryData;
        }

        public string SavePhotoGallery(ClientContext clientContext, string ItemData)
        {
            string response = RESTSave(clientContext, ItemData);
            return response;
        }

        public string UpdatePhotoGallery(ClientContext clientContext, string ItemData, string ID)
        {
            string response = RESTUpdate(clientContext, ItemData, ID);
            return response;
        }

        private string RESTUpdate(ClientContext clientContext, string ItemData, string ID)
        {
            RestService restService = new RestService();
            return restService.UpdateItem(clientContext, "INT_PhotoGalleryTx", ItemData, ID);
        }
        private string RESTSave(ClientContext clientContext, string ItemData)
        {
            RestService restService = new RestService();
            return restService.SaveItem(clientContext, "INT_PhotoGalleryTx", ItemData);
        }
    }
}