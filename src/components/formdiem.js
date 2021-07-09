import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
var classNames = require('classnames');

class FormDiem extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const { showDiem, listSV } = this.props;
       
        return(
            <Grid>
                <Row>
                    <Col md={6}>
                        <div className="col-md-6">
                            <div className = {classNames('bangdiem',{'bangdiem1' : showDiem})} id="bangdiem">
                                <h1>Bảng Điểm Sinh Viên</h1>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Tên Sinh Viên</th>
                                            <th>Mã Sinh Viên</th>
                                            <th>Điểm TB</th>
                                            <th>Xếp Loại</th>
                                        </tr>
                                    </thead>
                                    <tbody id="diem">
                                        { listSV && listSV.map((item,index) =>
                                            	<tr>
                                                <td>{item.ten}</td>
                                                <td>{item.mssv}</td>
                                                <td>{item.diemtb}</td>
                                                <td>{item.xeploai}</td>
                                            </tr>
                                        ) }
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                </Col>
                </Row>
            </Grid>
        )
    }
}

export default FormDiem;