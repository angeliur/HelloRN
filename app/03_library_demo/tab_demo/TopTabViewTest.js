import React,{Component} from 'react';
import {StyleSheet,View} from 'react-native';
import {TabViewAnimated,TabBarTop} from 'react-native-tab-view';
import FlexTest from "../../01_flex_demo/FlexTest";
import FlexDiceTest from "../../01_flex_demo/FlexDiceTest";
import FetchNetData from "../../02_fetch_demo/FetchNetData";
import BannerTest from "../BannerTest";


export default class TopTabViewTest extends Component{

	state = {
		index:0,
		routes:[
			{key: '1', title: '新闻'},
            {key: '2', title: '热点'},
            {key: '3', title: '科技'},
            {key: '4', title: '数码'}
		]

	};

	
	_renderHeader = (props)=>{
		return <TabBarTop {...props}/>;
	};

	_renderScene = ({route})=>{
		switch(route.key) {
			case '1':
				return <FlexTest/>;
			case '2':
				return <FlexDiceTest/>;
			case '3':
				return <FetchNetData/>;
			case '4':
				return <BannerTest/>;
			default:
				return null;
		}
	};

	//处理tab切换时的索引
	_handleChangeTab = (index)=>{
		this.setState({index});
	};

	//绘制界面
	render(){
		
		return(
			<TabViewAnimated 
				style={TopTabViewTestStyle.container}
				navigationState={this.state}
				renderHeader={this._renderHeader}
				renderScene={this._renderScene}
				onRequestChangeTab={this._handleChangeTab}
			/>
		)
	}

}

const TopTabViewTestStyle = StyleSheet.create({
	container:{
		flex:1
	}
});