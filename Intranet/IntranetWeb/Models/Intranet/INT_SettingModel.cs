using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetWeb.Models.Intranet
{
    public class INT_SettingModel
    {
        public int ID { get; set; }
        public string Setting_For { get; set; }
        public int Before_Event { get; set; }
        public int After_Event { get; set; }
        public int Squence { get; set; }
        public bool Active { get; set; }
    }
}