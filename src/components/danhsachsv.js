import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import DanhSach from './danhsach';
var classNames = require('classnames');
let show = true;
class DanhSachSV extends Component{


    xoa = (data) =>{
        // console.log(data);
        this.props.xoasv(data);
    }
 
    render(){
		
        let { isClick,showDiem,diemCao,topDiemCao,xoa } = this.props;
        
        return(
            <Grid>
                <div className={classNames('bangds',{'bangds1' : isClick})} id="bangds">
                <h1>Danh Sách Sinh Viên</h1>
                <div className="ds" id="ds">
                { this.props.listsv.length > 0 && this.props.listsv.map((item,index) =>
                       <DanhSach key = {index} ten={item.ten}  index={index} xoa ={this.xoa}/>
                )}
                   
                </div>
                <div className="op">
                    <Row>
                       
                        <Col md={2}><div className="col-md-2"><button type="button" id="xuat" className="btn btn-info" onClick={showDiem} >Xuất</button></div></Col>
                        <Col md={4}><div className="col-md-4"><button type="button" id="diemcao" className="btn btn-info" onClick={diemCao}>Điểm Cao Nhất</button></div></Col>
                        <Col md={4}> <div className="col-md-4"><button type="button" id="top10diemcao" className="btn btn-info" onClick={topDiemCao}>Top 10 Điểm Cao</button></div></Col>
                    </Row>
                </div>
                
                <div className="timkiem" >
                <Row>
                    <Col md={6}>
                        <div className="group col-md-6">
                            <input type="text" required name="email" id="keywork"/>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Tên Hoặc MSSV</label>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="col-md-6"><button type="button" id="timkiem" className="btn btn-info">Tìm</button></div>
                    </Col>
                 </Row>
                </div>
 
                </div>
            </Grid>
        )
    }
}
export default DanhSachSV;