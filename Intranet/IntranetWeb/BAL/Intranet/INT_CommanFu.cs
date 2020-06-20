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
    public class INT_CommanFu
    {
        public string UploadImage(ClientContext clientContext, HttpPostedFileBase files, string ItemData)
        {

            return RESTUploadImageFile(clientContext, files, ItemData);
        }
        private string RESTUploadImageFile(ClientContext clientContext, HttpPostedFileBase files, string ItemData)
        {

            RestService restService = new RestService();

            return restService.UploadDocumentIntranet(clientContext, "INT_ImageLibrary", files, ItemData);
        }
        public string UploadDocument(ClientContext clientContext, HttpPostedFileBase files, string ItemData)
        {

            return RESTUploadDocumentFile(clientContext, files, ItemData);
        }
        private string RESTUploadDocumentFile(ClientContext clientContext, HttpPostedFileBase files, string ItemData)
        {

            RestService restService = new RestService();

            return restService.UploadDocumentIntranet(clientContext, "INT_DocumentLibrary", files, ItemData);
        }
    }
}