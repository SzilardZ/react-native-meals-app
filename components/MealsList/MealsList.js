import { useNavigation } from '@react-navigation/native';
import { FlatList, StyleSheet, View } from 'react-native';

import MealItem from './MealItem';

const MealsList = ({ items }) => {
  const navigation = useNavigation();
  const navigateHandler = mealId => {
    navigation.navigate('MealDetail', { mealId: mealId });
  };

  const renderMealItem = ({ item }) => {
    return (
      <MealItem
        id={item.id}
        imageUrl={item.imageUrl}
        title={item.title}
        duration={item.duration}
        complexity={item.complexity}
        affordability={item.affordability}
        onPress={navigateHandler}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderMealItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
