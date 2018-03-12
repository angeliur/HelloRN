import React,{Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';
import Banner from 'react-native-banner';


export default class BannerTest extends Component{

	constructor(props){
		super(props);

		this.banners = [
			{
                title: 'beauty 1',
                image: 'http://source.51yrz.com/1466071007.jpg?imageView2/1/w/600/h/300',
            },
            {
                title: 'beauty 2',
                image: 'http://source.51yrz.com/1466126704.jpg?imageView2/1/w/600/h/300',
            },
            {
                title: 'The next banner has no title',
                image: 'http://source.51yrz.com/1466071229.jpg?imageView2/1/w/600/h/300',
            },
            {
                // title: 'no title',
                image: 'http://source.51yrz.com/1466473308.jpg?imageView2/1/w/600/h/300',
            },
		];

		this.state = {
			clickTitle:'You can try clicking beauty',
			defaultIndex:0
		};

		this.defaultIndex = 0;
	}

	
	//绘制界面
	render(){
		
		return(
			<View style={BannerTestStyle.container}>
				<Banner>
					banners = {this.banners}
					defaultIndex = {this.defaultIndex}
					onMomentumScrollEnd = {this.onMomentumScrollEnd.bind(this)}
					intent = {this.clickListener.bind(this)}
				</Banner>
			</View>
		)
	}

	clickListener(index){
		this.setState{
			clickTitle : this.banners[index].title ? 'You click ${banners[index].title}' : 'this banner has no title'
		}
	}

	onMomentumScrollEnd(event,state){
		console.log(`--->onMomentumScrollEnd page index:${state.index}, total:${state.total}`);
 		
	}

}

const BannerTestStyle = StyleSheet.create({
	container:{
		backgroundColor:'#F5FCFF',
		flex:1
	}
})