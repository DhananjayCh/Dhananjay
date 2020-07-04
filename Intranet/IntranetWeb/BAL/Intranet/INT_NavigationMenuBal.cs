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
    public class INT_NavigationMenuBal
    {
        private JArray RESTGet(ClientContext clientContext, string filter = "")
        {
            RestService restService = new RestService();
            JArray jArray = new JArray();
            RESTOption rESTOption = new RESTOption();
            rESTOption.filter = filter;
            rESTOption.select = "ID,MenuName,URL,OrderNo,Next_Tab,ParentMenuIdId,ParentMenuId/Id,ParentMenuId/MenuName,External_Url,Active";
            rESTOption.expand = "ParentMenuId";
            rESTOption.orderby = "ID desc";
            rESTOption.top = "5000";



            jArray = restService.GetAllItemFromList(clientContext, "INT_NavigationMenu", rESTOption);
            return jArray;
        }
        public List<INT_NavigationMenuModel> GetNavigationMenuData(ClientContext clientContext)
        {
            List<INT_NavigationMenuModel> NavigationMenuData = new List<INT_NavigationMenuModel>();
            string filter = "";
            /*if (filterOn)
            {
                filter = "(Pinned_Awards eq '1')";
            }*/
            JArray jArray = RESTGet(clientContext, filter);
            
            //
            foreach (JObject j in jArray)
            {
                ParentMenuData childD = new ParentMenuData();
                childD.ID = Convert.ToInt32(j["ParentMenuId"]["Id"]);
                childD.MenuName = Convert.ToString(j["ParentMenuId"]["MenuName"]);

                int pId = 0;
                if(j["ParentMenuIdId"].ToString() != null && j["ParentMenuIdId"].ToString() != "")
                {
                    pId = Convert.ToInt32(j["ParentMenuIdId"]);
                }

                NavigationMenuData.Add(new INT_NavigationMenuModel
                {
                    ID = Convert.ToInt32(j["Id"]),
                    MenuName = j["MenuName"].ToString(),
                    URL = j["URL"].ToString(),
                    OrderNo = Convert.ToInt32(j["OrderNo"]),
                    ParentMenuIdId = pId,
                    Active = (bool)j["Active"],
                    External_Url = (bool)j["External_Url"],
                    ParentMenuId = childD,
                    Next_Tab = (bool)j["Next_Tab"],
                });
            }
            return NavigationMenuData;
        }
        public string SaveNavigationMenu(ClientContext clientContext, string ItemData)
        {
            string response = RESTSave(clientContext, ItemData);
            return response;
        }

        public string UpdateNavigationMenu(ClientContext clientContext, string ItemData, string ID)
        {
            string response = RESTUpdate(clientContext, ItemData, ID);
            return response;
        }

        private string RESTUpdate(ClientContext clientContext, string ItemData, string ID)
        {
            RestService restService = new RestService();
            return restService.UpdateItem(clientContext, "INT_NavigationMenu", ItemData, ID);
        }
        private string RESTSave(ClientContext clientContext, string ItemData)
        {
            RestService restService = new RestService();
            return restService.SaveItem(clientContext, "INT_NavigationMenu", ItemData);
        }
    }
}