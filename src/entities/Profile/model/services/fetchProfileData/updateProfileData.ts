import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/storeProvider';
import { type Profile } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileData/getProfileData';
import { getAuthData } from 'entities/User';

// first response data type, second sending data type
export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/updateProfileData',
  async (_, { extra, rejectWithValue, getState }) => {
    const data = getProfileForm(getState());
    const user = getAuthData(getState());

    try {
      const response = await extra.api.put<Profile>(`/profile/${user?.id}`, data);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e: any) {
      return rejectWithValue(e.response.data.message || 'unexpected error');
    }
  }
);
