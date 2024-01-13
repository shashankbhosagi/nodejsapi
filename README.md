# Patients API

**Technology Used :** Node.js, express, mysql, docker, aws-ec2

I have included postman file contatining all the apis and data you can use to test the online application that is present on AWS EC2 instance, I will **delete** the instance after **14 days.**

Live instance IP address - `13.233.109.92`

## To run the project on local machin

### Step 1: Make sure you have `docker` and `docker-compose` installed in you system

### Step 2: Clone this repo 

```bash
git clone https://github.com/shashankbhosagi/nodejsapi.git
```

### Step 3: Run docker compose

```bash
cd nodejsapi
```

```bash
docker-compose up -d --build
```
Check if the container started or not using below command

```bash
docker ps
```

It should look like this

![image](https://github.com/shashankbhosagi/nodejsapi/assets/78866224/2fa53bec-855b-402c-814d-6499cda98146)


### Step 4: The application will be up and running on your `localhost:3000`



## APIs 

### Get All Patients Data
- **Method:** GET
- **API:** localhost:3000/patients
- **Body:** N/A

### Send Patients Data
- **Method:** POST
- **API:** localhost:3000/patients
- **Body:**
  ```json
  {
      "first_name": "honey",
      "last_name": "b",
      "email": "yoyoy@gmail.com",
      "phone": "9424022360",
      "addrL": "nb homekade",
      "diagnosis": "cancer",
      "img_url": "yoyo.com/images/cancer.png"
  }
  ```

### Delete Patient Data
- **Method:** DELETE
- **API:** localhost:3000/patients/1
- **Body:** N/A


### Update Patient Data
- Method: PUT
- API: localhost:3000/patients/2
- Body:
```json
{
    "first_name": "shashank",
    "last_name": "bhosagi",
    "email": "shashankbhosagi0121@gmail.com",
    "phone": "cold, fever",
    "addr": "9423022360",
    "diagnosis": "nb arcade",
    "img_url": "yoyo.com/images/helo.png"
}
```

-----END-----





