import { StyleSheet, StatusBar } from 'react-native';
import { colors, fontSizes, dimensions, theme } from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 325,
  },
  carouselBackgroundImage: {
    height: 325,
    width: '100%',
  },

  paginationContainerStyle: {
    right: 0,
    left: 0,
    top: 270,
    position: 'absolute',
  },

  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 10,
    marginHorizontal: 0,
    backgroundColor: colors.switch.activeIcon,
  },

  infoContainer: {
    marginTop: dimensions.indent * 0.75, // 12
    marginHorizontal: dimensions.indent,
  },

  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  priceContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginBottom: dimensions.indent / 2,
  },

  day: {
    marginBottom: 4,
  },

  availabilityContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleTextContainer: {
    marginBottom: dimensions.indent,
  },

  rating: {},

  containerTabView: {
    marginTop: StatusBar.currentHeight,
  },
  scene: {
    flex: 1,
  },

  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tab1: {
    flex: 1,
    justifyContent: 'center',
  },
  tab2: {
    flex: 1,
    justifyContent: 'center',
  },
  labelContainer: {
    padding: dimensions.indent,
  },
});
