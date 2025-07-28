import { AvatarStatus } from "../avatarStatus/AvatarStatus";
import styles from "./Profile.module.css";

export const Profile = () => {
  return (
    <div className={styles.container}>
      <AvatarStatus />
      <div className={styles.username}>USERNAME</div>
    </div>
  );
};
