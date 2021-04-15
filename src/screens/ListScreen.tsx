import React from 'react';
import {StyleSheet, Text, FlatList, View, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {removeItem} from '../redux/reducer';

function ListScreen() {
  const listItems = useSelector(state => state.itemList);
  console.log({listItems});

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      {listItems.length !== 0 ? (
        <FlatList
          data={listItems}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.listItemContainer}>
              <Text style={styles.itemTitle} numberOfLines={1}>
                {item.name}
              </Text>

              <TouchableOpacity
                onPress={() => dispatch(removeItem(item.id))}
                style={styles.button}>
                <Text>Delete</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      ) : (
        <Text style={{fontSize: 30}}>Your list is empty.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },

  listItemContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 5,
    paddingRight: 5,
    justifyContent: 'space-between',
    width: '100%',
    borderBottomWidth: 0.25,
  },
  itemTitle: {
    fontSize: 22,
    fontWeight: '400',
  },
  button: {
    borderRadius: 8,
    backgroundColor: '#2ECC71',
    padding: 5,
  },
});

export default ListScreen;
