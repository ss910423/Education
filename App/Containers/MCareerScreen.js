import React, { Component } from 'react'
import { ScrollView, Text, Image } from 'react-native'
import { connect } from 'react-redux'

// Styles
import styles from './Styles/MCareerScreenStyle'
import { Images, Colors } from '../Themes'

class MCareerScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Your Career Path',
    drawerIcon: ({ tintColor }) => {
      return (
        <Image
          source={Images.career}
          style={{width: 36, height: 36, marginRight: 0}}
        />
      )
    },
  };

  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Text>MCareerScreen Container</Text>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MCareerScreen)
