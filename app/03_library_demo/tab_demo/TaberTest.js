import React,{Component} from 'react';
import {StyleSheet,ToastAndroid} from 'react-native';
import TabBar from 'react-native-xtabbar';
import FlexTest from "../../01_flex_demo/FlexTest";
import FlexDiceTest from "../../01_flex_demo/FlexDiceTest";
import FetchNetData from "../../02_fetch_demo/FetchNetData";


export default class TaberTest extends Component{


	//绘制界面
	render(){
		
		return(
			<TabBar
				style={TopTabViewTestStyle.taber_container}
				navFontSize={0}
				onItemSelected={(index)=>console.log(index)}>
				<TabBar.Item
					icon={require('../../imgs/ic_news.png')}
					selectedIcon={require('../../imgs/ic_news_selected.png')}
				>
					<FlexTest/>
				</TabBar.Item>

				<TabBar.Item
					icon={require('.././ic_video.png')}
					selectedIcon={require('.././ic_video_selected.png')}
				>
					<FlexDiceTest/>
				</TabBar.Item>

				<TabBar.Item
					icon={require('.././ic_image.png')}
					selectedIcon={require('.././ic_image_selected.png')}
				>
					<FetchNetData/>
				</TabBar.Item>

				<TabBar.Item
					icon={require('.././ic_me.png')}
					selectedIcon={require('.././ic_me_selected.png')}
				>
					<BannerTest/>
				</TabBar.Item>

			</TabBar>
		)
	}

}

const TaberTestStyle = StyleSheet.create({
    taber_container: {
        flex: 1,
        backgroundColor: "#333333",
    }
});