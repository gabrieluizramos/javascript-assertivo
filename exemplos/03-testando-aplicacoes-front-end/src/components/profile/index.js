import React from 'react';
import PropTypes from 'prop-types';

import { QuestionMark as ProfileIcone } from '@styled-icons/open-iconic/QuestionMark';
import { EditOutline as EditIcon } from '@styled-icons/evaicons-outline/EditOutline';
import { Trash2Outline as DeleteIcon } from '@styled-icons/evaicons-outline/Trash2Outline';

import Card from '../card';
import Button from '../button';

import * as S from './styles';

const Profile = ({
  email,
  userName,
  name,
  lastName,
  avatar,
  role,
  editable
}) => {

  return (
    <S.Profile>
      <Card>
        <S.Figure>
          {!!avatar ? <img src={avatar} /> : <ProfileIcone />}
        </S.Figure>
        <S.Name>
          {name} {lastName}
        </S.Name>
        <S.Information>
          <S.Text>
            <S.Title>email</S.Title>
            <S.Data>{email}</S.Data>
          </S.Text>
          <S.Text>
            <S.Title>username</S.Title>
            <S.Data>{userName}</S.Data>
          </S.Text>
          <S.Text>
            <S.Title>role</S.Title>
            <S.Data>{role}</S.Data>
          </S.Text>
        </S.Information>
        <S.Actions>
          <Button type="blue" round disabled={!editable} icon={<EditIcon />} />
          <Button type="red" round disabled={!editable} icon={<DeleteIcon />} />
        </S.Actions>
      </Card>
    </S.Profile>
  );
}

Profile.propTypes = {
  email: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  role: PropTypes.string.isRequired,
  editable: PropTypes.bool,
};

Profile.defaultProps = {
  avatar: null,
  editable: false
};

export default Profile;
