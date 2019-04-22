import React from 'react';
import T from 'prop-types';
import { View, Image } from 'react-native';

// import Touchable from '../Touchable';
import i18n from '../../i18n';
import Text from '../Text/Text';
import s from './styles';

const messageImage = require('../../assets/png/message_image.png');

const RentItem = ({ isShowDetails }) => (
  <View style={s.container}>
    <View style={s.containerMessage}>
      <View style={s.image}>
        <Image style={s.image} source={messageImage} />
      </View>
      <View style={s.textContainer}>
        <View>
          <Text ellipsizeMode="tail" numberOfLines={1} gray>
            Pioneer XDJ-RX2 All-in-One Pioneer XDJ-RX2 All-in-One
            Pioneer XDJ-RX2 All-in-One
          </Text>
        </View>
        <View style={s.dateContainer}>
          <Text xxsmallSize gray>
            {'Dat: '}
          </Text>
          <Text xxsmallSize bold>
            08/12/2018 — 09/12/2018
          </Text>
        </View>
        <View style={s.totalPriceContainer}>
          <Text xxsmallSize gray>
            {'Total price: '}
          </Text>
          <Text xxsmallSize bold>
            $56
          </Text>
        </View>
      </View>
    </View>
    {isShowDetails && (
      <View style={s.containerDetails}>
        <Text bold>{i18n.t('inbox.bookingBreakdown')}</Text>
        <View style={s.dayPrice}>
          <Text gray>{i18n.t('inbox.pricePerDay')}</Text>
          <Text>$56</Text>
        </View>
        <View style={s.rentPeriod}>
          <Text gray>10/12/2018 - 11/12/2018</Text>
          <Text>{i18n.t('inbox.day')}</Text>
        </View>
        <View style={s.totalPrice}>
          <Text bold xmediumSize>
            {i18n.t('inbox.totalPrice')}
          </Text>
          <Text bold xmediumSize>
            $56
          </Text>
        </View>
      </View>
    )}
  </View>
);

RentItem.propTypes = {};

export default RentItem;