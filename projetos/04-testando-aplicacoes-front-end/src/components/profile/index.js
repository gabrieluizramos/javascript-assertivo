import React from 'react';
import PropTypes from 'prop-types';

import { EditOutline as EditIcon } from '@styled-icons/evaicons-outline/EditOutline';
import { Trash2Outline as DeleteIcon } from '@styled-icons/evaicons-outline/Trash2Outline';

import Avatar from '../avatar';
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
  uid,
  editable,
  onClickDelete,
  onClickEdit
}) => (
  <S.Profile>
    <Card>
      <Avatar src={avatar} />
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
        <Button
          type="blue"
          round
          disabled={!editable}
          icon={<EditIcon />}
          onClick={() => onClickEdit(uid)}
          aria-label="editar"
        />
        <Button
          type="red"
          round
          disabled={!editable}
          icon={<DeleteIcon />}
          onClick={() => onClickDelete(uid)}
          aria-label="deletar"
        />
      </S.Actions>
    </Card>
  </S.Profile>
);

Profile.propTypes = {
  email: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  role: PropTypes.string.isRequired,
  editable: PropTypes.bool,
  uid: PropTypes.string.isRequired,
  onClickDelete: PropTypes.func,
  onClickEdit: PropTypes.func,
};

Profile.defaultProps = {
  avatar: null,
  editable: false,
  onClickDelete: () => {},
  onClickEdit: () => {},
};

export default Profile;
