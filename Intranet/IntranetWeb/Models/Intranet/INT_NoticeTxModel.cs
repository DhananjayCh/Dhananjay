using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetWeb.Models.Intranet
{
    public class INT_NoticeTxModel
    {
        public int ID { get; set; }
        public string Notice_Title { get; set; }
        public string Notice_Type { get; set; }
        public bool Pinned_Notice { get; set; }
        public string Description { get; set; }
        public string DocUrl { get; set; }
        public bool Active { get; set; }
    }
}