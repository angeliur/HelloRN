import React,{Component} from 'react';
import {View,Text} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
/*
可拖动放大头部的ScrollView
 */
export default class ParallaxTest extends Component{

	
	//绘制界面
	render(){
		
		return(
			<ParallaxScrollView 
				backgroundColor = 'blue'
				contentBackgroundColor = 'pink'
				parallaxHeaderHeight = {300}
				renderForeground = {() => (
						<View style = {{height:300,flex:1,alignItems:'center',justifyContent:'center'}}>
							<Text>HelloWorld!</Text>
						</View>
					)}
			>
				<View style = {{height:100}}>
					<Text>Scroll me</Text>
				</View>

				<View style = {{height:100}}>
					<Text>Scroll me</Text>
				</View>

				<View style = {{height:100}}>
					<Text>Scroll me</Text>
				</View>

				<View style = {{height:100}}>
					<Text>Scroll me</Text>
				</View>

				<View style = {{height:100}}>
					<Text>Scroll me</Text>
				</View>

				<View style = {{height:100}}>
					<Text>Scroll me</Text>
				</View>
			</ParallaxScrollView>
		)
	}

}



