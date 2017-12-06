export class GuiModel {

    /* HINWEIS: Texte sind in der Datei ../example-translation-service.ts definiert.
    Erscheinen Texte in {}, so kann die Übersetzung in example-translation-service.ts definiert werden

    Key: Bei Listen-Daten kann ein Key mitgegeben werden. Wird kein Key mitgegeben, dann werden nach Klick
    des Zurück-Buttons die Elemente nicht mehr korrekt dargestellt.
    */

    private _guiModel = {
        "application": {
            "title": "Jerry's Friend Tracker",
            "formList": [
                {
                    "id": "FriendForm",
                    "title": "Friend",
                    "formFieldList": [
                        {
                            "id": "familyName",
                            "type": "text",
                            "name": "FamilyName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "firstName",
                            "type": "text",
                            "name": "FirstName",
                            "width": 1,
                            "required": true
                        },
						{
							"id": "nickname",
							"type": "text",
							"name": "Nickname",
							"width": 2,
							"required": true
						},
                        {
                            "id":   "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "data": [ "Winterthur", "Zürich" ],
                            "form": "LocationForm",
                            "width": 2
                        },
						{
							"id": "group",
							"type": "autocomplete",
							"name": "Group",
							"data": [ "Study", "Family", "School" ],
							"form": "GroupForm",
							"width": 2
						},
                        {
                            "id": "evtBirth",
                            "type": "date",
                            "name": "Birthday",
                            "width": 2
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
				{
					"id": "OneActivity",
					"title": "NewActivity",
					"formFieldList": [
                        {
                            "id":   "oneactivity",
							"type": "text",
                            "name": "NewActivity",
                            "width": 2
                        },				
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
					]						
				},	
				{
					"id": "ActivityForm",
					"title": "Activity",
					"formFieldList": [
                        {
                            "id":   "activity",
                            "type": "autocomplete",
                            "name": "Activity",
                            "data": [ "Eating Pizza", "Making Love", "Running" ],
                            "form": "OneActivity",
                            "width": 2
                        },
                        {
                            "id": "Date",
                            "type": "date",
                            "name": "Date",
                            "width": 2
                        },
                        {
                            "id":   "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "data": [ "Winterthur", "Zürich" ],
                            "form": "LocationForm",
                            "width": 2
                        },						
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
					]
				},
                {
                    "id": "LocationForm",
                    "title": "Location",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "LocationName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
				{
					"id": "GroupForm",
					"title": "Group",
					"formFieldList": [
						{
							"id": "name",
							"type": "text",
							"name": "GroupName",
							"with": 2,
							"required": true
						},
						{
							"type": "deleteButton",
							"name": "Delete"
						},
						{
							"type": "cancelButton",
							"name": "Cancel"
						},
						{
							"type": "okButton",
							"name": "OK"
						}
					]
				}
            ],
            "pageList": [
                {
                    "id": "mainmenu",
                    "name": "MainMenu",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "Friends",
                            "icon": "fa-user",
                            "color": "teal",
                            "page": "friendspage",
                        },
                        {
                            "type": "button",
                            "name": "Location",
                            "icon": "fa-cubes",
                            "color": "silver",
                            "page": "locationspage",
                        },
						{
							"type": "button",
							"name": "Groups",
							"icon": "fa-github-alt",
							"color": "magenta",
							"page": "groupspage",
						},
                    ]
                },
                {
                    "id": "friendspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewFriend",
                            "icon": "fa-user",
                            "color": "teal",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-user",
                            "color": "teal",
                            "search": true,
                            "data": [ { name: "Anton Amacker" }, { name: "Britta Beavers"} ],
                            "page": "activitypage",                           
                        },
                    ]
                },
                {  
					"id": "activitypage",
                    "elementList": [
						{
							"type": "backbutton",
						},
						{
							"type": "newButton",
							"name": "EditFriend",
							"icon": "fa-user",
							"color": "teal",
							"form": {
								"form": "FriendForm"
							}
						},
						{
							"type": "list",
							"icon": "fa-calendar",
							"color": "cloud",
							"search": true,
							"data": [ { name: "Eating Pizza" }, { name: "Running" }, { name: "Making Love"} ],
							"form": {
								"form": "ActivityForm"
							}
					},
						{
							"type": "newButton",
							"name": "AddActivity",
							"icon": "fa-calendar-plus-o",
							"color": "clouds",
							"form": {
								"form": "ActivityForm"
							}
						}
					]
				},
                {
                    "id": "locationspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewLocation",
                            "icon": "fa-home",
                            "color": "silver",
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-home",
                            "color": "teal",
                            "search": true,
                            "data": [ { name: "Adelboden" }, { name: "Winterthur" }, { name: "Zinal"}, { name: "Zürich"} ],
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                    ]
                },
				{
					"id": "groupspage",
					"elementList": [
					{
							"type": "backbutton",
					},
					{
							"type": "newButton",
							"name": "NewGroup",
							"icon": "fa-github-alt",
							"color": "magenta",
							"form": {
								"form": "GroupForm"
							}
					},
					{
							"type": "list",
							"icon": "fa-github-alt",
							"color": "magenta",
							"search": true,
							"data": [ { name: "Study" }, { name: "Family" }, { name: "School"} ],
							"form": {
								"form": "GroupForm"
							}
					},
					
					]					
				},
			]	
        }
    };


    get guiModel() {
        return this._guiModel;
    }
}
