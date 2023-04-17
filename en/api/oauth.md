---
aside: false
---

<!--@include: /partials/libraries.md-->


<CodeBox lang="Restful" method="POST" endpoint="/api/werify/request-otp">

# Request OTP

Using our request otp Method, users are now able to easily request an One-Time Password (OTP) for added security. This powerful feature provides an extra layer of safety when it comes to your data security. With this added security, you can rest assured that your data is kept safe and secure.

`id` <sup><sub>String</sub></sup>, The identity of user account, it can be below items.

    ✔️ email                  hi@trader4.net   
    ✔️ mobile_number          +447888872720  
    ✔️ crypto                 bc1uw48ht4287287
    ✔️ phone_number           +445528888852

<template #code>

```bash
$ curl https://api.werify.net/api/werify/request-otp \
  --data '{
    "identifier":"your_email"
  }'
  --header 'Accept: application/json'
```

</template>

</CodeBox>


<Response jfile="v1/werify/oauth/request" >

</Response>
<br>
<hr>
<br>

<CodeBox lang="Restful" method="POST" endpoint="/api/werify/verify-otp">

# Verify OTP

Verification of Sent OTP code or Sent an email

`id` <sup><sub>String</sub></sup>, The identitier of session you recieved from request otp.

`hash` <sup><sub>String</sub></sup>, The hash of session you recieved from request otp.

`otp` <sup><sub>String</sub></sup>, Otp code sent to your email 

<template #code>

```bash
$ curl https://api.werify.net/api/werify/verify-otp
  --header 'Accept: application/json' \
  --data '{
    "hash": "6096cb42-1e60-4bdd-bfe0-55d5af00c978",
    "otp": "222501",
    "id": "487f2509-7125-4a2b-9d9a-d8182919c8e0"
  }'
```

</template>

</CodeBox>

<Response jfile="v1/werify/oauth/verify" >

</Response>


<br>
<hr>
<br>

<CodeBox lang="Restful" method="GET" endpoint="/v1/oauth/qr">

# Qr

Request for generate claimable qr id and hash


<template #code>

```bash
$ curl --request GET \
 https://api.werify.net/api/werify/qr
  --header 'Accept: application/json' \
  --data '{}'
```

</template>

</CodeBox>

<Response jfile="v1/werify/oauth/qr" >

</Response>

<br>
<hr>
<br>

<CodeBox lang="Restful" method="POST" endpoint="/v1/oauth/qr/authorize">

# Qr Image

Request for generate claimable qr image


<template #code>

```bash
$ curl --request GET \
 https://api.werify.net/api/werify/qr-image
  --header 'Accept: application/json'
  --data '{}'
```

</template>

</CodeBox>

 <img src='/v1/werify/oauth/qr-image.svg'/>
 

<br>
<hr>
<br>

<CodeBox lang="Restful" method="POST" endpoint="/v1/oauth/qr/authorize">

# Qr Claim

Claim the generated QR

qr_token<sup><sub>String</sub></sup>, The token of qr generated, it can be below items.

`id` <sup><sub>String</sub></sup>, The identitier of session you recieved from request QR.

`hash` <sup><sub>String</sub></sup>, The hash of session you recieved from request QR.

<template #code>

```bash
$ curl --request POST \
 https://api.werify.net/werify/qr-claim
  --header 'Accept: application/json' - 'Authorization: Bearer [ACCESS_TOKEN]' \
  --data '{
	"id": "fbdd77cb-294d-4885-893c-dacb779b7a85",
	"hash": "358bee92-74f2-4fe6-970f-4aaaa4bd10a4"
  }
```

</template>

</CodeBox>

<Response jfile="v1/werify/oauth/qr-claim" >

</Response>

<br>
<hr>
<br>


 







