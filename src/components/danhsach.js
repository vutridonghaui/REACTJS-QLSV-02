import React, { Component } from 'react';

class DanhSach extends Component{

	xoa = () =>{
		let index = this.props.index;
		// console.log(index);
		this.props.xoa(index);
	}
	render(){

		return (
				
            <p> {this.props.index + 1 + ". "}{this.props.ten}    
			<button onClick={this.xoa}>Xoa</button></p>
		);
	}
}
export default DanhSach;