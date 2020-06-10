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
    public class INT_SliderTxBal
    {
        private JArray RESTGet(ClientContext clientContext, string filter = "")
        {
            RestService restService = new RestService();
            JArray jArray = new JArray();
            RESTOption rESTOption = new RESTOption();
            rESTOption.filter = filter;
            rESTOption.select = "ID,Slider_Title,Slider_Subject,Slider_Image_Url,Description,Active";
            rESTOption.top = "5000";



            jArray = restService.GetAllItemFromList(clientContext, "INT_SliderTx", rESTOption);
            return jArray;
        }
        public List<INT_SliderTxModel> GetSliderData(ClientContext clientContext)
        {
            List<INT_SliderTxModel> SliderData = new List<INT_SliderTxModel>();
            string filter = "";
            JArray jArray = RESTGet(clientContext, filter);
            foreach (JObject j in jArray)
            {
                SliderData.Add(new INT_SliderTxModel
                {
                    ID = Convert.ToInt32(j["Id"]),
                    Slider_Title = j["Slider_Title"].ToString(),
                    Slider_Subject = j["Slider_Subject"].ToString(),
                    Slider_Image_Url = j["Slider_Image_Url"].ToString(),
                    Description = j["Description"].ToString(),
                    Active = (bool)j["Active"],
                }); ;
            }
            return SliderData;
        }
    }
}