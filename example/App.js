/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import SwipeTimeline from './src/SwipeTimeline.component';

import Colors from './src/resources/Colors'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const data=[
            {
              id:1,
              title:"Ammar Rajab",
              titleColor:Colors.Shiraz,
              description:'My first shot with the new camera, looks awesome',
              thumbnail:{uri:'https://ichef.bbci.co.uk/news/660/cpsprodpb/37B5/production/_89716241_thinkstockphotos-523060154.jpg'},
              photo:{uri:'https://assets.thesca.org/styles/840x480/s3/s3fs-public/field/image/SunsetRiver_Shutterstock_840x480.png'},
              time:'09:30',
              timeColor:Colors.Shiraz,
              swipeLeft:{
                enabled:true,
                color:Colors.Rebel,
                icon:{
                  name:'archive',type:'material',color:'#FFFFFF'
                }
              },
              swipeRight:{
                enabled:true,
                color:Colors.Salem,
                icon:{
                  name:'done',type:'material',color:'#FFFFFF'
                }
              },
              backgroundColor:Colors.Pomegranate,
              actions:[
                {
                  id:1,
                  name:'like2',type:'antdesign',color:Colors.Shiraz,value:2500
                },
                {
                  id:2,
                  name:'comment',type:'material',color:Colors.Shiraz,value:30
                },
                {
                  id:3,
                  name:'share',type:'material',color:Colors.Shiraz,value:1
                }
              ]
            },
            {
              id:2,
              title:"Sabina Markus",
              titleColor:Colors.Meteor,
              description:'I have a very long story here..\nit starts with interesting post about programming in React Native and doing UI stuff',
              thumbnail:{uri:'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg'},
              time:'09:30',
              timeColor:Colors.Meteor,
              swipeLeft:{enabled:true,color:Colors.Rebel,icon:{name:'close',type:'material',color:'#FFFFFF'}},
              swipeRight:{enabled:true,color:Colors.Geraldine,icon:{name:'done',type:'material',color:'#FFFFFF'}},
              backgroundColor:Colors.Blackberry,
              actions:[
                {
                  id:1,
                  name:'like2',type:'antdesign',color:Colors.Meteor,value:3
                },
                {
                  id:2,
                  name:'comment',type:'material',color:Colors.Meteor,value:1
                },
                {
                  id:3,
                  name:'share',type:'material',color:Colors.Meteor,value:2
                }
              ]
            },
            {
              id:3,
              title:"Sara Clark",
              titleColor:Colors.Shiraz,
              description:'What a beautiful day',
              thumbnail:{uri:'https://media.gettyimages.com/photos/beautiful-woman-posing-against-dark-background-picture-id638756792?s=612x612'},
              photo:{uri:'https://cdn.pixabay.com/photo/2018/10/30/16/06/water-lily-3784022__340.jpg'},
              time:'09:30',
              timeColor:Colors.Shiraz,
              swipeLeft:{
                enabled:true,
                color:Colors.Rebel,
                icon:{
                  name:'archive',type:'material',color:'#FFFFFF'
                }
              },
              swipeRight:{
                enabled:true,
                color:Colors.Salem,
                icon:{
                  name:'done',type:'material',color:'#FFFFFF'
                }
              },
              backgroundColor:Colors.Pomegranate,
              actions:[
                {
                  id:1,
                  name:'like2',type:'antdesign',color:Colors.Shiraz,value:3
                },
                {
                  id:2,
                  name:'comment',type:'material',color:Colors.Shiraz,value:5
                },
                {
                  id:3,
                  name:'share',type:'material',color:Colors.Shiraz,value:30
                }
              ]
            },
            {
              id:4,
              title:"Meg Simpson",
              titleColor:Colors.Shiraz,
              description:'I draw something.. feeling happy',
              thumbnail:{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdojgKGd6m4ZMuj2xl9MmydcNNtQdOA0OY6LmKeEkPAU8BRrt5'},
              photo:{uri:'http://ranartblog.com/imagespencil/lion-pencil-drawing.jpg'},
              time:'09:30',
              timeColor:Colors.Shiraz,
              swipeLeft:{
                enabled:true,
                color:Colors.Rebel,
                icon:{
                  name:'archive',type:'material',color:'#FFFFFF'
                }
              },
              swipeRight:{
                enabled:true,
                color:Colors.Salem,
                icon:{
                  name:'done',type:'material',color:'#FFFFFF'
                }
              },
              backgroundColor:Colors.Pomegranate,
              actions:[
                {
                  id:1,
                  name:'like2',type:'antdesign',color:Colors.Shiraz,value:300
                },
                {
                  id:2,
                  name:'comment',type:'material',color:Colors.Shiraz,value:32
                },
                {
                  id:3,
                  name:'share',type:'material',color:Colors.Shiraz,value:5
                }
              ]
            },
          ]

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{flex:1,width:'100%',height:'100%'}}>
        <SwipeTimeline
          data={data}
          itemKey={'id'}
          preview={false}
          dateStripe={{
            enabled:true,top:true,
            primaryColor:Colors.Blackberry,
            secondaryColor:Colors.Shiraz,
            fontColor:Colors.White,
            startDate:new Date(new Date().setDate(new Date().getDate()-5)),
            endDate:new Date(new Date().setDate(new Date().getDate()+5)),
            currentDate:new Date()
          }}
          onDateSelected={(date)=>alert(new Date(date))}
          onThumbnailPressed={(item)=>alert(item.title+" Thumbnail")}
          onCardPress={(item)=>alert(item.title+" Pressed")}
          onCardOpen={(toValue,item)=>alert(item.title+" Swipe to "+toValue)}
          onAction={(item,action)=>alert(item.title+" Action "+action.name)}
        />
      </View>
    );
  }
}

