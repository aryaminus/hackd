import React from 'react';
import commonStyles from '../styles/common';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  FlatList,
} from 'react-native';

import config from '../config/default';
import ListItem from './ListItem';

export default class Posts extends React.Component {
  constructor(props) {
    super(props);
  }

  showPost = (post) => this.props.navigation.navigate('Post', post);

  renderSeparator = () => (<View style={styles.rowSeperator} />);

  renderFooter = () => {
    if (!this.props.loadingMore) {
      return null;
    }

    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator animating />
      </View>
    );
  };

  onRefresh = () => {
    this.props.onRefresh();
  };

  onEndReached = () => {
    this.props.onEndReached();
  };

  render() {
    // If loading, render activity indicator
    if (this.props.isLoadingPosts) {
      return (
        <View style={commonStyles.center}>
          <ActivityIndicator />
        </View>
      );
    }
    // Otherwise render posts
    return (
      <View>
        <FlatList
          style={styles.fullHeight}
          data={this.props.data}
          extraData={this.props.loadingMore}
          keyboardShouldPersistTaps='always'
          keyExtractor={(item, index) => index}
          ItemSeparatorComponent={this.renderSeparator}
          ListFooterComponent={this.renderFooter}
          refreshing={this.props.refreshing}
          onRefresh={this.onRefresh}
          onEndReached={this.onEndReached}
          onEndReachedThreshold={0.5}
          renderItem={({ item }) => (
            <ListItem
              item={item}
              onPressItem={() => this.showPost(item)}
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  activityIndicator: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: config.colors.mediumGray,
  },
  rowSeperator: {
    height: 0.5,
    width: '100%',
    backgroundColor: '#EEEEEE',
    padding: 1,
  },
  fullHeight: {
    height: '100%',
  },
});
