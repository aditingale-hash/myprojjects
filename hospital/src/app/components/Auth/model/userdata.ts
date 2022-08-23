export const users=[
    {
      "name": 'harry potter',
      "username": "harry",
      "password": "potter"
    },
    {
      "name": 'ronald weasley',
      "username": "roanld",
      "password": "123"
    }
  ]

  export interface user{
    username:string,
    password:string,
    role:string,
    name:string,
    doctor:doctors
  }
  export interface doctors{
    id:number,
    name:string,
  }