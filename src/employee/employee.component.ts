import { Component } from "@angular/core";
import { Employee } from "../app/models/employee.model";


@Component(
    {
        templateUrl:'./employee.component.html'
    }
)

export class EmployeeComponent{
    pageTitle:string="Employee Form"
    languages=['English','Hindi','French','German','Spanish'];
    model=new Employee('Darla','Smith',true);
    firstNameToUpperCase(value:string){
        if(value.length>0)
        {
            this.model.firstName=value.charAt(0).toUpperCase()+value.slice(1);
        }
        else
        this.model.firstName=value;
    }
    }
