import React from 'react';
import { Controller, FormProvider } from 'react-hook-form';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { styles } from './hashtag-field-input.styles';
import { X } from 'react-native-feather';
import { styleTokens } from '../../../styles';

interface TitleFieldProps {
  tags: any[];
  control;
  setTagValue: React.Dispatch<React.SetStateAction<string>>;
  setTags: React.Dispatch<React.SetStateAction<any[]>>;
  tagValue: string;
  doNotShowTags?: boolean;
  saveTags?: any;
}

const HashtagField = (props: TitleFieldProps) => {
  let {
    tags,
    control,
    setTagValue,
    setTags,
    tagValue,
    doNotShowTags,
    saveTags,
  } = props;

  const deleteTags = position => {
    const tagsFiltered = tags.filter((_item, index) => index !== position);

    setTags(tagsFiltered);
  };
  return (
    <View>
      {!doNotShowTags && (
        <View style={styles.tagsContainer}>
          {tags.map((hashtags, index) =>
            hashtags ? (
              <View style={styles.tags} key={`${hashtags}+${index}`}>
                <View style={styles.textTags} key={`${index}-${hashtags}`}>
                  <Text key={`${index}+${hashtags}`}>{hashtags}</Text>
                </View>
                <TouchableOpacity
                  key={`${index}+${index}`}
                  onPress={() => {
                    deleteTags(index);
                  }}
                  style={styles.deleteButton}
                >
                  <X
                    width={10}
                    height={10}
                    stroke={styleTokens.colors.darkGray}
                  />
                </TouchableOpacity>
              </View>
            ) : (
              <></>
            ),
          )}
        </View>
      )}
      <Controller
        control={control as any}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => {
              onChange(value);
              setTagValue(value);
            }}
            placeholder={'Add a new tag!'}
            value={value}
            onEndEditing={() => {
              if (tagValue !== '' && value !== '') {
                setTags([...tags, tagValue]);
                if (doNotShowTags == true) {
                  saveTags(tagValue);
                }
              }
              onChange((value = ''));
            }}
          />
        )}
        name={'Tags'}
        defaultValue=""
      />
    </View>
  );
};
export default HashtagField;
