import React,{Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';
/*
Desc:模拟骰子进行布局，算是Flex布局各类属性的实战
 */
export default class FlexDiceTest extends Component{
	render(){
		return(
			<View style={FlexTestStyle.container}>
				<Text style={FlexTestStyle.item1}>1</Text>
				<Text style={FlexTestStyle.item2}>2</Text>
				<Text style={FlexTestStyle.item3}>3</Text>
				<Text style={FlexTestStyle.item4}>4</Text>
				<Text style={FlexTestStyle.item5}>5</Text>
				<Text style={FlexTestStyle.item6}>6</Text>
				<Text style={FlexTestStyle.item7}>7</Text>
				<Text style={FlexTestStyle.item8}>8</Text>
				<Text style={FlexTestStyle.item9}>9</Text>
			</View>
		)
		
	}
}

const FlexTestStyle = StyleSheet.create({
	container:{
		backgroundColor:'blue',
		width:300,
		height:300,
		justifyContent:'space-between',
		flexDirection:'row',
		flexWrap:'wrap'
	},

	item1:{
		color:'#fff',
		backgroundColor:'#000',
		width:80,
		height:80,
		margin:4,
		textAlign:'center',
		textAlignVertical:'center'

	},

	item2:{
		color:'#fff',
		backgroundColor:'#000',
		width:80,
		height:80,
		margin:4,
		textAlign:'center',
		textAlignVertical:'center'
	},

	item3:{
		color:'#fff',
		backgroundColor:'#000',
		width:80,
		height:80,
		margin:4,
		textAlign:'center',
		textAlignVertical:'center'

	},

	item4:{
		color:'#fff',
		backgroundColor:'#000',
		width:80,
		height:80,
		margin:4,
		textAlign:'center',
		textAlignVertical:'center',
		alignSelf:'flex-end'
	},

	item5:{
		color:'#fff',
		backgroundColor:'#000',
		width:80,
		height:80,
		margin:4,
		textAlign:'center',
		textAlignVertical:'center'

	},

	item6:{
		color:'#fff',
		backgroundColor:'#000',
		width:80,
		height:80,
		margin:4,
		textAlign:'center',
		textAlignVertical:'center'
	},

	item7:{
		color:'#fff',
		backgroundColor:'#000',
		width:80,
		height:80,
		margin:4,
		textAlign:'center',
		textAlignVertical:'center'

	},

	item8:{
		color:'#fff',
		backgroundColor:'#000',
		width:80,
		height:80,
		margin:4,
		textAlign:'center',
		textAlignVertical:'center'
	},

	item9:{
		color:'#fff',
		backgroundColor:'#000',
		width:80,
		height:80,
		margin:4,
		textAlign:'center',
		textAlignVertical:'center'

	}
})