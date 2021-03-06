import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Image from 'react-native-image-progress';
import { dimensions, fontSizes, lineHeights, colors } from '../theme';
import FilmRating from './FilmRating';
import FilmShowtime from './FilmShowtime';

const GUTTER = dimensions.basePadding / 2;

const FilmDetail = ({ film }) => (
  <View style={styles.container}>
    <ScrollView>
      {!!film.tmdbImageId && (
        <Image
          style={styles.image}
          source={{
            uri: `https://image.tmdb.org/t/p/original/${film.tmdbImageId}.jpg`
          }}
        />
      )}
      <View style={styles.textContainer}>
        <View style={styles.statsContainer}>
          {!!film.year && <Text style={styles.stats}>Released in {film.year}</Text>}
          {!!film.tmdbRating && (
            <Text style={styles.stats}>
              Rating: <FilmRating rating={film.tmdbRating} />
            </Text>
          )}
        </View>
        <View style={styles.showtimesContainer}>
          <Text style={styles.showtimesHeader}>Showtimes:</Text>
          {film.showtimes.map((showtime, idx) => (
            <FilmShowtime showtime={showtime} style={styles.showtime} key={idx} />
          ))}
        </View>
        <View style={styles.separator} />
        <Text style={styles.synopsis}>{film.synopsis}</Text>
      </View>
    </ScrollView>
  </View>
);

export default FilmDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textContainer: {
    paddingVertical: GUTTER,
    paddingHorizontal: GUTTER * 2
  },
  image: {
    aspectRatio: 0.75,
    paddingBottom: GUTTER
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  stats: {
    fontSize: fontSizes.normal,
    lineHeight: lineHeights.normal,
    paddingVertical: GUTTER
  },
  showtimesContainer: {
    paddingVertical: GUTTER
  },
  showtimesHeader: {
    fontSize: fontSizes.normal,
    lineHeight: lineHeights.normal
  },
  showtime: {
    fontSize: fontSizes.small,
    lineHeight: lineHeights.small,
    paddingTop: GUTTER
  },
  synopsis: {
    fontSize: fontSizes.small,
    lineHeight: lineHeights.small,
    paddingVertical: GUTTER
  },
  separator: {
    backgroundColor: colors.concrete,
    height: 1,
    marginVertical: GUTTER
  }
});
