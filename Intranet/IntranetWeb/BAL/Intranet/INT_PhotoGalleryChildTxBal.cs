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
    public class INT_PhotoGalleryChildTxBal
    {
        private JArray RESTGet(ClientContext clientContext, string filter = "")
        {
            RestService restService = new RestService();
            JArray jArray = new JArray();
            RESTOption rESTOption = new RESTOption();
            rESTOption.filter = filter;
            rESTOption.select = "ID,Parent_Id,Photo_Title,Image_Url,Active";
            rESTOption.top = "5000";



            jArray = restService.GetAllItemFromList(clientContext, "INT_PhotoGalleryChildTx", rESTOption);
            return jArray;
        }
        public List<INT_PhotoGalleryChildTxModel> GetPhotoGalleryChildData(ClientContext clientContext)
        {
            List<INT_PhotoGalleryChildTxModel> PhotoGalleryChildData = new List<INT_PhotoGalleryChildTxModel>();
            string filter = "";
            JArray jArray = RESTGet(clientContext, filter);
            foreach (JObject j in jArray)
            {
                PhotoGalleryChildData.Add(new INT_PhotoGalleryChildTxModel
                {
                    ID = Convert.ToInt32(j["Id"]),
                    Parent_Id = Convert.ToInt32(j["Parent_Id"]),
                    Photo_Title = j["Photo_Title"].ToString(),
                    Image_Url = j["Image_Url"].ToString(),
                    Active = (bool)j["Active"],
                }); ;
            }
            return PhotoGalleryChildData;
        }

        public List<INT_PhotoGalleryChildTxModel> GetPhotoGalleryChildDataByParentId(ClientContext clientContext, string Id)
        {
            List<INT_PhotoGalleryChildTxModel> PhotoGalleryChildData = new List<INT_PhotoGalleryChildTxModel>();
            string filter = "(Parent_Id eq '"+ Id + "')";
            JArray jArray = RESTGet(clientContext, filter);
            foreach (JObject j in jArray)
            {
                PhotoGalleryChildData.Add(new INT_PhotoGalleryChildTxModel
                {
                    ID = Convert.ToInt32(j["Id"]),
                    Parent_Id = Convert.ToInt32(j["Parent_Id"]),
                    Photo_Title = j["Photo_Title"].ToString(),
                    Image_Url = j["Image_Url"].ToString(),
                    Active = (bool)j["Active"],
                }); ;
            }
            return PhotoGalleryChildData;
        }

        public string SavePhotoGalleryChild(ClientContext clientContext, string ItemData)
        {
            string response = RESTSave(clientContext, ItemData);
            return response;
        }

        public string UpdatePhotoGalleryChild(ClientContext clientContext, string ItemData, string ID)
        {
            string response = RESTUpdate(clientContext, ItemData, ID);
            return response;
        }

        private string RESTUpdate(ClientContext clientContext, string ItemData, string ID)
        {
            RestService restService = new RestService();
            return restService.UpdateItem(clientContext, "INT_PhotoGalleryChildTx", ItemData, ID);
        }
        private string RESTSave(ClientContext clientContext, string ItemData)
        {
            RestService restService = new RestService();
            return restService.SaveItem(clientContext, "INT_PhotoGalleryChildTx", ItemData);
        }

        public string DeletePhotoGalleryChild(ClientContext clientContext, string Id)
        {
            string response = RESTDelete(clientContext, Id);
            return response;
        }

        private string RESTDelete(ClientContext clientContext, string ID)
        {
            RestService restService = new RestService();
            return restService.DeleteItem(clientContext, "INT_PhotoGalleryChildTx", ID);
        }
    }
}