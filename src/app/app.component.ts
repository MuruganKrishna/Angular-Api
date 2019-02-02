import { Component, OnInit } from '@angular/core';
import {User} from './user.model';
import { DataService } from './data.service';
import {HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
     
  
  obj:any;
  salary:any;
  bool1=false;
  count1:any;
  len:any;
  employee_id:number;
  count:number;
  input1;
  percost:any;
  bool:boolean;
  payout:any;
  value:any;
  message:any;
  user$:User[];
  averagesalary:any;
  apiURL1:any;
  employeename:any;
  arrayvalue=[];
  c:any;
 //arrayvalue=[{key: "Murugan" ,value:1},{key:"Chittan",value:2},{key:"Krish",value:3},{key:"Krishna",value:4}]
  constructor(private dataservice: DataService,private http:HttpClient){}
  ngOnInit(){
    ///////name///////
    
      this.obj={name: "hi"}
        this.http.post("http://localhost:3000/api/v1/get_name",this.obj,{headers:new HttpHeaders({'content':'application.json'})}).subscribe(data=>{
         // console.log(data);
          this.arrayvalue=Object.assign([],data)
          console.log("sahdg")
          console.log(this.arrayvalue);
          // for(let i=0;i<doc.lenght;i++){
          //   console.log(i);
          // }
        })
    

    
      //this.employee_id=this.message
    this.obj = {
     
      employee_id:"hi"
    }
     //console.log(this.obj)
     const apiURL2= "http://localhost:3000/api/v1/get_paidemployee";
     this.http.post(apiURL2,this.obj,{headers:new HttpHeaders({'content-Type':'application/json'})}).subscribe(res => {
      console.log(res)

      const doc:any = res;
      
       this.employeename= doc.name;
       
      // console.log(this.payout)
    })
    ////////////
    const apiURL3= "http://localhost:3000/api/v1/get_paidemployee1";
    this.http.post(apiURL3,this.obj,{headers:new HttpHeaders({'content-Type':'application/json'})}).subscribe(res => {
      console.log(res)

      //const doc:any = res;
      
       this.averagesalary= res;
       
      // console.log(this.payout)
    })
    //////////////////
    const apiURL4= "http://localhost:3000/api/v1/percost";
    this.http.post(apiURL4,this.obj,{headers:new HttpHeaders({'content-Type':'application/json'})}).subscribe(res => {
      console.log(res)

      //const doc:any = res;
      
       this.percost= res;
       
      // console.log(this.payout)
    })
    
    
     
     
    }

  
submit(){
  this.bool=true;
  this.bool1=false;
  this.employee_id=this.count
this.obj = {
 
  employee_id:this.employee_id
}
 console.log(this.obj)
 const apiURL = "http://localhost:3000/api/v1/salaries";
 this.http.post(apiURL,this.obj,{headers:new HttpHeaders({'content-Type':'application/json'})}).subscribe(res => {
  console.log(res)
  const doc:any = res;
  this.salary = doc.actual_salary;
  console.log(this.salary)
})
//  this.dataservice.setUser(this.obj)
}
////////////////
submit1(){
  this.bool=false
  this.bool1=true
  this.employee_id=this.count1
this.obj = {
 
  employee_id:this.employee_id
}
 //console.log(this.obj)
 const apiURL1= "http://localhost:3000/api/v1/get_salarydata";
 this.http.post(apiURL1,this.obj,{headers:new HttpHeaders({'content-Type':'application/json'})}).subscribe(res => {
  console.log(res)
  // const doc:any = res;
  this.payout = res;
  console.log(this.payout)
})
}


  
  }
