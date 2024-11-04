import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

export default function GroupAvatars() {
  return (
    <>
    <AvatarGroup max={3}>
      <Avatar alt="Remy Sharp" src="/src/assets/imgs/unsplash-1.jpg" />
      <Avatar alt="Remy Sharp" src="/src/assets/imgs/unsplash-2.jpg" />
      <Avatar alt="Remy Sharp" src="/src/assets/imgs/unsplash-3.jpg" />
      <Avatar alt="Remy Sharp" src="/src/assets/imgs/unsplash-4.jpg" />
      </AvatarGroup>
    
      </>
  );
}
