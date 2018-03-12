import React,{Component} from 'react';
import {StyleSheet,View,Text,Image,ToastAndroid} from 'react-native';
/*
从网络获取数据，并展示到UI上
 */
export default class FetchNetData extends Component{

	constructor(props){
		super(props);
		this.state = {
			user:null
		};
	}

	//页面渲染完成后会主动回调该方法
	componentDidMount(){
		this.fetchUserList();
	}

	//发起网络请求，获取数据
	fetchUserList(){
		const url = 'https://api.github.com/users/mralexgray/repos';
		fetch(url)
			.then((response)=>response.json())
			.then((responseJson)=>{
				ToastAndroid.show(responseJson.msg, ToastAndroid.SHORT);
				var firstUser = responseJson[0].owner;
				console.log(firstUser);
				this.setState({
					user:firstUser
				})
			})
			.catch((error)=>console.error(error))
	}

	//绘制界面
	render(){
		let user = this.state.user;
		//这里需要判断网络请求完成与否，如果item为空时，会发生空指针
		if (user) {
			return this.renderUser(user);
		}

		return(
			<Text style={{textAlign:'center', fontSize:16 , padding:20}}>加载中...</Text>
		)
	}

	//绘制展示数据的界面
	renderUser(user){
		return(
			<View style={FetchNetDataStyle.container}>
				<Image style={FetchNetDataStyle.image_UserAvatar} source={{uri: user.avatar_url}}/>
				<View style={FetchNetDataStyle.container_right}>
					<Text style={FetchNetDataStyle.text_UserID}>{user.id}</Text>
					<Text style={FetchNetDataStyle.text_UserType}>{user.type}</Text>
				</View>
			</View>
		)
	}
}

const FetchNetDataStyle = StyleSheet.create({
	container:{
		backgroundColor:'white',
		flexDirection:'row',
		height:100,
		alignItems:'center'
	},

	container_right:{
		flexDirection:'column',
		height:80,
		flexGrow:1
	},

	image_UserAvatar:{
		height:80,
		width:80,
		borderRadius:80,
		resizeMode:'cover',
		marginHorizontal:12
	},

	text_UserID:{
		color:'black',
		fontSize:16,
		lineHeight:24
	},

	text_UserType:{
		color:'grey',
		fontSize:12,
		lineHeight:20
	}
	
})