import React, { Component } from 'react';
import './components/style.css';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FormInput from './components/formInput';
import DanhSach from './components/danhsachsv';
import FormDiem from './components/formdiem';
let dssv = [];

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      clickVao : false,
      listsv : [],
      showdiem : false,
      diemCao : false,
      show : "show"
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick(){
    if(this.state.clickVao !== true){
      this.setState({ clickVao : true });
    }
   
  }
  onSubmit = (data) =>{
    console.log(data);
    let diemtb = ((parseInt(data.toan) + parseInt(data.ly) + parseInt(data.hoa))/3);
    let xeploai;
		    if(diemtb < 5){
		        xeploai = "Yếu";
		    }else if(diemtb >= 5 && diemtb < 6.5){
		        xeploai = "Trung Bình";
		    }else if(diemtb >=6.5 && diemtb <8){
		        xeploai = "Khá";
		    }else{
		        xeploai = "Giỏi";
		    }
    data.diemtb = diemtb;
    data.xeploai = xeploai;
    let { listsv } = this.state;
    listsv.push(data);
    this.setState({ listsv : listsv });
    this.setState({ 
      listsv : listsv
    });

    console.log(this.state.listsv);

  }
  showDiem = ()=>{
    this.setState({ showdiem : true });
    this.setState({ show : "show" });
  }
  diemCao = ()=>{
   
    this.setState({ show : "diemcao" });
  }
  topDiemCao = ()=>{
    this.setState({ show : "topdiemcao" });
  }
  xoasv = (data) =>{
     let { listsv } = this.state;
    listsv.splice(data,1);
    this.setState({ 
        listsv : listsv
     });
  }
  
  render() {
    let listdiemCao;
    const { clickVao, listsv,showdiem,diemCao,show } = this.state;
    if(diemCao){
      listdiemCao = (listsv.sort((a,b)=> b.diemtb-a.diemtb)).slice(0,1);
      console.log(listdiemCao);
    }
    if(show === "diemcao"){
      listdiemCao = (listsv.sort((a,b)=> b.diemtb-a.diemtb)).slice(0,1);
     
    }else if(show === "topdiemcao"){
      listdiemCao = (listsv.sort((a,b)=> b.diemtb-a.diemtb)).slice(0,3);
    }else{
        listdiemCao = listsv;
      console.log(listdiemCao);
    }
   
   
    return (
      <div className="App">
          <FormInput isClick={clickVao} onClick={this.onClick} onSubmit = {this.onSubmit}/>
          
          
           
        <DanhSach listsv = {listsv} isClick={clickVao} onClick={this.onClick} showDiem={this.showDiem} diemCao={this.diemCao} topDiemCao = {this.topDiemCao} xoasv={this.xoasv} />
        <FormDiem showDiem = {showdiem} listSV = {listdiemCao} />
      </div>
    );
  }
}

export default App;
