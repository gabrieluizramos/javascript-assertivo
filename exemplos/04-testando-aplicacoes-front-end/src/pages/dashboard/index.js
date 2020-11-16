// Default
import React, { useEffect } from 'react';

// Redux
import { useDispatch } from 'react-redux';
import {
  loadProfiles,
  deleteProfile,
  editUserProfile,
  editUserProfileCancel,
  updateUserProfile
} from '../../store/profiles/actions';
import { useProfiles } from '../../store/profiles/selectors';

import { logout } from '../../store/user/actions';
import { useAuthentication } from '../../store/user/selectors';

// Components
import { Logout as LogoutIcon } from '@styled-icons/heroicons-outline/Logout';
import { CloseOutline as CloseIcon } from '@styled-icons/evaicons-outline/CloseOutline';
import Avatar from '../../components/avatar';
import Carousel from '../../components/carousel';
import Button from '../../components/button';
import Card from '../../components/card';
import Form from '../../components/form';

// Schema
import { createSchema } from './schema';

// Styles
import * as S from './styles';

// Page
const DashboardPage = () => {
  const user = useAuthentication();
  const dispatch = useDispatch();
  const { profiles, editing } = useProfiles();
  const hasProfiles = profiles.length > 0;
  const isEditing = editing && !!editing.uid;

  useEffect(() => {
    dispatch(loadProfiles());
  }, []);

  const onClickLogout = () => {
    dispatch(logout());
  };

  const onClickDelete = (uid) => {
    dispatch(deleteProfile(uid));
  };

  const onClickEdit = (uid) => {
    dispatch(editUserProfile(uid));
  };

  const onCloseEditing = () => {
    dispatch(editUserProfileCancel())
  };

  const onSubmitEdit = (fields) => {
    dispatch(updateUserProfile(fields));
  };

  return hasProfiles && (
    <>
      <S.CarouselWrapper editing={isEditing}>
      <Carousel
          items={profiles}
          editable={user.admin}
          onClickDelete={onClickDelete}
          onClickEdit={onClickEdit}
        />
      </S.CarouselWrapper>
      <S.Logout>
        <Avatar src={user.info.avatar} />
        <S.Greetings>
          Olá, {user.info.name}
        </S.Greetings>
        <Button type="red" onClick={onClickLogout}>
          <LogoutIcon />
        </Button>
      </S.Logout>
      <S.Editor active={isEditing}>
        <Card spacing="double">
          <S.CloseButton>
            <Button onClick={onCloseEditing} round>
              <CloseIcon />
            </Button>
          </S.CloseButton>
          <S.EditorTitle>Editar dados de Perfil</S.EditorTitle>
          <S.Form>
            {isEditing && (
              <Form
                schema={createSchema(editing.information)}
                onSubmit={onSubmitEdit}
                validate
              />
            )}
          </S.Form>
        </Card>
      </S.Editor>
    </>
  );
};

export default DashboardPage;
