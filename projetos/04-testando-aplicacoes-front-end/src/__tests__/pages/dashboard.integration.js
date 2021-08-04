// Utilitários
import { screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../testUtils';

// Página
import DashboardPage from '../../pages/dashboard';

// Mensagens de Snackbar
import { MESSAGES } from '../../store/notification/actions';

// Mocks
import { profile, profileList } from '../../mocks/profile';
import * as client from '../../clients/http/profiles';
import * as auth from '../../clients/http/authentication';
jest.mock('../../clients/http/profiles');
jest.mock('../../clients/http/authentication');

describe('<DashboardPage />', () => {
  beforeEach(() => {
    client.getProfiles.mockResolvedValue(profileList);
    auth.isLoggedIn.mockReturnValue(true);
  });

  describe('Role USER', () => {
    beforeEach(() => {
      auth.getLoggedUser.mockReturnValueOnce(profile);
    });

    it('Deve renderizar completamente com o Carrossel de perfis', async () => {
      renderWithProviders(<DashboardPage />);

      const items = await screen.findAllByRole('listitem');
      expect(items.length).toEqual(profileList.length);
    });

    it('Não deve permitir cadastro/edição/remoção de perfil', async () => {
      renderWithProviders(<DashboardPage />);

      const modal = screen.queryByRole('dialog');
      expect(modal).not.toBeInTheDocument();

      const createButton = await screen.findByLabelText('cadastrar');
      expect(createButton).toBeDisabled();
      // userEvent.click(createButton);
      // expect(modal).not.toBeInTheDocument();

      const [editButton] = await screen.findAllByLabelText('editar');
      expect(editButton).toBeDisabled();
      // userEvent.click(editButton);
      // expect(modal).not.toBeInTheDocument();

      const [deleteButton] = await screen.findAllByLabelText('deletar');
      expect(deleteButton).toBeDisabled();
      // userEvent.click(deleteButton);
      // expect(modal).not.toBeInTheDocument();
    });
  })

  describe('Role ADMIN', () => {
    beforeEach(() => {
      auth.getLoggedUser.mockReturnValueOnce({ ...profile, role: 'ADMIN' });
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it('Deve renderizar completamente com o Carrossel de perfis', async () => {
      renderWithProviders(<DashboardPage />);

      const items = await screen.findAllByRole('listitem');
      expect(items.length).toEqual(profileList.length);
    });

    it('Abre/fecha a modal de cadastro de perfil', async () => {
      renderWithProviders(<DashboardPage />);

      const createButton = await screen.findByLabelText('cadastrar');
      expect(createButton).not.toBeDisabled();

      userEvent.click(createButton);
      expect(screen.queryByRole('dialog')).toBeInTheDocument();
      expect(screen.queryByText('Criar dados de Perfil')).toBeInTheDocument();

      const fechar = screen.getByLabelText('fechar');
      userEvent.click(fechar);
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      expect(screen.queryByText('Criar dados de Perfil')).not.toBeInTheDocument();
    });

    it('Abre/fecha a modal de edição de perfil', async () => {
      renderWithProviders(<DashboardPage />);

      const [editButton] = await screen.findAllByLabelText('editar');
      expect(editButton).not.toBeDisabled();

      userEvent.click(editButton);
      expect(screen.queryByRole('dialog')).toBeInTheDocument();
      expect(screen.queryByText('Editar dados de Perfil')).toBeInTheDocument();

      const fechar = screen.getByLabelText('fechar');
      userEvent.click(fechar);
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      expect(screen.queryByText('Editar dados de Perfil')).not.toBeInTheDocument();
    });

    describe('Cadastro de perfil', () => {
      it('Deve permitir o cadastro de perfil', async () => {
        const newProfile = {
          ...profile,
          userName: 'username-qualquer',
          email: 'email@qualquer.com',
          password: 'senha secreta'
        };
        client.createProfile.mockResolvedValueOnce(newProfile);
        renderWithProviders(<DashboardPage />);

        const createButton = await screen.findByLabelText('cadastrar');
        userEvent.click(createButton);

        userEvent.type(screen.getByPlaceholderText('email'), newProfile.email);
        userEvent.type(screen.getByPlaceholderText('usuario'), newProfile.userName);
        userEvent.type(screen.getByPlaceholderText('sua senha super secreta'), newProfile.password);
        userEvent.type(screen.getByPlaceholderText('nome'), newProfile.name);
        userEvent.type(screen.getByPlaceholderText('sobrenome'), newProfile.lastName);
        userEvent.selectOptions(screen.getByPlaceholderText('role'), screen.getByText('Usuário'));
        userEvent.click(screen.getByText('Confirmar'));

        await waitFor(() => {
          const items = screen.queryAllByRole('listitem');
          expect(items.length).toEqual(profileList.length + 1);
        });

        await waitFor(() => {
          jest.runOnlyPendingTimers();
          expect(screen.getByText(MESSAGES.CREATE.SUCCESS)).toBeInTheDocument();
          jest.runAllTimers();
        });

        const items = screen.queryAllByRole('listitem');
        const lastItem = items[items.length - 1];
        const queries = within(lastItem);
        expect(queries.getByText(newProfile.userName)).toBeInTheDocument();
        expect(queries.getByText(newProfile.email)).toBeInTheDocument();
      });

      it('Deve exibir um erro caso não consiga cadastrar um perfil', async () => {
        const newProfile = {
          ...profile,
          userName: 'username-qualquer',
          email: 'email@qualquer.com',
          password: 'senha secreta'
        };
        const error = 'Ocorreu um erro';
        client.createProfile.mockRejectedValueOnce(error);
        renderWithProviders(<DashboardPage />);

        const createButton = await screen.findByLabelText('cadastrar');
        userEvent.click(createButton);

        userEvent.type(screen.getByPlaceholderText('email'), newProfile.email);
        userEvent.type(screen.getByPlaceholderText('usuario'), newProfile.userName);
        userEvent.type(screen.getByPlaceholderText('sua senha super secreta'), newProfile.password);
        userEvent.type(screen.getByPlaceholderText('nome'), newProfile.name);
        userEvent.type(screen.getByPlaceholderText('sobrenome'), newProfile.lastName);
        userEvent.selectOptions(screen.getByPlaceholderText('role'), screen.getByText('Usuário'));
        userEvent.click(screen.getByText('Confirmar'));

        await waitFor(() => {
          const items = screen.queryAllByRole('listitem');
          expect(items.length).toEqual(profileList.length);
        });

        await waitFor(() => {
          jest.runOnlyPendingTimers();
          expect(screen.getByText(MESSAGES.CREATE.ERROR)).toBeInTheDocument();
          jest.runAllTimers();
        });
      });
    });

    describe('Atualização de perfil', () => {
      it('Deve permitir o atualização de perfil', async () => {
        const updatedProfile = {
          ...profile,
          userName: 'username-qualquer',
          email: 'email@qualquer.com',
          password: 'senha super secreta'
        };
        client.updateProfile.mockResolvedValueOnce(updatedProfile);
        renderWithProviders(<DashboardPage />);

        const [editButton] = await screen.findAllByLabelText('editar');
        userEvent.click(editButton);

        userEvent.clear(screen.getByDisplayValue(profile.email));
        userEvent.type(screen.getByPlaceholderText('email'), updatedProfile.email);
        userEvent.clear(screen.getByDisplayValue(profile.userName));
        userEvent.type(screen.getByPlaceholderText('usuario'), updatedProfile.userName);
        userEvent.type(screen.getByPlaceholderText('sua senha super secreta'), updatedProfile.password);
        userEvent.click(screen.getByText('Confirmar'));

        await waitFor(() => {
          const items = screen.queryAllByRole('listitem');
          expect(items.length).toEqual(profileList.length);
        });

        await waitFor(() => {
          jest.runOnlyPendingTimers();
          expect(screen.getByText(MESSAGES.UPDATE.SUCCESS)).toBeInTheDocument();
          jest.runAllTimers();
        });

        const [updatedUsername] = screen.queryAllByText(updatedProfile.userName)
        expect(updatedUsername).toBeInTheDocument();
        const [updatedEmail] = screen.queryAllByText(updatedProfile.email)
        expect(updatedEmail).toBeInTheDocument();
      });

      it('Deve exibir um erro caso não consiga atualizar um perfil', async () => {
        const updatedProfile = {
          ...profile,
          userName: 'username-qualquer',
          email: 'email@qualquer.com',
          password: 'senha super secreta'
        };
        client.updateProfile.mockRejectedValueOnce('Erro');
        renderWithProviders(<DashboardPage />);

        const [editButton] = await screen.findAllByLabelText('editar');
        userEvent.click(editButton);

        userEvent.clear(screen.getByDisplayValue(profile.email));
        userEvent.type(screen.getByPlaceholderText('email'), updatedProfile.email);
        userEvent.clear(screen.getByDisplayValue(profile.userName));
        userEvent.type(screen.getByPlaceholderText('usuario'), updatedProfile.userName);
        userEvent.type(screen.getByPlaceholderText('sua senha super secreta'), updatedProfile.password);
        userEvent.click(screen.getByText('Confirmar'));

        await waitFor(() => {
          const items = screen.queryAllByRole('listitem');
          expect(items.length).toEqual(profileList.length);
        });

        await waitFor(() => {
          jest.runOnlyPendingTimers();
          expect(screen.getByText(MESSAGES.UPDATE.ERROR)).toBeInTheDocument();
          jest.runAllTimers();
        });

        expect(screen.queryByText(updatedProfile.userName)).not.toBeInTheDocument();
        expect(screen.queryByText(updatedProfile.email)).not.toBeInTheDocument();
      });
    });

    describe('Remoção de perfil', () => {
      it('Deve permitir a remoção de perfil', async () => {
        client.deleteProfile.mockResolvedValueOnce();
        renderWithProviders(<DashboardPage />);

        const [deleteButton] = await screen.findAllByLabelText('deletar');
        userEvent.click(deleteButton);

        await waitFor(() => {
          const items = screen.queryAllByRole('listitem');
          // como todos os itens possuem o mesmo UID
          expect(items.length).toEqual(0);
        });

        await waitFor(() => {
          jest.runOnlyPendingTimers();
          expect(screen.getByText(MESSAGES.DELETE.SUCCESS)).toBeInTheDocument();
          jest.runAllTimers();
        });
      });

      it('Deve exibir um erro caso não consiga atualizar um perfil', async () => {
        client.deleteProfile.mockRejectedValueOnce();
        renderWithProviders(<DashboardPage />);

        const [deleteButton] = await screen.findAllByLabelText('deletar');
        userEvent.click(deleteButton);

        await waitFor(() => {
          const items = screen.queryAllByRole('listitem');
          expect(items.length).toEqual(profileList.length);
        });

        await waitFor(() => {
          jest.runOnlyPendingTimers();
          expect(screen.getByText(MESSAGES.DELETE.ERROR)).toBeInTheDocument();
          jest.runAllTimers();
        });
      });
    });
  });
});
