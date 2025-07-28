import styles from "./AvatarStatus.module.css";
import eAvatarPath from "../../assets/avatarExample.jpeg";

export const AvatarStatus = () => {
  return (
    <div className={styles.container}>
      <div className={styles.status} />
      <img className={styles.avatarImg} src={eAvatarPath} />
    </div>
  );
};
