// Default
import React, { useEffect } from 'react';

// Redux
import { useDispatch } from 'react-redux';
import {
  loadProfiles,
  deleteProfile,
  editUserProfile,
  editUserProfileCancel,
  updateUserProfile,
  creatingUserProfile,
  creatingUserProfileCancel,
  createUserProfile
} from '../../store/profiles/actions';
import { useProfiles } from '../../store/profiles/selectors';
import { logout, checkAuthentication } from '../../store/user/actions';
import { useAuthentication } from '../../store/user/selectors';

// Components
import { Logout as LogoutIcon } from '@styled-icons/heroicons-outline/Logout';
import { CloseOutline as CloseIcon } from '@styled-icons/evaicons-outline/CloseOutline';
import { Add as AddIcon } from '@styled-icons/ionicons-outline/Add';
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
  const { profiles, editing, creating: isCreating } = useProfiles();
  const hasProfiles = profiles.length > 0;
  const isEditing = editing && !!editing.uid;
  const isFormOpen = isEditing || isCreating;

  useEffect(() => {
    dispatch(checkAuthentication());
  }, []);

  useEffect(() => {
    if(user.authenticated) {
      dispatch(loadProfiles());
    }
  }, [user]);

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
    isEditing && dispatch(editUserProfileCancel())
    isCreating && dispatch(creatingUserProfileCancel());
  };

  const onSubmit = (fields) => {
    isEditing && dispatch(updateUserProfile(fields));
    isCreating && dispatch(createUserProfile(fields));
  };

  const onClickAdd = () => {
    dispatch(creatingUserProfile());
  };

  return hasProfiles && (
    <>
      <S.CarouselWrapper editing={isFormOpen}>
      <Carousel
          items={profiles}
          editable={user.admin}
          onClickDelete={onClickDelete}
          onClickEdit={onClickEdit}
        />
      </S.CarouselWrapper>
      <S.Logout>
        <Avatar src={user.info.avatar} minimal />
        <S.Greetings>
          Olá, {user.info.name}
        </S.Greetings>
        <Button type="red" onClick={onClickLogout}>
          <LogoutIcon />
        </Button>
      </S.Logout>
      <S.Editor active={isFormOpen} role="dialog">
        <Card spacing="double">
          <S.CloseButton>
            <Button onClick={onCloseEditing} round aria-label="fechar">
              <CloseIcon />
            </Button>
          </S.CloseButton>
          <S.EditorTitle>
            {isCreating ? 'Criar' : 'Editar'} dados de Perfil
          </S.EditorTitle>
          <S.Form>
            {isFormOpen && (
              <Form
                schema={createSchema(editing.information)}
                onSubmit={onSubmit}
              />
            )}
          </S.Form>
        </Card>
      </S.Editor>
      <S.AddButton>
        <Button onClick={onClickAdd} round type="green" disabled={!user.admin} aria-label="cadastrar">
          <AddIcon />
        </Button>
      </S.AddButton>
    </>
  );
};

export default DashboardPage;
