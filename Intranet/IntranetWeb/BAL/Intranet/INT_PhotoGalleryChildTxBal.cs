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
    }
}