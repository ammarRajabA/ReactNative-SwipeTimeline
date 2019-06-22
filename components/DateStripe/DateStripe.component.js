import React, { Component } from 'react';
import { View, Text,Dimensions,TouchableHighlight,TouchableNativeFeedback,Platform,ScrollView,findNodeHandle} from 'react-native';
import { Icon } from 'react-native-elements';

import { widthPercentageToDP } from '../../helpers/responsive';

import Colors from '../../resources/Colors';


const days=['SUN','MON','TUE','WED','THU','FRI','SAT'];
const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
const { width } = Dimensions.get('window');

function getSunday(d) {
  d = new Date(d);
  var day = d.getDay(),
      diff = d.getDate() - day
  return new Date(d.setDate(diff));
}

export default class DateStripe extends Component{
	state={}
	componentWillMount(){
		this.SundayDate=getSunday(this.props.currentDate);
	}
	componentDidMount(){
		setTimeout(()=>{
			if (this.refs.mid!==undefined)
				this.refs.mid.measureLayout(
		    		findNodeHandle(this.dateStripeScrollView),
		    		(x, y) => {
		            	this.dateStripeScrollView.scrollTo({x: x-width*(1400/100)*(2.05/100), y: 0, animated: true});
		        	}
		    	);
		},200)
	}
	gotoToday=()=>{
		if (this.refs.today!==undefined)
			this.refs.today.measureLayout(
	    		findNodeHandle(this.dateStripeScrollView),
	    		(x, y) => {
	            	this.dateStripeScrollView.scrollTo({x: x-width*(1400/100)*(2.05/100), y: 0, animated: true});
	        	}
	    	);
	}
	renderHighlighted=(day)=>{
		return (
			<View ref={this.dayType(this.props.currentDate)==='Today'?'mid':''} style={{borderTopColor:this.props.secondaryColor,borderTopWidth:5,shadowColor: "#000",shadowOffset:{width: 0,height: 2},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,height:'100%',width:'2.05%',justifyContent:'center',flexDirection:'column',alignItems:'center',backgroundColor:this.props.fontColor}}>
                <View style={{alignItems:'center',justifyContent:'center'}}>
	        		<Text style={{color:this.props.primaryColor,fontSize:widthPercentageToDP('3.0%')}}>{this.dayType(this.props.currentDate) +', '+ months[new Date(this.props.currentDate).getMonth()] +' '+ new Date(this.props.currentDate).getDate()}</Text>
	        	</View>
            </View>
			)
	}
	renderDay=(day,date,dayIndex,offset)=>{
		var today=new Date();
		var thisDate=new Date(new Date().setDate(date.getDate()+dayIndex+offset))
		if ((new Date(new Date().setDate(date.getDate()+dayIndex+offset))<new Date(this.props.start))||(new Date(new Date().setDate(date.getDate()+dayIndex+offset))>new Date(this.props.end))){
			return(
				Platform.OS === 'ios'?
				<TouchableHighlight>
					<View style={{height:'100%',width:'2.05%',justifyContent:'center',flexDirection:'column',alignItems:'center',backgroundColor:this.props.primaryColor}}>
		                <View style={{alignItems:'center',justifyContent:'center'}}>
			        		<Text style={{color:Colors.Gray,fontSize:widthPercentageToDP('3.0%')}}>{this.dayType(thisDate) +', '+ months[thisDate.getMonth()] +' '+ thisDate.getDate()}</Text>
			        	</View>
		            </View>
	            </TouchableHighlight>:
	            <TouchableNativeFeedback>
	            	<View style={{height:'100%',width:'2.05%',justifyContent:'center',flexDirection:'column',alignItems:'center',backgroundColor:this.props.primaryColor}}>
		                <View style={{alignItems:'center',justifyContent:'center'}}>
			        		<Text style={{color:Colors.Gray,fontSize:widthPercentageToDP('3.0%')}}>{this.dayType(thisDate) +', '+ months[thisDate.getMonth()] +' '+ thisDate.getDate()}</Text>
			        	</View>
		            </View>
	            </TouchableNativeFeedback>
				)
		}
		else if(this.dayType(thisDate)==='Today'){
			return(
			Platform.OS === 'ios'?
			<TouchableHighlight onPress={()=>this.props.onDateSelected(new Date(new Date().setDate(date.getDate()+dayIndex+offset)))}>
				<View ref={'today'}  style={{height:'100%',width:'2.05%',justifyContent:'center',flexDirection:'column',alignItems:'center',backgroundColor:this.props.primaryColor}}>
	                <View style={{alignItems:'center',justifyContent:'center'}}>
		        		<Text style={{color:this.props.fontColor,fontSize:widthPercentageToDP('3.0%'),fontWeight:'bold'}}>{this.dayType(thisDate) +', '+ months[thisDate.getMonth()] +' '+ thisDate.getDate()}</Text>
		        	</View>
	            </View>
            </TouchableHighlight>:
            <TouchableNativeFeedback onPress={()=>this.props.onDateSelected(new Date(new Date().setDate(date.getDate()+dayIndex+offset)))}>
				<View ref={'today'}  style={{height:'100%',width:'2.05%',justifyContent:'center',flexDirection:'column',alignItems:'center',backgroundColor:this.props.primaryColor}}>
	                <View style={{alignItems:'center',justifyContent:'center'}}>
		        		<Text style={{color:this.props.fontColor,fontSize:widthPercentageToDP('3.0%'),fontWeight:'bold'}}>{this.dayType(thisDate) +', '+ months[thisDate.getMonth()] +' '+ thisDate.getDate()}</Text>
		        	</View>
	            </View>
            </TouchableNativeFeedback>
			)
		}
		return(
			Platform.OS === 'ios'?
			<TouchableHighlight onPress={()=>this.props.onDateSelected(new Date(new Date().setDate(date.getDate()+dayIndex+offset)))}>
				<View style={{height:'100%',width:'2.05%',justifyContent:'center',flexDirection:'column',alignItems:'center',backgroundColor:this.props.primaryColor}}>
	                <View style={{alignItems:'center',justifyContent:'center'}}>
		        		<Text style={{color:this.props.fontColor,fontSize:widthPercentageToDP('3.0%')}}>{this.dayType(thisDate) +', '+ months[thisDate.getMonth()] +' '+ thisDate.getDate()}</Text>
		        	</View>
	            </View>
            </TouchableHighlight>:
            <TouchableNativeFeedback onPress={()=>this.props.onDateSelected(new Date(new Date().setDate(date.getDate()+dayIndex+offset)))}>
				<View style={{height:'100%',width:'2.05%',justifyContent:'center',flexDirection:'column',alignItems:'center',backgroundColor:this.props.primaryColor}}>
	                <View style={{alignItems:'center',justifyContent:'center'}}>
		        		<Text style={{color:this.props.fontColor,fontSize:widthPercentageToDP('3.0%')}}>{this.dayType(thisDate) +', '+ months[thisDate.getMonth()] +' '+ thisDate.getDate()}</Text>
		        	</View>
	            </View>
            </TouchableNativeFeedback>
			)
	}
	handleScroll=(event)=>{
 		
	}
	dayType=(currentDate)=>{
		var today=new Date();
		//var currentDate=new Date(this.props.currentDate)
		if (today.getFullYear()===currentDate.getFullYear() && today.getMonth()===currentDate.getMonth() && (today.getDate())===currentDate.getDate()) return 'Today';
		else if (today.getFullYear()===currentDate.getFullYear() && today.getMonth()===currentDate.getMonth() && (today.getDate()+1)===currentDate.getDate()) return 'Tomorrow';
		else if (today.getFullYear()===currentDate.getFullYear() && today.getMonth()===currentDate.getMonth() && (today.getDate()-1)===currentDate.getDate()) return 'Yesterday';
		else return days[currentDate.getDay()]
	}
	render (){
		return (
			<View style={{backgroundColor:this.props.primaryColor,height:'6%',position:'relative'}}>
				<ScrollView ref={(ref)=>this.dateStripeScrollView=ref} onScroll={this.handleScroll} horizontal={true} removeClippedSubviews={true} showsHorizontalScrollIndicator={false} snapToAlignment={'center'} pagingEnabled={false} contentContainerStyle={{ width:'1400%' }} style={{width:'100%',height:'100%'}} scrollEnabled>
					    {
		                	days.map((day,index)=>{
		                		if (this.props.currentDate.toDateString()===(new Date(new Date().setDate(this.SundayDate.getDate()-21+index)).toDateString())){
		                			return this.renderHighlighted(day)
		                		}else{
		                			return this.renderDay(day,this.SundayDate,index,-21)
		                		}
		                	})
		                }
		        	
		        	    {
		                	days.map((day,index)=>{
		                		if (this.props.currentDate.toDateString()===(new Date(new Date().setDate(this.SundayDate.getDate()-14+index)).toDateString())){
		                			return this.renderHighlighted(day,this.props.currentDate.getDate())
		                		}else{
		                			return this.renderDay(day,this.SundayDate,index,-14)
		                		}
		                	})
		                }
		        	    {
		                	days.map((day,index)=>{
		                		if (this.props.currentDate.toDateString()===(new Date(new Date().setDate(this.SundayDate.getDate()-7+index)).toDateString())){
		                			return this.renderHighlighted(day)
		                		}else{
		                			return this.renderDay(day,this.SundayDate,index,-7)
		                		}
		                	})
		                }
		        	    {
		                	days.map((day,index)=>{
		                		if (this.props.currentDate.toDateString()===(new Date(new Date().setDate(this.SundayDate.getDate()+index)).toDateString())){
		                			return this.renderHighlighted(day)
		                		}else{
		                			return this.renderDay(day,this.SundayDate,index,0)
		                		}
		                	})
		                }
		        	    {
		                	days.map((day,index)=>{
		                		if (this.props.currentDate.toDateString()===(new Date(new Date().setDate(this.SundayDate.getDate()+7+index)).toDateString())){
		                			return this.renderHighlighted(day)
		                		}else{
		                			return this.renderDay(day,this.SundayDate,index,+7)
		                		}
		                	})
		                }
		        	    {
		                	days.map((day,index)=>{
		                		if (this.props.currentDate.toDateString()===(new Date(new Date().setDate(this.SundayDate.getDate()+14+index)).toDateString())){
		                			return this.renderHighlighted(day)
		                		}else{
		                			return this.renderDay(day,this.SundayDate,index,+14)
		                		}
		                	})
		                }
		        	    {
		                	days.map((day,index)=>{
		                		if (this.props.currentDate.toDateString()===(new Date(new Date().setDate(this.SundayDate.getDate()+21+index)).toDateString())){
		                			return this.renderHighlighted(day)
		                		}else{
		                			return this.renderDay(day,this.SundayDate,index,+21)
		                		}
		                	})
		                }
		        	
	        	</ScrollView>
        	</View>
			)
	}
}