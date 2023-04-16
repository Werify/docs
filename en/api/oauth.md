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
$ curl https://api.werify.net/api/werify/request-otp 
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

# Verify

Verification of Sent OTP code or Sent an email

`id` <sup><sub>String</sub></sup>, The identitier of session you recieved from request otp.

`hash` <sup><sub>String</sub></sup>, The hash of session you recieved from request otp.

`otp` <sup><sub>String</sub></sup>, Otp code sent to your email 

<template #code>

```bash
$ curl https://api.werify.net/api/werify/request-otp
  --header 'Accept: application/json'
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
  --header 'Accept: application/json'
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

# Qr Authorize

Verification of qr token that generated

qr_token<sup><sub>String</sub></sup>, The token of qr generated, it can be below items.

    ✔️ qr_token                  wrfad882860130067e284a7

<template #code>

```bash
$ curl --request POST \
 https://api.werify.net/v1/oauth/qr/authorize
  --header 'Accept: application/json' - 'Authorization: Bearer [ACCESS_TOKEN]'
```

</template>

</CodeBox>

<Response jfile="v1/werify/oauth/qr-authorize" >

</Response>

<br>
<hr>
<br>



<CodeBox lang="Restful" method="POST" endpoint="/v1/oauth/qr">

# Qr Verification

Verification of qr token that generated and return user info

qr_token<sup><sub>String</sub></sup>, The qr token generated, it can be below items.

    ✔️ qr_token                  wrfad882860130067e284a7

<template #code>

```bash
$ curl --request POST \
 https://api.werify.net/v1/oauth/qr
  --header 'Accept: application/json' - 'Authorization: Bearer [ACCESS_TOKEN]'
```

</template>

</CodeBox>

<Response jfile="v1/werify/oauth/qr-authorize" >

</Response>








