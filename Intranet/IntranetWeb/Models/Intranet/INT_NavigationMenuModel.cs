using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetWeb.Models.Intranet
{
    public class INT_NavigationMenuModel
    {
        public int ID { get; set; }
        public string MenuName { get; set; }
        public string URL { get; set; }
        public int OrderNo { get; set; }
        public bool Active { get; set; }
        public bool External_Url { get; set; }
        public bool Next_Tab { get; set; }
        public int ParentMenuIdId { get; set; }
        public ParentMenuData ParentMenuId { get; set; }

    }

    public class ParentMenuData
    {
        public int ID { get; set; }
        public string MenuName { get; set; }

    }
}