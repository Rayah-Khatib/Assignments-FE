const assignments={"numOfPages": "5",
"item":[
    {"id":"98622", 
     "projectName": "Vodafone", 
     "startDate": "01/04/2019",
     "endDate" : "20/08/2019",
     "status": "Done",
     "requestedBy": "Rayah"},     
     
     
     {"id":"98377", 
     "projectName": "Partner", 
     "startDate": "25/12/2018",
     "endDate" : "30/03/2019",
     "status": "Done",
     "requestedBy":"Lama"},

     {"id":"40002", 
     "projectName": "Partner", 
     "startDate": "23/11/2013",
     "endDate" : "20/04/2017",
     "status": "Not Approved",
     "requestedBy":"Tareq"},
     
     {"id":"93773", 
     "projectName": "Partner", 
     "startDate": "21/07/2018",
     "endDate" : "24/12/2018",
     "status": "Done",
     "requestedBy":"Omayr"},

     {"id":"98322", 
     "projectName": "Optus", 
     "startDate": "02/02/2015",
     "endDate" : "31/12/2015",
     "status": "Not Approved",
     "requestedBy":"Jacob"},

     {"id":"12312", 
     "projectName": "Vodafone", 
     "startDate": "01/03/2018",
     "endDate" : "19/06/2020",
     "status": "In Progress",
     "requestedBy":"Jacob"},

     {"id":"99783", 
     "projectName": "Partner", 
     "startDate": "01/01/2018",
     "endDate" : "28/02/2018",
     "status": "Done",
     "requestedBy":"Elias"},

     {"id":"21902", 
     "projectName": "Optus", 
     "startDate": "01/01/2017",
     "endDate" : "01/12/2017",
     "status": "Done",
     "requestedBy":"Jacob"},

     {"id":"32323", 
     "projectName": "Oracle", 
     "startDate": "05/12/2016",
     "endDate" : "27/07/2017",
     "status": "Not Approved",
     "requestedBy":"Dany"},

     {"id":"77665", 
     "projectName": "Oracle", 
     "startDate": "01/01/2016",
     "endDate" : "01/12/2016",
     "status": "Done",
     "requestedBy":"Jacob"}
]
};

const api = {
    getAssignments: function () {
         return assignments.item;     
    },
    getNumOfPages: function(){
        return assignments.numOfPages;
    }
}

