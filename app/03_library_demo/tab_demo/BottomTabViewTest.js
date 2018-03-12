import React,{Component} from 'react';
import {Animated,StyleSheet,View,Text,Image} from 'react-native';
import {TabViewAnimated,TabBar} from 'react-native-tab-view';
import FlexTest from "../../01_flex_demo/FlexTest";
import FlexDiceTest from "../../01_flex_demo/FlexDiceTest";
import FetchNetData from "../../02_fetch_demo/FetchNetData";
import BannerTest from "../BannerTest";


export default class BottomTabViewTest extends Component{

    // static title = 'Bottom bar with indicator';
    // static appbarElevation = 4;
    static propTypes = {
        style: View.propTypes.style,
    };

	state = {
		index:0,
		routes:[
			{key: '1', title: '新闻'},
            {key: '2', title: '热点'},
            {key: '3', title: '科技'},
            {key: '4', title: '数码'}
		]
	};

	
	_renderFooter = (props)=>{
		return <TabBar
			{...props}
			renderIcon={this._renderIcon}
			renderBadge={this._renderBadge}
			renderIndicator={this._renderIndicator}
			style={BottomTabViewTestStyle.tabbar}
			tabStyle={BottomTabViewTestStyle.tab}/>;
	};

	_renderIcon = ({route}:any)=>{
		return (<Image source={route.icon} style={{width:24,height:24}}/>);
	}

    _renderBadge = ({route}:any)=>{
		if (route.key === '2'){
        	return (<View style={BottomTabViewTestStyle.badge}>
				<Text style={BottomTabViewTestStyle.count}>42</Text>
				</View>);
		}
		return null;
    }

    _renderIndicator = (props)=>{
		const {width,position} = props;
		const translateX = Animated.multiply(position,width);
		return (<Animated.View style={[BottomTabViewTestStyle.container,{width,transform:[{translateX}]}]}>
			<Text style={BottomTabViewTestStyle.indicator}/>
		</Animated.View>);
    }

	_renderScene = ({route})=>{
		switch(route.key) {
			case '1':
				return <View style={[BottomTabViewTestStyle.page,
					{ backgroundColor:'#ff4081'}]}/>;
            case '2':
                return <View style={[ BottomTabViewTestStyle.page,
                    { backgroundColor: '#673ab7' } ]} />;
            case '3':
                return <View style={[ BottomTabViewTestStyle.page,
                    { backgroundColor: '#4caf50' } ]} />;
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
				style={[BottomTabViewTestStyle.container,this.props.style]}
				navigationState={this.state}
				renderFooter={this._renderFooter}
				renderScene={this._renderScene}
				onRequestChangeTab={this._handleChangeTab}
			/>
		)
	}

}

const BottomTabViewTestStyle = StyleSheet.create({
	container:{
		flex:1
	},
    tabbar: {
        backgroundColor: '#222',
    },
    tab: {
        padding: 0,
    },
	icon:{
		backgroundColor:'transparent',
		color:'white'
	},
    indicator: {
        flex: 1,
        backgroundColor: '#0084ff',
        margin: 4,
        borderRadius: 2,
    },
	badge:{
		marginTop:4,
		marginRight:32,
        backgroundColor: '#f44336',
		width:24,
		height:24,
		borderRadius:12,
		alignItems:'center',
		justifyContent:'center',
		elevation:4
	},
	count:{
		color:'#fff',
		fontSize:12,
		fontWeight:'bold',
		marginTop:-2

	},
	page:{
		flex:1,
        alignItems:'center',
        justifyContent:'center'
	}
});