import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
var classNames = require('classnames');

class FormInput extends Component{
	constructor(props){
		super(props);
		this.state = {
			ten : '',
			mssv : '',
			toan: '',
			ly :'',
			hoa : ''
		
		};
	}
	onChange = (e) =>{
		let ten = this.refs.ten.value;
		let mssv = this.refs.mssv.value;
		let toan = this.refs.toan.value;
		let ly = this.refs.ly.value;
		let hoa = this.refs.hoa.value;
		
		console.log(toan);
		this.setState({ 
			ten : ten,
			mssv : mssv,
			toan : toan,
			ly : ly,
			hoa : hoa
		 });
		
	}

	onSubmit = (event) =>{
		
		// console.log(this.state)
		event.preventDefault();
		this.props.onSubmit(this.state);
		this.onClear();
	}
	onClear = () =>{
		this.setState({
			ten : '',
			mssv : '',
			toan: '',
			ly :'',
			hoa : ''
		})
	}
    render(){
		const { isClick, onClick } = this.props;
		let show = false;
        if(isClick){
            show = true;
        }
        return(
            <Grid>
            <div>
                <div className={classNames('bangtt',{'bangtt1' : show})} id="bang">
	            <div className="col-md-12 head">
	                <div className="col-md-3 logo">
	                    <img src="" alt="" width="80"/>
	                </div>
	                <div className="col-md-9 truong">
	                    <h1>Thông Tin Sinh Viên</h1>
	                </div>
	            </div>

	            <div className="body">
	                <form id="sv" onSubmit = {this.onSubmit} >
                    <Row>
                        <Col md={6}>
                            <div className="col-md-6">
                                <div className="group">
                                    <input type="text" required name="ten" ref="ten" value={this.state.ten} id="ten" onChange={this.onChange}></input>
                                    <span className="highlight"></span>
                                    <span className="bar"></span>
                                    <label>Name</label>
                                </div>	                    
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="col-md-6">
                                <div className="group">
                                    <input type="text" required name="mssv" ref="mssv" id="mssv" value={this.state.mssv}  onChange={this.onChange}/>
                                    <span className="highlight"></span>
                                    <span className="bar"></span>
                                    <label>MSSV</label>
                                </div>
                            </div>
                        </Col>
                    </Row>
	                <Row>
                        <Col md={4}>
	                        <div className="col-md-4">
	                            <div className="group">
	                                <input type="text" required className="diem"  name="toan" id="toan"  ref="toan" onChange={this.onChange}  value={this.state.toan}/>
	                                <span className="highlight"></span>
	                                <span className="bar1 bar"></span>
	                                <label>Toán</label>
	                            </div>
	                        </div>
                        </Col>
                        <Col md={4}>
	                        <div className="col-md-4">
	                            <div className="group">
	                                <input type="text" required className="diem" name="ly" id="ly"  ref="ly" onChange={this.onChange}  value={this.state.ly}/>
	                                <span className="highlight"></span>
	                                <span className="bar1 bar"></span>
	                                <label>Lý</label>
	                            </div>
	                        </div>
                        </Col>
                        <Col md={4}>
	                        <div className="col-md-4">
	                            <div className="group">
	                                <input type="text" required className="diem" name="hoa" id="hoa"  ref="hoa" onChange={this.onChange}  value={this.state.hoa}/>
	                                <span className="highlight"></span>
	                                <span className="bar1 bar"></span>
	                                <label>Hóa </label>
	                            </div>
	                        </div>
                        </Col>
                    </Row>    
	                  
	          
                 
	          
	            <center>
	                <button type="submit" className="btn btn-info waves-effect waves-light btn"  id="them" onClick={onClick}>
	                    Thêm Thông Tin
	                  
	                  
	                </button>

	            </center>
			
			</form>
			</div>
	        </div>
            </div>
			

        </Grid>
        
        );
    }
}
export default FormInput;
