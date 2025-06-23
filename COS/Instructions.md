# COS

Connect to a Bucket and download a file using your favorite language.

The information you need to get the file is the following:

```
bucket name: somebucket-for-interview
bucket location: Madrid
filename: README.md

{
    "apikey": "AerehQeOtiZljYn3cp3Rv5--PTLRVXJvROW8YJib6Fd6",
    "cos_hmac_keys": {
        "access_key_id": "b3715dee3eb64aa88c5db9ddc82bde05",
        "secret_access_key": "777913063c22c2375697a27c21dec0466f6ea573a44d4f93"
    },
    "endpoints": "https://control.cloud-object-storage.cloud.ibm.com/v2/endpoints",
    "iam_apikey_description": "Auto-generated for key crn:v1:bluemix:public:cloud-object-storage:global:a/90f4ad63175d479a84ee05b5445012dd:33efa59c-686f-4452-8b32-3a40de8215b3:resource-key:b3715dee-3eb6-4aa8-8c5d-b9ddc82bde05",
    "iam_apikey_id": "ApiKey-15d49c2e-4a23-495f-a4b7-7247d484b48d",
    "iam_apikey_name": "reader-creds",
    "iam_role_crn": "crn:v1:bluemix:public:cloud-object-storage::::serviceRole:ContentReader",
    "iam_serviceid_crn": "crn:v1:bluemix:public:iam-identity::a/90f4ad63175d479a84ee05b5445012dd::serviceid:ServiceId-d3d3f7da-84e6-433b-8a61-4507addbbcc6",
    "resource_instance_id": "crn:v1:bluemix:public:cloud-object-storage:global:a/90f4ad63175d479a84ee05b5445012dd:33efa59c-686f-4452-8b32-3a40de8215b3::"
}

```


**Note: the file contains a password to extract zip file for exercise 3 (Kubernetes)