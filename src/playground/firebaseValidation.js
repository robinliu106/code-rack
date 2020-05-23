{
    /* Visit https://firebase.google.com/docs/database/security to learn more about security rules. */
    "rules": {
      ".read": false,
      ".write": false,
      "users": {
        "$user_id":{
          ".read":"$user_id === auth.uid", //only logged in use can read and write
          ".write":"$user_id === auth.uid",
          "expenses": {
            "$expense_id": {
              ".validate":"newData.hasChildren(['description','note','createdAt','amount'])", //validate what can get saved in an individual expense 
              "description":{
                ".validate": "newData.isString() && newData.val().length > 0" //validate each item's properties
              },
              "note":{
                ".validate": "newData.isString()"
              },
              "createdAt":{
                ".validate": "newData.isNumber()"
              },
              "amount":{
                ".validate": "newData.isNumber()"
              },
              "$other":{ //validate that you cannot save any other type of data in the expense
                ".validate": false
              }
            }
          },
          "$other":{ //validate that you cannot save any other type of data in general
            ".validate": false
          }
        }
      }
    }
  }