using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetWeb.Models.Intranet
{
    public class INT_QuickLinkModel
    {
        public int ID { get; set; }
        public string Quick_Link_Title { get; set; }
        public string Quick_Link_Url { get; set; }
        public string Author { get; set; }
        public string CreatedDate { get; set; }
        public bool Active { get; set; }
    }
}