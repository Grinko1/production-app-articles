export {
  getProfileData,
  getProfileForm,
  getProfileError,
  getProfileIsLoading,
  getProfileReadonly
} from './model/selectors/getProfileData/getProfileData';

export { ProfileCard } from './ui/ProfileCard/ProfileCard';

export { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';

export { profileActions, profileReducer } from './model/slices/profileSlice';

export { type ProfileSchema } from './model/types/profile';
