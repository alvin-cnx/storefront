export function sendProfilePromoDataToAep(phoneNumber, subscribe) {

    var ecid = Visitor.getInstance("65B229AE5ED637A00A495E96").getMarketingCloudVisitorID();
    var profileRegistartion = JSON.stringify({
        "header": {
            "schemaRef": {
                "id": "https://ns.adobe.com/aeppsemea/schemas/b501fabde258e1eeeabc7e9c29e31740fb30eec4d7ae8641",
                "contentType": "application/vnd.adobe.xed-full+json;version=1"
            },
            "imsOrgId": "65B229AE5ED637A00A495E96@AdobeOrg",
            "datasetId": "640f51b68daa471bd1b1e738",
            "flowId": "bcd3e3dd-eaf2-4926-a00a-6dd672a098ba"
        },
        "body": {
            "xdmMeta": {
                "schemaRef": {
                    "id": "https://ns.adobe.com/aeppsemea/schemas/b501fabde258e1eeeabc7e9c29e31740fb30eec4d7ae8641",
                    "contentType": "application/vnd.adobe.xed-full+json;version=1"
                }
            },
            "xdmEntity":
            {
                "_aeppsemea": {
                    "discount": {
                        "availPromoDiscount": subscribe
                    },
                    "identification": {
                        "ecid": ecid
                    }
                },
                "mobilePhone": {
                    "countryCode": "1",

                    "number": phoneNumber,
                    "primary": true,
                    "status": "active"
                },
                "testProfile": true
            }
        }
    });

    $.ajax({
        url: "https://dcs.adobedc.net/collection/8bc98c0cdc222c939211a24bb7365c774aefc902170e0ed018b98928474564ef",
        type: "POST",
        data: profileRegistartion,
        contentType: 'application/json',
        dataType: 'json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Accept", "application/json");
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.setRequestHeader("Authorization", "Bearer eyJhbGciOiJSUzI1NiJ9.eyJleHAiOjE2NzM5OTQ5NjIsImlzcyI6IjY1QjIyOUFFNUVENjM3QTAwQTQ5NUU5NkBBZG9iZU9yZyIsInN1YiI6IjJCQTU3ODRENjNBNjE1REEwQTQ5NUVCMEB0ZWNoYWNjdC5hZG9iZS5jb20iLCJodHRwczovL2ltcy1uYTEuYWRvYmVsb2dpbi5jb20vcy9lbnRfZGF0YXNlcnZpY2VzX3NkayI6dHJ1ZSwiYXVkIjoiaHR0cHM6Ly9pbXMtbmExLmFkb2JlbG9naW4uY29tL2MvZDQzMDUxZTczYWUxNDIzMDg3OTlkMmU2NGUyZTJlYjUifQ.O9cwyrVsAryVvpKMvyq9WKaNDtIKQQ4n9yx4CR9zDe-dxToAsJBTB175SVYOO1y48xp1hFQgZrsCuunEXD9MVw9D6D101-uqbgaHlrpEwii5FBgxYXYzZeVzBPbHkHaSt5aNY_vAE97UTdBWxD37VZ-YO_I5RP4fgNZYwaU8CpHe32NwWwsR8mq9MJyDCW7S51phLwKp8NsFYZ5Ca8fSDP5NY1BQt2QmY7MMUX2tQFHtJOuS1uxCnoOL6JrLgz4hWXupNsdcE7V_g9HA_LWk0EtUcrTdLm4bSmH2-RcyBq5rMQXujFew62R_2gW0iX_mnVwS34eMvxjVeUCW9sCzXA");
            xhr.setRequestHeader("Cache-Control", "no-cache");
            xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
            xhr.setRequestHeader("Access-Control-Request-Method", "POST, GET");
            xhr.setRequestHeader("Access-Control-Allow-Credentials", "true");
            xhr.setRequestHeader("Origin", "https://dcs.adobedc.net");
        },
        success: function (response) {
            console.log("Profile Promo data to AEP successful");

        },
        error: function (data) {
            console.log("Error in sending Profile Promo data to AEP");
        }
    });

}
