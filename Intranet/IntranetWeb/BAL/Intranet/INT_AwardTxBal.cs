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
    public class INT_AwardTxBal
    {
        private JArray RESTGet(ClientContext clientContext, string filter = "")
        {
            RestService restService = new RestService();
            JArray jArray = new JArray();
            RESTOption rESTOption = new RESTOption();
            rESTOption.filter = filter;
            rESTOption.select = "ID,Award_type,Emp_Code,Reason,Pinned_Awards,Active";
            rESTOption.top = "5000";



            jArray = restService.GetAllItemFromList(clientContext, "INT_AwardTx", rESTOption);
            return jArray;
        }
        public List<INT_AwardTxModel> GetAwardData(ClientContext clientContext)
        {
            List<INT_AwardTxModel> AwardData = new List<INT_AwardTxModel>();
            string filter = "";
            JArray jArray = RESTGet(clientContext, filter);
            foreach (JObject j in jArray)
            {
                AwardData.Add(new INT_AwardTxModel
                {
                    ID = Convert.ToInt32(j["Id"]),
                    Award_type = j["Award_type"].ToString(),
                    Emp_Code = j["Emp_Code"].ToString(),
                    Reason = j["Reason"].ToString(),
                    Pinned_Awards = (bool)j["Pinned_Awards"],
                    Active = (bool)j["Active"],
                }); ;
            }
            return AwardData;
        }
    }
}