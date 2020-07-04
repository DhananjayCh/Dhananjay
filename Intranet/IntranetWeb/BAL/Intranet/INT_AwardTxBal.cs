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
            rESTOption.select = "ID,Award_type,Emp_Code,Reason,Pinned_Awards,Active,Emp_Id/Id,Emp_Id/EmpCode,Emp_Id/FirstName,Emp_Id/LastName";
            rESTOption.expand = "Emp_Id";
            rESTOption.orderby = "ID desc";
            rESTOption.top = "5000";



            jArray = restService.GetAllItemFromList(clientContext, "INT_AwardTx", rESTOption);
            return jArray;
        }
        public List<INT_AwardTxModel> GetAwardData(ClientContext clientContext, bool filterOn)
        {
            List<INT_AwardTxModel> AwardData = new List<INT_AwardTxModel>();
            string filter = "";
            if (filterOn)
            {
                filter = "(Pinned_Awards eq '1')";
            }
            JArray jArray = RESTGet(clientContext, filter);
            
            //
            foreach (JObject j in jArray)
            {
                Emp_IdChild childD = new Emp_IdChild();
                childD.ID = Convert.ToInt32(j["Emp_Id"]["Id"]);
                childD.FirstName = Convert.ToString(j["Emp_Id"]["FirstName"]);
                childD.EmpCode = Convert.ToString(j["Emp_Id"]["EmpCode"]);
                childD.LastName = Convert.ToString(j["Emp_Id"]["LastName"]);

                AwardData.Add(new INT_AwardTxModel
                {
                    ID = Convert.ToInt32(j["Id"]),
                    Award_type = j["Award_type"].ToString(),
                    Emp_Code = j["Emp_Code"].ToString(),
                    Reason = j["Reason"].ToString(),
                    Pinned_Awards = (bool)j["Pinned_Awards"],
                    Emp_Id = childD,
                    Active = (bool)j["Active"],
                }); 
            }
            return AwardData;
        }
        public string SaveAwards(ClientContext clientContext, string ItemData)
        {
            string response = RESTSave(clientContext, ItemData);
            return response;
        }

        public string UpdateAwards(ClientContext clientContext, string ItemData, string ID)
        {
            string response = RESTUpdate(clientContext, ItemData, ID);
            return response;
        }

        private string RESTUpdate(ClientContext clientContext, string ItemData, string ID)
        {
            RestService restService = new RestService();
            return restService.UpdateItem(clientContext, "INT_AwardTx", ItemData, ID);
        }
        private string RESTSave(ClientContext clientContext, string ItemData)
        {
            RestService restService = new RestService();
            return restService.SaveItem(clientContext, "INT_AwardTx", ItemData);
        }
    }
}