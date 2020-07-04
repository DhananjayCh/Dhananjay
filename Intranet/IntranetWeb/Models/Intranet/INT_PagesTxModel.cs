using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetWeb.Models.Intranet
{
    public class INT_PagesTxModel
    {
        public int ID { get; set; }
        public string Page_Name { get; set; }
        public string Page_Title { get; set; }
        public string Page_Type { get; set; }
        public string Page_Content { get; set; }
        public string Widget_Configuration { get; set; }
        public bool Active { get; set; }
    }
}