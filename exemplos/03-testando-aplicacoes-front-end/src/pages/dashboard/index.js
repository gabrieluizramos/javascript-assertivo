// Default
import React, { useEffect } from 'react';

// Redux
import { useDispatch } from 'react-redux';
import { loadProfiles, deleteProfile } from '../../store/profiles/actions';
import { useProfiles } from '../../store/profiles/selectors';

import { logout } from '../../store/user/actions';
import { useAuthentication } from '../../store/user/selectors';

// Components
import { Logout as LogoutIcon } from '@styled-icons/heroicons-outline/Logout';
import Avatar from '../../components/avatar';
import Carousel from '../../components/carousel';
import Button from '../../components/button';

// Styles
import * as S from './styles';

// Page
const DashboardPage = () => {
  const user = useAuthentication();
  const dispatch = useDispatch();
  const { profiles } = useProfiles();
  const hasProfiles = profiles.length > 0;

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
    console.log(uid);
    console.log('edit');
  };

  return hasProfiles && (
    <>
      <Carousel
        items={profiles}
        editable={user.admin}
        onClickDelete={onClickDelete}
        onClickEdit={onClickEdit}
      />
      <S.Logout>
        <Avatar src={user.info.avatar} />
        <S.Greetings>
          Olá, {user.info.name}
        </S.Greetings>
        <Button type="red" onClick={onClickLogout}>
          <LogoutIcon />
        </Button>
      </S.Logout>
    </>
  );
};

export default DashboardPage;
