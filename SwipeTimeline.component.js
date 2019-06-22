import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,FlatList,Image, TouchableOpacity} from 'react-native';

import { Icon } from 'react-native-elements';
import { SwipeListView,SwipeRow } from 'react-native-swipe-list-view';

import Colors from './resources/Colors';
import {widthPercentageToDP} from './helpers/responsive'

import DateStripe from './components/DateStripe/DateStripe.component'
// data={id,title,description,photo (optional),thumbnail,time,swipeLeft:{enabled,icon:{name,type,color}},swipeRight:{enabled,icon:{name,type,color}}}

export default class SwipeTimeline extends Component{
	state={flatListScroll:true}
	renderPhoto=(item)=>{
		if (item.photo){
			if (item.photo!==undefined){
				return <Image style={{width:'95%',height:widthPercentageToDP('45%'),borderRadius:5,alignSelf:'center',marginTop:15}} source={item.photo}/>
			}
		}
		return <View></View>
	}
	renderActions=(item)=>{
		if (item.actions){
			return (
					<View style={{flexDirection:'row',width:'100%',height:widthPercentageToDP('15%'),alignItems:'center',alignSelf:'center',marginTop:25}}>
						{
							item.actions.map((action,index)=>{
								return (
										<View key={action.id}>
											<Icon
		                                        name={action.name}
		                                        type={action.type}
		                                        color={action.color}
		                                        size={widthPercentageToDP('4%')}
		                                        iconStyle={{ elevation: widthPercentageToDP('1%')}}
		                                        onPress={()=>this.props.onAction(item,action)}
		                                        reverse
		                                        raised
		                                    />
		                                    <Text style={{fontSize:11,color:Colors.Cream,alignSelf:'center'}}>{action.value}</Text>
										</View>
									)
							})
						}
					</View>
				)
		}
	}
	render(){
		return(
		<View style={{flex:1}}>
			{
				this.props.dateStripe.enabled?
				this.props.dateStripe.top?
					<DateStripe
						start={new Date(this.props.dateStripe.startDate)}
	                	end={new Date(this.props.dateStripe.endDate)}
	                	currentDate={new Date(this.props.dateStripe.currentDate)}
	                	onDateSelected={
		                    (date)=>{
	                        	this.props.onDateSelected(date)
	                    	}
	                	}
	                	primaryColor={this.props.dateStripe.primaryColor}
	                	secondaryColor={this.props.dateStripe.secondaryColor}
	                	fontColor={this.props.dateStripe.fontColor}
	            	/>
	            	:<View></View>:<View></View>
			}
			<FlatList
				scrollEnabled={this.state.flatListScroll}
				keyExtractor={(item,index)=>item[this.props.itemKey].toString()}
				data={this.props.data}
				renderItem={({item,index})=>{
					return(
						<View style={[styles.shadow,{borderBottomColor:Colors.White,borderBottomWidth:1,width:'100%'}]}>
							<SwipeRow
								onRowDidClose={()=>this.setState({flatListScroll:true})}
								swipeGestureBegan={()=>this.setState({flatListScroll:false})}
								preview={this.props.preview}
								closeOnRowOpen={true}
								onRowPress={()=>this.props.onCardPress(item)}
								stopLeftSwipe={widthPercentageToDP('40%')}
								stopRightSwipe={-1*widthPercentageToDP('40%')}
								swipeToOpenPercent={90}
								onRowOpen={(toValue)=>{this.props.onCardOpen(toValue,item)}}
								leftOpenValue={widthPercentageToDP('35%')}
								rightOpenValue={-1*widthPercentageToDP('35%')}
							>
								<View style={{flex:1,flexDirection:'row',width:'100%', height:'100%',alignItems:'center',position:'relative'}}>
	                                <View style={{backgroundColor:item.swipeRight.color,flex:1,flexDirection:'row',width:'50%',height:'100%',position:'relative',justifyContent:'flex-start',padding:20}}>
	                                    <Icon
	                                        name={item.swipeRight.icon.name}
	                                        type={item.swipeRight.icon.type}
	                                        color={item.swipeRight.icon.color}
	                                        size={widthPercentageToDP('7%')}
	                                        iconStyle={{ elevation: widthPercentageToDP('1%'), marginLeft:10 }}
	                                    />
	                                </View>
	                                <View style={{backgroundColor:item.swipeLeft.color,flex:1,flexDirection:'row',width:'50%',height:'100%',position:'relative',justifyContent:'flex-end',padding:20}}>
	                                    <Icon
	                                        name={item.swipeLeft.icon.name}
	                                        type={item.swipeLeft.icon.type}
	                                        color={item.swipeLeft.icon.color}
	                                        size={widthPercentageToDP('7%')}
	                                        iconStyle={{ elevation: widthPercentageToDP('1%'), marginRight:10 }}
	                                    />
	                                </View>
	                            </View>
								<View style={{flex:1,height:'100%',width:'100%',paddingTop:20,paddingBottom:20,paddingLeft:10,paddingRight:10,backgroundColor:item.backgroundColor,position:'relative'}}>
									<TouchableOpacity style={{position:'absolute',left:10,top:15,zIndex:1}} onPress={()=>this.props.onThumbnailPressed(item)}>
										<Image style={{width:50,height:50,borderRadius:50}} source={item.thumbnail}/>
									</TouchableOpacity>
									<View style={{flexDirection:'column',marginLeft:30}}>
										<View style={{borderTopRightRadius:20,borderBottomRightRadius:20,backgroundColor:item.titleColor,padding:10,width:'50%'}}>
											<Text style={{fontSize:14,color:Colors.White,alignSelf:'center'}}>{item.title}</Text>
										</View>
										<Text style={{fontSize:12,color:Colors.Cream,width:'80%',marginTop:15}}>{item.description}</Text>
									</View>
									{this.renderPhoto(item)}
									<View style={{backgroundColor:item.timeColor,position:'absolute',top:10,right:20,paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5,borderRadius:10}}>
										<Text style={{color:Colors.White,fontSize:12}}>{item.time}</Text>
									</View>
									{this.props.cardChilds}
									{this.renderActions(item)}
								</View>
							</SwipeRow>
						</View>
						)
				}}
				bounces={false}
				{...this.props}
			/>
			{
				this.props.dateStripe.enabled?
				(this.props.dateStripe.bottom&&!this.props.dateStripe.top)?
					<DateStripe
						start={new Date(this.props.dateStripe.startDate)}
	                	end={new Date(this.props.dateStripe.endDate)}
	                	currentDate={new Date(this.props.dateStripe.currentDate)}
	                	onDateSelected={
		                    (date)=>{
	                        	this.props.onDateSelected(date)
	                    	}
	                	}
	                	primaryColor={this.props.dateStripe.primaryColor}
	                	secondaryColor={this.props.dateStripe.secondaryColor}
	                	fontColor={this.props.dateStripe.fontColor}
	            	/>
	            	:<View></View>:<View></View>
			}
		</View>
			)
	}
}

const styles={
	shadow:{
		shadowColor: "#000",shadowOffset:{width: 0,height: 1},shadowOpacity: 0.22,shadowRadius: 2.22,elevation: 3
	}
}