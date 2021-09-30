import { Component } from '@angular/core';

interface ToDoItem {
  id:number;
  name:string;
 }  
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit() {
    // this.addTask(this.list)
    this.list = JSON.parse(localStorage.getItem('todoItems') || '{}');

  }

public date = new Date();
  title = 'ToDoApp';

  list:ToDoItem[]=[];

  addTask(item: string){
    // console.log(item);
    this.list.push({id:this.list.length,name:item});
  window.localStorage.setItem("todoItems  ", JSON.stringify(this.list));
  // this.list = JSON.parse(localStorage.getItem('todoItems') || '{}');    
    console.log(this.list);
  }

  removeTask(id:number){
    // console.log(id);
    this.list=this.list.filter(item=>item.id!==id);
    window.localStorage.removeItem('');
    // console.log(window.localStorage.removeItem("todoItems.id["+String(id)+"]"));
    // console.log(window.localStorage.removeItem(id.toString(10)));

    // this.deleteItem(id);
  }


  // deleteItem(id:number){
  //   window.localStorage.removeItem("todoItems.id["+String(id)+"]");

  // }
  // updateTask(id:number){

  // }
}
